"use client";

import type { Persona } from "@/lib/personas";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react";

export type OnboardingState = {
  personaId?: Persona["id"];
  province: string;
  city: string;
  needs: string[];
  arrivalStage?: string;
};

type OnboardingAction =
  | { type: "setPersona"; personaId: Persona["id"] }
  | { type: "updateProvince"; province: string }
  | { type: "updateCity"; city: string }
  | { type: "toggleNeed"; need: string }
  | { type: "updateArrivalStage"; arrivalStage: string }
  | { type: "reset" };

const INITIAL_STATE: OnboardingState = {
  personaId: undefined,
  province: "",
  city: "",
  needs: [],
  arrivalStage: undefined,
};

const STORAGE_KEY = "maplepath:onboarding";

const OnboardingStateContext = createContext<OnboardingState | undefined>(
  undefined,
);
const OnboardingDispatchContext = createContext<
  Dispatch<OnboardingAction> | undefined
>(undefined);

function onboardingReducer(
  state: OnboardingState,
  action: OnboardingAction,
): OnboardingState {
  switch (action.type) {
    case "setPersona":
      return {
        ...state,
        personaId: action.personaId,
      };
    case "updateProvince":
      return {
        ...state,
        province: action.province,
      };
    case "updateCity":
      return {
        ...state,
        city: action.city,
      };
    case "toggleNeed": {
      const needs = state.needs.includes(action.need)
        ? state.needs.filter((need) => need !== action.need)
        : [...state.needs, action.need];

      return {
        ...state,
        needs,
      };
    }
    case "updateArrivalStage":
      return {
        ...state,
        arrivalStage: action.arrivalStage,
      };
    case "reset":
      return INITIAL_STATE;
    default: {
      const exhaustiveCheck: never = action;
      return exhaustiveCheck;
    }
  }
}

function getInitialState(): OnboardingState {
  if (typeof window === "undefined") {
    return INITIAL_STATE;
  }

  try {
    const storedValue = window.sessionStorage.getItem(STORAGE_KEY);
    if (!storedValue) {
      return INITIAL_STATE;
    }

    const parsed = JSON.parse(storedValue) as Partial<OnboardingState>;
    return {
      ...INITIAL_STATE,
      ...parsed,
      needs: Array.isArray(parsed.needs) ? parsed.needs : INITIAL_STATE.needs,
    };
  } catch (error) {
    return INITIAL_STATE;
  }
}

export function OnboardingProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(
    onboardingReducer,
    INITIAL_STATE,
    getInitialState,
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const memoizedState = useMemo(() => state, [state]);

  return (
    <OnboardingStateContext.Provider value={memoizedState}>
      <OnboardingDispatchContext.Provider value={dispatch}>
        {children}
      </OnboardingDispatchContext.Provider>
    </OnboardingStateContext.Provider>
  );
}

export function useOnboardingState() {
  const context = useContext(OnboardingStateContext);

  if (context === undefined) {
    throw new Error("useOnboardingState must be used within OnboardingProvider");
  }

  return context;
}

export function useOnboardingDispatch() {
  const context = useContext(OnboardingDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useOnboardingDispatch must be used within OnboardingProvider",
    );
  }

  return context;
}

export function useOnboarding() {
  return {
    state: useOnboardingState(),
    dispatch: useOnboardingDispatch(),
  };
}
