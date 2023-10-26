import * as React from "react";
import { useNavigate } from "react-router-dom";
import theme from "../../Theme";
// mui components import
import { styled } from "@mui/material/styles";
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
// mui icons import
import {
  ChevronLeft,
  ChevronRight,
  Dashboard,
  BarChart,
  Inventory,
  Sell,
  People,
  Settings,
  Storefront,
  Percent,
  Campaign,
  CardGiftcard,
  Search,
  AccountCircle,
  Mail,
  Notifications,
  MoreVert,
  Handshake,
} from "@mui/icons-material";
import BadgeIcon from "@mui/icons-material/Badge";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 260;

// drawer transition animation
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

// component styles
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

const ShopSidebar = React.memo(({ component: MainComponent }) => {
  // Handle Menu Open and Close
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

  // decalare menus
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          navigate(`/profile/`);
        }}
      >
        <IconButton size="large" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      id={mobileMenuId}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large">
          <Search />
        </IconButton>
        <p>Search</p>
      </MenuItem>

      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <Mail />
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
            <Notifications />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem
        onClick={() => {
          navigate(`/profile/`);
        }}
      >
        <IconButton size="large" color="inherit">
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
  function handleDashboardClick() {
    navigate("/");
  }
  function handleAnalyticsClick() {
    navigate("/shop/analytics");
  }
  function handleProductsClick() {
    navigate("/shop/products");
  }
  function handleCustomersClick() {
    navigate("/shop/customers");
  }
  function handleOrdersClick() {
    navigate("/shop/orders");
  }
  function handleShopInfoClick() {
    navigate("/shop/shop_info");
  }
  function handlePromosClick() {
    navigate("/shop/promos");
  }
  function handleLokalAdsClick() {
    navigate("/shop/lokal_ads");
  }
  function handleVouchersClick() {
    navigate("/shop/vouchers");
  }
  function handlePartnerClick() {
    navigate("/shop/360_partner");
  }
  function handleEmployeeClick() {
    navigate("/shop/employee_management");
  }
  function handleSettingsClick() {
    navigate("/shop/settings");
  }
  function handleShopCategoriesClick() {
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
    } else if (currentPathname.includes("/profile")) {
      setSelectedMenuItem("");
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
  const handleChange = (e, newValue) => {
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
          <IconButton
            sx={{ width: 45, height: 45, marginRight: 10 }}
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src={require("../../assets/lokal360_logo_filled.png")}
              alt="logo"
              style={{ width: 45, height: 45 }}
            />
          </IconButton>
          {/*Search */}
          <Box sx={{ ...classes.searchBar }}>
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
              <Search />
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
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="#BBBBBB"
            >
              <Badge badgeContent={0} color="error" max={99}>
                <Mail
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
              <MoreVert />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Render the Menu component */}
      {renderMenu}

      {/* Render the  Mobile Menu component */}
      {renderMobileMenu}

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
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader>

        <Divider />
        {/*sidebar menu items  */}
        <List>
          {[
            {
              text: "Dashboard",
              icon: <Dashboard />,
              onClick: handleDashboardClick,
            },
            {
              text: "Analytics",
              icon: <BarChart />,
              onClick: handleAnalyticsClick,
            },
            {
              text: "Products",
              icon: <Inventory />,
              onClick: handleProductsClick,
            },
            {
              text: "Customers",
              icon: <People />,
              onClick: handleCustomersClick,
            },
            {
              text: "Orders",
              icon: <Sell />,
              onClick: handleOrdersClick,
            },
            {
              text: "Shop Information",
              icon: <Storefront />,
              onClick: handleShopInfoClick,
            },
            {
              text: "Promos",
              icon: <Percent />,
              onClick: handlePromosClick,
            },
            {
              text: "Lokal Ads",
              icon: <Campaign />,
              onClick: handleLokalAdsClick,
            },
            {
              text: "Vouchers",
              icon: <CardGiftcard />,
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
        <List sx={{ ...classes.menuItems }}>
          {[
            {
              text: "360 Partner",
              icon: <Handshake />,
              onClick: handlePartnerClick,
            },
            {
              text: "Employee Management",
              icon: <BadgeIcon />,
              onClick: handleEmployeeClick,
            },
            {
              text: "Settings",
              icon: <Settings />,
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
          ...classes.mainComponentContainer,
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
            height: "20px",
            display:
              selectedMenuItem === "Products" ||
              selectedMenuItem === "Shop Category"
                ? "block"
                : "none",
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
            sx={{
              ...classes.mainComponent,
              p: selectedMenuItem === "360 Partner" ? 0 : 3,
              "@media (max-width: 600px)": {
                p: 0,
                py: selectedMenuItem === "360 Partner" ? 0 : 3,
              },
            }}
          >
            <MainComponent />
          </Box>
        )}
      </Box>
    </Box>
  );
});

const classes = {
  searchBar: {
    width: 380,
    backgroundColor: "#fafafa",
    border: 1,
    borderColor: "#BBBBBB",
    borderRadius: 2,
    alignSelf: "center",
    display: { xs: "none", sm: "block" },
  },

  menuItems: {
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
  },

  mainComponentContainer: {
    flexGrow: 1,
    backgroundColor: `${theme.palette.background.main}`,
    minHeight: "100vh",
  },

  mainComponent: {
    width: "100%",
    display: "block",
    textAlign: "center",
    margin: "0 auto",
    maxWidth: "2000px",
  },
};

export default ShopSidebar;
