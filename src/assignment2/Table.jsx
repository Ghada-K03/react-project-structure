function Table({ columns, data, striped }) {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className={striped && index % 2 !== 0 ? "striped-row" : ""}
          >
            {columns.map((column) => (
              <td key={column}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
