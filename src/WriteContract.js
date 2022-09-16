import React from "react";
import { parseUnits } from "ethers/lib/utils";
import { registryAbi } from "./registeryAbi";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  useContractRead,
} from "wagmi";
import { ethers } from "ethers";
const WriteContract = () => {
  const { data: newdata } = useContractRead({
    addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
    contractInterface: registryAbi,
    functionName: "BTC",
  });

  console.log(newdata, "newdata");
  const val = newdata;
  const { config } = usePrepareContractWrite({
    addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
    contractInterface: registryAbi,
    functionName: "changeBTC",
    args: val,
    overrides: {
      //   value: ethers.utils.parseUnits("0.01"),
      gasLimit: "21000000",
    },
  });

  const { data, write } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  console.log(data, "myData");
  return (
    <button disabled={!write || isLoading} onClick={() => write()}>
      {isLoading ? "Writing..." : "write"}
    </button>
  );
};

export default WriteContract;
