import util from 'node:util';
import { exec } from 'node:child_process';

const execAsync = util.promisify(exec);

export async function ping(host, count = 3) {
  const command = `ping -c ${count} ${host}`;

  const { stdout } = await execAsync(command);

  return stdout;
}
