import axios from 'axios';

const accessKey = 'LSZnm2oP0Je58h_98twAXy7StIPi3poj5-yDWgP10As'; 

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${accessKey}`
  }
});