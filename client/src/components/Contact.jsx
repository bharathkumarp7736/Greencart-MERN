import React from 'react'
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Contact = () => {
    const {navigate}=useAppContext();

    const handleSubmit=(e)=>{
        e.preventDefault();
        toast.success('Message sent successfully!');
        navigate('/');
    }

    return (
         <form className="flex flex-col items-center text-sm mt-16" onSubmit={handleSubmit}>
            <p className="text-lg text-primary font-medium pb-2">Contact Us</p>
            <h1 className="text-4xl font-semibold text-slate-700 pb-4">Get in touch with us</h1>
            <p className="text-sm text-gray-500 text-center pb-10"> We’re here to help with your orders, product inquiries, delivery issues, 
  and any questions you may have. Feel free to contact our support team anytime, 
  and we’ll make sure to provide quick and friendly assistance for a smooth shopping experience.</p>
            
            <div className="flex flex-col md:flex-row items-center gap-8 w-87.5 md:w-175">
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Your Name</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-primary" type="text" required />
                </div>
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Your Email</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-primary" type="email" required />
                </div>
            </div>
        
            <div className="mt-6 w-87.5 md:w-175">
                <label className="text-black/70" htmlFor="name">Message</label>
                <textarea className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-primary" required></textarea>
            </div>
        
            <button type="submit"  className="mt-5 bg-primary hover:bg-primary-dull cursor-pointer text-white h-12 w-56 px-4 rounded active:scale-95 transition">Send Message</button>
        </form>
    );
};

export default Contact