import React from 'react';
import { DataColumn, columns } from './columns';
import { DataTable } from '@/components/ui/data-table';

const Table = ({ data }: { data: DataColumn[] }) => {
  console.log(data);
  return (
    <DataTable
      columns={columns}
      data={data}
    />
  );
};

export default Table;
