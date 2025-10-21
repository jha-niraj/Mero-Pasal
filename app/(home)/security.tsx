import React, { useRef, useEffect } from "react";
import { Shield, Lock, Database, Eye } from "lucide-react";

interface SecurityFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SecurityFeature = ({ icon, title, description }: SecurityFeatureProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
      <div className="rounded-full bg-pulse-50 w-12 h-12 flex items-center justify-center text-pulse-500 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const Security = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const securityFeatures = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Secure Payments",
      description: "SSL encryption for all payment transactions. Integrated with trusted Nepali payment gateways."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Privacy Protection", 
      description: "Your customer data is private and secure. We never share information with third parties."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Backup",
      description: "Regular backups of your store and order data. Never lose important information."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Reliable Platform",
      description: "99.9% uptime guarantee. Your store stays online when customers want to shop."
    }
  ];

  return (
    <section className="py-20 bg-white relative" id="security" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 fade-in-element">
          <div className="pulse-chip mx-auto mb-4">
            <span>Security</span>
          </div>
          <h2 className="section-title mb-4">Secure & reliable platform</h2>
          <p className="section-subtitle mx-auto">
            Your store data and customer information are protected.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {securityFeatures.map((feature, index) => (
            <div key={feature.title} className="opacity-0 fade-in-element">
              <SecurityFeature
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 text-center opacity-0 fade-in-element">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-pulse-500 mr-3" />
            <h3 className="text-xl font-semibold">Made for Nepal</h3>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built specifically for Nepali sellers with local payment methods, delivery partners, and support in Nepali language. Your data stays secure on trusted cloud infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Security;