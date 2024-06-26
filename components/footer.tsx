import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Pritto Ruban. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website: </span>
        Built with React & Next.js (App Router & Server Actions), TypeScript,
        Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
        <br />
        <span>
          Made with ❤️ By{" "}
          <a href="https://www.linkedin.com/in/prittoruban/">Pritto Ruban</a>
        </span>
      </p>
    </footer>
  );
}
