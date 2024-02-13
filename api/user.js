import axios from 'axios';
export default axios.create({ baseURL: 'http://192.168.100.16:3003/api/v1/users' });