import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "primary" | "secondary" | "outline";
  popular?: boolean;
}

const PricingCard = ({ title, price, description, features, buttonText, buttonVariant, popular }: PricingCardProps) => {
  return (
    <div className={cn(
      "relative bg-white rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl",
      popular ? "border-pulse-500 shadow-lg scale-105" : "border-gray-200 hover:border-pulse-300"
    )}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-pulse-500 text-white px-4 py-2 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">{price}</span>
          {price !== "Custom" && <span className="text-gray-500 ml-2">/ user / mo</span>}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-pulse-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className={cn(
        "w-full py-3 px-6 rounded-full font-medium transition-all duration-300 flex items-center justify-center",
        buttonVariant === "primary" && "bg-pulse-500 hover:bg-pulse-600 text-white",
        buttonVariant === "secondary" && "bg-gray-900 hover:bg-gray-800 text-white",
        buttonVariant === "outline" && "border-2 border-pulse-500 text-pulse-500 hover:bg-pulse-500 hover:text-white"
      )}>
        {buttonText}
        <ArrowRight className="ml-2 w-4 h-4" />
      </button>
    </div>
  );
};

const Pricing = () => {
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

  const pricingPlans: PricingCardProps[] = [
    {
      title: "Free Plan",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "Create your online store",
        "Up to 50 products",
        "Store link & QR code", 
        "Basic order management",
        "WhatsApp notifications",
        "Community support"
      ],
      buttonText: "Start free",
      buttonVariant: "outline"
    },
    {
      title: "Growth Plan", 
      price: "Coming Soon",
      description: "For sellers ready to scale",
      features: [
        "Unlimited products",
        "Esewa & Khalti payments",
        "Advanced analytics",
        "Pathao integration",
        "Priority support",
        "Custom branding",
        "SMS notifications",
        "Multiple staff accounts"
      ],
      buttonText: "Join waitlist",
      buttonVariant: "primary",
      popular: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For large sellers with multiple shops",
      features: [
        "Multi-location support",
        "Custom integrations", 
        "Dedicated account manager",
        "Custom domain",
        "API access",
        "Advanced reporting",
        "Training & onboarding",
        "White-label options"
      ],
      buttonText: "Contact us",
      buttonVariant: "secondary"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative" id="pricing" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 fade-in-element">
          <div className="pulse-chip mx-auto mb-4">
            <span>Pricing</span>
          </div>
          <h2 className="section-title mb-4">Free to start — Pay later when you grow</h2>
          <p className="section-subtitle mx-auto">
            Start selling for free. Upgrade when you need advanced features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={plan.title} className="opacity-0 fade-in-element">
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 opacity-0 fade-in-element">
          <p className="text-gray-600 mb-2">
            Start free during MVP. No commissions. No hidden fees.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500">
            <span>Free to Start</span>
            <span>•</span>
            <span>No Setup Fees</span>
            <span>•</span>
            <span>Built for Nepal</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;