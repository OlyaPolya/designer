import React, { useEffect } from 'react';
import { useAppSelector } from '../../hooks/index';
import './styles.scss';

function RedirectPage(): JSX.Element {
  const url = useAppSelector((state) => state.url.url);

  useEffect(() => {
    const a = document.createElement('a');
    a.target = '_blank';
    a.href = url;
    a.click();
  }, []);

  return (
    <div className='redirect'>
      <h3>Redirecting...</h3>
    </div>
  );
}

export default RedirectPage;
