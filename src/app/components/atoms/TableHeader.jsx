import React from 'react';
import { useSelector } from 'react-redux';

function HeaderRow(props) {

  const columns = useSelector(store => store.latestResultSet?.columns);

  if (!columns) return null;

  return (
    <thead>
      <tr>      
          {columns.map((column, columnKey) => {
            return (
              <th key={column}>
                {column}
              </th>
            )

          })}
      </tr>
    </thead>
  );
}
export default HeaderRow;
