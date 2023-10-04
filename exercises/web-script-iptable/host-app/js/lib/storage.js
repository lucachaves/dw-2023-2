const hosts = [];

function hasHost({ id }) {
  return hosts.some((host) => host.id === id);
}

function create(host) {
  hosts.push(host);
}

function remove(id) {
  const hostIndex = hosts.findIndex((host) => host.id === id);

  hosts.splice(hostIndex, 1);
}

export default { hasHost, create, remove };
