Template Isolator
=================

This is a package used for testing templates.


Installation
------------

`meteor add xolvio:template-isolator`

This package is `debugOnly`, which means it will not get get deployed to production.

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

This is where this package comes in, it monkey patches the `Template.prototype.events` method and
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
the helper invocation, an event and a templateInstance. For example:

```javascript
fireEvent('myEvent', {
  context: { some: 'values' },
  event: { { which: 13, target: {value: ''}} },
  templateInstance: new Template('myNewTemplate', function() {})
});
```
