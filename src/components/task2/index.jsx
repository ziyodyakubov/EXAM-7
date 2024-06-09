import React, { useState } from "react";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";

export default function Task2() {
  let status = ["Open", "Pending", "Inprog", "Complete"];
  const [modal, setModal] = useState(true);

  const handleClick = () => {
    setModal(true);
  };

  return (
    <div className="mt-[25px] flex gap-x-[30px]">
      {status.map((item) => (
        <Card variant="outlined" sx={{ width: 250, height: 150 }}>
          <CardContent>
            <Typography level="title-lg">{item}</Typography>
            <Typography level="body-sm">Choose status</Typography>
          </CardContent>
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
