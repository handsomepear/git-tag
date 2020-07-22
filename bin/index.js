#! /usr/bin/env node

// prod-07212008 规范了tagName
const minimist = require('minimist');
const shell = require('shelljs');
const moment = require('moment');
// 获取当前时间
const tagName = moment().format('MMDDHHmm');
// 获取命令参数
const tagArgs = minimist(process.argv.slice(2));
const preEnv = ['test', 'prod', 'alpha'];
const env = tagArgs._[0] || 'prod'; // 获取当前env
if (!preEnv.includes(env)) {
  shell.echo(`Error: ${env} env is not support`);
  shell.exit(1);
}
// 执行 git tag 命令
shell.exec(`git tag -a ${env}-${tagName} -m ${tagArgs.m} `, function (code, output) {
  if (code !== 0) {
    shell.echo('Error: Git tag failed');
    shell.exit(0);
  }
  shell.echo(`Tag: ${env}-${tagName} success`);
  shell.exec('git tag');
});
