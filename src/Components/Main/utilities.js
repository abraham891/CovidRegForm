import { dataStore } from "../../Store/dataStore";

function printError(id, msg) {
  document.getElementById(id).innerHTML = msg;
}

export const validation = () => {
  const {
    name,
    age,
    gender,
    vaccine,
    proofId,
    phoneNumber,
    proof
  } = dataStore.getUserInfo;
  let regex = null;
  let validated = true;
  if (name === "") {
    printError("nameError", "Name can't be empty");
    validated = false;
  }
  regex = /^[a-zA-Z\s]+$/;
  if (regex.test(name) === false) {
    printError("nameError", "Invalid name");
    validated = false;
  }
  if (gender === "") {
    printError("genderError", "Select your gender");
    validated = false;
  }
  if (age === "") {
    printError("ageError", "Age can't be empty");
    validated = false;
  }
  if (age < 18) {
    printError("ageError", "Age should be atleast 18");
    validated = false;
  }
  if (age > 120) {
    printError("ageError", "Age should be less than 120");
    validated = false;
  }
  if (vaccine === "") {
    printError("vaccineError", "Select vaccine");
    validated = false;
  }
  if (proof === "" || proof === "Select ID Proof") {
    printError("proofError", "Please select proof");
    validated = false;
  }
  if (proofId === "") {
    printError("proofIdError", "Proof ID can't be empty");
    validated = false;
  }
  regex = /^[a-zA-Z0-9]+$/;
  if (regex.test(proofId) === false) {
    printError("proofIdError", "Invalid Proof ID");
    validated = false;
  }
  if (phoneNumber === "") {
    printError("phoneError", "Phone Number can't be empty");
    validated = false;
  }

  regex = /^\d{10}$/;
  if (regex.test(phoneNumber) === false) {
    printError("phoneError", "Invalid phone number");
    validated = false;
  }
  return validated;
};

export const removeErrorMsg = () => {
  let elements = document.getElementsByClassName("errorMsg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "";
  }
};
