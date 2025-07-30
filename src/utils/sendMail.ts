import emailjs from "@emailjs/browser";

export const send2FAEmail = async (email: string, code: string) => {
  await emailjs.send(
    "service_pvi6gfa",
    "template_isdxtnb",
    { email, passcode: code },
    "ClMAVIYuwm9U_Z4mo"
  );
};
