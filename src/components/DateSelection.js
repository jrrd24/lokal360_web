import React from "react";
import { Stack, Select, MenuItem, Typography, Box } from "@mui/material";
import {
  GetDate,
  GetMonthFirstDay,
  GetMonthLastDay,
  GetWeekFirstDay,
  GetWeekLastDay,
  GetYearFirstDay,
  GetYearLastDay,
} from "./Utils/GetDate";
import { DateRange } from "@mui/icons-material";
import theme from "../Theme";

function DateSelection({
  onRangeChange,
  onRangeEndChange,
  displayOnly,
  select,
}) {
  const [orderSelect, setOrderSelect] = React.useState("1");
  const [orderRange, setOrderRange] = React.useState(<GetDate />);
  const [orderRangeEnd, setOrderRangeEnd] = React.useState("");

  const handleChange = (event) => {
    setOrderSelect(event.target.value);
    if (event.target.value === 1) {
      setOrderRange(<GetDate />);
      setOrderRangeEnd("");
      onRangeChange(<GetDate />);
      onRangeEndChange("");
    } else if (event.target.value === 2) {
      setOrderRange(<GetWeekFirstDay />);
      setOrderRangeEnd(<GetWeekLastDay />);
      onRangeChange(<GetWeekFirstDay />);
      onRangeEndChange(<GetWeekLastDay />);
    } else if (event.target.value === 3) {
      setOrderRange(<GetMonthFirstDay />);
      setOrderRangeEnd(<GetMonthLastDay />);
      onRangeChange(<GetMonthFirstDay />);
      onRangeEndChange(<GetMonthLastDay />);
    } else if (event.target.value === 4) {
      setOrderRange(<GetYearFirstDay />);
      setOrderRangeEnd(<GetYearLastDay />);
      onRangeChange(<GetYearFirstDay />);
      onRangeEndChange(<GetYearLastDay />);
    } else {
      setOrderRange("");
      setOrderRangeEnd("");
      onRangeChange("");
      onRangeEndChange("");
    }
  };

  return (
    <Stack direction={"row"} spacing={2}>
      {/*Combo Box */}
      <Select
        labelId="select-order-time"
        id="select-order-time"
        value={orderSelect}
        onChange={handleChange}
        sx={{
          width: "130px",
          maxHeight: 66,
          minHeight: 56,
          backgroundColor: `${theme.palette.background.paper}`,
          display: displayOnly ? "none" : "",
        }}
      >
        <MenuItem value={1}>Today</MenuItem>
        <MenuItem value={2}>This Week</MenuItem>
        <MenuItem value={3}>This Month</MenuItem>
        <MenuItem value={4}>This Year</MenuItem>
        <MenuItem value={5}>All Time</MenuItem>
      </Select>

      {/*Display Date */}
      <Stack
        spacing={1}
        direction={"row"}
        sx={{
          minWidth: 140,
          maxWidth: 160,
          maxHeight: 66,
          minHeight: 56,
          backgroundColor: "#F2F2F2",
          p: 1,
          alignItems: "center",
          justifyItems: "center",
          border: "1px solid #444",
          borderRadius: 2,
        }}
      >
        <Box>
          <DateRange />
        </Box>
        <Box>
          <Typography variant="h7">
            {orderRange} {orderRangeEnd === "" ? "" : "to"}{" "}
          </Typography>
          <Typography variant="h7">{orderRangeEnd} </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}

export default DateSelection;
