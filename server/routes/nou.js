export default function (server) {
  server.route({
    path: '/api/ady/nou',
    method: 'GET',
    handler() {
      return { time: (new Date()).toISOString() };
    }
  });

}