import { debugAtom } from "@/utils/atom";
import { Debug } from "@react-three/cannon";
import { useRecoilValue } from "recoil";

export default function DebugWrapper({ children }) {
  const debugMode = useRecoilValue(debugAtom);
  return <>{debugMode ? <Debug color={0x000000}>{children}</Debug> : <>{children}</>}</>
}