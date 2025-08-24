// @ts-nocheck
import * as THREE from "three"
import { extend, useFrame } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"
import vertex from "./glsl/shader.vert"
import fragment from "./glsl/shader.frag"
import { forwardRef, useImperativeHandle, useRef, useEffect } from "react"

const ShaderImpl = shaderMaterial(
  {
    color: new THREE.Color(0.78, 0.75, 0.66),
  },
  vertex,
  fragment,
)

extend({ ShaderImpl })

interface ShaderProps {
  children?: React.ReactNode;
  color?: string | number | THREE.Color;
  [key: string]: any;
}

const Shader = forwardRef<THREE.ShaderMaterial, ShaderProps>(({ children, ...props }, ref) => {
  const localRef = useRef<THREE.ShaderMaterial>(null)

  useImperativeHandle(ref, () => localRef.current!)
  
  return <shaderImpl ref={localRef} glsl={THREE.GLSL3} {...props} attach="material" />
})


Shader.displayName = "Shader"

export default Shader
