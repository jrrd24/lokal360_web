import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import {
  Box,
  List,
  Toolbar,
  CssBaseline,
  Tab,
  Tabs,
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
  Typography,
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
import HandshakeIcon from "@mui/icons-material/Handshake";
import BadgeIcon from "@mui/icons-material/Badge";

const drawerWidth = 260;
// For Drawer Transition

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

export default function ShopSidebar({ component: MainComponent }) {
  //For Page Transitions
  const [inProp, setInProp] = React.useState(false);

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
    navigate("/");
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
    navigate("/shop/shop_info");
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
  function handlePartnerClick(event) {
    navigate("/shop/360_partner");
  }
  function handleEmployeeClick(event) {
    navigate("/shop/employee_management");
  }
  function handleSettingsClick(event) {
    navigate("/shop/settings");
  }
  function handleShopCategoriesClick(event) {
    setSelectedMenuItem("Shop Category");
    navigate("/shop/products/shop_category");
  }
  // Set the initial selectedMenuItem based on the current pathname
  React.useEffect(() => {
    const currentPathname = window.location.pathname;
    const menuItems = [
      "/",
      "/shop/analytics",
      "/shop/products",
      "/shop/customers",
      "/shop/orders",
      "/shop/shop_info",
      "/shop/promos",
      "/shop/lokal_ads",
      "/shop/vouchers",
      "/shop/360_partner",
      "/shop/employee_management",
      "/shop/settings",
      "/shop/products/shop_category",
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
      "360 Partner",
      "Employee Management",
      "Settings",
      "Shop Category",
    ];
    // Check if the current pathname is for a product page or order page
    if (currentPathname.includes("/shop/products/product_page/")) {
      setSelectedMenuItem("Products");
    } else if (currentPathname.includes("/shop/orders/order_page/")) {
      setSelectedMenuItem("Orders");
    } else {
      // Handle other menu items based on the pathname
      const selectedMenuItemIndex = menuItems.indexOf(currentPathname);
      if (selectedMenuItemIndex !== -1) {
        setSelectedMenuItem(menuItemTexts[selectedMenuItemIndex]);
      }

      const isSettingsPage = currentPathname === "/admin/settings";
      if (isSettingsPage) {
        setSelectedMenuItem("Settings");
      }

      if (currentPathname === "/shop/products/shop_category") {
        setSelectedMenuItem("Shop Category");
        setValue("two"); // Set the tab value to "two" for Shop Categories
      }
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

  //For Tabs
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue, setValue) => {
    setValue(newValue);
    if (newValue === "one") {
      handleProductsClick();
    } else if (newValue === "two") {
      handleShopCategoriesClick();
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/*Appbar (Header) */}
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <Toolbar
          sx={{
            backgroundColor:
              selectedMenuItem === "360 Partner"
                ? "transparent"
                : theme.palette.background.paper,
            transition: "background-color 0.3s ease",
          }}
        >
          {/*Hamburger Menu Button */}
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              color:
                selectedMenuItem === "360 Partner"
                  ? theme.palette.background.paper
                  : theme.palette.buttonHover,
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          {/*Branding Logo */}
          <img
            src={require("../../assets/lokal360_logo_filled.png")}
            alt="logo"
            style={{ width: 45, height: 45, marginRight: 10 }}
          />
          {/*Search */}
          <Box
            sx={{
              width: 380,
              backgroundColor: "#fafafa",
              border: 1,
              borderColor: "#BBBBBB",
              borderRadius: 2,
              alignSelf: "center",

              display: { xs: "none", sm: "block" },
            }}
          >
            <InputBase
              name="searchBar"
              sx={{
                ml: 1,
                flex: 1,
                width: 300,
                "& input": {
                  color:
                    selectedMenuItem === "360 Partner"
                      ? theme.palette.text.main
                      : "",
                },
              }}
              placeholder="Find Your Products"
            />
            <IconButton
              type="button"
              sx={{
                p: "10px",
                color:
                  selectedMenuItem === "360 Partner"
                    ? theme.palette.primary.main
                    : "",
              }}
            >
              <SearchIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              sx={{
                color:
                  selectedMenuItem === "360 Partner"
                    ? theme.palette.background.paper
                    : "primary",
              }}
            >
              <Badge badgeContent={100} color="error" max={99}>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="#BBBBBB"
            >
              <Badge badgeContent={0} color="error" max={99}>
                <MailIcon
                  sx={{
                    color:
                      selectedMenuItem === "360 Partner"
                        ? theme.palette.background.paper
                        : "primary",
                  }}
                />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              onClick={handleProfileMenuOpen}
              sx={{
                color:
                  selectedMenuItem === "360 Partner"
                    ? theme.palette.background.paper
                    : "primary",
              }}
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleMobileMenuOpen}
              sx={{
                color:
                  selectedMenuItem === "360 Partner"
                    ? theme.palette.background.paper
                    : "primary",
              }}
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
          display: {
            xs: open ? "block" : "none",
            sm:
              selectedMenuItem === "360 Partner"
                ? open
                  ? "block"
                  : "none"
                : "block",
          },
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
            pb: 5,
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
                      selectedMenuItem === item.text
                        ? `${theme.palette.primary.main}`
                        : `${theme.palette.buttonHover}`,
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
            pb: 5,
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
              text: "360 Partner",
              icon: <HandshakeIcon />,
              onClick: handlePartnerClick,
            },
            {
              text: "Employee Management",
              icon: <BadgeIcon />,
              onClick: handleEmployeeClick,
            },
            {
              text: "Settings",
              icon: <SettingsIcon />,
              onClick: handleSettingsClick,
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
                      selectedMenuItem === item.text
                        ? `${theme.palette.primary.main}`
                        : `${theme.palette.buttonHover}`,
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
      </Drawer>

      {/*MAIN */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: `${theme.palette.background.main}`,
          minHeight: "100vh",
          display: { xs: open ? "none" : "block", sm: "block" },
        }}
      >
        <DrawerHeader />

        {/*Tabs */}
        <Tabs
          value={value}
          onChange={(event, newValue) =>
            handleChange(event, newValue, setValue)
          }
          sx={{
            backgroundColor: `${theme.palette.background.paper}`,
            display:
              selectedMenuItem === "Products" ||
              selectedMenuItem === "Shop Category"
                ? "block"
                : "none",
            height: "20px",
          }}
        >
          <Tab
            value="one"
            label={
              <Typography
                variant="sectionTitleSmall"
                sx={{ color: "inherit", fontSize: 18 }}
              >
                Products
              </Typography>
            }
          />
          <Tab
            value="two"
            label={
              <Typography
                variant="sectionTitleSmall"
                sx={{ color: "inherit", fontSize: 18 }}
              >
                Shop Categories
              </Typography>
            }
          />
        </Tabs>

        {MainComponent && (
          <Box
            sx={
              (mainComponentStyle,
              {
                p: selectedMenuItem === "360 Partner" ? 0 : 3,
                "@media (max-width: 600px)": {
                  p: 0,
                  py: selectedMenuItem === "360 Partner" ? 0 : 3,
                },

                display: "block",
                textAlign: "center",
                margin: "0 auto", // Center-align the component horizontally
                maxWidth: "2000px",
              })
            }
          >
            <MainComponent />
          </Box>
        )}
      </Box>
    </Box>
  );
}

const mainComponentStyle = {
  width: "100%",
};
