import { makeAutoObservable } from "mobx";

export class UserDetails {
  name = "";
  gender = "";
  age = "";
  phoneNumber = "";
  vaccine = "";
  proof = "";
  proofId = "";

  constructor() {
    makeAutoObservable(this);
  }


}
