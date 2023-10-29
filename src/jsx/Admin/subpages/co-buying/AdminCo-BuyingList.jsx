import React from 'react';
import CoBuyingList from '../../../subpages/co-buying/CoBuyingList';
import AdminSidbar from '../../AdminSidebar';

const AdminCoBuyingList = ({ setSelectedSideMenu }) => {
    return (
        <>
            <div className="flex">
                <div className="admin_co-buying_wrap" style={{ margin: '50px auto 0' }}>
                    <div className="admin_co-buying_second_wrap">
                        <CoBuyingList />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminCoBuyingList;
