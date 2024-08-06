import Circles from "../../components/Circles";
import { HiArrowRight } from "react-icons/hi2";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2b117e8f-0299-4038-b892-e72d89053502");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="h-[100vw]">
      <div className="container mx-auto text-center xl:text-left flex items-center justify-center w-full overflow-x-scroll">
        <div className="flex flex-col w-full  max-w-[700px] ">
          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let´s <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            onSubmit={onSubmit}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-1 flex-col gap-6 w-full mx-auto py-3"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="subject"
              className="input"
              required
            />
            <textarea
              name="message"
              placeholder="message"
              className="textarea"
              required
            />
            <span>{result}</span>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <button
                type="submit"
                className="mt-3 btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-scroll hover:border-accent group"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Let´s talk
                </span>
                <HiArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
