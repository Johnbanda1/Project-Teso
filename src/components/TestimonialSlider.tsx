import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Teso Works transformed our office space with exceptional attention to detail. Their team was professional, punctual, and the quality of work exceeded our expectations. I highly recommend their services.",
    author: "Michael Banda",
    position: "CEO, Kalulushi Business Solutions",
    image: "https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    text: "We partnered with Teso Works for our new residential development, and they delivered outstanding results. Their expertise in sustainable building practices and commitment to quality impressed us throughout the project.",
    author: "Sarah Mutale",
    position: "Property Developer",
    image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    text: "The consultation services provided by Teso Works were invaluable to our project. Their team's insights helped us optimize our building plans and save significantly on construction costs while maintaining quality.",
    author: "David Mulenga",
    position: "Director, Copperbelt Investments",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const TestimonialSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="max-w-3xl mx-auto relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0">
              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote size={40} className="text-secondary" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10">
                  {testimonial.text}
                </p>
                <div className="flex items-center">
                  <div 
                    className="w-14 h-14 rounded-full overflow-hidden mr-4 bg-cover bg-center"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  ></div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center items-center mt-8">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center mr-4 hover:bg-secondary hover:text-white transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-secondary' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
        
        <button 
          onClick={nextSlide}
          className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center ml-4 hover:bg-secondary hover:text-white transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;