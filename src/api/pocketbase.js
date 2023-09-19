import PocketBase from 'pocketbase';

// const pb = new PocketBase(import.meta.env.VITE_PB_URL);
const pb = new PocketBase('https://little-manchester.pockethost.io');
// PocketBase SDK {}
export default pb;