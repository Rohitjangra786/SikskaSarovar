import { createRequire } from 'module';
const require = createRequire(import.meta.url);
try {
    require.resolve('tailwindcss');
    console.log('Tailwind found');
} catch (e) {
    console.log('Tailwind missing');
}
