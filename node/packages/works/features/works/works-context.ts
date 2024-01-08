import { createContext } from "react";

import { Send } from "@/utils/elmish";

import { Message, Model } from "./data";

export const WorksContext = createContext<{
  model: Model;
  send: Send<Message>;
} | null>(null);
