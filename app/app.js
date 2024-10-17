import { Application } from '@nativescript/core';
import { initializeDatabase } from './database/database';

// Initialize the database when the app starts
initializeDatabase()
  .then(() => {
    console.log('Database initialized successfully');
    Application.run({ moduleName: 'app-root' });
  })
  .catch((error) => {
    console.error('Failed to initialize database:', error);
  });