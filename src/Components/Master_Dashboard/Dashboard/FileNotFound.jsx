import FileNotFoundImg from '../../../assets/images/404.png'
import { Link } from 'react-router-dom'

const FileNotFound = () => {
    return (<div style={{ color: '#3e0303', width: '70vw' }}>
        <center>
            <br /><br />
            <h2>. : : 404 - Client Side Error - File Not Found : : .</h2>
            <code>
                The requested URL returned ERR_CODE: 404.<br />Go back to <Link to="/">/Dashboard</Link>.
            </code>
            <br /><br />
            <img width="50%" height="50%" src={FileNotFoundImg} />
        </center>
    </div>);
}

export default FileNotFound;