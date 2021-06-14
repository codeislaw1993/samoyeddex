import React from "react";
import { useOwnedPools } from "../../utils/pools";
import "./view.less";
import { useWallet } from "../../utils/wallet";
import { PoolCard } from "./card";
import { MigrationModal } from "../migration";

export const PoolOverview = () => {
  const owned = useOwnedPools();
  const { connected } = useWallet();

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
