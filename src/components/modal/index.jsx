import React, { useState } from "react";
import { ModalClose, Typography, Sheet, Modal } from "@mui/joy";
import { TextField, InputLabel, MenuItem, FormControl, Select, Button, Stack } from "@mui/material";


const index = (props) => {

    const [status, setStatus] = React.useState('');
    const [title,setTitle] = React.useState('')

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    const handleChange2 = (event) => {
        setTitle(event.target.value)
    }

    const handleClick = (info) =>{
        props.info.push(info)
        setStatus('')
        setTitle('')
        props.toggle()
    }


    return (
        <React.Fragment>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={props.open}
                onClose={props.toggle}
                sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        height: 330,
                        maxWidth: 900,
                        borderRadius: "md",
                        p: 3,
                        boxShadow: "lg",
                    }}
                >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={0}
                    >
                        Choose status
                    </Typography> 
                    <Typography
                        id="modal-desc"
                        height={170}
                        width={400}
                        textColor="text.tertiary"
                    >
                        <div className="flex flex-col gap-[15px] mt-[35px]">
                            <TextField
                                id="outlined-basic"
                                label="Title"
                                variant="outlined"
                                value={title}
                                onChange={handleChange2}
                            />
                            <FormControl sx={{ m: 0, minWidth: 105 }}>
                                <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={status}
                                    label="Status"
                                    onChange={handleChange}
                                >

                                    <MenuItem value={"Open"}>Open</MenuItem>
                                    <MenuItem value={"Pending"}>Pending</MenuItem>
                                    <MenuItem value={"Inprog"}>Inprog</MenuItem>
                                    <MenuItem value={"Complete"}>Complete</MenuItem>
                                </Select>
                            </FormControl>

                        </div>
                    </Typography>
                    <Stack spacing={2} direction="row">
                        <Button type="submit" variant="contained" onClick={()=>handleClick({status,title})} color="success">
                            Submit
                        </Button>
                    </Stack>

                </Sheet>

            </Modal>

        </React.Fragment>
    );
};

export default index;
