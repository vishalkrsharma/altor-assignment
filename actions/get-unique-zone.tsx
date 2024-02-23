import db from '@/lib/db';

export const getUniqueZone = async () => {
  const unique = await db.data.findMany({
    distinct: ['zone'],
    select: {
      zone: true,
    },
  });
  const res = unique.map((item) => item.zone);

  return res;
};
