import OnboardingForm from "@/components/onboarding/OnboardingForm";

export const metadata = {
  title: "Maplepath | Onboarding",
};

export default function OnboardingPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-6 py-12">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-amber-200">
          Tell us about your journey
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          Share a few details so Maplepath can surface relevant services, programs, and content tailored to your newcomer
          experience.
        </p>
      </header>
      <OnboardingForm />
    </div>
  );
}
