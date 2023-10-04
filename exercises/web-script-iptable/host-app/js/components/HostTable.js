function insert(host) {
  const tbody = document.querySelector('table tbody');

  const row = `<tr>
      <td>${host.name}</td>
      <td>${host.address}</td>
      <td>${host.version}</td>
    </tr>`;

  tbody.insertAdjacentHTML('beforeend', row);
}

export default { insert };
