'use client';

import qs from 'query-string';
import { useRouter, useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { cn, extractUnique } from '@/lib/utils';
import { DataType } from '@/types';

interface FilterProps {
  data: string[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className='my-2'>
      <h3 className='font-semibold'>{name}</h3>
      <div className='flex flex-wrap gap-2'>
        {data.map((filter) => (
          <div
            key={filter}
            className='flex items-center'
          >
            <Button
              className={cn(
                'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300 hover:bg-gray-200',
                selectedValue === filter && 'bg-black text-white hover:bg-gray-800'
              )}
              onClick={() => onClick(filter)}
            >
              {filter}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
