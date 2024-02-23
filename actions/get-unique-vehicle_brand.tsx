import db from '@/lib/db';

export const getUniqueVehicleBrand = async () => {
  const unique = await db.data.findMany({
    distinct: ['vehicle_brand'],
    select: {
      vehicle_brand: true,
    },
  });
  const res = unique.map((item) => item.vehicle_brand);

  return res;
};
