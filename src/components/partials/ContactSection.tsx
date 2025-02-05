import Image from 'next/image';
import React from 'react';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';
import SectionTitle from '@/components/shared/SectionTitle';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Define event type for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const res = await fetch('https://formspree.io/f/xanqjgnw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast.success('Message sent successfully!', { autoClose: 3000 }); // Success toast
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } else {
      toast.error('Failed to send message. Please try again.', { autoClose: 3000 }); // Error toast
    }
  };

  return (
    <>
      <SectionTitle>Get In Touch</SectionTitle>
      <ToastContainer position='top-right' />
      <div className='mt-14 grid gap-6 md:grid-cols-3'>
        <div className='relative h-48'>
          <Image src='/images/map.svg' layout='fill' className='dark:invert' alt='map' />
          <h6 className='text-2xl font-bold'>Contact with me</h6>
          <p className='mt-2'>I would love to hear from you. 👋</p>
          <div className='mt-10 text-gray-400'>
            <p className='mt-4'>+66805069175</p>
            <p>phyowailin1718@gmail.com</p>
          </div>
        </div>
        <div className='col-span-2'>
          <form onSubmit={handleSubmit}>
            <div className='grid gap-8 md:grid-cols-2'>
              <Input
                name='name'
                type='text'
                placeholder='Your Name'
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                name='email'
                type='email'
                placeholder='Email Address'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className='mt-8'>
              <Input
                name='subject'
                type='text'
                placeholder='Subject'
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className='mt-8'>
              <TextArea
                name='message'
                placeholder='Message'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className='mt-8'>
              <Button
                type='submit'
                className='mt-5 bg-primary-500 px-8 py-2 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200'
              >
                Send Message
              </Button>
            </div>

            {/* Success/Error Message */}
            {status && <p className='mt-4 text-green-500'>{status}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
