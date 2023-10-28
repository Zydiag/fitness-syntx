import { isAuthenticated } from '@/utils/Auth';
import { redirect } from 'next/navigation';

const Dashboard = () => {
  if (!isAuthenticated) {
    redirect('/');
  }
  return <div>Dashboard</div>;
};
export default Dashboard;
