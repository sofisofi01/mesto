const profilePopup = document.querySelector('#name');
const cardPopup = document.querySelector('#image');
const picturePopup = document.querySelector('.pop-up_pic');
const buttonOpenProfile = document.querySelector('.profile__edit-button');
const buttonCloseProfile = document.querySelector('.form__close-profile');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupName = document.querySelector('#popup-name');
const popupDescription = document.querySelector('#popup-description');
const popupLink = document.querySelector('#popup-link');
const popupCaption = document.querySelector('#popup-title');
const buttonOpenCard = document.querySelector('.profile__add-button');
const buttonCloseCard = document.querySelector('.form__close-card');
const profileForm = document.querySelector('.form_name');
const cardForm = document.querySelector('.form_img');
const elementTemplate = document.querySelector('#element').content;
const elements = document.querySelector('.elements');
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

function createCard(item) {
  const userElement = elementTemplate.querySelector('.element').cloneNode(true);
  userElement.querySelector('.element__photo').src = item.link;
  const itemName = item.name;
  userElement.querySelector('.element__photo').alt = itemName;
  userElement.querySelector('.element__title').textContent = itemName;
  userElement.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  });
  userElement.querySelector('.element__bin-button').addEventListener('click', function (evt) {
    userElement.remove();
  });
  addPicturePopup(userElement);
  return userElement;
}

initialCards.forEach(function (item) {
  elements.append(createCard(item));
});

function addPicturePopup(userElement) {
  userElement.querySelector('.element__photo').addEventListener('click', () => {
    const popupPicture = picturePopup.querySelector('.picture__image');
    const popupTitle = picturePopup.querySelector('.picture__caption');
    popupPicture.alt = userElement.querySelector('.element__photo').alt;
    popupPicture.src = userElement.querySelector('.element__photo').src;
    popupTitle.textContent = userElement.querySelector('.element__photo').alt;
    picturePopup.classList.add('pop-up_opened');
  });
  picturePopup.querySelector('.picture__close-button').addEventListener('click', () => closePopup(picturePopup));
}


function saveCard(evt) {
  evt.preventDefault();
  initialCards.unshift({
    name: popupCaption.value,
    link: popupLink.value
  });
  elements.prepend(createCard(initialCards[0]));
  closePopup(cardPopup);
}

function openPopup(popup) {
  popup.classList.add('pop-up_opened');
}

function closePopup(popup) {
  popup.classList.remove('pop-up_opened');
}

function openName() {
  openPopup(profilePopup);
  popupName.value = profileName.textContent;
  popupDescription.value = profileDescription.textContent;
}

function changeProfile(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileDescription.textContent = popupDescription.value;
  closePopup(profilePopup);
}

buttonOpenProfile.addEventListener('click', openName);
buttonCloseProfile.addEventListener('click', () => closePopup(profilePopup));
buttonOpenCard.addEventListener('click', () => openPopup(cardPopup));
buttonCloseCard.addEventListener('click', () => closePopup(cardPopup));
profileForm.addEventListener('submit', changeProfile);
cardForm.addEventListener('submit', saveCard);






















/**const profilePopup = document.querySelector('#name');
/**const cardPopup = document.querySelector('#image');
const picturePopup = document.querySelector('.pop-up_pic');
const profileForm = document.querySelector('.form_name');
const cardForm = document.querySelector('.form_img');
const pictureForm = document.querySelector('.form_pic');
const elementTemplate = document.querySelector('#element').content;
const elements = document.querySelector('.elements');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupName = document.querySelector('.form__name');
const popupDescription = document.querySelector('.form__description');
const buttonOpenProfile = document.querySelector('.profile__edit-button');
const buttonCloseProfile = document.querySelector('.form__close-profile');
const buttonCloseCard = document.querySelector('.form__close-card');
const buttonOpenCard = document.querySelector('.profile__add-button');
const buttonOpenImg = document.querySelector('.picture__close-button');
/**const initialCards = [{
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

/**function createCard(item) {
  const userElement = elementTemplate.querySelector('.element').cloneNode(true);
  userElement.querySelector('.element__photo').src = item.link;
  const itemName = item.name;
  userElement.querySelector('.element__photo').alt = itemName;
  userElement.querySelector('.element__title').textContent = itemName;
  userElement.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  });
  userElement.querySelector('.element__bin-button').addEventListener('click', function (evt) {
    userElement.remove();
  });
  return userElement;
}
*/
/**
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openName() {
  openPopup(profilePopup);
  popupName.value = profileName.textContent;
  popupDescription.value = profileDescription.textContent;
}

/**function changeProfile(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileDescription.textContent = popupDescription.value;
  closePopup(profilePopup);
}

/** 
initialCards.forEach(function (item) {
  createCard(item);
  elements.append(userElement);
});

function saveCard(evt) {
  createCard(item);
  elements.prepend(userElement);
  closePopup(cardPopup);
}

function addPicturePopup() {
userElement.querySelector('.element__photo').addEventListener('click', function (evt) {
  const popupPicture = picturePopup.querySelector('.picture__image');
  const popupTitle = picturePopup.querySelector('.picture__caption');
  popupPicture.alt = userElement.querySelector('.element__photo').alt;
  popupPicture.src =   userElement.querySelector('.element__photo').src;
  popupTitle.textContent = userElement.querySelector('.element__photo').alt;
  openPopup(picturePopup);
});
userPicture.querySelector('.picture__close-button').addEventListener('click', сlosePopup(picturePopup));
}
*/


/**addPicturePopup();*/
/**
buttonOpenProfile.addEventListener('click', openName);
buttonOpenCard.addEventListener('click', openPopup(cardPopup));
buttonCloseProfile.addEventListener('click', closePopup(profilePopup));
buttonCloseCard.addEventListener('click', closePopup(cardPopup));
/** 
profileForm.addEventListener('submit', changeProfile);
cardForm.addEventListener('submit', saveCard);
*/
