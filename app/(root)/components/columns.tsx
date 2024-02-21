'use client';

import { ColumnDef } from '@tanstack/react-table';

export type DataColumn = {
  device_brand: string;
  sdk_int: number;
  username: string;
  vehicle_brand: string;
  vehicle_cc: string;
  zone: string;
};

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
