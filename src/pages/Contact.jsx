import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import AnimatedPage from "../components/AnimatedPage";
import { pageAnimation } from "../utils/animatedVariants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = (e) => setCurrentAnimation("walk");

  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Aditya",
          from_email: form.email,
          to_email: "adityaphasu919@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({ show: true, text: "Message sent successfully!", type: "success" });
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        setCurrentAnimation("idle");
        showAlert({
          show: true,
          text: "Whoops! It seems I didn't recieve your message, Please try again!",
          type: "danger",
        });
      });
  };

  return (
    <AnimatedPage
      variants={pageAnimation}
      className="max-container relative flex flex-col lg:flex-row">
      <div className="flex min-w-[50%] flex-1 flex-col">
        {alert.show && <Alert {...alert} />}
        <h1 className="head-text">Share Your Thoughts!</h1>
        <form onSubmit={handleSubmit} ref={formRef} className="mt-14 flex w-full flex-col gap-7">
          <label htmlFor="name" className="label">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Reno"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label htmlFor="email" className="label">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Reno@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label htmlFor="message" className="label">
            Message
            <textarea
              type="text"
              name="message"
              className="input"
              placeholder="Share your tales or simply say hello!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button type="submit" className="btn" onFocus={handleFocus} onBlur={handleBlur}>
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      <div className="h-[350px] w-full md:h-[550px] lg:h-auto lg:w-1/2">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}>
          <directionalLight intensity={4} position={[0, 0, 1]} />
          <ambientLight intensity={0.3} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.7, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
