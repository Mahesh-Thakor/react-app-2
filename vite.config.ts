import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [react()],
    server: {
        host: 'react-app.local', // Set the hostname to your custom domain
        port: 5173, // Default port is 5173
    },
});