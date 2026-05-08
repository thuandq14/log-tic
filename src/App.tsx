/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Ship, Plane, Truck, Globe2, Clock, ShieldCheck, Search, ChevronRight, Menu, X, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const SERVICES = [
  {
    id: "air",
    title: "Air Freight",
    description: "Global priority shipping for your time-sensitive cargo. Reliable, fast, and secure.",
    icon: Plane,
    color: "bg-blue-500",
  },
  {
    id: "sea",
    title: "Sea Freight",
    description: "Cost-effective solutions for large-scale international shipping needs.",
    icon: Ship,
    color: "bg-indigo-500",
  },
  {
    id: "road",
    title: "Road Freight",
    description: "Comprehensive trucking network across continents for end-to-end delivery.",
    icon: Truck,
    color: "bg-slate-700",
  },
];

const STATS = [
  { label: "Countries Covered", value: "85+" },
  { label: "Annual Shipments", value: "2.4M" },
  { label: "Delivery Success", value: "99.9%" },
  { label: "Experts Worldwide", value: "15k" },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/50 py-4 border-b border-slate-100" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <Globe2 size={26} />
            </div>
            <span className={`text-2xl font-extrabold tracking-tighter ${isScrolled ? "text-slate-900" : "text-white"}`}>
              NEXUS <span className="text-blue-600">LOGISTICS</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-wider">
            {["Services", "Solutions", "Tracking", "Company"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`transition-all hover:text-blue-600 ${isScrolled ? "text-slate-500" : "text-slate-200"}`}
              >
                {item}
              </a>
            ))}
            <button className="bg-blue-600 text-white px-7 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 transform hover:-translate-y-0.5">
              NHẬN BÁO GIÁ
            </button>
          </div>

          <button 
            className="md:hidden text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} className={!isScrolled ? "text-white" : ""} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-6 text-2xl font-bold">
            {["Services", "Solutions", "Tracking", "Company"].map((item) => (
              <a key={item} href="#" onClick={() => setMobileMenuOpen(false)}>{item}</a>
            ))}
            <button className="bg-blue-600 text-white py-4 rounded-xl mt-4">Get a Quote</button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
            alt="Cargo Ship Cargo Port" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-400/30 backdrop-blur-sm text-blue-300 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                Logistics 4.0 Standard
              </div>
              <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.05] tracking-tighter mb-8 italic">
                Vận tải thông minh<br /> 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300 not-italic">Kết nối toàn cầu</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-medium opacity-90">
                Chúng tôi cung cấp các giải pháp chuỗi cung ứng tối ưu, giúp doanh nghiệp tối giảm chi phí và nâng cao hiệu quả vận hành.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-2xl shadow-blue-600/30 hover:bg-blue-700 transition-all transform hover:-translate-y-1">
                  Bắt đầu ngay
                </button>
                <button className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all">
                  Tìm hiểu thêm
                </button>
              </div>
            </motion.div>

            {/* Quick Track Bar Overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-20 bg-white p-2 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2"
            >
              <div className="flex-1 w-full flex items-center gap-4 px-6 py-2">
                <Search size={22} className="text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Enter Tracking ID (e.g. NX-29384-LL)" 
                  className="w-full bg-transparent border-none focus:ring-0 text-slate-900 font-medium placeholder:text-slate-400"
                />
              </div>
              <div className="h-8 w-px bg-slate-200 hidden md:block" />
              <button className="w-full md:w-auto bg-slate-900 text-white px-10 py-3 rounded-xl md:rounded-full font-bold hover:bg-blue-600 transition-colors uppercase tracking-widest text-sm">
                Search
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-[32px] ${idx === 2 ? 'bg-blue-600 text-white shadow-2xl shadow-blue-200' : 'bg-slate-50 border border-slate-100 shadow-sm'}`}
            >
              <div className={`text-4xl md:text-5xl font-extrabold italic mb-3 ${idx === 2 ? 'text-white' : 'text-slate-900'}`}>{stat.value}</div>
              <div className={`font-bold uppercase tracking-widest text-[11px] ${idx === 2 ? 'text-blue-100' : 'text-slate-500'}`}>{stat.label}</div>
              {idx === 2 && (
                <div className="h-1.5 w-full bg-blue-400 mt-5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "99.9%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-white rounded-full text-blue-400"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-extrabold tracking-[0.3em] uppercase text-xs mb-4 block">Core Competencies</span>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 leading-[0.95]">
                Dịch vụ chuyên nghiệp <br /> <span className="text-blue-600 italic">Hiệu quả tối ưu.</span>
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm text-lg font-medium leading-relaxed opacity-80">
              Nexus Logistics leverages cutting-edge technology and a massive global network to deliver absolute reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                whileHover={{ y: -12 }}
                className="group p-12 bg-white border border-slate-100 rounded-[48px] shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500"
              >
                <div className={`w-20 h-20 rounded-[28px] ${service.color} flex items-center justify-center text-white mb-10 shadow-xl transition-transform group-hover:scale-110`}>
                  <service.icon size={36} />
                </div>
                <h3 className="text-3xl font-extrabold mb-5 tracking-tight">{service.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center gap-3 text-slate-900 font-extrabold hover:text-blue-600 transition-colors uppercase tracking-widest text-xs">
                  Xem chi tiết <ArrowRight size={20} className="text-blue-600" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section with Image */}
      <section id="solutions" className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 p-4 bg-white/5 border border-white/10 rounded-[64px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000" 
                alt="Logistics Technology" 
                className="rounded-[48px] w-full shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 w-full h-full pointer-events-none flex items-center justify-center">
              <Globe2 size={400} className="text-white" strokeWidth={0.5} />
            </div>
          </div>

          <div>
            <span className="text-blue-400 font-extrabold tracking-[0.3em] uppercase text-xs mb-6 block">Smart Solutions</span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-10 leading-[0.95]">
              Intelligence in <br /> <span className="italic">Every Movement.</span>
            </h2>
            
            <div className="space-y-10">
              {[
                { icon: Clock, title: "Real-time Tracking", text: "End-to-end visibility with GPS sensors and automated alerts for every stage." },
                { icon: ShieldCheck, title: "Secure Transport", text: "Bonded warehouses and premium security protocols for high-value cargo." },
                { icon: Globe2, title: "Customs Expertise", text: "Seamless international clearance with local team expertise in 80 markets." },
              ].map((feature, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="shrink-0 w-16 h-16 rounded-[22px] bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xl">
                    <feature.icon size={28} />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-2xl font-extrabold mb-3 tracking-tight">{feature.title}</h4>
                    <p className="text-slate-400 leading-relaxed text-lg font-medium opacity-80">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-16 bg-white text-slate-900 px-12 py-5 rounded-2xl font-extrabold text-lg hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl shadow-white/5">
              Explore Our Platform
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-slate-900 rounded-[100px] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(30,41,59,0.3)] border-4 border-slate-50">
            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-10">
                Ready to Scale?
              </div>
              <h2 className="text-5xl md:text-8xl font-extrabold mb-10 leading-[0.9] tracking-tighter italic">Ready to optimize your <br /> supply chain?</h2>
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
                Join over 4,500 companies that trust Nexus Logistics for their global distribution and freight management needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-blue-600 text-white px-14 py-6 rounded-3xl font-black text-xl hover:bg-white hover:text-slate-900 transition-all shadow-2xl shadow-blue-600/40">
                  Contact Sales Now
                </button>
                <button className="bg-slate-800 text-white border border-slate-700 px-14 py-6 rounded-3xl font-black text-xl hover:bg-slate-700 transition-all">
                  Request a Demo
                </button>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 pt-32 pb-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black">
                  <Globe2 size={24} />
                </div>
                <span className="text-xl font-black tracking-tight">NEXUS</span>
              </div>
              <p className="text-slate-500 mb-8 leading-relaxed font-medium">
                Pioneering the future of global logistics with intelligent technology and human expertise.
              </p>
              <div className="flex gap-4">
                {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 border border-slate-200 flex items-center justify-center rounded-full text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8">Quick Links</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                {["About Nexus", "Our History", "Global Network", "Careers", "News & Media"].map(item => (
                  <li key={item}><a href="#" className="hover:text-blue-600 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8">Services</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                {["Freight Transport", "Warehouse Solutions", "Contract Logistics", "Customs Brokerage", "E-commerce Fulfilment"].map(item => (
                  <li key={item}><a href="#" className="hover:text-blue-600 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8">Contact Info</h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <MapPin size={20} className="text-blue-600 shrink-0" />
                  <span className="text-slate-500 font-medium">102 Logistics Way, <br />Global Trade Center, NY</span>
                </li>
                <li className="flex gap-4">
                  <Phone size={20} className="text-blue-600 shrink-0" />
                  <span className="text-slate-500 font-medium">+1 (800) 993-NEXUS</span>
                </li>
                <li className="flex gap-4">
                  <Mail size={20} className="text-blue-600 shrink-0" />
                  <span className="text-slate-500 font-medium">solutions@nexuslog.co</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm font-medium">
            <p>© 2026 Nexus Global Logistics. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-900">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900">Terms of Service</a>
              <a href="#" className="hover:text-slate-900">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
