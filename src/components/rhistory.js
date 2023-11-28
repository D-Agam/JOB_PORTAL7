import React from 'react';
import Footer from './footer';

function Rhistory(props) {
  var dataArray = props.arr;

  if (dataArray.length === 0) {
    return (
      <div>
        <h1>No Records Found</h1>
        <Footer />
      </div>
    );
  }

  const excludedColumns = props.type === 'employee' ? ['candidate_name', 'candidate_email'] : [];

  return (
    <div>
      <h1>
        History <span style={{ borderBottom: '4px solid #67e0e6' }}>Details</span>:
      </h1>
      <br />
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            {Object.keys(dataArray[0]).map((key) => (
              // Check if the column should be excluded
              !excludedColumns.includes(key) && (
                <th
                  key={key}
                  style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}
                >
                  {key}
                </th>
              )
            ))}
          </tr>
        </thead>
        <tbody>
          {dataArray.map((data, rowIndex) => (
            <tr key={rowIndex}>
              {Object.entries(data).map(([key, value], cellIndex) => (
                // Check if the column should be excluded
                !excludedColumns.includes(key) && (
                  <td
                    key={cellIndex}
                    style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}
                  >
                    {value}
                  </td>
                )
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default Rhistory;
