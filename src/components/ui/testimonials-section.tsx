import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at TCS",
      college: "IIT Delhi",
      image: "/placeholder.svg",
      rating: 5,
      testimonial: "PrepSphere's coding challenges and company-specific preparation helped me crack TCS with a 7 LPA package. The mock interviews were particularly helpful!"
    },
    {
      name: "Rahul Kumar",
      role: "Data Analyst at Infosys",
      college: "NIT Trichy",
      image: "/placeholder.svg",
      rating: 5,
      testimonial: "The MCQ practice section is incredibly comprehensive. I improved my aptitude scores by 40% and landed my dream job at Infosys!"
    },
    {
      name: "Sneha Patel",
      role: "Full Stack Developer at Wipro",
      college: "VIT Vellore",
      image: "/placeholder.svg",
      rating: 5,
      testimonial: "What I loved most was the detailed analytics dashboard. It helped me identify my weak areas and focus my preparation effectively."
    },
    {
      name: "Arjun Singh",
      role: "Software Developer at Accenture",
      college: "BITS Pilani",
      image: "/placeholder.svg",
      rating: 5,
      testimonial: "The platform's user interface is intuitive and the quality of questions is excellent. Highly recommend for placement preparation!"
    },
    {
      name: "Kavya Reddy",
      role: "Business Analyst at Cognizant",
      college: "Anna University",
      image: "/placeholder.svg",
      rating: 5,
      testimonial: "Thanks to PrepSphere's comprehensive preparation, I was able to secure offers from 3 different companies. The blog section was very insightful!"
    },
    {
      name: "Vikash Gupta",
      role: "DevOps Engineer at HCL",
      college: "Manipal University",
      image: "/placeholder.svg",
      rating: 5,
      testimonial: "The coding practice environment is fantastic. Real-time feedback and test cases helped me improve my problem-solving skills significantly."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
            <Star className="h-4 w-4" />
            <span>Student Success Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what students who got placed in top companies have to say about PrepSphere.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300 group bg-card-gradient border">
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="h-6 w-6 text-primary/60 group-hover:text-primary transition-colors" />
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.testimonial}"
              </blockquote>

              {/* Student Info */}
              <div className="flex items-center space-x-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="bg-primary/10 text-primary font-medium">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.college}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to join thousands of successful students?
          </p>
          <div className="inline-flex items-center space-x-2 bg-success-gradient text-white px-6 py-3 rounded-full text-sm font-medium shadow-glow">
            <Star className="h-4 w-4" />
            <span>4.9/5 Average Rating from 10,000+ Students</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;