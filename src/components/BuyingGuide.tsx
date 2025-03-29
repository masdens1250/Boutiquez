import React from 'react';
import { Info } from 'lucide-react';

interface CriterionProps {
  title: string;
  description: string;
}

interface BuyingGuideProps {
  title: string;
  introduction: string;
  criteria: CriterionProps[];
}

function BuyingGuide({ title, introduction, criteria }: BuyingGuideProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
      <div className="flex items-start gap-3 mb-4">
        <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
        <h2 className="text-xl font-bold text-gray-900">Guide d'Achat</h2>
      </div>
      
      <h3 className="text-lg font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-6">{introduction}</p>
      
      <div className="space-y-4">
        {criteria.map((criterion, index) => (
          <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
            <h4 className="font-medium text-gray-800 mb-2">{criterion.title}</h4>
            <p className="text-gray-600">{criterion.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyingGuide;