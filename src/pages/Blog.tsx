import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Clock, 
  User, 
  ArrowRight,
  TrendingUp,
  Bookmark,
  Share2
} from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "Complete Guide to Cracking TCS NQT 2024",
    excerpt: "Everything you need to know about TCS National Qualifier Test including exam pattern, syllabus, preparation strategy, and insider tips from recently placed students.",
    image: "/placeholder.svg",
    author: "Priya Sharma",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Company Guide",
    tags: ["TCS", "NQT", "Preparation Strategy"]
  };

  const blogPosts = [
    {
      title: "Top 50 Aptitude Questions Asked in Campus Placements",
      excerpt: "A comprehensive collection of the most frequently asked aptitude questions with detailed solutions and explanations.",
      author: "Rahul Kumar",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      category: "Aptitude",
      tags: ["Aptitude", "Practice", "Questions"],
      trending: true
    },
    {
      title: "How I Secured 12 LPA Package at Infosys",
      excerpt: "My complete journey from college preparation to final placement including interview experiences and key learnings.",
      author: "Sneha Patel", 
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Success Story",
      tags: ["Infosys", "Success Story", "Interview"],
      trending: true
    },
    {
      title: "Data Structures Every CS Student Must Know",
      excerpt: "Essential data structures concepts that are crucial for technical interviews and coding rounds in placements.",
      author: "Arjun Singh",
      date: "Dec 8, 2024", 
      readTime: "15 min read",
      category: "Technical",
      tags: ["DSA", "Technical", "Coding"]
    },
    {
      title: "Mock Interview Tips: What Recruiters Look For",
      excerpt: "Insights from HR professionals on what they evaluate during technical and HR interviews.",
      author: "Kavya Reddy",
      date: "Dec 5, 2024",
      readTime: "7 min read", 
      category: "Interview Tips",
      tags: ["Interview", "HR", "Tips"]
    },
    {
      title: "Coding Round Strategies for Placement Success",
      excerpt: "Proven strategies and common patterns for solving coding problems in placement tests.",
      author: "Vikash Gupta",
      date: "Dec 3, 2024",
      readTime: "10 min read",
      category: "Coding",
      tags: ["Coding", "Strategy", "Algorithms"]
    },
    {
      title: "Resume Building Guide for Fresh Graduates",
      excerpt: "Step-by-step guide to creating an impressive resume that gets you shortlisted for interviews.",
      author: "Anita Nair",
      date: "Dec 1, 2024",
      readTime: "9 min read",
      category: "Career Advice", 
      tags: ["Resume", "Career", "Tips"]
    }
  ];

  const categories = [
    { name: "All Posts", count: 48, active: true },
    { name: "Company Guides", count: 12 },
    { name: "Technical", count: 15 },
    { name: "Aptitude", count: 8 },
    { name: "Success Stories", count: 7 },
    { name: "Interview Tips", count: 6 }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Company Guide": "bg-primary/10 text-primary",
      "Technical": "bg-secondary/10 text-secondary", 
      "Aptitude": "bg-accent/10 text-accent",
      "Success Story": "bg-green-100 text-green-800",
      "Interview Tips": "bg-blue-100 text-blue-800",
      "Coding": "bg-purple-100 text-purple-800",
      "Career Advice": "bg-orange-100 text-orange-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-20 pb-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <FileText className="h-4 w-4" />
              <span>Knowledge Hub</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold">
              Career{" "}
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Insights & Tips
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Expert advice, success stories, and comprehensive guides to help you excel 
              in your placement preparation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={category.active ? "default" : "outline"}
                size="sm"
                className={category.active ? "bg-hero-gradient" : ""}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="overflow-hidden hover:shadow-glow transition-all duration-300 group">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-48 md:h-full bg-hero-gradient flex items-center justify-center">
                    <FileText className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge className={getCategoryColor(featuredPost.category)}>
                      {featuredPost.category}
                    </Badge>
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <span>{featuredPost.date}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-hero-gradient hover:opacity-90 group/btn">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300 group bg-card-gradient border">
                {/* Post Header */}
                <div className="flex items-center justify-between mb-3">
                  <Badge className={getCategoryColor(post.category)}>
                    {post.category}
                  </Badge>
                  {post.trending && (
                    <Badge variant="outline" className="bg-red-100 text-red-800">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span className="text-xs">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span className="text-xs">{post.readTime}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Bookmark className="h-3 w-3" />
                    </Button>
                    <Button size="sm" className="bg-hero-gradient hover:opacity-90 group/btn">
                      Read
                      <ArrowRight className="h-3 w-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;