import { Sqlite } from '@nativescript/sqlite';

let database;

export async function initializeDatabase() {
  if (!database) {
    database = await new Sqlite('schoolmanagement.db');
    await createTables();
  }
}

async function createTables() {
  const queries = [
    `CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      father_name TEXT,
      grn TEXT,
      religion TEXT,
      surname TEXT,
      father_cnic TEXT,
      b_form_number TEXT,
      date_of_birth TEXT,
      previous_school TEXT,
      previous_class TEXT,
      admitted_class TEXT,
      current_class TEXT,
      village TEXT,
      date_of_admission TEXT,
      picture TEXT
    )`,
    `CREATE TABLE IF NOT EXISTS teachers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      father_name TEXT,
      teacher_id TEXT,
      cnic TEXT,
      religion TEXT,
      surname TEXT
    )`,
    `CREATE TABLE IF NOT EXISTS attendance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_id INTEGER,
      date TEXT,
      status TEXT,
      FOREIGN KEY (student_id) REFERENCES students (id)
    )`,
    `CREATE TABLE IF NOT EXISTS exams (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      date TEXT
    )`,
    `CREATE TABLE IF NOT EXISTS exam_results (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      exam_id INTEGER,
      student_id INTEGER,
      subject TEXT,
      marks INTEGER,
      FOREIGN KEY (exam_id) REFERENCES exams (id),
      FOREIGN KEY (student_id) REFERENCES students (id)
    )`
  ];

  for (const query of queries) {
    await database.execute(query);
  }
}

export async function executeQuery(query, params = []) {
  return await database.execute(query, params);
}

export async function getAllRows(query, params = []) {
  return await database.all(query, params);
}