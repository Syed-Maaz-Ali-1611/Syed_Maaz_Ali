import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Github, Twitter, Sparkles, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    fname: '',
    femail: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init({
        publicKey: publicKey,
        blockHeadless: true,
      });
    }
  }, []);

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setSubmitError('');
  
  try {
    console.log('🚀 Attempting to send email...');
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    // Get current date
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    // CRITICAL: Your template uses {{title}} in Subject, so you MUST include it
    const templateData = {
      fname: formData.name || 'No name provided',
      femail: formData.email || 'No email provided',
      message: formData.message || 'No message provided',
      date: currentDate,
      title: `Message from ${formData.name || 'Visitor'}`, // REQUIRED for template
      to_email: 'maazall1611@gmail.com' // Ensure correct email
    };
    
    console.log('📤 Sending this data:', templateData);
    
    // Method 1: Direct API call (most reliable)
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: templateData
      })
    });
    
    console.log('📨 Response Status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ EmailJS Error Response:', errorText);
      throw new Error(`EmailJS Error ${response.status}: ${errorText}`);
    }
    
    const result = await response.text();
    console.log('✅ Email sent successfully:', result);
    
    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
    
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    setIsLoading(false);
    
    let errorMessage = '';
    
    if (error.message.includes('400')) {
      errorMessage = `
        🚨 **400 Bad Request - Missing Required Parameter**
        
        **Problem:** Your EmailJS template requires a "title" parameter that you're not sending.
        
        **Template Has:** Subject: "Contact Us: {{title}}"
        **Your Code Must Send:** title: "Some value"
        
        **Already Fixed in the code above:**
        ✓ Added "title" parameter with value: "Message from [name]"
        ✓ All template variables now provided: fname, femail, message, date, title
        
        **Still getting error? Try these:**
        1. Refresh browser and test again
        2. Check browser Console for detailed logs
        3. Test with this quick diagnostic below ⬇️
      `;
    } else {
      errorMessage = `Error: ${error.message}`;
    }
    
    setSubmitError(errorMessage);
    setTimeout(() => setSubmitError(''), 10000);
  }
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
      value: 'maazall1611@gmail.com',
      link: 'mailto:maazall1611@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'San Francisco, California',
      link: 'https://maps.google.com',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, label: 'GitHub', url: 'https://github.com', color: 'from-gray-700 to-gray-900' },
    { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', url: 'https://linkedin.com', color: 'from-blue-600 to-blue-800' },
    { icon: <Twitter className="w-6 h-6" />, label: 'Twitter', url: 'https://twitter.com', color: 'from-cyan-500 to-blue-500' },
  ];

  return (
    <section id="contact" className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-white via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated background elements - KEEP YOUR EXISTING CODE */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-pulse delay-1500"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-pulse delay-3000"></div>
        
        <div className="absolute top-10 left-20 w-10 h-10 border-2 border-indigo-400 dark:border-cyan-700 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-14 h-14 border-2 border-purple-400 dark:border-purple-700 rotate-45 opacity-20 animate-float delay-1000"></div>
        <div className="absolute top-40 right-10 w-8 h-8 border-2 border-blue-400 dark:border-blue-700 rounded-full opacity-20 animate-float delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 animate-fade-in-down">
            <MessageSquare className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white animate-fade-in-up">
            Let's <span className="text-indigo-600 dark:text-cyan-400">Work</span> Together
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full animate-slide-in"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up delay-300">
            Have a project in mind? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up delay-400">
              <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.title === 'Location' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-6 p-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100 + 500}ms` }}
                  >
                    <div className={`p-3 rounded-full bg-gradient-to-r ${info.color} text-white group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
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
                      className="group p-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex-1 text-center animate-fade-in-up"
                      style={{ animationDelay: `${index * 100 + 800}ms` }}
                      aria-label={social.label}
                    >
                      <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${social.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        {social.icon}
                      </div>
                      <div className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                        {social.label}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up delay-1000">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 animate-pulse" />
                Quick Response Time
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl hover:scale-[1.02] transition-transform duration-300">
                  <span className="text-gray-700 dark:text-gray-300">Response Time</span>
                  <span className="font-bold text-green-600 dark:text-green-400 animate-pulse-glow">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl hover:scale-[1.02] transition-transform duration-300">
                  <span className="text-gray-700 dark:text-gray-300">Availability</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400 animate-pulse-glow">Open to Opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up delay-600">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white mb-6 animate-pulse-glow">
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
                  className="group px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Send Another Message
                    <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </span>
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white flex items-center gap-3">
                  <Send className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
                  Send me a message
                </h3>
                
                {submitError && (
                  <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-xl animate-fade-in-up">
                    <p className="text-red-700 dark:text-red-300 font-medium">{submitError}</p>
                  </div>
                )}
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="fname"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300/50 dark:border-gray-600/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm text-gray-800 dark:text-white focus:border-indigo-500 dark:focus:border-cyan-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-cyan-900 transition-all placeholder-gray-500/70 dark:placeholder-gray-400/70"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="femail"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300/50 dark:border-gray-600/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm text-gray-800 dark:text-white focus:border-indigo-500 dark:focus:border-cyan-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-cyan-900 transition-all placeholder-gray-500/70 dark:placeholder-gray-400/70"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '900ms' }}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300/50 dark:border-gray-600/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm text-gray-800 dark:text-white focus:border-indigo-500 dark:focus:border-cyan-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-cyan-900 transition-all resize-none placeholder-gray-500/70 dark:placeholder-gray-400/70"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Hidden fields for EmailJS template */}
                  <input type="hidden" name="date" />

                  <div className="animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`group w-full py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                        isLoading
                          ? 'bg-gray-400 dark:bg-gray-700 cursor-not-allowed'
                          : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-xl text-white animate-pulse-glow hover:animate-none'
                      }`}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-3">
                          <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                          Send Message
                        </div>
                      )}
                    </button>
                  </div>
                </form>

                {/* Privacy Note */}
                <div className="mt-8 p-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl animate-fade-in-up" style={{ animationDelay: '1100ms' }}>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    <span className="font-semibold text-indigo-600 dark:text-cyan-400">🔒 Secure</span> - Powered by EmailJS. Your information is protected and will only be used to respond to your inquiry.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse-glow">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full px-6 py-3">
              <p className="text-gray-700 dark:text-gray-300 font-medium flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-500 animate-spin-slow" />
                Open for freelance opportunities and full-time positions
                <Sparkles className="w-4 h-4 text-yellow-500 animate-spin-slow" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute bottom-10 left-10 w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 animate-bounce-slow"></div>
      <div className="absolute top-10 right-10 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 animate-bounce-slow delay-300"></div>
      <div className="absolute top-1/2 left-5 w-5 h-5 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-20 animate-bounce-slow delay-600"></div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 10px rgba(99, 102, 241, 0.3), 
                        0 0 20px rgba(99, 102, 241, 0.2); 
          }
          50% { 
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.6), 
                        0 0 30px rgba(99, 102, 241, 0.4); 
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-slide-in {
          animation: slideIn 1s ease-out;
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-800 { animation-delay: 800ms; }
        .delay-900 { animation-delay: 900ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-1100 { animation-delay: 1100ms; }
        .delay-1500 { animation-delay: 1500ms; }
        .delay-2000 { animation-delay: 2000ms; }
        .delay-3000 { animation-delay: 3000ms; }
      `}</style>
    </section>
  );
};

export default Contact; 