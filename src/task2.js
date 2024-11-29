const DataTable = ({ data }) => {
 
    const headers = Object.keys(data[0]);

  return (
    <table style={{ border: '2px solid black', borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th
              key={header}
              style={{ border: '1px solid black', padding: '8px', textAlign: 'left', backgroundColor: 'red' }}
            >
              {header.toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td
                key={header}
                style={{ border: '1px solid black', padding: '8px', backgroundColor: 'aqua' }}
              >
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const TASK2 = () => {
  const sampleData = [
    { id: 1, name: 'John Doe', age: 28, course: 'python', duration: '6 months' },
    { id: 2, name: 'Jane Smith', age: 34, course: 'java', duration: ' 5 months' },
    { id: 3, name: 'Samuel Green', age: 23, course: 'c++', duration: '8 months' },
    { id: 4, name: 'rajesh ', age: 21, course: 'mern stack', duration: '4 months' },
    { id: 5, name: 'Samuel ', age: 23, course: 'front end', duration: '3 months' },
  ];

  return (
    <div>
      <h1>Data Table</h1>
      <DataTable data={sampleData} />
    </div>
  );
};

export default TASK2;

