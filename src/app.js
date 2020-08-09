const { Command } = require('commander');
const program = new Command();
program.version('0.0.1');

program.option('-d, --dir', 'add folder to serve', '01');

program.parse(process.argv);

console.log(`directory: ${program.d}`);
