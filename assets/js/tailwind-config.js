tailwind.config = {
  safelist: [
    "sr-only",
    "mt-3",
    "mt-5",
    "mt-6",
    "mt-12",
    "max-w-md",
    "text-sm",
    "leading-7",
    "text-slate-300",
    "text-slate-400",
    "space-y-3",
    "border-t",
    "border-white/10",
    "pt-6",
    "md:flex",
    "md:items-center",
    "md:justify-between",
    "md:mt-0"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0B1F3A",
          secondary: "#2563EB",
          accent: "#FF3B3B",
          dark: "#06111F",
          ink: "#09182E",
          mist: "#F4F8FC",
          line: "#D9E4F2",
          muted: "#60708A"
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Barlow Condensed"', "sans-serif"],
        condensed: ['"Barlow Condensed"', "sans-serif"],
        body: ["Bahnschrift", '"Segoe UI"', "sans-serif"]
      },
      boxShadow: {
        premium: "0 30px 80px rgba(11, 31, 58, 0.12)",
        soft: "0 18px 48px rgba(11, 31, 58, 0.08)",
        glow: "0 24px 60px rgba(37, 99, 235, 0.22)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
        "light-grid":
          "linear-gradient(rgba(11,31,58,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,31,58,0.05) 1px, transparent 1px)"
      }
    }
  }
};
