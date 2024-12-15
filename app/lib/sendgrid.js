import sgMail from "@sendgrid/mail";

export const sendEmail = async ({
  to,
  templateName,
  dynamicTemplateData,
}) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to,
    from: {
      email: "donotreply@ductdaddykc.com",
      name: "Duct Daddy Duct Cleaning",
    },
    templateId: templates[templateName],
    dynamicTemplateData
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email");
  }
};

const templates = {
  ContactForm: "d-80fcb8cf0a75485186cfac914a0b4970",
  // AnotherSubmission: "d-166075e6421643d88b874ebecfc90509", -- for more templates
};