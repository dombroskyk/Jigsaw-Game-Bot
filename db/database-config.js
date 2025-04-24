module.exports = {
    development: {
        username: process.env.SEQUELIZE_DB_USER,
        password: process.env.SEQUELIZE_DB_PASSWORD,
        database: "Jigsaw_Dev",
        host: "localhost",
        dialect: "sqlite"
    },
    production: {
        username: process.env.SEQUELIZE_DB_USER,
        password: process.env.SEQUELIZE_DB_PASSWORD,
        database: "Jigsaw_Prod",
        host: "localhost",
        dialect: "sqlite"
    }
}