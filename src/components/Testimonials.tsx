import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      comment: "FurniCraft transformed our living room completely. The quality and craftsmanship are exceptional. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Interior Designer",
      comment: "I've been working with FurniCraft for years. Their attention to detail and custom solutions are unmatched.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Business Owner",
      comment: "The furniture pieces we bought are not just beautiful but incredibly durable. Worth every penny!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-accent fill-accent' : 'text-muted'
        }`}
      />
    ));
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their experience with FurniCraft.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="card-furniture text-center"
            >
              <div className="mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover shadow-soft"
                />
                <h4 className="text-lg font-semibold text-foreground mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {testimonial.role}
                </p>
                <div className="flex justify-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <blockquote className="text-muted-foreground italic leading-relaxed">
                "{testimonial.comment}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;