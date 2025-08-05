import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import { FaCheckCircle, FaTimesCircle, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import contactUsAnimation from "../../public/assets/contact-us-lottie.json";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const templateParams = { name, email, message };

    try {
      await emailjs.send("service_u9uwr47", "template_514turg", templateParams, "X4LI41cgdRB_wHeEN");
      await emailjs.send("service_u9uwr47", "template_lz0jfvc", templateParams, "X4LI41cgdRB_wHeEN");

      setStatus("success");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: contactUsAnimation,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 px-6 md:px-12 lg:px-32 text-gray-700"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Title Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-space text-left mb-4">
            Contact Me
          </h2>
          <p className="text-gray-600 text-left text-lg md:text-xl max-w-2xl">
            Have a project in mind or just want to say hello? I’d love to hear from you.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Lottie Animation */}
          <div className="hidden md:flex justify-center items-center">
            <Lottie options={lottieOptions} height={280} width={280} />
          </div>

          {/* Form Block */}
          <div>
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-cyan-500 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-cyan-500 transition"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-cyan-500 transition h-36 resize-none"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full py-3 rounded-md font-medium transition-colors ${
                  status === "loading"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-cyan-600 hover:bg-cyan-700 text-white"
                }`}
              >
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-green-600"
                >
                  <FaCheckCircle size={20} />
                  Sent successfully.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-red-600"
                >
                  <FaTimesCircle size={20} />
                  Oops! Please try again.
                </motion.div>
              )}
            </form>


          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
