import React, { useState } from "react";
import { Send, Mail, User, MessageSquare, Phone } from "lucide-react";

const ModernContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-purple-400">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to
            life.
          </p>
        </div>

        {/* Contact Form */}
        <div className="relative">
          {/* Background glow */}
          <div className="absolute inset-0 bg-purple-500/10 rounded-3xl blur-3xl"></div>

          <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12">
            {!isSubmitted ? (
              <div className="space-y-6">
                {/* Name Field */}
                <div className="group">
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-purple-400 transition-colors" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-slate-700/70 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-purple-400 transition-colors" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-slate-700/70 transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="group">
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-purple-400 transition-colors" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-slate-700/70 transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 text-gray-400 w-5 h-5 group-focus-within:text-purple-400 transition-colors" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-slate-700/70 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-purple-500 hover:bg-purple-600 disabled:bg-purple-500/50 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            ) : (
              /* Success Message */
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-300 text-lg">
                  Thank you for reaching out. I'll get back to you within 24
                  hours.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Mail className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="text-white font-semibold mb-1">Email</h4>
            <p className="text-gray-400 text-sm">chfaazali@gmail.com</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Phone className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="text-white font-semibold mb-1">Phone</h4>
            <p className="text-gray-400 text-sm">+92 3327724742</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <MessageSquare className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="text-white font-semibold mb-1">Response Time</h4>
            <p className="text-gray-400 text-sm">Within 24 hours</p>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl -z-10"></div>
      </div>
    </div>
  );
};

export default ModernContactForm;
