import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {refreshAsync} from '../store/auth/actions';

export function ProvideAuth({children}) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await dispatch(refreshAsync())
      setIsLoading(false);
    })();
  },[]);

  return !isLoading && children;
}