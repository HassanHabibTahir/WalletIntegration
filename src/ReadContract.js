import { parseUnits } from "ethers/lib/utils";
import React, { useState } from "react";

import {
  useContract,
  useContractRead,
  useContractReads,
  useAccount,
} from "wagmi";
import { registryAbi } from "./registeryAbi";

const ReadContract = () => {
  const [newdData, setNewData] = useState([]);
  const { address } = useAccount();
  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "BTC",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "BUSD",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "ETH",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "SNOW",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "amountRaisedBNB",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "amountRaisedBTC",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "amountRaisedBUSD",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "amountRaisedETH",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "bnbToToken",
        args: parseUnits("1"),
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "btcToToken",
        args: parseUnits("1"),
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "busdToToken",
        args: parseUnits("1"),
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "ethToToken",
        args: parseUnits("1"),
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "contractBalanceBTC",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "contractBalancebnb",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "contractBalanceBUSD",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "contractBalanceETH",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "getContractTokenApproval",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "getCurrentTime",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "getLatestPricebnb",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "getLatestPricebtc",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "getLatestPriceeth",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "getProgress",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "owner",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "preSaleEndTime",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "preSaleStartTime",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "priceFeedbnb",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "priceFeedbtc",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "priceFeedeth",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "soldToken",
      },

      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "tokenPerUsd",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "totalSupply",
      },
      {
        addressOrName: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
        contractInterface: registryAbi,
        functionName: "users",
        args: "0x61e15eC83e462266F8842336b2ebB1c831A5a703",
      },
    ],
  });
  console.log(data, "read data");

  if (data) {
    for (const [key, value] of Object.entries(data)) {
      // console.log(`${key}: ${value}`);
    }
  }
  return (
    <div>
      {/* {data &&
        Object.keys(data)?.map((value, index) => {
          return (
            <div key={index}>
              <h2>{value}</h2>

              <hr />
            </div>
          );
        })} */}
    </div>
  );
};

export default ReadContract;
