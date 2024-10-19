import express from "express";


import { listarEstudiantes} from "./estudianteController.js";
 
  const router = express.Router();


  router.get("/consultarEstudiante", async (req, res) => 
    {
        try {
            const estudiantes = await listarEstudiantes();
            res.render("pages/estudiantes", { estudiantes });
          } catch (error) {
            const { status, message } = error;
            res.status(status || 500).json({ error: message });
          }
        
    

    }
)