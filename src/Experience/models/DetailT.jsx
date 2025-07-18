// /*
// Auto-generated by: https://github.com/pmndrs/gltfjsx
// Command: npx gltfjsx@6.5.3 DetailT.glb --transform -d
// Files: DetailT.glb [2.58MB] > C:\Users\andre\Downloads\DetailT-transformed.glb [2.51MB] (3%)
// */

import React, { useEffect, useState } from "react";

import * as THREE from "three";
import { useGLTFWithKTX2 } from "../utils/useGLTFWithKTX2";

import { convertMaterialsToMeshBasicMaterial } from "../utils/convertMaterial";
import { useModalStore } from "../stores/modalStore";

import About from "../../components/About/About";
import Project from "../../components/Project/Project";

export default function Model({ progress = 0, pulseIntensity = 0, ...props }) {
  const { nodes, materials } = useGLTFWithKTX2("/models/DetailT-v1.glb");
  const [hoveredMesh, setHoveredMesh] = useState(null);
  const { openModal } = useModalStore();

  const projectNames = {
    one: "Develop Your Creative Intuition Video",
    two: "Develop a Self-learning Plan Video",
    three: "How to Create a Multiplayer Game Video",
    four: "Create Immersive Worlds Video",
  };

  const handleClick = (elementID) => {
    if (elementID === "about") {
      openModal("About me", <About />, elementID);
    } else {
      openModal(
        projectNames[elementID],
        <Project projectID={elementID} />,
        elementID
      );
    }
  };

  const baseMaterial = materials["MergedBake_Baked.010"].clone();

  const brightHoveredMaterial = materials["MergedBake_Baked.010"].clone();
  brightHoveredMaterial.color = new THREE.Color(2.5, 2.5, 2.5);

  const pulsingMaterial = materials["MergedBake_Baked.010"].clone();

  convertMaterialsToMeshBasicMaterial(materials, 0);

  const getMaterial = (elementID, progressRange) => {
    if (hoveredMesh === elementID) return brightHoveredMaterial;

    const [min, max] = progressRange;
    if (progress >= min && progress <= max) {
      const pulseColor = 1 + pulseIntensity * 1.5;
      pulsingMaterial.color.setRGB(pulseColor, pulseColor, pulseColor);
      return pulsingMaterial;
    }
    return baseMaterial;
  };

  useEffect(() => {
    document.body.style.cursor = hoveredMesh ? "pointer" : "auto";
  }, [hoveredMesh]);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.detail_Baked.geometry}
        material={materials["MergedBake_Baked.010"]}
        position={[-6.46, 69.669, -1.148]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.About_Me_Pictures.geometry}
        material={getMaterial("about", [0.55, 0.65])}
        position={[-8.164, 68.036, 4.408]}
        rotation={[Math.PI / 2, 0, 0]}
        onPointerOver={() => setHoveredMesh("about")}
        onPointerOut={() => setHoveredMesh(null)}
        onClick={() => {
          handleClick("about");
        }}
      />
      <mesh
        geometry={nodes.Project_One.geometry}
        material={getMaterial("one", [0.32, 0.43])}
        position={[-10.528, 69.422, -4.13]}
        rotation={[Math.PI / 2, 0, 0]}
        onPointerOver={() => setHoveredMesh("one")}
        onPointerOut={() => setHoveredMesh(null)}
        onClick={() => {
          handleClick("one");
        }}
      />
      <mesh
        geometry={nodes.Project_Two.geometry}
        material={getMaterial("two", [0.32, 0.43])}
        position={[-9.532, 69.422, -4.13]}
        rotation={[Math.PI / 2, 0, 0]}
        onPointerOver={() => setHoveredMesh("two")}
        onPointerOut={() => setHoveredMesh(null)}
        onClick={() => {
          handleClick("two");
        }}
      />
      <mesh
        geometry={nodes.Project_Three.geometry}
        material={getMaterial("three", [0.32, 0.43])}
        position={[-8.536, 69.422, -4.13]}
        rotation={[Math.PI / 2, 0, 0]}
        onPointerOver={() => setHoveredMesh("three")}
        onPointerOut={() => setHoveredMesh(null)}
        onClick={() => {
          handleClick("three");
        }}
      />
      <mesh
        geometry={nodes.Project_Four.geometry}
        material={getMaterial("four", [0.32, 0.43])}
        position={[-7.541, 69.422, -4.13]}
        rotation={[Math.PI / 2, 0, 0]}
        onPointerOver={() => setHoveredMesh("four")}
        onPointerOut={() => setHoveredMesh(null)}
        onClick={() => {
          handleClick("four");
        }}
      />
      <mesh
        geometry={nodes.about_me_text.geometry}
        material={materials["MergedBake_Baked.010"]}
        position={[-8.524, 68.356, 4.727]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}
