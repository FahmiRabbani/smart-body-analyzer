
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-health-dark text-white">
      <div className="container mx-auto py-16 px-4">
        {/* CTA Section */}
        <div className="bg-health-blue rounded-2xl p-8 mb-16 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Siap untuk mengukur kesehatan Anda dengan presisi?
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Smart Body Analyzer adalah solusi terbaik untuk mengukur tinggi dan berat badan secara presisi, serta mengetahui status ideal tubuh Anda.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-health-blue hover:bg-white/90">
              Pesan Sekarang
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Hubungi Kami
            </Button>
          </div>
        </div>
        
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold mb-4 flex items-center">
              <span className="text-health-blue">Smart</span>
              <span className="text-health-green ml-1">Body</span>
            </div>
            <p className="text-gray-300 mb-4">
              Alat Pengukur Tinggi dan Berat Badan Otomatis dengan Deteksi Status Ideal (BMI)
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Produk</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-white">Fitur</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Harga</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Demo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Dukungan</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Panduan Pengguna</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Kontak</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Garansi</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-gray-300">Jl. Kesehatan No. 123, Jakarta</span>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-gray-300">+62 123 4567 890</span>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-gray-300">info@smartbody.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Smart Body Analyzer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
