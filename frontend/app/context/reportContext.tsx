"use client";
import React, {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  useEffect,
} from "react";
import Industry from "../comp/industryser/Industryser";

interface ReportProviderProps {
  children: ReactNode;
}

type State = {
  title: any;
  linki: any;
  linkp: any;
  industry: any;
  subind: any;
  createdAt: any;
  desc: any;
  cpage: any;
  linkt: any;
  linkf: any;
  study?: any;
  forcast?: any;
  base?: any;
  dataSuite?: any;
  insightReport?: any;
};

const INITIAL_STATE: State = {
  title:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-rep-title") || null
      : null,
  cpage:
    typeof window !== "undefined"
      ? localStorage.getItem("reportpage") || null
      : null,
  linki:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-rep-linki") || null
      : null,
  linkp:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-rep-linkp") || null
      : null,
  industry:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-rep-industry") || null
      : null,
  subind:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-rep-subind") || null
      : null,
  desc:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-rep-desc") || null
      : null,
  createdAt:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-rep-createdAt") || null
      : null,
  linkf:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-rep-linkf") || null
      : null,
  linkt:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-rep-linkt") || null
      : null,
  study:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-rep-study") || null
      : null,
  base:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-rep-base") || null
      : null,
  forcast:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-rep-forcast") || null
      : null,
  dataSuite:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-rep-dataSuite") || null
      : null,
  insightReport:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-rep-insightReport") || null
      : null,
};

export type ReportContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

type Action =
  | { type: "SET_CURRENT"; payload: any }
  | { type: "SET_CURR_PAGE"; payload: any };

export const ReportContext = createContext<ReportContextType | null>(null);

const Reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_CURRENT":
      return {
        title: action.payload.title,
        desc: action.payload.desc,
        linki: action.payload.linki,
        linkp: action.payload.linkp,
        linkf: action.payload.linkf,
        linkt: action.payload.linkt,
        industry: action.payload.industry,
        subind: action.payload.subind,
        createdAt: action.payload.createdAt,
        cpage: 0,
        study: action.payload.study,
        base: action.payload.base,
        forcast: action.payload.forcast,
        dataSuite: action.payload.dataSuite,
        insightReport: action.payload.insightReport,
      };
    case "SET_CURR_PAGE":
      return {
        title: action.payload.title,
        desc: action.payload.desc,
        linki: action.payload.linki,
        linkp: action.payload.linkp,
        industry: action.payload.industry,
        subind: action.payload.subind,
        createdAt: action.payload.createdat,
        cpage: action.payload.page,
        linkt: action.payload.linkt,
        linkf: action.payload.linkf,
        study: action.payload.study,
        base: action.payload.base,
        forcast: action.payload.forcast,
        dataSuite: action.payload.dataSuite,
        insightReport: action.payload.insightReport,
      };
    default:
      return state;
  }
};

export const ReportContextProvider: React.FC<ReportProviderProps> = ({
  children,
}) => {
  const initialState: State = {
    title: "",
    desc: "",
    linki: "",
    linkp: "",
    industry: "",
    subind: "",
    createdAt: "",
    cpage: 0,
    linkf: "",
    linkt: "",
    study: "",
    base: "",
    forcast: "",
    dataSuite: "",
    insightReport: "",
  };

  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  useEffect(() => {
    // console.log("state ",state);
    localStorage.setItem("marq-rep-title", state.title);
    localStorage.setItem("marq-rep-desc", state.desc);
    localStorage.setItem("marq-rep-industry", state.industry);
    localStorage.setItem("marq-rep-subind", state.subind);
    localStorage.setItem("marq-rep-linki", state.linki);
    localStorage.setItem("marq-rep-linkp", state.linkp);
    localStorage.setItem("marq-rep-createdAt", state.createdAt);
    localStorage.setItem("reportpage", state.cpage);
    localStorage.setItem("marq-rep-linkt", state.linkt);
    localStorage.setItem("marq-rep-linkf", state.linkf);
    localStorage.setItem("marq-rep-study", state.study);
    localStorage.setItem("marq-rep-base", state.base);
    localStorage.setItem("marq-rep-forcast", state.forcast);
    localStorage.setItem("marq-rep-forcast", state.dataSuite);
    localStorage.setItem("marq-rep-forcast", state.insightReport);
  }, [state]);

  // Here, we're casting the value to UserContextType because we're certain it matches the shape
  const value = { state, dispatch } as ReportContextType;

  return (
    <ReportContext.Provider value={value}>{children}</ReportContext.Provider>
  );
};
