import { useState, useRef } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import DashboardChild from './DashboardChild'
import Department from '../Department/Department'
import Employee from '../Employee/Employee'
import Designation from '../Designation/Designation'
import DocumentCategory from '../Document_Category/Document_Category'
import UploadedDocument from '../Uploaded_Document/Uploaded_Document'
import FolderPackage from '../Uploaded_Document/FolderPackage'
import ReviewDocument from '../Uploaded_Document/ReviewDocument'
import FileNotFound from './FileNotFound'
import fieldIconWhite from '../../../assets/images/fieldIconWhite.png'
import dashboardIcon from '../../../assets/images/dashboardIcon.png'
import chats from '../../../assets/images/chats.png'
import notification from '../../../assets/images/notification.png'
import admin from '../../../assets/images/admin.png'
import './Dashboard.css'

export default function Dashboard() {

    const [title, setTitle] = useState('Dashboard');
    var user = localStorage.getItem("loginSession");

    const dashboardNavActive = useRef();
    const departmentNavActive = useRef();
    const employeeNavActive = useRef();
    const designationNavActive = useRef();
    const documentCategoryNavActive = useRef();
    const uploadedDocumentNavActive = useRef();

    function dashboardNavActiveNext() {
        setTitle('Dashboard');
        dashboardNavActive.current.className = 'nav-link active navLinkColor';
        departmentNavActive.current.className = 'nav-link';
        employeeNavActive.current.className = 'nav-link';
        designationNavActive.current.className = 'nav-link';
        documentCategoryNavActive.current.className = 'nav-link';
        uploadedDocumentNavActive.current.className = 'nav-link';
    }

    function departmentNavActiveNext() {
        setTitle('Department');
        dashboardNavActive.current.className = 'nav-link';
        departmentNavActive.current.className = 'nav-link active navLinkColor';
        employeeNavActive.current.className = 'nav-link';
        designationNavActive.current.className = 'nav-link';
        documentCategoryNavActive.current.className = 'nav-link';
        uploadedDocumentNavActive.current.className = 'nav-link';
    }

    function employeeNavActiveNext() {
        setTitle('Employee');
        dashboardNavActive.current.className = 'nav-link';
        departmentNavActive.current.className = 'nav-link';
        employeeNavActive.current.className = 'nav-link active navLinkColor';
        designationNavActive.current.className = 'nav-link';
        documentCategoryNavActive.current.className = 'nav-link';
        uploadedDocumentNavActive.current.className = 'nav-link';
    }

    function designationNavActiveNext() {
        setTitle('Designation');
        dashboardNavActive.current.className = 'nav-link';
        departmentNavActive.current.className = 'nav-link';
        employeeNavActive.current.className = 'nav-link';
        designationNavActive.current.className = 'nav-link active navLinkColor';
        documentCategoryNavActive.current.className = 'nav-link';
        uploadedDocumentNavActive.current.className = 'nav-link';
    }

    function documentCategoryNavActiveNext() {
        setTitle('Document Category');
        dashboardNavActive.current.className = 'nav-link';
        departmentNavActive.current.className = 'nav-link';
        employeeNavActive.current.className = 'nav-link';
        designationNavActive.current.className = 'nav-link';
        documentCategoryNavActive.current.className = 'nav-link active navLinkColor';
        uploadedDocumentNavActive.current.className = 'nav-link';
    }

    function uploadedDocumentNavActiveNext() {
        setTitle('Uploaded Document');
        dashboardNavActive.current.className = 'nav-link';
        departmentNavActive.current.className = 'nav-link';
        employeeNavActive.current.className = 'nav-link';
        designationNavActive.current.className = 'nav-link';
        documentCategoryNavActive.current.className = 'nav-link';
        uploadedDocumentNavActive.current.className = 'nav-link active navLinkColor';
    }

    setInterval(() => {
        var logVerify = localStorage.getItem("loginSession");
        if (logVerify) { }
        else {
            window.location = "";
        }
    }, 5000);

    function logout() {
        localStorage.removeItem("loginSession");
        window.location = "";
    }

    return (<div className='dashboardStart'>

        <div
            className="d-flex flex-column flex-shrink-0 p-3 text-white"
            style={{position: 'fixed', width: '20vw',  height: '100vh', backgroundColor: 'rgb(32 64 104)' }}
        >
            <a
                href="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
                <svg className="bi me-2" width={40} height={32}>
                    <use xlinkHref="#bootstrap" />
                </svg>
                <span className="fs-5"><center>Document Management System</center></span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <li className="nav-item">
                        <a onClick={dashboardNavActiveNext} id="dashboard" ref={dashboardNavActive} className="nav-link active navLinkColor" aria-current="page">
                            <svg className="bi me-2" width={16} height={16}>
                                <use xlinkHref="#home" />
                            </svg>
                            <img width={20} height={20} src={fieldIconWhite} /> <span>Dashboard</span>
                        </a>
                    </li>
                </Link>
                <Link to="/Department" style={{ textDecoration: 'none' }}>
                    <li>
                        <a onClick={departmentNavActiveNext} id="department" ref={departmentNavActive} className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}>
                                <use xlinkHref="#speedometer2" />
                            </svg>
                            <img width={20} height={20} src={fieldIconWhite} /> <span>Department</span>
                        </a>
                    </li>
                </Link>
                <Link to="/Employee" style={{ textDecoration: 'none' }}>
                    <li>
                        <a onClick={employeeNavActiveNext} ref={employeeNavActive} className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}>
                                <use xlinkHref="#table" />
                            </svg>
                            <img width={20} height={20} src={fieldIconWhite} /> <span>Employee</span>
                        </a>
                    </li></Link>
                <Link to="/Designation" style={{ textDecoration: 'none' }}>
                    <li>
                        <a onClick={designationNavActiveNext} ref={designationNavActive} className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}>
                                <use xlinkHref="#grid" />
                            </svg>
                            <img width={20} height={20} src={fieldIconWhite} /> <span>Designation</span>
                        </a>
                    </li></Link>
                <Link to="/DocumentCategory" style={{ textDecoration: 'none' }}>
                    <li>
                        <a onClick={documentCategoryNavActiveNext} ref={documentCategoryNavActive} className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}>
                                <use xlinkHref="#people-circle" />
                            </svg>
                            <img width={20} height={20} src={fieldIconWhite} /> <span>Document Category</span>
                        </a>
                    </li></Link>
                <Link to="/UploadedDocument" style={{ textDecoration: 'none' }}>
                    <li>
                        <a onClick={uploadedDocumentNavActiveNext} ref={uploadedDocumentNavActive} className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}>
                                <use xlinkHref="#grid" />
                            </svg>
                            <img width={20} height={20} src={fieldIconWhite} /> <span>Uploaded Document</span>
                        </a>
                    </li></Link>
            </ul>
            <hr />
            <div className="dropdown">
                <a
                    className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img
                        src={admin}
                        alt=""
                        width={32}
                        height={32}
                        className="rounded-circle me-2"
                    />
                    <strong>{atob(user).split('@')[0].toUpperCase()}</strong>
                </a>
                <ul
                    className="dropdown-menu dropdown-menu-dark text-small shadow"
                    aria-labelledby="dropdownUser1"
                >
                    
                    <li>
                        <a onClick={logout} className="dropdown-item">
                            Sign out
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div className='mainDashboard d-flex'>
            <img width={30} height={30} src={dashboardIcon} />  &nbsp;&nbsp;&nbsp;<h4 className='title'>{title}</h4>
                <div className='headerIcons'>
                    <img width={50} height={50} src={chats} />&nbsp;&nbsp;&nbsp; <img width={50} height={50} src={notification} />&nbsp;&nbsp;&nbsp; <img width={50} height={50} src={admin} /> <b>{atob(user).split('@')[0].toUpperCase()}</b>
                </div>

            <div className='components'>
                <Routes>
                    <Route path="/" element={<DashboardChild />} />
                    <Route path="/Dashboard" element={<DashboardChild />} />
                    <Route path="/Department" element={<Department />} />
                    <Route path="/Employee" element={<Employee />} />
                    <Route path="/Designation" element={<Designation />} />
                    <Route path="/DocumentCategory" element={<DocumentCategory />} />
                    <Route path="/UploadedDocument" element={<UploadedDocument />} />
                    <Route path="/FolderPackage" element={<FolderPackage />} />
                    <Route path="/ReviewDocument" element={<ReviewDocument />} />
                    <Route path="*" element={<FileNotFound />} />
                </Routes><br /><br /><br />
            </div>
        </div>


    </div>);
}