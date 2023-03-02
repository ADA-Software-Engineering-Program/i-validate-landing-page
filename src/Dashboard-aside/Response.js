import React from "react";
import { Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./dashboard-aside.css";

const AddContact = () => {
  const now = 80;

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-end align-items-center mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/Login" className="text-black d-block me-2">
            Log out
          </Link>
          <BsPersonCircle className="fs-4" />
        </div>
      </div>
      <div className="progressBox d-flex justify-content-end align-items-center gap-30">
        <ProgressBar now={now} label={`${now}%`} variant="warning" />
        <Link
          to="#"
          className="form-control text-decoration-none w-10 find-people font-all"
        >
          New Conversation
        </Link>
      </div>
      <Form className="dash-form d-flex justify-content-between align-items-center gap-10 my-5">
        <h4>Customer Discovery</h4>
        <div className="d-flex gap-10">
          <div className="position-relative">
            <Form.Control
              type="email"
              placeholder="Search"
              className="ps-5 search-input"
            />
            <BsSearch className="position-absolute dash-icon" />
          </div>
          <Form.Select aria-label="Default select example">
            <option>All Tags</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select aria-label="Default select example">
            <option>All sentiments</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select aria-label="Default select example">
            <option>All segments</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
      </Form>
      <div>
        <div>
            <h3>Insights</h3>
            <p>These are automatically pulled from your conversations as you go</p>
        </div>
      </div>
      <div>
        <Link
            to="#"
            className="form-control text-decoration-none w-10 find-people font-all"
            >
            Feedback
        </Link>
      </div>
    </div>
  );
};

export default AddContact;
