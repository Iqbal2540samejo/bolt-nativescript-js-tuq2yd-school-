import { Observable } from '@nativescript/core';
import { navigate } from '../../utils/navigation';

export function createViewModel() {
  const viewModel = new Observable();
  viewModel.username = "";
  viewModel.password = "";

  viewModel.onLogin = () => {
    // TODO: Implement actual login logic
    console.log(`Login attempt with username: ${viewModel.username}`);
    navigate('views/dashboard/dashboard-page');
  };

  return viewModel;
}