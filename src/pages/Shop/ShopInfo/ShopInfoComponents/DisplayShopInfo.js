import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import NumberFormat from "../../../../utils/NumberFormat";
import theme from "../../../../Theme";
import styles from "../../../../css/Styles.module.css";
import EditShopInfoDialog from "./Dialogs/EditShopInfoDialog";
import { useMediaQuery } from "@mui/material";
import ButtonEdit from "../../../../components/Buttons/ButtonEdit";

function DisplayShopInfo() {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
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
          className={`${styles.grow}`}
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
            <ButtonEdit handleOpen={handleOpen} />
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
                textAlign: "center",
                alignItems: "center",
                "@media (max-width: 600px)": {
                  justifyContent: "center",
                },
              }}
            >
              {/*Total Sales*/}
              <Stack>
                <Typography variant="sectionTitleSmall" color={"primary"}>
                  <NumberFormat value={25995} isPeso={true} />
                  &nbsp;
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={`${theme.palette.text.primary}`}
                  component={"span"}
                >
                  Total Sales
                </Typography>
              </Stack>

              {/*Products*/}
              <Stack>
                <Typography variant="sectionTitleSmall" color={"primary"}>
                  <NumberFormat value={1000} isShortened={true} />
                  &nbsp;
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={`${theme.palette.text.primary}`}
                  component={"span"}
                >
                  Products
                </Typography>
              </Stack>

              {/*Followers*/}
              <Stack>
                <Typography variant="sectionTitleSmall" color={"primary"}>
                  <NumberFormat value={2679} isShortened={true} />
                  &nbsp;
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={`${theme.palette.text.primary}`}
                  component={"span"}
                >
                  Followers
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>

      <EditShopInfoDialog
        open={open}
        handleClose={handleClose}
        isSmScreen={isSmScreen}
      />
    </div>
  );
}

export default DisplayShopInfo;
