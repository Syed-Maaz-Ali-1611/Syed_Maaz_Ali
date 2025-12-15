import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'San Francisco, California',
      link: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, label: 'GitHub', url: 'https://github.com' },
    { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: <Twitter className="w-6 h-6" />, label: 'Twitter', url: 'https://twitter.com' },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Send className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
            <span className="text-sm font-semibold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Let's <span className="text-indigo-600 dark:text-cyan-400">Work</span> Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-indigo-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.title === 'Location' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-6 p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="p-3 rounded-full bg-indigo-100 dark:bg-cyan-900 text-indigo-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {info.title}
                      </div>
                      <div className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h4 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                  Connect with me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex-1 text-center"
                      aria-label={social.label}
                    >
                      <div className="inline-flex p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 group-hover:bg-indigo-100 dark:group-hover:bg-cyan-900 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-all">
                        {social.icon}
                      </div>
                      <div className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        {social.label}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                Quick Response Time
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <span className="text-gray-700 dark:text-gray-300">Response Time</span>
                  <span className="font-bold text-green-600 dark:text-green-400">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <span className="text-gray-700 dark:text-gray-300">Availability</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">Open to Opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex p-4 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 mb-6">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
                  Send me a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:border-indigo-500 dark:focus:border-cyan-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-cyan-900 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:border-indigo-500 dark:focus:border-cyan-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-cyan-900 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:border-indigo-500 dark:focus:border-cyan-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-cyan-900 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                      isLoading
                        ? 'bg-gray-400 dark:bg-gray-700 cursor-not-allowed'
                        : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-xl text-white'
                    }`}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-3">
                        <Send className="w-5 h-5" />
                        Send Message
                      </div>
                    )}
                  </button>
                </form>

                {/* Privacy Note */}
                <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    Your information is secure and will only be used to respond to your inquiry.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse">
            <div className="bg-white dark:bg-gray-900 rounded-full px-6 py-3">
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Open for freelance opportunities and full-time positions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;