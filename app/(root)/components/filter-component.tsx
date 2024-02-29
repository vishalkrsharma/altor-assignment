import React from 'react';
import Filter from './filter';
import DownloadButton from './download-button';
import { DataType } from '@/types';
import MobileFilterComponent from './mobile-filter-component';

interface FilterComponentProps {
  data: DataType[];
  uniqueZones: string[];
  uniqueDeviceBrands: string[];
  uniqueVehicleBrands: string[];
  uniqueVehicleCC: string[];
  uniqueSdkInt: string[];
}

const FilterComponent = async ({ data, uniqueZones, uniqueDeviceBrands, uniqueVehicleBrands, uniqueVehicleCC, uniqueSdkInt }: FilterComponentProps) => {
  return (
    <>
      <div className='w-1/5 border-r-[1px] hidden lg:block max-h-screen overflow-y-auto'>
        <div className='text-xl font-medium mt-2'>Table filters</div>
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
    </>
  );
};

export default FilterComponent;
