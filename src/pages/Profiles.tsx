import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Trophy, Star, Code, GitBranch } from "lucide-react";

interface Profile {
  id: number;
  platform: string;
  username: string;
  url: string;
  description: string;
  stats: { label: string; value: string; }[];
  color: string;
  icon: React.ReactNode;
  achievements?: string[];
}

const profiles: Profile[] = [
  {
    id: 1,
    platform: "GitHub",
    username: "@johndoe",
    url: "https://github.com/johndoe",
    description: "Open source contributions, personal projects, and collaborative development",
    stats: [
      { label: "Repositories", value: "150+" },
      { label: "Stars", value: "2.5K" },
      { label: "Followers", value: "800" },
      { label: "Contributions", value: "1.2K" },
    ],
    color: "neon-blue",
    icon: <GitBranch size={32} />,
    achievements: ["Arctic Code Vault Contributor", "Top 10% Developer", "Open Source Champion"],
  },
  {
    id: 2,
    platform: "LeetCode",
    username: "john_codes",
    url: "https://leetcode.com/john_codes",
    description: "Algorithm and data structure problem solving, competitive programming",
    stats: [
      { label: "Problems Solved", value: "500+" },
      { label: "Contest Rating", value: "1850" },
      { label: "Global Ranking", value: "Top 5%" },
      { label: "Streak", value: "120 days" },
    ],
    color: "neon-purple",
    icon: <Code size={32} />,
    achievements: ["Knight Badge", "Guardian Badge", "Contest Winner"],
  },
  {
    id: 3,
    platform: "SkillRack",
    username: "johndoe_sr",
    url: "https://skillrack.com/johndoe_sr",
    description: "Programming challenges, technical assessments, and skill development",
    stats: [
      { label: "Score", value: "9,500" },
      { label: "Rank", value: "#1,250" },
      { label: "Challenges", value: "300+" },
      { label: "Success Rate", value: "95%" },
    ],
    color: "neon-cyan",
    icon: <Trophy size={32} />,
    achievements: ["Top Performer", "Master Coder", "Challenge Champion"],
  },
  {
    id: 4,
    platform: "CodePen",
    username: "john-creative",
    url: "https://codepen.io/john-creative",
    description: "Creative coding, CSS animations, and interactive web experiments",
    stats: [
      { label: "Pens", value: "75" },
      { label: "Hearts", value: "1.8K" },
      { label: "Views", value: "50K+" },
      { label: "Followers", value: "400" },
    ],
    color: "neon-pink",
    icon: <Star size={32} />,
    achievements: ["Popular Pen Creator", "Featured Developer", "CSS Artist"],
  },
  {
    id: 5,
    platform: "Stack Overflow",
    username: "john-developer",
    url: "https://stackoverflow.com/users/john-developer",
    description: "Community support, Q&A participation, and knowledge sharing",
    stats: [
      { label: "Reputation", value: "15K" },
      { label: "Gold Badges", value: "3" },
      { label: "Silver Badges", value: "25" },
      { label: "Answers", value: "200+" },
    ],
    color: "neon-blue",
    icon: <Code size={32} />,
    achievements: ["Top 10% This Year", "Notable Question", "Civic Duty"],
  },
  {
    id: 6,
    platform: "Dev.to",
    username: "@johndoe_dev",
    url: "https://dev.to/johndoe_dev",
    description: "Technical writing, tutorials, and developer community engagement",
    stats: [
      { label: "Posts", value: "45" },
      { label: "Reactions", value: "5.2K" },
      { label: "Comments", value: "800" },
      { label: "Followers", value: "1.1K" },
    ],
    color: "neon-purple",
    icon: <Star size={32} />,
    achievements: ["Top Author", "Community Moderator", "Featured Writer"],
  },
];

const Profiles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 px-6"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Coding Profiles
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my presence across various coding platforms, showcasing skills, contributions, and achievements
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="glass p-8 h-full hover:glow-primary transition-all duration-500">
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`text-${profile.color} p-3 glass rounded-full`}>
                      {profile.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-neon-cyan">{profile.platform}</h2>
                      <p className="text-muted-foreground">{profile.username}</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`border-${profile.color} text-${profile.color} hover:bg-${profile.color} hover:text-background`}
                    asChild
                  >
                    <a href={profile.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {profile.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {profile.stats.map((stat, statIndex) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + statIndex * 0.05 }}
                      className="text-center p-3 glass rounded-lg"
                    >
                      <div className={`text-xl font-bold text-${profile.color} mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Achievements */}
                {profile.achievements && (
                  <div>
                    <h3 className="font-semibold mb-3 text-neon-purple">Achievements</h3>
                    <div className="flex flex-wrap gap-2">
                      {profile.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievement}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.1 + achievementIndex * 0.1 
                          }}
                        >
                          <Badge 
                            variant="outline" 
                            className={`text-xs border-${profile.color}/50 text-${profile.color}`}
                          >
                            {achievement}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="glass p-8">
            <h2 className="text-2xl font-semibold text-center mb-8 text-neon-purple">
              Overall Impact
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-neon-blue mb-2">10K+</div>
                <div className="text-muted-foreground">Total Contributions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-purple mb-2">25+</div>
                <div className="text-muted-foreground">Achievements Earned</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-cyan mb-2">3K+</div>
                <div className="text-muted-foreground">Community Points</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-pink mb-2">100K+</div>
                <div className="text-muted-foreground">Profile Views</div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to collaborate or have questions about my coding journey?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-white px-8 py-3 rounded-full"
            asChild
          >
            <a href="/contact">Get In Touch</a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Profiles;