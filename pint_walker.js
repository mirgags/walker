Walks = new Meteor.Collection("walks");
Users = new Meteor.Collection("users");

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    var c = Users.find();
    /*var users = c.fetch();
    var rtnString = ''
    for (i=0; i < users.length; i++) {
      return users[i]['name'] + ', ' + users[i]['email'];
    };*/
    return c
  };

  Template.hello.events({
    'click input': function (event) {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined' && event.target.type === 'submit') {
        console.log("You pressed the button for " + event.target.id);
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if (Walks.find().count() === 0) {
      Walks.insert({distance: 3.2, date: d.getTime(), companions: null});
    };
    if (Users.find().count() === 0) {
      Users.insert({email: 'mmiraglia@pint.com', name: 'Mark Miraglia'});
    };
  });
}
