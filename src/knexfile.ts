import path from 'path'


module.exports = {
    // client: 'sqlite3',
    // connection: {
    //   filename: path.resolve(__dirname,  'database', 'database.sqlite3'),
    // },
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'nodets'
    },
    migrations: {
      directory: path.resolve(__dirname,  'database', 'migrations'),
    },
    // useNullAsDefaund: true,
};
