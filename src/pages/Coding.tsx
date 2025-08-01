import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Play, 
  Timer, 
  Trophy, 
  Target,
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Coding = () => {
  const difficulties = [
    {
      level: "Easy",
      count: 150,
      color: "bg-green-100 text-green-800",
      description: "Perfect for beginners and interview prep",
      topics: ["Arrays", "Strings", "Basic Math", "Loops"]
    },
    {
      level: "Medium", 
      count: 120,
      color: "bg-yellow-100 text-yellow-800",
      description: "Intermediate problems for skill building",
      topics: ["Linked Lists", "Trees", "Graphs", "Dynamic Programming"]
    },
    {
      level: "Hard",
      count: 80,
      color: "bg-red-100 text-red-800", 
      description: "Advanced challenges for expert level",
      topics: ["Advanced DP", "Complex Algorithms", "System Design"]
    }
  ];

  const recentChallenges = [
    {
      title: "Two Sum Problem",
      difficulty: "Easy",
      topics: ["Array", "Hash Table"],
      solved: 1250,
      time: "15 min",
      success: 95
    },
    {
      title: "Binary Tree Traversal",
      difficulty: "Medium",
      topics: ["Tree", "DFS", "BFS"], 
      solved: 890,
      time: "25 min",
      success: 78
    },
    {
      title: "Longest Palindromic Substring",
      difficulty: "Medium",
      topics: ["String", "Dynamic Programming"],
      solved: 670,
      time: "30 min", 
      success: 65
    },
    {
      title: "Merge K Sorted Lists",
      difficulty: "Hard",
      topics: ["Linked List", "Heap", "Divide & Conquer"],
      solved: 420,
      time: "45 min",
      success: 45
    }
  ];

  const features = [
    {
      icon: Code,
      title: "Online Code Editor",
      description: "Write, compile and test your code in multiple languages"
    },
    {
      icon: Timer,
      title: "Timed Challenges",
      description: "Practice under real interview conditions with time limits"
    },
    {
      icon: Trophy,
      title: "Leaderboard",
      description: "Compete with peers and track your ranking"
    },
    {
      icon: Target,
      title: "Test Cases",
      description: "Comprehensive test cases to validate your solutions"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty.toLowerCase()) {
      case "easy": return "bg-green-100 text-green-800";
      case "medium": return "bg-yellow-100 text-yellow-800"; 
      case "hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-20 pb-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              <Code className="h-4 w-4" />
              <span>Coding Arena</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold">
              Master{" "}
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Coding Skills
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Practice coding problems, improve your algorithmic thinking, and prepare for technical interviews 
              with our comprehensive coding platform.
            </p>
          </div>
        </div>
      </section>

      {/* Difficulty Levels */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {difficulties.map((difficulty, index) => (
              <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300 group bg-card-gradient border text-center">
                <div className="space-y-4">
                  <Badge className={`${difficulty.color} text-lg px-4 py-2`}>
                    {difficulty.level}
                  </Badge>
                  
                  <div className="text-3xl font-bold text-foreground">
                    {difficulty.count}
                  </div>
                  
                  <p className="text-muted-foreground text-sm">
                    {difficulty.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {difficulty.topics.map((topic, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-hero-gradient hover:opacity-90 group/btn">
                    Start {difficulty.level}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Popular Challenges */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Popular Challenges</h2>
              <p className="text-muted-foreground">Start with these most solved problems</p>
            </div>

            <div className="grid gap-4">
              {recentChallenges.map((challenge, index) => (
                <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {challenge.title}
                        </h3>
                        <Badge className={getDifficultyColor(challenge.difficulty)}>
                          {challenge.difficulty}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {challenge.topics.map((topic, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="h-4 w-4" />
                          <span>{challenge.solved} solved</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Timer className="h-4 w-4" />
                          <span>~{challenge.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Target className="h-4 w-4" />
                          <span>{challenge.success}% success</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="ml-4 bg-hero-gradient hover:opacity-90 group/btn">
                      <Play className="h-4 w-4 mr-2" />
                      Solve
                      <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Code Editor Preview */}
          <div className="mt-16 bg-card-gradient rounded-2xl p-8 border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Integrated Code Editor</h3>
              <p className="text-muted-foreground">Practice coding with our feature-rich online editor</p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400">main.cpp</span>
              </div>
              
              <div className="space-y-1">
                <div className="text-blue-400">#include &lt;iostream&gt;</div>
                <div className="text-blue-400">#include &lt;vector&gt;</div>
                <div className="text-purple-400">using namespace std;</div>
                <div></div>
                <div className="text-yellow-400">class Solution {"{"}</div>
                <div className="text-purple-400">public:</div>
                <div className="ml-4 text-green-400">vector&lt;int&gt; twoSum(vector&lt;int&gt;&amp; nums, int target) {"{"}</div>
                <div className="ml-8 text-gray-400">// Your solution here...</div>
                <div className="ml-4 text-green-400">{"}"}</div>
                <div className="text-yellow-400">{"}"};</div>
              </div>
            </div>

            <div className="flex items-center justify-center mt-6 space-x-4">
              <Button className="bg-hero-gradient hover:opacity-90">
                <Zap className="h-4 w-4 mr-2" />
                Try Code Editor
              </Button>
              <Badge variant="outline" className="text-xs">
                Supports C++, Java, Python, JavaScript
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Coding;