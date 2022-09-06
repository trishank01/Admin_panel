import React from 'react'

const DataTable = (props) => {
    const {data , showData}= props
  return (
   <>
    <div id="table-wrapper">
            <div id="table-headers">
              <table>
                <thead>
                  <tr>
                    <th className="column1">Id</th>
                    <th className="column2">FirstName</th>
                    <th className="column3">LastName</th>
                    <th className="column4">Email</th>
                    <th className="column5">Phone</th>
                  </tr>
                </thead>
              </table>
            </div>

            <div id="table-data">
              <table>
                <tbody>
                  {data.map((item) => {
                    return (
                      <tr
                        key={item.id}
                        className="data-row"
                        onClick={() => showData(item)}
                      >
                        <td className="column1">{item.id}</td>
                        <td className="column2">{item.firstName}</td>
                        <td className="column3">{item.lastName}</td>
                        <td className="column4">{item.email}</td>
                        <td className="column5">{item.phone}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
   </>
  )
}

export default DataTable