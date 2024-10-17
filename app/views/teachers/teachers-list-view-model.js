import { Observable } from '@nativescript/core';
import { getAllRows } from '../../database/database';
import { navigate } from '../../utils/navigation';

export function createViewModel() {
  const viewModel = new Observable();
  viewModel.teachers = [];

  viewModel.loadTeachers = async () => {
    try {
      const teachers = await getAllRows('SELECT * FROM teachers');
      viewModel.set('teachers', teachers);
    } catch (error) {
      console.error('Error loading teachers:', error);
    }
  };

  viewModel.onItemTap = (args) => {
    const tappedItem = viewModel.teachers[args.index];
    navigate('views/teachers/teacher-details-page', { teacherId: tappedItem.id });
  };

  viewModel.onAddTeacher = () => {
    navigate('views/teachers/add-teacher-page');
  };

  viewModel.loadTeachers();

  return viewModel;
}