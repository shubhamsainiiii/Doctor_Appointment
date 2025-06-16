import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets_frontend/assets';

const About = () => {
  const whyChooseUsItems = [
    {
      title: "Efficiency:",
      desc: "Streamlined appointment scheduling that fits into your busy lifestyle."
    },
    {
      title: "Convenience:",
      desc: "Access to a network of trusted healthcare professionals in your area."
    },
    {
      title: "Personalization:",
      desc: "Tailored recommendations and reminders to help you stay on top of your health."
    }
  ];

  return (
    <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10'>

      {/* Heading */}
      <motion.div
        className='text-center text-3xl mb-10'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p className='text-gray-800 font-semibold'>ABOUT US</p>
      </motion.div>

      {/* About Section */}
      <motion.div
        className='my-16 flex flex-col md:flex-col lg:flex-row gap-12 items-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
      >

        {/* Image Animation */}
        <motion.img
          className='w-full md:max-w-[460px] rounded-lg shadow-md'
          src={assets.about_image}
          alt="About Prescripto"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Text Animation */}
        <motion.div
          className='flex flex-col justify-center gap-6 text-lg font-medium text-gray-900 md:w-full lg:w-1/2 text-justify'
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.3 }}
        >
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <b className='text-gray-900 text-2xl font-semibold'>Our Vision</b>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </motion.div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        className='text-2xl text-center font-semibold text-gray-900 my-10'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
      >
        WHY CHOOSE US
      </motion.div>

      <div className='flex flex-col md:flex-row gap-8 mb-20'>
        {whyChooseUsItems.map((item, index) => (
          <motion.div
            key={index}
            className='rounded-xl px-8 md:px-12 py-10 flex flex-col gap-4 text-[15px] hover:bg- hover:text-white transition-all duration-300 text-gray-600 cursor-pointer shadow-sm shadow-gray-500'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            <b>{item.title}</b>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
