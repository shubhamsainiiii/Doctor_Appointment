import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const Speciality = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800 px-4' id='speciality'>
      <h1 className='text-2xl sm:text-3xl font-medium text-center'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm leading-relaxed'>
        Simply browse through our extensive list of trusted doctors,
        <br className='hidden sm:block' />
        <span className='sm:hidden'> </span>
        schedule your appointment hassle-free.
      </p>

      {/* Mobile: Grid layout (3 per row), Tablet+: Horizontal scroll */}
      <div className='w-full pt-5'>
        {/* Mobile Grid Layout */}
        <div className='grid grid-cols-3 gap-4 sm:hidden'>
          {specialityData.map((item, index) => (
            <Link
              onClick={() => scrollTo(0, 0)}
              className='flex flex-col items-center text-xs cursor-pointer hover:translate-y-[-5px] transition-all duration-300'
              key={index}
              to={`/doctors/${item.speciality}`}
            >
              <img className='w-12 mb-2' src={item.image} alt={item.speciality} />
              <p className='text-center leading-tight'>{item.speciality}</p>
            </Link>
          ))}
        </div>

        {/* Tablet+ Horizontal Scroll Layout */}
        <div className='hidden sm:flex sm:justify-center gap-4 w-full overflow-x-auto pb-2'>
          {specialityData.map((item, index) => (
            <Link
              onClick={() => scrollTo(0, 0)}
              className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 mt-5 hover:translate-y-[-6px] transition-all duration-500'
              key={index}
              to={`/doctors/${item.speciality}`}
            >
              <img className='w-16 sm:w-20 md:w-24 mb-2' src={item.image} alt={item.speciality} />
              <p className='text-center'>{item.speciality}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Speciality