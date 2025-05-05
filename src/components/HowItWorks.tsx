import { useState } from 'react';
import { User, Weight, Calculator, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      number: 1,
      title: "Naik ke Platform",
      description: "Naik ke platform Smart Body Analyzer dan berdiri tegak menghadap ke depan",
      icon: <User />
    },
    {
      number: 2,
      title: "Pengukuran Otomatis",
      description: "Alat secara otomatis mengukur tinggi dan berat badan dalam hitungan detik",
      icon: <Weight />
    },
    {
      number: 3,
      title: "Kalkulasi BMI",
      description: "Sistem menghitung BMI dan menentukan status ideal tubuh Anda",
      icon: <Calculator />
    },
    {
      number: 4,
      title: "Lihat Hasil",
      description: "Hasil pengukuran ditampilkan pada layar LCD dengan informasi lengkap",
      icon: <Check />
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Cara Kerja</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Smart Body Analyzer dirancang untuk pengalaman pengguna yang mudah dan intuitif
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Visual representation */}
          <div className="lg:w-1/2">
            <div className="relative h-96 bg-health-gray/30 rounded-2xl overflow-hidden">
              {/* Device representation */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-48 h-48 bg-white rounded-xl shadow-lg flex items-center justify-center border-2 border-health-blue">
                  <div className="text-xl font-semibold text-health-blue">Step {activeStep}</div>
                </div>
                
                {/* Platform */}
                <div className="w-64 h-12 bg-health-blue/20 border-2 border-health-blue rounded-lg mx-auto mt-4 flex items-center justify-center">
                  <span className="text-sm font-medium text-health-blue">Smart Platform</span>
                </div>
              </div>
              
              {/* Decorative elements for each step */}
              {activeStep === 1 && (
                <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-16 bg-health-green/40 rounded-full"></div>
                </div>
              )}
              
              {activeStep === 2 && (
                <>
                  <div className="absolute left-1/4 top-1/2 w-12 h-12 bg-health-blue/30 rounded-full animate-pulse"></div>
                  <div className="absolute right-1/4 bottom-1/3 w-10 h-10 bg-health-green/30 rounded-full animate-pulse"></div>
                </>
              )}
              
              {activeStep === 3 && (
                <div className="absolute right-1/3 top-1/3 bg-white px-3 py-1 rounded-lg shadow-md text-sm">
                  BMI: 23.5
                </div>
              )}
              
              {activeStep === 4 && (
                <div className="absolute left-1/2 top-1/4 transform -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-md">
                  <div className="text-sm font-semibold">Hasil Pengukuran</div>
                  <div className="text-xs">Tinggi: 170 cm</div>
                  <div className="text-xs">Berat: 68 kg</div>
                  <div className="text-xs">BMI: 23.5 (Normal)</div>
                </div>
              )}
            </div>
          </div>
          
          {/* Steps */}
          <div className="lg:w-1/2">
            <div className="flex flex-col gap-6">
              {steps.map((step) => (
                <button
                  key={step.number}
                  className={cn(
                    "flex items-start gap-4 p-4 rounded-xl transition-all",
                    activeStep === step.number 
                      ? "bg-health-blue/10 border border-health-blue/30" 
                      : "hover:bg-gray-100"
                  )}
                  onClick={() => setActiveStep(step.number)}
                >
                  <div className={cn(
                    "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white",
                    activeStep === step.number ? "bg-health-blue" : "bg-gray-300"
                  )}>
                    {step.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-lg">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
