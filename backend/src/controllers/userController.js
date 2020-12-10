function userController(User) {
  function getMethod(req, res) {
    console.log(req);
    const { userEmail } = req.query;
    const query = { email: userEmail };
    function findCallback(errorFindUser, user) {
      return errorFindUser ? res.send(errorFindUser) : res.json(user);
    }
    User.findOne(query, findCallback);
  }

  function deleteMethod({ body }, res) {
    const query = body._id;
    function deleteCallback(errorDeleteUser, removedUser) {
      return errorDeleteUser ? res.send(errorDeleteUser) : res.json(removedUser);
    }
    User.findByIdAndRemove(query, body, deleteCallback);
  }

  function putMethod({ body }, res) {
    const query = body._id;
    function putCallback(errorFindUser, updatedUser) {
      return errorFindUser ? res.send(errorFindUser) : res.json(updatedUser);
    }
    User.findByIdAndUpdate(query, body, putCallback);
  }

  function postMethod({ body }, res) {
    console.log(body);
    const query = { email: body.email };
    User.findOneAndUpdate(query, body, {
      new: true, upsert: true, useFindAndModify: false,
    }, (errorFindUser, userModified) => (
      errorFindUser
        ? res.send(errorFindUser)
        : res.send(userModified)
    ));
  }

  return {
    getMethod, deleteMethod, putMethod, postMethod,
  };
}

module.exports = userController;
