import React from "react";
import { dataStore } from "../../Store/dataStore";
import { observer } from "mobx-react";
import './review.css';

export const Review = observer(() => {
  return (
    <div className="container">
      <h1 className="review-heading" >Review</h1>
      <div className="container overflow-scroll">
        <table
          id="review-table"
          className="table table-striped table-bordered no-wrap text-center"
          style={{ width: "100%" }}
        >
          <thead>
            <tr className="h-10">
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Proof</th>
              <th scope="col">Proof ID</th>
              <th scope="col">Vaccine</th>
              <th scope="col">Mobile</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {dataStore.getRecords.map(
              ({ name, age, gender, proof, proofId, vaccine, phoneNumber }) => (
                <tr key={proofId}>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{gender}</td>
                  <td>{proof}</td>
                  <td>{proofId}</td>
                  <td>{vaccine}</td>
                  <td>{phoneNumber}</td>
                  <td>
                    <button
                      onClick={()=>dataStore.deleteUserInfo(proofId)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
});
