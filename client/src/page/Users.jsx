import React from 'react'
import "../App.css";
function Users() {
    return (
        <div className="container">
            <h1 className='heading'>Users List</h1>
            <button className="btn btn-success mb-4" >User add</button>
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Birthdate</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Murad</td>
                        <td>Orucov</td>
                        <td>28.06.2000</td>
                        <td>orucowmurad@gmail.com</td>
                        <td>
                            <button>delete</button>
                            <button>detail</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Murad</td>
                        <td>Orucov</td>
                        <td>28.06.2000</td>
                        <td>orucowmurad@gmail.com</td>
                        <td>
                            <button>delete</button>
                            <button>detail</button>
                        </td>
                    </tr><tr>
                        <th scope="row">1</th>
                        <td>Murad</td>
                        <td>Orucov</td>
                        <td>28.06.2000</td>
                        <td>orucowmurad@gmail.com</td>
                        <td>
                            <button>delete</button>
                            <button>detail</button>
                        </td>
                    </tr><tr>
                        <th scope="row">1</th>
                        <td>Murad</td>
                        <td>Orucov</td>
                        <td>28.06.2000</td>
                        <td>orucowmurad@gmail.com</td>
                        <td>
                            <button>delete</button>
                            <button>detail</button>
                        </td>
                    </tr><tr>
                        <th scope="row">1</th>
                        <td>Murad</td>
                        <td>Orucov</td>
                        <td>28.06.2000</td>
                        <td>orucowmurad@gmail.com</td>
                        <td>
                            <button>delete</button>
                            <button>detail</button>
                        </td>
                    </tr><tr>
                        <th scope="row">1</th>
                        <td>Murad</td>
                        <td>Orucov</td>
                        <td>28.06.2000</td>
                        <td>orucowmurad@gmail.com</td>
                        <td>
                            <button>delete</button>
                            <button>detail</button>
                        </td>
                    </tr><tr>
                        <th scope="row">1</th>
                        <td>Murad</td>
                        <td>Orucov</td>
                        <td>28.06.2000</td>
                        <td>orucowmurad@gmail.com</td>
                        <td>
                            <button>delete</button>
                            <button>detail</button>
                        </td>
                    </tr><tr>
                        <th scope="row">1</th>
                        <td>Murad</td>
                        <td>Orucov</td>
                        <td>28.06.2000</td>
                        <td>orucowmurad@gmail.com</td>
                        <td>
                            <button>delete</button>
                            <button>detail</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Users