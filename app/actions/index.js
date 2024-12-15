"use server";

import { sendEmail } from "../lib/sendgrid";

export const sendContactEmailAction = async (formData) => {
  try {
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const service = formData.get("service");
    const message = formData.get("message");

    await sendEmail({
      to: "ductdaddykc@gmail.com",
      templateName: "ContactForm",
      dynamicTemplateData: {
        name,
        email,
        phone,
        email,
        service,
        message,
      },
    });

    return { errorMessage: null };
  } catch (error) {
    console.error(error);
    return { errorMessage: "Something went wrong" };
  }
};
