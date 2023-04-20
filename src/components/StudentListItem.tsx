import { useState } from "react";
import { Student } from "../types/Student";
import Select from "./Select";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { StudentContent } from "./StudentContent";

interface StudentListItemProps {
  student: Student;
  deleteStudent: (id: string) => void;
  updateStudent: (id: string, updatedStudent: Partial<Student>) => void;
}

export const StudentListItem = ({
  student,
  deleteStudent,
  updateStudent,
}: StudentListItemProps) => {
  const [editing, setEditing] = useState(false);
  const [updatedStudent, setUpdatedStudent] = useState(student);

  const handleUpdate = () => {
    updateStudent(student.id, updatedStudent);
    setEditing(false);
  };

  const isFormValid =
    updatedStudent.fullName !== "" &&
    updatedStudent.birthDate !== "" &&
    updatedStudent.performance !== undefined &&
    ["неуд", "уд", "хор", "отл"].includes(updatedStudent.performance);

  const classCardText = "flex justify-between px-5 mb-2 min-h-[50px]";
  const classInput =
    "bg-slate-900 border-[#1e1e1e] hover:bg-slate-700 rounded-md p-3 outline-none min-w-[300px]";

  return (
    <li className="bg-slate-800 shadow-lg rounded-xl">
      <div className="flex justify-between bg-slate-700 mb-3 p-1">
        <button
          onClick={() => setEditing((prev) => !prev)}
          className="text-sky-600 hover:text-sky-500 p-1"
        >
          <FontAwesomeIcon icon={faEdit} className="h-6 w-6" />
        </button>
        <div className="font-bold text-xl">{student.fullName}</div>
        <button
          onClick={() => deleteStudent(student.id)}
          className=" text-red-700 hover:text-red-600 p-1"
        >
          <FontAwesomeIcon icon={faCircleXmark} className="h-6 w-6" />
        </button>
      </div>
      {editing ? (
        <>
          <div className={classCardText}>
            <span className="text-gray-500 my-auto">ФИО:</span>{" "}
            <Input
              type="text"
              value={updatedStudent.fullName}
              className={classInput}
              onChange={(e) =>
                setUpdatedStudent({
                  ...updatedStudent,
                  fullName: e.target.value,
                })
              }
            />
          </div>
          <div className={classCardText}>
            <span className="text-gray-500 my-auto">Дата рождения:</span>{" "}
            <Input
              type="date"
              value={updatedStudent.birthDate}
              className={classInput}
              onChange={(e) =>
                setUpdatedStudent({
                  ...updatedStudent,
                  birthDate: e.target.value,
                })
              }
            />
          </div>
          <div className={classCardText}>
            <span className="text-gray-500 my-auto">Успеваемость:</span>{" "}
            <Select
              value={updatedStudent.performance}
              className={classInput}
              onChange={(e) =>
                setUpdatedStudent({
                  ...updatedStudent,
                  performance: e.target.value as "неуд" | "уд" | "хор" | "отл",
                })
              }
            >
              <option value="" disabled>
                Выберите успеваемость
              </option>
              <option value="неуд">Неуд</option>
              <option value="уд">Уд</option>
              <option value="хор">Хор</option>
              <option value="отл">Отл</option>
            </Select>
          </div>
          <div className="mt-2 mb-5 px-5">
            <button
              onClick={handleUpdate}
              disabled={!isFormValid}
              className={`${
                isFormValid ? "bg-green-900" : "bg-green-950"
              } bg-green-900 rounded-md text-white px-5 py-2 mr-4`}
            >
              Сохранить
            </button>
            <button
              onClick={() => setEditing(false)}
              className="bg-red-900 rounded-md text-white px-5 py-2 p-1"
            >
              Отмена
            </button>
          </div>
        </>
      ) : (
        <StudentContent student={student} classCardText={classCardText} />
      )}
    </li>
  );
};
