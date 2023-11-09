import React, { useEffect, useState } from 'react';
import '../../../css/subpage/calendar.css';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import Swal from 'sweetalert2';
import DiaryHeader from './DiaryHeader';
import ScrollToTop from '../../ScrollToTop';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { userStateAction } from '../../../js/api/redux_store/slice/userLoginSlice';
// 자녀별로 색 다르게 => eventcolor

const CalendarForDiary = ({ validationUser, setIsLoading, isLoading }) => {
    const [diaryCalendarData, setDiaryCalendarData] = useState(null);
    const userLoginDispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const getDiary = async () => {
            try {
                const validateResponse = validationUser('post', '/user/validate');
                try {
                    validationUser('get', '/diary/dailyDiaries').then((res) => {
                        if (res.success) {
                            setDiaryCalendarData(res.data);
                        }
                    });
                    setIsLoading(true);
                } catch (error) {
                    console.log('데이터 파싱 에러');
                    console.log(error);
                }
            } catch (error) {
                console.log(error);
                userLoginDispatch(userStateAction.setState(false));
            } finally {
                setIsLoading(false);
            }
        };
        getDiary();
    }, []);

    const eventClick = (clickInfo) => {
        const { title, display, date, id, groupId } = clickInfo.event;
        console.log(display);
        console.log(clickInfo);

        Swal.fire({
            title: title,
            text: display,
            confirmButtonText: '확인',
        }).then((res) => {
            if (res.isConfirmed) {
            } else {
            }
        });
    };

    let calendarContents = [];

    let color = ['#ff9aa3', 'skyblue', 'yellow'];

    (diaryCalendarData !== null && Array.isArray(diaryCalendarData) ? diaryCalendarData : []).map((idx) =>
        calendarContents.push({
            title: idx.cd_name + ' [' + idx.title + ']',
            display: idx.content,
            date: idx.reg_date,
            color: idx.sequence == 1 ? color[0] : idx.sequence == 2 ? color[1] : idx.sequence == 3 ? color[2] : 'gold',
            allDay: 1,
            id: idx.no,
            groupId: idx.cd_no,
        })
    );

    return (
        <div className="post_full_section">
            <ScrollToTop />
            <DiaryHeader select={'달력'} src={'/test_imgs/png/diary3.png'} />
            {diaryCalendarData == null ? (
                <div>로딩중</div>
            ) : (
                <div className="add_diary_container" style={{ width: '90%' }}>
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
            )}
        </div>
    );
};

export default CalendarForDiary;
