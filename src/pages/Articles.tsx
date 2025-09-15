import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink, BookOpen } from "lucide-react";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  url: string;
  featured: boolean;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn best practices for creating maintainable and scalable React applications using TypeScript, including advanced patterns and architecture decisions.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "TypeScript", "Architecture"],
    url: "https://example.com/article-1",
    featured: true,
  },
  {
    id: 2,
    title: "Modern CSS Techniques for Better Performance",
    excerpt: "Explore cutting-edge CSS features and optimization techniques that can significantly improve your website's performance and user experience.",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "CSS",
    tags: ["CSS", "Performance", "Web Design"],
    url: "https://example.com/article-2",
    featured: true,
  },
  {
    id: 3,
    title: "Mastering Node.js for Backend Development",
    excerpt: "A comprehensive guide to building robust backend services with Node.js, covering security, performance, and best practices.",
    date: "2023-12-22",
    readTime: "12 min read",
    category: "Backend",
    tags: ["Node.js", "Backend", "API"],
    url: "https://example.com/article-3",
    featured: false,
  },
  {
    id: 4,
    title: "The Future of Web Development: What's Next?",
    excerpt: "An exploration of emerging trends and technologies that are shaping the future of web development, from AI integration to new frameworks.",
    date: "2023-12-10",
    readTime: "10 min read",
    category: "Trends",
    tags: ["Future", "Trends", "AI"],
    url: "https://example.com/article-4",
    featured: true,
  },
  {
    id: 5,
    title: "Database Design Patterns for Modern Applications",
    excerpt: "Learn essential database design patterns and when to use them in your applications for optimal performance and scalability.",
    date: "2023-11-28",
    readTime: "9 min read",
    category: "Database",
    tags: ["Database", "Design Patterns", "PostgreSQL"],
    url: "https://example.com/article-5",
    featured: false,
  },
  {
    id: 6,
    title: "Creating Engaging User Experiences with Animation",
    excerpt: "Discover how to use animations effectively in web applications to create delightful and intuitive user experiences without sacrificing performance.",
    date: "2023-11-15",
    readTime: "7 min read",
    category: "UX",
    tags: ["UX", "Animation", "Framer Motion"],
    url: "https://example.com/article-6",
    featured: false,
  },
];

const categories = ["All", "React", "CSS", "Backend", "Trends", "Database", "UX"];

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredArticle, setHoveredArticle] = useState<number | null>(null);

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Featured Articles
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Insights, tutorials, and thoughts on web development, technology trends, and best practices
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-neon-blue text-white"
                  : "border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <div className="space-y-8">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredArticle(article.id)}
              onHoverEnd={() => setHoveredArticle(null)}
            >
              <Card className="glass p-8 hover:glow-primary transition-all duration-500 hover:scale-[1.02]">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Article Image/Icon */}
                  <div className="lg:w-48 lg:h-32 flex-shrink-0">
                    <div className="w-full h-32 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-neon-cyan/30 to-neon-pink/30"
                        animate={{
                          opacity: hoveredArticle === article.id ? 0.8 : 0.3,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <BookOpen size={32} className="text-white/70 relative z-10" />
                      {article.featured && (
                        <Badge className="absolute top-2 right-2 bg-neon-purple text-white text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <Badge variant="outline" className="border-neon-cyan text-neon-cyan">
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-muted-foreground text-sm space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{formatDate(article.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl font-semibold mb-3 text-neon-blue hover:text-neon-cyan transition-colors duration-300">
                      {article.title}
                    </h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="outline" 
                            className="text-xs border-neon-purple/50 text-neon-purple"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background"
                        asChild
                      >
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Read Article
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <Card className="glass p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-neon-purple">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get notified when I publish new articles about web development, technology trends, and programming insights.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-white px-8 py-3 rounded-full"
            >
              Subscribe to Newsletter
            </Button>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Articles;