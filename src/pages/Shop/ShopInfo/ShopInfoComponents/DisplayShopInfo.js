import { Edit } from "@mui/icons-material";
import { Box, Button, Typography, Stack } from "@mui/material";
import React from "react";

function DisplayShopInfo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "32px",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        "@media (max-width: 912px)": {
          p: 3,
          gap: "8px",
        },
      }}
    >
      {/*Shop Logo */}
      <Box
        sx={{
          width: "20%",
          "@media (max-width: 912px)": {
            width: "100%",
          },
        }}
      >
        <img
          src={require("../../../../assets/lokal360_Logo.png")}
          alt="Shop logo"
          style={{
            backgroundColor: "#FFF",
            borderRadius: 10,
            height: 150,
            width: 150,
          }}
        />
      </Box>

      {/*Shop Info and Button */}
      <Stack
        spacing={2}
        sx={{
          width: "70%",
          "@media (max-width: 912px)": {
            width: "100%",
          },
        }}
      >
        {/*Button */}
        <Box
          sx={{
            width: "100%",
            textAlign: "right",
            "@media (max-width: 912px)": {
              textAlign: "center",
            },
          }}
        >
          <Button
            variant="contained"
            startIcon={<Edit />}
            onClick={null}
            sx={{}}
          >
            <Typography
              variant="sectionTitleSmall"
              sx={{ color: "inherit", fontSize: 16 }}
            >
              Edit
            </Typography>
          </Button>
        </Box>

        {/*Shop Info */}
        <Stack
          spacing={2}
          sx={{
            width: "100%",
            textAlign: "left",
            "@media (max-width: 912px)": {
              textAlign: "center",
            },
          }}
        >
          {/*Shop Name*/}
          <Typography variant="sectionTitle">Bamboo Land</Typography>

          {/*Total Sales/ Products/ Followers*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "32px",
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            {/*Total Sales*/}
            <Stack>hi</Stack>

            {/*Products*/}
            <Stack>hiiiiii</Stack>

            {/*Followers*/}
            <Stack>hiiiiii</Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

export default DisplayShopInfo;
