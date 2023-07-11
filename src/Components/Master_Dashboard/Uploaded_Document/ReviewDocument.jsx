import {useState, useRef} from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import { domain } from '../../Api_Endpoint/Util'
import { Link } from 'react-router-dom';
import './ReviewDocument.css'

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

export default function ReviewDocument() {

    const removeReason = useRef();

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = 'black';
    }

    function closeModal() {
        setIsOpen(false);
    }

    function submitHandle(e) {
        e.preventDefault();
    }

    async function submitRemoveFile() {
        setIsOpen(false);
        await axios.get(domain + `create_removereason/${removeReason.current.value}`)
        alert('Document Name Has Been Removed!');
        window.location = '/FolderPackage';
    }

    return(<>

    <div className='heading'>Document Name</div><br />

    <div className='sampleDocumentFile'>
        <center>
            <p className='display-4'><b>Sample Document File</b></p><br />
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </center>
    </div>

    <div className='verticalLeap'>

    <div className='heading'>Details</div><br />
    <div className='detail-comment-container'>
        Uploaded By<br />
        <input type="text" defaultValue="Uploader Name" disabled /><br />
        Reviewed By<br />
        <input type="text" defaultValue="Reviewer Name" disabled /><br />
        Approved By<br />
        <input type="text" defaultValue="Approver Name" disabled /><br />
    </div><br />

    <div className='heading'>Comments</div><br />
    <div className='detail-comment-container'>
        <ul className='text-secondary'>
            <li>It is a long established<br /> fact that a reader will<br /> be distracted by the readable content</li>
            <li>It is a long established<br /> fact that a reader will<br /> be distracted by the readable content</li>
            <li>It is a long established<br /> fact that a reader will<br /> be distracted by the readable content</li>
            <li>It is a long established<br /> fact that a reader will<br /> be distracted by the readable content</li>
            <li>It is a long established<br /> fact that a reader will<br /> be distracted by the readable content</li>
        </ul>
    </div><br />

    <button onClick={openModal} style={{backgroundColor: 'red'}}>Remove or Delete Document</button><br /><br />
    <Link to="/FolderPackage"><button style={{backgroundColor: 'orangered'}}>Back</button></Link><br /><br />

    <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal">

            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Remove File</h2><hr />

            <form onSubmit={submitHandle}>
                Remove Reason<br />
                <textarea ref={removeReason} type="text" placeholder='Enter'></textarea><br /><br />
                <div style={{ float: 'right' }}>
                    <button onClick={closeModal} className='close' style={{backgroundColor: 'black', color: 'white'}}>Back</button> <button onClick={submitRemoveFile} className='submit' style={{backgroundColor: 'red', color: 'white'}}>Remove</button>
                </div>
            </form>
        </Modal>

    </div>

    </>);
}