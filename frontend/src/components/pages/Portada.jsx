import React from 'react'
import NoticiasList from '../NewsList.jsx';
import Aside from '../Aside.jsx';

import '../../styles/Portada.css';

const Portada = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8">
          <NoticiasList />
        </div>
        <div className="col-md-4">
          <Aside />
        </div>
      </div>
    </div>
  )
}

export default Portada