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
      const data = [request.body.problem, request.body.errorText, request.body.commit];
      console.log(data);
      const addBug = await db.Bug.create({
        problem: request.body.problem,
        error_text: request.body.errorText,
        commit: request.body.commit,
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

  return {
    index, oneBug, post,
  };
}
