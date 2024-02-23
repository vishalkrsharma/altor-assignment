import db from '@/lib/db';

export const getUniqueDeviceBrand = async () => {
  const unique = await db.data.findMany({
    distinct: ['device_brand'],
    select: {
      device_brand: true,
    },
  });
  const res = unique.map((item) => item.device_brand);

  return res;
};
