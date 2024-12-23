import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login", // Rota padrão
        permanent: true, // Define se o redirecionamento é permanente (301) ou temporário (307)
      },
    ];
  },
};

export default nextConfig;
