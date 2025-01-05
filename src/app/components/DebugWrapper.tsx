import useDebugStore from "@/app/utils/debugStore";
import { Debug } from "@react-three/cannon";
import { ReactNode } from "react";

export default function DebugWrapper({ children }:{ children: ReactNode }) {
  const debugMode = useDebugStore(state => state.debug);
  return <>{debugMode ? <Debug scale={1.01} color={0xeb0000}>{children}</Debug> : <>{children}</>}</>
}