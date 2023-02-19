import path from 'path';
import AutoLoad from '@fastify/autoload';

export default async function (fastify, opts) {
  console.log("opts");
  console.log(JSON.stringify(opts, null, '\t'));
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(process.cwd(), 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(process.cwd(), 'routes'),
    options: Object.assign({}, opts)
  })
}
