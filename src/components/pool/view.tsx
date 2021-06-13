import React from "react";
import { Button, Popover } from "antd";
import { useOwnedPools } from "../../utils/pools";
import "./view.less";
import { SettingOutlined } from "@ant-design/icons";
import { useSwapWallet } from "../../context/wallet";
import { PoolCard } from "./card";
import { MigrationModal } from "../migration";

export const PoolOverview = () => {
  const owned = useOwnedPools();
  const { connected } = useSwapWallet();

  return (
    <>
      <div className="pool-grid">
        {owned.map((o) => (
          <PoolCard
            key={o.pool.pubkeys.account.toBase58()}
            pool={o.pool}
            account={o.account}
          />
        ))}
        {!connected && <h3>Connect to a wallet to view your liquidity.</h3>}
      </div>
      <MigrationModal />
    </>
  );
};
