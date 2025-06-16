import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [form, setFrom] = useState({ name: "", email: "", phone: "", password: "" })
    const navigate = useNavigate();

    const handlechange = (e) => {
        setFrom({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:7000/user/createuser', form)
            alert("signup successfully");
            localStorage.setItem('email', form.email)
            setFrom({ name: "", email: "", phone: "", password: "" })
            navigate('/Otp')
        }
        catch (error) {
            console.error("Signup error:", error);
            alert("Enter correct detail")
        }
    }
    return (
        <div className="min-h-screen bg-gray-400 flex items-center justify-center p-4 font-primary">
            <div className="bg-gray-200 p-8 rounded-xl shadow-sm shadow-gray-900 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        placeholder="Full Name"
                        onChange={handlechange}
                        className="w-full px-4 py-2 border rounded-lg outline-none border-none shadow-sm shadow-gray-900"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handlechange}
                        placeholder="Email Address"
                        className="w-full px-4 py-2 border rounded-lg outline-none border-none shadow-sm shadow-gray-900"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handlechange}
                        placeholder="Phone Number"
                        className="w-full px-4 py-2 border rounded-lg outline-none border-none shadow-sm shadow-gray-900"
                        required
                    />
                    <input
                        type="password"
                        value={form.password}
                        name="password"
                        onChange={handlechange}
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg outline-none border-none shadow-sm shadow-gray-900"
                        required
                    />
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            className="w-30 bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition duration-300 cursor-pointer"
                        >
                            Sign Up
                        </button>
                    </div>

                </form>
                <p className="text-center mt-4 text-sm text-gray-600 font-medium">Already have an Account <Link to='/login' className='text-blue-800 hover:underline'>Login</Link> </p>
            </div>
        </div>
    );
};

export default Signup;

