import React from 'react';
import "./style.css";
import { BiMenuAltLeft } from 'react-icons/bi';
import { AiOutlineStar, AiFillCloud, AiFillTrophy } from 'react-icons/ai';
import { IoMdText } from 'react-icons/io';
import { BsGraphUp } from 'react-icons/bs';
import { FaRegCheckCircle } from 'react-icons/fa';

function Live() {
  return (
    <section className="sec">
      <div className="sub-sec1">
        <div className="sec_title">
          <span className="title">List of polls</span>
          <div className="dropdown">
            <span className="dropbtn">+ Create Poll</span>
            <div class="dropdown-content">
              <div className="drop_text">
                <BiMenuAltLeft />
                <span>Multiple Choice</span>
              </div>
              <div className="drop_text">
                <IoMdText />
                <span>Open Text Poll</span>
              </div>
              <div className="drop_text">
                <AiFillCloud />
                <span>Word Cloud Poll</span>
              </div>
              <div className="drop_text">
                <AiFillTrophy />
                <span>Quiz</span>
              </div>
              <div className="drop_text">
                <AiOutlineStar />
                <span>Ratings</span>
              </div>
              <div className="drop_text">
                <BsGraphUp />
                <span>Ranking</span>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="poll_div">
            <div className="poll">
              <div className="icon_div">
                <AiOutlineStar className="icon" />
              </div>
              <div className="text_div">
                <span className="text1">Rating Poll</span>
                <div className="text_box">
                  <span className="text2">Votes : 2</span>
                </div>
              </div>
            </div>
            <span className="text1">Which is your favourite fruit</span>
          </div>
          <div className="poll_div" style={{ paddingTop: "1rem" }}>
            <div className="poll">
              <div className="icon_div" style={{ backgroundColor: "rgb(245, 160, 245)" }}>
                <BiMenuAltLeft className="icon" style={{ color: "purple" }} />
              </div>
              <div className="text_div">
                <span className="text1">Multiple Choice</span>
                <div className="text_box" style={{ backgroundColor: "rgb(245, 160, 245)" }}>
                  <span className="text2" style={{ color: "purple" }}>Votes : 2</span>
                </div>
              </div>
            </div>
            <span className="text1">Which is your favourite fruit</span>
          </div>
          <div className="poll_create">+ Create Poll</div>
        </div>
      </div>

      <div className="sub-sec2">
        <div className="sec_title">
          <span className="title">Live</span>
          <div className="all_results">
            <BiMenuAltLeft />
            <span className="all_result_text">All Results</span>
          </div>
        </div>
        <div className="box">
          <div className="box2">
            <span className="text1 box2_text">Which is your favourite travel destination? Describe in brief</span>
            <div className="clickers">
              <div className="clicker_num">0</div>
              <div className="clicker_num">0</div>
              <div className="clicker_num">5</div>
            </div>
          </div>
          <div className="poll_box">
            <div className="poll_display">
              <span className="poll_name">Man U</span>
              <div className="poll_show">
                <div className="poll_show_1"></div>
              </div>
              <span className="poll_name">30%</span>
            </div>
            <div className="poll_display">
              <span className="poll_name">Barca</span>
              <div className="poll_show">
                <div className="poll_show_2"></div>
              </div>
              <span className="poll_name">45%</span>
            </div>
            <div className="poll_display">
              <span className="poll_name">Real</span>
              <div className="poll_show">
                <div className="poll_show_3">
                  <FaRegCheckCircle className="poll_icon" />
                </div>
              </div>
              <span className="poll_name">63%</span>
            </div>
            <div className="poll_display">
              <span className="poll_name">Arsanel</span>
              <div className="poll_show">
                <div className="poll_show_4"></div>
              </div>
              <span className="poll_name">10%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Live;