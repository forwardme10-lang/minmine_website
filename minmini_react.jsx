// LandingPage.jsx

import React from "react";
import { motion } from "framer-motion";

/* Animation Wrapper */
const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-5">
        <div className="text-lg font-semibold">Minmini</div>
        <button className="px-5 py-2 bg-black text-white rounded-full hover:opacity-90 transition">
          Get App
        </button>
      </nav>

      {/* HERO */}
      <section className="relative text-center py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white -z-10" />

        <FadeIn>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            Intelligence that works for you — instantly.
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-6 text-gray-600 text-lg max-w-xl mx-auto">
            Turn simple messages into real actions. One assistant. Everything done.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <button className="mt-8 px-6 py-3 bg-black text-white rounded-full shadow-md hover:shadow-lg transition">
            Get Started
          </button>
        </FadeIn>
      </section>

      {/* FEATURES */}
      <section className="bg-[#f8f9fb] py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <FadeIn>
            <h2 className="text-4xl font-semibold mb-16">
              Do more, without switching apps
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Send messages effortlessly",
              "Manage tasks & reminders",
              "Access contacts easily",
              "Share Google Photos",
              "Quick UPI payments",
              "Get latest news",
            ].map((title, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-left shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 bg-gray-200 rounded mb-4"></div>
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-gray-500 text-sm mt-2">
                    Simple and fast actions powered by AI.
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">

          <FadeIn>
            <h2 className="text-4xl font-semibold">
              Just type. We’ll handle the rest.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-4 text-gray-500">
              You type → AI understands → Action happens
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                "Remind me to call mom",
                "@Mom send photos",
                "Pay electricity bill",
              ].map((text, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition"
                >
                  {text}
                </span>
              ))}
            </div>
          </FadeIn>

        </div>
      </section>

      {/* TRUST */}
      <section className="py-28 px-6 text-center">
        <FadeIn>
          <h2 className="text-4xl font-semibold mb-12">
            Built for trust
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {[
            "You control your data",
            "Permissions anytime",
            "Secure external payments",
          ].map((text, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-200 rounded mb-4"></div>
                <p className="text-gray-700">{text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black text-white py-32 text-center px-6">
        <div className="max-w-3xl mx-auto">

          <FadeIn>
            <h2 className="text-4xl font-semibold">
              Your everyday tasks, simplified
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-4 text-gray-300">
              Start using an assistant that actually gets things done.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <button className="mt-8 px-6 py-3 bg-white text-black rounded-full shadow-lg hover:scale-105 transition">
              Get Started
            </button>
          </FadeIn>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-gray-500">
        You can manage permissions anytime in Settings.
      </footer>

    </div>
  );
};

export default LandingPage;