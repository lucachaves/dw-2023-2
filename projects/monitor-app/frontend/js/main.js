import 'bootstrap';
import 'iconify-icon';
import HostTable from './components/HostTable';
import API from './services/api';

import 'bootstrap/dist/css/bootstrap.css';

const hosts = await API.read('hosts');

for (const host of hosts) {
  HostTable.insert(host);
}
