export default function (server) {

  server.route({
    path: '/api/ady/index/{name}',
    method: 'GET',
    handler(req) {
      return new Promise((res, rej) => {
        server.plugins.elasticsearch.getCluster('data').callWithRequest(req, 'cat.indices', {
          /*metric: 'metadata',*/
          index: req.params.name
        }).then(function (response) {
          // Return just the names of all indices to the client.
           /* res(
              Object.keys(response.metadata.indices)
            );*/
         res(response);
        }).catch((e) => {
          rej(e);
        });
      });
    }
  });

}