export type Persona = {
  id:
    | "student"
    | "skilled_worker"
    | "refugee_claimant"
    | "family_reunification"
    | "intl_graduate"
    | "temp_worker"
    | "visitor_to_study"
    | "francophone"
    | "senior_newcomer"
    | "entrepreneur";
  name: string;
  icon: string;
  blurb: string;
  description: string;
  supportFocus: string;
  goals: string[];
  defaultQuickTaps: string[];
};

export const personas: Persona[] = [
  {
    id: "student",
    name: "International Student",
    icon: "📚",
    blurb: "Balancing studies, work, and housing in a new country.",
    description:
      "You arrived to begin a program at a Canadian college or university and are adjusting to campus life while navigating immigration rules.",
    supportFocus:
      "Needs quick wins for housing, student employment, and study permit compliance.",
    goals: [
      "Secure safe housing near campus",
      "Understand study and work permit limits",
      "Find on-campus and community supports",
    ],
    defaultQuickTaps: [
      "Find student housing programs",
      "Check on-campus work rules",
      "Explore study permit resources",
    ],
  },
  {
    id: "skilled_worker",
    name: "Skilled Worker",
    icon: "🛠️",
    blurb: "Transferring credentials and finding stable employment.",
    description:
      "You immigrated through an economic pathway and want to return to your field as quickly as possible.",
    supportFocus:
      "Needs credential assessment support, apprenticeship pathways, and settlement budgeting tools.",
    goals: [
      "Validate international credentials",
      "Connect with employers and mentors",
      "Plan for cost-of-living changes",
    ],
    defaultQuickTaps: [
      "Start credential assessment",
      "Find apprenticeship programs",
      "Connect with employment services",
    ],
  },
  {
    id: "refugee_claimant",
    name: "Refugee Claimant",
    icon: "🕊️",
    blurb: "Stabilizing after an emergency arrival.",
    description:
      "You recently arrived through a humanitarian program and are prioritizing safety, housing, and trauma-informed care.",
    supportFocus:
      "Needs settlement services, health supports, and expedited financial benefits.",
    goals: [
      "Secure transitional housing",
      "Access legal and settlement supports",
      "Connect with trauma-informed counselling",
    ],
    defaultQuickTaps: [
      "Access refugee claimant services",
      "Find trauma-informed supports",
      "Apply for emergency benefits",
    ],
  },
  {
    id: "family_reunification",
    name: "Family Reunification",
    icon: "🧑‍👧‍👦",
    blurb: "Coordinating care for children and elders.",
    description:
      "You reunited with family members in Canada and are establishing schooling, healthcare, and caregiving routines.",
    supportFocus:
      "Needs multilingual education guidance, childcare, and eldercare resources.",
    goals: [
      "Enroll children in school",
      "Find family doctors and specialists",
      "Locate caregiver respite programs",
    ],
    defaultQuickTaps: [
      "Register children for school",
      "Find family health clinics",
      "Explore caregiver supports",
    ],
  },
  {
    id: "intl_graduate",
    name: "International Graduate",
    icon: "🎓",
    blurb: "Transitioning from studies to a career in Canada.",
    description:
      "You recently completed studies and are planning long-term employment and immigration pathways.",
    supportFocus:
      "Needs PGWP guidance, networking opportunities, and affordable housing leads.",
    goals: [
      "Apply for a post-graduation work permit",
      "Grow professional networks",
      "Stabilize post-grad housing",
    ],
    defaultQuickTaps: [
      "Check PGWP eligibility",
      "Find newcomer job fairs",
      "Plan affordable housing",
    ],
  },
  {
    id: "temp_worker",
    name: "Temporary Worker",
    icon: "🧰",
    blurb: "Balancing work permits with day-to-day stability.",
    description:
      "You hold a temporary work permit and are navigating renewals, housing, and community connections.",
    supportFocus:
      "Needs permit extension support, rights education, and settlement planning.",
    goals: [
      "Understand work permit conditions",
      "Locate affordable short-term housing",
      "Connect with worker advocacy groups",
    ],
    defaultQuickTaps: [
      "Review work permit rights",
      "Find temporary housing supports",
      "Connect with worker centres",
    ],
  },
  {
    id: "visitor_to_study",
    name: "Visitor Transitioning to Study",
    icon: "🧳",
    blurb: "Preparing to switch from visitor status to student life.",
    description:
      "You entered as a visitor and are researching how to begin studies in Canada while remaining compliant.",
    supportFocus:
      "Needs study permit pathways, financial planning, and language testing support.",
    goals: [
      "Understand study permit steps",
      "Budget for tuition and living costs",
      "Book language proficiency testing",
    ],
    defaultQuickTaps: [
      "Start study permit application",
      "Plan for tuition financing",
      "Find language testing centres",
    ],
  },
  {
    id: "francophone",
    name: "Francophone Newcomer",
    icon: "🗣️",
    blurb: "Settling in a bilingual or French-speaking community.",
    description:
      "You prefer French-language services and want to connect with francophone networks across Canada.",
    supportFocus:
      "Needs francophone settlement services, employment resources, and community hubs.",
    goals: [
      "Access francophone settlement agencies",
      "Join French-language employment programs",
      "Connect with cultural community centres",
    ],
    defaultQuickTaps: [
      "Find francophone services",
      "Explore bilingual employment programs",
      "Connect with francophone communities",
    ],
  },
  {
    id: "senior_newcomer",
    name: "Senior Newcomer",
    icon: "🧓",
    blurb: "Building community and accessing health supports.",
    description:
      "You immigrated later in life and are prioritizing healthcare, social inclusion, and financial security.",
    supportFocus:
      "Needs seniors-focused benefits, health navigation, and accessible transportation.",
    goals: [
      "Enroll in provincial health coverage",
      "Find seniors community programs",
      "Plan for accessible transportation",
    ],
    defaultQuickTaps: [
      "Apply for health coverage",
      "Find seniors newcomer groups",
      "Explore transit accessibility options",
    ],
  },
  {
    id: "entrepreneur",
    name: "Entrepreneur",
    icon: "💡",
    blurb: "Launching or scaling a newcomer-led business.",
    description:
      "You are preparing to launch a business and want to understand regulations, financing, and mentorship.",
    supportFocus:
      "Needs business registration steps, financing guidance, and entrepreneurship networks.",
    goals: [
      "Register a business name",
      "Secure newcomer-friendly financing",
      "Connect with mentorship programs",
    ],
    defaultQuickTaps: [
      "Explore business registration",
      "Find newcomer financing",
      "Connect with entrepreneurship hubs",
    ],
  },
];

export function getPersonaById(personaId?: Persona["id"]) {
  return personas.find((persona) => persona.id === personaId);
}
