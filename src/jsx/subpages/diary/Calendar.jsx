import React, { Component, useState } from 'react';
import '../../../css/subpage/calendar.css';
import styled from 'styled-components';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import { Link } from 'react-router-dom';
import SideMenu from '../SideMenu.jsx';

const ToggleContainer = styled.div`
    position: relative;
    margin-top: 8rem;
    left: 47%;
    cursor: pointer;

    > .toggle-container {
        width: 50px;
        height: 24px;
        border-radius: 30px;
        background-color: rgb(255, 200, 0);
    }
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
    > .toggle--checked {
        background-color: rgb(0, 200, 102);
        transition: 0.5s;
    }

    > .toggle-circle {
        position: absolute;
        top: 1px;
        left: 1px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: rgb(255, 254, 255);
        transition: 0.5s;
        //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
    }
    > .toggle--checked {
        left: 27px;
        transition: 0.5s;
    }
`;

const Desc = styled.div`
    //설명 부분의 CSS를 구현
    text-align: center;
    margin: 20px;
`;
// 자녀별로 색 다르게 => eventcolor

const Calendar = () => {
    const [isOn, setisOn] = useState(false);

    // isOn에 따라 컴포넌트 Diary를 보여줄지 Calendar를 보여줄지 아래 Desc 아래에 넣음

    const toggleHandler = () => {
        setisOn(!isOn);
    };

    const dateClick = (info) => {
        alert(info.dateStr);
    };
    return (
        <div>
            <div className="calendar_wrap">
                <div className="calendar_section">
                    {/* <div className="toggle">
                        <ToggleContainer onClick={toggleHandler}>
                            <div className={`toggle-container ${isOn ? 'toggle--checked' : null}`} />
                            <div className={`toggle-circle ${isOn ? 'toggle--checked' : null}`}></div>
                        </ToggleContainer>
                        {isOn === false ? (
                            <Desc>
                                <div className="Diary">Diary</div>
                            </Desc>
                        ) : (
                            <Desc>
                                <div className="Calendar">Calendar</div>
                            </Desc>
                        )}
                    </div> */}
                    <div className="calendar_second_wrap">
                        <div className="calendar" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr' }}>
                            <FullCalendar
                                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                initialView={'dayGridMonth'}
                                headerToolbar={{
                                    start: 'today',
                                    center: 'title',
                                    end: 'prev,next',
                                }}
                                height={'85vh'}
                                dateClick={dateClick}
                                events={[
                                    { title: '하품을 했다', date: '2023-10-11' },
                                    { title: '집가고 싶다', date: '2023-10-13' },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
