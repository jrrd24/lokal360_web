import React from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import {
  Box,
  Avatar,
  Stack,
  Typography,
  Skeleton,
  Button,
} from "@mui/material";
import theme from "../../Theme";
import styles from "../../css/Styles.module.css";
import maleAvatar from "../../assets/avatars/128_3.png";
import { ReadOnlyCustomInput } from "../../components/FormComponents/CustomInput";
import { useRequestProcessor } from "../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { Logout, Settings } from "@mui/icons-material";

const ProfileContent = React.memo(() => {

  const logout = useLogout();
  const navigate = useNavigate();
  const { useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const handleLogOut = async () => {
    await logout();
    navigate("/login");
  };

  const { data, isLoading, isError } = useCustomQuery(
    "getProfile",
    () =>
      axiosPrivate
        .get(`/api/profile/?userID=${auth.userID}`)
        .then((res) => res.data),
    { enabled: true }
  );

  if (isLoading) {
    return (
      <div>
        <div>
          <Box sx={{ ...classes.main }}>
            <Box sx={{ ...classes.overview }}>
              <Box sx={{ ...classes.avatarContainer }}>
                {/*Avatar */}
                <Skeleton variant="circular" height={125} width={125} />
              </Box>
              {/*User Info */}
              <Stack spacing={0}>
                <Skeleton height={30} width={150} />
                <Skeleton height={15} width={100} />
              </Stack>
            </Box>
            {/*Info */}
            <Stack spacing={5} sx={{ ...classes.infoContainer }}>
              {/*User info */}
              <Stack spacing={3} sx={{ ...classes.details }}>
                {/*Section Name */}
                <Box
                  direction={"row"}
                  sx={{ ...theme.components.box.sectionName }}
                >
                  <Skeleton height={35} width={200} />
                </Box>
                {/*User info */}
                <Stack spacing={3}>
                  <ReadOnlyCustomInput label="Username" width="100%" />
                  <Stack direction={"row"} spacing={3}>
                    <ReadOnlyCustomInput label="First Name" width="48%" />
                    <ReadOnlyCustomInput label="Last Name" width="48%" />
                  </Stack>
                  <Stack direction={"row"} spacing={3}>
                    <ReadOnlyCustomInput label="Birthday" width="48%" />
                    <ReadOnlyCustomInput label="Gender" width="48%" />
                  </Stack>
                  <ReadOnlyCustomInput label="Email" width="100%" />
                  <ReadOnlyCustomInput label="Mobile Number" width="100%" />
                </Stack>
                <Skeleton height={150} width={300} sx={{ mt: -10 }} />
              </Stack>
            </Stack>
          </Box>
        </div>
      </div>
    );
  }

  if (isError) {
    return <p>Error: {isError.message}</p>;
  }

  if (!data || data.length === 0) {
    return <p>No shop data available.</p>;
  }

  return (
    <div>
      {" "}
      {data && (
        <div>
          <Box sx={{ ...classes.main }}>
            <Box sx={{ ...classes.overview }}>
              {/*User Avatar */}
              <Box sx={{ ...classes.avatarContainer }}>
                <Avatar
                  className={`${styles.avatar}`}
                  sx={{ ...classes.avatar }}
                  src={maleAvatar}
                />

                <Box sx={{ ...classes.backgroundCircle }} />
              </Box>
              {/*User Info */}
              <Stack spacing={0}>
                {/*User Name */}
                <Typography variant="sectionTitle">
                  {data[0].first_name === null && data[0].last_name === null
                    ? data[0].Shopper.username
                    : `${data[0].first_name} ${data[0].last_name}`}
                </Typography>
                {/*User Type */}
                <Typography variant="subtitle2">
                  {data[0].is_shop_owner === true
                    ? "Shop Owner"
                    : data[0].is_shop_employee
                    ? "Shop Employee"
                    : data[0].is_admin
                    ? "Admin"
                    : "Shopper"}
                </Typography>
              </Stack>
            </Box>

            {/*Info */}
            <Stack spacing={5} sx={{ ...classes.infoContainer }}>
              {/*User info */}
              <Stack spacing={3} sx={{ ...classes.details }}>
                {/*Section Name */}
                <Box
                  direction={"row"}
                  sx={{ ...theme.components.box.sectionName }}
                >
                  <Typography variant="sectionTitle">
                    User Information
                  </Typography>
                </Box>

                {/*User info */}
                <Stack spacing={3}>
                  {/*Username */}
                  <ReadOnlyCustomInput
                    label="Username"
                    defaultValue={data[0].Shopper.username}
                    width="100%"
                  />

                  {/*Name */}
                  <Stack direction={"row"} spacing={3}>
                    {/*Fname*/}
                    <ReadOnlyCustomInput
                      label="First Name"
                      defaultValue={data[0].first_name}
                      width="48%"
                    />

                    {/*Lname */}
                    <ReadOnlyCustomInput
                      label="Last Name"
                      defaultValue={data[0].last_name}
                      width="48%"
                    />
                  </Stack>

                  {/*B-DAY/ Gender*/}
                  <Stack direction={"row"} spacing={3}>
                    {/*Birthday*/}
                    <ReadOnlyCustomInput
                      label="Birthday"
                      defaultValue={data[0].birthday}
                      width="48%"
                    />

                    {/*Gender */}
                    <ReadOnlyCustomInput
                      label="Gender"
                      defaultValue={data[0].gender}
                      width="48%"
                    />
                  </Stack>

                  {/*Email*/}
                  <ReadOnlyCustomInput
                    label="Email"
                    defaultValue={data[0].email}
                    width="100%"
                  />

                  {/*Mobile */}
                  <ReadOnlyCustomInput
                    label="Mobile Number"
                    defaultValue={data[0].mobile_num}
                    width="100%"
                  />
                </Stack>
                <Box sx={{ width: "100%" }}>
                  <UserSVG />
                </Box>
              </Stack>

              {/*Account Info*/}
              <Stack spacing={3} sx={{ ...classes.details }}>
                {/*Section Name */}
                <Box
                  direction={"row"}
                  sx={{ ...theme.components.box.sectionName }}
                >
                  <Typography variant="sectionTitle">
                    Account Information
                  </Typography>
                </Box>

                {/* */}
                <Stack direction={"row"} spacing={3}>
                  {/*Created At*/}
                  <ReadOnlyCustomInput
                    label="Created At"
                    defaultValue={new Date(data[0].createdAt).toLocaleString()}
                    width="100%"
                  />
                </Stack>
              </Stack>

              {/*Button Container*/}
              <Box
                sx={{
                  display: "flex",
                  alignSelf: "flex-end",
                  gap: 2,
                  "@media (max-width: 600px)": { alignSelf: "center" },
                }}
              >
                <Button
                  variant="outlined"
                  startIcon={<Settings />}
                  onClick={() => navigate("/shop/settings")}
                >
                  <Typography
                    variant="sectionTitleSmall"
                    sx={{ color: "inherit", fontSize: 16 }}
                  >
                    Settings
                  </Typography>
                </Button>

                <Button
                  variant="contained"
                  startIcon={<Logout />}
                  onClick={handleLogOut}
                >
                  <Typography
                    variant="sectionTitleSmall"
                    sx={{ color: "inherit", fontSize: 16 }}
                  >
                    Logout
                  </Typography>
                </Button>
              </Box>
            </Stack>
          </Box>
        </div>
      )}
    </div>
  );
});

const classes = {
  main: {
    ...theme.components.box.pageContainer,
    display: "flex",
    gap: "24px",
    alignItems: "baseline",
    justifyContent: "center",
    "@media (max-width: 900px)": {
      flexDirection: "column",
    },
  },

  overview: {
    width: 250,
    height: 300,
    ...theme.components.box.sectionContainer,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    flexDirection: "column",
    textAlign: "center",
    gap: "24px",
    "@media (max-width: 900px)": {
      width: "100%",
    },
  },

  avatarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  avatar: {
    height: 125,
    width: 125,
    position: "absolute",
    zIndex: 2,
  },

  backgroundCircle: {
    position: "relative",
    width: 150,
    height: 150,
    borderRadius: "50%",
    border: `5px solid ${theme.palette.primary.main}33`,
    zIndex: 1,
  },

  infoContainer: {
    maxWidth: 600,
    "@media (max-width: 900px)": {
      maxWidth: "100%",
      minWidth: "100%",
    },
  },
  details: {
    display: "flex",
    ...theme.components.box.sectionContainer,
  },
};

const UserSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      width="300"
      height="167.53"
      viewBox="0 0 770 431"
    >
      <polygon
        points="622.385 419.921 613.405 419.92 609.133 385.282 622.387 385.282 622.385 419.921"
        fill="#9e616a"
      />
      <path
        d="M839.67527,663.12563l-28.95638-.00107v-.36626a11.27124,11.27124,0,0,1,11.27063-11.27044h.00072l17.68556.00071Z"
        transform="translate(-215 -234.5)"
        fill="#2f2e41"
      />
      <polygon
        points="549.281 419.627 540.546 417.543 544.427 382.858 557.319 385.934 549.281 419.627"
        fill="#9e616a"
      />
      <path
        d="M764.48915,663.12563l-28.166-6.71909.085-.35625a11.27124,11.27124,0,0,1,13.57791-8.34808l.0007.00016,17.20284,4.10385Z"
        transform="translate(-215 -234.5)"
        fill="#2f2e41"
      />
      <circle cx="583.16598" cy="107.85215" r="18.99444" fill="#9e616a" />
      <path
        d="M843.02656,477.81507s8.84223,10.47969-2.29242,26.52671-21.421,31.76654-21.421,31.76654l-24.88926,47.15862L767.85067,645.899s-16.047-4.58488-16.702-6.54982,19.041-64.92453,19.041-64.92453,3.82745-25.10615,8.08481-33.29338,14.93821-70.7561,25.09038-71.41109S843.02656,477.81507,843.02656,477.81507Z"
        transform="translate(-215 -234.5)"
        fill="#2f2e41"
      />
      <path
        d="M841.32206,496.482l1.17588,50.761s5.59948,43.158,2.32461,58.22262-4.617,39.697-4.617,39.697l-16.702-1.63745-1.30989-58.62072s-4.58488-9.82469-3.27491-14.08208-5.56733-39.29883-5.56733-39.29883Z"
        transform="translate(-215 -234.5)"
        fill="#2f2e41"
      />
      <path
        d="M785.91109,479.45294c9.82445,10.477,58.75221,1.63427,58.75221,1.63427l-.65229-7.53156.68363-6.87277-1.96372-32.09624a362.02116,362.02116,0,0,1-.20395-38.63049,20.65459,20.65459,0,0,0-.25362-4.21235c-3.37594-20.536-20.73148-33.11879-21.65008-32.80842-.46241.152-5.38423,2.71748-10.52128,5.41587-5.89732,3.09751-12.07332,6.37238-12.07332,6.37238-7.861,2.95182-6.54962,50.11114-9.17216,54.36783s0,18.99044,0,18.99044l-2.94542,14.08126S776.08636,468.97591,785.91109,479.45294Z"
        transform="translate(-215 -234.5)"
        fill="#cacaca"
      />
      <path
        d="M817.65087,375.48733s9.16972,27.50916,7.20478,46.17612-23.2518,72.04784-23.2518,72.04784l-7.20479,3.92987v9.16972l-5.06746-13.72637,13.93558-29.13805S785.88435,363.37018,817.65087,375.48733Z"
        transform="translate(-215 -234.5)"
        opacity="0.1"
      />
      <path
        d="M804.41955,350.43161a12.77642,12.77642,0,0,0-.76751-3.453c-.83362-1.56893-2.74925-2.22624-4.51923-2.38035-2.25966-.19674-4.53675.19459-6.79963.03963s-4.68054-1.01716-5.80687-2.986a13.69775,13.69775,0,0,0-1.267-2.39066c-1.24051-1.41706-3.50119-1.19731-5.28394-.59007s-3.64167,1.49449-5.46405,1.01926c-1.53222-4.2871.35441-9.23238,3.61775-12.40687s7.66489-4.88271,12.03592-6.156c5.76544-1.67945,12.25385-2.672,17.55476.14951,7.68668,4.09143,10.39918,14.92,9.6902,22.99138-.268,3.05084-.70657,6.50564-3.17292,8.56566C810.62248,355.85315,805.5108,355.59389,804.41955,350.43161Z"
        transform="translate(-215 -234.5)"
        fill="#2f2e41"
      />
      <path
        d="M786.837,519.88789a7.73948,7.73948,0,0,0,.24926-11.865l10.30724-25.49918-14.01066,2.82336-7.63994,23.78161a7.78144,7.78144,0,0,0,11.0941,10.75919Z"
        transform="translate(-215 -234.5)"
        fill="#9e616a"
      />
      <path
        d="M816.69327,371.05327s9.16973,27.50918,7.20479,46.17613-23.25181,72.04783-23.25181,72.04783l-7.20478,3.92987v9.16972l-15.06453-4.25737,3.27491-10.80718s-5.23985-6.5498-1.63746-8.51473,2.94743-12.77212,2.94743-12.77212S784.92672,358.93614,816.69327,371.05327Z"
        transform="translate(-215 -234.5)"
        fill="#cacaca"
      />
      <path
        d="M621.68441,663.34961H295.53748V234.5H621.68441Z"
        transform="translate(-215 -234.5)"
        fill="#fff"
      />
      <path
        d="M621.68441,663.34961H295.53748V234.5H621.68441ZM298.4406,660.44649H618.78129V237.40312H298.4406Z"
        transform="translate(-215 -234.5)"
        fill="#e4e4e4"
      />
      <rect
        x="129.55666"
        y="108.47867"
        width="227.02744"
        height="15.13516"
        fill="#e4e4e4"
      />
      <rect
        x="181.44865"
        y="54.42452"
        width="145.94621"
        height="7.56758"
        fill="#e4e4e4"
      />
      <rect
        x="129.55666"
        y="141.99225"
        width="227.02744"
        height="15.13516"
        fill="#e4e4e4"
      />
      <rect
        x="129.55666"
        y="175.50583"
        width="227.02744"
        height="15.13517"
        fill="#e4e4e4"
      />
      <circle cx="141.44858" cy="57.66777" r="14.05408" fill="#6c63ff" />
      <rect
        x="127.39449"
        y="225.72214"
        width="229.18961"
        height="139.45972"
        fill="#6c63ff"
      />
      <path
        d="M355.31844,619.24973a7.56758,7.56758,0,0,0-10.71258,10.69176l10.69176,10.71257,10.71258-10.69175a7.56758,7.56758,0,0,0-10.69176-10.71258Z"
        transform="translate(-215 -234.5)"
        fill="#ff6582"
      />
      <path
        d="M984,665.5H216a1,1,0,0,1,0-2H984a1,1,0,0,1,0,2Z"
        transform="translate(-215 -234.5)"
        fill="#cacaca"
      />
    </svg>
  );
};

export default ProfileContent;