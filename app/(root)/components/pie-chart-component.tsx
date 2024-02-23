'use client';

import { COLORS } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

const PieChartComponent = ({ data }: { data: any }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <PieChart
      width={400}
      height={400}
    >
      <Tooltip />
      <Pie
        dataKey='value'
        startAngle={360}
        endAngle={0}
        data={data}
        cx='50%'
        cy='50%'
        outerRadius={80}
        fill='#8884d8'
        label
      >
        {data.map((entry: any, index: number) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            onClick={() => {
              console.log('aa');
            }}
          />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChartComponent;
