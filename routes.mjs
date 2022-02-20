import db from './models/index.mjs';
import initBugsController from './controllers/bugsController.mjs';
import initFeaturesController from './controllers/featuresController.mjs';
// import your controllers here

export default function bindRoutes(app) {
  // initialize the controller functions here
  const BugsController = initBugsController(db);
  const featureController = initFeaturesController(db);

  // pass in the db for all callbacks
  app.get('/', BugsController.index);
  app.post('/', BugsController.post);
  app.get('/features', featureController.featureIndex);
  // define your route matchers here using app
}
