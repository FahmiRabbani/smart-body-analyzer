
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SpecsSection = () => {
  const specifications = [
    { category: "Pengukuran Berat", spec: "Rentang Berat", value: "5 kg - 180 kg" },
    { category: "Pengukuran Berat", spec: "Akurasi", value: "± 0.1 kg" },
    { category: "Pengukuran Berat", spec: "Unit", value: "kg / lb" },
    { category: "Pengukuran Tinggi", spec: "Rentang Tinggi", value: "100 cm - 220 cm" },
    { category: "Pengukuran Tinggi", spec: "Akurasi", value: "± 0.5 cm" },
    { category: "Pengukuran Tinggi", spec: "Unit", value: "cm / inch" },
    { category: "Display", spec: "Jenis", value: "LCD Digital 5 inch" },
    { category: "Display", spec: "Informasi", value: "Tinggi, Berat, BMI, Status" },
    { category: "Fisik", spec: "Dimensi", value: "40 × 60 × 220 cm" },
    { category: "Fisik", spec: "Berat Alat", value: "15 kg" },
    { category: "Daya", spec: "Sumber", value: "AC 220V / Battery" },
    { category: "Daya", spec: "Konsumsi Daya", value: "10 Watt" },
  ];

  const features = [
    "Pengukuran tinggi dan berat otomatis",
    "Kalkulasi BMI instan",
    "Display LCD digital",
    "Kalibrasi otomatis",
    "Mode hemat energi",
    "Penyimpanan hasil pengukuran",
    "Konektor USB untuk transfer data",
    "Portable dan mudah dipindahkan",
    "Suara dan panduan penggunaan",
    "Bahan material premium"
  ];

  return (
    <section id="specs" className="section-padding bg-health-gray/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Spesifikasi Teknis</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Smart Body Analyzer dirancang dengan spesifikasi teknis terbaik untuk memberikan akurasi dan kehandalan yang tinggi
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Spesifikasi Detail</CardTitle>
                <CardDescription>Parameter teknis Smart Body Analyzer</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Kategori</TableHead>
                      <TableHead>Spesifikasi</TableHead>
                      <TableHead>Nilai</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {specifications.map((spec, index) => (
                      <TableRow key={index}>
                        <TableCell>{spec.category}</TableCell>
                        <TableCell>{spec.spec}</TableCell>
                        <TableCell>{spec.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Fitur Lainnya</CardTitle>
                <CardDescription>Kelengkapan fitur Smart Body Analyzer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="bg-white">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6 bg-health-blue/10 border-health-blue/30">
              <CardHeader>
                <CardTitle className="text-health-blue">Keunggulan</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-health-blue p-1 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span>Akurasi pengukuran tinggi dan berat tertinggi di kelasnya</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-health-blue p-1 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span>Proses pengukuran hanya membutuhkan waktu kurang dari 5 detik</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-health-blue p-1 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span>Analisis BMI yang komprehensif dengan saran kesehatan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-health-blue p-1 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span>Material berkualitas tinggi dengan daya tahan lama</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
