import { Observable } from '@nativescript/core';
import { getAllRows, executeQuery } from '../../database/database';
import { navigate } from '../../utils/navigation';

export function createViewModel() {
  const viewModel = new Observable();
  viewModel.students = [];
  viewModel.selectedDate = new Date();

  viewModel.loadStudents = async () => {
    try {
      const students = await getAllRows('SELECT id, name FROM students');
      viewModel.set('students', students.map(student => ({
        ...student,
        isPresent: false
      })));
    } catch (error) {
      console.error('Error loading students:', error);
    }
  };

  viewModel.onSaveAttendance = async () => {
    try {
      for (const student of viewModel.students) {
        const query = `INSERT INTO attendance (student_id, date, status)
                       VALUES (?, ?, ?)`;
        const params = [
          student.id,
          viewModel.selectedDate.toISOString().split('T')[0],
          student.isPresent ? 'present' : 'absent'
        ];
        await executeQuery(query, params);
      }
      console.log('Attendance saved successfully');
      navigate('views/attendance/attendance-page');
    } catch (error) {
      console.error('Error saving attendance:', error);
    }
  };

  viewModel.loadStudents();

  return viewModel;
}