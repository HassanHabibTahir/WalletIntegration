import React from "react";
import { useContract, useSigner } from "wagmi";
import { registryAbi } from "./registeryAbi";
const UseSigner = () => {
  const { data: signer, isError, isLoading } = useSigner();
  console.log(signer, "signer data");
  const contract = useContract({
    addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
    contractInterface: registryAbi,
    signerOrProvider: signer,
  });
  console.log(contract, "contract");

  return <div>UseSigner</div>;
};

export default UseSigner;
