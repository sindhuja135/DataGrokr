import React, { useState } from "react";
import "./From.scss";
import Preloader from "../Preloader/Preloader";
import Button from "@material-ui/core/Button";
import validationService from "../Validation";
import { toast } from "react-toastify";

function From() {
  const [userDetails, setuserDetails] = useState({
    email: "",
    firstname: "",
    lastname: "",
    mobileno: "",
    pincode: "",
    bankAccount: "",
    storage: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    firstname: "",
    lastname: "",
    mobileno: "",
    pincode: "",
    bankAccount: "",
    storage: "",
  });
  const validate = () => {
    let error = {};
    error.firstname = !userDetails.firstname
      ? ""
      : validationService.firstname(userDetails.firstname)
      ? false
      : "Enter Valid First Name";
    error.lastname = !userDetails.lastname
      ? ""
      : validationService.lastname(userDetails.lastname)
      ? false
      : "Enter Valid Last Name";
    error.mobileno = !userDetails.mobileno
      ? ""
      : validationService.mobileno(userDetails.mobileno)
      ? false
      : "Enter a Valid Mobileno";
    error.email = !userDetails.email
      ? ""
      : validationService.email(userDetails.email)
      ? false
      : "Invalid Email Address";
    error.pincode = !userDetails.pincode
      ? ""
      : validationService.pincode(userDetails.pincode)
      ? false
      : "Invalid valid pincode";
    error.bankAccount = !userDetails.bankAccount
      ? ""
      : validationService.bankAccount(userDetails.bankAccount)
      ? false
      : "Invalid valid bankAccount";
    setErrors(error);
    return !error.email &&
      !error.pincode &&
      !error.bankAccount &&
      !error.firstname &&
      !error.lastname &&
      !error.mobileno
      ? true
      : false;
  };
  const onChangeHandler = (e) => {
    let user = userDetails;
    user[e.target.name] = e.target.value;
    validate();
    setuserDetails(user);
  };
  const onSubmitHandler = (e) => {
    validate();
    e.preventDefault();
    if (!userDetails.email) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Please enter your email",
      }));
      return;
    }
    if (!userDetails.pincode) {
      setErrors((prevState) => ({
        ...prevState,
        pincode: "Please enter your pincode",
      }));
      return;
    }
    if (!userDetails.mobileno) {
      setErrors((prevState) => ({
        ...prevState,
        mobileno: "Please enter your mobileno",
      }));
      return;
    }
    if (!userDetails.bankAccount) {
      setErrors((prevState) => ({
        ...prevState,
        bankAccount: "Please enter your bankAccount",
      }));
      return;
    }
    if (!userDetails.firstname) {
      setErrors((prevState) => ({
        ...prevState,
        firstname: "Please enter your firstname",
      }));
      return;
    }
    if (!userDetails.lastname) {
      setErrors((prevState) => ({
        ...prevState,
        lastname: "Please enter your lastname",
      }));
      return;
    }
    if (userDetails.storage === "Local Storage") {
      setLoading(true);
      console.log(userDetails);
      localStorage.setItem("UserDetails", JSON.stringify(userDetails));
      setTimeout(()=>{ setLoading(false)},5000)
      toast.success("Stored in Local Storage Successfully");
    } else {
      setLoading(true);
      toast.dark("Yet to be COnfigured");
     setTimeout(()=>{ setLoading(false)},5000)
    }
  };
  const [Loading, setLoading] = useState(false);
  let content;
  if (Loading) {
    content = (
      <Button variant="contained" color="primary">
        Submit
        <Preloader />
      </Button>
    );
  } else {
    content = (
      <Button variant="contained" color="primary" onClick={onSubmitHandler}>
        Submit
      </Button>
    );
  }
  return (
    <div className="form_page">
      <div className="container">
        <div className="card">
          <h1 className="card_name">User Details</h1>
          <div className="form page_first ">
            <form>
              <div className="row">
              <div class="form-group col-md-6">
                  First Name
                  <input
                    type="text"
                    name="firstname"
                    class="form-control"
                    placeholder="Enter firstname"
                    onChange={onChangeHandler}
                    value={userDetails.firstname}
                    required
                  />
                  {errors.firstname && (
                    <span className="text-danger pb-3">{errors.firstname}</span>
                  )}
                </div>
                <div class="form-group col-md-6">
                  Last Name
                  <input
                    type="text"
                    name="lastname"
                    class="form-control"
                    placeholder="Enter lastname"
                    onChange={onChangeHandler}
                    value={userDetails.lastname}
                    required
                  />
                  {errors.lastname && (
                    <span className="text-danger pb-3">{errors.lastname}</span>
                  )}
                </div>
                
              </div>
              <div className="row">
              <div class="form-group col-md-6">
                  Email address
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Enter email"
                    onChange={onChangeHandler}
                    value={userDetails.email}
                    required
                  />
                  {errors.email && (
                    <span className="text-danger pb-3">{errors.email}</span>
                  )}
                </div>
                <div class="form-group col-md-6">
                  Mobile No:
                  <input
                    type="text"
                    name="mobileno"
                    class="form-control"
                    placeholder="Enter mobileno"
                    onChange={onChangeHandler}
                    value={userDetails.mobileno}
                    required
                  />
                  {errors.mobileno && (
                    <span className="text-danger pb-3">{errors.mobileno}</span>
                  )}
                </div>
              </div>
              <div className="row">
                <div class="form-group col-md-6">
                  Zip-code:
                  <input
                    type="text"
                    name="pincode"
                    class="form-control"
                    placeholder="Enter pincode"
                    onChange={onChangeHandler}
                    value={userDetails.pincode}
                    required
                  />
                  {errors.pincode && (
                    <span className="text-danger pb-3">{errors.pincode}</span>
                  )}
                </div>
                <div class="form-group col-md-6">
                  Bank Account:
                  <input
                    type="text"
                    class="form-control"
                    name="bankAccount"
                    placeholder="Enter BankAccount"
                    onChange={onChangeHandler}
                    value={userDetails.bankAccount}
                    required
                  />
                  {errors.bankAccount && (
                    <span className="text-danger pb-3">
                      {errors.bankAccount}
                    </span>
                  )}
                </div>
              </div>
              <div className="row">
                <div class="form-group  col-md-6" style={{ margin: "0 auto" }}>
                  Storage Medium
                  <select
                    class="form-control"
                    name="storage"
                    onChange={onChangeHandler}
                    value={userDetails.storage}
                  >
                    <option value="" disabled selected>
                      Select Storage
                    </option>
                    <option value="Local Storage">Local Storage</option>
                    <option value="DataBase">DataBase</option>
                  </select>
                </div>
                <div className="button col-md-6">{content}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default From;
