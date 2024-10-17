import { Observable } from '@nativescript/core';
import { navigate } from '../../utils/navigation';

export function createViewModel() {
  const viewModel = new Observable();

  viewModel.onMarkAttendance = () => {
    navigate('views/attendance/mark-attendance-page');
  };

  viewModel.onViewAttendanceRecords = () => {
    navigate('views/attendance/view-attendance-records-page');
  };

  return viewModel;
}