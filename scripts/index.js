const backgroundName = document.getElementById('background-name');
const backgroundImg = document.getElementById('background-img');
const popupNam = document.getElementById('nam');
const popupImg = document.getElementById('img');
const openNameButton = document.querySelector('.profile__edit-button');
const closeNameButton = document.getElementById('name-close');
const closeImgButton = document.getElementById('img-close');
const openImgButton = document.querySelector('.profile__add-button');
const image = document.querySelector('.element__photo');
let elementPhoto = document.querySelector('.element__photo');
let elementName = document.querySelector('.element__title');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let popupName = document.querySelector('.pop-up__name');
let popupDescription = document.querySelector('.pop-up__description');
let popupTitle = document.querySelector('#popup-title');
let popupLink = document.querySelector('#popup-link');
const popupSave = document.querySelector('.pop-up__save');
const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(function (item) {
  const elementTemplate = document.querySelector('#element').content;
  const elements = document.querySelector('.elements');
  const userElement = elementTemplate.querySelector('.element').cloneNode(true);
  userElement.querySelector('.element__photo').src = item.link;
  userElement.querySelector('.element__photo').alt = item.name;
  userElement.querySelector('.element__title').textContent = item.name;
  elements.append(userElement);
});


function openNam() {
  backgroundName.classList.add('background_opened');
  popupName.value = profileName.textContent;
  popupDescription.value = profileDescription.textContent;
}

function openImg() {
  backgroundImg.classList.add('background_opened');
  popupLink.value = '';
  popupTitle.value = '';
}

function closeNam() {
  backgroundName.classList.remove('background_opened');
}

function closeImg() {
  backgroundImg.classList.remove('background_opened');
}


function formSubmitHandler1(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileDescription.textContent = popupDescription.value;
  closeNam();
}

function formSubmitHandler2(evt) {
  evt.preventDefault();
  const elementTemplate = document.querySelector('#element').content;
  const elements = document.querySelector('.elements');
  const userElement = elementTemplate.querySelector('.element').cloneNode(true);
  userElement.querySelector('.element__photo').src = popupLink.value;
  userElement.querySelector('.element__photo').alt = popupTitle.value;
  userElement.querySelector('.element__title').textContent = popupTitle.value;
  elements.prepend(userElement);
  closeImg();
}



openNameButton.addEventListener('click', openNam);
openImgButton.addEventListener('click', openImg);
closeNameButton.addEventListener('click', closeNam);
closeImgButton.addEventListener('click', closeImg);
popupNam.addEventListener('submit', formSubmitHandler1);
popupImg.addEventListener('submit', formSubmitHandler2);
