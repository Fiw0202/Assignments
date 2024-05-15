"use client";

import React from "react";
import BaseCard from "../../components/shared/BaseCard";
import { Typography, Grid, Box, Button, } from "@mui/material";
import { mockupItems } from "./mockupItems";


const TodoList = () => {
  return (
    <BaseCard title="Auto Delete Todo List">
      <Grid container spacing={2} direction="row" justifyContent="center">
        <Grid item xs={4} md={4} sx={{ border: "1px solid red" }}>
          <Typography variant="h4" align="left" mb={2}>
            List
          </Typography>
          <Grid container spacing={2} justifyContent="center" mb={2}>
            {mockupItems?.map((m, index) => {
              return (
                <Grid item xs={10} p={0} key={index}>
                  <Box
                    height={60}
                    justifyItems="center"
                    gap={4}
                    p={2}
                    borderRadius={1}
                    sx={{
                      border: "1px solid #e1e1e1",
                      boxShadow: " 0px 10px 15px -3px rgba(0,0,0,0.1)",
                      "&:hover": {
                        cursor: "pointer",
                        backgroundColor: "#e7e7e7",
                      },
                    }}
                    onClick={() => alert(123)}
                  >
                    <Typography variant="h4" align="center" key={index}>
                      {m?.name}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        <Grid item xs={4} md={4} sx={{ border: "1px solid red" }}>
          <Typography variant="h4" align="center">
            Todo
          </Typography>
        </Grid>
        <Grid item xs={4} md={4} sx={{ border: "1px solid red" }}>
          <Typography variant="h4" align="center">
            Todo
          </Typography>
        </Grid>
      </Grid>
    </BaseCard>
  );
};

export default TodoList;
function styled(Paper: any) {
  throw new Error("Function not implemented.");
}
