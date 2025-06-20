import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Forget = () => {
    const [step, setStep] = useState("checkMail"); // 1 = email, 2 = otp, 3 = new password
    const [form, setForm] = useState({
        email: '',
        otp: '',
        newpassword: '',
        confirmpassword: ''
    });
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:7000/user/forget', { email: form.email });
            alert("OTP sent to your email");
            setStep("verifyOTP");
        } catch (error) {
            alert("Invalid Email");
        }
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:7000/user/verifyotp', { email: form.email, otp: form.otp });
            alert("OTP Verified");
            setStep("updatePassword");
        } catch (error) {
            alert("Invalid OTP");
        }
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        if (form.newpassword !== form.confirmpassword) {
            return alert("Passwords do not match");
        }

        try {
            await axios.patch('http://localhost:7000/user/updatepassword', {
                email: form.email,
                newpassword: form.newpassword
            });
            alert("Password updated successfully");
            setForm({ email: '', otp: '', newpassword: '', confirmpassword: '' });
            navigate('/login')
        } catch (error) {
            alert("Error updating password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 font-primary">
            <div className="bg-gray-200 p-8 rounded-xl shadow-sm shadow-gray-900 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
                    {step === "checkMail" && "Forgot Password"}
                    {step === "verifyOTP" && "Enter OTP"}
                    {step === "updatePassword" && "Set New Password"}
                </h2>

                {step === "checkMail" && (
                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg outline-none border-none shadow-sm shadow-gray-900"
                            required
                        />
                        <div className='flex justify-center'>
                            <button type="submit" className="w-30 bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition duration-300 cursor-pointer">
                                Send OTP
                            </button>
                        </div>
                    </form>
                )}

                {step === "verifyOTP" && (
                    <form onSubmit={handleOtpSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="otp"
                            value={form.otp}
                            onChange={handleChange}
                            placeholder="Enter OTP"
                            className="w-full px-4 py-2 border rounded-lg outline-none border-none shadow-sm shadow-gray-900"
                            required
                        />
                        <div className='flex justify-center'>
                            <button type="submit" className="w-30 bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition duration-300 cursor-pointer">
                                Verify OTP
                            </button>
                        </div>
                    </form>
                )}

                {step === "updatePassword" && (
                    <form onSubmit={handlePasswordSubmit} className="space-y-4">
                        <input
                            type="password"
                            name="newpassword"
                            value={form.newpassword}
                            onChange={handleChange}
                            placeholder="New Password"
                            className="w-full px-4 py-2 border rounded-lg outline-none border-none shadow-sm shadow-gray-900"
                            required
                        />
                        <input
                            type="password"
                            name="confirmpassword"
                            value={form.confirmpassword}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            className="w-full px-4 py-2 border rounded-lg outline-none border-none shadow-sm shadow-gray-900"
                            required
                        />
                        <div className='flex justify-center'>
                            <button type="submit" className="w-35 bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition duration-300 cursor-pointer">
                                Update Password
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Forget;
