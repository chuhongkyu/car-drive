import useDebugStore from "@/utils/debugStore";
import { Debug } from "@react-three/cannon";

export default function DebugWrapper({ children }) {
  const debugMode = useDebugStore(state => state.debug);
  return <>{debugMode ? <Debug scale={1.01} color={0xeb0000}>{children}</Debug> : <>{children}</>}</>
}