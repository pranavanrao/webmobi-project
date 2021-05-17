import './side-right.css';
import { IoNotificationsCircleSharp } from 'react-icons/io5';
import { IoIosChatbubbles, IoIosSettings } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg'
import profile from './rao.jpg';

function SideRight() {
    return(
        <div className="main">
            <CgProfile className="icon" style={{ marginTop: "1rem" }} />
            <IoNotificationsCircleSharp className="icon" />
            <IoIosChatbubbles className="icon" />
            <IoIosSettings className="icon" style={{ paddingBottom: "1rem", borderBottom: "3px solid gray" }} />
        </div>
    );
}

export default SideRight;