import { useState, useRef, useEffect} from 'react'
import axios from 'axios'
import Modal from 'react-modal'
import { domain } from '../../Api_Endpoint/Util'
import Edit from '../../../assets/images/edit.png'
import Delete from '../../../assets/images/delete.png'
import emp1 from '../../../assets/images/emp1.png'
import passwordToggle from '../../../assets/images/passwordToggle.png'
import './Employee.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        width: '65%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        background: "rgba(0, 0, 0, 0.6)",
    },
};

const customStylesUpdate = {
    content: {
        top: '50%',
        left: '50%',
        width: '65%',
        height: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        background: "rgba(0, 0, 0, 0.6)",
    },
};

const customStylesNext = {
    content: {
        top: '50%',
        left: '50%',
        width: '65%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        background: "rgba(0, 0, 0, 0.6)",
    },
};

Modal.setAppElement('#root');

export default function Employee() {

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);
    const [modalIsOpenNext, setModalIsOpenNext] = useState(false);
    var createEmployee;
    const createPassword = useRef();
    const confirmPassword = useRef();

    const [data, setData] = useState({
        employeeId: "",
        employeeName: "",
        contactNumber: "",
        emailAddress: "",
        department: "",
        designation: "",
        address: "",
        username: "",
        assignGroup: "",
        createPassword: "",
        confirmPassword: ""
    });

    const updateEmployeeId = useRef();
    const updateEmployeeName = useRef();
    const updateDepartment = useRef();
    const updateDesignation = useRef();
    const [updateId, setUpdateId] = useState();

    const [postValue, setPostValue] = useState([]);
    const [totalPost, setTotalPost] = useState();
    const [countAll, setCountAll] = useState(5);

    useEffect(() => {
        axios.get(domain + `view_employee/3`)
            .then(res => setPostValue(res.data))

        axios.get(domain + `numberofallemployee`)
            .then(res => setTotalPost(res.data.posts))

        setCountAll(countAll + 1);
    }, []);

    async function loadViewAll() {
        setCountAll(countAll + 3);
        setPostValue([]);
        await axios.get(domain + `view_employee/${countAll}`)
            .then(res => setPostValue(res.data))
    }

    function openModal() {
        setData({});
        setIsOpen(true);
    }

    function openUpdateModal() { setUpdateModalIsOpen(true); }

    function openModalNext() {
        setModalIsOpenNext(true);
    }

    function afterOpenModal() {
        subtitle.style.color = 'black';
    }

    function afterOpenModalNext() {
        subtitle.style.color = 'black';
    }

    function closeModal() {
        setIsOpen(false);
    }

    function closeUpdateModal() { setUpdateModalIsOpen(false); }

    function closeModalNext() {
        setModalIsOpenNext(false);
    }

    function submitHandle(e) {
        e.preventDefault();
        setIsOpen(false);
        setModalIsOpenNext(true);
    }

    function submitUpdateHandle(e) {
        e.preventDefault();
    }

    function submitEmployee(e) {
        e.preventDefault();
        setIsOpen(false);
        setModalIsOpenNext(true);
    }

    async function finalSubmitEmployee(e) {
        e.preventDefault();
        if((data.createPassword || data.confirmPassword) && (data.createPassword == data.confirmPassword)) {
            await axios.get(domain + `create_employee/${data.employeeId}/${data.employeeName}/${data.contactNumber}/${data.emailAddress}/${data.department}/${data.designation}/${data.address}/${data.username}/${data.createPassword}/${data.assignGroup}/${todaysDate}`)
            .then(res => createEmployee = res.data.createEmployee);
            alert('Employee Name Added Successfully!');
            setModalIsOpenNext(false);
        } else {
            alert('The Password Confirmation Does Not Match!');
        }
    }

    async function submitUpdateEmployee(e) {
        e.preventDefault();
        setUpdateModalIsOpen(false);
        await axios.get(domain + `update_employee/${updateId}/${updateEmployeeId.current.value}/${updateEmployeeName.current.value}/${updateDepartment.current.value}/${updateDesignation.current.value}`)
            .then(res => createEmployee = res.data.createEmployee);
        alert('Employee Updated Successfully!');
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    function toggleCheckCreate() {
        if (createPassword.current.type === "password") {
            createPassword.current.type = "text";
        } else {
            createPassword.current.type = "password";
        }
    }

    function toggleCheckConfirm() {
        if (confirmPassword.current.type === "password") {
            confirmPassword.current.type = "text";
        } else {
            confirmPassword.current.type = "password";
        }
    }

    function printDate() {

        let today = new Date();

        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        today = dd + '-' + mm + '-' + yyyy;

        return today;
    }

    var todaysDate = printDate();

    return (<>

        <div className='d-flex flex-wrap align-items-center flex-row justify-content-evenly boxDepartment'>

            <div className='me-auto p-3' style={{ float: 'left' }}><b>All Employees ({totalPost})</b></div>
            <div className='ms-auto p-3' style={{ float: 'right' }}><button onClick={openModal}> + Add Employee</button></div>

            <table className="table masterTableEmp">
                <thead>
                    <tr className='theadMaster'>
                        <th scope="col">S.No</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">EMP ID</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Added On</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                        (postValue) ?
                            postValue.map((data) =>

                                <tr>
                                    <th scope="row">#</th>
                                    <td><img width={30} height={30} src={emp1} />&nbsp;&nbsp;&nbsp;{data.employeename}</td>
                                    <td>{data.employeeid}</td>
                                    <td>{data.designation}</td>
                                    <td>{data.date}</td>
                                    <td>Active</td>
                                    <td>
                                    <span onClick={() => { setUpdateId(data._id); openUpdateModal(); }}><img width={30} height={30} src={Edit} /></span>&nbsp;&nbsp;&nbsp;
                                        <span onClick={() => { if (confirm('You Sure?')) { axios.get(domain + `delete_employee/${data._id}`); alert('Entry Deleted Successfully!'); } }}><img width={30} height={30} src={Delete} /></span>
                                    </td>
                                </tr>

                            )
                            :
                            ('No Posts Found!')
                    }

                </tbody>
            </table>

            {
                (postValue.length == 0) ?

                    <h1>NO DATA AVAILABLE!</h1>

                    :

                    (totalPost !== postValue.length) ?

                        <button onClick={loadViewAll} className="loadmore">LOAD MORE</button>
                        :
                        <h2><b> -+- End Of List -+-</b></h2>
            }

        </div>

        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal">

            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add Employee</h2><hr />

            <form onSubmit={submitHandle}>
                <div className='empContainer'>
                    <div>
                        Employee ID
                        <input onChange={handleChange} name="employeeId" type="text" placeholder="Enter" required />
                    </div>
                    <div>
                        Employee Name
                        <input onChange={handleChange} name="employeeName" type="text" placeholder="Enter" required />
                    </div>
                    <div>
                        Contact Number
                        <input onChange={handleChange} name="contactNumber" type="number" placeholder="Enter" required />
                    </div>
                    <div>
                        Email Address
                        <input onChange={handleChange} name="emailAddress" type="email" placeholder="Enter" required />
                    </div>
                    <div>
                        Department
                        <select onChange={handleChange} name="department"  required>
                            <option disabled selected>Select</option>
                            <option>QA Department</option>
                            <option>QC Department</option>
                            <option>IT Department</option>
                        </select>
                    </div>
                    <div>
                        Designation
                        <select onChange={handleChange}  name="designation"  required>
                            <option disabled selected>Select</option>
                            <option>Admin</option>
                            <option>Manager</option>
                            <option>Staff</option>
                        </select>
                    </div>
                </div>
                <br />Address<br />
                <input onChange={handleChange} name="address" type='text' placeholder='Employee Address'  required />
                <br /><br />
                <div style={{ float: 'right' }}>
                    <button onClick={closeModal} className='close'>Close</button> <button onClick={submitEmployee} className='submit'>Create Login</button>
                </div>
            </form>
        </Modal>

        <Modal
            isOpen={modalIsOpenNext}
            onAfterOpen={afterOpenModalNext}
            onRequestClose={closeModalNext}
            style={customStylesNext}
            contentLabel="Example Modal">

            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add Employee</h2><hr />

            <form onSubmit={finalSubmitEmployee}>
                <div className='empContainer'>
                    <div>
                        Username
                        <input onChange={handleChange} name="username" type="text" placeholder="Enter" required />
                    </div>
                    <div>
                        Assign Group
                        <select onChange={handleChange} name="assignGroup" required>
                            <option disabled selected>Select</option>
                            <option>Allocator</option>
                            <option>Delivery Head</option>
                            <option>Tester</option>
                            <option>Quality Engineer</option>
                        </select>
                    </div>
                    <div>
                        Create Password
                        <input  onChange={handleChange} name="createPassword" ref={confirmPassword} type="password" placeholder="Enter" required />
                        <img style={{ position: 'absolute', left: '92%', mixBlendMode: 'darken' }} width={40} height={40} onClick={toggleCheckCreate} src={passwordToggle} />
                    </div>
                    <div>
                        Confirm Password
                        <input onChange={handleChange} name="confirmPassword" ref={createPassword} type="password" placeholder="Enter" required />
                        <img style={{ position: 'absolute', left: '43%', mixBlendMode: 'darken' }} width={40} height={40} onClick={toggleCheckConfirm} src={passwordToggle} />
                    </div>
                </div>    
                <br /><br />
                <div style={{ float: 'right' }}>
                    <button onClick={closeModalNext} className='close'>Close</button> <button onClick={finalSubmitEmployee} className='submit'>Submit</button>
                </div>
            </form>
        </Modal>

        <Modal
            isOpen={updateModalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeUpdateModal}
            style={customStylesUpdate}
            contentLabel="Example Modal">

            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Update Employee</h2><hr />

            <form onSubmit={submitUpdateHandle}>
                <div className='empContainer'>
                    <div>
                        Employee ID
                        <input ref={updateEmployeeId} name="employeeId" type="text" placeholder="Enter" required />
                    </div>
                    <div>
                        Employee Name
                        <input ref={updateEmployeeName} name="employeeName" type="text" placeholder="Enter" required />
                    </div>
                    <div>
                        Department
                        <select ref={updateDepartment} name="department"  required>
                            <option disabled selected>Select</option>
                            <option>QA Department</option>
                            <option>QC Department</option>
                            <option>IT Department</option>
                        </select>
                    </div>
                    <div>
                        Designation
                        <select ref={updateDesignation}  name="designation"  required>
                            <option disabled selected>Select</option>
                            <option>Admin</option>
                            <option>Manager</option>
                            <option>Staff</option>
                        </select>
                    </div>
                </div><br />
                <div style={{ float: 'right' }}>
                    <button onClick={closeUpdateModal} className='close'>Close</button> <button onClick={submitUpdateEmployee} className='submit'>Submit</button>
                </div>
            </form>
        </Modal>

    </>)
}
