'use client';

import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import NextButton from '@/src/components/Button';
import { Option } from '@/src/components/CustomSelect';
import SelectSkeleton from '@/src/components/SelectSkeleton';

const CustomReactSelect = dynamic(
  () => import('@/src/components/CustomSelect'),
  { ssr: false },
);

interface VehicleMake {
  MakeId: number;
  MakeName: string;
}

export default function HomePage() {
  const [makes, setMakes] = useState<VehicleMake[]>([]);
  const [selectedMake, setSelectedMake] = useState<Option | null>(null);
  const [selectedYear, setSelectedYear] = useState<Option | null>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_VPIC_API_URL;
    if (!apiUrl) {
      console.error('API URL is not defined in environment variables.');
      return;
    }
    fetch(`${apiUrl}/vehicles/GetMakesForVehicleType/car?format=json`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.Results) {
          setMakes(data.Results);
        }
      })
      .catch((error) => {
        console.error('Error fetching vehicle makes:', error);
      });
  }, []);

  const years = Array.from({ length: currentYear - 2015 + 1 }, (_, i) =>
    (2015 + i).toString(),
  );

  const makeOptions: Option[] = makes.map((make) => ({
    value: make.MakeId.toString(),
    label: make.MakeName,
  }));

  const yearOptions: Option[] = years.map((year) => ({
    value: year,
    label: year,
  }));

  const isNextEnabled = selectedMake !== null && selectedYear !== null;
  const nextHref = `/result/${selectedMake?.value}/${selectedYear?.value}`;

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Find Your Car Model
      </h2>

      <Suspense fallback={<SelectSkeleton />}>
        <CustomReactSelect
          label="Select Vehicle Make:"
          value={selectedMake}
          onChange={setSelectedMake}
          placeholder="Choose a Make"
          options={makeOptions}
        />
      </Suspense>

      <Suspense fallback={<SelectSkeleton />}>
        <CustomReactSelect
          label="Select Model Year:"
          value={selectedYear}
          onChange={setSelectedYear}
          placeholder="Choose a Year"
          options={yearOptions}
        />
      </Suspense>

      <div className="text-center">
        <NextButton isEnabled={isNextEnabled} href={nextHref}>
          Next
        </NextButton>
      </div>
    </div>
  );
}
