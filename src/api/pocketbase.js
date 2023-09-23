import PocketBase from 'pocketbase';

const pb = new PocketBase('https://little-manchester.pockethost.io');
pb.autoCancellation(false);

export default pb;
