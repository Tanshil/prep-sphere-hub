import { 
  BookOpen, 
  Code, 
  Building2, 
  BarChart3, 
  Users, 
  Zap,
  Target,
  Trophy
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "MCQ Practice",
      description: "Comprehensive question banks covering Aptitude, Reasoning, Technical subjects with detailed explanations.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Code,
      title: "Coding Challenges",
      description: "Practice data structures, algorithms with an integrated online code editor and test cases.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Building2,
      title: "Company Prep",
      description: "Targeted preparation for top companies like TCS, Infosys, Wipro with specific exam patterns.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track your progress, identify weak areas, and monitor improvement with detailed analytics.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Users,
      title: "Mock Interviews",
      description: "Practice with AI-powered mock interviews and get feedback on your performance.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get immediate feedback on your answers with detailed explanations and learning resources.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  const achievements = [
    { icon: Target, value: "50,000+", label: "Questions Solved Daily" },
    { icon: Trophy, value: "95%", label: "Placement Success Rate" },
    { icon: Users, value: "10,000+", label: "Active Students" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Zap className="h-4 w-4" />
            <span>Comprehensive Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything You Need to{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools and resources you need to excel in your placement preparation journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card-gradient rounded-xl p-6 shadow-card border hover:shadow-glow transition-all duration-300 group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-hero-gradient rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Trusted by Students Nationwide
            </h3>
            <p className="text-white/80">
              Join thousands of students who have already achieved their placement goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map(({ icon: Icon, value, label }, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1">{value}</div>
                <div className="text-white/80">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;