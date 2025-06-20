import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
    const { speciality } = useParams();
    const [filter, setFilter] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);

    const addfilter = () => {
        if (speciality) {
            setFilter(doctors.filter(doc => doc.speciality === speciality));
        } else {
            setFilter(doctors);
        }
    };

    useEffect(() => {
        addfilter();
    }, [doctors, speciality]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-10">
            <p className='text-gray-600'>Browse through the doctors specialist.</p>

            <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
                <button
                    className={`py-1 px-3 rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-blue-100 shadow-sm shadow-gray-500' : 'bg-white shadow-sm shadow-gray-500'}`}
                    onClick={() => setShowFilter(prev => !prev)}
                >
                    Filters
                </button>

                <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden'} sm:flex sm:flex-col`}>
                    <div className="flex flex-wrap gap-4 sm:hidden">
                        {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((spec, id) => (
                            <p
                                key={id}
                                onClick={() => speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`)}
                                className={`flex-1 min-w-[calc(50%-0.5rem)] sm:w-auto pl-3 py-1.5 pr-16 rounded transition-all cursor-pointer ${speciality === spec ? 'bg-blue-100 text-black shadow-sm shadow-gray-400' : 'bg-white shadow-sm shadow-gray-400 border- border-gray-400'}`}
                            >
                                {spec}
                            </p>
                        ))}
                    </div>

                    {/* For tablet and desktop screens, maintain the original layout */}
                    <div className="hidden sm:flex sm:flex-col gap-4">
                        {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((spec, id) => (
                            <p
                                key={id}
                                onClick={() => speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`)}
                                className={`w-full sm:w-auto pl-3 py-1.5 pr-16 text-gray-600 font-medium rounded transition-all cursor-pointer ${speciality === spec ? 'bg-blue-200 text-black shadow-sm shadow-gray-500' : 'bg-white shadow-sm shadow-gray-500 border- border-gray-400'}`}
                            >
                                {spec}
                            </p>
                        ))}
                    </div>
                </div>


                <div className='w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {filter.map((item, index) => (
                        <div
                            onClick={() => navigate(`/appointments/${item._id}`)}
                            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                            key={index}
                        >
                            <img className='bg-blue-50 w-full' src={item.image} alt={item.name} />
                            <div className='p-4'>
                                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                    <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                                    <p>Available</p>
                                </div>
                                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                                <p className='text-gray-600 text-sm'>{item.speciality}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctors;
