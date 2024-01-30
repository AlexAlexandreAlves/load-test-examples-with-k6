import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { check } from 'k6';
import http from 'k6/http';
import { BASE_URL } from "../constants/constants.js";

export const options = {
  stages: [
    { duration: '5m', target: 300 },       //Iniciando ramp-up
    { duration: '10m', target: 600 },
    { duration: '1h', target: 1200 },
    { duration: '10m', target: 600 },      //Iniciando ramp-down
    { duration: '5m', target: 300 },
  ],
  thresholds: {
    'http_req_failed': ['rate < 0.01'],
  }
}

export default function () {

  const res = http.get(BASE_URL);
  check(res, {
    'status code 200': (r) => r.status === 200
  });
}

export function handleSummary(data) {
  return {
    "test_k6.html": htmlReport(data),
  };
}