import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Trophy, 
  Users, 
  ArrowRight,
  CheckCircle
} from "lucide-react";

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Students Placed" },
    { icon: Trophy, value: "500+", label: "Top Companies" },
    { icon: Target, value: "95%", label: "Success Rate" },
  ];

  const features = [
    "Comprehensive MCQ Practice",
    "Live Coding Challenges", 
    "Company-Specific Prep",
    "Mock Placement Tests"
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <Target className="h-4 w-4" />
                <span>India's #1 Placement Platform</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Master Your{" "}
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  Placement Journey
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Comprehensive preparation platform designed specifically for Indian college students. 
                Practice MCQs, solve coding challenges, and ace your campus placements.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-hero-gradient hover:opacity-90 shadow-glow group">
                  Start Free Practice
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/practice">
                <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary">
                  Explore Content
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              {stats.map(({ icon: Icon, value, label }, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-card-gradient rounded-2xl p-8 shadow-card border">
              <div className="space-y-6">
                {/* Mock Question Interface */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">Question 15 of 50</span>
                    <span className="text-sm text-muted-foreground">05:42 remaining</span>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-medium">
                      What is the time complexity of binary search algorithm?
                    </h3>
                    
                    <div className="space-y-2">
                      {["O(n)", "O(log n)", "O(n²)", "O(1)"].map((option, index) => (
                        <div 
                          key={index} 
                          className={`p-3 rounded-lg border transition-colors cursor-pointer ${
                            index === 1 
                              ? "border-secondary bg-secondary/10 text-secondary" 
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <span className="font-medium mr-2">{String.fromCharCode(65 + index)}.</span>
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-xs text-muted-foreground">Aptitude Test</span>
                  </div>
                  <div className="text-xs text-muted-foreground">85% Complete</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium animate-pulse-glow">
              ✨ AI-Powered
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium animate-pulse-glow" style={{animationDelay: '1s'}}>
              🚀 Real-time Results
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;