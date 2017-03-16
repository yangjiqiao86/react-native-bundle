'use strict';

const fs = require('fs');
const path = require('path');
const Q = require('q');
const chalk = require('chalk');
const shell = require('shelljs');
const bundleDir = path.join(__dirname, '..');
const projectDir = path.join(__dirname, '..', '..', '..');

/**
 * 复制bundle文件到项目bin目录
 */
function copyBundle() {
  let deferred = Q.defer();

  let command = [
    'mkdir -p ' + projectDir + '/bin',
    'cp -rf ' + bundleDir + '/src/bin/bundle' + ' ' + projectDir + '/bin/bundle'
  ].join(' && ');

  shell.exec(command, (code, stdout, stderr) => {
    if (code === 0) {
      console.log(chalk.cyan('Bundle copied!'));
      deferred.resolve();
    } else {
      deferred.reject(stderr);
    }
  });

  return deferred.promise;
}

/**
 * 添加Npm bin
 */
function addNpmBin() {
  let deferred = Q.defer();
  let projectPkg = path.join(projectDir, 'package.json');

  if (fs.existsSync(projectPkg)) {
    let pkg = JSON.parse(fs.readFileSync(projectPkg, 'utf8'));

    pkg.bin = pkg.bin || {};
    pkg.bin.bundle = './bin/bundle';
    fs.writeFileSync(projectPkg, JSON.stringify(pkg, null, 2));
    console.log(chalk.cyan('Bundle command added!'));
    deferred.resolve();
  } else {
    deferred.reject('Could not find package.json!');
  }

  return deferred.promise;
}

copyBundle()
  .then(addNpmBin)
  .then(() => {
    console.log(chalk.green('Bundle install success!'));
  })
  .catch((error) => {
    console.log(chalk.red(error));
  });
