// karma.conf.js
module.exports = function(config) {
  config.set({
    reporters: ['progress', 'html'],
 
    htmlReporter: {
      outputFile: 'tests/units.html',
            
      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: 'A sample project description',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true,
      showOnlyFailed: false
    }
  });
};
