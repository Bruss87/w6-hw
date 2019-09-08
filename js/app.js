document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const villainsListItem = createVillainsListItem(event.target);
  const villainsList = document.querySelector('#villains-list');
  villainsList.appendChild(villainsListItem);

  event.target.reset();
}

const createVillainsListItem = function (form) {
  const villainsListItem = document.createElement('li');
  villainsListItem.classList.add('villains-list-item');

  const villainName = document.createElement('h2');
  villainName.textContent = form.villainName.value;
  villainsListItem.appendChild(villainName);

  const realName = document.createElement('h3');
  realName.textContent = form.realName.value;
  villainsListItem.appendChild(realName);

  const mainPower = document.createElement('h4');
  mainPower.textContent = form.mainPower.value;
  villainsListItem.appendChild(mainPower);

  const characterType = document.createElement('h4');
  characterType.textContent = form.characterType.value;
  villainsListItem.appendChild(characterType);

  return villainsListItem;
}

const handleDeleteAllClick = function (event) {
  const villainsList = document.querySelector('#villains-list');
  villainsList.innerHTML = '';
}
