import { useState, useRef, useEffect } from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import { domain } from '../../Api_Endpoint/Util'
import Edit from '../../../assets/images/Edit.png'
import Delete from '../../../assets/images/Delete.png'
import './Document_Category.css'

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

export default function DocumentCategory() {

    const documentCategoryName = useRef();
    const description = useRef();
    var createDocumentCategory;

    const updateDocumentCategoryName = useRef();
    const updateDescription = useRef();
    const [updateId, setUpdateId] = useState();

    const [postValue, setPostValue] = useState([]);
    const [totalPost, setTotalPost] = useState();
    const [countAll, setCountAll] = useState(5);

    useEffect(() => {
        axios.get(domain + `view_documentcategory/3`)
            .then(res => setPostValue(res.data))

        axios.get(domain + `numberofalldocumentcategory`)
            .then(res => setTotalPost(res.data.posts))

        setCountAll(countAll + 1);
    }, []);

    async function loadViewAll() {
        setCountAll(countAll + 3);
        setPostValue([]);
        await axios.get(domain + `view_documentcategory/${countAll}`)
            .then(res => setPostValue(res.data))
    }

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function openUpdateModal() { setUpdateModalIsOpen(true); }

    function afterOpenModal() {
        subtitle.style.color = 'black';
    }

    function closeModal() {
        setIsOpen(false);
    }

    function closeUpdateModal() { setUpdateModalIsOpen(false); }

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

    async function submitDocumentCategory(e) {
        e.preventDefault();
        setIsOpen(false);
        await axios.get(domain + `create_documentcategory/${documentCategoryName.current.value}/${description.current.value}/${todaysDate}`)
            .then(res => createDocumentCategory = res.data.createDocumentCategory);
        alert('Category Name Added Successfully!');
    }

    async function submitUpdateDocumentCategory(e) {
        e.preventDefault();
        setUpdateModalIsOpen(false);
        await axios.get(domain + `update_documentcategory/${updateId}/${updateDocumentCategoryName.current.value}/${updateDescription.current.value}`)
            .then(res => createDocumentCategory = res.data.createDocumentCategory);
        alert('Category Data Updated Successfully!');
    }

    return (<>

        <div className='d-flex flex-wrap align-items-center flex-row justify-content-evenly boxDepartment'>

            <div className='me-auto p-3' style={{ float: 'left' }}><b>Documents Category ({totalPost})</b></div>
            <div className='ms-auto p-3' style={{ float: 'right' }}><button onClick={openModal}> + Create Category</button></div>

            <table className="table masterTable">
                <thead>
                    <tr className='theadMaster'>
                        <th scope="col">S.No</th>
                        <th scope="col">Document Category</th>
                        <th scope="col">Description</th>
                        <th scope="col">Added By</th>
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
                                    <td>{data.categoryname}</td>
                                    <td>{data.description}</td>
                                    <td>Admin</td>
                                    <td>{data.date}</td>
                                    <td>Active</td>
                                    <td>
                                        <span onClick={() => { setUpdateId(data._id); openUpdateModal(); }}><img width={30} height={30} src={Edit} /></span>&nbsp;&nbsp;&nbsp;
                                        <span onClick={() => { if (confirm('You Sure?')) { axios.get(domain + `delete_documentcategory/${data._id}`); alert('Entry Deleted Successfully!'); } }}><img width={30} height={30} src={Delete} /></span>
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

            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add Category</h2><hr />

            <form onSubmit={submitHandle}>
                Category Name<br />
                <input ref={documentCategoryName} type="text" placeholder="Enter" /><br /><br />
                Description<br />
                <textarea ref={description} placeholder="Enter"></textarea><br /><br />
                <div style={{ float: 'right' }}>
                    <button onClick={closeModal} className='close'>Close</button> <button onClick={submitDocumentCategory} className='submit'>Submit</button>
                </div>
            </form>
        </Modal>

        <Modal
            isOpen={updateModalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeUpdateModal}
            style={customStyles}
            contentLabel="Example Modal">

            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Update Category</h2><hr />

            <form onSubmit={submitUpdateHandle}>
                Category Name<br />
                <input ref={updateDocumentCategoryName} type="text" placeholder="Enter" /><br /><br />
                Description<br />
                <textarea ref={updateDescription} placeholder="Enter"></textarea><br /><br />
                <div style={{ float: 'right' }}>
                    <button onClick={closeUpdateModal} className='close'>Close</button> <button onClick={submitUpdateDocumentCategory} className='submit'>Submit</button>
                </div>
            </form>
        </Modal>

    </>);
}