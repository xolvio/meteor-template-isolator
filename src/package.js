Package.describe({
  name: 'xolvio:template-isolator',
  version: '0.1.0',
  summary: 'Exposes code from Meteor templates for testing purposes',
  git: 'https://github.com/xolvio/meteor-template-isolator.git',
  debugOnly: true
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.3.1');
  api.use(['underscore', 'templating'], 'client');
  api.addFiles('isolator.js', 'client');
});