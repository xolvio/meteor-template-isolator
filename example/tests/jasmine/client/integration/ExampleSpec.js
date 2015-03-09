describe('Hello events', function () {


  it('counts the number of button presses', function () {

    // SETUP
    Session.set('buttonCounter', 0);

    // EXECUTE
    Template.hello.fireEvent('click button#buttonCounter');

    // VERIFY
    expect(Session.get('buttonCounter')).toBe(1);

  });


  it('counts the number of enter presses', function () {

    // SETUP
    Session.set('enterCounter', 0);

    // EXECUTE
    Template.hello.fireEvent('keypress input#enterCounter', {event: {which: 13}});

    // VERIFY
    Session.set('enterCounter', 1);

  });


  it('displays the message from template instance context', function () {

    // SETUP
    $('#message').text('');

    // EXECUTE
    Template.hello.fireEvent('click .say-hello', {context: {message: 'Hallo Welt'}});

    // VERIFY
    expect($('#message').text()).toBe('Hallo Welt');

  });

});