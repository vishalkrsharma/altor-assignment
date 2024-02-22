import Table from './components/table';
import { DataColumn } from './components/columns';
import DownloadButton from './components/download-button';
import { Separator } from '@/components/ui/separator';
import Charts from './components/charts';
import { extractUnique, fetchData, pieChartData } from '@/lib/utils';
import { getTableData } from '@/actions/get-table-data';
import Filter from './components/filter';
import { DataType } from '@/types';

const RootPage = async ({
  searchParams,
}: {
  searchParams: {
    zone: string;
    device_brand: string;
    vehicle_brand: string;
    vehicle_cc: string;
    sdk_int: number;
  };
}) => {
  const data = await fetchData();

  const uniqueZones = extractUnique(data, 'zone');
  const uniqueDeviceBrands = extractUnique(data, 'device_brand');
  const uniqueVehicleBrands = extractUnique(data, 'vehicle_brand');
  const uniqueVehicleCC = extractUnique(data, 'vehicle_cc');
  const uniqueSdkInt = extractUnique(data, 'sdk_int');

  const tableData: DataType[] = await getTableData({
    zone: searchParams?.zone,
    device_brand: searchParams?.device_brand,
    vehicle_brand: searchParams?.vehicle_brand,
    vehicle_cc: searchParams?.vehicle_cc,
    sdk_int: searchParams?.sdk_int,
  });

  const formattedData: DataColumn[] = tableData.map((item: DataColumn) => ({
    username: item.username,
    zone: item.zone,
    device_brand: item.device_brand,
    sdk_int: item.sdk_int,
    vehicle_brand: item.vehicle_brand,
    vehicle_cc: item.vehicle_cc,
  }));

  const zoneCountArray = pieChartData(data);

  return (
    <div className='px-4'>
      <h1 className='font-semibold text-4xl text-center py-2'>Altor Assignment</h1>
      <Separator />
      <div className='flex space-x-4'>
        <div className='w-1/4'>
          <Filter
            valueKey='zone'
            name='zone'
            data={uniqueZones}
          />
          <Filter
            valueKey='device_brand'
            name='device_brand'
            data={uniqueDeviceBrands}
          />
          <Filter
            valueKey='vehicle_brand'
            name='vehicle_brand'
            data={uniqueVehicleBrands}
          />
          <Filter
            valueKey='vehicle_cc'
            name='vehicle_cc'
            data={uniqueVehicleCC}
          />
          <Filter
            valueKey='sdk_int'
            name='sdk_int'
            data={uniqueSdkInt}
          />
          <DownloadButton data={tableData} />
        </div>
        <div className='w-3/4'>
          <Table data={formattedData} />
        </div>
      </div>
      <Separator className='mb-4' />
      <Charts data={zoneCountArray} />
    </div>
  );
};

export default RootPage;
