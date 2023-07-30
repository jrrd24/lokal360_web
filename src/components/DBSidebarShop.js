import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
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
  IconButton,
  InputBase,
  Badge,
  MenuItem,
  Menu,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import InventoryIcon from "@mui/icons-material/Inventory";
import SellIcon from "@mui/icons-material/Sell";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PercentIcon from "@mui/icons-material/Percent";
import CampaignIcon from "@mui/icons-material/Campaign";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

const drawerWidth = 240;

//For Appbar
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

//For Drawer
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

export default function DBSidebarShop({ component: MainComponent }) {
  //For App
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  //For Drawer
  //Selected Menu Item
  const [selectedMenuItem, setSelectedMenuItem] = React.useState("Dashboard");

  //Initialize Navigate
  const navigate = useNavigate();

  //Sidebar Navigation On Click
  function handleDashboardClick(event) {
    navigate("/shop/dashboard");
  }
  function handleAnalyticsClick(event) {
    navigate("/shop/analytics");
  }
  function handleProductsClick(event) {
    navigate("/shop/products");
  }
  function handleCustomersClick(event) {
    navigate("/shop/customers");
  }
  function handleOrdersClick(event) {
    navigate("/shop/orders");
  }
  function handleShopInfoClick(event) {
    navigate("/shop/shop_information");
  }
  function handlePromosClick(event) {
    navigate("/shop/promos");
  }
  function handleLokalAdsClick(event) {
    navigate("/shop/lokal_ads");
  }
  function handleVouchersClick(event) {
    navigate("/shop/vouchers");
  }
  function handleSettingsClick(event) {
    navigate("/shop/settings");
  }
  // Set the initial selectedMenuItem based on the current pathname
  React.useEffect(() => {
    const currentPathname = window.location.pathname;
    const menuItems = [
      "/shop/dashboard",
      "/shop/analytics",
      "/shop/products",
      "/shop/customers",
      "/shop/orders",
      "/shop/shop_information",
      "/shop/promos",
      "/shop/lokal_ads",
      "/shop/vouchers",
    ];
    const menuItemTexts = [
      "Dashboard",
      "Analytics",
      "Products",
      "Customers",
      "Orders",
      "Shop Information",
      "Promos",
      "Lokal Ads",
      "Vouchers",
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
      {/*Appbar (Header) */}
      <AppBar position="fixed" open={open}>
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
          {/*Search */}
          <Box
            sx={{
              minWidth: "1vw",
              maxWidth: "2000",
              backgroundColor: "#fafafa",
              border: 1,
              borderColor: "#BBBBBB",
              borderRadius: 2,
              alignSelf: "center",
              display: { xs: "none" ,sm: "block" },
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Google Maps"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="#BBBBBB"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon color="primary"/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="primary"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="primary"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="primary"
              
            >
              <MoreIcon />
            </IconButton>
          </Box>
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
              text: "Products",
              icon: <InventoryIcon />,
              onClick: handleProductsClick,
            },
            {
              text: "Customers",
              icon: <PeopleIcon />,
              onClick: handleCustomersClick,
            },
            {
              text: "Orders",
              icon: <SellIcon />,
              onClick: handleOrdersClick,
            },
            {
              text: "Shop Information",
              icon: <StorefrontIcon />,
              onClick: handleShopInfoClick,
            },
            {
              text: "Promos",
              icon: <PercentIcon />,
              onClick: handlePromosClick,
            },
            {
              text: "Lokal Ads",
              icon: <CampaignIcon />,
              onClick: handleLokalAdsClick,
            },
            {
              text: "Vouchers",
              icon: <CardGiftcardIcon />,
              onClick: handleVouchersClick,
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
