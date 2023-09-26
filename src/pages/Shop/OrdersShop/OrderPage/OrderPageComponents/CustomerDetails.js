import React from "react";
import {
  Stack,
  Typography,
  styled,
  TableRow,
  Table,
  TableContainer,
  Paper,
  TableBody,
  TableCell,
  tableCellClasses,
} from "@mui/material";
import theme from "../../../../../Theme";

function CustomerDetails({
  name = "",
  municipality = "",
  postalCode = "",
  region = "",
  province = "",
  addressLine1 = "",
  addressLine2 = "",
  barangay = "",
  contactNumber = "",
}) {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, value) {
    return { name, value };
  }

  let completeAddress = "";

  if (
    addressLine1 === "" ||
    barangay === "" ||
    municipality === "" ||
    province === "" ||
    region === ""
  )
    completeAddress = "";
  else {
    completeAddress = `${addressLine1} ${
      addressLine2 ? `, ${addressLine2}` : ","
    } ${barangay}, ${municipality}, ${province}, ${region}, ${postalCode}`;
  }

  const rows = [
    createData("Name", name),
    createData("Address", completeAddress || "- -"),
    createData("Contact Number", contactNumber),
  ];

  return (
    <div>
      <Stack spacing={3} width={"100%"}>
        {/*Section Name */}
        <Stack
          direction={"row"}
          sx={{ alignItems: "baseline", justifyContent: "space-between" }}
        >
          <Typography variant="sectionTitleSmall">Customer Details</Typography>
        </Stack>

        {/*Table */}
        <TableContainer>
          <Table sx={{ minWidth: "100%" }}>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name || "- -"}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Typography
                      variant="sectionSubTitle"
                      fontWeight={600}
                      sx={{ fontSize: 16, color: theme.palette.text.primary }}
                    >
                      {row.value || "- -"}
                    </Typography>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </div>
  );
}

export default CustomerDetails;
