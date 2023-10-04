const hosts = [];

function hasHost({ address }) {
  return hosts.some((host) => host.address === address);
}

function hostId({ address }) {
  return address.replaceAll('.', '');
}

function insert(host) {
  if (!hasHost(host)) {
    hosts.push(host);

    const tbody = document.querySelector('table tbody');

    const row = `<tr id="host-${hostId(host)}">
        <td>${host.name}</td>
        <td>${host.address}</td>
        <td>${host.version}</td>
        <td>
          <span class="icon-trash" onclick="handleRemoveHost('host-${hostId(
            host
          )}')">
            <iconify-icon icon="ph:trash"></iconify-icon>
          </span>
        </td>
      </tr>`;

    tbody.insertAdjacentHTML('beforeend', row);
  }
}

function handleRemoveHost(host) {
  const [, id] = host.split('-');

  const hostIndex = hosts.findIndex((host) => hostId(host) === id);

  hosts.splice(hostIndex, 1);

  const hostRow = document.querySelector(`#${host}`);

  hostRow.remove();
}

export default { insert, handleRemoveHost };
