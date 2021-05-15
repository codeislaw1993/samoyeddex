import React, { useState } from 'react';
import { ConfigProvider, Table } from 'antd';

export default function DataTable({
  dataSource,
  columns,
  emptyLabel = 'No data',
  pagination = false,
  loading = false,
  pageSize = 10,
}) {
  const customizeRenderEmpty = () => (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {emptyLabel}
    </div>
  );

  const [dimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const width = dimensions?.width;
  if (width < 1000) {
    return (
      <ConfigProvider renderEmpty={customizeRenderEmpty}>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={pagination ? { pagination: true, pageSize } : false}
          loading={loading}
          scroll={{ y: true }}
        />
      </ConfigProvider>
    );
  } else {
    return (
      <ConfigProvider renderEmpty={customizeRenderEmpty}>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={pagination ? { pagination: true, pageSize } : false}
          loading={loading}
        />
      </ConfigProvider>
    );
  }
}
