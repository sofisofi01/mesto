let background = document.querySelector('.background');
let popup = document.querySelector('.pop-up');
let openButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.pop-up__close');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let popupName = document.querySelector('.pop-up__name');
let popupDescription = document.querySelector('.pop-up__description');
let popupSave = document.querySelector('.pop-up__save');

function open() {
  popup.classList.add('pop-up_opened');
  background.classList.add('background_opened');
  popupName.setAttribute('value', `${profileName.textContent}`);
  popupDescription.setAttribute('value', `${profileDescription.textContent}`);
}

function close() {
  popup.classList.remove('pop-up_opened');
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


