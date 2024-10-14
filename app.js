import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import comentarioRoutes from './routes/comentarioRoutes.js';
import enfermeroRoutes from './routes/enfermeroRoutes.js';
import ofertaRoutes from './routes/ofertaRoutes.js';
import postulacionRoutes from './routes/postulacionRoutes.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
import applicationMiddleware from './middleware/applicationMiddleware.js';
import errorMiddleware from './middleware/errorMiddleware.js';

const app = express();

app.use(cors({ origin: 'https://arellanofront.onrender.com' }));

app.use(express.static('public'));

app.use(bodyParser.json());

app.use(applicationMiddleware);

// Definir las rutas
app.use('/api/comentarios', comentarioRoutes);
app.use('/api/enfermeros', enfermeroRoutes);
app.use('/api/ofertas', ofertaRoutes);
app.use('/api/postulaciones', postulacionRoutes);
app.use('/api/usuarios', usuarioRoutes);

// Manejo de errores
app.use(errorMiddleware);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
