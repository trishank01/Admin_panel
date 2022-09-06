import React from 'react'

const UserDetails = (props) => {
    const {value} = props
  return (
    <>
     <div id="info-wrapper">
          <h1>Details</h1>
          <p>Click on a table item to get detailed information</p>
          {value != null && (
            <div id="info-content">
              <div>
                <b>User selected:</b> {value.firstName}
              </div>
              <div>
                <b>Description: </b>
                <textarea
                  cols="50"
                  rows="5"
                  value={value.description}
                  readOnly
                />
              </div>
              <div>
                <b>Address:</b> {value.address.streetAddress}
              </div>
              <div>
                <b>City:</b> {value.address.city}
              </div>
              <div>
                <b>State:</b> {value.address.state}
              </div>
              <div>
                <b>Zip:</b> {value.address.zip}
              </div>
            </div>
          )}
        </div>
    </>
  )
}

export default UserDetails