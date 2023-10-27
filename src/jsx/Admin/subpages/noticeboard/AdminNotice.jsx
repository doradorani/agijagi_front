import React from 'react';
import NoticeTable from '../../../subpages/noticeboard/NoticeTable';

const AdminNoticeList = () => {
    return (
        <>
            <div className="admin_notice_wrap" style={{ margin: '50px auto 0' }}>
                <div className="admin_notice_second_wrap">
                    <NoticeTable />
                </div>
            </div>
        </>
    );
};

export default AdminNoticeList;
