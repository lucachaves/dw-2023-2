import API from '../services/api';
import { updateLineChart } from './Chart';

function insert(host) {
  const tbody = document.querySelector('table tbody');

  const row = `<tr id="host-${host.id}">
      <td>${host.name}</td>
      <td>${host.address}</td>
      <td>
        <iconify-icon class="stopwatch" icon="bx:stopwatch"></iconify-icon>
        <!-- <iconify-icon class="ms-4" icon="bx:trash"></iconify-icon> -->
        <iconify-icon class="loading hidden" icon="line-md:loading-loop"></iconify-icon>
      </td>
    </tr>`;

  tbody.insertAdjacentHTML('beforeend', row);

  const rowTag = document.querySelector(`tr#host-${host.id}`);

  const stopWatchIcon = rowTag.querySelector('.stopwatch');

  const loadingIcon = rowTag.querySelector('.loading');

  stopWatchIcon.onclick = async function () {
    loadingIcon.classList.remove('hidden');

    const latencies = await API.create(`/hosts/${host.id}/reachabilities`);

    const times = latencies.map((latency) => latency.value);

    updateLineChart(times);

    loadingIcon.classList.add('hidden');
  };
}

export default { insert };
