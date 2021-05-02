import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/svgs/phone.svg";
import email from "../img/svgs/emailme.svg";
import location from "../img/svgs/location.svg";
import Title from "../Components/Title";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Title title={"Contact"} />
      </div>
      <div className="ContactPage">
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            title={"Phone"}
            text={"+880-1675311750"}
          />
          <ContactItem
            icon={email}
            title={"Email"}
            text={"jany.java@gmail.com"}
          />
          <ContactItem
            icon={location}
            title={"Address"}
            text={"Savar, Dhaka-1343"}
          />
        </div>
       
      </div>
    </div>
  );
}

export default ContactPage;
