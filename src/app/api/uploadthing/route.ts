import { createRouteHandler } from 'uploadthing/next';

import { ourFileRouter } from './core';

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});

// this gives smaller error
// export const runtime = 'edge';

// this gives larger error
export const runtime = 'nodejs';
