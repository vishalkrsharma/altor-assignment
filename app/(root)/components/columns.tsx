'use client';

import { DataColumn } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<DataColumn>[] = [
  {
    accessorKey: 'device_brand',
    header: 'Device Brand',
  },
  {
    accessorKey: 'sdk_int',
    header: 'sdk int',
  },
  {
    accessorKey: 'username',
    header: 'Username',
  },
  {
    accessorKey: 'vehicle_brand',
    header: 'Vehicle Brand',
  },
  {
    accessorKey: 'vehicle_cc',
    header: 'Vehicle CC',
  },
  {
    accessorKey: 'zone',
    header: 'Zone',
  },
];
