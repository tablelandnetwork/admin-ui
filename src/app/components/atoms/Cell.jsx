import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCellUpdated } from '../../store/selectedCell';

function Cell(props) {
  const { row, column } = props;
  const dispatch = useDispatch();
  const cell = useSelector(store => store.latestResultSet.rows[props.row][props.column]);
  const selectedCell = useSelector(state => state.selectedCell);
  const selectedClass = (
    row === selectedCell.row
    && column === selectedCell.column
  ) ? "selected" : "";

  if (!cell) return null;

  return (
    <td onClick={() => dispatch(selectedCellUpdated({...props}))} className={selectedClass}>{cell}</td>
  )
}

export default Cell;
