Template Isolator
=================

This is a package used for testing templates.

#Get the Book
To learn more about testing with Meteor, consider purchasing our book [The Meteor Testing Manual](http://www.meteortesting.com/?utm_source=template-isolator&utm_medium=banner&utm_campaign=template-isolator).

[![](http://www.meteortesting.com/img/tmtm.gif)](http://www.meteortesting.com/?utm_source=template-isolator&utm_medium=banner&utm_campaign=template-isolator)

Your support helps us continue our work on Velocity and related frameworks.

Installation
------------

`meteor add xolvio:template-isolator`

This package is `debugOnly`, which means it will not get deployed to production.

Usage
-----

Say you define some template events as follows in your code:

```javascript
Template.hello.events({
  'click button': function () {
    Session.set('counter', Session.get('counter') + 1);
  }
});
```

It's difficult to test the `click button` event as there is not an easy way to isolate the code.

This is where this package comes in: it [monkey-patch](https://en.wikipedia.org/wiki/Monkey_patch)es the `Template.prototype.events` method and
adds an interceptor that stores the event code.

To get the event code in your tests, you can do this:

```javascript
describe('Hello events', function() {
   
  it('increments the session when button is clicked', function() {
   
    // SETUP
    Session.set('counter', 0);
   
    // EXECUTE
    Template.hello.fireEvent('click button');
   
    // VERIFY
    expect(Session.get('counter')).to.be(1);
   
  });
   
});
```


You can also provide the `fireEvent` method with an options object containing the data context for
the helper invocation, an event and a `templateInstance`. For example:

```javascript
fireEvent('myEvent', {
  context: { some: 'values' },
  event: { { which: 13, target: {value: ''}} },
  templateInstance: new Template('myNewTemplate', function() {})
});
```

See the [example test](https://github.com/xolvio/meteor-template-isolator/blob/master/example/tests/jasmine/client/integration/ExampleSpec.js)
for more details on using the options object.
