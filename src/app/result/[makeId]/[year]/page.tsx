'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import ModelsSkeleton from '@/src/components/ModelsSkeleton';

interface VehicleModel {
  Model_ID: number;
  Model_Name: string;
}

const ModelList = dynamic(() => import('@/src/components/ModelList'), {
  ssr: false,
});

export default function ResultPage() {
  const params = useParams();
  const { makeId, year } = params as { makeId: string; year: string };
  const [models, setModels] = useState<VehicleModel[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (makeId && year) {
      fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
      )
        .then((res) => res.json())
        .then((data) => {
          if (data && data.Results) {
            setModels(data.Results);
          } else {
            setError('No data found');
          }
        })
        .catch((err) => {
          console.error('Error fetching data:', err);
          setError('Error fetching data');
        });
    }
  }, [makeId, year]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-md mt-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Vehicle Models</h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <Suspense fallback={<ModelsSkeleton />}>
        {models.length > 0 ? <ModelList models={models} /> : <ModelsSkeleton />}
      </Suspense>
    </div>
  );
}
