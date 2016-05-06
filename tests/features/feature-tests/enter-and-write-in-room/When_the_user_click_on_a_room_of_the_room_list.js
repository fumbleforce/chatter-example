module.exports = function() {
  this.When(/^the user click on a room of the room list$/, function () {
    browser.click(".roomListItem");
  });
};
