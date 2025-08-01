import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Brain, 
  Code, 
  Database, 
  Cpu, 
  Network, 
  Play,
  Clock,
  Users,
  ArrowRight
} from "lucide-react";

const Practice = () => {
  const categories = [
    {
      id: "aptitude",
      title: "Quantitative Aptitude",
      description: "Practice numerical reasoning, arithmetic, and mathematical problem-solving",
      icon: Brain,
      color: "text-primary",
      bgColor: "bg-primary/10",
      questions: 1250,
      avgTime: "45 mins",
      difficulty: "Easy to Hard"
    },
    {
      id: "reasoning",
      title: "Logical Reasoning",
      description: "Enhance your analytical thinking and pattern recognition skills",
      icon: BookOpen,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      questions: 980,
      avgTime: "40 mins",
      difficulty: "Medium"
    },
    {
      id: "verbal",
      title: "Verbal Ability",
      description: "Improve your English language skills and comprehension",
      icon: BookOpen,
      color: "text-accent",
      bgColor: "bg-accent/10",
      questions: 850,
      avgTime: "35 mins",
      difficulty: "Easy to Medium"
    },
    {
      id: "programming",
      title: "Programming Concepts",
      description: "Master programming fundamentals and coding concepts",
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/10",
      questions: 750,
      avgTime: "50 mins",
      difficulty: "Medium to Hard"
    },
    {
      id: "dsa",
      title: "Data Structures & Algorithms",
      description: "Deep dive into DSA concepts essential for technical interviews",
      icon: Database,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      questions: 650,
      avgTime: "60 mins",
      difficulty: "Hard"
    },
    {
      id: "os",
      title: "Operating Systems",
      description: "Understand OS concepts, processes, memory management, and more",
      icon: Cpu,
      color: "text-accent",
      bgColor: "bg-accent/10",
      questions: 420,
      avgTime: "30 mins",
      difficulty: "Medium"
    },
    {
      id: "dbms",
      title: "Database Management",
      description: "Learn SQL, normalization, transactions, and database design",
      icon: Database,
      color: "text-primary",
      bgColor: "bg-primary/10",
      questions: 380,
      avgTime: "35 mins",
      difficulty: "Medium"
    },
    {
      id: "networks",
      title: "Computer Networks",
      description: "Master networking protocols, OSI model, and network security",
      icon: Network,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      questions: 320,
      avgTime: "25 mins",
      difficulty: "Medium"
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
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <BookOpen className="h-4 w-4" />
              <span>Practice Hub</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold">
              Master Every{" "}
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Subject
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Comprehensive MCQ practice across all subjects commonly asked in placement exams. 
              Choose your category and start practicing with detailed explanations.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="p-6 hover:shadow-glow transition-all duration-300 group bg-card-gradient border">
                {/* Icon and Title */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${category.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  
                  <Badge variant="secondary" className="text-xs">
                    {category.questions} Questions
                  </Badge>
                </div>

                {/* Content */}
                <div className="space-y-3 mb-6">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>

                  {/* Stats */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Avg. {category.avgTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-3 w-3" />
                        <span>Popular</span>
                      </div>
                    </div>
                    
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getDifficultyColor(category.difficulty)}`}
                    >
                      {category.difficulty}
                    </Badge>
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full group/btn bg-hero-gradient hover:opacity-90"
                  size="sm"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Start Practice
                  <ArrowRight className="h-4 w-4 ml-auto group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="mt-16 bg-hero-gradient rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Practice Statistics</h3>
              <p className="text-white/80">Your journey to placement success starts here</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">5,000+</div>
                <div className="text-white/80">Total Questions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">8</div>
                <div className="text-white/80">Subject Areas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">10,000+</div>
                <div className="text-white/80">Students Practicing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">95%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Practice;