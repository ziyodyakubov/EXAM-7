import React, { useState } from "react";
import {
  CardOverflow,
  CardContent,
  Divider,
  Typography,
  Button,
  Card,
} from "@mui/joy";
import Modal from "@modal"; 

export default function Task2() {
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState({});
  const [todos, setTodos] = useState([
    { status: "Open", elements: [] },
    { status: "Pending", elements: [] },
    { status: "Inprog", elements: [] },
    { status: "Completed", elements: [] },
  ]);

  const handleClick = () => {
    setInfo({});
    setModal(true);
  };

  const editCard = (status, index) => {
    setInfo({ status, index });
    setModal(true);
  };

  const deleteCard = (status, index) => {
    const updatedTodos = todos.map((item) => {
      if (item.status === status) {
        const updatedElements = [...item.elements];
        updatedElements.splice(index, 1);
        return { ...item, elements: updatedElements };
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="mt-[25px] flex gap-x-[20px] flex-wrap">
      <Modal
        open={modal}
        info={info}
        todos={todos}
        setTodos={setTodos}
        toggle={() => setModal(false)}
      />
      {todos.map((item, index) => (
        <Card key={index} variant="outlined" sx={{ width: 260, marginBottom: 2 }}>
          <CardContent>
            <Typography level="h5" fontWeight="bold">
              {item.status}
            </Typography>
          </CardContent>
          {item.elements.map((el, i) => (
            <div
              key={i}
              className="bg-[#9999991c] cursor-pointer p-[5px] rounded-[5px] flex justify-between items-center mb-[5px]"
            >
              <h1>{el.title}</h1>
              <div className="buttons-wrapper flex items-center gap-[10px]">
                <box-icon
                  onClick={() => deleteCard(item.status, i)}
                  type="solid"
                  name="trash"
                ></box-icon>
                <box-icon
                  onClick={() => editCard(item.status, i)}
                  name="edit-alt"
                ></box-icon>
              </div>
            </div>
          ))}
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
