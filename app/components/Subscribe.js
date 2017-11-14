import { setPusherClient } from 'react-pusher';
import Pusher from 'pusher-js';
import config from '../pusher-config';

const pusherClient = new Pusher(config.key, {
	cluster: config.cluster
});

export default setPusherClient(pusherClient);
