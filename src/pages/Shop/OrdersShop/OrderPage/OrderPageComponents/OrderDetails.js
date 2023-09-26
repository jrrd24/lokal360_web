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

function OrderDetails({
  orderID,
  createdAt,
  approvedAt,
  completedAt,
  shippingMethod,
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

  const rows = [
    createData("Reference Number", orderID),
    createData("Created At", createdAt),
    createData("Approved At", approvedAt),
    createData("Completed At", completedAt),
    createData("Shipping Method", shippingMethod),
  ];

  return (
    <div>
      <Stack spacing={3} width={"100%"}>
        {/*Section Name */}
        <Stack
          direction={"row"}
          sx={{ alignItems: "baseline", justifyContent: "space-between" }}
        >
          <Typography variant="sectionTitleSmall">Order Details</Typography>
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

export default OrderDetails;
