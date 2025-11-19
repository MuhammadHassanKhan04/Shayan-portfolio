import React from 'react';
import { SKILLS } from '../constants';
import { Check, Star } from 'lucide-react';

const Skills: React.FC = () => {
  // Group skills by category
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Skills & Expertise</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            A diverse set of professional and technical skills developed over 2 years of hands-on experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-brand-200 dark:hover:border-brand-800 transition-all">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-200 dark:border-slate-700 pb-4">
                <Star className="text-yellow-500 fill-yellow-500" size={20} />
                {category} Skills
              </h3>
              <div className="space-y-4">
                {SKILLS.filter(s => s.category === category).map((skill, idx) => (
                  <div key={idx} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-300 dark:bg-brand-600 group-hover:bg-brand-500 group-hover:scale-125 transition-all"></div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{skill.name}</span>
                    </div>
                    {/* Visual indicator */}
                    <Check size={16} className="text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;