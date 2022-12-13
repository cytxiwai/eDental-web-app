import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import {Link} from "react-router-dom"
import { Table, Button } from "antd";
import moment from "moment";

function AppointmentsList() {
    const [appointments, setAppointments] = useState([]);
    const dispatch = useDispatch();
    const getAppointmentsData = async () => {
        try {
            dispatch(showLoading());
            const response = await axios.get("/api/user/get-appointments-by-user-id", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            dispatch(hideLoading());
            if (response.data.success) {
                setAppointments(response.data.data);
            }
        } catch (error) {
            dispatch(hideLoading());
        }
    };
    const columns = [
        {
            title: "Booking ID",
            dataIndex: "_id",
        },
        {
            title: "Dentist",
            dataIndex: "name",
            render: (text, record) => (
                <span>
          {record.doctorInfo.firstName} {record.doctorInfo.lastName}
        </span>
            ),
        },
        {
            title: "Phone",
            dataIndex: "phoneNumber",
            render: (text, record) => (
                <span>
          {record.doctorInfo.phoneNumber}
        </span>
            ),
        },
        {
            title: "Date & Time",
            dataIndex: "createdAt",
            render: (text, record) => (
                <span>
          {moment(record.date).format("MM-DD-YYYY")} {moment(record.time).format("HH:mm")}
        </span>
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
        },
        {
            title:"Doctor Profile",
            dataIndex: "name",
            render:(text, record) => (
            <button className="primary-button">{record.doctorInfo.firstName} {record.doctorInfo.lastName}</button>
            ),
        }
    ];
    useEffect(() => {
        getAppointmentsData();
    }, []);
    return (
    <>
        <h1 className="page-title">Appointments</h1>
        <hr />
        <Table columns={columns} dataSource={appointments} />
        </>
)
}

export default AppointmentsList;