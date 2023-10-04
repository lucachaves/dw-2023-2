import Storage from '../lib/storage';

function insert(host) {
  if (!Storage.hasHost(host)) {
    Storage.create(host);

    const tbody = document.querySelector('table tbody');

    const row = `<tr id="host-${host.id}">
        <td>${host.name}</td>
        <td>${host.address}</td>
        <td>${host.version}</td>
        <td>
          <span class="icon-trash" onclick="handleRemoveHost('host-${host.id}')">
            <iconify-icon icon="ph:trash"></iconify-icon>
          </span>
        </td>
      </tr>`;

    tbody.insertAdjacentHTML('beforeend', row);
  }
}

function handleRemoveHost(hostId) {
  if (confirm('Deseja remover o host?')) {
    const id = hostId.replace('host-', '');

    Storage.remove(id);

    const hostRow = document.querySelector(`#${hostId}`);

    hostRow.remove();
  }
}

export default { insert, handleRemoveHost };
