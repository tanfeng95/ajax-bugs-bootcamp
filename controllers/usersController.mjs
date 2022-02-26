export default function initUsersController(db) {
  const getUserById = async (request, response) => {
    try {
      console.log('sadasdasds');

      const getUser = await db.User.findAll(
        {
          where: {
            email: request.body.email,
          },
        },
      );

      console.log(getUser);

      response.send({ getUser });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getUserById,
  };
}
