import React from "react";
import { useState } from "react";
import { init, send } from "emailjs-com";

const Contact = () => {
  const [nameOrCompanyName, setNameOrCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("PleaseSelectACategory");
  const [message, setMessage] = useState("");

  // send mail
  const sendMail = () => {
    const userID = process.env.REACT_APP_USER_ID;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;

    if (
      userID !== undefined &&
      serviceID !== undefined &&
      templateID !== undefined
    ) {
      init(userID);

      const template_param = {
        name: nameOrCompanyName,
        email: email,
        category: category,
        message: message,
      };

      send(serviceID, templateID, template_param).then(() => {
        window.alert("Success!!");

        setNameOrCompanyName("");
        setEmail("");
        setCategory("PleaseSelectACategory");
        setMessage("");
      });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    sendMail();
  };

  const disableSend =
    nameOrCompanyName === "" ||
    email === "" ||
    category === "PleaseSelectACategory" ||
    message === "";

  // character count
  const [length, setLength] = useState(0);
  const checkTextArea = (e) =>
    setLength(e.target.value.replace(/\n/g, "").length);

  return (
    <div className="container" id="contact">
      <div className="main">
        <h1 className="head-line1">Contact</h1>
        <div className="contents imitation-text">
          <form>
            <div className="input-field form-child">
              <input
                className="input-form normal-text"
                value={nameOrCompanyName}
                type="text"
                placeholder="Name or Company Name"
                onChange={(e) => setNameOrCompanyName(e.target.value)}
              />
            </div>
            <div className="input-field form-child">
              <input
                className="input-form normal-text"
                value={email}
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="select-field form-child">
              <select
                className="select-form normal-text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option
                  className="imitation-text"
                  value="PleaseSelectACategory"
                  disabled
                >
                  Please select a category
                </option>
                <option className="normal-text" value="JobRequest">
                  Job Request
                </option>
                <option className="normal-text" value="ContactUs">
                  Contact Us
                </option>
                <option className="normal-text" value="OtherQuestions">
                  Other questions
                </option>
              </select>
            </div>
            <div className="textarea-field form-child imitation-text">
              <textarea
                className="textarea-form normal-text"
                value={message}
                rows="4"
                placeholder="Please enter content"
                onChange={(e) => {
                  setMessage(e.target.value);
                  checkTextArea(e);
                }}
                maxLength="1000"
              />
              <p className="counter normal-text">{length} / 1000</p>
            </div>
            <button
              className="submit-button form-child"
              type="submit"
              onClick={handleClick}
              disabled={disableSend}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
