function attributes(user) {
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    token: user.token
  }
}

function relationships(user) {
  if (user.roles && user.roles.length > 0) {
    var data = [];

    user.roles.forEach(role => {
      data.push({
        id: role.id,
        type: 'users'
      })
    });
    return {
      roles: {
        data: data
      }
    }
  }
  return {};
}

module.exports = {
  payload(user) {
    return {
      data: {
        id: user.id,
        type: 'users',
        attributes: attributes(user),
        relationships: relationships(user)
      }
    }
  },
  index_payload(users) {
    var data = [];

    users.forEach(user => {
      data.push({
        id: user.id,
        type: 'users',
        attributes: attributes(user),
        relationships: relationships(user)
      });
    });

    return {
      data: data
    }
  }
}
