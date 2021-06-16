import React, {
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Button,
  Table,
  Tooltip,
  Typography,
} from "antd";
import {
  TableOutlined,
} from "@ant-design/icons";
import { PoolIcon } from "../tokenIcon";
import { Input } from "antd";
import "./styles.less";
import { useEnrichedPools } from "../../context/market";
import { usePools } from "../../utils/pools";
import {
  formatNumber,
  formatPct,
  formatUSD,
  useLocalStorageState,
} from "../../utils/utils";
import { PoolAddress } from "../pool/address";
import { MigrationModal } from "../migration";

const { Text } = Typography;

const { Search } = Input;

const FlashText = (props: { text: string; val: number }) => {
  const [activeClass, setActiveClass] = useState("");
  const [value] = useState(props.val);
  useEffect(() => {
    if (props.val !== value) {
      setActiveClass(props.val > value ? "flash-positive" : "flash-negative");

      setTimeout(() => setActiveClass(""), 200);
    }
  }, [props.text, props.val, value]);

  return <span className={activeClass}>{props.text}</span>;
};

interface Totals {
  liquidity: number;
  volume: number;
  fees: number;
}

const DEFAULT_DISPLAY_TYPE = "Table";

export const ChartsView = React.memo(() => {
  const [search, setSearch] = useState<string>("");
  const { pools } = usePools();
  const enriched = useEnrichedPools(pools);

  const [infoDisplayType, setInfoDisplayType] = useLocalStorageState(
    "infoDisplayType",
    DEFAULT_DISPLAY_TYPE
  );

  let searchRegex: RegExp | undefined = useMemo(() => {
    try {
      return new RegExp(search, "i");
    } catch {
      // ignore bad regex typed by user
    }
  }, [search]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render(text: string, record: any) {
        return {
          props: {
            style: {},
          },
          children: (
            <div style={{ display: "flex" }}>
              <PoolIcon mintA={record.mints[0]} mintB={record.mints[1]} />
              <a href={record.link} target="_blank" rel="noopener noreferrer">
                {text}
              </a>
            </div>
          ),
        };
      },
    },
    {
      title: "Liquidity",
      dataIndex: "liquidity",
      key: "liquidity",
      render(text: string, record: any) {
        return {
          props: {
            style: { textAlign: "right" },
          },
          children: (
            <div>
              <div>{formatUSD.format(record.liquidity)}</div>
              <div>
                <Text type="secondary" style={{ fontSize: 11 }}>
                  {formatNumber.format(record.liquidityA)} {record.names[0]}
                </Text>
              </div>
              <div>
                <Text type="secondary" style={{ fontSize: 11 }}>
                  {formatNumber.format(record.liquidityB)} {record.names[1]}
                </Text>
              </div>
            </div>
          ),
        };
      },
      sorter: (a: any, b: any) => a.liquidity - b.liquidity,
      defaultSortOrder: "descend" as any,
    },
    {
      title: "Supply",
      dataIndex: "supply",
      key: "supply",
      render(text: string, record: any) {
        return {
          props: {
            style: { textAlign: "right" },
          },
          children: <FlashText text={text} val={record.supply} />,
        };
      },
      sorter: (a: any, b: any) => a.supply - b.supply,
    },
    {
      title: "Volume (24h)",
      dataIndex: "volume",
      key: "volume",
      render(text: string, record: any) {
        return {
          props: {
            style: { textAlign: "right" },
          },
          children: (
            <FlashText
              text={formatUSD.format(record.volume24h)}
              val={record.volume24h}
            />
          ),
        };
      },
      sorter: (a: any, b: any) => a.volume24h - b.volume24h,
    },
    {
      title: "Fees (24h)",
      dataIndex: "fees24h",
      key: "fees24h",
      render(text: string, record: any) {
        return {
          props: {
            style: { textAlign: "right" },
          },
          children: (
            <FlashText
              text={formatUSD.format(record.fees24h)}
              val={record.fees24h}
            />
          ),
        };
      },
      sorter: (a: any, b: any) => a.fees24h - b.fees24h,
    },
    {
      title: "APY",
      dataIndex: "apy",
      key: "apy",
      render(text: string, record: any) {
        return {
          props: {
            style: { textAlign: "right" },
          },
          children: formatPct.format(record.apy),
        };
      },
      sorter: (a: any, b: any) => a.apy - b.apy,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render(text: string, record: any) {
        return {
          props: {
            style: { fontFamily: "monospace" } as React.CSSProperties,
          },
          children: <PoolAddress pool={record.raw} />,
        };
      },
    },
  ];

  return (
    <>
      <div className="info-header">
        <Search
          className="search-input"
          placeholder="Filter"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onSearch={(value) => setSearch(value)}
          style={{ width: 200 }}
        />
        <Tooltip title="Show as table">
          <Button
            size="small"
            type={infoDisplayType === "Table" ? "primary" : "text"}
            onClick={() => setInfoDisplayType("Table")}
            icon={<TableOutlined />}
          />
        </Tooltip>
      </div>
        <Table
          dataSource={enriched.filter(
            (row) => !search || !searchRegex || searchRegex.test(row.name)
          )}
          style={{margin: '15px', padding: '15px', background: 'unset'}}
          columns={columns}
          size="small"
          pagination={{ pageSize: 10 }}
        />
      <MigrationModal />
    </>
  );
});
