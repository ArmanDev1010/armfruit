import React, { useRef } from "react";

import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Forms = () => {
  const { t } = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_itvav63",
      "template_9sjcgoo",
      form.current,
      "x7Ib8d8lZUgz6Udmg"
    );

    e.target.reset();
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
      <div className="flex gap-3 max-stablet:flex-col">
        <input
          type="text"
          name="user_firstname"
          placeholder={t("contact.form.firstname")}
          className="flex-[0.5] border-[2px] border-[#f3f3f3] rounded-[50vw] px-4 py-3.5 text-[17px] text-[#222] outline-0"
        />
        <input
          type="text"
          name="user_lastname"
          placeholder={t("contact.form.lastname")}
          className="flex-[0.5] border-[2px] border-[#f3f3f3] rounded-[50vw] px-4 py-3.5 text-[17px] text-[#222] outline-0"
        />
      </div>
      <input
        type="email"
        name="user_email"
        placeholder={t("contact.form.email")}
        className="border-[2px] border-[#f3f3f3] rounded-[50vw] px-4 py-3.5 text-[17px] text-[#222] outline-0"
      />
      <input
        type="text"
        name="user_phone"
        placeholder={t("contact.form.phone")}
        className="border-[2px] border-[#f3f3f3] rounded-[50vw] px-4 py-3.5 text-[17px] text-[#222] outline-0"
      />
      <textarea
        name="message"
        placeholder={t("contact.form.message")}
        className="border-[2px] border-[#f3f3f3] rounded-[15px] px-4 py-3.5 text-[17px] text-[#222] h-[150px] resize-none outline-0"
      />
      <input
        type="submit"
        value={t("contact.form.submit")}
        className="bg-thirdly text-white text-xl py-3.5 rounded-[50vw] font-[500] cursor-pointer transition duration-300 hover:bg-[#81B518]"
      />
    </form>
  );
};

export default Forms;
