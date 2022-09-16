import React from "react";
import { useToken } from "wagmi";
import { erc721ABI } from "wagmi";
const UseToken = () => {
  const { data, isError, isLoading } = useToken({
    address: "0x968F6d391c8cFa96a2579BE8ED13329ffB5f46e4",
  });
  console.log(data, "data");
  if (isLoading) return <div>Fetching token…</div>;
  if (isError) return <div>Error fetching token</div>;
  return <div>Token: {data?.symbol}</div>;
};

export default UseToken;
