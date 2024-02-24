import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const zone = searchParams.get('zone') || undefined;
    const device_brand = searchParams.get('device_brand') || undefined;
    const vehicle_brand = searchParams.get('vehicle_brand') || undefined;
    const vehicle_cc = searchParams.get('vehicle_cc') || undefined;
    const sdk_int = searchParams.get('sdk_int') || undefined;

    let sdk_int_num = sdk_int ? parseInt(sdk_int) : undefined;

    const data = await db.data.findMany({
      where: {
        zone,
        device_brand,
        vehicle_brand,
        vehicle_cc,
        sdk_int: sdk_int_num,
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.log('[DATA_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
