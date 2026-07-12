import emailjs from "@emailjs/browser";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

async function sendViaEmailJS(form: ContactFormData): Promise<void> {
  const serviceId =
    import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_xqzyvbd";
  const templateId =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_rznno6p";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!publicKey) {
    throw new Error(
      "Email service is unavailable. Please email nirbikar05@gmail.com directly."
    );
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: form.name,
      from_email: form.email,
      to_name: "Nirbikar",
      to_email: "nirbikar05@gmail.com",
      message: form.message,
    },
    { publicKey }
  );
}

export async function sendContactMessage(form: ContactFormData): Promise<void> {
  const apiBaseUrl = import.meta.env.VITE_API_URL ?? "http://localhost:8081";
  const apiUrl = `${apiBaseUrl.replace(/\/$/, "")}/api/contact`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      mode: "cors",
      body: JSON.stringify(form),
    });

    if (response.ok) {
      return;
    }

    const errorText = await response.text();
    throw new Error(
      errorText || `Failed to send message (status ${response.status})`
    );
  } catch (backendError) {
    console.error("Backend submission error:", backendError);
    await sendViaEmailJS(form);
  }
}
