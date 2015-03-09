Template.prototype._originalEvents = Template.prototype.events;
Template.prototype.events = function (eventMaps) {

  var templateInstance = this;

  templateInstance.__interceptedEvents = _.extend(templateInstance.__interceptedEvents || {}, eventMaps);

  templateInstance.fireEvent = function (key, options) {
    options = options || {};
    check(key, String);
    check(options, {
      context: Match.Optional(Object),
      event: Match.Optional(Object),
      templateInstance: Match.Optional(Match.Any)
    });

    if (!templateInstance.__interceptedEvents[key]) {
      throw Error('[xolvio:template-isolator] Could not find event ' +
      this.viewName + '[\'' + key + '\'].' + ' Are you sure you\'re firing the right event?');
    }

    return templateInstance.__interceptedEvents[key].call(
      options.context,
      options.event,
      options.templateInstance
    )
  };

  return Template.prototype._originalEvents.apply(this, arguments);

};