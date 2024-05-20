"use client";

import { IResp } from "@/app/api/interfaces";
import { GET } from "@/app/api/route";
import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { IRespData } from "./interface";

const getData = async () => {
  //#region Variable For sort age
  let age1: number[] = [];
  const ageSupport = age1;

  let age2: number[] = [];
  const ageAccounting = age2;

  let age3: number[] = [];
  const ageEngineering = age3;

  let age4: number[] = [];
  const ageHumanResources = age4;

  let age5: number[] = [];
  const ageLegal = age5;

  let age6: number[] = [];
  const ageMarketing = age6;

  let age7: number[] = [];
  const ageProductManagement = age7;

  let age8: number[] = [];
  const ageResearchandDevelopment = age8;

  let age9: number[] = [];
  const ageSales = age9;

  let age10: number[] = [];
  const ageServices = age10;

  let age11: number[] = [];
  const ageBusinessDevelopment = age11;
  //#endregion

  try {
    const resp = await GET();

    const groupByDepartment = (resp: IResp) => {
      const result: IRespData = resp.users.reduce((acc, value) => {
        if (!acc[value.company.department]) {
          //===> ถ้ายังไม่มีอะไรเลยยยยยยยย

          //สร้างโครงสร้างข้อมูล
          acc[value.company.department] = {
            male: 0,
            female: 0,
            ageRange: "",
            hair: { Black: 0, Blond: 0, Chestnut: 0, Brown: 0 },
            addressUser: {},
          };
        }

        //หาจำนวนคนในแผนกโดยแยก male/female
        //#region กรองตามเพศ
        if (value.gender === "male") {
          acc[value.company.department].male++;
        } else {
          acc[value.company.department].female++;
        }
        //#endregion

        //หาจำนวนคนในแผนกโดยแยกตามสีผม
        //#region กรองตามสีผม
        if (value.hair?.color === "Black") {
          acc[value.company.department].hair.Black++;
        } else if (value.hair?.color === "Blond") {
          acc[value.company.department].hair.Blond++;
        } else if (value.hair?.color === "Chestnut") {
          acc[value.company.department].hair.Chestnut++;
        } else {
          acc[value.company.department].hair.Brown++;
        }
        //#endregion

        //กรองตามอายุน้อยไปมาก
        //#region กรองน้อยไปมาก
        if (value.company.department === "Accounting") {
          age2.push(value.age);
          acc[value.company.department].ageRange = `${
            ageAccounting.sort((a, b) => a - b)[0]
          } - ${ageAccounting.sort((a, b) => a - b).slice(-1)}`;
        } else if (value.company.department === "Business Development") {
          age11.push(value.age);
          acc[value.company.department].ageRange = `${
            ageBusinessDevelopment.sort((a, b) => a - b)[0]
          } - ${ageBusinessDevelopment.sort((a, b) => a - b).slice(-1)}`;
        } else if (value.company.department === "Engineering") {
          age3.push(value.age);
          acc[value.company.department].ageRange = `${
            ageEngineering.sort((a, b) => a - b)[0]
          } - ${ageEngineering.sort((a, b) => a - b).slice(-1)}`;
        } else if (value.company.department === "Human Resources") {
          age4.push(value.age);
          acc[value.company.department].ageRange = `${
            ageHumanResources.sort((a, b) => a - b)[0]
          } - ${ageHumanResources.sort((a, b) => a - b).slice(-1)}`;
        } else if (value.company.department === "Legal") {
          age5.push(value.age);
          acc[value.company.department].ageRange = `${
            ageLegal.sort((a, b) => a - b)[0]
          } - ${ageLegal.sort((a, b) => a - b).slice(-1)}`;
        } else if (value.company.department === "Marketing") {
          age6.push(value.age);
          acc[value.company.department].ageRange = `${
            ageMarketing.sort((a, b) => a - b)[0]
          } - ${ageMarketing.sort((a, b) => a - b).slice(-1)}`;
        } else if (value.company.department === "Product Management") {
          age7.push(value.age);
          acc[value.company.department].ageRange = `${
            ageProductManagement.sort((a, b) => a - b)[0]
          } - ${ageProductManagement.sort((a, b) => a - b).slice(-1)}`;
        } else if (value.company.department === "Research and Development") {
          age8.push(value.age);
          acc[value.company.department].ageRange = `${
            ageResearchandDevelopment.sort((a, b) => a - b)[0]
          } - ${ageResearchandDevelopment.sort((a, b) => a - b).slice(-1)}`;
        } else if (value.company.department === "Sales") {
          age9.push(value.age);
          acc[value.company.department].ageRange = `${
            ageSales.sort((a, b) => a - b)[0]
          } - ${ageSales.sort((a, b) => a - b).slice(-1)}`;
        } else if (value.company.department === "Services") {
          age10.push(value.age);
          acc[value.company.department].ageRange = `${
            ageServices.sort((a, b) => a - b)[0]
          } - ${ageServices.sort((a, b) => a - b).slice(-1)}`;
        } else {
          age1.push(value.age);
          acc[value.company.department].ageRange = `${
            ageSupport.sort((a, b) => a - b)[0]
          } - ${ageSupport.sort((a, b) => a - b).slice(-1)}`;
        }
        //#endregion

        //กรอง USER ตาม Postcode
        //#region กรองตาม Postcode
        if (value.company.department === "Accounting") {
          acc[value.company.department].addressUser[
            `${value.firstName}${value.lastName}`
          ] = value.address.postalCode;
        } else if (value.company.department === "Business Development") {
          acc[value.company.department].addressUser[
            `${value.firstName}${value.lastName}`
          ] = value.address.postalCode;
        } else if (value.company.department === "Engineering") {
          acc[value.company.department].addressUser[
            `${value.firstName}${value.lastName}`
          ] = value.address.postalCode;
        } else if (value.company.department === "Human Resources") {
          acc[value.company.department].addressUser[
            `${value.firstName}${value.lastName}`
          ] = value.address.postalCode;
        } else if (value.company.department === "Legal") {
          acc[value.company.department].addressUser[
            `${value.firstName}${value.lastName}`
          ] = value.address.postalCode;
        } else if (value.company.department === "Marketing") {
          acc[value.company.department].addressUser[
            `${value.firstName}${value.lastName}`
          ] = value.address.postalCode;
        } else if (value.company.department === "Product Management") {
          acc[value.company.department].addressUser[
            `${value.firstName}${value.lastName}`
          ] = value.address.postalCode;
        } else if (value.company.department === "Research and Development") {
          acc[value.company.department].addressUser[
            `${value.firstName}${value.lastName}`
          ] = value.address.postalCode;
        } else if (value.company.department === "Sales") {
          acc[value.company.department].addressUser[
            `${value.firstName}${value.lastName}`
          ] = value.address.postalCode;
        } else if (value.company.department === "Services") {
          acc[value.company.department].addressUser[
            `${value.firstName}${value.lastName}`
          ] = value.address.postalCode;
        } else {
          acc[value.company.department].addressUser[
            `${value.firstName}${value.lastName}`
          ] = value.address.postalCode;
        }
        //#endregion

        return acc;
      }, {} as IRespData);
      return result;
    };
    const newData = groupByDepartment(resp);
    console.log(newData);
  } catch (error) {
    console.log(error);
  }
};

const CreateData = () => {
  return (
    <Grid container spacing={2} direction={"column"} alignItems={"center"}>
      <Grid item xs={12} sm={12} md={12}>
        <Typography variant="h4">
          Please click button to see result in console.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Button
          onClick={getData}
          sx={{
            border: "2px Solid black",
            width: "100%",
            height: 200,
            boxShadow: " 0px 10px 15px -3px rgba(0,0,0,0.1)",
          }}
        >
          <Typography variant="h1">Click ME!</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateData;
