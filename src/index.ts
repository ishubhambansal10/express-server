import Server from './Server';
import config from './config/configuration';

const server = new Server(config);
console.log(server);

server.bootstrap();
server.run();
