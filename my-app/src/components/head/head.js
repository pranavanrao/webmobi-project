import './head.css';
import { FiYoutube, FiShare2 } from 'react-icons/fi';

function Head() {
    return(
        <header className="header">
            <div className="header_main">
                <div className="header_title_div">
                    <div className="header_title_div_2">
                        <h1 className="header_title">Webmobi - #40982</h1>
                        <div className="header_title_span">
                            <p className="expired">Expired</p>
                        </div>
                    </div>
                    <span className="header_date">03 January, 2021 - 10 January, 2021</span>
                </div>
                <div className="header_components">
                    <div className="header_title_span" style={{ padding: "3px 10px 3px 10px" }}>
                        <div className="comp_div">
                            <FiShare2 style={{ color: "white" }} />
                            <p className="comp_title">Share</p>
                        </div>
                    </div>
                    <div className="header_title_span" style={{ backgroundColor: "green" }}>
                        <div className="comp_div" style={{ padding: "3px 10px 3px 10px" }} >
                            <FiYoutube style={{ color: "white" }} />
                            <p className="comp_title">Present</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Head;