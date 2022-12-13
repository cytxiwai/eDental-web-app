import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import UserProfileForm from "../components/UserProfileForm.js";
import AppointmentsList from "./AppointmentListWithoutLayout.js";

function UserProfile() {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [currUser, setCurrUser] = useState(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/user/update-user-profile",
        {
          ...values,
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong on update doctor profile");
    }
  };
  const getUserData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/user/get-user-info-by-user-id",
        {
          userId: params.userId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        setCurrUser(response.data.data);
       console.log(currUser);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };


  useEffect(() => {
    getUserData();},[]);

  return (
    <Layout>
      <h1 className="page-title">User Profile</h1>
        <hr />
      {currUser && <UserProfileForm onFinish={onFinish} initialValues={currUser}/> }

        <hr />
        <AppointmentsList/>

    </Layout>
  );
}

export default UserProfile;
