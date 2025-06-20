import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets_frontend/assets';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currency } = useContext(AppContext);
  const [doctorInfo, setDoctorInfo] = useState(null);
  const [slots, setSlots] = useState([]);
  const [selectedDayIndex, setSelectedDayIndex] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  useEffect(() => {
    const doctor = doctors.find(doctor => doctor._id === docId);
    setDoctorInfo(doctor);
  }, [doctors, docId]);

  useEffect(() => {
    if (doctorInfo) {
      generateSlots();
    }
  }, [doctorInfo]);

  const generateSlots = () => {
    const today = new Date();
    const generatedSlots = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      const endTime = new Date(currentDate);
      endTime.setHours(20, 30, 0, 0);

      if (i === 0) {
        currentDate.setHours(Math.max(10, today.getHours() + 1));
        currentDate.setMinutes(today.getMinutes() > 30 ? 0 : 30);
      } else {
        currentDate.setHours(10, 0, 0, 0);
      }

      const daySlots = [];
      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        daySlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
          isBooked: false,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      generatedSlots.push(daySlots);
    }
    setSlots(generatedSlots);
  };

  if (!doctorInfo || slots.length === 0) {
    return <div className="text-center py-10 text-lg font-semibold">Loading Doctor Information...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10">
      <div className="flex flex-col md:flex-row gap-8 bg-white shadow-md rounded-xl p-6">

        {/* Doctor Image */}
        <div className="flex justify-center md:w-1/3">
          <img
            src={doctorInfo.image}
            alt={doctorInfo.name}
            className="w-72 h-72 rounded-xl object-cover bg-blue-200 shadow-sm"
          />
        </div>

        {/* Doctor Details */}
        <div className="flex flex-col gap-6 md:w-2/3">
          <div className="flex items-center gap-2">
            <p className="text-3xl font-semibold text-gray-800">{doctorInfo.name}</p>
            <img src={assets.verified_icon} alt="Verified" className="w-6 h-6" />
          </div>

          <div className="flex flex-col gap-3 text-lg text-gray-600">
            <p>{doctorInfo.degree} - {doctorInfo.speciality}</p>
            <button className="bg-[#5f6FFF] text-white font-medium px-4 py-1 rounded-full w-max">
              {doctorInfo.experience} Experience
            </button>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-xl font-semibold text-gray-700">About</p>
              <img src={assets.info_icon} alt="Info" className="w-5 h-5" />
            </div>
            <p className="text-gray-600 text-justify leading-6">{doctorInfo.about}</p>
            <p className="font-semibold">Appointment Fee: {doctorInfo.fees} {currency}</p>
          </div>

          {/* Booking Slots */}
          <div className="pt-4">
            <p className="font-semibold mb-3">Booking Slots</p>

            {/* Responsive Day Selector */}
            <div className="hidden lg:flex gap-4 overflow-x-auto pb-4">
              {slots.map((daySlots, i) => {
                const firstSlot = daySlots[0]?.datetime;
                if (!firstSlot) return null;
                const dateStr = `${firstSlot.getDate()}-${firstSlot.getMonth() + 1}-${firstSlot.getFullYear()}`;
                return (
                  <div
                    key={i}
                    onClick={() => {
                      setSelectedDayIndex(selectedDayIndex === i ? null : i);
                      setSelectedTime(null);
                    }}
                    className={`px-2 py-1 rounded cursor-pointer border ${selectedDayIndex === i ? 'bg-[#5f6FFF] text-white ' : 'bg-white text-gray-700'}`}
                  >
                    <p>{weekdays[firstSlot.getDay()]}</p>
                    <p className=''>{dateStr}</p>
                  </div>
                );
              })}
            </div>

            <div className="
                grid grid-cols-3 gap-3 pb-4 lg:hidden">
              {slots.map((daySlots, i) => {
                const firstSlot = daySlots[0]?.datetime;
                if (!firstSlot) return null;
                const dateStr = `${firstSlot.getDate()}-${firstSlot.getMonth() + 1}-${firstSlot.getFullYear()}`;
                return (
                  <div
                    key={i}
                    onClick={() => {
                      setSelectedDayIndex(selectedDayIndex === i ? null : i);
                      setSelectedTime(null);
                    }}
                    className={`px-2 py-2 rounded cursor-pointer border text-center ${selectedDayIndex === i ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                  >
                    <p>{weekdays[firstSlot.getDay()]}</p>
                    <p className='text-sm'>{dateStr}</p>
                  </div>
                );
              })}
            </div>

            {selectedDayIndex !== null && (
              <div className="flex flex-wrap gap-3">
                {slots[selectedDayIndex].map((slot, i) => (
                  <button
                    key={i}
                    disabled={slot.isBooked}
                    onClick={() => setSelectedTime(slot.time)}
                    className={`px-4 py-2 rounded border
                      ${selectedTime === slot.time ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}
                      ${slot.isBooked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Book Button */}
          <div className="pt-4">
            <button
              disabled={!selectedTime}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300
                ${selectedTime ? 'bg-[#5f6FFF] hover:bg-[#4e5ae3] text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            >
              {selectedTime ? `Book Appointment at ${selectedTime}` : 'Book Appointment'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
