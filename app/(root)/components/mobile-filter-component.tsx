'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Dialog } from '@headlessui/react';

import { IconButton } from '@/components/ui/icon-button';
import { Button } from '@/components/ui/button';

import Filter from './filter';
import DownloadButton from './download-button';
import { DataType } from '@/types';

interface MobileFilterComponentProps {
  data: DataType[];
  uniqueZones: string[];
  uniqueDeviceBrands: string[];
  uniqueVehicleBrands: string[];
  uniqueVehicleCC: string[];
  uniqueSdkInt: string[];
}

const MobileFilterComponent = ({ data, uniqueZones, uniqueDeviceBrands, uniqueVehicleBrands, uniqueVehicleCC, uniqueSdkInt }: MobileFilterComponentProps) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={onOpen}
        className='flex items-center gap-x-2 lg:hidden absolute right-2'
      >
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        as='div'
        className='relative z-40 lg:hidden'
        onClose={onClose}
      >
        <div className='fixed inset-0 bg-black bg-opacity-25' />
        <div className='fixed inset-0 z-40 flex'>
          <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>
            <div className='flex items-center justify-between px-4'>
              <div className='text-xl font-medium mt-2'>Table filters</div>
              <IconButton
                icon={<X size={15} />}
                onClick={onClose}
              />
            </div>
            <div className='p-4'>
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
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilterComponent;
