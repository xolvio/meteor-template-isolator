if (Meteor.isClient) {

  Session.setDefault('buttonCounter', 0);
  Session.setDefault('enterCounter', 0);

  Template.hello.helpers({
    buttonCounter: function () {
      return Session.get('buttonCounter');
    },
    enterCounter: function () {
      return Session.get('enterCounter');
    },
    anEnglishContext: function() {
      return {
        language: "English",
        "message": "Hello World"
      };
    },
    aFrenchContext: function() {
      return {
        language: "French",
        "message": "Bonjour monde"
      };
    }
  });

  Template.hello.events({

    'click button#buttonCounter': function () {
      Session.set('buttonCounter', Session.get('buttonCounter') + 1);
    },

    'keypress input#enterCounter': function (e) {
      if (e.which === 13) {
        Session.set('enterCounter', Session.get('enterCounter') + 1);
      }
    },

    'click .say-hello' : function() {
      $('#message').text(this.message);
    }

  });
}
