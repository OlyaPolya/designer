import { Link, useRouteError } from 'react-router-dom';
import './styles.scss';

function ErrorPage(): JSX.Element {
  const error = useRouteError() as Response;

  return (
    <div className='error'>
      <p>{`Page ${error.statusText.toLowerCase()}`}</p>
      <Link to={`/`}>Click to go Main Page</Link>
    </div>
  );
}

export default ErrorPage;








