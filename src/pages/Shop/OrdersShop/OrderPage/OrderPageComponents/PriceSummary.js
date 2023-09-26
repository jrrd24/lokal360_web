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
  voucherID,
  promoType,
  discountAmount,
  shippingFee,
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
  const [finalDiscount, setFinalDiscount] = useState(discountAmount);
  const [productTotalPrice, setProductTotalPrice] = useState(0.0);
  const [totalPrice, setTotalPrice] = useState(0.0);
  // Calculate total price if orderItems is defined
  useEffect(() => {
    if (orderItems && orderItems.length > 0) {
      setProductTotalPrice(
        orderItems.reduce((total, item) => total + item.price, 0)
      );
    } else {
      // If orderItems is not defined or empty, set the total price to 0
      setProductTotalPrice(0);
    }
  }, [orderItems]);

  //TODO: ERRORS ON TOTAL PRICE WHEN PERCENT DISCOUNT
  // get discount amt
  useEffect(() => {
    if (promoType === "Percent Discount") {
      setFinalDiscount(productTotalPrice * discountAmount);
    } else {
      setFinalDiscount(discountAmount);
    }
    setTotalPrice(productTotalPrice + shippingFee - finalDiscount);
  }, [
    promoType,
    discountAmount,
    productTotalPrice,
    shippingFee,
    finalDiscount,
  ]);

  const [finalDiscountAmt, setFinalDiscountAmt] = useState("");
  useEffect(() => {
    if (promoType === "Percent Discount") {
      setFinalDiscountAmt(`${discountAmount * 100}%`);
    }
  }, [discountAmount]);

  //display data into rows
  function createData(name, value) {
    return { name, value };
  }

  const rows = [
    ...(orderItems
      ? orderItems.map((item) => ({
          name: item.product_name || "- -",
          value: <NumberFormat value={item.price} isPeso /> || "₱0.00",
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
          {voucherID
            ? `${promoType} ${
                promoType === "Percent Discount" ? `, ${finalDiscountAmt}` : ""
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
