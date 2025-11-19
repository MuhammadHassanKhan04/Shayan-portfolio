import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
          <div className="grid lg:grid-cols-5 h-full">
            
            {/* Contact Info Panel */}
            <div className="lg:col-span-2 bg-brand-900 dark:bg-slate-950 p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-brand-100 mb-8 text-sm leading-relaxed">
                  Looking for a motivated Sales & Marketing professional? I'm ready to join your team and contribute to your success.
                </p>
                
                <div className="space-y-8">
                  <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-start gap-4 hover:translate-x-1 transition-transform group">
                    <div className="bg-white/10 p-2 rounded-lg group-hover:bg-brand-500 transition-colors">
                       <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-brand-300 uppercase tracking-wide font-semibold">Call Me</p>
                      <p className="text-white font-medium">{CONTACT_INFO.phone}</p>
                    </div>
                  </a>
                  
                  <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-start gap-4 hover:translate-x-1 transition-transform group">
                    <div className="bg-white/10 p-2 rounded-lg group-hover:bg-brand-500 transition-colors">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-brand-300 uppercase tracking-wide font-semibold">Email Me</p>
                      <p className="text-white font-medium break-all">{CONTACT_INFO.email}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 hover:translate-x-1 transition-transform group">
                     <div className="bg-white/10 p-2 rounded-lg group-hover:bg-brand-500 transition-colors">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-brand-300 uppercase tracking-wide font-semibold">Location</p>
                      <p className="text-white font-medium">{CONTACT_INFO.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 lg:mt-0 relative z-10">
                 <p className="text-xs text-brand-400">© 2024 Shayan Finyas.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white dark:bg-slate-900 p-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-900 outline-none transition-all" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-900 outline-none transition-all" 
                      placeholder="Your Email" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-900 outline-none transition-all" 
                    placeholder="Job Opportunity / Inquiry" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                  <textarea 
                    name="message" 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-900 outline-none transition-all" 
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-500/30 hover:-translate-y-1">
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;