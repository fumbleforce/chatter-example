if (Meteor.isClient) {
}

Chatter.configure({
  nickProperty: "emails.0.address"
});
