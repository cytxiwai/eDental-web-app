/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import {Col, Row} from "antd";
import Doctor from "../components/Doctor";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsSlice";


function GuestHome() {
  const [docs, setDocs] = useState([]);
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get(
        "/api/user/guest-get-all-approved-doctors"
      );
      dispatch(hideLoading());
      if(response.data.success) {
        setDocs(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getData();
  },[]);

  return (
    <Layout>
        <Row>
            <div>
                <h6 className="mb-3"> Thank you for using the eDental website to make a dentist appointment. To provide a better service, We required all users log in to get access to the appointment service. Please click the "Register/Login" button on the left and follow the instructions to finish the login process.</h6>
           </div>
        </Row>
      <Row>
        {docs.map(doctor => (
          <Col span={8} xs={24} sm={24} lg={8}>
            <div className='card p-2 cursor-pointer'>
                    <h1 className="card-title">
                        {doctor.firstName} {doctor.lastName}
                    </h1>
                    <p className='card-text'><b>Address: </b>{doctor.address}</p>
                    <p className='card-text'><b>Phone Number: </b>{doctor.phoneNumber}</p>
                    <p className='card-text'><b>Fee per Visit: </b>{doctor.feePerConsultation}</p>
                    <p className='card-text'><b>Working Hour: </b>{doctor.timings[0]} - {doctor.timings[1]}</p>
             </div>
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export default GuestHome;
