/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: {
                krub: 'var(--font-krub)',
            },
            colors: {
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                destructive: 'hsl(var(--red))',
                text: 'hsl(var(--text))',
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                icon: 'hsl(var(--icon))',
                ring: 'hsl(var(--ring))',
                'light-gray-1': 'hsl(var(--light-gray-1))',
                'light-gray-2': 'hsl(var(--light-gray-2))',
            },
            borderRadius: {
                btn: 'calc(var(--radius) - 4px)',
                card: 'calc(var(--radius) - 2px)',
                input: 'calc(var(--radius))',
                modal: 'calc(var(--radius) + 2px)',
                large: 'calc(var(--radius) + 5px)',
            },
        },
    },
    plugins: [],
};
