import express from "express";
import cors from "cors"; // permite peticiones desde el front
import taskRoutes from "./routes/task.js";

const app = express();
app.use(cors()); // permite peticiones desde el front
app.use(express.json()); // permite peticiones json

app.get("/", (req, res) => {
    res.send("¡Servidor funcionando!"); // Mensaje básico para verificar que el servidor está funcionando
  });

app.use("/api", taskRoutes); // rutas

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
