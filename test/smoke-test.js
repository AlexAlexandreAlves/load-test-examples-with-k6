import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { check } from 'k6';
import http from 'k6/http';
import { BASE_URL } from "../constants/constants.js";

export const options = {
  vus: 1, //Número de usuários virtuais
  duration: '5m', //Tempo de duração da execução
  thresholds: {
    'http_req_failed': ['rate < 0.01'] //Limites estabelecidos para avaliar a execução
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