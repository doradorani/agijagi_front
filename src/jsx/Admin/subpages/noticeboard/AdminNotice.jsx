import React from 'react';
import NoticeTable from '../../../subpages/noticeboard/NoticeTable';
import AdminSidbar from '../../AdminSidebar';

const AdminNoticeList = ({ setSelectedSideMenu }) => {
    return (
        <>
            {' '}
            <div className="flex">
                <AdminSidbar selectedMenu={3} setSelectedSideMenu={setSelectedSideMenu} />
                <div className="admin_notice_wrap" style={{ margin: '50px auto 0' }}>
                    <div className="admin_notice_second_wrap">
                        <NoticeTable />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminNoticeList;
