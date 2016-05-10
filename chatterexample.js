
Chatter.configure({
    nickProperty: "emails.0.address",
    avatarProperty: "avatar"
});

if (Meteor.isClient) {

}

if (Meteor.isServer) {
    Accounts.onCreateUser(function(options, user) {
        user.firstName = options.firstName;
        user.lastName = options.lastName;
        user.avatar = "http://localhost:3000/packages/jorgeer_chatter-semantic/public/images/avatar.jpg";
        return user;
    });

    // const fun_and_gigggles = Chatter.addRoom({
    //   name: "Fun and Giggles",
    //   description: "A room to kid around"
    // });
    // const dragons_and_dungeons = Chatter.addRoom({
    //   name: "Dragons & Dungeons",
    //   description: "A world of fantasy"
    // });
    // const kristian = Meteor.users.findOne({_id: "H7zX4HJhqt9XYtPhN"});
    // const test = Meteor.users.findOne({_id: "G59qLzorwpDYQCfhR"});

    // if (kristian != undefined) {
    //   const kristianId = kristian._id;

    //   Chatter.addUser({
    //     userId: kristianId,
    //     userType: "admin"
    //   });

    //   Chatter.addUserToRoom({
    //     userId: kristianId,
    //     roomId: fun_and_gigggles
    //   });

    //   Chatter.addUserToRoom({
    //     userId: kristianId,
    //     roomId: dragons_and_dungeons
    //   });

    // }
    // if (test != undefined) {
    //   const testId = test._id;

    //   Chatter.addUser({
    //     userId: testId
    //   }, function(error, res) {
    //     console.log(error);
    //   });

    //   Chatter.addUserToRoom({
    //     userId: testId,
    //     roomId: dragons_and_dungeons
    //   });
    // }
}

