import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import theme from "../../Theme";
import Styles from "../../css/Styles.module.css";
import TruncateString from "../../utils/TruncateString";
import { IconButton } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function ProductContainer({ img, name, sold }) {
  return (
    <Box
      sx={{
        minHeight: 60,
        minWidth: 300,
        backgroundColor: `${theme.palette.background.paper}`,
        p: 1,
        justifyContent: "center",
      }}
      className={`${Styles.changeBG}`}
    >
      <Stack
        spacing={1}
        direction={"row"}
        alignItems="center"
        textAlign={"left"}
      >
        {/*User Image */}
        <Avatar
          src={img}
          sx={{
            backgroundColor: "#FFF",
            width: 50,
            height: 50,
            border: "solid",
            borderColor: "transparent",
            borderRadius: 2,
          }}
        />

        {/*Content */}
        <Stack
          spacing={0}
          direction={"column"}
          alignItems="flex-start"
          sx={{ width: 200 }}
        >
          {/* User Name*/}
          <Typography variant="sectionTitleSmall">
            <TruncateString str={name} n={30} />
          </Typography>

          {/* Order Count and Total Spent*/}
          <Typography
            variant="body1"
            sx={{ color: "#44444499", textAlign: "start" }}
          >
            Total Sold: ₱ {sold}
          </Typography>
        </Stack>

        {/*See More Button */}
        <IconButton>
          <ArrowCircleRightIcon
            sx={{ color: `${theme.palette.primary.main}` }}
          />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default ProductContainer;
