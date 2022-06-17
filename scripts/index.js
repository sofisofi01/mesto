const profilePopup = document.querySelector('#nam');
const cardPopup = document.querySelector('#image');
const picturePopup = document.querySelector('#pop-up_pic');
const buttonOpenProfile = document.querySelector('.profile__edit-button');
const buttonCloseProfile = document.querySelector('.pop-up__close-profile');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupName = document.querySelector('#popup-name');
const popupDescription = document.querySelector('#popup-description');
const popupLink = document.querySelector('#popup-link');
const popupCaption = document.querySelector('#popup-title');
const buttonOpenCard = document.querySelector('.profile__add-button');
const buttonCloseCard = document.querySelector('.pop-up__close-card');
const profileForm = document.querySelector('.form_profile');
const cardForm = document.querySelector('.form_img');
const elementTemplate = document.querySelector('#element').content; 
const cardsContainer = document.querySelector('.elements');
const popupTitle = picturePopup.querySelector('.picture__caption');
const popupPicture = picturePopup.querySelector('.picture__image');
const page = document.querySelector('.page');
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
  const elementPhoto = userElement.querySelector('.element__photo');
  elementPhoto.src = item.link;
  const itemName = item.name;
  elementPhoto.alt = itemName;
  userElement.querySelector('.element__title').textContent = itemName;
  userElement.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  });
  userElement.querySelector('.element__bin-button').addEventListener('click', function (evt) {
    userElement.remove();
  });
  addPicturePopup(elementPhoto);
  return userElement;
}

initialCards.forEach(function (item) {
  cardsContainer.append(createCard(item));
});

function addPicturePopup(elementPhoto) {
  elementPhoto.addEventListener('click', () => {
    popupPicture.alt = elementPhoto.alt;
    popupPicture.src = elementPhoto.src;
    popupTitle.textContent = elementPhoto.alt;
    openPopup(picturePopup);
  });
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.pop-up_opened');
    closePopup(openedPopup);
  }
}

function saveCard(evt) {
  evt.preventDefault();
  cardsContainer.prepend(createCard({
    name: popupCaption.value,
    link: popupLink.value
  }));
  closePopup(cardPopup);
  cardForm.reset();
}

function openPopup(popup) {
  popup.querySelector('.form__save').disabled = true;
  popup.querySelector('.form__save').classList.add('form__save_disabled');
  popup.classList.add('pop-up_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove('pop-up_opened');
  document.removeEventListener('keydown', closeByEscape);
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

function closeOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

document.querySelectorAll('.pop-up').forEach((popup) => {
  popup.addEventListener('mousedown', closeOverlay);
});


buttonOpenProfile.addEventListener('click', openName);
buttonCloseProfile.addEventListener('click', () => closePopup(profilePopup));
buttonOpenCard.addEventListener('click', () => openPopup(cardPopup));
buttonCloseCard.addEventListener('click', () => closePopup(cardPopup));
profileForm.addEventListener('submit', changeProfile);
cardForm.addEventListener('submit', saveCard);
picturePopup.querySelector('.pop-up__close_img').addEventListener('click', () => closePopup(picturePopup));
