const { program } = require('commander');
const { prompt } = require('inquirer');
const {addUser,findUser,updateUser,deleteUser,listUser} = require('./index')

const form = [
    {
      type: 'input',
      name: 'nama',
      message: 'Nama'
    },
    {
      type: 'input',
      name: 'usia',
      message: 'Usia'
    },
    {
      type: 'input',
      name: 'alamat',
      message: 'Alamat'
    },
    {
     type:'input',
     name:'jenis_kelamin',
     message:'Jenis Kelamin'
    }
  ];

program 
  .version('1.0.0')
  .description('CLI MONGODB NODE JS')

// Add Command
program
  .command('add')
  .alias('a')
  .description('Add User')
  .action(() => {
    prompt(form).then(jawaban => addUser(jawaban));
  });

// Find Command
program
  .command('find <name>')
  .alias('f')
  .description('Find User')
  .action(name => findUser(name));

// Update Command
program
  .command('update <nama>')
  .alias('u')
  .description('Update User')
  .action(id => {
    prompt(form).then(jawaban => updateUser(id, jawaban));
  });

// Remove Command
program
  .command('delete <nama>')
  .alias('d')
  .description('Delete User')
  .action(id => deleteUser(id));

// List Command
program
  .command('list')
  .alias('l')
  .description('List User')
  .action(() => listUser());

program.parse(process.argv);