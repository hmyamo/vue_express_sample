module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'vue_sample',
    user: process.env.DB_USER || 'vue_sample',
    password: process.env.DB_PASS || 'vue_sample',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './vue_sample.sqlite'
    }
  }
}
