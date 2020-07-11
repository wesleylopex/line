(function () {
  validateFormFields();
})();

function fieldHasError(field) {
  for (const error in field.validity) {
    if (field.validity[error] && !field.validity.valid) return error;
  }

  return false;
}

function getCustomMessage(field, errorType) {
  const messages = {
    text: {
      valueMissing: "Campo obrigatório",
    },
    email: {
      valueMissing: "Campo obrigatório",
      typeMismatch: "Digite um e-mail válido",
    },
    textarea: {
      valueMissing: "Campo obrigatório",
    },
  };

  return messages[field.type][errorType];
}

function setValidationMessage(field) {
  const validationComponent = field.parentNode.querySelector(".error");
  const validationComponentLabel = validationComponent.querySelector("label");

  const hasError = fieldHasError(field);

  if (hasError) {
    const message = getCustomMessage(field, hasError);
    validationComponentLabel.innerHTML = message;
  } else validationComponentLabel.innerHTML = "";
}

function handleInvalidField(event) {
  const field = event.target;

  setValidationMessage(field);
}

function validateFormFields() {
  const fields = document.querySelectorAll("form [required]");

  for (const field of fields) {
    field.addEventListener("invalid", (event) => {
      event.preventDefault();
      handleInvalidField(event);
    });
    field.addEventListener("blur", handleInvalidField);
  }
}
