const Sequelize = require('sequelize')
const sequelize = new Sequelize (process.env.DATABASE_URL || 'postgres://localhost/sandwich_db')

const Sandwich = sequelize.define('sandwich', {
  name: {
    type: Sequelize.STRING,
    unique: true
  }
})

const syncAndSeed = async () => {
  try {
    await sequelize.sync({ force: true })
    await Sandwich.create({ name: 'Popeyes Spicy Chicken Sandwich'})
    await Sandwich.create({ name: 'McDonalds Chicken Sandwich'})
    await Sandwich.create({ name: 'Shake Shack Hot Chicken Sandwich'})
    await Sandwich.create({ name: 'Chick-Fil-A Spicy Chicken Sandwich'})
  }
  catch (ex) {
    console.log(ex)
  }
}

module.exports = {
  models: {
    Sandwich
  },
  syncAndSeed
};