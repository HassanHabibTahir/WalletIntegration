import React from "react";
import { useFeeData } from "wagmi";
const UseFeeData = () => {
  const { data, isError, isLoading } = useFeeData();

  if (isLoading) return <div>Fetching fee data…</div>;
  if (isError) return <div>Error fetching fee data</div>;
  return <div>Fee data: {JSON.stringify(data?.formatted)}</div>;
};

export default UseFeeData;
