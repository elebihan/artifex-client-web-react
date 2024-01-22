/*
 * SPDX-FileCopyrightText: 2024 Eric Le Bihan
 *
 * SPDX-License-Identifier: MIT
 */

import React, { createContext, useContext, useReducer } from "react";
import { ArtifexClient, createClient } from "services";

type AppState = { url: string; client: ArtifexClient };

const DEFAULT_SERVER_PORT = 50051;

const defaultServerUrl = (): string => {
  const url = new URL(window.location.href);
  return `${url.protocol}//${url.hostname}:${DEFAULT_SERVER_PORT}`;
};

const DEFAULT_SERVER_URL = defaultServerUrl();

const initialAppState = {
  url: DEFAULT_SERVER_URL,
  client: createClient(DEFAULT_SERVER_URL),
};

type AppStateAction = { type: "SET_SERVER_URL"; payload: string };

export const stateReducer = (
  state: AppState,
  action: AppStateAction,
): AppState => {
  switch (action.type) {
    case "SET_SERVER_URL":
      return {
        url: action.payload,
        client: createClient(action.payload),
      };
    default:
      return state;
  }
};

const AppStateContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppStateAction>;
}>({ state: initialAppState, dispatch: () => null });

const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(stateReducer, initialAppState);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

const useAppState = () => {
  return useContext(AppStateContext);
};

export { AppStateContext, AppStateProvider, useAppState };
