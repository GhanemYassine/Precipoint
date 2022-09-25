import { 
    Container,
    Grid,
} from "@mui/material"
import axios from "axios";
import React from "react";
import { SlideCard } from "./SlideCard";
import { SlideModal } from "./SlideModal";



export const SlidesList = () => {
    const [thumbnails,setThumbnails] = React.useState<{imgPath:string,label:string}[]>([]);
    const [isModalOpen,setIsModalOpen] = React.useState(false)
    const [curImgSlidePath,setCurrImgSlidePath] = React.useState("")
    const [curImgSlideLabel,setCurrImgSlideLabel] = React.useState("")

    React.useEffect(()=>{
        const fetchList= async()=> {
          const {data:list} = await axios.get<{data:{id:string,slideId:string}[]}>("https://imgmgt.api.preci.cloud/api/SlideImages")
          console.log(list,"aaaaa")
           const result = await Promise.all(list.data.map((async({id,slideId} : {id:string,slideId:string})=>{
            return {imgPath :`https://wsi001.api.preci.cloud/api/WholeSlideImages/${id}/Thumbnails/512x512.jpeg`,label : slideId}
          })))
          setThumbnails(result);
        } 
        fetchList();
       },[])
      
    
    return (
        <Container >
            <div className="guide">
                <h3>Click Esc to exit viewing the image</h3> <br />
                <h3>Click left to rotate the image</h3> <br />
                <h3>Click right to map the image</h3> <br />
            </div>
            <Grid container spacing={3} >
                
                {thumbnails.map((thumb : {imgPath:string,label:string},index : number) => 
                    <Grid item key={index} >
                        <SlideCard imgPath = {thumb.imgPath} label={thumb.label} setCurrImgSlidePath={setCurrImgSlidePath} setCurrImgSlideLabel={setCurrImgSlideLabel} setIsModalOpen={setIsModalOpen}  />
                    </Grid>
                )}
                <SlideModal imgPath={curImgSlidePath} isModalOpen={isModalOpen} label={curImgSlideLabel} setIsModalOpen={setIsModalOpen}/>
            </Grid>
            
        </Container>
    )
}