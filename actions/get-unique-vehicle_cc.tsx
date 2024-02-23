import db from '@/lib/db';

export const getUniqueVehicleCC = async () => {
  const unique = await db.data.findMany({
    distinct: ['vehicle_cc'],
    select: {
      vehicle_cc: true,
    },
  });
  const res = unique.map((item) => item.vehicle_cc);

  return res;
};
