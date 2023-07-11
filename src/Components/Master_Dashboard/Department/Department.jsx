import { useState, useRef, useEffect } from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import { domain } from '../../Api_Endpoint/Util'
import Edit from '../../../assets/images/edit.png'
import Delete from '../../../assets/images/delete.png'
import './Department.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        width: '45%',
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

export default function Department() {

    const deptName = useRef();
    const deptHead = useRef();
    var createDept;

    const updateDeptName = useRef();
    const updateDeptHead = useRef();

    const [postValue, setPostValue] = useState([]);
    const [totalPost, setTotalPost] = useState();
    const [countAll, setCountAll] = useState(5);

    const [updateId, setUpdateId] = useState();

    useEffect(() => {
        axios.get(domain + `view_dept/3`)
            .then(res => setPostValue(res.data))

        axios.get(domain + `numberofalldept`)
            .then(res => setTotalPost(res.data.posts))

        setCountAll(countAll + 1);
    }, []);

    async function loadViewAll() {
        setCountAll(countAll + 3);
        setPostValue([]);
        await axios.get(domain + `view_dept/${countAll}`)
            .then(res => setPostValue(res.data))
    }

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function openUpdateModal() {setUpdateModalIsOpen(true);}

    function afterOpenModal() {
        subtitle.style.color = 'black';
    }

    function closeModal() {
        setIsOpen(false);
    }

    function closeUpdateModal() {setUpdateModalIsOpen(false);}

    function submitHandle(e) {
        e.preventDefault();
    }

    function submitUpdateHandle(e) {
        e.preventDefault();
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

    async function submitDepartment(e) {
        e.preventDefault();
        setIsOpen(false);
        await axios.get(domain + `create_dept/${deptName.current.value}/${deptHead.current.value}/${todaysDate}`)
            .then(res => createDept = res.data.createDept);
        alert('Department Created Successfully!');
    }

    async function submitUpdateDepartment(e) {
        e.preventDefault();
        setUpdateModalIsOpen(false);
        await axios.get(domain + `update_dept/${updateId}/${updateDeptName.current.value}/${updateDeptHead.current.value}`)
            .then(res => createDept = res.data.createDept);
        alert('Department Updated Successfully!');
    }

    return (<>

        <div className='d-flex flex-wrap align-items-center flex-row justify-content-evenly boxDepartment'>

            <div className='me-auto p-3' style={{ float: 'left' }}><b>All Department ({totalPost})</b></div>
            <div className='ms-auto p-3' style={{ float: 'right' }}><button onClick={openModal}> + Create Department</button></div>

            <table className="table masterTable">
                <thead>
                    <tr className='theadMaster'>
                        <th scope="col">S.No</th>
                        <th scope="col">Department Name</th>
                        <th scope="col">Created By</th>
                        <th scope="col">Created Date</th>
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
                                    <td>{data.deptname}</td>
                                    <td>{data.depthead}</td>
                                    <td>{data.date}</td>
                                    <td>Active</td>
                                    <td>
                                        <span onClick={() => {setUpdateId(data._id);openUpdateModal();}}><img width={30} height={30} src={Edit} /></span>&nbsp;&nbsp;&nbsp;
                                        <span onClick={() => { if (confirm('You Sure?')) { axios.get(domain + `delete_dept/${data._id}`); alert('Entry Deleted Successfully!'); } }}><img width={30} height={30} src={Delete} /></span>
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

            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Create Department</h2><hr />

            <form onSubmit={submitHandle}>
                Department Name<br />
                <input ref={deptName} type="text" placeholder="Enter" />
                Department Head<br />
                <select ref={deptHead}>
                    <option disabled selected value>Select</option>
                    <option>Sup Admin</option>
                    <option>Approver</option>
                    <option>QA Approver</option>
                    <option>Reviewer</option>
                    <option>Uploader</option>
                </select><br /><br />
                <div style={{ float: 'right' }}>
                    <button onClick={closeModal} className='close'>Close</button> <button onClick={submitDepartment} className='submit'>Submit</button>
                </div>
            </form>
        </Modal>

        <Modal
            isOpen={updateModalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeUpdateModal}
            style={customStyles}
            contentLabel="Example Modal">

            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Update Department</h2><hr />

            <form onSubmit={submitUpdateHandle}>
                Department Name<br />
                <input ref={updateDeptName} type="text" placeholder="Enter" />
                Department Head<br />
                <select ref={updateDeptHead}>
                    <option disabled selected value>Select</option>
                    <option>Sup Admin</option>
                    <option>Approver</option>
                    <option>QA Approver</option>
                    <option>Reviewer</option>
                    <option>Uploader</option>
                </select><br /><br />
                <div style={{ float: 'right' }}>
                    <button onClick={closeUpdateModal} className='close'>Close</button> <button onClick={submitUpdateDepartment} className='submit'>Submit</button>
                </div>
            </form>
        </Modal>

    </>);
}
