import React from "react";
import VoucherContainer from "../../../../components/ShopOnly/VoucherContainer";
import { Stack } from "@mui/material";

function DataGridVouchers() {
  return (
    <Stack spacing={2}>
      DataGridVouchers{" "}
      <VoucherContainer
        type={"Free Shipping"}
        logo={null}
        shopName={"Bamboo Land"}
        value={999999.0}
        minSpend={999999.0}
        validUntil={"2023-02-23"}
      />
      <VoucherContainer
        type={"Peso Discount"}
        logo={null}
        shopName={"Bamboo Land"}
        value={999999.0}
        minSpend={999999.0}
        validUntil={"2023-02-23"}
      />
      <VoucherContainer
        type={"Percent Discount"}
        logo={null}
        shopName={"Bamboo Land"}
        value={1.0}
        minSpend={999999.0}
        validUntil={"2023-02-23"}
      />
    </Stack>
  );
}

export default DataGridVouchers;
