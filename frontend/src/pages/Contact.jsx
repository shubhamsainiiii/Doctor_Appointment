import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        alert("Thank you! Your message has been submitted.");
        setForm({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center py-10 px-4">
            <div className="max-w-6xl w-full p-6 md:p-10 flex flex-col md:flex-row gap-10">

                {/* Left Side Image */}
                <div className="md:w-1/2 flex justify-center items-center">
                    <div className="w-full h-auto max-h-[500px]">
                        <img
                            src={assets.contact_image}
                            alt="Doctor"
                            className="rounded-lg w-full h-full object-contain"
                        />
                    </div>
                </div>


                {/* Right Side Contact Form */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-700">Contact Us</h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Write your message"
                                required
                            />
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-8 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;
