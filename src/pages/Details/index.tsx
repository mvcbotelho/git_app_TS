import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepoParams {
  name: string;
}

const Details: React.FC = () => {
  const { params } = useRouteMatch<RepoParams>();
  return (
    <>
      <div>
        Details:
        {params.name}
      </div>
    </>
  );
};

export default Details;
