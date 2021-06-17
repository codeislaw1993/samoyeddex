import React from "react";
import { useOwnedPools } from "../../utils/pools";
import "./view.less";
import { useWallet } from "../../utils/wallet";
import { PoolCard } from "./card";
import { MigrationModal } from "../migration";
import WalletConnect from "../WalletConnect";
import {Card} from "antd";

export const PoolOverview = () => {
  const owned = useOwnedPools();
  const { connected } = useWallet();

  return (
    <>
      <div className="pool-grid" style={{marginTop: '50px'}}>
        {owned.map((o) => (
          <PoolCard
            key={o.pool.pubkeys.account.toBase58()}
            pool={o.pool}
            account={o.account}
          />
        ))}
        {!connected &&
            <Card style={{marginTop: '50px'}}>
                <div style={{margin: '50px'}}>
                    <b>Please connect your wallet to view your liquidity.</b>
                    <WalletConnect />
                </div>
            </Card>
        }
      </div>
      <MigrationModal />
    </>
  );
}
