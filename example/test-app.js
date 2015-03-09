if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Session.setDefault('enterCounter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    },
    enterCounter: function () {
      return Session.get('enterCounter');
    },
    en: function() {
      return {
        language: "English",
        "message": "Hello World"
      };
    },
    fr: function() {
      return {
        language: "French",
        "message": "Bonjour monde"
      };
    }
  });

  Template.hello.events({

    'click button#counter': function () {
      Session.set('counter', Session.get('counter') + 1);
    },

    'keypress input#myText': function (e) {
      if (e.which === 13) {
        Session.set('enterCounter', Session.get('enterCounter') + 1);
      }
    },

    'click .say-hello' : function() {
      $('#message').text(this.message);
    }

  });
}
