
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "DukaanNepal helped me take my clothing boutique online in just 10 minutes. Now I get orders from all over Kathmandu through my store link!",
  author: "Sita Shrestha",
  role: "Boutique Owner, Thamel",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png"
}, {
  content: "The QR code feature is brilliant. I printed it and put it on my counter. Customers scan and order directly. Esewa payment makes it so convenient.",
  author: "Ramesh Bhandari",
  role: "Grocery Store, Bhaktapur",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png"
}, {
  content: "I used to only sell at the local market. Now with DukaanNepal, I share my products on Facebook and get orders even when the market is closed!",
  author: "Maya Tamang",
  role: "Handicraft Seller, Patan",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.png"
}, {
  content: "Setting up was incredibly easy. Added all my electronics products with photos in one afternoon. The mobile dashboard helps me manage orders anywhere.",
  author: "Prakash Limbu",
  role: "Electronics Shop, Pokhara",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/background-section1.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return <div className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" style={{
    backgroundImage: `url('${backgroundImage}')`
  }}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10"></div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>Who It's For</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-4 text-left">Trusted by local sellers across Nepal</h2>
        <p className="text-xl text-gray-600 mb-12 text-left">From clothing shops to grocery stores — real Nepali sellers growing their business online.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;