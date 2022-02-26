export default function initBugsController(db) {
  const index = async (request, response) => {
    try {
      response.render('index');
    } catch (error) {
      console.log(error);
    }
  };

  const oneBug = async (req, res) => {
    try {
      const bug = await db.Bug.findOne({ where: { id: req.params.id } });
      res.send({ bug });
    } catch (error) {
      console.log(error);
    }
  };

  const post = async (request, response) => {
    try {
      const data = [request.body.problem, request.body.errorText, request.body.feature_id];
      console.log(typeof request.body.feature_id);
      const featureId = parseInt(request.body.feature_id, 10);
      const UserId = parseInt(request.body.user_id, 10);

      console.log(data);
      const addBug = await db.Bug.create({
        problem: request.body.problem,
        error_text: request.body.errorText,
        feature_id: featureId,
        user_id: UserId,
        created_at: Date.now(),
        updated_at: Date.now(),
      });
      console.log(addBug.id);
      const findCreatedBug = await db.Bug.findAll({
        where: {
          id: addBug.id,
        },
      });

      response.send(findCreatedBug);
    } catch (ex) {
      console.log(ex);
    }
  };

  const getAllBugs = async (request, response) => {
    const allBugs = await db.Bug.findAll();

    response.send({ allBugs });
  };

  return {
    index, oneBug, post, getAllBugs,
  };
}
