import { makeAutoObservable } from "mobx";
import { UserDetails } from "./userDetails";

class DataStore {
  records = [];
  userDetails = null;
  constructor() {
    makeAutoObservable(this);
    this.getUserDetailsInstance();
  }

  getUserDetailsInstance = () => (this.userDetails = new UserDetails());
  setUserInfo = () => this.records.push(this.userDetails);
  deleteUserInfo = (proofId) => {
    this.records = this.records.filter((user) => user.proofId !== proofId);
  };
  get getRecords() {
    return this.records;
  }
  get getUserInfo() {
    return this.userDetails;
  }
}

export const dataStore = new DataStore();
