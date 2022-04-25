#! /usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const figlet = require('figlet')
program
  // 定义命令和参数
  .command('create <app-name>')
  .description('create a new project')
  // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
  .option('-f, --force', 'overwrite target directory if it exist')
  .action((name, options) => {
    // 打印执行结果
      console.log('name:',name,'options:',options)
      require('../lib/create.js')(name, options)
  })
  
program
   // 配置版本号信息
  .version(`v${require('../package.json').version}`)
  .usage('<command> [option]')

program
  .on('--help',()=>{
      console.log('\r\n' + figlet.textSync('oxygen', {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 80,
      whitespaceBreak: true
    }));
  })
// 解析用户执行命令传入参数
program.parse(process.argv);
