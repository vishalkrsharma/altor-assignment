'use client';

import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, Tooltip, XAxis, YAxis } from 'recharts';

const BarChartComponent = ({ data }: { data: any }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <BarChart
      width={600}
      height={400}
      data={data}
      margin={{
        top: 5,
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
        dataKey='value'
        fill='#8884d8'
        activeBar={
          <Rectangle
            fill='pink'
            stroke='blue'
          />
        }
      />
    </BarChart>
  );
};

export default BarChartComponent;
