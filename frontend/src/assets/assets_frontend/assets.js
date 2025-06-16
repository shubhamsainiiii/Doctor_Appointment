import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import doc16 from './doc16.jpg'
import doc17 from './doc17.png'
import doc18 from './doc18.png'
import doc19 from './doc19.png'
import doc20 from './doc20.jpg'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Rajiv Patel',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Patel has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500, // Fees in INR
        address: {
            line1: '17th Cross, Richmond Circle',
            line2: 'MG Road, Bengaluru, Karnataka'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Priya Sharma',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Sharma is dedicated to providing comprehensive medical care with a focus on preventive medicine and effective treatment strategies.',
        fees: 600, // Fees in INR
        address: {
            line1: '27th Main, HSR Layout',
            line2: 'Sector 2, Bengaluru, Karnataka'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Arjun Mehta',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Mehta focuses on delivering comprehensive medical care with an emphasis on preventive medicine and early diagnosis.',
        fees: 300, // Fees in INR
        address: {
            line1: '37th Avenue, Anna Nagar',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Vikram Singh',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Kapoor is committed to comprehensive medical care, focusing on preventive strategies and early diagnosis.',
        fees: 400, // Fees in INR
        address: {
            line1: '47th Street, Bandra West',
            line2: 'Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Ananya Kapoor',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Singh provides comprehensive medical care with a strong focus on preventive medicine and effective treatment strategies.',
        fees: 1500, // Fees in INR
        address: {
            line1: '57th Lane, Koregaon Park',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Vikas Khurana',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Gupta is dedicated to comprehensive medical care, focusing on preventive medicine and effective treatment strategies.',
        fees: 1500, // Fees in INR
        address: {
            line1: '57th Cross, Indiranagar',
            line2: 'Bengaluru, Karnataka'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Rohit Verma',
        image: doc7,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Verma has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine and early diagnosis.',
        fees: 500, // Fees in INR
        address: {
            line1: '17th Main, Koramangala',
            line2: 'Bengaluru, Karnataka'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Amit Gupta',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Iyer is dedicated to providing comprehensive medical care with a focus on preventive medicine and effective treatment strategies.',
        fees: 1000, // Fees in INR
        address: {
            line1: '27th Sector, Noida',
            line2: 'Uttar Pradesh'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Swati Reddy',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Nair focuses on delivering comprehensive medical care with an emphasis on preventive medicine and early diagnosis.',
        fees: 800, // Fees in INR
        address: {
            line1: '37th Road, Juhu',
            line2: 'Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Aditya Nair',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Reddy is committed to comprehensive medical care, focusing on preventive strategies and early diagnosis.',
        fees: 700, // Fees in INR
        address: {
            line1: '47th Avenue, Alwarpet',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Tanvi Choudhury',
        image: doc11,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Desai provides comprehensive medical care with a strong focus on preventive medicine and effective treatment strategies.',
        fees: 1200, // Fees in INR
        address: {
            line1: '57th Street, Banjara Hills',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Kunal Desai',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Choudhury is dedicated to comprehensive medical care, focusing on preventive medicine and effective treatment strategies.',
        fees: 1500, // Fees in INR
        address: {
            line1: '57th Road, Salt Lake',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Ritu Malhotra',
        image: doc13,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Banerjee has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine and early diagnosis.',
        fees: 600, // Fees in INR
        address: {
            line1: '17th Cross, Whitefield',
            line2: 'Bengaluru, Karnataka'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Amit Banerjee',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Malhotra is dedicated to providing comprehensive medical care with a focus on preventive medicine and effective treatment strategies.',
        fees: 900, // Fees in INR
        address: {
            line1: '27th Main, Rajajinagar',
            line2: 'Bengaluru, Karnataka'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Neha Soni',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Menon focuses on delivering comprehensive medical care with an emphasis on preventive medicine and early diagnosis.',
        fees: 750, // Fees in INR
        address: {
            line1: '37th Avenue, Velachery',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc16',
        name: 'Dr. Rahul Sharma',
        image: doc16,
        speciality: 'Neurologist',
        degree: 'MBBS, MD (Neurology)',
        experience: '8 Years',
        about: 'Dr. Rahul Sharma is a highly skilled neurologist with expertise in treating complex neurological disorders and providing patient-centric care.',
        fees: 1200,
        address: {
            line1: '45 MG Road, Sector 25',
            line2: 'Gurgaon, Haryana'
        }
    },
    {
        _id: 'doc17',
        name: 'Dr. Priya Mehta',
        image: doc17,
        speciality: 'Gynecologist',
        degree: 'MBBS, MS (OBG)',
        experience: '5 Years',
        about: 'Dr. Priya Mehta specializes in women’s health and provides expert care in obstetrics, gynecology, and reproductive health.',
        fees: 900,
        address: {
            line1: '12 Park Street',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc18',
        name: 'Dr. Aman Verma',
        image: doc18,
        speciality: 'Pediatricians',
        degree: 'MBBS, DCH',
        experience: '4 Years',
        about: 'Dr. Aman Verma is dedicated to ensuring the health and well-being of children, offering comprehensive pediatric care.',
        fees: 800,
        address: {
            line1: '23 Civil Lines',
            line2: 'Kanpur, Uttar Pradesh'
        }
    },
    {
        _id: 'doc19',
        name: 'Dr. Sneha Kapoor',
        image: doc19,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, DM (Gastroenterology)',
        experience: '6 Years',
        about: 'Dr. Sneha Kapoor provides expert diagnosis and treatment for a wide range of digestive disorders with a patient-centered approach.',
        fees: 1100,
        address: {
            line1: '78 Residency Road',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'doc20',
        name: 'Dr. Vishal Menon',
        image: doc20,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '10 Years',
        about: 'Dr. Vishal Menon offers comprehensive primary care services with a focus on preventive healthcare and chronic disease management.',
        fees: 700,
        address: {
            line1: '14 Marine Drive',
            line2: 'Mumbai, Maharashtra'
        }
    }
];