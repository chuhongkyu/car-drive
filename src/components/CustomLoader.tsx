import { Html, useProgress } from "@react-three/drei"

export default function CustomLoader() {
  const { active, progress, errors, item, loaded, total } = useProgress()

  return <Html center className="loader-container"><div className="loader-text">{Math.round(progress)}%</div></Html>
}