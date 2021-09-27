import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {getProfileAsync} from '../store/auth/actions';

export function ProvideAuth({children}) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('accessToken');

      if (token)
        await dispatch(getProfileAsync());

      setIsLoading(false);
    })();
  }, [dispatch]);

  return !isLoading && children;
}