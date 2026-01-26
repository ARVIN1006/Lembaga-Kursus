import { Link } from "react-router-dom";
import { Star, TrendingUp, ArrowRight } from "lucide-react";
import { testimonials, siteConfig } from "../data/siteData";

const Testimonials = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Testimoni & Cerita Sukses
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lihat bagaimana Bimbel Cerdas telah membantu ribuan siswa mencapai
            impian akademik mereka
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600">
                2000+
              </div>
              <div className="text-gray-500 mt-1">Siswa Terbantu</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-emerald-600">
                95%
              </div>
              <div className="text-gray-500 mt-1">Tingkat Kepuasan</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-purple-600">
                300+
              </div>
              <div className="text-gray-500 mt-1">Lolos PTN</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-amber-600">
                4.9
              </div>
              <div className="text-gray-500 mt-1">Rating Google</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Improvement Badge */}
                {testimonial.improvement && (
                  <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-xl mb-6">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                    <div>
                      <div className="text-sm font-semibold text-emerald-700">
                        {testimonial.improvement}
                      </div>
                      <div className="text-xs text-emerald-600">
                        {testimonial.subject}
                      </div>
                    </div>
                  </div>
                )}

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cerita Sukses Siswa Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dengarkan langsung pengalaman mereka belajar di Bimbel Cerdas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Rizky - Lolos SNBT ITB
                </h3>
                <p className="text-sm text-gray-500">
                  Video testimoni segera hadir
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Amanda - Juara Kelas
                </h3>
                <p className="text-sm text-gray-500">
                  Video testimoni segera hadir
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ingin Jadi Cerita Sukses Berikutnya?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Bergabung dengan ribuan siswa yang telah merasakan peningkatan nyata
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/kontak"
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
            >
              Daftar Sekarang
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all"
            >
              Konsultasi Dulu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
