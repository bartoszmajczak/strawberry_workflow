let getUsersId = (request, response) => {
  let { id } = request.params;

  response.json({
    id,
    name: 'Bartosz'
  });
}

module.exports = {
  getUsersId
};