import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Download, ChevronRight } from 'lucide-react';
import { CONTACT_INFO, PROFESSIONAL_SUMMARY, EXPERIENCE, SKILLS, EDUCATION } from '../constants';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = ["Sales Specialist", "Marketing Professional", "Customer Support Expert", "Problem Solver"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

  const handleDownloadResume = () => {
    const resumeWindow = window.open('', '_blank');
    if (!resumeWindow) {
        alert('Please allow popups to view the resume');
        return;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resume - Shayan Finyas</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <script>
          tailwind.config = {
            theme: {
              extend: {
                fontFamily: { sans: ['Inter', 'sans-serif'] },
                colors: {
                  brand: {
                    50: '#f0f9ff', 100: '#e0f2fe', 500: '#0ea5e9', 600: '#0284c7', 800: '#075985', 900: '#0c4a6e',
                  }
                }
              }
            }
          }
        </script>
        <style>
          @page { size: A4; margin: 0; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          @media print {
            .no-print { display: none; }
            body { background: white; }
            .resume-container { box-shadow: none; margin: 0; width: 100%; max-width: none; }
          }
        </style>
      </head>
      <body class="bg-slate-100 min-h-screen p-0 md:p-8 flex justify-center items-start font-sans">
        
        <div class="resume-container w-full max-w-[210mm] bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[297mm]">
          
          <!-- Left Sidebar -->
          <div class="w-full md:w-[35%] bg-slate-900 text-white p-8 flex flex-col relative overflow-hidden">
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            <div class="flex flex-col items-center text-center mb-10 relative z-10">
              <div class="w-40 h-40 rounded-full border-4 border-brand-500 overflow-hidden mb-6 bg-slate-800 shadow-lg">
                 <img src="./shayan_profile.jpg" onerror="this.src='https://ui-avatars.com/api/?name=Shayan+Finyas&background=0ea5e9&color=fff&size=400'" alt="Shayan Finyas" class="w-full h-full object-cover">
              </div>
              <h1 class="text-2xl font-bold tracking-wider text-white">SHAYAN FINYAS</h1>
              <p class="text-brand-500 font-medium text-sm mt-2 uppercase tracking-widest">Sales & Marketing</p>
            </div>
            <div class="mb-10 relative z-10">
              <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-700 pb-3 mb-5">Contact Details</h3>
              <div class="space-y-5 text-sm text-slate-300">
                <div class="flex items-start gap-4 group">
                  <span class="bg-slate-800 p-2 rounded-lg text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors">📞</span>
                  <div class="flex flex-col">
                    <span class="text-xs text-slate-500">Phone</span>
                    <span class="font-medium">${CONTACT_INFO.phone}</span>
                  </div>
                </div>
                <div class="flex items-start gap-4 group">
                  <span class="bg-slate-800 p-2 rounded-lg text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors">✉️</span>
                  <div class="flex flex-col">
                     <span class="text-xs text-slate-500">Email</span>
                     <span class="font-medium break-all">${CONTACT_INFO.email}</span>
                  </div>
                </div>
                <div class="flex items-start gap-4 group">
                  <span class="bg-slate-800 p-2 rounded-lg text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors">📍</span>
                  <div class="flex flex-col">
                     <span class="text-xs text-slate-500">Location</span>
                     <span class="font-medium">${CONTACT_INFO.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-10 relative z-10">
              <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-700 pb-3 mb-5">Expertise</h3>
              <div class="flex flex-wrap gap-2">
                ${SKILLS.map(s => `<span class="bg-slate-800 text-xs px-3 py-1.5 rounded-md text-slate-200 border border-slate-700 font-medium">${s.name}</span>`).join('')}
              </div>
            </div>
            <div class="relative z-10">
              <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-700 pb-3 mb-5">Languages</h3>
              <ul class="text-sm text-slate-300 space-y-3">
                <li class="flex justify-between items-center"><span>English</span><div class="flex gap-1"><div class="w-2 h-2 rounded-full bg-brand-500"></div><div class="w-2 h-2 rounded-full bg-brand-500"></div><div class="w-2 h-2 rounded-full bg-brand-500"></div><div class="w-2 h-2 rounded-full bg-brand-500"></div><div class="w-2 h-2 rounded-full bg-slate-700"></div></div></li>
                <li class="flex justify-between items-center"><span>Urdu</span><div class="flex gap-1"><div class="w-2 h-2 rounded-full bg-brand-500"></div><div class="w-2 h-2 rounded-full bg-brand-500"></div><div class="w-2 h-2 rounded-full bg-brand-500"></div><div class="w-2 h-2 rounded-full bg-brand-500"></div><div class="w-2 h-2 rounded-full bg-brand-500"></div></div></li>
              </ul>
            </div>
          </div>
          
          <!-- Right Content -->
          <div class="w-full md:w-[65%] p-8 md:p-12 text-slate-800 bg-white">
            <div class="md:hidden mb-8 text-center border-b border-slate-100 pb-6">
                <h1 class="text-3xl font-bold text-slate-900">SHAYAN FINYAS</h1>
                <p class="text-brand-600 font-medium uppercase tracking-wide mt-1">Sales & Marketing Professional</p>
            </div>
            <div class="mb-10">
              <h2 class="text-lg font-bold text-slate-900 uppercase tracking-widest flex items-center gap-3 mb-4">
                <span class="w-8 h-1 bg-brand-500 rounded-full"></span>Professional Summary
              </h2>
              <p class="text-sm leading-7 text-slate-600 text-justify border-l-4 border-slate-100 pl-4">${PROFESSIONAL_SUMMARY}</p>
            </div>
            <div class="mb-10">
              <h2 class="text-lg font-bold text-slate-900 uppercase tracking-widest flex items-center gap-3 mb-6">
                <span class="w-8 h-1 bg-brand-500 rounded-full"></span>Work Experience
              </h2>
              <div class="space-y-8">
                ${EXPERIENCE.map(exp => `
                  <div class="relative pl-6 border-l-2 border-slate-100 hover:border-brand-200 transition-colors">
                    <div class="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-brand-500 rounded-full ring-4 ring-white"></div>
                    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                      <h3 class="font-bold text-lg text-slate-900">${exp.title}</h3>
                      <span class="text-xs font-bold text-brand-700 bg-brand-50 px-3 py-1 rounded-full whitespace-nowrap border border-brand-100">${exp.period}</span>
                    </div>
                    <p class="text-xs text-slate-500 mb-4 font-semibold uppercase tracking-wide flex items-center gap-1">📍 ${exp.location}</p>
                    <ul class="space-y-2">${exp.description.map(d => `<li class="text-sm text-slate-600 flex items-start gap-2.5"><span class="text-brand-400 mt-1.5 text-[8px]">●</span><span class="flex-1">${d}</span></li>`).join('')}</ul>
                  </div>
                `).join('')}
              </div>
            </div>
            <div>
               <h2 class="text-lg font-bold text-slate-900 uppercase tracking-widest flex items-center gap-3 mb-6">
                <span class="w-8 h-1 bg-brand-500 rounded-full"></span>Education
              </h2>
              <div class="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h3 class="font-bold text-slate-900 text-lg">${EDUCATION.degree}</h3>
                <div class="flex items-center gap-2 mt-2">
                  <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <p class="text-sm text-slate-600 font-medium">Status: <span class="text-slate-900">${EDUCATION.status}</span></p>
                </div>
              </div>
            </div>
            <div class="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center no-print">
                <p class="text-xs text-slate-400">Generated by Portfolio App</p>
                <button onclick="window.print()" class="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 cursor-pointer">
                    Print / Save as PDF
                </button>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
    resumeWindow.document.write(htmlContent);
    resumeWindow.document.close();
  };

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-semibold tracking-wider text-brand-600 dark:text-brand-400 uppercase bg-brand-100 dark:bg-brand-900/30 rounded-full border border-brand-200 dark:border-brand-800/50">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for opportunities
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
              Hi, I'm <span className="text-brand-600 dark:text-brand-500">Shayan</span>
            </h1>
            
            <div className="h-12 sm:h-16 mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-600 dark:text-slate-300 font-medium">
                I am a <span className="text-slate-900 dark:text-white border-b-2 border-brand-500">{text}</span>
                <span className="cursor-blink ml-1">|</span>
              </h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Energetic professional with 2 years of experience delivering results in sales, marketing, and customer support. 
              Passionate about building relationships and solving complex business problems.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <a 
                href={`mailto:${CONTACT_INFO.email}`} 
                className="px-8 py-4 rounded-full bg-brand-600 text-white font-semibold hover:bg-brand-700 hover:-translate-y-1 transition-all shadow-lg shadow-brand-500/25 flex items-center gap-2 group"
              >
                <Mail size={20} />
                Contact Me
                <ChevronRight size={16} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
              <button 
                onClick={handleDownloadResume}
                className="px-8 py-4 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-semibold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 hover:-translate-y-1 transition-all shadow-lg dark:shadow-black/20 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-8">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-brand-500" />
                {CONTACT_INFO.location}
              </div>
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                <Phone size={18} className="text-brand-500" />
                {CONTACT_INFO.phone}
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                <Mail size={18} className="text-brand-500" />
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>
          
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-500 to-purple-500 opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full border border-brand-200/50 dark:border-brand-500/20 animate-spin-slow"></div>
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center transition-colors duration-300">
                <img 
                   src="./shayan_profile.jpg" 
                   onError={(e) => { e.currentTarget.src = "https://instagram.fkhi17-2.fna.fbcdn.net/v/t51.2885-19/524444346_17970026624917025_8704165358523872246_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMxIn0&_nc_ht=instagram.fkhi17-2.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QGF52LyKI_Nqg9jbVpehxtxuDnGpfKPB1CGhnCdNCDyU0Znz01m0AyCL1_M8JJEQ-A&_nc_ohc=mo5yRSHl_g0Q7kNvwEqMRH9&_nc_gid=VdVaQXxM5QWP4XYWt7xisA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfgDmU6Jg1pRFcRyw8od5SQ2sKFSzjdJS3M9APnUjMbu_A&oe=6923BC7B&_nc_sid=7a9f4b"; }}
                   alt="Shayan Finyas" 
                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Badge 1 */}
              <div className="absolute top-0 right-0 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 transform rotate-6 hover:rotate-0 transition-all z-20 group animate-bounce-slow">
                <div className="flex items-center gap-3">
                   <div className="bg-green-100 dark:bg-green-900/30 p-2.5 rounded-xl">
                     <Phone size={24} className="text-green-600 dark:text-green-400" />
                   </div>
                   <div>
                     <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Experience</p>
                     <p className="text-base font-bold text-slate-800 dark:text-white">2 Years</p>
                   </div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute bottom-4 -left-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 transform -rotate-6 hover:rotate-0 transition-all z-20 animate-bounce-slow animation-delay-1000">
                <div className="flex items-center gap-3">
                   <div className="bg-brand-100 dark:bg-brand-900/30 p-2.5 rounded-xl">
                     <Download size={24} className="text-brand-600 dark:text-brand-400" />
                   </div>
                   <div>
                     <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Specialist</p>
                     <p className="text-base font-bold text-slate-800 dark:text-white">Sales & Support</p>
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

export default Hero;
