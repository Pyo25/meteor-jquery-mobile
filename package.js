Package.describe({
  summary: "Provides jQuery Mobile 1.4.0 RC1 for Meteor"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');

  api.add_files('jquery.mobile-1.4.0-rc.1.min.css', 'client');
  api.add_files('jquery.mobile-1.4.0-rc.1.min.js', 'client');

});
