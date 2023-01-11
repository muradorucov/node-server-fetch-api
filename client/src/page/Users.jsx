import React, { useEffect, useState } from 'react'
import "../App.css";
function Users() {
    const [product, setProduct] = useState()


    useEffect(() => {
        fetch('http://localhost:8080/products')
            .then((response) => response.json())
            .then((actualData) => setProduct(actualData))
    }, []);
    
    return (
        <div className="container">
            <h1 className='heading'>Users List</h1>
            <button className="btn btn-success mb-4" >User add</button>
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">quantityPerUnit</th>
                        <th scope="col">unitPrice</th>
                        <th scope="col">unitsInStock</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product && product.map(item => (
                        <tr key={item?.id}>
                            <th scope="row">{item?.id}</th>
                            <td>{item?.name}</td>
                            <td>{item?.quantityPerUnit}</td>
                            <td>{item?.unitPrice}</td>
                            <td>{item?.unitsInStock}</td>
                            <td>
                                <button>delete</button>
                                <button>detail</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Users
