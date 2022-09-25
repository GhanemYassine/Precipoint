import React from "react"
import {  Fade, Modal } from "@mui/material"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Plane, useHelper, useTexture} from "@react-three/drei";
import {
  BufferAttribute,
  Mesh,
  PointLightHelper,
  PointLight
} from "three";

function Terrain({imgPath} : {imgPath:string}) {
    const terrainTextures = useTexture({
      map: imgPath,
      
    });
  
    const mesh = React.useRef<Mesh>(null!);
    React.useEffect(() => {
      mesh.current.geometry.setAttribute(
        "uv2",
        new BufferAttribute(mesh.current.geometry.attributes.uv.array, 2)
      );
    });
  
    return (
      <Plane args={[10, 10, 128, 128]} rotation-x={-Math.PI / 2} ref={mesh}>
        <meshStandardMaterial
          {...terrainTextures}
         
        />
      </Plane>
    );
  }
const ThreeDthumb = ({imgPath,label} : {imgPath: string , label : string}) => {
    const lightRef = React.useRef<PointLight>(null!);
    useHelper(lightRef, PointLightHelper, 1, "red");
    return (
      <>
        <ambientLight />
        <pointLight intensity={0} />
        <OrbitControls/>
        <Terrain imgPath={imgPath}/>
      </>
    )
  }

interface SlideModalProps {
    imgPath : string
    label : string
    isModalOpen: boolean
    setIsModalOpen: (x:boolean) => void
}

export const SlideModal = ({imgPath,label,isModalOpen,setIsModalOpen}:SlideModalProps) => {
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isModalOpen}
            onClose={()=>setIsModalOpen(false)}
            closeAfterTransition
            BackdropProps={{
            timeout: 500,
            }}
        >       
              
          <Canvas  camera={{ position: [0, 10, 5] }}>
            <ThreeDthumb imgPath={imgPath} label ={label} />
          </Canvas>
        </Modal>
    )
}