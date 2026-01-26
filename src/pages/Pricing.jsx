import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Star, ArrowRight, Phone, Sparkles, Zap } from "lucide-react";
import { pricing, siteConfig } from "../data/siteData";

const Pricing = () => {
  const [selectedLevel, setSelectedLevel] = useState("smp");

  const levels = [
    { id: "sd", label: "SD", color: "emerald" },
    { id: "smp", label: "SMP", color: "blue" },
    { id: "sma", label: "SMA", color: "purple" },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID").format(price);
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-16 lg:py-24 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6 animate-bounce-in">
            <Zap className="w-4 h-4" />
            Diskon 20% Bulan Ini!
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Biaya & Paket Belajar
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
            Investasi terbaik untuk masa depan akademik anak Anda. Pilih paket
            yang sesuai dengan kebutuhan.
          </p>

          {/* Level Selector with Animation */}
          <div className="inline-flex items-center p-1.5 bg-gray-100 rounded-2xl shadow-inner animate-fade-in-up delay-300">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedLevel === level.id
                    ? "bg-white text-gray-900 shadow-lg transform scale-105"
                    : "text-gray-500 hover:text-gray-700 hover:bg-white/50"
                }`}
              >
                {level.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => {
              const priceInfo = plan.prices[selectedLevel];

              return (
                <div
                  key={plan.id}
                  className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-500 card-hover animate-fade-in-up ${
                    plan.popular
                      ? "ring-2 ring-blue-600 shadow-2xl shadow-blue-500/20 scale-105 z-10"
                      : "border border-gray-200"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-2.5 text-sm font-semibold flex items-center justify-center gap-2">
                      <Star className="w-4 h-4 animate-pulse" />
                      Paling Populer
                      <Sparkles className="w-4 h-4 animate-pulse" />
                    </div>
                  )}

                  <div className={`p-6 lg:p-8 ${plan.popular ? "pt-16" : ""}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-6">
                      {plan.description}
                    </p>

                    {/* Animated Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-gray-500">Rp</span>
                        <span className="text-4xl font-bold text-gray-900 transition-all duration-300">
                          {formatPrice(priceInfo.amount)}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {priceInfo.perSession
                          ? "per sesi"
                          : `${priceInfo.sessions} sesi/bulan`}
                      </div>
                    </div>

                    {/* Features with staggered animation */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 group"
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110 ${
                              plan.popular ? "bg-blue-100" : "bg-green-100"
                            }`}
                          >
                            <Check
                              className={`w-3 h-3 ${
                                plan.popular
                                  ? "text-blue-600"
                                  : "text-green-600"
                              }`}
                            />
                          </div>
                          <span className="text-gray-600 text-sm group-hover:text-gray-900 transition-colors">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/kontak"
                      className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold transition-all duration-300 hover:gap-4 btn-animate ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/30"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      Pilih Paket
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Shine effect on hover */}
                  {plan.popular && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div className="absolute -inset-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-shimmer"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Additional Info with Animation */}
          <div className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg animate-fade-in-up delay-500">
            <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">
              Informasi Tambahan
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "blue",
                  title: "Gratis Pendaftaran",
                  desc: "Tidak ada biaya daftar",
                },
                {
                  icon: "emerald",
                  title: "Modul Gratis",
                  desc: "Bahan ajar sudah termasuk",
                },
                {
                  icon: "purple",
                  title: "Cicilan Tersedia",
                  desc: "Untuk paket semester",
                },
                {
                  icon: "amber",
                  title: "Diskon Semester",
                  desc: "Hemat hingga 15%",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <div
                    className={`w-14 h-14 bg-${item.icon}-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    <Check className={`w-7 h-7 text-${item.icon}-600`} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA with Animation */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full animate-float delay-300"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-white/5 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Masih Ada Pertanyaan?
          </h2>
          <p className="text-lg text-blue-100 mb-8 animate-fade-in-up delay-200">
            Tim kami siap membantu Anda memilih paket yang tepat untuk anak Anda
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Halo, saya ingin konsultasi tentang biaya bimbel`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 hover:scale-105 hover:-translate-y-1 transition-all shadow-xl btn-animate animate-fade-in-up delay-300"
          >
            <Phone className="w-5 h-5 animate-wiggle" />
            Konsultasi via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
