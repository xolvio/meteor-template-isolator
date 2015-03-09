Template.prototype._originalEvents = Template.prototype.events;
Template.prototype.events = function (eventMaps) {
  this.__interceptedEvents = _.extend(this.__interceptedEvents || {}, eventMaps);
  return Template.prototype._originalEvents.apply(this, arguments);
};