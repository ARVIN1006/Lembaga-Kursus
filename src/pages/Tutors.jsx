import { GraduationCap, BookOpen, Clock } from "lucide-react";
import { tutors } from "../data/siteData";

const Tutors = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Tim Tutor Profesional
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Belajar bersama tutor-tutor terbaik dari kampus ternama dengan
            pengalaman mengajar yang solid
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600">
                50+
              </div>
              <div className="text-gray-500 mt-1">Tutor Profesional</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-emerald-600">
                5+ Thn
              </div>
              <div className="text-gray-500 mt-1">Rata-rata Pengalaman</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-purple-600">
                100%
              </div>
              <div className="text-gray-500 mt-1">Lulusan Terverifikasi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutors Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutors.map((tutor) => (
              <div
                key={tutor.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={tutor.photo}
                    alt={tutor.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {tutor.name}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <GraduationCap className="w-4 h-4" />
                    {tutor.education}
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <Clock className="w-4 h-4" />
                    {tutor.experience}
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    {tutor.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {tutor.subjects.map((subject, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ingin Menjadi Bagian dari Tim Kami?
            </h2>
            <p className="text-gray-600 mb-6">
              Kami selalu mencari tutor-tutor berbakat untuk bergabung. Kirimkan
              CV Anda!
            </p>
            <a
              href="mailto:karir@bimbelcerdas.id"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Lamar Sekarang
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tutors;
