import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import theme from "../../Theme";
import Styles from "../../css/Styles.module.css";
import TruncateString from "../../utils/TruncateString";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ChatBubble, ReportProblem } from "@mui/icons-material";
import NumberFormat from "../../utils/NumberFormat";
import { BASE_URL } from "../../api/Api";

// Styling for the custom menu
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function CustomerContainer({ data }) {
  // Destructuring data prop and adding default values
  // for error handiling in case of undefined params
  const {
    profile_pic = "",
    username = "Unknown Customer",
    orderCount = 0,
    total = 0.0,
  } = data || {};

  // State and event handlers for the menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ ...classes.main }} className={`${Styles.changeBG}`}>
      <Stack spacing={2} direction={"row"} alignItems="center">
        {/*User Image */}
        <Avatar src={`${BASE_URL}/${profile_pic}`} />

        {/*Content */}
        <Stack
          spacing={0}
          direction={"column"}
          alignItems="flex-start"
          sx={{ width: 200 }}
        >
          {/* User Name*/}
          <Typography variant="sectionTitleSmall">
            <TruncateString str={username} n={15} />
          </Typography>

          {/* Order Count and Total Spent*/}
          <Typography
            variant="body1"
            sx={{
              color: "#44444499",
              textAlign: "start",
            }}
          >
            {orderCount} Orders
            {/* &nbsp;•&nbsp;{" "}
            <NumberFormat value={total} isPeso={true} /> */}
          </Typography>
        </Stack>
      </Stack>
      {/*See More Button */}
      <IconButton
        aria-label="Customer See More"
        id="see-more-button"
        aria-controls={open ? "customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      {/*Pop Up Menu */}
      <StyledMenu
        id="customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <ChatBubble />
          Chat
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <ReportProblem />
          Report
        </MenuItem>
      </StyledMenu>
    </Box>
  );
}

const classes = {
  main: {
    minHeight: 60,
    backgroundColor: `${theme.palette.background.paper}`,
    p: 1,
    justifyContent: "space-between",
    display: "flex",
    borderRadius: 2,
  },
};

CustomerContainer.propTypes = {
  profile_pic: PropTypes.string,
  username: PropTypes.string,
  orderCount: PropTypes.number,
  total: PropTypes.number,
};

export default CustomerContainer;
