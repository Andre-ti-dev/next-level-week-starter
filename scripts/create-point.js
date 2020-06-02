import { getStates, getCitiesByState } from './ibge-service.js';

function populateUFs() {
  const ufSelect = document.querySelector("select[name=uf]");
  getStates()
  .then(states => {
    for (const state of states) {
      ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
    }
  });
}

function populateCities(stateEvent) {
  const citySelect = document.querySelector("select[name=city]");
  const stateInput = document.querySelector("input[name=state]");
  const stateId = stateEvent.target.value;

  const indexOfSelectedState = stateEvent.target.selectedIndex;
  stateInput.value = event.target.options[indexOfSelectedState].text;

  citySelect.innerHTML = `<option value="">Selecione a cidade</option>`;
  getCitiesByState(stateId)
  .then(cities => {
    for (const city of cities) {
      citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`;
    }
    citySelect.disabled = false;
  });
}

populateUFs();

document
.querySelector("select[name=uf]")
.addEventListener("change", populateCities);
