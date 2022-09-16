import React from "react";
import { useAccount, useNetwork } from "wagmi";
const Profile = () => {
  const { chain, chains } = useNetwork();
  console.log(chain, "chain data");
  // console.log(chains);
  const { address, isConnecting, isDisconnected } = useAccount();
  if (isConnecting) return <div>Connecting...</div>;
  if (isDisconnected) return <div>Disconnected</div>;
  return <div>Connected Wallet: {address}</div>;
};

export default Profile;
