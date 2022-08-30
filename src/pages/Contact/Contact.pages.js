import React from "react";
import { Grid, TextField, Typography } from "@material-ui/core";

import CustomButton from "../../components/Button/CustomButton.components.js";
import resume from "../../utils/resume";
import "../Contact/Contact.styles.css";

import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Send form email
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_USER_ID
        )
        .then(() => reset());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Contact */}
      <Grid container className="section pb_45">
        {/* Contact form */}
        <Grid item xs={12} lg={6}>
          <Grid container className="pt_45">
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Form</h6>
            </Grid>

            <Grid item xs={10}>
              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                // noValidate
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      error={errors.name ? true : false}
                      fullWidth
                      name="name"
                      inputRef={register({ required: true })}
                      label="Name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      error={errors.email ? true : false}
                      fullWidth
                      name="email"
                      inputRef={register({
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      label="E-mail"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={errors.message ? true : false}
                      fullWidth
                      name="message"
                      label="Message"
                      inputRef={register({ required: true })}
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12} className="">
                    <CustomButton text="Submit" type="submit" />
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>

        {/* Contact information */}
        <Grid item xs={12} lg={6}>
          <Grid container className="pt_45">
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Information</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Address: </span> {resume.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Phone: </span> {resume.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Email: </span> {resume.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container className="contactInfo_socialsContainer">
                {Object.keys(resume.socials).map((key) => (
                  <Grid item key={key} className="contactInfo_social">
                    <a
                      href={resume.socials[key].link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {resume.socials[key].icon}
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
