import React, { useEffect, useState } from 'react';
import '../../../css/subpage/calendar.css';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userStateAction } from '../../../js/api/redux_store/slice/userLoginSlice';
import DiaryHeader from './DiaryHeader';
import Swal from 'sweetalert2';
// 자녀별로 색 다르게 => eventcolor

const CalendarListVer = ({ adContents, validationUser, setIsLoading, isLoading }) => {
    const [healthCalendarData, setHealthCalendarData] = useState(null);
    const userLoginDispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        const getDiary = async () => {
            try {
                const validateResponse = validationUser('post', '/user/validate');
                try {
                    validationUser('get', '/childHealth/inoculationNotes').then((res) => {
                        if (res != undefined && res.success) {
                            setHealthCalendarData(res.data);
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
        const { no, cd_no, title } = clickInfo.event;

        Swal.fire({
            title: title,
        });
    };

    let listContents = [];

    let color = ['#ff9aa3', 'skyblue', 'gold'];

    (healthCalendarData !== null && Array.isArray(healthCalendarData) ? healthCalendarData : []).map((idx) =>
        listContents.push({
            title:
                idx.cd_name +
                (idx.vaccination_nm == null ? '' : ' [' + idx.vaccination_nm + '] ') +
                (idx.inoculation_order == null ? '' : idx.inoculation_order + '차 ') +
                (idx.inoculation_agency == null ? '' : '병원 : ' + idx.inoculation_order),
            content: '키: ' + idx.height + ' 몸무게: ' + idx.wieght + ' 두위: ' + idx.head,
            start: idx.reg_date,
            backgroundColor: color[idx.sequence - 1],
            allday: 1,
            no: idx.no,
            child_no: idx.cd_no,
        })
    );

    return (
        <>
            <div className="post_full_section">
                <div className="post_section">
                    <div style={{ paddingLeft: '1.7%' }}>
                        <DiaryHeader select={'육아 수첩'} src={'/test_imgs/png/diary1.png'} />
                    </div>
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
                                        eventClick={eventClick}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {adContents}
        </>
    );
};

export default CalendarListVer;
