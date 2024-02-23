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
import { getUniqueZone } from '@/actions/get-unique-zone';
import { getUniqueDeviceBrand } from '@/actions/get-unique-device_brand';
import { getUniqueVehicleBrand } from '@/actions/get-unique-vehicle_brand';
import { getUniqueVehicleCC } from '@/actions/get-unique-vehicle_cc';
import { getUniqueSdkInt } from '@/actions/get-unique-sdk_int';

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

  const uniqueZones = await getUniqueZone();
  const uniqueDeviceBrands = await getUniqueDeviceBrand();
  const uniqueVehicleBrands = await getUniqueVehicleBrand();
  const uniqueVehicleCC = await getUniqueVehicleCC();
  const uniqueSdkInt = await getUniqueSdkInt();

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
      <Header
        data={data}
        uniqueZones={uniqueZones}
        uniqueDeviceBrands={uniqueDeviceBrands}
        uniqueVehicleBrands={uniqueVehicleBrands}
        uniqueVehicleCC={uniqueVehicleCC}
        uniqueSdkInt={uniqueSdkInt}
      />
      <Separator className='mt-14' />
      <div className='flex lg:space-x-4'>
        <FilterComponent
          data={data}
          uniqueZones={uniqueZones}
          uniqueDeviceBrands={uniqueDeviceBrands}
          uniqueVehicleBrands={uniqueVehicleBrands}
          uniqueVehicleCC={uniqueVehicleCC}
          uniqueSdkInt={uniqueSdkInt}
        />
        <div className='w-4/5 max-h-screen overflow-y-auto pb-14 mx-auto'>
          <Table data={formattedData} />
          <Separator />
          {Object.keys(searchParams).length === 0 && (
            <div className='text-center pb-4'>
              <div className='text-xl font-medium text-center my-4'>Charts on all zones</div>
              <div className='2xl:flex justify-evenly items-center flex-wrap max-2xl:inline-block'>
                <div className='border rounded-md p-2 flex justify-center items-center'>
                  <PieChartComponent data={zoneCountArray} />
                </div>
                <div className='border rounded-md p-2 max-2xl:mt-4'>
                  <BarChartComponent data={zoneCountArray} />
                </div>
                <div className='border rounded-md p-2 mt-4'>
                  <StackBarChartComponent data={stackdata} />
                </div>
              </div>
            </div>
          )}
          {searchParams.zone && (
            <div className='pb-4 flex justify-center items-center flex-col'>
              <div className='text-xl font-medium text-center my-4'>Charts based on zone filters</div>
              <div className='2xl:flex justify-evenly items-center text-center mb-4 max-2xl:inline-block flex-wrap space-x-4'>
                <div className='border rounded-md p-2'>
                  <div>Device Brand distribution over the zone(s)</div>
                  <PieChartComponent data={device_brandArray} />
                </div>
                <div className='border rounded-md p-2 max-2xl:mt-4'>
                  <div>Vehicle Brand distribution over the zone(s)</div>
                  <PieChartComponent data={vehicle_brandArray} />
                </div>
                <div className='border rounded-md p-2 max-2xl:mt-4'>
                  <div>Vehicle CC distribution over the zone(s)</div>
                  <PieChartComponent data={vehicle_ccArray} />
                </div>
              </div>
              <div className='2xl:flex justify-evenly items-center text-center space-x-4 max-2xl:inline-block '>
                <div className='border rounded-md p-2'>
                  <div>Vehicle distribution over vehicle brands based on zone(s)</div>
                  <BarChartComponent data={vehicleDistribution} />
                </div>
                <div className='border rounded-md p-2 max-3xl:space-y-4'>
                  <div>Devices distribution over handset SDK int values based on zone(s)</div>
                  <BarChartComponent data={sdkIntDistribution} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RootPage;
