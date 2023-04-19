import { useState, useEffect } from "react";
import { Student } from "./types/Student";
import { StudentForm } from "./components/StudentForm";
import { StudentList } from "./components/StudentList";

const App = () => {
	const [students, setStudents] = useState<Student[]>([]);

	useEffect(() => {
		const storedStudents = localStorage.getItem("students");
		if (storedStudents) {
			setStudents(JSON.parse(storedStudents));
		}
	}, []);

	useEffect(() => {
		students.length > 0 && localStorage.setItem("students", JSON.stringify(students));
	}, [students]);

	const addStudent = (newStudent: Student) => {
		setStudents([...students, newStudent]);
	};

	const deleteStudent = (id: string) => {
		setStudents(students.filter((student) => student.id !== id));
	};

	const updateStudent = (id: string, updatedStudent: Partial<Student>) => {
		setStudents(
			students.map((student) => (student.id === id ? { ...student, ...updatedStudent } : student))
		);
	};

	return (
		<div className="container mx-auto p-4 text-[#ccc]">
			<h1 className="text-2xl mb-4 text-white text-center mb-16">Список студентов</h1>
			<StudentForm addStudent={addStudent} />
			<StudentList students={students} deleteStudent={deleteStudent} updateStudent={updateStudent} />
		</div>
	);
};

export default App;

