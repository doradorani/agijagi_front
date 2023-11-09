import React, { Component, useState } from 'react';
import '../../../css/subpage/calendar.css';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
// 자녀별로 색 다르게 => eventcolor

const CalendarListVer = (diaryData, setMethodUrl, setSelectedDiary, setSelectedSideMenu) => {
    console.log(diaryData);
    const eventClick = (clickInfo) => {
        const { no, cd_no } = clickInfo.event;

        setMethodUrl({ method: 'get', url: '/diary/dailyDiaryDetail/' + cd_no + '/' + no });
        setSelectedSideMenu(1);
        setSelectedDiary(5);

        clickInfo.jsEvent.preventDefault();
    };

    let listContents = [];

    let color = ['#ff9aa3', 'skyblue', 'gold'];

    (diaryData.diaryData !== null && Array.isArray(diaryData.diaryData) ? diaryData.diaryData : []).map((idx) =>
        listContents.push({
            title:
                idx.cd_name +
                ' [' +
                idx.vaccination_nm +
                ' ' +
                idx.inoculation_order +
                '차 ] 병원 : ' +
                idx.inoculation_agency,
            start: idx.reg_date,
            backgroundColor:
                idx.sequence == 1 ? color[0] : idx.sequence == 2 ? color[1] : idx.sequence == 3 ? color[2] : 'black',
            allday: 1,
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
                                plugins={[listPlugin]}
                                initialView={'listWeek'}
                                headerToolbar={{
                                    start: 'today',
                                    center: 'title',
                                    end: 'prev,next',
                                }}
                                eventMinWidth={'10vh'}
                                height={'85vh'}
                                events={listContents}
                                eventClick={() => eventClick()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarListVer;
