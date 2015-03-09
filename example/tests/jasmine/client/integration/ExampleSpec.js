describe('Hello events', function () {


  it('increments the session when button is clicked', function () {

    // SETUP
    Session.set('counter', 0);

    // EXECUTE
    Template.hello.fireEvent('click button#counter');

    // VERIFY
    expect(Session.get('counter')).toBe(1);

  });


  it('it counts the number of return presses', function () {

    // SETUP
    Session.set('enterCounter', 0);

    // EXECUTE
    Template.hello.fireEvent('keypress input#myText', {event: {which: 13}});

    // VERIFY
    Session.set('enterCounter', 1);

  });


  it('it displays the message from context', function () {

    // SETUP
    $('#message').text('');

    // EXECUTE
    Template.hello.fireEvent('click .say-hello', {context: {message: 'Hallo Welt'}});

    // VERIFY
    expect($('#message').text()).toBe('Hallo Welt');

  });

});