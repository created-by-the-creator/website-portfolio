import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tguy887",
        "template_zzjorkw",
        form.current,
        "gAcwHqmw93Wuc60QG"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
      });
  };

  return (
    <>
      <style>
        {`
          .contact-container {
            width: 100%;
            max-width: 700px;
            background: #fff;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 8px 24px rgba(0,0,0,.08);
          }

          .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 20px;
          }

          .contact-title {
            font-family: Lexend, sans-serif;
            font-size: 50px;
            font-weight: 700;
            color: #2D1A2C;
            text-align: center;
            margin-bottom: 10px;
          }

          @media (max-width: 768px) {
            .contact-container {
              padding: 25px;
            }

            .contact-grid {
              grid-template-columns: 1fr;
            }

            .contact-title {
              font-size: 36px;
            }
          }

          @media (max-width: 480px) {
            .contact-container {
              padding: 20px;
              border-radius: 16px;
            }

            .contact-title {
              font-size: 30px;
            }
          }
        `}
      </style>

      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        <div className="contact-container">
          <h1 className="contact-title">
            Contact <span className="gradient-text">Me</span>
          </h1>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "17px",
              color: "#8B7D8A",
              textAlign: "center",
              marginBottom: "35px",
            }}
          >
            Have a question, collaboration, or just want to say hello? Fill out
            the form below and I'll get back to you as soon as possible.
          </p>

          <form ref={form} onSubmit={sendEmail}>
            <div className="contact-grid">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                style={inputStyle}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                style={inputStyle}
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              style={{
                ...inputStyle,
                width: "100%",
                marginBottom: "20px",
              }}
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              style={{
                ...inputStyle,
                width: "100%",
                resize: "vertical",
                marginBottom: "25px",
              }}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                borderRadius: "12px",
                background: "#2D1A2C",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  border: "1px solid #ddd",
  borderRadius: "12px",
  fontSize: "15px",
  fontFamily: "Inter, sans-serif",
  outline: "none",
  boxSizing: "border-box",
};