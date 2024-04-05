import useDebugStore from "@/utils/debugStore";
import { Debug } from "@react-three/cannon";

export default function DebugWrapper({ children }) {
  const debugMode = useDebugStore(state => state.debug);
  return <>{debugMode ? <Debug color={0x000000}>{children}</Debug> : <>{children}</>}</>
}