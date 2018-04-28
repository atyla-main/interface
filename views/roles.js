function attributes(role) {
  return {
    identifier: role.identifier
  }
}

function relationships(role) {
  return {
    user: {
      data: {
        id: role.userId,
        type: 'users'
      }
    }
  }
}

module.exports = {
  payload(role) {
    return {
      data: {
        id: role.id,
        type: 'roles',
        attributes: attributes(role),
        relationships: relationships(role)
      }
    }
  },
  index_payload(roles) {
    var data = [];

    roles.forEach(role => {
      data.push({
        id: role.id,
        type: 'roles',
        attributes: attributes(role),
        relationships: relationships(role)
      });
    });

    return {
      data: data
    }
  }
}
