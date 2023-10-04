import 'bootstrap';
import { hosts } from './data';
import HostTable from './components/HostTable';
import HostForm from './components/HostForm';

import 'bootstrap/dist/css/bootstrap.css';

for (const host of hosts) {
  HostTable.insert(host);
}

window.handleSubmit = HostForm.handleSubmit;
