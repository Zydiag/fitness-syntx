import { isAuth } from '@/utils/Auth';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function isAuthenticated(Component) {
  function IsAuthenticated(props) {

    useEffect(() => {
      if (!isAuth) {
        return redirect('/login');
      }
    }, []);

    if (!isAuth) {
      return null;
    }
    // return <Component {...props} />;
  }
}
