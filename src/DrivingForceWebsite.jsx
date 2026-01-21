import React, { useState } from 'react';
import {
  ArrowRight,
  Mail,
  Linkedin,
  ChevronRight,
  Globe,
  TrendingUp,
  Lightbulb,
} from 'lucide-react';

const DrivingForceWebsite = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます。近日中にご連絡いたします。');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const partners = [
    { name: 'Shogakukan', subtitle: 'Exit Partner' },
    { name: 'Tokyo Otaku Mode', subtitle: 'Co-founded' },
    { name: 'CARTA HOLDINGS', subtitle: 'Partner' },
    { name: 'Dentsu', subtitle: 'Collaborator' },
    { name: '500 Global', subtitle: 'Backed By' },
    { name: 'Digital Garage', subtitle: 'Partner' },
  ];

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Strategic Trading',
      description:
        "Middle East import/export hub & supply chain strategy. Leveraging Dubai's strategic position to connect global markets.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Digital Innovation',
      description:
        'SaaS development (Readable, Bakuage), AI integration, and product incubation. Building scalable technology solutions.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Investment & Consulting',
      description:
        'New business development, UAE market entry, and venture investment. Strategic guidance for global expansion.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold tracking-tight text-gray-900">
              DRIVINGFORCE
            </div>

            <a
              href="#contact"
              className="px-6 py-2.5 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-50 rounded-full filter blur-3xl opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              The Driving Force for Your Global Business.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed">
              Accelerating innovation and trade from Dubai to the World.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-sm hover:bg-gray-800 transition-colors text-lg font-medium group"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 mb-3 tracking-wide uppercase">
              Track Record
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Backed by & Collaborated with Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-sm border border-gray-200 hover:border-blue-600 transition-colors flex flex-col items-center justify-center text-center group"
              >
                <div className="w-full h-16 flex items-center justify-center mb-3">
                  <div className="text-lg font-bold text-gray-400 group-hover:text-gray-900 transition-colors">
                    {partner.name}
                  </div>
                </div>
                <p className="text-xs text-gray-500 font-medium">{partner.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Founder Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-sm overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4" />
                    <p className="text-sm">Professional Photo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold text-blue-600 mb-3 tracking-wide uppercase">
                Leadership
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                Tomo Kamei
              </h2>
              <p className="text-xl text-gray-600 mb-8">Founder / CEO</p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A serial entrepreneur and investor with a proven track record. Co-founder of
                Tokyo Otaku Mode (acquired by Shogakukan). Developed and scaled SaaS products
                like Readable and Bakuage (AI mastering). Combining engineering expertise with
                global business strategy.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-sm hover:bg-gray-900 hover:text-white transition-colors font-medium"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  View LinkedIn
                </a>

                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 text-gray-700 hover:text-gray-900 transition-colors font-medium group"
                >
                  Read Interviews
                  <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 mb-3 tracking-wide uppercase">
              What We Do
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for global business acceleration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-sm border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-sm font-semibold text-blue-600 mb-3 tracking-wide uppercase">
                Get In Touch
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Let's Build Something Great Together
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                Whether you're looking to expand into new markets, develop innovative solutions,
                or accelerate your business growth, we're here to help.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2">DRIVINGFORCE - FZCO</h3>
                  <p className="text-gray-600">Dubai Silicon Oasis</p>
                  <p className="text-gray-600">United Arab Emirates</p>
                </div>

                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-3 text-blue-600" />
                  <span>info@drivingforce.ae</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gray-900 text-white rounded-sm hover:bg-gray-800 transition-colors text-lg font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold mb-2">DRIVINGFORCE</div>
              <p className="text-gray-400">Accelerating Global Business</p>
            </div>
            <div className="text-gray-400 text-sm">© 2025 DRIVINGFORCE - FZCO. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DrivingForceWebsite;
