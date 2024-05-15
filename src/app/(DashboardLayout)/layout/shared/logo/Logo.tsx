import { Box, Grid, Typography, styled } from "@mui/material";
import Image from "next/image";

const Logo = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Image
            src="/images/logos/7Solution.png"
            alt="logo"
            height={40}
            width={115}
            priority
            style={{ borderRadius: "8%" }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Assignment</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Logo;
