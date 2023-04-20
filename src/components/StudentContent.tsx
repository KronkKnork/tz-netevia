import { Student } from "../types/Student";

interface StudentContentProps {
  student: Student;
  classCardText: string;
}

export const StudentContent = ({
  student,
  classCardText,
}: StudentContentProps) => {
  return (
    <>
      <div className={classCardText}>
        <span className="text-gray-500 my-auto">ФИО:</span>
        <span>{student.fullName}</span>
      </div>
      <div className={classCardText}>
        <span className="text-gray-500 my-auto">Дата рождения:</span>
        <span>{student.birthDate}</span>
      </div>
      <div className={classCardText}>
        <span className="text-gray-500 my-auto">Успеваемость:</span>
        <span>{student.performance}</span>
      </div>
    </>
  );
};
