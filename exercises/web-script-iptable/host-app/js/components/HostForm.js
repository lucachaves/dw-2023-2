import HostTable from './HostTable';

function handleSubmit(event) {
  event.preventDefault();

  const form = document.querySelector('form');

  const name = document.querySelector('#name').value;

  const address = document.querySelector('#address').value;

  const version = document.querySelector('#version').value;

  const host = { name, address, version };

  HostTable.insert(host);

  form.reset();
}

export default { handleSubmit };
