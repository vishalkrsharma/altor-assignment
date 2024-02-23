import Table from './components/table';
import { Separator } from '@/components/ui/separator';
import { calculateSdkIntDistributionByZone, calculateVehicleDistribution, formatChartData, generateStackChartData, pieChartData } from '@/lib/utils';
import { getData } from '@/actions/get-data';
import { DataColumn, DataType } from '@/types';
import PieChartComponent from './components/pie-chart-component';
import BarChartComponent from './components/bar-chart-component';
import Header from './components/header';
import StackBarChartComponent from './components/stack-bar-chart-component';
import FilterComponent from './components/filter-component';

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
  const data: DataType[] = await getData({
    zone: searchParams?.zone,
    device_brand: searchParams?.device_brand,
    vehicle_brand: searchParams?.vehicle_brand,
    vehicle_cc: searchParams?.vehicle_cc,
    sdk_int: searchParams?.sdk_int,
  });

  const formattedData: DataColumn[] = data.map((item: DataColumn) => ({
    username: item.username,
    zone: item.zone,
    device_brand: item.device_brand,
    sdk_int: item.sdk_int,
    vehicle_brand: item.vehicle_brand,
    vehicle_cc: item.vehicle_cc,
  }));

  const zoneCountArray = pieChartData(data);
  const stackdata = generateStackChartData(formattedData);
  let device_brandArray;
  let vehicle_brandArray;
  let vehicle_ccArray;
  let vehicleDistribution;
  let sdkIntDistribution;
  if (searchParams.zone) {
    device_brandArray = formatChartData(formattedData, 'device_brand', searchParams.zone);
    vehicle_brandArray = formatChartData(formattedData, 'vehicle_brand', searchParams.zone);
    vehicle_ccArray = formatChartData(formattedData, 'vehicle_cc', searchParams.zone);
    vehicleDistribution = calculateVehicleDistribution(formattedData, searchParams.zone);
    sdkIntDistribution = calculateSdkIntDistributionByZone(formattedData, searchParams.zone);
  }

  return (
    <div className='px-4 max-h-screen overflow-hidden relative'>
      <Header />
      <Separator className='mt-14' />
      <div className='flex space-x-4'>
        <FilterComponent data={data} />
        <div className='w-3/4 max-h-screen overflow-y-auto pb-14'>
          <Table data={formattedData} />
          <Separator />
          {Object.keys(searchParams).length === 0 && (
            <div className='text-center pb-4'>
              <div className='text-xl font-medium text-center my-4'>Charts on all zones</div>
              <div className='flex justify-evenly items-center'>
                <div className='border rounded-md p-2'>
                  <PieChartComponent data={zoneCountArray} />
                </div>
                <div className='border rounded-md p-2'>
                  <BarChartComponent data={zoneCountArray} />
                </div>
              </div>
            </div>
          )}
          {searchParams.zone && (
            <div className='pb-4'>
              <div className='text-xl font-medium text-center my-4'>Charts based on zone filters</div>
              <div className='flex justify-evenly items-center text-center mb-4'>
                <div className='border rounded-md p-2'>
                  <div>Device Brand distribution over the zone(s)</div>
                  <PieChartComponent data={device_brandArray} />
                </div>
                <div className='border rounded-md p-2'>
                  <div>Vehicle Brand distribution over the zone(s)</div>
                  <PieChartComponent data={vehicle_brandArray} />
                </div>
                <div className='border rounded-md p-2'>
                  <div>Vehicle CC distribution over the zone(s)</div>
                  <PieChartComponent data={vehicle_ccArray} />
                </div>
              </div>
              <div className='flex justify-evenly items-center text-center'>
                <div className='border rounded-md p-2'>
                  <div>Vehicle distribution over vehicle brands based on zone(s)</div>
                  <BarChartComponent data={vehicleDistribution} />
                </div>
                <div className='border rounded-md p-2'>
                  <div>Devices distribution over handset SDK int values based on zone(s)</div>
                  <BarChartComponent data={sdkIntDistribution} />
                </div>
              </div>
            </div>
          )}
          <StackBarChartComponent data={stackdata} />
        </div>
      </div>
    </div>
  );
};

export default RootPage;
