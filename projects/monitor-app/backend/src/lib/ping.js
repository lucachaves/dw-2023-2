// import util from 'node:util';
// import { exec } from 'node:child_process';
import ping from 'ping';

// const execAsync = util.promisify(exec);

export async function getPing(host, count = 3) {
  // const { stdout } = await execAsync(`ping -c 1 ${host}`);

  // return stdout;

  let res = await ping.promise.probe(host, { min_reply: count });

  return res;
}
