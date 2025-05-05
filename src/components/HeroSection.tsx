
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-health-gray/30 section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="gradient-text">Smart Body Analyzer</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl mb-6 text-gray-700">
              Alat Pengukur Tinggi dan Berat Badan Otomatis dengan Deteksi Status Ideal
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Pantau kesehatan Anda dengan presisi tinggi. Smart Body Analyzer mengukur berat badan, tinggi, dan menghitung BMI secara akurat dalam hitungan detik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-health-blue hover:bg-health-blue/90 text-white">
                Pelajari Lebih Lanjut
              </Button>
              <Button variant="outline" size="lg" className="border-health-blue text-health-blue hover:bg-health-blue/10">
                Lihat Demo
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Placeholder for device image */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 aspect-square max-w-md mx-auto flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-health-blue animate-pulse-slow">
                      Smart Body
                    </div>
                  </div>
                  
                  {/* Scale platform */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-health-blue/10 rounded-lg border-2 border-health-blue flex items-center justify-center">
                    <span className="text-health-blue font-medium">Tinggi & Berat</span>
                  </div>
                  
                  {/* Height measurement bar */}
                  <div className="absolute top-0 bottom-0 right-10 w-4 bg-health-blue/10 rounded-lg border-2 border-health-blue">
                    <div className="absolute top-1/3 -left-6 h-2 w-6 bg-health-blue"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-health-green/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-health-blue/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
