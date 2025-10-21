import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive updates about DukaanNepal soon."
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };
  return <section id="newsletter" className="bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
            <span>Join Early Access</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-4 text-left">Ready to take your shop online?</h2>
        <p className="text-xl text-gray-700 mb-10 text-left">
          Join hundreds of Nepali sellers creating their digital presence.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <a 
            href="#get-access"
            className="inline-flex items-center justify-center bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-4 px-10 rounded-full transition-all duration-300"
          >
            Create Your Store — Free to Start
          </a>
          <a 
            href="#pricing"
            className="inline-flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-4 px-10 rounded-full transition-all duration-300"
          >
            See Demo Stores →
          </a>
        </div>
        </div>
      </div>
    </section>;
};
export default Newsletter;