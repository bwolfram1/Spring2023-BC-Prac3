import { handler } from './handler.js';
import { env } from './env.js';
import { Application } from './deps.ts';

const path = env('SOCKET_PATH', false);
const host = env('HOST', '0.0.0.0');
const port = env('PORT', !path && '3000');

// TODO: add compression middleware
const server = new Application().use(handler);

server.addEventListener('listen', () => {
	console.log(`Listening on http://${addr}`);
});

const addr = path || `${host}:${port}`;
server.listen(addr).catch((err) => {
	console.error('error', err);
});

export { host, path, port, server };
