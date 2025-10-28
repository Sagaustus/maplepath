"use client";

import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react";

export type OnboardingState = {
  personaId?: string;
  province: string;
  city: string;
  needs: string[];
  arrivalStage?: string;
};

type OnboardingAction =
  | { type: "setPersona"; personaId: string }
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

export function OnboardingProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(onboardingReducer, INITIAL_STATE);

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
