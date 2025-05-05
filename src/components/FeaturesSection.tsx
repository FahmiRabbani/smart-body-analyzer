
import { Weight, Body, PulseIcon, Gauge } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Weight className="health-icon" />,
      title: "Pengukuran Berat Akurat",
      description: "Pengukuran berat presisi hingga 0.1 kg dengan teknologi sensor tekanan canggih"
    },
    {
      icon: <Body className="health-icon" />,
      title: "Pengukuran Tinggi Otomatis",
      description: "Sensor ultrasonik mengukur tinggi badan secara presisi dengan akurasi hingga 0.5 cm"
    },
    {
      icon: <Gauge className="health-icon" />,
      title: "Kalkulasi BMI Instan",
      description: "Hitung BMI dan dapatkan analisis status ideal badan Anda secara real-time"
    },
    {
      icon: <PulseIcon className="health-icon" />,
      title: "Pantau Perkembangan",
      description: "Simpan hasil pengukuran dan pantau perkembangan kesehatan Anda setiap waktu"
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Fitur Unggulan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Smart Body Analyzer dilengkapi dengan teknologi terdepan untuk memberikan pengalaman pengukuran berat dan tinggi badan yang mudah dan akurat
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
