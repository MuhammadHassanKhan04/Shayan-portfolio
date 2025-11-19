import { ContactInfo, ExperienceItem, SkillItem } from './types';

export const CONTACT_INFO: ContactInfo = {
  phone: "0319 2316580",
  email: "shayanfinyas82@gmail.com",
  location: "Karachi, Pakistan"
};

export const PROFESSIONAL_SUMMARY = `Highly motivated and energetic professional with 2 years of experience in sales and marketing, along with strong exposure to customer service environments. Skilled in handling customer queries, providing positive service experiences, and managing tasks efficiently. A quick learner, adaptable, and able to work under pressure with excellent communication and problem-solving abilities. Always focused on delivering results and maintaining professionalism.`;

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Sales & Marketing Agent",
    period: "2 Years",
    location: "Karachi, Pakistan",
    description: [
      "Assisted customers with product information and guided them toward suitable solutions.",
      "Handled customer inquiries with professionalism through phone and digital platforms.",
      "Maintained daily reports, sales records, and customer data.",
      "Provided support to customers to ensure smooth service communication.",
      "Built strong customer relationships through clear communication and active listening."
    ]
  }
];

export const SKILLS: SkillItem[] = [
  { name: "Sales & Marketing", category: "Professional" },
  { name: "Customer Support", category: "Professional" },
  { name: "Communication Skills", category: "Professional" },
  { name: "Problem-Solving", category: "Professional" },
  { name: "Call Center Support", category: "Professional" },
  { name: "MS Office (Basic)", category: "Technical" },
  { name: "Graphic Designing (Basic)", category: "Technical" },
  { name: "English", category: "Language" },
  { name: "Urdu", category: "Language" }
];

export const EDUCATION = {
  degree: "Matriculation",
  status: "In Progress (Continue)"
};

// System prompt for the AI assistant
export const AI_SYSTEM_INSTRUCTION = `You are an AI assistant for Shayan Finyas's portfolio website. 
Your role is to answer questions about Shayan professionally, acting as his digital representative.

Here is Shayan's profile data:
Name: Shayan Finyas
Contact: ${CONTACT_INFO.phone}, ${CONTACT_INFO.email}
Location: ${CONTACT_INFO.location}

Summary: ${PROFESSIONAL_SUMMARY}

Experience:
${EXPERIENCE.map(e => `- ${e.title} (${e.period}) in ${e.location}. Key duties: ${e.description.join('; ')}`).join('\n')}

Skills: ${SKILLS.map(s => s.name).join(', ')}

Education: ${EDUCATION.degree} (${EDUCATION.status})

Guidelines:
1. Be polite, professional, and concise.
2. Only answer questions related to Shayan's professional life, skills, and experience.
3. If asked about hiring, encourage the user to contact Shayan via email or phone.
4. Keep responses under 3 sentences unless asked for a detailed summary.
5. Speak in the first person plural (e.g., "We can help..." or "Shayan is...") or third person "Shayan is...".
`;
