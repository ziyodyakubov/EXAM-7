import React, { useState, useEffect } from "react";
import { ModalClose, Typography, Sheet, Modal } from "@mui/joy";
import { TextField, InputLabel, MenuItem, FormControl, Select, Button, Stack } from "@mui/material";

const Index = (props) => {
    const { todos, setTodos, info, open, toggle } = props;
    const [form, setForm] = useState({
        task: "",
        status: ""
    });

    useEffect(() => {
        if (open) {
            setForm({
                task: info.task || "",
                status: info.status || ""
            });
        }
    }, [info, open]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodos = [...todos];

        if (info.status !== undefined && info.index !== undefined) {
            newTodos.forEach((item) => {
                if (item.status === info.status) {
                    item.elements.splice(info.index, 1);
                }
            });
            let targetList = newTodos.find((item) => item.status === form.status);
            if (targetList) {
                targetList.elements.push({ title: form.task });
            } else {
                newTodos.push({ status: form.status, elements: [{ title: form.task }] });
            }
        } else {
            let targetList = newTodos.find((item) => item.status === form.status);
            if (targetList) {
                targetList.elements.push({ title: form.task });
            } else {
                newTodos.push({ status: form.status, elements: [{ title: form.task }] });
            }
        }

        setTodos(newTodos);
        setForm({ task: "", status: "" }); 
        toggle();
    };

    return (
        <React.Fragment>
            <form id="submit" onSubmit={handleSubmit}>
                <Modal
                    aria-labelledby="modal-title"
                    aria-describedby="modal-desc"
                    open={open}
                    onClose={toggle}
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
                                    name="task"
                                    value={form.task}
                                    onChange={handleChange}
                                />
                                <FormControl sx={{ m: 0, minWidth: 105 }}>
                                    <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        label="Status"
                                        name="status"
                                        value={form.status}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={"Open"}>Open</MenuItem>
                                        <MenuItem value={"Pending"}>Pending</MenuItem>
                                        <MenuItem value={"Inprog"}>Inprog</MenuItem>
                                        <MenuItem value={"Completed"}>Complete</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </Typography>
                        <Stack spacing={2} direction="row">
                            <Button type="submit" form="submit" variant="contained" color="success">
                                Submit
                            </Button>
                        </Stack>
                    </Sheet>
                </Modal>
            </form>
        </React.Fragment>
    );
};

export default Index;
