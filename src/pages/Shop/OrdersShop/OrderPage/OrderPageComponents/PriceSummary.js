import React, { useState, useEffect } from "react";
import {
  Stack,
  Typography,
  styled,
  TableRow,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  tableCellClasses,
} from "@mui/material";
import theme from "../../../../../Theme";
import NumberFormat from "../../../../../utils/NumberFormat";

function PriceSummary({
  orderItems,
  appliedVoucher,
  shippingFee,
  productTotalPrice,
}) {
  //row styles
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:last-child td": {
      backgroundColor: theme.palette.background.default,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  // calculations
  let finalDiscount = null;
  let finalDiscountAmt = null;
  let totalPrice = null;

  // get discount amt
  if (appliedVoucher.promo_type_name === "Percent Discount") {
    finalDiscount = productTotalPrice * appliedVoucher.discount_amount;
  } else {
    finalDiscount = appliedVoucher.discount_amount;
  }

  if (appliedVoucher.promo_type_name === "Percent Discount") {
    finalDiscountAmt = `${appliedVoucher.discount_amount * 100}%`;
  }

  const finalPrice = Number(productTotalPrice) + Number(shippingFee);
  totalPrice = finalPrice - Number(appliedVoucher.discount_amount);

  //display data into rows
  function createData(name, value) {
    return { name, value };
  }

  const rows = [
    ...(orderItems
      ? orderItems.map((item) => ({
          name: item.product_name ? (
            <div style={{ whiteSpace: "pre-line" }}>
              <b>{item.quantity}x</b> {item.product_name}
              <br />
              <div style={{ color: theme.palette.primary.main }}>
                Variation: &nbsp;
                {item.var_name}
              </div>
            </div>
          ) : (
            "- -"
          ),
          value:
            <NumberFormat value={item.price * item.quantity} isPeso /> ||
            "₱0.00",
        }))
      : []),
    createData(
      "Shipping Fee",
      <NumberFormat value={shippingFee} isPeso /> || "₱0.00"
    ),
    createData(
      "Voucher Discount",
      <Typography fontWeight={600}>
        -<NumberFormat value={finalDiscount} isPeso />
        <br />
        <span fontWeight="regular">
          {appliedVoucher.voucherID
            ? `${appliedVoucher.promo_type_name} ${
                appliedVoucher.promo_type_name === "Percent Discount"
                  ? `, ${finalDiscountAmt}`
                  : ""
              }`
            : ""}
        </span>
      </Typography>
    ),
    createData(
      "Total Price",
      <NumberFormat value={totalPrice} isPeso /> || "₱0.00"
    ),
  ];

  return (
    <div>
      <Stack spacing={3} width={"100%"}>
        {/*Section Name */}
        <Stack
          direction={"row"}
          sx={{ alignItems: "baseline", justifyContent: "space-between" }}
        >
          <Typography variant="sectionTitleSmall">Price Summary</Typography>
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

export default PriceSummary;
