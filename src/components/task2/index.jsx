import React, { useState } from "react";
import {CardOverflow,CardContent,Divider,Typography,Button,Card} from "@mui/joy";
import Modal from "@modal"

export default function Task2() {
  let status = ["Open", "Pending", "Inprog", "Complete"];
  const [modal, setModal] = useState(false);
  const [info,setInfo] = useState([])

  const handleClick = () => {
    info?.map((item)=>{
      if(item.status === "Open"){
         console.log("open")
      }else if(item.status === "Pending"){
        console.log("pending")
      }else if(item.status === "Inprog"){
        console.log("Inprog")
      }else if(item.status === "Complete"){
        console.log("Complete")
      }
    })
    setModal(true);
  };

  return (
    <div className="mt-[25px] flex gap-x-[30px]">
      <Modal open={modal} info={info} setInfo={setInfo}  toggle={()=>setModal(false)} function={handleClick}/>
      {
      status.map((item) => (
        <Card variant="outlined" sx={{ width: 265,maxHeight: 400 }}>
          <CardContent>
            <Typography level="title-lg">{item}</Typography>
          </CardContent>
          {
            info?.map((item,index)=>(
              <div className="bg-[#9999991c] cursor-pointer p-[5px] rounded-[5px] flex justify-between items-center" key={index}>
                  <h1>{item.title}</h1>

                  <h1>{item.status}</h1>
              </div>
        ))
      }
          <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
            
            <Divider inset="context" />
            <CardContent orientation="horizontal">
              <Button onClick={handleClick} variant="solid">
                ADD
              </Button>
            </CardContent>
          </CardOverflow>
        </Card>
      ))}

    </div>
  );
}
