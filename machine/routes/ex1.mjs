'use strict'

export default async function (fastify, opts) {
  fastify.get('/ex1', async function (request, reply) {
    return 'this is an example'
  })
}
