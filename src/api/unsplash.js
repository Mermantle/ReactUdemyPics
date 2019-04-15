import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 33fe98974a7cf4a3a71653641eb8c0b6a6f84bcdb947476384e24bff339c0ddb'
    }
});
