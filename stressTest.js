/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 2000,
  duration: '300s',
};

export default function stressTests() {
  http.get('http://127.0.0.1:3003/api/carousel-module/photos/2b23b448-a214-4485-af90-194046bbe083');
  sleep(1);

  // 2b23b448-a214-4485-af90-194046bbe083

  // http.post('http://127.0.0.1:3003/api/carousel-module/photos/', {
  //   name: 'Test Name',
  // });
  // sleep(1);
}
