export type Persona = {
  id: string;
  name: string;
  icon: string;
  blurb: string;
  description: string;
  supportFocus: string;
  goals: string[];
  quickActions: string[];
};

export const personas: Persona[] = [
  {
    id: "student",
    name: "International Student",
    icon: "📚",
    blurb: "Finding housing and work while studying.",
    description:
      "You recently arrived in Canada to start a postgraduate program and are balancing coursework with part-time work.",
    supportFocus:
      "Needs quick access to housing leads, campus resources, and legal guidance for study permits.",
    goals: [
      "Secure long-term housing near campus",
      "Understand work eligibility rules",
      "Connect with other students for support",
    ],
    quickActions: [
      "Find student housing supports",
      "Explore on-campus work options",
      "Understand study permit rules",
    ],
  },
  {
    id: "family",
    name: "Family Caregiver",
    icon: "🧑‍👧‍👦",
    blurb: "Coordinating care for children and elders.",
    description:
      "You immigrated with your children and an elderly parent and are navigating school enrollment and healthcare access.",
    supportFocus:
      "Needs translation support, school resources, and respite care guidance.",
    goals: [
      "Register children for school",
      "Find family doctors and specialists",
      "Access community care programs",
    ],
    quickActions: [
      "Enroll children in school",
      "Find family health services",
      "Locate caregiver respite programs",
    ],
  },
  {
    id: "worker",
    name: "Skilled Worker",
    icon: "🛠️",
    blurb: "Restarting a technical career in a new country.",
    description:
      "You previously worked in skilled trades and are looking to transfer credentials and secure stable employment.",
    supportFocus:
      "Needs credential assessment information, apprenticeship leads, and financial planning tools.",
    goals: [
      "Validate international certifications",
      "Connect with employers and mentors",
      "Budget for cost-of-living changes",
    ],
    quickActions: [
      "Start credential assessment",
      "Find apprenticeship programs",
      "Explore employment services",
    ],
  },
  {
    id: "refugee",
    name: "Newcomer Refugee",
    icon: "🕊️",
    blurb: "Stabilizing after a sudden relocation.",
    description:
      "You arrived through an emergency program and are prioritizing settlement services and trauma-informed support.",
    supportFocus:
      "Needs language training, mental health resources, and expedited benefits.",
    goals: [
      "Attend English or French classes",
      "Secure transitional housing",
      "Connect with cultural community groups",
    ],
    quickActions: [
      "Access settlement services",
      "Find trauma-informed counselling",
      "Apply for newcomer benefits",
    ],
  },
  {
    id: "graduate",
    name: "International Graduate",
    icon: "🎓",
    blurb: "Transitioning from studies to a career.",
    description:
      "You’ve completed your studies and are navigating post-graduation work permits, housing, and employment pathways.",
    supportFocus:
      "Needs post-graduation work permit guidance, networking opportunities, and affordable housing tips.",
    goals: [
      "Apply for a post-graduation work permit",
      "Connect with professional mentors",
      "Stabilize housing after graduation",
    ],
    quickActions: [
      "Check PGWP eligibility",
      "Find newcomer job fairs",
      "Plan affordable housing",
    ],
  },
  {
    id: "entrepreneur",
    name: "Aspiring Entrepreneur",
    icon: "💡",
    blurb: "Launching a business in Canada.",
    description:
      "You are preparing to launch or scale a small business and want to understand permits, financing, and mentorship.",
    supportFocus:
      "Needs business registration steps, newcomer-friendly financing, and mentorship networks.",
    goals: [
      "Register a business name",
      "Secure start-up financing",
      "Connect with business mentors",
    ],
    quickActions: [
      "Explore business permits",
      "Find newcomer financing programs",
      "Connect with entrepreneurship hubs",
    ],
  },
];

export function getPersonaById(personaId?: string) {
  return personas.find((persona) => persona.id === personaId);
}
