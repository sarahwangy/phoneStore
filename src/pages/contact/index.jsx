import React from "react";
import { Contact, Title, FormWrapper, SubTitle } from "./style.jsx";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <Contact>
      <div className="wrapper">
        <Title>
          <b> what is your story?</b>
        </Title>
        <SubTitle>Please Contact us</SubTitle>

        <form>
          {/* formwrapper 如果放在 form外面，那么flex 只会对整个form起作用
            不会对input，button，textarea起作用，如果放在form里面，那么会对wrapper里面
            包裹的子元素input，button起作用，可以用flex控制居中 */}
          <FormWrapper>
            <input
              style={{ backgroundColor: "lightblue" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: "lightblue" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: "lightblue" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: "lightblue" }}
              rows={5}
              placeholder="Message"
              name="message"
            />
            <Link to={`/`}>
              <button>Submit</button>
            </Link>
          </FormWrapper>
        </form>
      </div>
    </Contact>
  );
}
