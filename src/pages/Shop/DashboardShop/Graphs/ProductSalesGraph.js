import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    Total_Sales: 4000,
    Products_Sold: 2400,
  },
  {
    name: "Tuesday",
    Total_Sales: 3000,
    Products_Sold: 1398,
  },
  {
    name: "Wednesday",
    Total_Sales: 2000,
    Products_Sold: 9800,
  },
  {
    name: "Thursday",
    Total_Sales: 2780,
    Products_Sold: 3908,
  },
  {
    name: "Friday",
    Total_Sales: 1890,
    Products_Sold: 4800,
  },
  {
    name: "Saturday",
    Total_Sales: 2390,
    Products_Sold: 3800,
  },
  {
    name: "Sunday",
    Total_Sales: 3490,
    Products_Sold: 4300,
  },
];

export default class ProductSalesGraph extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Total_Sales"
            stroke="#6E5FDE"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Products_Sold" stroke="#F18701" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
