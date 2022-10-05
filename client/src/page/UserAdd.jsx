import React from 'react';

const UserAdd = () => {
    return (
        <div className='container'>
            <h1 className='heading'>User Add Page</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">User name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter user name..." />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">User Last Name</label>
                    <input type="text" className="form-control" id="lastname" placeholder="Enter user lastname..." />
                </div>
                <div className="form-group">
                    <label htmlFor="birthday">Birthday</label>
                    <input type="date" className="form-control" id="birthday" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default UserAdd;
