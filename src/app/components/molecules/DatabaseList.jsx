import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import TableList from './TableList';

function DatabaseList(props) {
  const databases = useSelector(store => store.databases);
  const [open, setOpen] = useState(false);
  return (
    <div className='database-list'>
      <div onClick={()=>setOpen(!open)} className='database-list--header'>
        <h2>My Tables</h2>
        {open ? <span className='fa fa-angle-down' /> : <span className='fa  fa-angle-right' />}
      </div>      
      {open && (
        <ul className='database-list--contents'>
          {databases.map((database, databaseKey) => {
            return (
              <li key={database.name} className='database-list--database'>
                <h3>{database.name}</h3>
                <TableList database={databaseKey} />
              </li>
            )
          })}
        </ul>
      )}

    </div>
  );
}
export default DatabaseList;
