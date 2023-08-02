import React from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box, Avatar, Divider, Stack, Typography, Badge } from "@mui/material";
import styles from "../../../css/Styles.module.css";
import DummyText from "./DummyText";
import maleAvatar from "../../../assets/avatars/128_1.png";
import lokal360_Logo from "../../../assets/lokal360_Logo.png";

function DashboardShopContent() {
  return (
    <Box sx={{ backgroundColor: "transparent" }}>
      <PageInfoComponent
        PageName={"Shop Dashboard"}
        Subtitle={"Welcome, {Shop Owner Name}"}
      />

      {/*Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          flexWrap: "wrap",
        }}
      >
        {/*User and Shop Info */}
        <Box
          className={`${styles.sectionContainer}`}
          sx={{
            minWidth: "250px",
            order: 1,
            "@media (max-width: 600px)": {
              order: 2,
            },
          }}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              justifyItems: "center",
              textAlign: "center",
            }}
          >
            {/*Shop Logo */}
            <Avatar
              className={`${styles.avatar}`}
              sx={{ height: 75, width: 75 }}
              src={lokal360_Logo}
            />

            {/*Shop Name*/}
            <Typography variant="sectionTitle">Bamboo Land</Typography>

            {/*Shop Info*/}
            <Stack spacing={5} direction={"row"}>
              {/*Products Count */}
              <Stack spacing={0}>
                <Typography variant="sectionTitleSmall" color={"primary"}>
                  999
                </Typography>
                <Typography variant="subtitle1">Products</Typography>
              </Stack>

              {/*Followers Count */}
              <Stack spacing={0}>
                <Typography variant="sectionTitleSmall" color={"primary"}>
                  999
                </Typography>
                <Typography variant="subtitle1">Followers</Typography>
              </Stack>
            </Stack>

            {/*Divider */}
            <Box sx={{ width: "100%" }}>
              <Divider />
            </Box>

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

            {/*Divider */}
            <Box sx={{ width: "100%" }}>
              <Divider />
            </Box>

            {/*Notifs/ Chats */}
            <Stack spacing={2} textAlign={"initial"} sx={{ width: "90%" }}>
              {/*Notifs Total */}
              <Stack
                spacing={4}
                direction={"row"}
                sx={{ alignItems: "center" }}
              >
                <Typography variant="sectionTitleSmall" component={"span"}>
                  Notifications
                </Typography>
                <Badge badgeContent={100} color="primary" max={99} showZero />
              </Stack>

              {/*Chats Total */}
              <Stack
                spacing={4}
                direction={"row"}
                sx={{ alignItems: "center" }}
              >
                <Typography variant="sectionTitleSmall" component={"span"}>
                  Chats
                </Typography>
                <Badge badgeContent={0} color="primary" max={99} showZero />
              </Stack>
            </Stack>
          </Stack>
        </Box>

        {/*Order Summary */}
        <Box
          className={`${styles.sectionContainer}`}
          sx={{
            maxWidth: "600px",
            order: 1,
            "@media (max-width: 600px)": {
              order: 1,
            },
          }}
        >
          <DummyText />
        </Box>

        {/*Valuable Customers */}
        <Box
          className={`${styles.sectionContainer}`}
          sx={{
            height: "350px",
            maxWidth: "300px",
            order: 3,
            "@media (max-width: 600px)": {
              order: 3,
            },
          }}
        >
          Valuable Customers
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardShopContent;
