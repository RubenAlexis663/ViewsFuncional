import express from "express";
import cors from "cors"; // Asegúrate de importar cors

const app = express();

app.use(cors());
app.use("/public", express.static("public"));

// Middleware para manejar datos del formulario
app.use(express.urlencoded({ extended: true }));

// Establece el motor de plantillas
app.set("view engine", "ejs");
app.set("views", "./views");

// Datos de ejemplo para las tareas
const tasks = [
  { id: 1, name: 'Tarea 1' },
  { id: 2, name: 'Tarea 2' },
];

// Rutas

// Carga la página de inicio
app.get("/", (req, res) => {
  res.render("inicio", {});
});

// Ruta para la lista de tareas
app.get("/tasks", (req, res) => {
  res.render("pages/taskList", { tasks });
});

// Ruta para agregar una nueva tarea
app.get("/new-task", (req, res) => {
  res.render("pages/newTask");
});

app.post("/new-task", (req, res) => {
  const newTask = { id: tasks.length + 1, name: req.body.taskName };
  tasks.push(newTask);
  res.redirect("/tasks");
});

// Usa el enrutador para las rutas relacionadas con estudiantes
//app.use("/", router);

// Código para desplegar el servidor en una app que usa nodejs
const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://127.0.0.1:${PORT}`);
});










  


