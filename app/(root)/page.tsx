import { DataType } from '@/types';
import axios from 'axios';
import Table from './components/table';
import { DataColumn } from './components/columns';
import DownloadButton from './components/download-button';
import { Separator } from '@/components/ui/separator';
import Filter from './components/filter';

const RootPage = async () => {
  const res = await axios.get('http://20.121.141.248:5000/assignment/feb/sde_fe');

  const data: DataType[] = res.data.data;

  const formattedData: DataColumn[] = data.map((item: DataColumn) => ({
    username: item.username,
    zone: item.zone,
    device_brand: item.device_brand,
    sdk_int: item.sdk_int,
    vehicle_brand: item.vehicle_brand,
    vehicle_cc: item.vehicle_cc,
  }));

  const zones: string[] = formattedData.map((item: DataColumn) => item.zone);

  return (
    <div className='px-4'>
      <h1 className='font-semibold text-4xl text-center py-2'>Altor Assignment</h1>
      <Separator />
      <div className='flex justify-center items-center'>
        {/* <div className='hidden lg:block'>
          <Filter
            valueKey='zone'
            name='Zones'
            data={zones}
          />
        </div> */}
        <Table data={formattedData} />
      </div>
      <Separator className='mb-4' />
      <DownloadButton data={data} />
    </div>
  );
};

export default RootPage;
