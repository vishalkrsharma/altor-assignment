'use client';

import { useEffect, useState } from 'react';
import CsvDownloadButton from 'react-json-to-csv';

import { DataType } from '@/types';
import { Button } from '@/components/ui/button';

const DownloadButton = ({ data }: { data: DataType[] }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className='flex space-x-4 justify-start items-center'>
      <div>Download as CSV:</div>

      <CsvDownloadButton
        className='text-white bg-black py-2 px-3 rounded-md hover:text-gray-300 font-medium transition-all'
        data={data}
      />
    </div>
  );
};

export default DownloadButton;
