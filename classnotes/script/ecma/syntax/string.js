// String ', ", `
console.log('DSK01LB65-JP');
// console.log("DSK01LB65-JP");
console.log(`DSK01LB65-JP`);

// Concat
// IP: 192.168.0.1
// Mask: 255.255.255.0
const address = '192.168.0.1';
const mask = '255.255.255.0';

console.log('IP: ' + address + '\nMask: ' + mask);

// Template literals / Template strings
// multi-line strings
// string interpolation
console.log(`IP: address\nMask: mask`);
console.log(`IP: ${address}\nMask: ${mask}`);

const host = `IP: ${address}
Mask: ${mask}`;

console.log(host);

const hosts = [
  ['192.168.0.1', '255.255.255.0'],
  ['192.168.0.2', '255.255.255.0'],
  ['192.168.0.3', '255.255.255.0'],
];

const hostsString = hosts
  .map(([address, mask]) => `IP: ${address}\nMask: ${mask}`)
  .join('\n');

console.log(hostsString);

// Array of characters (immutable)
const hostname = 'DSK01LB65-JP';

console.log(hostname[0]);

hostname[0] = 'F';

console.log(hostname);

// Object String

// String.length
console.log(hostname.length);

// String.split / Array.join
console.log('192.168.0.1, 192.168.0.2, 192.168.0.3'.split(', '));

console.log('192.168.0.1, 192.168.0.2, 192.168.0.3'.split(', ').join('\n'));

// String.toLowerCase
console.log(hostname.toLowerCase());

// String.includes
const hostInfo = `IP: 192.168.0.3, Mask: 255.255.255.0`;

console.log(hostInfo.includes('255.255.255'));

// String.match
console.log(hostInfo.match(/\d+\.\d+\.\d+\.\d+/));

for (const match of hostInfo.matchAll(/\d+\.\d+\.\d+\.\d+/g)) {
  console.log(match);
}

for (const [address] of hostInfo.matchAll(/\d+\.\d+\.\d+\.\d+/g)) {
  console.log(address);
}

// String.padStart
// DSK01LB65-JP => DSK001LB065-JP
const desktop = 1;
const lab = 65;
const campus = 'jp';

function formatNumber(number, maxLength = 3, fillString = '0') {
  return String(number).padStart(maxLength, fillString);
}

console.log(`DSK${formatNumber(desktop)}LB${formatNumber(lab)}-${campus}`);
