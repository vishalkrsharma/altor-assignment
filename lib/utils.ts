import { DataType } from '@/types';
import axios from 'axios';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import db from './db';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchData() {
  return await db.data.findMany();
}

export function pieChartData(data: any) {
  const zoneCounts = {};
  data.forEach((entry) => {
    const { zone } = entry;
    if (zoneCounts.hasOwnProperty(zone)) {
      zoneCounts[zone]++;
    } else {
      zoneCounts[zone] = 1;
    }
  });

  // Step 2: Create the array of JSON objects with zone and count
  const zoneCountArray = Object.entries(zoneCounts).map(([zone, count]) => ({
    zone,
    value: count,
  }));

  return zoneCountArray;
}

export function extractUnique(data: any, field: string) {
  const unique: any = new Set();
  data.forEach((entry: any) => unique.add(entry[field]));
  return [...unique];
}
