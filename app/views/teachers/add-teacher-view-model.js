import { Observable } from '@nativescript/core';
import { executeQuery } from '../../database/database';
import { navigate } from '../../utils/navigation';

export function createViewModel() {
  const viewModel = new Observable();

  // Initialize properties
  viewModel.name = "";
  viewModel.fatherName = "";
  viewModel.teacherId = "";
  viewModel.cnic = "";
  viewModel.religion = "";
  viewModel.surname = "";

  viewModel.onSaveTeacher = async () => {
    try {
      const query = `INSERT INTO teachers (
        name, father_name, teacher_id, cnic, religion, surname
      ) VALUES (?, ?, ?, ?, ?, ?)`;

      const params = [
        viewModel.name,
        viewModel.fatherName,
        viewModel.teacherId,
        viewModel.cnic,
        viewModel.religion,
        viewModel.surname
      ];

      await executeQuery(query, params);
      console.log("Teacher saved successfully");
      navigate('views/teachers/teachers-list-page');
    } catch (error) {
      console.error("Error saving teacher:", error);
    }
  };

  return viewModel;
}