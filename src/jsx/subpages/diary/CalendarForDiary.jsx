import React, { Component, useState } from 'react';
import '../../../css/subpage/calendar.css';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
// 자녀별로 색 다르게 => eventcolor

const CalendarForDiary = (diaryData, setMethodUrl, setSelectedDiary, setSelectedSideMenu) => {
    const eventClick = (clickInfo) => {
        const { no, cd_no } = clickInfo.event;

        setMethodUrl({ method: 'get', url: '/diary/dailyDiaryDetail/' + cd_no + '/' + no });
        setSelectedSideMenu(1);
        setSelectedDiary(5);

        clickInfo.jsEvent.preventDefault();
    };

    let calendarContents = [];

    let color = ['#ff9aa3', 'skyblue', 'yellow'];

    (diaryData.diaryData !== null && Array.isArray(diaryData.diaryData) ? diaryData.diaryData : []).map((idx) =>
        calendarContents.push({
            title: idx.cd_name + ' [' + idx.title + ']',
            date: idx.reg_date,
            color: idx.sequence == 1 ? color[0] : idx.sequence == 2 ? color[1] : idx.sequence == 3 ? color[2] : 'gold',
            allDay: 1,
            no: idx.no,
            child_no: idx.cd_no,
        })
    );

    return (
        <div>
            <div className="calendar_wrap">
                <div className="calendar_section">
                    <div className="calendar_second_wrap">
                        <div id="calendar">
                            <FullCalendar
                                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                initialView={'dayGridMonth'}
                                headerToolbar={{
                                    start: 'today',
                                    center: 'title',
                                    end: 'prev,next',
                                }}
                                eventMinWidth={'10vh'}
                                height={'85vh'}
                                events={calendarContents}
                                eventClick={eventClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarForDiary;
