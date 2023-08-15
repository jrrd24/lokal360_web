const orderData = [
  {
    orderID: 1,
    name: "Customer 1",
    products: ["1x Product A", "1x Product B", "1x Product C"],
    total_price: 275.0,
    status: "Pending Approval",
    shipping_method: "Delivery",
    createdAt: "2023-05-10 15:30:00",
  },
  {
    orderID: 2,
    name: "Customer 2",
    products: ["1x Product A", "1x Product B"],
    total_price: 195.5,
    status: "Preparing",
    shipping_method: "Delivery",
    createdAt: "2023-05-10 15:30:00",
  },
  {
    orderID: 3,
    name: "Customer 3",
    products: ["1x Product A"],
    total_price: 120.0,
    status: "Ready For Pick-Up",
    shipping_method: "Pick-Up",
    createdAt: "2023-05-10 15:30:00",
  },
  {
    orderID: 4,
    name: "Customer 4",
    products: ["1x Product A"],
    total_price: 75.0,
    status: "On Delivery",
    shipping_method: "Delivery",
    createdAt: "2023-05-10 15:30:00",
  },
  {
    orderID: 5,
    name: "Customer 5",
    products: ["1x Product A"],
    total_price: 86.25,
    status: "Complete",
    shipping_method: "Pick-Up",
    createdAt: "2023-05-10 15:30:00",
  },
  {
    orderID: 6,
    name: "Customer 6",
    products: ["1x Product B"],
    total_price: 115.0,
    status: "Cancelled",
    shipping_method: "Pick-Up",
    createdAt: "2023-05-10 15:30:00",
  },
  {
    orderID: 7,
    name: "Customer 7",
    products: ["1x Product C"],
    total_price: 100.0,
    status: "Complete",
    shipping_method: "Delivery",
    createdAt: "2023-05-10 15:30:00",
  },
  {
    orderID: 8,
    name: "Customer 8",
    products: ["1x Product C"],
    total_price: 110.0,
    status: "Complete",
    shipping_method: "Delivery",
    createdAt: "2023-05-10 15:30:00",
  },
  {
    orderID: 9,
    name: "Customer 9",
    products: ["1x Product D"],
    total_price: 110.0,
    status: "On Delivery",
    shipping_method: "Delivery",
    createdAt: "2023-05-10 15:30:00",
  },
  {
    orderID: 10,
    name: "Customer 10",
    products: ["1x Product D"],
    total_price: 110.0,
    status: "For Refund",
    shipping_method: "Delivery",
    createdAt: "2023-05-10 15:30:00",
  },
  {
    orderID: 11,
    name: "Customer 11",
    products: ["1x Product B, 2x Product B"],
    total_price: 160.0,
    status: "Preparing",
    shipping_method: "Delivery",
    createdAt: "2023-05-10 15:30:00",
  },
  {
    orderID: 12,
    name: "Customer 11",
    products: ["1x Product B, 2x Product B, 1x Product C"],
    total_price: 267.5,
    status: "Complete",
    shipping_method: "Pick-Up",
    createdAt: "2023-05-10 15:30:00",
  },
];

export default orderData;