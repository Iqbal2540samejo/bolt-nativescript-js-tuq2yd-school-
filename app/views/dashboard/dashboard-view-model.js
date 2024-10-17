import { Observable } from '@nativescript/core';
import { navigate } from '../../utils/navigation';

export function createViewModel() {
  const viewModel = new Observable();

  viewModel.onStudentsTab = () => {
    navigate('views/students/students-list-page');
  };

  viewModel.onTeachersTab = () => {
    navigate('views/teachers/teachers-list-page');
  };

  viewModel.onAttendanceTab = () => {
    navigate('views/attendance/attendance-page');
  };

  viewModel.onExamsTab = () => {
    navigate('views/exams/exams-page');
  };

  viewModel.onReportsTab = () => {
    navigate('views/reports/reports-page');
  };

  viewModel.onSchoolProfileTab = () => {
    navigate('views/school-profile/school-profile-page');
  };

  return viewModel;
}