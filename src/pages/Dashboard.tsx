import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  BookOpen, 
  Code, 
  Trophy, 
  Target,
  Clock,
  TrendingUp,
  Calendar,
  Play,
  ArrowRight,
  Star,
  Activity
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    { label: "Questions Solved", value: 247, total: 500, color: "text-primary" },
    { label: "Coding Problems", value: 45, total: 100, color: "text-secondary" },
    { label: "Mock Tests", value: 8, total: 20, color: "text-accent" },
    { label: "Study Streak", value: 12, unit: "days", color: "text-orange-600" }
  ];

  const recentActivity = [
    {
      type: "mcq",
      title: "Completed Aptitude Test",
      score: "85%",
      time: "2 hours ago",
      icon: BookOpen,
      color: "text-primary"
    },
    {
      type: "coding",
      title: "Solved Two Sum Problem",
      score: "Accepted",
      time: "5 hours ago", 
      icon: Code,
      color: "text-secondary"
    },
    {
      type: "mock",
      title: "TCS Mock Test",
      score: "78%",
      time: "1 day ago",
      icon: Trophy,
      color: "text-accent"
    }
  ];

  const recommendations = [
    {
      title: "Data Structures Practice",
      description: "Focus on arrays and linked lists",
      category: "Coding",
      difficulty: "Medium",
      estimated: "45 min"
    },
    {
      title: "Logical Reasoning",
      description: "Improve pattern recognition",
      category: "Aptitude", 
      difficulty: "Easy",
      estimated: "30 min"
    },
    {
      title: "Infosys Mock Test",
      description: "Company-specific preparation",
      category: "Mock Test",
      difficulty: "Medium",
      estimated: "90 min"
    }
  ];

  const achievements = [
    { title: "First Steps", description: "Completed first practice set", unlocked: true },
    { title: "Code Warrior", description: "Solved 50 coding problems", unlocked: true },
    { title: "Consistent Learner", description: "7-day study streak", unlocked: true },
    { title: "Mock Master", description: "Complete 10 mock tests", unlocked: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">
                Welcome back, <span className="bg-hero-gradient bg-clip-text text-transparent">Priya!</span>
              </h1>
              <p className="text-muted-foreground mt-1">
                Ready to continue your placement preparation?
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Today's Goal</div>
              <div className="text-2xl font-bold text-primary">3/5 Tasks</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Stats Cards */}
              <div className="grid md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="p-4 text-center hover:shadow-glow transition-all duration-300">
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                      {stat.value}{stat.unit || ''}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {stat.label}
                    </div>
                    {stat.total && (
                      <div className="space-y-1">
                        <Progress value={(stat.value / stat.total) * 100} className="h-1" />
                        <div className="text-xs text-muted-foreground">
                          {stat.value}/{stat.total}
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Play className="h-5 w-5 mr-2 text-primary" />
                  Quick Actions
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button className="h-auto p-4 flex-col bg-primary/10 hover:bg-primary/20 text-primary border-primary/20" variant="outline">
                    <BookOpen className="h-6 w-6 mb-2" />
                    <span className="font-medium">Practice MCQs</span>
                    <span className="text-xs opacity-75">Continue where you left</span>
                  </Button>
                  <Button className="h-auto p-4 flex-col bg-secondary/10 hover:bg-secondary/20 text-secondary border-secondary/20" variant="outline">
                    <Code className="h-6 w-6 mb-2" />
                    <span className="font-medium">Solve Code</span>
                    <span className="text-xs opacity-75">Daily challenge ready</span>
                  </Button>
                  <Button className="h-auto p-4 flex-col bg-accent/10 hover:bg-accent/20 text-accent border-accent/20" variant="outline">
                    <Trophy className="h-6 w-6 mb-2" />
                    <span className="font-medium">Mock Test</span>
                    <span className="text-xs opacity-75">Test your skills</span>
                  </Button>
                </div>
              </Card>

              {/* Recent Activity */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-primary" />
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center`}>
                        <activity.icon className={`h-5 w-5 ${activity.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{activity.title}</div>
                        <div className="text-sm text-muted-foreground">{activity.time}</div>
                      </div>
                      <Badge variant="outline" className="bg-green-100 text-green-800">
                        {activity.score}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Recommendations */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Target className="h-5 w-5 mr-2 text-primary" />
                  Recommended for You
                </h2>
                <div className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:shadow-glow transition-all duration-300 group">
                      <div className="flex-1">
                        <h3 className="font-medium group-hover:text-primary transition-colors">
                          {rec.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{rec.description}</p>
                        <div className="flex items-center space-x-3 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {rec.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {rec.difficulty}
                          </Badge>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            {rec.estimated}
                          </div>
                        </div>
                      </div>
                      <Button size="sm" className="bg-hero-gradient hover:opacity-90 group/btn ml-4">
                        Start
                        <ArrowRight className="h-3 w-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Card */}
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  PS
                </div>
                <h3 className="font-semibold">Priya Sharma</h3>
                <p className="text-sm text-muted-foreground">Computer Science</p>
                <p className="text-xs text-muted-foreground">VIT Vellore • 2025</p>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-primary">85%</div>
                      <div className="text-muted-foreground text-xs">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-secondary">247</div>
                      <div className="text-muted-foreground text-xs">Problems</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Progress Card */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                  Weekly Progress
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>MCQ Practice</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Coding</span>
                      <span>60%</span>
                    </div>
                    <Progress value={60} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Mock Tests</span>
                      <span>40%</span>
                    </div>
                    <Progress value={40} />
                  </div>
                </div>
              </Card>

              {/* Achievements */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Star className="h-4 w-4 mr-2 text-primary" />
                  Achievements
                </h3>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`flex items-start space-x-3 ${!achievement.unlocked ? 'opacity-50' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${achievement.unlocked ? 'bg-yellow-100 text-yellow-600' : 'bg-muted'}`}>
                        <Star className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium">{achievement.title}</div>
                        <div className="text-xs text-muted-foreground">{achievement.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Upcoming */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  Upcoming
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>TCS Mock Test</span>
                    <span className="text-muted-foreground">Tomorrow</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Coding Contest</span>
                    <span className="text-muted-foreground">Dec 20</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Campus Drive</span>
                    <span className="text-muted-foreground">Jan 15</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;