import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Otp = () => {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    const email = localStorage.getItem('email');

    const handleChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            alert("Email not found. Please try again.");
            navigate('/login');
            return;
        }

        try {
            await axios.post('http://localhost:7000/user/verifyotp', { email, otp });
            alert("OTP Verified Successfully");
            localStorage.removeItem('email');
            navigate('/login');
        } catch (error) {
            console.error("Verification error:", error);
            alert("Invalid OTP. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-400 flex items-center justify-center p-4 font-primary">
            <div className="bg-gray-200 p-8 rounded-xl shadow-sm shadow-gray-900 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">OTP Verification</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="otp"
                        value={otp}
                        onChange={handleChange}
                        placeholder="Enter OTP"
                        className="w-full px-4 py-2 border rounded-lg outline-none border-none shadow-sm shadow-gray-900"
                        required
                    />
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            className="w-30 bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition duration-300 cursor-pointer"
                        >
                            Verify OTP
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Otp;
