import React from "react";
import { Box, Stack, Avatar, Typography } from "@mui/material";
import TruncateString from "../../../../utils/TruncateString";
import styles from "../../../../css/Styles.module.css";
import maleAvatar from "../../../../assets/avatars/128_1.png";
import lokal360_Logo from "../../../../assets/lokal360_Logo.png";
import NumberFormat from "../../../../utils/NumberFormat";

function UserShopInfo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "32px",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: 5,
        "@media (max-width: 550px)": {
          paddingX: 1,
        },
      }}
    >
      {/* Shop Info*/}
      <Stack spacing={2} direction={"row"} sx={{ alignItems: "center" }}>
        {/*Shop Logo */}
        <Avatar
          className={`${styles.avatar}`}
          sx={{ height: 75, width: 75 }}
          src={lokal360_Logo}
        />

        <Stack spacing={0} direction={"column"}>
          {/*Shop Name*/}
          <Typography variant="sectionTitle" sx={{ textAlign: "left" }}>
            <TruncateString str={"Bamboo Land"} n={25} />
          </Typography>

          {/*Shop Info*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "center",
              "@media (max-width: 550px)": {
                flexDirection: "column",
                gap: "0px",
              },
            }}
          >
            {/*Products Count */}

            <Typography variant="sectionTitleSmall" color={"primary"}>
              <NumberFormat value={999} />
              &nbsp;
              <Typography variant="subtitle1" color={"#444"} component={"span"}>
                Products
              </Typography>
            </Typography>

            {/*Followers Count */}
            <Typography variant="sectionTitleSmall" color={"primary"}>
              <NumberFormat value={999} />
              &nbsp;
              <Typography variant="subtitle1" color={"#444"} component={"span"}>
                Followers
              </Typography>
            </Typography>
          </Box>
        </Stack>
      </Stack>

      {/* User Info*/}
      <Box sx={{ alignSelf: "flex-end" }}>
        <Stack
          spacing={2}
          direction={"row"}
          sx={{
            alignItems: "center",
            justifyItems: "center",
            textAlign: "center",
          }}
        >
          {/*User Avatar */}
          <Avatar
            className={`${styles.avatar}`}
            sx={{ height: 75, width: 75 }}
            src={maleAvatar}
          />

          {/*User Info */}
          <Stack spacing={0}>
            {/*User Name */}
            <Typography variant="sectionTitleSmall">Pochi Ta</Typography>
            {/*User Job Tile */}
            <Typography variant="subtitle2">Store Owner</Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default UserShopInfo;
