export function HostTable(hosts) {
  let rows = '';

  for (const host of hosts) {
    const row = `<tr>
      <td>${host.name}</td>
      <td>${host.address}</td>
      <td>${host.version}</td>
    </tr>`;

    rows += row;
  }

  const tbody = document.querySelector('table tbody');

  tbody.innerHTML = rows;
}
