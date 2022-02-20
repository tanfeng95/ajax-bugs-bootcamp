import { Sequelize } from 'sequelize';
import allConfig from '../config/config.js';

import bugsModel from './bugs.mjs';
import featuresModel from './features.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// add your model definitions to db here
db.Bug = bugsModel(sequelize, Sequelize.DataTypes);
db.Feature = featuresModel(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
