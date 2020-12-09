function userController(User) {
  function getMethod(req, res) {
    const query = {};
    function findCallback(errorFindUser, user) {
      return errorFindUser ? res.send(errorFindUser) : res.json(user);
    }
    User.find(query, findCallback);
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
    const query = { uid: body.uid };
    User.findOneAndUpdate(query, body, {
      upsert: true, useFindAndModify: false,
    }, (errorFindUser, userModified) => (
      errorFindUser
        ? res.send(errorFindUser)
        : res.json(userModified)
    ));
  }

  return {
    getMethod, deleteMethod, putMethod, postMethod,
  };
}

module.exports = userController;
