import { Button, Col, Form, Input, Row, TimePicker } from "antd";
import React from "react";
import moment from "moment";

function UserProfileForm({ onFinish, initialValues }) {
  return (
            <Form
               layout="vertical"
               onFinish={onFinish}
               initialValues={{
                 ...initialValues,
               }}
             >
               <h1 className="card-title mt-3">Personal Information</h1>
               <Row gutter={20}>
                 <Col span={8} xs={24} sm={24} lg={8}>
                   <Form.Item
                     required
                     label="Name"
                     name="name"
                     rule={[{ required: true }]}
                   >
                     <Input placeholder="Name" />
                   </Form.Item>
                 </Col>
                  <Col span={8} xs={24} sm={24} lg={8}>
                   <Form.Item
                     required
                     label="E-mail"
                     name="email"
                     rule={[{ required: true }]}
                   >
                     <Input placeholder="E-mail" />
                   </Form.Item>
                 </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                   <Form.Item
                     required
                     label="Phone Number"
                     name="phoneNumber"
                     rule={[{ required: false }]}
                   >
                     <Input placeholder="Phone Number" />
                   </Form.Item>
                 </Col>
               </Row>
                <Row gutter={20}>
                   <Col span={8} xs={24} sm={24} lg={8}>
                   <Form.Item
                     required
                     label="Medical History"
                     name="medicalHistory"
                     rule={[{ required: false }]}
                   >
                     <Input placeholder="Medical History" />
                   </Form.Item>
                 </Col>

                    <Col span={8} xs={24} sm={24} lg={8}>
                   <Form.Item
                     required
                     label="Address"
                     name="address"
                     rule={[{ required: false }]}
                   >
                     <Input placeholder="Address" />
                   </Form.Item>
                 </Col>

               </Row>
                <div className="d-flex justify-content-end">
                    <Button className="primary-button" htmlType="submit">
                     SUBMIT
                    </Button>
                </div>
           </Form>);}

export default UserProfileForm;