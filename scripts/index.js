const background = document.querySelector('.background');
const popup = document.querySelector('.pop-up');
const openButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.pop-up__close');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let popupName = document.querySelector('.pop-up__name');
let popupDescription = document.querySelector('.pop-up__description');
const popupSave = document.querySelector('.pop-up__save');

function open() {
  background.classList.add('background_opened');
  popupName.value = profileName.textContent;
  popupDescription.value = profileDescription.textContent;
}

function close() {
  background.classList.remove('background_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault(); 
  profileName.textContent = popupName.value;
  profileDescription.textContent = popupDescription.value;
  close();
}


openButton.addEventListener('click', open);
closeButton.addEventListener('click', close);
popup.addEventListener('submit', formSubmitHandler);


