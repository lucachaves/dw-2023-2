import 'bootstrap';
import 'iconify-icon';
import HostTable from './components/HostTable';
import API from './services/api';
import Auth from './lib/auth';

import 'bootstrap/dist/css/bootstrap.css';

window.signout = Auth.signout;

if (Auth.isAuthenticated()) {
  const hosts = await API.read('hosts');

  for (const host of hosts) {
    HostTable.insert(host);
  }
}
