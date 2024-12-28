import { Triplet } from "@react-three/cannon";
import { Texture } from "three";

export interface IPointProps {
    floorTexture?: {
        roughnessMap?: Texture;
        map?: Texture;
        normalMap?: Texture;
    };
    mySize?: number[]
    wallTexture?: {
        roughnessMap?: Texture;
        map?: Texture;
        normalMap?: Texture;
    }
    position: Triplet;
}