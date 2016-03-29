if (Meteor.isClient) {
}

if (Meteor.isServer) {
  Accounts.onCreateUser(function(options, user) {
    user.firstName = options.firstName;
    user.lastName = options.lastName;
    user.avatar = "http://localhost:3000/packages/jorgeer_chatter-semantic/public/images/avatar.jpg";
    return user;
  });
}

Chatter.configure({
  nickProperty: "emails.0.address",
  avatarProperty: "avatar"
});
