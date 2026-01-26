import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  GraduationCap,
  BookOpen,
  Target,
  Clock,
  Award,
  CheckCircle,
  Star,
  Phone,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { siteConfig, features, programs, testimonials } from "../data/siteData";

const iconMap = {
  Users,
  GraduationCap,
  BookOpen,
  Target,
  Clock,
  Award,
};

const Home = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-emerald-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/20 to-emerald-100/20 rounded-full blur-3xl animate-spin"
            style={{ animationDuration: "30s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6 animate-fade-in-down">
                <Sparkles className="w-4 h-4 animate-pulse" />
                Dipercaya 2000+ Keluarga Indonesia
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up">
                Bantu Siswa{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 animate-gradient">
                  Paham Materi
                </span>{" "}
                & Naik Nilai
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up delay-200">
                Bimbingan belajar berkualitas untuk{" "}
                <strong>SD, SMP, dan SMA</strong> dengan tutor berpengalaman dan
                metode pembelajaran efektif. Anak paham, orang tua tenang.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
                <Link
                  to="/kontak"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 hover:-translate-y-1 transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 btn-animate"
                >
                  Daftar Sekarang
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Halo, saya ingin konsultasi tentang program bimbel`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl border-2 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5 animate-wiggle" />
                  Konsultasi Gratis
                </a>
              </div>

              {/* Quick Stats with Counter Animation */}
              <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-200 animate-fade-in-up delay-500">
                <div className="text-center lg:text-left group">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    95%
                  </div>
                  <div className="text-sm text-gray-500">Siswa Naik Nilai</div>
                </div>
                <div className="text-center lg:text-left group">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    50+
                  </div>
                  <div className="text-sm text-gray-500">Tutor Profesional</div>
                </div>
                <div className="text-center lg:text-left group">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    8 Thn
                  </div>
                  <div className="text-sm text-gray-500">Pengalaman</div>
                </div>
              </div>
            </div>

            {/* Hero Image with Floating Cards */}
            <div className="relative hidden lg:block animate-fade-in-right delay-300">
              <div className="relative z-10">
                <div className="img-zoom rounded-2xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=500&fit=crop"
                    alt="Siswa belajar bersama"
                    className="rounded-2xl"
                  />
                </div>

                {/* Floating Cards with Animation */}
                <div className="absolute -left-8 top-1/4 bg-white p-4 rounded-xl shadow-lg animate-float hover-lift">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Nilai Naik
                      </div>
                      <div className="text-sm text-gray-500">65 → 92</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-4 bottom-1/4 bg-white p-4 rounded-xl shadow-lg animate-float delay-500 hover-lift">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Lolos PTN
                      </div>
                      <div className="text-sm text-gray-500">Teknik ITB</div>
                    </div>
                  </div>
                </div>

                {/* New Animated Badge */}
                <div className="absolute -right-2 top-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce-in delay-700">
                  <Star className="w-4 h-4 inline-block mr-1 animate-pulse" />
                  #1 Bimbel Terbaik
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Kenapa Pilih <span className="text-blue-600">Bimbel Cerdas</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan pembelajaran terbaik dengan pendekatan
              yang tepat untuk setiap siswa
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div
                  key={feature.id}
                  className={`group p-6 lg:p-8 bg-gray-50 rounded-2xl hover:bg-white card-hover animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/30">
                    {IconComponent && (
                      <IconComponent className="w-7 h-7 text-white" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Program Bimbel Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih program yang sesuai dengan jenjang pendidikan anak Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg card-hover animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`h-2 bg-gradient-to-r ${
                    program.color === "emerald"
                      ? "from-emerald-400 to-emerald-600"
                      : program.color === "blue"
                        ? "from-blue-400 to-blue-600"
                        : "from-purple-400 to-purple-600"
                  } group-hover:h-3 transition-all duration-300`}
                ></div>

                <div className="p-6 lg:p-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 ${
                      program.color === "emerald"
                        ? "bg-emerald-100"
                        : program.color === "blue"
                          ? "bg-blue-100"
                          : "bg-purple-100"
                    }`}
                  >
                    <span
                      className={`text-2xl font-bold ${
                        program.color === "emerald"
                          ? "text-emerald-600"
                          : program.color === "blue"
                            ? "text-blue-600"
                            : "text-purple-600"
                      }`}
                    >
                      {program.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {program.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6">{program.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 group-hover:translate-x-1 transition-transform">
                      <BookOpen className="w-4 h-4 text-gray-400" />
                      <span>{program.subjects.length} mata pelajaran</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 group-hover:translate-x-1 transition-transform delay-75">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{program.sessions}</span>
                    </div>
                  </div>

                  <Link
                    to={`/program/${program.id}`}
                    className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition-all group-hover:gap-4 ${
                      program.color === "emerald"
                        ? "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                        : program.color === "blue"
                          ? "bg-blue-50 text-blue-600 hover:bg-blue-100"
                          : "bg-purple-50 text-purple-600 hover:bg-purple-100"
                    }`}
                  >
                    Lihat Detail
                    <ChevronRight className="w-4 h-4 group-hover:animate-wiggle" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 animate-fade-in-up delay-500">
            <Link
              to="/program"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 hover:gap-4 transition-all btn-animate"
            >
              Lihat Semua Program
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Apa Kata Mereka?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cerita sukses dari siswa dan orang tua yang telah bersama kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-gray-50 rounded-2xl p-6 lg:p-8 card-hover animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-current"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="img-zoom rounded-full">
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  {testimonial.improvement && (
                    <div className="text-right animate-pulse">
                      <div className="text-sm font-semibold text-emerald-600">
                        {testimonial.improvement}
                      </div>
                      <div className="text-xs text-gray-500">
                        {testimonial.subject}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 animate-fade-in-up delay-500">
            <Link
              to="/testimoni"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 hover:gap-4 transition-all text-underline-animate"
            >
              Lihat Semua Testimoni
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Animated Background */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full animate-float delay-300"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Siap Tingkatkan Nilai Anak Anda?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Daftar sekarang dan dapatkan konsultasi gratis serta diskon 20%
            untuk pendaftaran bulan ini!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Link
              to="/kontak"
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 hover:-translate-y-1 transition-all shadow-xl flex items-center justify-center gap-2 btn-animate"
            >
              Daftar Sekarang
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 animate-wiggle" />
              Hubungi via WhatsApp
            </a>
          </div>

          {/* Urgency Badge */}
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm animate-bounce-in delay-500">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>15 orang sedang melihat halaman ini</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
