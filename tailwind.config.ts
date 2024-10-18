import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                card: {
                    DEFAULT: 'var(--card)',
                    foreground: 'var(--card-foreground)'
                },
                'card-foreground': 'var(--card-foreground)',
                popover: {
                    DEFAULT: 'var(--popover)',
                    foreground: 'var(--popover-foreground)'
                },
                'popover-foreground': 'var(--popover-foreground)',
                primary: {
                    DEFAULT: 'var(--primary)',
                    foreground: 'var(--primary-foreground)'
                },
                'primary-foreground': 'var(--primary-foreground)',
                secondary: {
                    DEFAULT: 'var(--secondary)',
                    foreground: 'var(--secondary-foreground)'
                },
                'secondary-foreground': 'var(--secondary-foreground)',
                muted: {
                    DEFAULT: 'var(--muted)',
                    foreground: 'var(--muted-foreground)'
                },
                'muted-foreground': 'var(--muted-foreground)',
                accent: {
                    DEFAULT: 'var(--accent)',
                    foreground: 'var(--accent-foreground)'
                },
                'accent-foreground': 'var(--accent-foreground)',
                destructive: {
                    DEFAULT: 'var(--destructive)',
                    foreground: 'var(--destructive-foreground)'
                },
                'destructive-foreground': 'var(--destructive-foreground)',
                border: 'var(--border)',
                input: 'var(--input)',
                ring: 'var(--ring)',
                'chart-1': 'var(--chart-1)',
                'chart-2': 'var(--chart-2)',
                'chart-3': 'var(--chart-3)',
                'chart-4': 'var(--chart-4)',
                'chart-5': 'var(--chart-5)',
                chart: {
                    '1': 'var(--chart-1)',
                    '2': 'var(--chart-2)',
                    '3': 'var(--chart-3)',
                    '4': 'var(--chart-4)',
                    '5': 'var(--chart-5)'
                }
            }
        }
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require("tailwindcss-animate")],
};
export default config;
