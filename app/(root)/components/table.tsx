import { DataColumn } from '@/types';
import { columns } from './columns';
import { DataTable } from '@/components/ui/data-table';

const Table = ({ data }: { data: DataColumn[] }) => {
  return (
    <DataTable
      columns={columns}
      data={data}
    />
  );
};

export default Table;
