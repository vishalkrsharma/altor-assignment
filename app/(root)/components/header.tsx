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
    <div className='font-medium text-4xl text-center py-2 fixed top-0 left-0 right-0 flex justify-center items-center'>
      <div>Altor Assignment</div>
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
