import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const zones = await db.data.findMany({
      distinct: ['zone'],
      select: {
        zone: true,
      },
    });

    const zoneValues = zones.map((zone) => zone.zone);

    console.log(zoneValues);

    return NextResponse.json(zoneValues);
  } catch (error) {
    console.log('[DATA_UNIQUE-ZONE_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
