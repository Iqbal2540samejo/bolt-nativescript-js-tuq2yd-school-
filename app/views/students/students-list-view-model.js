import { Observable } from '@nativescript/core';
import { getAllRows } from '../../database/database';
import { navigate } from '../../utils/navigation';

export function createViewModel() {
  const viewModel = new Observable();
  viewModel.students = [];

  viewModel.loadStudents = async () => {
    try {
      const students = await getAllRows('SELECT * FROM students');
      viewModel.set('students', students);
    } catch (error) {
      console.error('Error loading students:', error);
    }
  };

  viewModel.onItemTap = (args) => {
    const tappedItem = viewModel.students[args.index];
    navigate('views/students/student-details-page', { studentId: tappedItem.id });
  };

  viewModel.onAddStudent = () => {
    navigate('views/students/add-student-page');
  };

  viewModel.loadStudents();

  return viewModel;
}