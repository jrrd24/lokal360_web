import * as React from "react";
import { styled, useTheme, } from "@mui/material/styles";
import {
  Box,
  List,
  Toolbar,
  CssBaseline,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import ReportIcon from "@mui/icons-material/Report";
import CategoryIcon from "@mui/icons-material/Category";
import StoreIcon from "@mui/icons-material/Store";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import CampaignIcon from "@mui/icons-material/Campaign";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),   
}));

export default function DBSidebar({ component: MainComponent }) {
  //Selected Menu Item
  const [selectedMenuItem, setSelectedMenuItem] = React.useState("Dashboard");

  //Initialize Navigate
  const navigate = useNavigate();

  //Sidebar Navigation On Click
  function handleDashboardClick(event) {
    navigate("/admin/dashboard");
  }
  function handleAnalyticsClick(event) {
    navigate("/admin/analytics");
  }
  function handleReportsClick(event) {
    navigate("/admin/reports");
  }
  function handleCategoriesClick(event) {
    navigate("/admin/category");
  }
  function handleShopsClick(event) {
    navigate("/admin/shop_management");
  }
  function handleLokalAdsClick(event) {
    navigate("/admin/lokal_ads");
  }
  function handleUsersClick(event) {
    navigate("/admin/users");
  }
  function handleSettingsClick(event) {
    setSelectedMenuItem("Settings");
    navigate("/admin/settings");
  }

  // Set the initial selectedMenuItem based on the current pathname
  React.useEffect(() => {
    const currentPathname = window.location.pathname;
    const menuItems = [
      "/admin/dashboard",
      "/admin/analytics",
      "/admin/reports",
      "/admin/category",
      "/admin/shop_management",
      "/admin/lokal_ads",
      "/admin/users",
    ];
    const menuItemTexts = [
      "Dashboard",
      "Analytics",
      "Reports",
      "Categories",
      "Shops Management",
      "Lokal Ads",
      "Users",
    ];
    const selectedMenuItemIndex = menuItems.indexOf(currentPathname);
    if (selectedMenuItemIndex !== -1) {
      setSelectedMenuItem(menuItemTexts[selectedMenuItemIndex]);
    }

    const isSettingsPage = currentPathname === "/admin/settings";
    if (isSettingsPage) {
      setSelectedMenuItem("Settings");
    }
  }, []);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  //Open and Close Drawer
  const handleDrawerOpen = () => {
    setOpen(true);
    
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        {/*Header */}
        <Toolbar sx={{ backgroundColor: "#FFFFFF" }}>
          {/*Hamburger Menu Button */}
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              color: "#757575",
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          {/*Branding Logo */}
          <img
            src={require("../assets/lokal360_Logo.png")}
            alt="logo"
            style={{ width: 53, height: 45 }}
          />
          {/*Page Name */}
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ color: "#6E5FDE", fontWeight: "medium" }}
          >
            Admin View
          </Typography>
        </Toolbar>
      </AppBar>

      {/*Sidebar */}
      
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          display: { xs: open ? "block" : "none", sm: "block" },
        }}
      >
        {/*Sidebar Menu Header with minimize button */}
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />
        {/*sidebar menu items  */}
        <List
          sx={{
            pb: 15,
            "& .MuiListItemButton-root:hover": {
              backgroundColor: "#f0f0f0",
            },
            "& .MuiListItemButton-root.Mui-selected": {
              backgroundColor: "transparent",
            },
            "& .MuiListItemButton-root.Mui-selected:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          {[
            {
              text: "Dashboard",
              icon: <DashboardIcon />,
              onClick: handleDashboardClick,
            },
            {
              text: "Analytics",
              icon: <BarChartIcon />,
              onClick: handleAnalyticsClick,
            },
            {
              text: "Reports",
              icon: <ReportIcon />,
              onClick: handleReportsClick,
            },
            {
              text: "Categories",
              icon: <CategoryIcon />,
              onClick: handleCategoriesClick,
            },
            {
              text: "Shops Management",
              icon: <StoreIcon />,
              onClick: handleShopsClick,
            },
            {
              text: "Lokal Ads",
              icon: <CampaignIcon />,
              onClick: handleLokalAdsClick,
            },
            {
              text: "Users",
              icon: <PeopleIcon />,
              onClick: handleUsersClick,
            },
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              {/*Side Bar Buttons */}
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => {
                  item.onClick();
                  setSelectedMenuItem(item.text);
                }}
              >
                {/*Side Bar Icons */}
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color:
                      selectedMenuItem === item.text ? "#6E5FDE" : "#757575",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

        {/*setting menu items  */}
        <List
          sx={{
            "& .MuiListItemButton-root:hover": {
              backgroundColor: "#f0f0f0",
            },
            "& .MuiListItemButton-root.Mui-selected": {
              backgroundColor: "transparent",
            },
            "& .MuiListItemButton-root.Mui-selected:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => {
                handleSettingsClick();
                setSelectedMenuItem("Settings");
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color:
                    selectedMenuItem === "Settings" ? "#6E5FDE" : "#757575",
                }}
              >
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/*MAIN */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#F8F7FD",
          minHeight: "100vh",
          display: { xs: open ? "none" : "block", sm: "block" },
        }}
      >
        <DrawerHeader />

        {MainComponent && (
          <Box sx={mainComponentStyle}>
            <MainComponent />
          </Box>
        )}
      </Box>
    </Box>
  );
}

const mainComponentStyle = {
  width: "100%", // This will make the component cover the entire width
};
