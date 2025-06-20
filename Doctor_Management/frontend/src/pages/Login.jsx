import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [form, setFrom] = useState({ email: "", password: "" })
    const handlechange = (e) => {
        setFrom({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:7000/user/login', form)
            localStorage.setItem('token', response.data.token)
            alert("login successfully");
            setFrom({ email: "", password: "" });
        }
        catch (error) {
            alert("Invalid user");
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center p-4 font-primary">
            <div className="bg-gray-200 p-8 rounded-xl shadow-sm shadow-gray-900 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                        type="password"
                        name="password"
                        value={form.password}
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
                            Log In
                        </button>
                    </div>
                </form>
                <p className="text-center mt-4 text-sm font-medium text-gray-600">Create a new Account <Link to='/' className='text-blue-800 hover:underline'>Sign Up</Link> </p>
                <div className='flex mt-10 justify-between text-gray-600 font-medium'>
                    <Link to='/forget' className=''>Forget Password</Link>
                    <Link to='/reset' className=''>Reset Password</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;



