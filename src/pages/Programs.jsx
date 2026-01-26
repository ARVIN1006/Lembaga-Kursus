import { Link, useParams } from "react-router-dom";
import {
  BookOpen,
  Clock,
  ClipboardCheck,
  Target,
  CheckCircle,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { programs, siteConfig } from "../data/siteData";

const Programs = () => {
  const { level } = useParams();

  // If viewing a specific program
  if (level) {
    const program = programs.find((p) => p.id === level);

    if (!program) {
      return (
        <div className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Program tidak ditemukan
            </h1>
            <Link to="/program" className="text-blue-600 hover:underline">
              Kembali ke daftar program
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="pt-16 lg:pt-20">
        {/* Hero */}
        <section
          className={`py-16 lg:py-24 ${
            program.color === "emerald"
              ? "bg-gradient-to-br from-emerald-50 to-white"
              : program.color === "blue"
                ? "bg-gradient-to-br from-blue-50 to-white"
                : "bg-gradient-to-br from-purple-50 to-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link to="/" className="hover:text-gray-700">
                Beranda
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/program" className="hover:text-gray-700">
                Program
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900">{program.level}</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 ${
                    program.color === "emerald"
                      ? "bg-emerald-100"
                      : program.color === "blue"
                        ? "bg-blue-100"
                        : "bg-purple-100"
                  }`}
                >
                  <span
                    className={`text-3xl font-bold ${
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

                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h1>
                <p className="text-lg text-gray-500 mb-2">{program.subtitle}</p>
                <p className="text-xl text-gray-600 mb-8">
                  {program.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/kontak"
                    className={`px-6 py-3 font-semibold rounded-xl text-white transition-all ${
                      program.color === "emerald"
                        ? "bg-emerald-600 hover:bg-emerald-700"
                        : program.color === "blue"
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-purple-600 hover:bg-purple-700"
                    }`}
                  >
                    Daftar Sekarang
                  </Link>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 font-semibold rounded-xl border-2 border-gray-200 hover:bg-gray-50 transition-all"
                  >
                    Konsultasi Gratis
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Informasi Program
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-500">
                        Mata Pelajaran
                      </div>
                      <div className="font-medium">
                        {program.subjects.length} mapel
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <Clock className="w-5 h-5 text-emerald-600" />
                    <div>
                      <div className="text-sm text-gray-500">Pertemuan</div>
                      <div className="font-medium">{program.sessions}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <ClipboardCheck className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="text-sm text-gray-500">Evaluasi</div>
                      <div className="font-medium">{program.evaluation}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subjects */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Mata Pelajaran
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {program.subjects.map((subject, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
                >
                  <CheckCircle
                    className={`w-5 h-5 ${
                      program.color === "emerald"
                        ? "text-emerald-500"
                        : program.color === "blue"
                          ? "text-blue-500"
                          : "text-purple-500"
                    }`}
                  />
                  <span className="font-medium text-gray-700">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methods */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Metode Belajar
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {program.methods.map((method, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                      program.color === "emerald"
                        ? "bg-emerald-100 text-emerald-600"
                        : program.color === "blue"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-purple-100 text-purple-600"
                    }`}
                  >
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{method}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Syllabus */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  Silabus Ringkas
                </h2>
                <ul className="space-y-3">
                  {program.details.syllabus.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Schedule */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-emerald-600" />
                  Jadwal Belajar
                </h2>
                <ul className="space-y-3">
                  {program.details.schedule.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Targets */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Target className="w-6 h-6 text-purple-600" />
                  Target Capaian
                </h2>
                <ul className="space-y-3">
                  {program.details.targets.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Try Out */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <ClipboardCheck className="w-6 h-6 text-amber-600" />
                  Sistem Try Out
                </h2>
                <div className="p-6 bg-amber-50 rounded-xl">
                  <p className="text-gray-700">{program.details.tryout}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className={`py-16 lg:py-24 ${
            program.color === "emerald"
              ? "bg-emerald-600"
              : program.color === "blue"
                ? "bg-blue-600"
                : "bg-purple-600"
          }`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Siap Bergabung dengan Program {program.level}?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Daftar sekarang dan mulai perjalanan sukses akademik anak Anda
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/kontak"
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2"
              >
                Daftar Sekarang
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/biaya"
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all"
              >
                Lihat Biaya
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Program list view
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Program Bimbel Kami
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih program yang sesuai dengan jenjang pendidikan anak Anda.
            Setiap program dirancang khusus untuk memaksimalkan potensi belajar
            siswa.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div
                  className={`h-2 ${
                    program.color === "emerald"
                      ? "bg-emerald-500"
                      : program.color === "blue"
                        ? "bg-blue-500"
                        : "bg-purple-500"
                  }`}
                ></div>

                <div className="p-6 lg:p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Program Info */}
                    <div className="lg:col-span-1">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
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

                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {program.title}
                      </h2>
                      <p className="text-gray-500 mb-4">{program.subtitle}</p>
                      <p className="text-gray-600 mb-6">
                        {program.description}
                      </p>

                      <Link
                        to={`/program/${program.id}`}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                          program.color === "emerald"
                            ? "bg-emerald-600 text-white hover:bg-emerald-700"
                            : program.color === "blue"
                              ? "bg-blue-600 text-white hover:bg-blue-700"
                              : "bg-purple-600 text-white hover:bg-purple-700"
                        }`}
                      >
                        Lihat Detail
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Subjects & Methods */}
                    <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-gray-400" />
                          Mata Pelajaran
                        </h3>
                        <ul className="space-y-2">
                          {program.subjects.map((subject, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 text-gray-600"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Target className="w-5 h-5 text-gray-400" />
                          Info Kelas
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4 text-blue-500" />
                            {program.sessions}
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <ClipboardCheck className="w-4 h-4 text-purple-500" />
                            {program.evaluation}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
