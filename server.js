import app from './src/app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    // Clear console
    Array.from({ length: 30 }, () => console.log(' '));

    // Stylized server start message
    console.log('\x1b[36m%s\x1b[0m', `======================================`);
    console.log(`            UNIFECAF Flix`);
    console.log(` 🔹 Servidor rodando na porta: ${PORT}`);
    console.log('\x1b[36m%s\x1b[0m', `======================================`);

    // Instructions to access the server and commands
    console.log('\x1b[90m%s\x1b[0m', `   Acesse: http://localhost:${PORT}`);
});