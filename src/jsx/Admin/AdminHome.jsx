import React, {useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router';
import AdminHeader from './AdminHeader';
import AdminSidbar from './AdminSidebar';
import UserSuspended from './subpages/member/UserSuspended';
import AdminAuthorization from './subpages/member/AdminAuthorization';
import AdminNoticeList from './subpages/noticeboard/AdminNotice';
import PostReport from './subpages/community/PostReport';
import CommentReport from './subpages/community/CommentReport';
import AdminCoBuyingList from './subpages/co-buying/AdminCo-BuyingList';
import ScrollToTop from '../ScrollToTop';
import {useValidationAdmin} from "../../js/api/admin/ValidationAdminApi";

const AdminHome = () => {
    const [adminData, setAdminData] = useState();
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
            {/* <AdminHeader setSelectedMenu={setSelectedMenu} /> */}
            <div className="admin_container flex">
                <AdminSidbar />
                <div className="admin_content_section_wrap" style={{ width: '100%' }}>
                    <Routes>
                        {/* <Route path="/user_suspended" element={<UserSuspended selectedMenu={selectedMenu} />}></Route> */}
                        <Route path="/user_suspended" element={<UserSuspended />}></Route>
                        <Route path="/admin_authorization" element={<AdminAuthorization />}></Route>
                        <Route path="/admin_post" element={<AdminNoticeList />}></Route>
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
