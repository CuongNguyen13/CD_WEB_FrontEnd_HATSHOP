import React, { Component } from 'react';

class HeaderAdmin extends Component {
    render() {
        return (
            <div>
                <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                    <div className="navbar-header" data-logobg="skin6">
                        {/* ============================================================== */}
                        {/* Logo */}
                        {/* ============================================================== */}
                        <a className="navbar-brand" href="dashboard.html">
                            {/* Logo icon */}
                            <b className="logo-icon">
                                {/* Dark Logo icon */}
                                <img src="plugins/images/logo-icon.png" alt="homepage" />
                            </b>
                            {/*End Logo icon */}
                            {/* Logo text */}
                            <span className="logo-text">
                                {/* dark Logo text */}
                                <img src="plugins/images/logo-text.png" alt="homepage" />
                            </span>
                        </a>
                        {/* ============================================================== */}
                        {/* End Logo */}
                        {/* ============================================================== */}
                        {/* ============================================================== */}
                        {/* toggle and nav items */}
                        {/* ============================================================== */}
                        <a
                            className="nav-toggler waves-effect waves-light text-dark d-block d-md-none"
                            href="javascript:void(0)"
                        >
                            <i className="ti-menu ti-close" />
                        </a>
                    </div>
                    {/* ============================================================== */}
                    {/* End Logo */}
                    {/* ============================================================== */}
                    <div
                        className="navbar-collapse collapse"
                        id="navbarSupportedContent"
                        data-navbarbg="skin5"
                    >
                        <ul className="navbar-nav d-none d-md-block d-lg-none">
                            <li className="nav-item">
                                <a
                                    className="nav-toggler nav-link waves-effect waves-light text-white"
                                    href="javascript:void(0)"
                                >
                                    <i className="ti-menu ti-close" />
                                </a>
                            </li>
                        </ul>
                        {/* ============================================================== */}
                        {/* Right side toggle and nav items */}
                        {/* ============================================================== */}
                        <ul className="navbar-nav ms-auto d-flex align-items-center">
                            {/* ============================================================== */}
                            {/* Search */}
                            {/* ============================================================== */}
                            <li className=" in">
                                <form role="search" className="app-search d-none d-md-block me-3">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="form-control mt-0"
                                    />
                                    <a href="" className="active">
                                        <i className="fa fa-search" />
                                    </a>
                                </form>
                            </li>
                            {/* ============================================================== */}
                            {/* User profile and search */}
                            {/* ============================================================== */}
                            <li>
                                <a className="profile-pic" href="#">
                                    <img
                                        src="plugins/images/users/varun.jpg"
                                        alt="user-img"
                                        width={36}
                                        className="img-circle"
                                    />
                                    <span className="text-white font-medium">Steave</span>
                                </a>
                            </li>
                            {/* ============================================================== */}
                            {/* User profile and search */}
                            {/* ============================================================== */}
                        </ul>
                    </div>
                </nav>

            </div>
        );
    }
}

export default HeaderAdmin;