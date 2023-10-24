import React, { Component } from 'react';
import '../../../css/subpage/calendar.css';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';

class Calendar extends Component {
    constructor(props) {
        super(props);
    }
    dateClick = (info) => {
        alert(info.dateStr);
    };
    render() {
        return (
            <div className="calendar_wrap">
                <div>
                    <img className="diary_main_img" src="/test_imgs/diary_imgs/diary5.jpg" />
                </div>
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
                            dateClick={this.dateClick}
                            events={[
                                { title: '하품을 했다', date: '2023-10-11' },
                                { title: '집가고 싶다', date: '2023-10-13' },
                            ]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Calendar;
