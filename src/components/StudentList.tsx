import { Student } from "../types/Student";
import { StudentListItem } from "./StudentListItem";

interface StudentListProps {
  students: Student[];
  deleteStudent: (id: string) => void;
  updateStudent: (id: string, updatedStudent: Partial<Student>) => void;
}

export const StudentList = ({ students, deleteStudent, updateStudent }: StudentListProps) => {
  return (
    <ul className="mt-4 grid grid-cols-2 gap-4">
      {students.map((student) => (
        <StudentListItem
          key={student.id}
          student={student}
          deleteStudent={deleteStudent}
          updateStudent={updateStudent}
        />
      ))}
    </ul>
  );
};
