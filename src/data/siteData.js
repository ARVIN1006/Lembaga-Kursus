// Data Konfigurasi Website Bimbel

export const siteConfig = {
  name: "Bimbel Cerdas Indonesia",
  tagline: "Bantu Siswa Paham Materi & Naik Nilai",
  description:
    "Bimbingan belajar berkualitas untuk siswa SD, SMP, dan SMA dengan tutor berpengalaman dan metode pembelajaran yang efektif.",
  phone: "08123456789",
  whatsapp: "6281234567890",
  email: "info@bimbelcerdas.id",
  address: "Jl. Pendidikan No. 123, Jakarta Selatan",
  operationalHours: "Senin - Sabtu, 09:00 - 21:00",
  socialMedia: {
    instagram: "https://instagram.com/bimbelcerdas",
    facebook: "https://facebook.com/bimbelcerdas",
    youtube: "https://youtube.com/bimbelcerdas",
  },
};

export const features = [
  {
    id: 1,
    icon: "Users",
    title: "Kelas Kecil",
    description:
      "Maksimal 8 siswa per kelas untuk perhatian lebih personal dan efektif",
  },
  {
    id: 2,
    icon: "GraduationCap",
    title: "Tutor Berpengalaman",
    description:
      "Pengajar lulusan kampus ternama dengan pengalaman mengajar minimal 3 tahun",
  },
  {
    id: 3,
    icon: "BookOpen",
    title: "Fokus Kurikulum Sekolah",
    description: "Materi sesuai kurikulum terbaru dan kebutuhan ujian sekolah",
  },
  {
    id: 4,
    icon: "Target",
    title: "Target Jelas",
    description:
      "Evaluasi berkala dengan target peningkatan nilai yang terukur",
  },
  {
    id: 5,
    icon: "Clock",
    title: "Jadwal Fleksibel",
    description: "Pilihan waktu belajar yang menyesuaikan jadwal sekolah siswa",
  },
  {
    id: 6,
    icon: "Award",
    title: "Garansi Hasil",
    description: "Jaminan peningkatan nilai atau uang kembali",
  },
];

export const programs = [
  {
    id: "sd",
    level: "SD",
    title: "Program Bimbel SD",
    subtitle: "Kelas 1 - 6",
    description:
      "Membangun fondasi kuat untuk pembelajaran jenjang selanjutnya",
    color: "emerald",
    subjects: [
      "Matematika",
      "Bahasa Indonesia",
      "Bahasa Inggris",
      "IPA",
      "IPS",
    ],
    methods: [
      "Pembelajaran interaktif dengan permainan edukatif",
      "Pendekatan visual dan praktek",
      "Latihan soal bertahap dari mudah ke sulit",
      "Bimbingan PR dan tugas sekolah",
    ],
    sessions: "8 pertemuan/bulan",
    evaluation: "Tes mingguan + Rapor bulanan",
    details: {
      syllabus: [
        "Operasi hitung dasar sampai lanjutan",
        "Membaca, menulis, dan memahami teks",
        "Vocabulary dan grammar dasar bahasa Inggris",
        "Konsep IPA dan IPS sesuai kurikulum",
      ],
      schedule: ["Senin - Jumat: 14:00 - 17:00", "Sabtu: 09:00 - 12:00"],
      targets: [
        "Menguasai 100% materi kurikulum semester",
        "Peningkatan nilai minimal 20 poin",
        "Lulus UAS dengan nilai di atas KKM",
      ],
      tryout: "Try out bulanan sesuai format ujian sekolah",
    },
  },
  {
    id: "smp",
    level: "SMP",
    title: "Program Bimbel SMP",
    subtitle: "Kelas 7 - 9",
    description: "Persiapan optimal menghadapi ujian dan masuk SMA favorit",
    color: "blue",
    subjects: [
      "Matematika",
      "Bahasa Indonesia",
      "Bahasa Inggris",
      "IPA (Fisika, Kimia, Biologi)",
      "IPS",
    ],
    methods: [
      "Diskusi dan problem solving",
      "Latihan soal HOTS dan penalaran",
      "Simulasi ujian berkala",
      "Konsultasi akademik personal",
    ],
    sessions: "12 pertemuan/bulan",
    evaluation: "Try out mingguan + Konsultasi hasil",
    details: {
      syllabus: [
        "Aljabar, geometri, statistika",
        "Teks prosedur, eksposisi, argumentasi",
        "Grammar dan reading comprehension",
        "Fisika, kimia, biologi sesuai kurikulum",
      ],
      schedule: [
        "Senin - Jumat: 15:00 - 18:00",
        "Sabtu: 09:00 - 12:00, 14:00 - 17:00",
      ],
      targets: [
        "Masuk ranking 10 besar di kelas",
        "Peningkatan nilai minimal 25 poin",
        "Lolos seleksi SMA/SMK favorit",
      ],
      tryout: "Try out mingguan + Simulasi UNBK bulanan",
    },
  },
  {
    id: "sma",
    level: "SMA",
    title: "Program Bimbel SMA",
    subtitle: "Kelas 10 - 12",
    description: "Sukses di sekolah dan persiapan masuk PTN impian",
    color: "purple",
    subjects: [
      "Matematika Wajib & Peminatan",
      "Fisika",
      "Kimia",
      "Biologi",
      "Bahasa Inggris",
      "Ekonomi",
    ],
    methods: [
      "Pembahasan soal UTBK/SNBT intensif",
      "Deep learning concept",
      "Latihan soal bank PTN",
      "Mentoring universitas",
    ],
    sessions: "16 pertemuan/bulan",
    evaluation: "Try out UTBK mingguan + Analisis hasil",
    details: {
      syllabus: [
        "Kalkulus, trigonometri, matriks",
        "Mekanika, listrik, modern physics",
        "Kimia organik, anorganik, stoikiometri",
        "Genetika, ekologi, bioteknologi",
      ],
      schedule: [
        "Senin - Jumat: 16:00 - 19:00",
        "Sabtu - Minggu: 09:00 - 15:00",
      ],
      targets: [
        "Menguasai materi UTBK Saintek/Soshum",
        "Skor UTBK di atas 600",
        "Lolos seleksi PTN favorit",
      ],
      tryout: "Try out UTBK mingguan + Prediksi peringkat nasional",
    },
  },
];

export const pricing = [
  {
    id: 1,
    name: "Paket Reguler",
    description: "Untuk siswa yang ingin belajar dengan ritme normal",
    popular: false,
    prices: {
      sd: { amount: 350000, sessions: 8 },
      smp: { amount: 450000, sessions: 12 },
      sma: { amount: 550000, sessions: 16 },
    },
    features: [
      "Kelas reguler 2-3x seminggu",
      "Modul pembelajaran lengkap",
      "Akses grup diskusi",
      "Rapor perkembangan bulanan",
      "Konsultasi via WhatsApp",
    ],
  },
  {
    id: 2,
    name: "Paket Intensif",
    description: "Untuk siswa yang butuh perhatian lebih dan target tinggi",
    popular: true,
    prices: {
      sd: { amount: 550000, sessions: 12 },
      smp: { amount: 750000, sessions: 16 },
      sma: { amount: 950000, sessions: 20 },
    },
    features: [
      "Kelas intensif 4-5x seminggu",
      "Modul premium + bank soal",
      "Private konsultasi 2x/bulan",
      "Try out mingguan",
      "Bimbingan PR prioritas",
      "Garansi peningkatan nilai",
    ],
  },
  {
    id: 3,
    name: "Paket Private",
    description: "Pembelajaran 1-on-1 untuk hasil maksimal",
    popular: false,
    prices: {
      sd: { amount: 150000, sessions: 1, perSession: true },
      smp: { amount: 175000, sessions: 1, perSession: true },
      sma: { amount: 200000, sessions: 1, perSession: true },
    },
    features: [
      "Kelas private 1 guru 1 siswa",
      "Jadwal 100% fleksibel",
      "Materi custom sesuai kebutuhan",
      "Progress report setiap sesi",
      "Komunikasi langsung dengan tutor",
    ],
  },
];

export const tutors = [
  {
    id: 1,
    name: "Budi Santoso, S.Pd",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    education: "S1 Pendidikan Matematika - UI",
    experience: "8 tahun mengajar",
    subjects: ["Matematika SD", "Matematika SMP"],
    description: "Mengajar dengan pendekatan fun learning dan visual",
  },
  {
    id: 2,
    name: "Siti Rahayu, M.Pd",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    education: "S2 Pendidikan Bahasa Inggris - UNJ",
    experience: "10 tahun mengajar",
    subjects: ["Bahasa Inggris SD-SMA"],
    description: "Spesialis TOEFL dan persiapan ujian bahasa Inggris",
  },
  {
    id: 3,
    name: "Ahmad Fadli, S.Si",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    education: "S1 Fisika - ITB",
    experience: "6 tahun mengajar",
    subjects: ["Fisika SMP", "Fisika SMA", "UTBK Saintek"],
    description: "Alumni PTN dengan pengalaman mengajar intensif UTBK",
  },
  {
    id: 4,
    name: "Dewi Kusuma, S.Pd",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    education: "S1 Pendidikan Kimia - UGM",
    experience: "7 tahun mengajar",
    subjects: ["Kimia SMA", "UTBK Saintek"],
    description: "Ahli dalam menyederhanakan konsep kimia yang rumit",
  },
  {
    id: 5,
    name: "Reza Pratama, S.Pd",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    education: "S1 Pendidikan Biologi - UNPAD",
    experience: "5 tahun mengajar",
    subjects: ["Biologi SMP", "Biologi SMA"],
    description: "Mengajar dengan metode praktikum dan visualisasi",
  },
  {
    id: 6,
    name: "Linda Maharani, S.Pd",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    education: "S1 Pendidikan Bahasa Indonesia - UNNES",
    experience: "6 tahun mengajar",
    subjects: ["Bahasa Indonesia SD-SMA"],
    description: "Spesialis penulisan dan literasi untuk semua jenjang",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Ibu Sarah",
    role: "Orang tua siswa SMP",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "Anak saya yang awalnya kesulitan Matematika, sekarang jadi juara kelas! Nilai Matematikanya naik dari 65 menjadi 92 dalam 3 bulan. Terima kasih Bimbel Cerdas!",
    improvement: "65 → 92",
    subject: "Matematika",
  },
  {
    id: 2,
    name: "Rizky Pratama",
    role: "Siswa SMA kelas 12",
    photo:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "Berkat bimbingan intensif UTBK di sini, saya berhasil lolos SNBT di jurusan Teknik Informatika ITB! Tutor-tutornya sangat membantu dan sabar.",
    improvement: "Lolos SNBT ITB",
    subject: "UTBK Saintek",
  },
  {
    id: 3,
    name: "Bapak Hendra",
    role: "Orang tua siswa SD",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "Putri saya jadi lebih percaya diri dan senang belajar. Yang paling saya suka adalah pendekatan tutornya yang sabar dan menyenangkan.",
    improvement: "Ranking 15 → 3",
    subject: "Semua Mapel",
  },
  {
    id: 4,
    name: "Amanda Putri",
    role: "Siswa SMP kelas 9",
    photo:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "Awalnya takut sama Fisika, sekarang malah jadi mapel favorit! Tutornya jelasin pakai cara yang gampang dipahami.",
    improvement: "70 → 88",
    subject: "IPA",
  },
  {
    id: 5,
    name: "Ibu Ratna",
    role: "Orang tua siswa SMA",
    photo:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "Anak saya berhasil masuk SMA Negeri favorit berkat persiapan matang di Bimbel Cerdas. Sistemnya bagus, evaluasinya jelas.",
    improvement: "Lolos SMAN Favorit",
    subject: "Persiapan SMA",
  },
];

export const faqs = [
  {
    id: 1,
    category: "Pendaftaran",
    question: "Bagaimana cara mendaftar di Bimbel Cerdas?",
    answer:
      "Pendaftaran bisa dilakukan dengan 3 cara: (1) Datang langsung ke kantor kami, (2) Mendaftar melalui form online di website, atau (3) Menghubungi WhatsApp admin kami. Setelah mendaftar, siswa akan mengikuti tes penempatan gratis untuk menentukan kelas yang sesuai.",
  },
  {
    id: 2,
    category: "Pendaftaran",
    question: "Apakah ada biaya pendaftaran?",
    answer:
      "Tidak ada biaya pendaftaran. Anda hanya perlu membayar biaya paket belajar yang dipilih. Kami juga memberikan modul pembelajaran gratis di awal.",
  },
  {
    id: 3,
    category: "Pembayaran",
    question: "Apa saja metode pembayaran yang tersedia?",
    answer:
      "Kami menerima pembayaran melalui transfer bank (BCA, Mandiri, BNI), e-wallet (GoPay, OVO, Dana), dan tunai di kantor. Pembayaran bisa dilakukan bulanan atau per semester dengan diskon.",
  },
  {
    id: 4,
    category: "Pembayaran",
    question: "Apakah ada cicilan untuk biaya belajar?",
    answer:
      "Ya, untuk paket semester kami menyediakan opsi cicilan 2x atau 3x tanpa bunga. Silakan hubungi admin untuk informasi lebih lanjut.",
  },
  {
    id: 5,
    category: "Kelas",
    question: "Kelas dilakukan secara online atau offline?",
    answer:
      "Kami menyediakan keduanya! Siswa bisa memilih kelas offline di lokasi kami atau kelas online via Zoom. Materi dan kualitas pembelajaran sama untuk kedua opsi.",
  },
  {
    id: 6,
    category: "Kelas",
    question: "Berapa jumlah siswa dalam satu kelas?",
    answer:
      "Untuk kelas reguler maksimal 8 siswa, kelas intensif maksimal 5 siswa, dan kelas private 1-on-1. Hal ini untuk memastikan setiap siswa mendapat perhatian optimal.",
  },
  {
    id: 7,
    category: "Jadwal",
    question: "Bagaimana jika tidak bisa hadir? Apakah ada kelas pengganti?",
    answer:
      "Ya, siswa yang berhalangan hadir bisa mengikuti kelas pengganti dengan menghubungi admin minimal H-1. Kelas pengganti akan disesuaikan dengan jadwal tutor yang tersedia.",
  },
  {
    id: 8,
    category: "Jadwal",
    question: "Apakah jadwal belajar bisa disesuaikan?",
    answer:
      "Untuk paket private, jadwal 100% fleksibel sesuai kesepakatan. Untuk paket reguler dan intensif, kami menyediakan beberapa pilihan slot waktu yang bisa dipilih.",
  },
  {
    id: 9,
    category: "Lainnya",
    question: "Apakah ada jaminan peningkatan nilai?",
    answer:
      "Ya! Untuk paket intensif, kami memberikan garansi peningkatan nilai minimal 20 poin dalam 3 bulan. Jika tidak tercapai, siswa akan mendapat perpanjangan belajar gratis.",
  },
  {
    id: 10,
    category: "Lainnya",
    question: "Apakah orang tua bisa memantau perkembangan anak?",
    answer:
      "Tentu! Kami memberikan rapor perkembangan bulanan dan orang tua bisa berkonsultasi dengan tutor kapan saja melalui WhatsApp. Kami juga mengadakan parent meeting setiap akhir semester.",
  },
];

export const aboutContent = {
  profile: {
    title: "Tentang Bimbel Cerdas Indonesia",
    description:
      "Bimbel Cerdas Indonesia didirikan pada tahun 2015 dengan misi sederhana: membantu setiap siswa mencapai potensi akademik terbaiknya. Berawal dari rumah kecil dengan 5 siswa, kini kami telah dipercaya oleh lebih dari 2000 keluarga di seluruh Indonesia.",
    stats: [
      { value: "2000+", label: "Siswa Lulus" },
      { value: "50+", label: "Tutor Profesional" },
      { value: "95%", label: "Tingkat Kepuasan" },
      { value: "8", label: "Tahun Pengalaman" },
    ],
  },
  vision:
    "Menjadi lembaga bimbingan belajar terpercaya yang menghasilkan generasi cerdas, berkarakter, dan siap bersaing di era global.",
  mission: [
    "Memberikan pembelajaran berkualitas dengan kurikulum yang up-to-date",
    "Mengembangkan metode belajar yang menyenangkan dan efektif",
    "Mendampingi siswa secara personal untuk mencapai target akademik",
    "Membangun karakter positif dan kemandirian belajar siswa",
  ],
  approach: {
    title: "Pendekatan Pembelajaran Kami",
    methods: [
      {
        title: "Personal Learning",
        description:
          "Setiap siswa memiliki gaya belajar unik. Kami menyesuaikan metode pengajaran dengan kebutuhan individual.",
      },
      {
        title: "Concept First",
        description:
          "Fokus pada pemahaman konsep, bukan hafalan. Siswa diajarkan untuk berpikir kritis dan memecahkan masalah.",
      },
      {
        title: "Practice Makes Perfect",
        description:
          "Latihan soal intensif dengan pembahasan mendalam untuk mempersiapkan siswa menghadapi berbagai tipe soal.",
      },
      {
        title: "Continuous Support",
        description:
          "Pendampingan berkelanjutan di dalam dan luar kelas. Siswa bisa konsultasi kapan saja via WhatsApp.",
      },
    ],
  },
};
