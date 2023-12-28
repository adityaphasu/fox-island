# 🦊 Fox Island

Welcome to Fox Island, a whimsical and fantastical digital world where curious foxes roam and playful adventures unfold.

## 📝 Description

This is a React application which uses three.js to render a 3D sland with foxes. The user can interact with the island by dragging it causing it to rotate and clicking on the popups as they appear to visit the respective pages.

## 📸 Demo

https://github.com/adityaphasu/fox-island/assets/101468793/14b15445-c2f5-4f5e-92a3-580e03bb67c3

## 🏗️ Built With

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🌟 Features

- An interactive 3D island with foxes, planes, birds, popups and a song which plays in the background.
- Information about the island and the foxes.
- Facts about foxes.
- Contact form powered by emailJS and a fox model which moves when the user starts typing in the form and starts running when they successfully submit the form.

## 🛠️ Installation Steps

To run Fox Island locally, follow these steps:

- Clone the repository
- Navigate to the project directory: `cd fox-island`
- Install dependencies: `npm install`
- Start the development server: `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
- Create a `.env.local` file in the root directory and add the following environment variables:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

- Create a [EmailJS](https://www.emailjs.com/) account and add the service ID, template ID and public key to the `.env.local` file.

## 🙏 Acknowledgements

This project is inspired by [3D Portfolio Website Tutorial](https://www.youtube.com/watch?v=FkowOdMjvYo&t=8014s) by [JavaScript Mastery](https://www.youtube.com/@javascriptmastery).

- I have used the same 3D island and fox model but have added my own customizations and features.
