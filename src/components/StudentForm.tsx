import { useState } from "react";
import { Student, performance } from "../types/Student";
import Input from './Input';
import Select from './Select';

interface StudentFormProps {
	addStudent: (student: Student) => void;
}

export const StudentForm = ({ addStudent }: StudentFormProps) => {
	const [fullName, setFullName] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [performance, setPerformance] = useState<performance>(undefined);

	const handleSubmit = () => {
		const newStudent: Student = {
			id: String(Date.now()),
			fullName,
			birthDate,
			performance,
		};
		addStudent(newStudent);
		setFullName("");
		setBirthDate("");
		setPerformance(undefined);
	};

	const isFormValid = fullName !== "" && birthDate !== "" && performance !== undefined && ["неуд", "уд", "хор", "отл"].includes(performance);

	const classInput = "mr-4 bg-slate-800 border-[#1e1e1e] hover:bg-slate-700 rounded-md p-3 outline-none"

	return (
		<div className="flex">
			<Input
				type="text"
				placeholder="ФИО"
				value={fullName}
				onChange={(e) => setFullName(e.target.value)}
				className={classInput}
			/>
			<Input
				type="date"
				value={birthDate}
				onChange={(e) => setBirthDate(e.target.value)}
				className={classInput}
			/>
			<Select
				value={performance}
				onChange={(e) =>
					setPerformance(
						e.target.value as 'неуд' | 'уд' | 'хор' | 'отл' | undefined
					)
				}
				className={classInput}
			>
				<option value="">Выберите успеваемость</option>
				<option value="неуд">Неуд</option>
				<option value="уд">Уд</option>
				<option value="хор">Хор</option>
				<option value="отл">Отл</option>
			</Select>
			<button
				onClick={handleSubmit}
				disabled={!isFormValid}
				className={`bg-blue-500 text-white px-4 py-2 rounded ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''
					}`}
			>
				Добавить студента
			</button>
		</div>
	);
};
