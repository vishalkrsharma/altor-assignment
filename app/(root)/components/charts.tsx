'use client';

import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Charts = ({ data }: { data: any }) => {
  return (
    <ResponsiveContainer
      width='100%'
      height={350}
    >
      <>
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
          />
        </PieChart>
        <BarChart
          width={500}
          height={300}
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
      </>
    </ResponsiveContainer>
  );
};

export default Charts;
