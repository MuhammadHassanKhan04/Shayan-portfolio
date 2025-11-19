import React from 'react';
import { PROFESSIONAL_SUMMARY } from '../constants';
import { User, Target, Award, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">About Me</h2>
            <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 transition-all">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                 <div className="bg-brand-100 dark:bg-brand-900/50 p-4 rounded-2xl">
                    <User size={32} className="text-brand-600 dark:text-brand-400" />
                 </div>
              </div>
              <div className="flex-1">
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                  {PROFESSIONAL_SUMMARY}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex flex-col gap-2 p-4 rounded-xl bg-white dark:bg-slate-900/50 hover:bg-brand-50 dark:hover:bg-slate-700 transition-colors group border border-slate-100 dark:border-slate-700">
                    <Target className="text-slate-400 dark:text-slate-500 group-hover:text-brand-500 mb-1" size={24} />
                    <h4 className="font-semibold text-slate-900 dark:text-white">Result Oriented</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Focused on delivering concrete sales targets.</p>
                  </div>
                  <div className="flex flex-col gap-2 p-4 rounded-xl bg-white dark:bg-slate-900/50 hover:bg-brand-50 dark:hover:bg-slate-700 transition-colors group border border-slate-100 dark:border-slate-700">
                    <Award className="text-slate-400 dark:text-slate-500 group-hover:text-brand-500 mb-1" size={24} />
                    <h4 className="font-semibold text-slate-900 dark:text-white">Adaptable</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Quick learner in fast-paced environments.</p>
                  </div>
                  <div className="flex flex-col gap-2 p-4 rounded-xl bg-white dark:bg-slate-900/50 hover:bg-brand-50 dark:hover:bg-slate-700 transition-colors group border border-slate-100 dark:border-slate-700">
                    <Zap className="text-slate-400 dark:text-slate-500 group-hover:text-brand-500 mb-1" size={24} />
                    <h4 className="font-semibold text-slate-900 dark:text-white">Energetic</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Positive attitude and strong work ethic.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;