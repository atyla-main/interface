module.exports = {
  expose(file, member) {
    return ({
      "name": "Signature mandat",
      "description": "Signature du mandat de vente",
      "start" : true,
      "members": [
        {
          "firstname": member.firstName,
          "lastname": member.lastName,
          "email": member.email || "vincent@atyla.io",
          "phone": member.phone || "+33625841219",
          "fileObjects": [
            {
              "position": "191,77,346,139",
              "page": 4,
              "file": file
            }
          ]
        },
        {
          "user": "users/3d4e4e13-c0f2-4d42-ace4-f47ba0a34147",
          "fileObjects": [
            {
              "position": "412,77,568,139",
              "page": 0,
              "file": file
            }
          ]
        }
      ],
      "config": {
        "email": {
          "procedure.started": [
            {
              "subject": "You have a new procedure !",
              "message": "Hello {{recipient.name}} ! \n\n You have ben added to a procedure, please access it here : {{ components.button(\"Access to documents\", url) }}",
              "to": ["@members"]
            },
            {
              "subject": "John, created a procedure your API have.",
              "message": "The content of this email is totally awesome.",
              "to": ["vincent@atyla.io"]
            }
          ]
        }
      }
    })
  }
}
