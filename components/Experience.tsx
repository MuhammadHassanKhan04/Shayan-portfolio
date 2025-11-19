import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-brand-100 dark:bg-brand-900/30 rounded-lg">
                <Briefcase className="text-brand-600 dark:text-brand-400" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Experience</h2>
            </div>

            <div className="space-y-8">
              {EXPERIENCE.map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-50 dark:bg-slate-950 border-2 border-brand-500 rounded-full"></div>
                  
                  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm p-6 hover:shadow-md transition-all">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{job.title}</h3>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {job.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {job.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          <CheckCircle2 size={16} className="text-brand-500 mt-0.5 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <GraduationCap className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Education</h2>
            </div>

            <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-50 dark:bg-slate-950 border-2 border-purple-500 rounded-full"></div>
              
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm p-6 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{EDUCATION.degree}</h3>
                <p className="text-brand-600 dark:text-brand-400 font-medium text-sm inline-block bg-brand-50 dark:bg-brand-900/20 px-3 py-1 rounded-full">
                  {EDUCATION.status}
                </p>
                <p className="text-slate-500 dark:text-slate-400 mt-4 text-sm">
                  Foundational education focusing on core subjects, building a strong base for professional growth and further studies.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;