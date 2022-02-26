import { Sequelize } from 'sequelize';
import allConfig from '../config/config.js';

import bugsModel from './bugs.mjs';
import featuresModel from './features.mjs';
import usersModel from './users.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// add your model definitions to db here
db.Bug = bugsModel(sequelize, Sequelize.DataTypes);
db.Feature = featuresModel(sequelize, Sequelize.DataTypes);
db.User = usersModel(sequelize, Sequelize.DataTypes);

// one to many one
// one feature can be inside many bugs
db.Bug.belongsTo(db.Feature);
db.Feature.hasMany(db.Bug);

db.Bug.belongsTo(db.User);
db.User.hasMany(db.Bug);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
