import React from 'react';
import { Cpu, ShieldPlus, AlertCircle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const AIInsights = () => {
  const recommendations = [
    {
      title: "Update Firewall Ruleset Alpha",
      description: "Based on recent access patterns, modifying rule #402 can prevent potential brute-force attempts from subnet 10.0.x.x.",
      impact: "High Impact",
      icon: ShieldPlus,
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20"
    },
    {
      title: "Rotate Database Credentials",
      description: "Admin credentials for main DB haven't been rotated in 90 days. Policy suggests 60-day rotation.",
      impact: "Medium Impact",
      icon: AlertCircle,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20"
    },
    {
      title: "Optimize Log Archiving",
      description: "Current storage metrics suggest moving logs older than 30 days to cold storage to reduce costs by 15%.",
      impact: "Efficiency",
      icon: Zap,
      color: "text-cyber-neon",
      bg: "bg-cyan-500/10",
      border: "border-cyber-neon/20"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white flex items-center gap-2">
          <Cpu className="h-8 w-8 text-cyber-purple" /> AI Intelligent Insights
        </h1>
        <p className="text-gray-400 mt-1">Proactive security recommendations powered by Machine Learning</p>
      </div>

      <div className="glass-panel p-8 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-cyber-purple/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative z-10">
           <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyber-neon to-cyber-purple mb-4">System Health Score: 92/100</h2>
           <p className="text-gray-300 max-w-2xl mb-6">
             Your infrastructure is currently operating within acceptable parameters. 
             Our analysis engine has identified 3 potential areas for optimization to harden your defenses further.
           </p>
           
           <div className="w-full bg-cyber-900 rounded-full h-2.5 mb-2 mt-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyber-neon h-2.5 rounded-full" style={{ width: '92%' }}></div>
           </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mt-10 mb-4 px-2">Actionable Recommendations</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.map((rec, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`glass-panel p-6 border transition-all hover:-translate-y-1 ${rec.border} flex flex-col h-full`}
          >
            <div className={`p-3 rounded-lg inline-flex w-fit ${rec.bg} mb-4`}>
              <rec.icon className={`h-6 w-6 ${rec.color}`} />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{rec.title}</h4>
            <p className="text-gray-400 text-sm flex-1">{rec.description}</p>
            
            <div className="mt-6 flex items-center justify-between">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${rec.bg} ${rec.color}`}>
                {rec.impact}
              </span>
              <button className="text-sm text-cyber-neon hover:text-white transition-colors">Apply Fix →</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AIInsights;
