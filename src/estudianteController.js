import pool from "./db.js";

export const listarEstudiantes = async () => {
    try {
      const [rows] = await pool.query("SELECT * FROM estudiantes");
      return rows;
    } catch (error) {
      throw { status: 500, message: "Error al obtener estudiantes" };
    }
  };

  
  