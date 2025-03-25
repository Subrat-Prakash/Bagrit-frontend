import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        product: '',
        query: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://bagrit-backend.onrender.com/api/contact', formData);
            alert('Form submitted successfully!');
        } catch (error) {
            console.error(error);
            alert('Error submitting form');
        }
    };

    return (
        <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <select
                    name="product"
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                >
                    <option value="">Select Product</option>
                    <option value="Eco Bag">Eco Bag</option>
                    <option value="Bio Plastic">Bio Plastic</option>
                </select>
                <textarea
                    name="query"
                    placeholder="Query"
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
