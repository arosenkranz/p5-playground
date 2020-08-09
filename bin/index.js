#!/usr/bin/env node
const program = require('commander');
const { spawn } = require('child_process');
program
  .usage('[options] <directory>')
  .requiredOption('-d, --dir <directory>', 'directory')
  .option('-b, --build', 'build', false)
  .parse(process.argv);

const { dir, build } = program;

const p5Process = spawn('parcel', [build ? 'build' : '', `./src/${dir}/index.html`, '--out-dir', `./dist/${dir}`]);

p5Process.on('exit', (code, signal) => {
  console.log('child process exited with ' + `code ${code} and signal ${signal}`);
});

p5Process.stdout.on('data', (data) => {
  console.log(data);
});

p5Process.stderr.on('data', (data) => {
  console.error(data);
});
