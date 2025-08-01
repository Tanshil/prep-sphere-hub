import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { 
  User, 
  Lock, 
  Mail,
  Eye,
  EyeOff,
  BookOpen,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"student" | "admin">("student");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-8 space-y-4">
              <Link to="/" className="inline-flex items-center space-x-2">
                <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                  PrepSphere
                </span>
              </Link>
              
              <div className="space-y-2">
                <h1 className="text-2xl font-bold">Welcome Back</h1>
                <p className="text-muted-foreground">
                  Sign in to continue your preparation journey
                </p>
              </div>
            </div>

            <Card className="p-6 bg-card-gradient border shadow-card">
              {/* User Type Toggle */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                <Button
                  variant={userType === "student" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setUserType("student")}
                  className={userType === "student" ? "bg-hero-gradient" : ""}
                >
                  <User className="h-4 w-4 mr-2" />
                  Student
                </Button>
                <Button
                  variant={userType === "admin" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setUserType("admin")}
                  className={userType === "admin" ? "bg-hero-gradient" : ""}
                >
                  <Lock className="h-4 w-4 mr-2" />
                  Admin
                </Button>
              </div>

              {/* Login Form */}
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-muted-foreground">Remember me</span>
                  </label>
                  <Link 
                    to="/forgot-password" 
                    className="text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-hero-gradient hover:opacity-90 group"
                  size="lg"
                >
                  Sign In as {userType === "student" ? "Student" : "Admin"}
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <Separator />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-card px-2 text-xs text-muted-foreground">
                      OR
                    </span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link 
                      to="/register" 
                      className="font-medium text-primary hover:underline"
                    >
                      Sign up here
                    </Link>
                  </p>
                </div>
              </div>
            </Card>

            {/* Demo Credentials */}
            <Card className="mt-6 p-4 bg-muted/50 border">
              <h3 className="font-medium mb-2">Demo Credentials</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Student:</span>
                  <span className="ml-2">student@demo.com / demo123</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Admin:</span>
                  <span className="ml-2">admin@demo.com / admin123</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;