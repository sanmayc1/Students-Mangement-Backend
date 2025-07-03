import { Request, Response } from "express";
import StudentService from "./studentController";

class AdminService {
  constructor(private student: StudentService) {}

  async createStudent(req: Request, res: Response): Promise<void> {
    try {
      const response = await this.student.createNewStudent(req.body.student);
      res.status(response.StatusCode).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Error" });
    }
  }

  async updateStudent(req: Request, res: Response): Promise<void> {
    try {
      const response = await this.student.editStudent(req.body.student);
      res.status(response.StatusCode).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Error" });
    }
  }

  async deleteStudent(req: Request, res: Response): Promise<void> {
    try {
      const response = await this.student.deleteStudent(req.body.studentId);
      res.status(response.StatusCode).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Error" });
    }
  }

  async getStudents(req: Request, res: Response): Promise<void> {
    try {
      const response = await this.student.getAllStudents();
      res.status(response.StatusCode).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Error" });
    }
  }
}


const adminService = new AdminService(new StudentService());

export default adminService;
