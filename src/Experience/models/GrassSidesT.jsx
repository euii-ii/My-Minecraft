/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 GrassSidesT.glb --transform -d 
Files: GrassSidesT.glb [5.67MB] > C:\Users\andre\My Stuff\Blender Projects\Minecraft Portfolio\Objects\For Use\GrassSidesT-transformed.glb [5.43MB] (4%)
*/

import React from "react";

import { useGLTFWithKTX2 } from "../utils/useGLTFWithKTX2";
import { convertMaterialsToMeshBasicMaterial } from "../utils/convertMaterial";

export default function Model(props) {
  const { nodes, materials } = useGLTFWithKTX2(
    "/models/GrassSidesT-transformed.glb"
  );
  convertMaterialsToMeshBasicMaterial(materials);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.grass_side_back_Baked.geometry}
        material={materials["MergedBake_Baked.008"]}
        position={[-8.02, 70.438, -24.962]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.grass_side_front_Baked.geometry}
        material={materials["MergedBake_Baked.009"]}
        position={[-8.02, 70.438, -24.962]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}
