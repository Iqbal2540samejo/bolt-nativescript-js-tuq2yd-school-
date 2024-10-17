import { Observable } from '@nativescript/core';
import { getAllRows } from '../../database/database';

export function createViewModel() {
  const viewModel = new Observable();
  viewModel.attendanceRecords = [];
  viewModel.selectedDate = new Date();

  viewModel.loadAttendanceRecords = async () => {
    try {
      const query = `
        SELECT s.name, a.status
        FROM attendance a
        JOIN students s ON a.student_id = s.id
        WHERE a.date = ?
      `;
      const params = [viewModel.selectedDate.toISOString().split('T')[0]];
      const records = await getAllRows(query, params);
      viewModel.set('attendanceRecords', records);
    } catch (error) {
      console.error('Error loading attendance records:', error);
    }
  };

  viewModel.on(Observable.propertyChangeEvent, (propertyChangeData) => {
    if (propertyChangeData.propertyName === 'selectedDate') {
      viewModel.loadAttendanceRecords();
    }
  });

  viewModel.loadAttendanceRecords();

  return viewModel;
}