import { 
    Card,
    CardHeader,
    CardMedia,
} from "@mui/material"

import {isMobile} from 'react-device-detect';


interface SlideCardProps {
    imgPath:string
    label : string
    setCurrImgSlideLabel : (x : string) => void
    setCurrImgSlidePath : (x : string) => void
    setIsModalOpen : (x : boolean) => void
}
export const SlideCard = ({imgPath,label,setCurrImgSlideLabel,setCurrImgSlidePath,setIsModalOpen } : SlideCardProps) => {

    return (
        <Card 
            sx={{ minWidth: isMobile ? 325 : 345 , maxWidth: isMobile ? 325 : 345 }} 
            style={{cursor:"pointer"}}
            
        >
            <div onClick={()=>{
               setCurrImgSlideLabel(label)
               setCurrImgSlidePath(imgPath)
               setIsModalOpen(true)
            }}>
            <CardHeader
                title={label}
            />
            <CardMedia
                component="img"
                height="194"
                image={imgPath}
                alt="Paella dish"
            />
            </div>
        </Card>
    )
}