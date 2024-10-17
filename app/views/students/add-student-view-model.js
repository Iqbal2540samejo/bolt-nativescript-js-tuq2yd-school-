import { Observable } from '@nativescript/core';
import { executeQuery } from '../../database/database';
import { navigate } from '../../utils/navigation';

export function createViewModel() {
  const viewModel = new Observable();

  // Initialize properties
  viewModel.name = "";
  viewModel.fatherName = "";
  viewModel.grn = "";
  viewModel.religion = "";
  viewModel.surname = "";
  viewModel.fatherCNIC = "";
  viewModel.bFormNumber = "";
  viewModel.dateOfBirth = new Date();
  viewModel.previousSchool = "";
  viewModel.previousClass = "";
  viewModel.admittedClass = "";
  viewModel.currentClass = "";
  viewModel.village = "";
  viewModel.dateOfAdmission = new Date();
  viewModel.picturePath = "";

  viewModel.onAddPicture = () => {
    // TODO: Implement picture selection logic
    console.log("Add picture tapped");
  };

  viewModel.onSaveStudent = async () => {
    try {
      const query = `INSERT INTO students (
        name, father_name, grn, religion, surname, father_cnic, b_form_number,
        date_of_birth, previous_school, previous_class, admitted_class,
        current_class, village, date_of_admission, picture
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      const params = [
        viewModel.name,
        viewModel.fatherName,
        viewModel.grn,
        viewModel.religion,
        viewModel.surname,
        viewModel.fatherCNIC,
        viewModel.bFormNumber,
        viewModel.dateOfBirth.toISOString(),
        viewModel.previousSchool,
        viewModel.previousClass,
        viewModel.admittedClass,
        viewModel.currentClass,
        viewModel.village,
        viewModel.dateOfAdmission.toISOString(),
        viewModel.picturePath
      ];

      await executeQuery(query, params);
      console.log("Student saved successfully");
      navigate('views/students/students-list-page');
    } catch (error) {
      console.error("Error saving student:", error);
    }
  };

  return viewModel;
}