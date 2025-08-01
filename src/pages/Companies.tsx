import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  Clock, 
  Target,
  ArrowRight,
  Star,
  Briefcase,
  MapPin
} from "lucide-react";

const Companies = () => {
  const companies = [
    {
      id: "tcs",
      name: "Tata Consultancy Services",
      logo: "TCS",
      category: "IT Services",
      difficulty: "Easy to Medium",
      averagePackage: "3.5 - 7 LPA",
      location: "Pan India",
      hiring: "25,000+ annually",
      sections: ["Aptitude", "Reasoning", "Verbal", "Programming"],
      examPattern: {
        duration: "90 minutes",
        questions: 80,
        sections: 4
      },
      description: "India's largest IT services company with global presence",
      tips: [
        "Focus on strong aptitude skills",
        "Practice email writing",
        "Brush up on basic programming concepts"
      ]
    },
    {
      id: "infosys",
      name: "Infosys Limited",
      logo: "INF",
      category: "IT Services", 
      difficulty: "Medium",
      averagePackage: "4 - 8 LPA",
      location: "Bangalore, Pune, Hyderabad",
      hiring: "20,000+ annually",
      sections: ["Aptitude", "Reasoning", "Verbal", "Coding"],
      examPattern: {
        duration: "120 minutes",
        questions: 85,
        sections: 4
      },
      description: "Leading digital services and consulting company",
      tips: [
        "Strong focus on coding round",
        "Practice automata programming",
        "Good communication skills essential"
      ]
    },
    {
      id: "wipro",
      name: "Wipro Technologies",
      logo: "WIP",
      category: "IT Services",
      difficulty: "Medium",
      averagePackage: "3.5 - 7.5 LPA", 
      location: "Bangalore, Chennai, Pune",
      hiring: "15,000+ annually",
      sections: ["Aptitude", "Reasoning", "Verbal", "Technical"],
      examPattern: {
        duration: "105 minutes",
        questions: 75,
        sections: 4
      },
      description: "Global information technology and consulting services",
      tips: [
        "Emphasis on logical reasoning",
        "Technical knowledge in chosen domain",
        "Strong analytical skills"
      ]
    },
    {
      id: "accenture",
      name: "Accenture",
      logo: "ACC",
      category: "Consulting",
      difficulty: "Medium",
      averagePackage: "4.5 - 8 LPA",
      location: "Mumbai, Bangalore, Chennai",
      hiring: "12,000+ annually", 
      sections: ["Aptitude", "Reasoning", "Verbal", "Technical"],
      examPattern: {
        duration: "90 minutes",
        questions: 90,
        sections: 3
      },
      description: "Global professional services company with consulting focus",
      tips: [
        "Business acumen important",
        "Good presentation skills",
        "Focus on problem-solving approach"
      ]
    },
    {
      id: "cognizant",
      name: "Cognizant Technology Solutions",
      logo: "CTS",
      category: "IT Services",
      difficulty: "Easy to Medium",
      averagePackage: "4 - 7 LPA",
      location: "Chennai, Pune, Hyderabad",
      hiring: "18,000+ annually",
      sections: ["Aptitude", "Reasoning", "Verbal", "Programming"],
      examPattern: {
        duration: "95 minutes", 
        questions: 70,
        sections: 4
      },
      description: "American multinational technology company",
      tips: [
        "Well-rounded preparation needed",
        "Good English communication",
        "Basic programming fundamentals"
      ]
    },
    {
      id: "hcl",
      name: "HCL Technologies", 
      logo: "HCL",
      category: "IT Services",
      difficulty: "Medium",
      averagePackage: "3.5 - 6.5 LPA",
      location: "Noida, Chennai, Bangalore",
      hiring: "10,000+ annually",
      sections: ["Aptitude", "Technical", "Coding"],
      examPattern: {
        duration: "110 minutes",
        questions: 65,
        sections: 3
      },
      description: "Leading technology and software services company",
      tips: [
        "Strong technical foundation",
        "Hands-on coding experience", 
        "Focus on core computer science subjects"
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty.includes("Easy")) return "bg-green-100 text-green-800";
    if (difficulty.includes("Medium")) return "bg-yellow-100 text-yellow-800"; 
    if (difficulty.includes("Hard")) return "bg-red-100 text-red-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-20 pb-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <Building2 className="h-4 w-4" />
              <span>Company Preparation</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold">
              Target{" "}
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Dream Companies
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Get company-specific preparation materials, exam patterns, and insider tips 
              for top recruiting companies in India.
            </p>
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {companies.map((company) => (
              <Card key={company.id} className="p-6 hover:shadow-glow transition-all duration-300 group bg-card-gradient border">
                {/* Company Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center text-white font-bold">
                      {company.logo}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {company.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">{company.category}</p>
                    </div>
                  </div>
                  
                  <Badge className={getDifficultyColor(company.difficulty)}>
                    {company.difficulty}
                  </Badge>
                </div>

                {/* Company Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {company.description}
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Package:</span>
                      <span className="font-medium">{company.averagePackage}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-medium text-xs">{company.location}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Hiring:</span>
                      <span className="font-medium">{company.hiring}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{company.examPattern.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Exam Pattern */}
                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Target className="h-4 w-4 mr-2 text-primary" />
                    Exam Pattern
                  </h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-primary">{company.examPattern.questions}</div>
                      <div className="text-muted-foreground text-xs">Questions</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-primary">{company.examPattern.sections}</div>
                      <div className="text-muted-foreground text-xs">Sections</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-primary">{company.examPattern.duration}</div>
                      <div className="text-muted-foreground text-xs">Duration</div>
                    </div>
                  </div>
                </div>

                {/* Sections */}
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-sm">Test Sections:</h4>
                  <div className="flex flex-wrap gap-2">
                    {company.sections.map((section, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {section}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Preparation Tips */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2 text-sm flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    Preparation Tips:
                  </h4>
                  <ul className="space-y-1">
                    {company.tips.map((tip, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <Button className="w-full bg-hero-gradient hover:opacity-90 group/btn">
                  Start {company.name} Prep
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>

          {/* Success Stories */}
          <div className="mt-16 bg-hero-gradient rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Success Stories</h3>
              <p className="text-white/80">Students who cracked their dream companies</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">2,500+</div>
                <div className="text-white/80">Students placed in TCS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">1,800+</div>
                <div className="text-white/80">Students placed in Infosys</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">95%</div>
                <div className="text-white/80">Placement success rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Companies;