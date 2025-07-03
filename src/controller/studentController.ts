import { Types } from "mongoose";
import Students from "../model/studentSchema";
import { StudentTypes, Status } from "../types";

class StudentService {
  async createNewStudent(studentDetails: StudentTypes): Promise<Status> {
    try {
      const student = await Students.findOne({ phone: studentDetails.phone });

      if (student) {
        return {
          message: "Student already exist try another number",
          success: false,
          StatusCode: 409,
        };
      }

      const newStudent = new Students({
        name: studentDetails.name,
        age: studentDetails.age,
        course: studentDetails.course,
        phone: studentDetails.phone,
      });

      newStudent.save();

      return {
        message: "Student Added Successfully",
        success: true,
        StatusCode: 200,
      };
    } catch (error) {
      console.log(error);
      return { message: "Internal Error", success: false, StatusCode: 500 };
    }
  }

  async editStudent(studentDetails: StudentTypes): Promise<Status> {
    try {
      const student = await Students.findById(studentDetails._id);
      if (!student) {
        return { message: "No user found", StatusCode: 204, success: false };
      }

      student.name = studentDetails.name;
      student.age = studentDetails.age;
      student.course = studentDetails.course;
      student.phone = studentDetails.phone;
      student.save();

      return {
        message: "Updated successfully",
        success: true,
        StatusCode: 200,
      };
    } catch (error) {
      console.log(error);
      return { message: "Internal Error", success: false, StatusCode: 500 };
    }
  }

  async getAllStudents(): Promise<Status> {
    try {
      const students = await Students.find();
      return {
        message: "fetched successfully",
        success: true,
        StatusCode: 200,
        data:students
      };
    } catch (error) {
      console.log(error);
      return { message: "Internal Error", success: false, StatusCode: 500 };
    }
  }

  async deleteStudent(id: Types.ObjectId): Promise<Status> {
    try {
      await Students.findByIdAndDelete(id);
      return { message: "Student Deleted", success: true, StatusCode: 200 };
    } catch (error) {
      console.log(error);
      return { message: "Internal Error", success: false, StatusCode: 500 };
    }
  }
}

export default StudentService;