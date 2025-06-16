import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Reset = () => {
    const [form, setForm] = useState({ email: "", oldpassword: "", newpassword: "" })

    const handlechange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch('http://localhost:7000/user/reset', form)
            alert("password reset successfully")
            setForm({ email: "", oldpassword: "", newpassword: "" })
        }
        catch (error) {
            alert("invalid user");
        }
    }
    return (
        <div className="min-h-screen bg-gray-400 flex items-center justify-center p-4 font-primary">
            <div className="bg-gray-200 p-8 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
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
                        name="oldpassword"
                        value={form.oldpassword}
                        onChange={handlechange}
                        placeholder="Old Password"
                        className="w-full px-4 py-2 border rounded-lg outline-none border-none shadow-sm shadow-gray-900"
                        required
                    />
                    <input
                        type="password"
                        name="newpassword"
                        value={form.newpassword}
                        onChange={handlechange}
                        placeholder="New Password"
                        className="w-full px-4 py-2 border rounded-lg outline-none border-none shadow-sm shadow-gray-900"
                        required
                    />
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            className="w-35 bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition duration-300 cursor-pointer"
                        >
                            Save Password
                        </button>
                    </div>
                </form>
                <div className='flex mt-10 items-center justify-center font-medium'>
                    <Link to='/login' className='text-blue-800 hover:underline'>Log in</Link>
                </div>
            </div>
        </div>
    )
}

export default Reset 
