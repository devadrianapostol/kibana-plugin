export default function (server) {

  server.route({
    path: '/api/ady/example',
    method: 'GET',
    handler(req) {
      return new Promise((res, rej) => {
        server.plugins.elasticsearch.getCluster('data').callWithRequest(req, 'cluster.state', {
          metric: 'metadata',
          index: req.params.name
        }).then(function (response) {
          // Return just the names of all indices to the client.
          res(
            response.metadata
          );
          console.log(res);
        }).catch((e) => {
          rej(e);
        });
      });
    }
  });

}
