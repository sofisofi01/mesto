const showInputError = (object, formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(object.inputErrorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (object, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(object.inputErrorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (object, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(object, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(object, formElement, inputElement);
  }
};

const setEventListeners = (object, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(object.inputSelector));
  const buttonElement = formElement.querySelector(object.submitButtonSelector);
  toggleButtonState(object, inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(object, formElement, inputElement);
      toggleButtonState(object, inputList, buttonElement);
    });
  });
};

const enableValidation = (object) => {
  const formList =  Array.from(document.querySelectorAll(object.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(object, formElement);
  });
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(object, inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(object.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(object.inactiveButtonClass);
  }
}


enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save',
  inactiveButtonClass: 'form__save_disabled',
  inputErrorClass: 'form__input_error',
});
