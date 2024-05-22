"use client";

import React, { useState } from "react";
import BaseCard from "../../components/shared/BaseCard";
import { Typography, Grid, Box } from "@mui/material";
import { mockupItems } from "./mockupItems";

interface ISelectedItem {
  type: string;
  name: string;
  group?: number;
}

interface IParamsFilter {
  group?: number;
  type?: string;
}

const TodoList = () => {
  const newList = mockupItems.map((m) => ({ ...m, group: 1 }));

  const [listPlantData, setListPlantData] = useState<ISelectedItem[]>(newList);
  // const [selectedItems, setSelectedItems] = useState<ISelectedItem[]>([]);

  const filteredData = ({ group, type }: IParamsFilter) => {
    const data = listPlantData?.filter(
      (f, index, arr) =>
        f.group === group &&
        (type === undefined || f?.type === type) &&
        index ===
          arr.findIndex(
            (fi) =>
              fi.type === f.type && fi.name === f.name && fi.group === f.group
          )
    );
    return data;
  };

  const handleSelectItem = (item: ISelectedItem) => {
    if (item.type === "Fruit") {
      item.group = 2;
    } else {
      item.group = 3;
    }
    setListPlantData((prevItems) => [...prevItems, item]);
    // setSelectedItems((prevItems) => [...prevItems, item]);

    setTimeout(() => {
      handleDeselect(item);
    }, 5000);
  };

  const handleDeselect = (item: ISelectedItem) => {
    // console.log("item Selected", item);
    const updatedItem = { ...item, group: 1 };
    // console.log("New item", updatedItem);
    item.group = 1;
    // console.log("item Plant", listPlantData);
    setListPlantData((prevItems) =>
      prevItems.map((m) =>
        m.name === updatedItem.name && m.group === item.group ? updatedItem : m
      )
    );
    // setSelectedItems((prevItems) =>
    //   prevItems.filter((prevItem) => prevItem.name !== item.name)
    // );
  };

  return (
    <BaseCard title="Auto Delete Todo List">
      <Grid container spacing={2} direction="row">
        {/*Items For Select*/}
        <Grid item xs={4} md={4} sx={{ border: "1px solid #e7e7e7" }}>
          <Typography variant="h4" align="left" mb={3} p={2}>
            List
          </Typography>
          <Grid container spacing={2} justifyContent="center" mb={2}>
            {filteredData({ group: 1 })?.map((m, index) => {
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
                    onClick={(e) => handleSelectItem(m)}
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

        {/*Fruit Type*/}
        <Grid item xs={4} md={4} sx={{ border: "1px solid #e7e7e7" }}>
          <Typography
            variant="h4"
            align="left"
            mb={3}
            mr={2}
            padding={2}
            borderRadius={2}
            sx={{ backgroundColor: "#e7e7e7" }}
          >
            Fruit
          </Typography>
          <Grid container spacing={2} justifyContent="center" mb={2}>
            {filteredData({ group: 2, type: "Fruit" })?.map((m, index) => {
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
                    onClick={(e) => handleDeselect(m)}
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

        {/*Vegetable Type*/}
        <Grid item xs={4} md={4} sx={{ border: "1px solid #e7e7e7" }}>
          <Typography
            variant="h4"
            align="left"
            mb={3}
            mr={2}
            padding={2}
            borderRadius={2}
            sx={{ backgroundColor: "#e7e7e7" }}
          >
            Vegetable
          </Typography>
          <Grid container spacing={2} justifyContent="center" mb={2}>
            {filteredData({ group: 3, type: "Vegetable" })?.map((m, index) => {
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
                    onClick={(e) => handleDeselect(m)}
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
      </Grid>
    </BaseCard>
  );
};

export default TodoList;
