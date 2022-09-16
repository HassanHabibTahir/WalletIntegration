import React from "react";
import { useToken } from "wagmi";
const UseToken = () => {
  const { data, isError, isLoading } = useToken({
    address: "0x847b500692268587d7DB3793F88e07ff52849376",
  });
  console.log(data, "data");
  if (isLoading) return <div>Fetching token…</div>;
  if (isError) return <div>Error fetching token</div>;
  return <div>Token: {data?.symbol}</div>;
};

export default UseToken;
