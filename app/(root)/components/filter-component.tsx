import React from 'react';
import Filter from './filter';

import { getUniqueZone } from '@/actions/get-unique-zone';
import { getUniqueVehicleBrand } from '@/actions/get-unique-vehicle_brand';
import { getUniqueVehicleCC } from '@/actions/get-unique-vehicle_cc';
import { getUniqueDeviceBrand } from '@/actions/get-unique-device_brand';
import { getUniqueSdkInt } from '@/actions/get-unique-sdk_int';
import DownloadButton from './download-button';
import { DataType } from '@/types';

const FilterComponent = async ({ data }: { data: DataType[] }) => {
  const uniqueZones = await getUniqueZone();
  const uniqueDeviceBrands = await getUniqueDeviceBrand();
  const uniqueVehicleBrands = await getUniqueVehicleBrand();
  const uniqueVehicleCC = await getUniqueVehicleCC();
  const uniqueSdkInt = await getUniqueSdkInt();

  return (
    <div className='w-1/4 border-r-[1px]'>
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
      <DownloadButton data={data} />
    </div>
  );
};

export default FilterComponent;
