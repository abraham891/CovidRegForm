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
  setRecords = (newArray) => (this.records = newArray);
  get getRecords() {
    return this.records;
  }
  get getUserInfo() {
    return this.userDetails;
  }
}

export const dataStore = new DataStore();