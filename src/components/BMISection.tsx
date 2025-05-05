
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const BMISection = () => {
  const [activeBmi, setActiveBmi] = useState("normal");

  const bmiCategories = [
    { id: "underweight", label: "Kurus", range: "< 18.5", color: "bg-health-blue" },
    { id: "normal", label: "Normal", range: "18.5 - 24.9", color: "bg-health-green" },
    { id: "overweight", label: "Kelebihan Berat Badan", range: "25 - 29.9", color: "bg-health-yellow" },
    { id: "obese", label: "Obesitas", range: "≥ 30", color: "bg-health-red" },
  ];

  const bmiDescriptions = {
    underweight: "BMI kurang dari 18.5 mengindikasikan berat badan kurang. Ini dapat berhubungan dengan kekurangan nutrisi, gangguan makan, atau kondisi kesehatan tertentu.",
    normal: "BMI antara 18.5 dan 24.9 menunjukkan berat badan ideal. Pertahankan pola makan seimbang dan aktivitas fisik reguler.",
    overweight: "BMI antara 25 dan 29.9 menandakan kelebihan berat badan. Pertimbangkan untuk meningkatkan aktivitas fisik dan memperbaiki pola makan.",
    obese: "BMI 30 atau lebih mengindikasikan obesitas. Ini meningkatkan risiko berbagai masalah kesehatan termasuk penyakit jantung dan diabetes."
  };

  return (
    <section id="bmi" className="section-padding bg-health-gray/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Memahami BMI Anda</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Body Mass Index (BMI) adalah parameter penting untuk menilai apakah berat badan Anda ideal dibandingkan tinggi badan
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h3 className="text-xl font-semibold mb-4 md:mb-0">Kategori BMI</h3>
              <div className="flex space-x-4">
                {bmiCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`flex flex-col items-center ${activeBmi === category.id ? 'opacity-100' : 'opacity-60'} transition-opacity`}
                    onClick={() => setActiveBmi(category.id)}
                  >
                    <div className={`bmi-indicator ${category.color} mb-2`}></div>
                    <span className="text-sm font-medium">{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
              <div className="absolute inset-0 flex">
                <div className="h-full bg-health-blue" style={{ width: '25%' }}></div>
                <div className="h-full bg-health-green" style={{ width: '25%' }}></div>
                <div className="h-full bg-health-yellow" style={{ width: '25%' }}></div>
                <div className="h-full bg-health-red" style={{ width: '25%' }}></div>
              </div>
              <div className="absolute inset-0 flex justify-between px-4 items-center text-xs text-white font-medium">
                <span>16</span>
                <span>18.5</span>
                <span>25</span>
                <span>30</span>
                <span>35+</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="text-lg font-semibold mb-2">
              {bmiCategories.find(c => c.id === activeBmi)?.label} <span className="text-gray-500 font-normal">({bmiCategories.find(c => c.id === activeBmi)?.range})</span>
            </h4>
            <p className="text-gray-600">
              {bmiDescriptions[activeBmi as keyof typeof bmiDescriptions]}
            </p>
          </div>
          
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-4">Cara Menghitung BMI</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-center font-medium">BMI = Berat Badan (kg) / (Tinggi Badan (m) × Tinggi Badan (m))</p>
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">
              Smart Body Analyzer menghitung BMI Anda secara otomatis dan memberikan analisis status berat badan Anda secara instan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMISection;
