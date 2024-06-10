import React, { useState } from "react";
import {CardOverflow,CardContent,Divider,Typography,Button,Card} from "@mui/joy";
import Modal from "@modal"

export default function Task2() {
  const [modal, setModal] = useState(false);
  const [info,setInfo] = useState([])

  const handleClick = (type) => {
    setModal(true);

    if(type === "Pending"){
        
    }else if(type === "Inprog"){

    }
  };

  const editCard = (item) =>{
    setModal(true)
    setInfo(item)
  }

  const deleteCard = (id) =>{
    let new_users = info.filter(item=> item.id !== id)
    setInfo([...new_users])
  }

  return (
    <div className="mt-[25px] flex gap-x-[30px]">
      <Modal open={modal} info={info} setInfo={setInfo}  toggle={()=>setModal(false)} function={handleClick}/>
        <div className="flex gap-[20px] justify-between">
          <Card variant="outlined" sx={{ width: 260,maxHeight: 200 }}>
          <CardContent>
            <Typography level="title-lg">Open</Typography>
          </CardContent>
          {
            info?.map((item,index)=>(
              <div className="bg-[#9999991c] cursor-pointer p-[5px] rounded-[5px] flex justify-between items-center" key={index}>
                  <h1>{item.title}</h1>

                  <div className="buttons-wrapper flex items-center gap-[10px]">
                    <box-icon onClick={()=>deleteCard(item.id)} type='solid' name='trash'></box-icon>
                    <box-icon onClick={()=>editCard(item)} name='edit-alt' ></box-icon>
                  </div>
              </div>
        ))
      }
          <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
            
            <Divider inset="context" />
            <CardContent orientation="horizontal">
              <Button onClick={()=>handleClick("Open")} variant="solid">
                ADD
              </Button>
            </CardContent>
          </CardOverflow>
        </Card>

                <Card variant="outlined" sx={{ width: 260,maxHeight: 200 }}>
          <CardContent>
            <Typography level="title-lg">Pending</Typography>
          </CardContent>
          {
            info?.map((item,index)=>(
              <div className="bg-[#9999991c] cursor-pointer p-[5px] rounded-[5px] flex justify-between items-center" key={index}>
                  <h1>{item.title}</h1>

                  <div className="buttons-wrapper flex items-center gap-[10px]">
                    <box-icon onClick={()=>deleteCard(item.id)} type='solid' name='trash'></box-icon>
                    <box-icon onClick={()=>editCard(item)} name='edit-alt' ></box-icon>
                  </div>
              </div>
        ))
      }
          <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
            
            <Divider inset="context" />
            <CardContent orientation="horizontal">
              <Button onClick={()=>handleClick("Pending")} variant="solid">
                ADD
              </Button>
            </CardContent>
          </CardOverflow>
        </Card>

                <Card variant="outlined" sx={{ width: 260,maxHeight: 200 }}>
          <CardContent>
            <Typography level="title-lg">Inprog</Typography>
          </CardContent>
          {
            info?.map((item,index)=>(
              <div className="bg-[#9999991c] cursor-pointer p-[5px] rounded-[5px] flex justify-between items-center" key={index}>
                  <h1>{item.title}</h1>

                  <div className="buttons-wrapper flex items-center gap-[10px]">
                    <box-icon onClick={()=>deleteCard(item.id)} type='solid' name='trash'></box-icon>
                    <box-icon onClick={()=>editCard(item)} name='edit-alt' ></box-icon>
                  </div>
              </div>
        ))
      }
          <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
            
            <Divider inset="context" />
            <CardContent orientation="horizontal">
              <Button onClick={()=>handleClick("Inprog")} variant="solid">
                ADD
              </Button>
            </CardContent>
          </CardOverflow>
        </Card>

                <Card variant="outlined" sx={{ width: 260,maxHeight: 200 }}>
          <CardContent>
            <Typography level="title-lg">Complete</Typography>
          </CardContent>
          {
            info?.map((item,index)=>(
              <div className="bg-[#9999991c] cursor-pointer p-[5px] rounded-[5px] flex justify-between items-center" key={index}>
                  <h1>{item.title}</h1>

                  <div className="buttons-wrapper flex items-center gap-[10px]">
                    <box-icon onClick={()=>deleteCard(item.id)} type='solid' name='trash'></box-icon>
                    <box-icon onClick={()=>editCard(item)} name='edit-alt' ></box-icon>
                  </div>
              </div>
        ))
      }
          <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
            
            <Divider inset="context" />
            <CardContent orientation="horizontal">
              <Button onClick={()=>handleClick("Complete")} variant="solid">
                ADD
              </Button>
            </CardContent>
          </CardOverflow>
        </Card>
        </div>

    </div>
  );
}
