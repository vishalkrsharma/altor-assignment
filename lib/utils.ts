import { DataColumn, DataType } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pieChartData(data: DataType[]) {
  const zoneCounts: { [zone: string]: number } = {};
  data.forEach((entry: DataType) => {
    const { zone } = entry;
    if (zoneCounts.hasOwnProperty(zone)) {
      zoneCounts[zone]++;
    } else {
      zoneCounts[zone] = 1;
    }
  });

  const zoneCountArray = Object.entries(zoneCounts).map(([zone, count]) => ({
    name: zone,
    value: count,
  }));

  return zoneCountArray;
}

export const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export function formatChartData(data: DataColumn[], field: string, zone: string) {
  const filteredData = zone ? data.filter((obj) => obj.zone === zone) : data;

  const fieldValueCounts: { [key: string]: number } = {};
  filteredData.forEach((obj) => {
    const fieldValue = obj[field as keyof DataColumn];
    fieldValueCounts[fieldValue] = (fieldValueCounts[fieldValue] || 0) + 1;
  });

  const result = Object.keys(fieldValueCounts).map((value) => {
    return { name: value, value: fieldValueCounts[value] };
  });

  return result;
}

export function calculateVehicleDistribution(data: DataColumn[], zone: string) {
  const filteredData = data.filter((entry) => entry.zone === zone);

  const distribution: { [key: string]: number } = {};
  filteredData.forEach((entry) => {
    const brand = entry.vehicle_brand;
    if (distribution[brand]) {
      distribution[brand]++;
    } else {
      distribution[brand] = 1;
    }
  });

  const distributionArray = Object.keys(distribution).map((key) => ({
    name: key,
    value: distribution[key],
  }));

  return distributionArray;
}

export function calculateSdkIntDistributionByZone(data: DataColumn[], zones: string) {
  const filteredData = data.filter((entry) => zones.includes(entry.zone));
  const distribution: { [key: number]: number } = {};

  filteredData.forEach((entry) => {
    const sdkInt = entry.sdk_int;
    if (distribution[sdkInt]) {
      distribution[sdkInt]++;
    } else {
      distribution[sdkInt] = 1;
    }
  });

  const distributionArray = Object.keys(distribution).map((key) => ({
    name: parseInt(key),
    value: distribution[parseInt(key)],
  }));

  return distributionArray;
}

export function generateStackChartData(data: DataColumn[]) {
  const zoneData: { [key: string]: { vehicle_cc: number; sdk_int: number } } = {};

  data.forEach((obj) => {
    const { zone, vehicle_cc, sdk_int } = obj;

    if (!zoneData[zone]) {
      zoneData[zone] = {
        vehicle_cc: 0,
        sdk_int: 0,
      };
    }

    zoneData[zone].vehicle_cc++;
    zoneData[zone].sdk_int += sdk_int;
  });

  const resultArray = Object.keys(zoneData).map((zone) => ({
    name: zone,
    vehicle_cc: zoneData[zone].vehicle_cc,
    sdk_int: zoneData[zone].sdk_int,
  }));

  return resultArray;
}
