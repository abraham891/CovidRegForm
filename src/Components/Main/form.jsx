import { dataStore } from "../../Store/dataStore";
import { observer } from "mobx-react";
import "./form.css";
import { validation, removeErrorMsg } from "./utilities";

export const Form = observer(() => {
  const handleGender = (e) => (dataStore.userDetails.gender = e.target.value);

  const handleVaccine = (e) => (dataStore.userDetails.vaccine = e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let validationSuccess = true;
    validationSuccess = validation();
    if (validationSuccess) {
      removeErrorMsg();
      dataStore.setUserInfo();
      e.target.reset();
      dataStore.getUserDetailsInstance();
      alert("Registration Successful");
    }
  };

  return (
    <section className="Form my-4 mx-5 overflow-hidden">
      <div className="container">
        <div className="row no-gutters ">
          <div className="col-md-5 no-gutters p-0">
            <img
              src="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500&h=700"
              alt="covid-information"
              className="image"
            />
          </div>
          <div className="col-lg-7 p-5 ">
            <form name="registrationform" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="col-lg-12">
                  <label htmlFor="name" className="label">
                    Full Name :
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-control p-2"
                    autoComplete="off"
                    name="name"
                    placeholder="Enter Full Name"
                    onChange={(e) =>
                      (dataStore.userDetails.name = e.target.value)
                    }
                  />
                  <label
                    className="errorMsg text-danger"
                    id="nameError"
                  ></label>
                  <br />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-12">
                  <label htmlFor="gender" className="label">
                    Gender :
                  </label>
                  <br />
                  <input
                    id="gender"
                    type="radio"
                    value="Male"
                    name="gender"
                    onClick={handleGender}
                    className="form-check-input"
                  />
                  &nbsp;Male &nbsp;
                  <input
                    id="gender"
                    type="radio"
                    value="Female"
                    name="gender"
                    onClick={handleGender}
                    className="form-check-input"
                  />
                  &nbsp;Female
                  <br />
                  <label
                    className="errorMsg text-danger"
                    id="genderError"
                  ></label>
                  <br />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-12">
                  <label htmlFor="age" className="label">
                    Age :{" "}
                  </label>
                  <input
                    id="age"
                    type="number"
                    className="form-control p-2"
                    autoComplete="off"
                    name="age"
                    placeholder="Enter Your Age"
                    onChange={(e) =>
                      (dataStore.userDetails.age = e.target.value)
                    }
                  />{" "}
                  <label className="errorMsg text-danger" id="ageError"></label>
                  <br />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-12">
                  <label htmlFor="vaccine" className="label">
                    Vaccine :
                  </label>
                  <br />
                  <input
                    id="vaccine"
                    type="radio"
                    value="Covishield"
                    name="vaccine"
                    onClick={handleVaccine}
                  />
                  &nbsp;Covishield &nbsp;
                  <input
                    id="vaccine"
                    type="radio"
                    value="Covaxin"
                    name="vaccine"
                    onClick={handleVaccine}
                  />
                  &nbsp; Covaxin &nbsp;
                  <input
                    id="vaccine"
                    type="radio"
                    value="Sputnik"
                    name="vaccine"
                    onClick={handleVaccine}
                  />
                  &nbsp;Sputnik
                  <br />
                  <label
                    className="errorMsg text-danger"
                    id="vaccineError"
                  ></label>
                  <br />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-12">
                  <label htmlFor="id-proof" className="label">
                    Choose an ID Proof :
                  </label>
                  <br />
                  <select
                    id="id-proof"
                    name="id-proof"
                    className="form-select"
                    onChange={(e) =>
                      (dataStore.userDetails.proof =
                        e.target.options[e.target.selectedIndex].text)
                    }
                  >
                    <option value="select">Select ID Proof</option>
                    <option value="Aadhar">Aadhar</option>
                    <option value="Passport">Passport</option>
                    <option value="VoterID">Voter ID</option>
                  </select>
                  <label
                    className="errorMsg text-danger"
                    id="proofError"
                  ></label>
                  <br />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-12">
                  <label htmlFor="proofId" className="label">
                    Enter Proof ID :{" "}
                  </label>
                  <input
                    id="proofId"
                    type="text"
                    className="form-control  p-2"
                    autoComplete="off"
                    name="proofId"
                    placeholder="Enter Proof Number"
                    onChange={(e) =>
                      (dataStore.userDetails.proofId = e.target.value)
                    }
                  />{" "}
                  <label
                    className="errorMsg text-danger"
                    id="proofIdError"
                  ></label>
                  <br />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-12">
                  <label htmlFor="phone-number" className="label">
                    Phone Number :
                  </label>
                  <input
                    id="phone-number"
                    type="tel"
                    className="form-control  p-2"
                    autoComplete="off"
                    name="phone-number"
                    placeholder="Enter Phone Number"
                    onChange={(e) =>
                      (dataStore.userDetails.phoneNumber = e.target.value)
                    }
                  />{" "}
                  <label
                    className="errorMsg text-danger"
                    id="phoneError"
                  ></label>
                  <br />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-12">
                  <button type="submit" className="btn1 mt-3 mb-5">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});
