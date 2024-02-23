'use client';

import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const StackBarChartComponent = ({ data }: { data: any }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <BarChart
      width={500}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar
        dataKey='vehicle_cc'
        stackId='a'
        fill='#8884d8'
      />
      <Bar
        dataKey='sdk_int'
        stackId='a'
        fill='#82ca9d'
      />
    </BarChart>
  );
};

export default StackBarChartComponent;
