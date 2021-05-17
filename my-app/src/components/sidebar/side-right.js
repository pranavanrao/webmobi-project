import './side.css';
import { IoNotificationsCircleSharp } from 'react-icons/io5';
import { IoIosChatbubbles, IoIosSettings } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg'

function SideRight() {
    return(
        <div className="main-right">
            <CgProfile className="side-icon" style={{ marginTop: "1rem" }} />
            <IoNotificationsCircleSharp className="side-icon" />
            <IoIosChatbubbles className="side-icon" />
            <IoIosSettings className="side-icon" style={{ paddingBottom: "1rem", borderBottom: "3px solid gray" }} />
        </div>
    );
}

export default SideRight;