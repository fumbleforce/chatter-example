
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

    // const fun_and_gigggles = Chatter.addRoom("Fun and Giggles");
    // const dragons_and_dungeons = Chatter.addRoom("Dragons & Dungeons");

    // const kristian = Meteor.users.findOne({_id: "H7zX4HJhqt9XYtPhN"});
    // const test = Meteor.users.findOne({_id: "G59qLzorwpDYQCfhR"});

    // if (kristian != undefined) {
    //   const kristianId = kristian._id;
    //   Chatter.addUser(kristianId, "admin");
    //   Chatter.addUserToRoom(kristianId, fun_and_gigggles);
    //   Chatter.addUserToRoom(kristianId, dragons_and_dungeons);

    // }

    // if (test != undefined) {
    //   const testId = test._id;
    //   Chatter.addUser(testId);
    //   Chatter.addUserToRoom(testId, dragons_and_dungeons);
    // }
 }

