import axios from 'axios';
import { baseUrl } from './Contants/Contants';

const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
