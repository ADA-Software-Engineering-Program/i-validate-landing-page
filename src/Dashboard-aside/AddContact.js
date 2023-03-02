import React from "react";
import { Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsPersonCircle, BsUpload } from "react-icons/bs";
import ConvoTable from "../components/dashboard-aside-comp/ConvoTable";
import './dashboard-aside.css';

const AddContact = () => {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Add Contact</h3>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/Login" className="text-black d-block me-2">
            Log out
          </Link>
          <BsPersonCircle className="fs-4"/>
        </div>
      </div>
      <Form className="dash-form d-flex justify-content-end align-items-center gap-10 mb-4">
        <div className="position-relative">
          <Form.Control
            type="email"
            placeholder="Search"
            className="ps-5 search-input"
          />
            <BsSearch className="position-absolute dash-icon"/>
        </div>
        <button className="form-control w-10 font-all"><BsUpload className="me-2"/>Import CSV</button>
        <Link to="#" className="form-control text-decoration-none w-10 find-people font-all">Find People</Link>
      </Form>
      <div>
        <ConvoTable />
      </div>
    </div>
  );
};

export default AddContact;
