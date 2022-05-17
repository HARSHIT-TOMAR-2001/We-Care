import React, { useState } from 'react';

function VacantList() {
  const [users, setUsers] = useState([
    { id: 1, slotstart: '06:00',slotend: '10:00', limit: '15' , dname: 'R.K. Mishra' },
    { id: 2, slotstart: '12:00', slotend: '14:00', limit: '30' , dname: 'Seeta Gulathi'},
    { id: 3, slotstart: '18:00', slotend: '22:00', limit: '10' , dname: 'Renu Raj' },
  
]);

return (
    <div className="container">
        <h3 className="p-3 text-center">  Details of All Slots Created By Doctor</h3>
        <br/>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Slot Start Time</th>
                    <th>Slot End Time</th>
                    <th>Docter Name</th>
                    <th>Patient Limit</th>
                </tr>
            </thead>
            <tbody>
                {users && users.map(user =>
                    <tr key={user.id}>
                        <td>{user.slotstart}</td>
                        <td>{user.slotend}</td>
                        
                        <td>{user.dname}</td>
                        <td>{user.limit}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
);
}
 
export default VacantList