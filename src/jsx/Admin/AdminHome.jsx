import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import AdminHeader from './AdminHeader';
import AdminSidbar from './AdminSidebar';
import UserSuspended from './subpages/member/UserSuspended';
import AdminAuthorization from './subpages/member/AdminAuthorization';
import AdminNoticeList from './subpages/noticeboard/AdminNotice';
import PostReport from './subpages/community/PostReport';
import CommentReport from './subpages/community/CommentReport';
import AdminCoBuyingList from './subpages/co-buying/AdminCo-BuyingList';
import ScrollToTop from '../ScrollToTop';
import Footer from '../Footer';
import AdminLogin from './AdminLogin';
import WriteNotice from '../subpages/noticeboard/WriteNotice';
import { useValidationAdmin } from '../../js/api/admin/ValidationAdminApi';

import '../../css/common/adminCommon.css';

const AdminHome = () => {
    const [adminData, setAdminData] = useState();
    const [isSidebarCollapsed, setisSidebarCollapsed] = useState(true);
    const navigate = useNavigate();
    const validationAdmin = useValidationAdmin('/admin/home');
    useEffect(() => {
        async function getDiary() {
            try {
                const response = await validationAdmin();
                setAdminData(response);
            } catch (error) {
                navigate('/admin/sign_in');
            }
        }
        getDiary();
    }, []);
    //======================================//

    return (
        <>
            <ScrollToTop />
            <AdminHeader />
            <div className="admin_container">
                <AdminSidbar isSidebarCollapsed={isSidebarCollapsed} setisSidebarCollapsed={setisSidebarCollapsed} />
                <div className="admin_content_section_wrap">
                    <Routes>
                        {/* <Route path="/user_suspended" element={<UserSuspended selectedMenu={selectedMenu} />}></Route> */}
                        <Route path="/user_suspended" element={<UserSuspended />}></Route>
                        <Route path="/admin_authorization" element={<AdminAuthorization />}></Route>
                        <Route path="/admin_post" element={<AdminNoticeList />}></Route>
                        <Route path="/write_admin_notice" element={<WriteNotice />}></Route>
                        <Route path="/post_report" element={<PostReport />}></Route>
                        <Route path="/comment_report" element={<CommentReport />}></Route>
                        <Route path="/co-buying_list" element={<AdminCoBuyingList />}></Route>
                    </Routes>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default AdminHome;
