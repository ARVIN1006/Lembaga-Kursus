import { CheckCircle, Target, BookOpen, Users, Heart } from "lucide-react";
import { aboutContent } from "../data/siteData";

const About = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {aboutContent.profile.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {aboutContent.profile.description}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {aboutContent.profile.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                Visi Kami
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Mencetak Generasi Cerdas Indonesia
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {aboutContent.vision}
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Misi Kami
              </div>
              <ul className="space-y-4">
                {aboutContent.mission.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {aboutContent.approach.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Metode pembelajaran yang kami terapkan untuk hasil maksimal
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.approach.methods.map((method, index) => {
              const icons = [Users, BookOpen, Target, Heart];
              const IconComponent = icons[index % icons.length];
              const colors = ["blue", "emerald", "purple", "amber"];
              const color = colors[index % colors.length];

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                      color === "blue"
                        ? "bg-blue-100"
                        : color === "emerald"
                          ? "bg-emerald-100"
                          : color === "purple"
                            ? "bg-purple-100"
                            : "bg-amber-100"
                    }`}
                  >
                    <IconComponent
                      className={`w-7 h-7 ${
                        color === "blue"
                          ? "text-blue-600"
                          : color === "emerald"
                            ? "text-emerald-600"
                            : color === "purple"
                              ? "text-purple-600"
                              : "text-amber-600"
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-600">{method.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Suasana belajar"
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Kami Hadir untuk Kesuksesan Anak Anda
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Di Bimbel Cerdas, kami percaya bahwa setiap anak memiliki
                potensi untuk sukses. Tugas kami adalah membantu mereka
                menemukan dan mengembangkan potensi tersebut melalui bimbingan
                yang tepat dan penuh perhatian.
              </p>

              <div className="space-y-4">
                {[
                  "Kurikulum terupdate sesuai standar nasional",
                  "Tutor terseleksi dari kampus ternama",
                  "Kelas kecil untuk perhatian maksimal",
                  "Laporan perkembangan untuk orang tua",
                  "Konsultasi gratis kapan saja",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
