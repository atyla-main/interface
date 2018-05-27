function attributes(user) {
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    token: user.token,
    source: user.source,
    stage: user.stage,
    gender: user.gender,
    birthDate: user.birthDate,
    birthCity: user.birthCity,
    phone: user.phone,
    citizenship: user.citizenship,
    country: user.country,
    address: user.address,
    zipCode: user.zipCode,
    city: user.city,
    state: user.state,
    optIn: user.optIn
  }
}

function relationships(roles) {
  var data = [];

  roles.forEach(role => {
    data.push({
      id: role.id,
      type: 'roles'
    });
  });

  return {
    roles: {
      data: data
    }
  }
}

module.exports = {
  async payload(user) {
    return {
      data: {
        id: user.id,
        type: 'users',
        attributes: attributes(user),
        relationships: relationships(await user.getRoles())
      }
    }
  },

  async index_payload(users) {
    var data = [];

    for (var user of users) {
      data.push({
        id: user.id,
        type: 'users',
        attributes: attributes(user),
        relationships: relationships(await user.getRoles())
      })
    }

    return {
      data: data
    }
  }
}
