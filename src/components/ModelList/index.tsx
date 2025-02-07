interface VehicleModel {
  Model_ID: number;
  Model_Name: string;
}

interface ModelListProps {
  models: VehicleModel[];
}

export default function ModelList({ models }: ModelListProps) {
  return (
    <ul className="divide-y divide-gray-200">
      {models.map((model) => (
        <li key={model.Model_ID} className="py-4">
          <span className="text-lg">{model.Model_Name}</span>
        </li>
      ))}
    </ul>
  );
}
