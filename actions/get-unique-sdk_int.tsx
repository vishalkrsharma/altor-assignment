import db from '@/lib/db';

export const getUniqueSdkInt = async () => {
  const unique = await db.data.findMany({
    distinct: ['sdk_int'],
    select: {
      sdk_int: true,
    },
  });
  const res = unique.map((item) => item.sdk_int.toString());

  return res;
};
