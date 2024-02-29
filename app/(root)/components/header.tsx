import React from 'react';
import MobileFilterComponent from './mobile-filter-component';
import { DataType } from '@/types';

interface HeaderProps {
  data: DataType[];
  uniqueZones: string[];
  uniqueDeviceBrands: string[];
  uniqueVehicleBrands: string[];
  uniqueVehicleCC: string[];
  uniqueSdkInt: string[];
}

const Header = ({ data, uniqueZones, uniqueDeviceBrands, uniqueVehicleBrands, uniqueVehicleCC, uniqueSdkInt }: HeaderProps) => {
  return (
    <div className='lg:text-center py-2 max-lg:py-3 fixed top-0 left-0 right-0 flex justify-center max-lg:justify-start items-center'>
      <div className='font-medium text-4xl max-lg:text-2xl flex justify-center items-center max-lg:ml-4'>Altor Assignment</div>
      <MobileFilterComponent
        data={data}
        uniqueZones={uniqueZones}
        uniqueDeviceBrands={uniqueDeviceBrands}
        uniqueVehicleBrands={uniqueVehicleBrands}
        uniqueVehicleCC={uniqueVehicleCC}
        uniqueSdkInt={uniqueSdkInt}
      />
    </div>
  );
};

export default Header;
