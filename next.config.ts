import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Note: Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
    // are not supported with `output: 'export'`. Configure them in your
    // hosting platform instead:
    // - Vercel: Use vercel.json `headers` field
    // - Netlify: Use _headers file
    // - Other: Configure at the web server level
};

export default nextConfig;
