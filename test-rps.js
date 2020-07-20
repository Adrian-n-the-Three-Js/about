import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 100 },
    { duration: '5s', target: 1500 },
    { duration: '3m', target: 1500 },
    { duration: '5s', target: 2000 },
    { duration: '1m', target: 2000 },
  ],
};

export default function() {
  const hotelId = Math.floor(Math.random() * (9999999)) + 1;
  http.get(`http://localhost:3003/api/photos/${hotelId}`);

  sleep(1);

}