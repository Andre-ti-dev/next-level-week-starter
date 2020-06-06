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
  citySelect.disabled = true;

  getCitiesByState(stateId)
  .then(cities => {
    for (const city of cities) {
      citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
    }
    citySelect.disabled = false;
  });
}

populateUFs();

document
.querySelector("select[name=uf]")
.addEventListener("change", populateCities);

// Itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li");
for (const item of itemsToCollect) {
  item.addEventListener("click", handleSelecetedItem);
}
const collectedItems = document.querySelector("input[name=items]");
let selectedItems = [];

function handleSelecetedItem(itemEvent) {
  const itemLi = event.target;
  itemLi.classList.toggle("selected");
  
  const itemName = itemLi.dataset.name;

  const alreadySelected = selectedItems.findIndex(item => item == itemName);

  alreadySelected >= 0 ?
    selectedItems = selectedItems.filter(item => item != itemName) :
    selectedItems.push(itemName);
  
  collectedItems.value = selectedItems;
}
