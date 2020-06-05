const apiUrl = 'https://servicodados.ibge.gov.br/api/v1';

export function getStates() {
  return fetch(`${apiUrl}/localidades/estados`)
  .then(res => res.json());
}

export function getCitiesByState(stateId) {
  return fetch(`${apiUrl}/localidades/estados/${stateId}/municipios`)
  .then(res => res.json());
}