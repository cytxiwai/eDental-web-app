// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Col, Row } from "antd";
import Docprofile from "../components/Docprofile";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsSlice";


function MoreProfile() {
  const [docs, setDocs] = useState([]);
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get(
        "/api/user/get-all-approved-doctors",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        setDocs(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <Row>
        {docs.map(doc => (
          <Col span={8} xs={24} sm={24} lg={8}>
            <Docprofile doctor={doc} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export default MoreProfile;