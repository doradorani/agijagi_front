import React from 'react';
import CoBuyingList from '../../../subpages/co-buying/CoBuyingList';

const AdminCoBuyingList = () => {
    return (
        <>
            <div className="admin_co-buying_wrap" style={{ margin: '50px auto 0' }}>
                <div className="admin_co-buying_second_wrap">
                    <CoBuyingList />
                </div>
            </div>
        </>
    );
};

export default AdminCoBuyingList;
