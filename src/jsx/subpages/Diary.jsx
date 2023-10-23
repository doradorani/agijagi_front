import React from "react";
import '../../css/subpage/diary.css'
// import '../../css/subpage/diaryBook.css'

const Diary = () => {
    return (
        <div className="diary_wrap">
            <div>
                <img className="diary_main_img" src="/test_imgs/diary_imgs/diary5.jpg"/>
            </div>
            {/* <div className="component">
                <ul className="align">
                    <li>
                        <figure className='book'>
                        <ul className='hardcover_front'>
                            <li>
                            <img src="/test_imgs/diary_imgs/diary3.jpg" alt="" width="100%" height="100%" />
                            </li>
                            <li></li>
                        </ul>        
                        <ul className='page'>
                            <li></li>
                            <li>
                            <a className="btn" href="#">Download</a>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>        
                        <ul className='hardcover_back'>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul className='book_spine'>
                            <li></li>
                            <li></li>
                        </ul>
                            <figcaption>
                                <h1>Responsive Web Design</h1>
                                <span>By Ethan Marcotte</span>
                                <p>From mobile browsers to netbooks and tablets, users are visiting your sites from an increasing array of devices and browsers. Are your designs ready?...</p>
                            </figcaption>
                        </figure>
                    </li>  
                </ul>  
            </div> */}
        </div>
    );
};

export default Diary;