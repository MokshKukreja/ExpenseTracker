import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({title}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform logout actions here if needed
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-light bg-light" style={{}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{title}</Link>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;
