import React from "react";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
  };

  return (
    <div
      id="Contact"
      style={{
        width: "300px",
        margin: "50px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <form
        action="https://getform.io/f/anllygoa"
        method="POST"
        className="bg-slate-200 p-5 rounded-lg"
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Send Your Message
        </h2>
        <label
          htmlFor="fullName"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          required
        />
        <label
          htmlFor="email"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email address"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          required
        />
        <label
          htmlFor="message"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Type your Query? here"
          style={{
            width: "100%",
            padding: "10px",
            height: "80px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          required
        />
        <button
          type="submit"
          className="bg-black text-white rounded-xl px-3 py-2 hover:scale-110 duration-200"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
