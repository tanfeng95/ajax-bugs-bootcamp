export default function initFeaturesController(db) {
  const featureIndex = async (request, response) => {
    try {
      const getFeatures = await db.Feature.findAll();
      // console.log(getFeatures);
      response.send({ getFeatures });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    featureIndex,
  };
}
