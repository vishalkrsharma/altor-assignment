import { DataColumn } from '@/app/(root)/components/columns';
import qs from 'query-string';

const URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/data`;

interface Query {
  zone?: string;
  device_brand?: string;
  vehicle_brand?: string;
  vehicle_cc?: string;
  sdk_int?: number;
}

export const getTableData = async (query: Query): Promise<DataColumn[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      zone: query.zone,
      device_brand: query.device_brand,
      vehicle_brand: query.vehicle_brand,
      vehicle_cc: query.vehicle_cc,
      sdk_int: query.sdk_int,
    },
  });

  const res = await fetch(url);
  const data = res.json();
  console.log(data);

  return data;
};
