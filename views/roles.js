function attributes(role) {
  return {
    identifier: role.identifier
  }
}

function relationships(users) {
  var data = [];

  users.forEach(user => {
    data.push({
      id: user.uuid,
      type: 'users'
    });
  });

  return {
    users: {
      data: data
    }
  }
}

module.exports = {
  async payload(role) {
    return {
      data: {
        id: role.id,
        type: 'roles',
        attributes: attributes(role),
        relationships: relationships(await role.getUsers())
      }
    }
  },

  async index_payload(roles) {
    var data = [];

    for (var role of roles) {
      data.push({
          id: role.id,
          type: 'roles',
          attributes: attributes(role),
          relationships: relationships(await role.getUsers())
        });
    }

    return {
      data: data
    }
  }
}
