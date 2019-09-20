var path = require('path');

var apos = require('apostrophe')({
    shortName: 'EMA',

    // See lib/modules for basic project-level configuration of our modules
    // responsible for serving static assets, managing page templates and
    // configuring user accounts.
    //'apostrophe-db': {
    // uri: 'mongodb://localhost:27017/apostrophe-sandbox'
    // There is legacy support for host, port, name, user and password options,
    // but this is not necessary. They can all go in the uri option like this:
    // mongodb://user:password@host:port/dbname
    // }
    modules: {
        'apostrophe-assets': {
            minify: true
        },
        'apostrophe-pages': {
            filters: {
                // Grab our ancestor pages, with two levels of subpages
                ancestors: {
                    children: {
                        depth: 2
                    }
                },
                // We usually want children of the current page, too
                children: true
            },

            types: [{
                    name: 'standardPage',
                    label: 'Standard Page'
                },
                {
                    name: 'home',
                    label: 'Home'
                },
                {
                    name: 'contact',
                    label: 'Contact'
                },
                {
                    name: 'projects',
                    label: 'Projects'
                }
            ]
        },
        // Apostrophe module configuration

        // Note: most configuration occurs in the respective
        // modules' directories. See lib/apostrophe-assets/index.js for an example.

        // However any modules that are not present by default in Apostrophe must at
        // least have a minimal configuration here: `moduleName: {}`

        // If a template is not found somewhere else, serve it from the top-level
        // `views/` folder of the project

        'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
        'two-column-widgets': {},
        'three-column-widgets': {},
        'section-title-widgets': {},
        'contact-form': {},
        'contact-form-widgets': {}
    }
});