import 'bootstrap';
import 'iconify-icon';
import HostTable from './components/HostTable';
import API from './services/api';
import Auth from './lib/auth';

import 'bootstrap/dist/css/bootstrap.css';

window.signout = Auth.signout;

function loadSubmitHandler() {
  const form = document.querySelector('form');

  form.onsubmit = async function (event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;

    const address = document.querySelector('#address').value;

    const host = { name, address };

    const newHost = await API.create('/hosts', host);

    HostTable.insert(newHost);

    form.reset();

    document.querySelector('#close-offcanvas').click();
  };
}

if (Auth.isAuthenticated()) {
  const hosts = await API.read('hosts');

  for (const host of hosts) {
    HostTable.insert(host);
  }

  loadSubmitHandler();
}
