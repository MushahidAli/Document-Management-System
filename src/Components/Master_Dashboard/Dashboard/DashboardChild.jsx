import React from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import DocumentsUnderReview from '../../../assets/images/DocumentsUnderReview.png'
import ApprovedDocuments from '../../../assets/images/ApprovedDocuments.png'
import RejectedDocuments from '../../../assets/images/RejectedDocuments.png'
import Eye from '../../../assets/images/Eye.png'
import Folder from '../../../assets/images/Folder.png'
import './Dashboard.css'

export default function DashboardChild() {

    const data = [
        { name: 'Mon', students: 800 },
        { name: 'Tue', students: 400 },
        { name: 'Wed', students: 500 },
        { name: 'Thurs', students: 200 },
        { name: 'Fri', students: 450 },
        { name: 'Sat', students: 510 },
        { name: 'Sun', students: 350 }
    ];

    return (<div className='dashboardChild'>

        <div style={{ width: '1000px' }} className='d-flex flex-wrap flex-row justify-content-evenly'>

            <div className='box'>
                <img width={40} height={40} src={DocumentsUnderReview} /> <b>Documents Under Review</b><br /><br />
                <b>56</b>
                <hr />
                <center>View Details</center>
            </div>

            <div className='box'>
                <img width={40} height={40} src={ApprovedDocuments} /> <b>Approved Documents</b><br /><br />
                <b>56</b>
                <hr />
                <center>View Details</center>
            </div>

            <div className='box'>
                <img width={40} height={40} src={RejectedDocuments} /> <b>Rejected Documents</b><br /><br />
                <b>56</b>
                <hr />
                <center>View Details</center>
            </div>

        </div>

        <br /><div className='d-flex flex-wrap flex-row justify-content-evenly'>

            <br /><div className='box'>
                <b>Documents Uploaded</b><p className='text-secondary'>Last 7 days</p><hr /><br /><br />
                <BarChart width={450} height={400} data={data}>
                    <Bar radius={[10, 10, 0, 0]} barSize={10} dataKey="students" fill="rgb(37 55 76)" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </BarChart>
            </div>

            <div className='box'>
                <b>Documents Uploaded By Type</b><p className='text-secondary'>Last 7 days</p><hr /><br /><br />
                Videos <span className='boxSpan'>1000</span><br />
                <progress value="60" max="100"></progress><br />
                PNG <span className='boxSpan'>2500</span><br />
                <progress value="75" max="100"></progress><br />
                PDF <span className='boxSpan'>800</span><br />
                <progress value="40" max="100"></progress><br />
                Excel <span className='boxSpan'>1200</span><br />
                <progress value="60" max="100"></progress><br />
                PPT <span className='boxSpan'>600</span><br />
                <progress value="30" max="100"></progress><br />
                Word File <span className='boxSpan'>2000</span><br />
                <progress value="95" max="100"></progress><br />
            </div>

        </div>

        <br /><div className='d-flex flex-wrap flex-row justify-content-evenly'>
        <div className='box'>
                <b>Recently Added Documents</b><p className='text-primary'>View All</p><hr />

                <table className="table">
                    <thead>
                        <tr className='theadMaster'>
                            <th scope="col">S.No</th>
                            <th scope="col">Document ID</th>
                            <th scope="col">Document Name</th>
                            <th scope="col">Document  Version</th>
                            <th scope="col">Review  Version</th>
                            <th scope="col">Document  Workflow</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">01</th>
                            <td>#123456789</td>
                            <td>Document.pdf</td>
                            <td>0</td>
                            <td>0</td>
                            <td>Flow-1</td>
                            <td>
                                <img width={30} height={30} src={Eye} />&nbsp;&nbsp;&nbsp;
                                <img width={30} height={30} src={Folder} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">02</th>
                            <td>#123456789</td>
                            <td>Document.pdf</td>
                            <td>0</td>
                            <td>0</td>
                            <td>Flow-1</td>
                            <td>
                                <img width={30} height={30} src={Eye} />&nbsp;&nbsp;&nbsp;
                                <img width={30} height={30} src={Folder} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">03</th>
                            <td>#123456789</td>
                            <td>Document.pdf</td>
                            <td>0</td>
                            <td>0</td>
                            <td>Flow-1</td>
                            <td>
                                <img width={30} height={30} src={Eye} />&nbsp;&nbsp;&nbsp;
                                <img width={30} height={30} src={Folder} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">04</th>
                            <td>#123456789</td>
                            <td>Document.pdf</td>
                            <td>0</td>
                            <td>0</td>
                            <td>Flow-1</td>
                            <td>
                                <img width={30} height={30} src={Eye} />&nbsp;&nbsp;&nbsp;
                                <img width={30} height={30} src={Folder} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">05</th>
                            <td>#123456789</td>
                            <td>Document.pdf</td>
                            <td>0</td>
                            <td>0</td>
                            <td>Flow-1</td>
                            <td>
                                <img width={30} height={30} src={Eye} />&nbsp;&nbsp;&nbsp;
                                <img width={30} height={30} src={Folder} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">06</th>
                            <td>#123456789</td>
                            <td>Document.pdf</td>
                            <td>0</td>
                            <td>0</td>
                            <td>Flow-1</td>
                            <td>
                                <img width={30} height={30} src={Eye} />&nbsp;&nbsp;&nbsp;
                                <img width={30} height={30} src={Folder} />
                            </td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>

    </div>);
}