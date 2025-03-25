import React from 'react';
import { NavbarContacts } from "../Components/NavbarContact";
import { FooterThree } from "../Components/Footer";
import Map from '../Components/Map';
import ContactForm from '../Components/ContactForm';
import contactBg from '../assets/contact-bg.jpg';  // ✅ Correct import

const Contact = () => {
    return (
        <div>
            <NavbarContacts />

            {/* Background Image Section */}
            <div 
                className="bg-cover bg-center h-[400px] flex justify-center items-center" 
                style={{ backgroundImage: `url(${contactBg})` }}  // ✅ Use the imported image
            >
                <h1 className="text-4xl text-white font-bold"></h1>
            </div>

            {/* Main Content */}
            <div className="container mx-auto py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <Map />
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>

            <FooterThree />
        </div>
    );
};

export default Contact;
