import exampleRoute from './server/routes/example';
import nouRoute from './server/routes/nou';
import indexRoute from './server/routes/index';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'ady',
    uiExports: {
      app: {
        title: 'Ady',
        description: 'my plugin',
        main: 'plugins/ady/app',
      },
      styleSheetPaths: require('path').resolve(__dirname, 'public/app.scss'),

    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init(server, options) { // eslint-disable-line no-unused-vars
      // Add server routes and initialize the plugin here
      exampleRoute(server);
      nouRoute(server);
      indexRoute(server);
    }
  });
}
