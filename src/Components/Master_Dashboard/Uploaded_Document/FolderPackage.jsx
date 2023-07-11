import React from 'react'
import { Link } from 'react-router-dom'
import FolderBlue from '../../../assets/images/FolderBlue.png'
import PDF from '../../../assets/images/pdf.png'
import playIcon from '../../../assets/images/playIcon.png'
import imgIcon from '../../../assets/images/imgIcon.png'
import hamburger from '../../../assets/images/hamburgerFileBackground.png'
import imgBackground from '../../../assets/images/imgFileBackground.png'
import videoBackground from '../../../assets/images/videoFileBackground.png'
import docBackground from '../../../assets/images/docFileBackground.png'

import './FolderPackage.css'

export default function FolderPackage() {
    return (<>

        <div className='folderBreadcrumb'>
            <img src={FolderBlue} width={30} height={30} /> &nbsp;&nbsp;&nbsp;<b>Folder Name / Subfolder Name</b>
        </div>

        <div className='selectMultimedia'>
            <select className='selectMyTagShift'>
                <option disabled selected>Audio, Video, Documents, IMG</option>
                <option>Audio</option>
                <option>Video</option>
                <option>Documents</option>
                <option>IMG</option>
            </select>
        </div><br />

        <div className='documents'>

            <Link to="/ReviewDocument" style={{textDecoration: 'none'}}>
                <div className='document_item d-flex justify-content-between'>
                    <img width={30} height={30} src={PDF} /> <img width={30} height={30} src={hamburger} />
                    <div className='document_item_detail'><b>Document Name</b><p className='text-secondary'>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </Link>

            <div className='document_item_2 d-flex justify-content-between'>
                <img width={30} height={30} src={imgIcon} /> <img width={30} height={30} src={hamburger} />
                <div className='document_item_detail'><b>Image</b><p className='text-secondary'>Lorem ipsum dolor sit amet</p>
                </div>
            </div>

            <div className='document_item_3 d-flex justify-content-between'>
                <img width={30} height={30} src={playIcon} style={{ borderRadius: '15px' }} /> <img width={30} height={30} src={hamburger} />
                <div className='document_item_detail'><b>Video Title</b><p className='text-secondary'>Lorem ipsum dolor sit amet</p>
                </div>
            </div>

            <div className='document_item d-flex justify-content-between'>
                <img width={30} height={30} src={PDF} /> <img width={30} height={30} src={hamburger} />
                <div className='document_item_detail'><b>Document Name</b><p className='text-secondary'>Lorem ipsum dolor sit amet</p>
                </div>
            </div>

            <div className='document_item d-flex justify-content-between'>
                <img width={30} height={30} src={PDF} /> <img width={30} height={30} src={hamburger} />
                <div className='document_item_detail'><b>Document Name</b><p className='text-secondary'>Lorem ipsum dolor sit amet</p>
                </div>
            </div>

            <div className='document_item d-flex justify-content-between'>
                <img width={30} height={30} src={PDF} /> <img width={30} height={30} src={hamburger} />
                <div className='document_item_detail'><b>Document Name</b><p className='text-secondary'>Lorem ipsum dolor sit amet</p>
                </div>
            </div>

            <div className='document_item d-flex justify-content-between'>
                <img width={30} height={30} src={PDF} /> <img width={30} height={30} src={hamburger} />
                <div className='document_item_detail'><b>Document Name</b><p className='text-secondary'>Lorem ipsum dolor sit amet</p>
                </div>
            </div>

            <div className='document_item d-flex justify-content-between'>
                <img width={30} height={30} src={PDF} /> <img width={30} height={30} src={hamburger} />
                <div className='document_item_detail'><b>Document Name</b><p className='text-secondary'>Lorem ipsum dolor sit amet</p>
                </div>
            </div>

            <div className='document_item d-flex justify-content-between'>
                <img width={30} height={30} src={PDF} /> <img width={30} height={30} src={hamburger} />
                <div className='document_item_detail'><b>Document Name</b><p className='text-secondary'>Lorem ipsum dolor sit amet</p>
                </div>
            </div>

            <div className='document_item d-flex justify-content-between'>
                <img width={30} height={30} src={PDF} /> <img width={30} height={30} src={hamburger} />
                <div className='document_item_detail'><b>Document Name</b><p className='text-secondary'>Lorem ipsum dolor sit amet</p>
                </div>
            </div>

            <div className='document_item d-flex justify-content-between'>
                <img width={30} height={30} src={PDF} /> <img width={30} height={30} src={hamburger} />
                <div className='document_item_detail'><b>Document Name</b><p className='text-secondary'>Lorem ipsum dolor sit amet</p>
                </div>
            </div>

            <div className='document_item d-flex justify-content-between'>
                <img width={30} height={30} src={PDF} /> <img width={30} height={30} src={hamburger} />
                <div className='document_item_detail'><b>Document Name</b><p className='text-secondary'>Lorem ipsum dolor sit amet</p>
                </div>
            </div>


        </div>

    </>);
}