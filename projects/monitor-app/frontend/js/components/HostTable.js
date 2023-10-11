function insert(host) {
  const tbody = document.querySelector('table tbody');

  const row = `<tr id="host-${host.id}">
      <td>${host.name}</td>
      <td>${host.address}</td>
      <td>
        <iconify-icon icon="bx:stopwatch"></iconify-icon>
        <iconify-icon class="ms-4" icon="bx:trash"></iconify-icon>
      </td>
    </tr>`;

  tbody.insertAdjacentHTML('beforeend', row);
}

export default { insert };
