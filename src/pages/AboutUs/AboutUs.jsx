import * as SC from "./AboutUs.styles";
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader";
import EmployeePhotoInfo from "./EmployeePhotoInfo";
import useApi from "../../hooks/useApi";
import { useFormik } from "formik";
import Button from "../../components/Button";
import { useState } from "react";

const validate = (values) => {
  const errors = {};
  const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  if (!values.email) {
    errors.email = "Required";
  } else if (!regEx.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.subject) {
    errors.subject = "Required";
  } else if (values.subject.length <= 2) {
    errors.subject = "The message is too short";
  } else if (values.subject.length >= 50) {
    errors.subject = "The message is too long";
  }
  if (!values.message) {
    errors.message = "Required";
  } else if (values.message.length <= 10) {
    errors.message = "The message is too short";
  } else if (values.message.length >= 150) {
    errors.message = "The message is too long";
  }

  return errors;
};

const AboutUs = () => {
  const [formSend, setFormSend] = useState(false);
  const [teamData, isLoading] = useApi("/team.json");

  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      resetForm();
      setFormSend(true);
      setTimeout(() => setFormSend(false), 5000);
    },
  });
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <SC.Container>
          <h2>
            Meet our <span>team</span>
          </h2>
          <SC.Team>
            {teamData.map((team) => (
              <EmployeePhotoInfo key={team.id} data={team}></EmployeePhotoInfo>
            ))}
          </SC.Team>
          <h2>
            Who <span>we</span> are?
          </h2>
          <SC.Description>
            We are a <span>bookstore </span>created in 1995. Our goal is to
            provide you with the best service and help you find your favorite
            book. Our <span>team</span> is specialized in providing you with the
            best solutions and advice so that you can make a great purchase. We
            are waiting <span>for you</span> at our branches or on our
            telephone/whatsapp channels.
          </SC.Description>

          <SC.ContactForm>
            <h2>
              Contact <span>Us</span>
            </h2>
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <SC.Error>{formik.errors.email}</SC.Error>
              )}
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                placeholder="Enter your subject"
                {...formik.getFieldProps("subject")}
              />
              {formik.touched.subject && formik.errors.subject && (
                <SC.Error>{formik.errors.subject}</SC.Error>
              )}
              <label htmlFor="message">Message</label>
              <textarea
                placeholder="Leave a message..."
                {...formik.getFieldProps("message")}
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <SC.Error>{formik.errors.message}</SC.Error>
              )}
              <Button type="submit">Send Email</Button>
              {formSend && <SC.Sent>Email sent</SC.Sent>}
            </form>
          </SC.ContactForm>
        </SC.Container>
      )}
    </Layout>
  );
};

export default AboutUs;
