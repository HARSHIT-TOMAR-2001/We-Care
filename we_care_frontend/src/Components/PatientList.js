import React, { useState } from 'react';

function PatientList() {
  const [users, setUsers] = useState([
    { id: 1, firstName: 'Frank', lastName: 'Murphy', city: 'Lucknow', slot: '4:00 pm' },
    { id: 2, firstName: 'Vic', lastName: 'Reynolds', city: 'New Delhi', slot: '6:00 pm' },
    { id: 3, firstName: 'Gina', lastName: 'Jabowski', city: 'Gorakhpur', slot: '9:00 am' },
    { id: 4, firstName: 'Jessi', lastName: 'Glaser', city: 'Hyderabad', slot: '2:30 pm' },
    { id: 5, firstName: 'Jay', lastName: 'Bilzerian', city: 'Kanpur', slot: '5:15 pm' }
]);

return (
    <div className="container">
        <h3 className="p-3 text-center">  Details of Patients whose slots are booked</h3>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Patient Name</th>
                    <th>City</th>
                    <th>Slot Time</th>
                </tr>
            </thead>
            <tbody>
                {users && users.map(user =>
                    <tr key={user.id}>
                        <td>{user.firstName} {user.lastName}</td>
                        <td>{user.city}</td>
                        <td>{user.slot}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
);
}
 
export default PatientList