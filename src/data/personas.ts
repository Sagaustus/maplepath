export type Persona = {
  id: string;
  name: string;
  icon: string;
  blurb: string;
  description: string;
  supportFocus: string;
  goals: string[];
};

export const personas: Persona[] = [
  {
    id: "student",
    name: "International Student",
    icon: "🎓",
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
  },
];

export function getPersonaById(personaId?: string) {
  return personas.find((persona) => persona.id === personaId);
}
