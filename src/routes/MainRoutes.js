import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';



// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Article = Loadable(lazy(() => import('pages/article/Article')));
const Editorial = Loadable(lazy(() => import('pages/editorial/Editorial')));
const Master = Loadable(lazy(() => import('pages/master/Master')));
const Course = Loadable(lazy(() => import('pages/course/Course')));
const Business=Loadable(lazy(()=>import('pages/business/Business')));
const AddLeads=Loadable(lazy(()=>import('pages/addleads/AddLeads')));
const Student=Loadable(lazy(()=>import('pages/student/Student')));
const Form=Loadable(lazy(()=>import('pages/addleads/form/Form')));
const Employee=Loadable(lazy(()=>import('pages/empolyee/Employee')));
const UserDetail=Loadable(lazy(()=>import('pages/business/userdetail/UserDetail')));
const UpdateLead=Loadable(lazy(()=>import('pages/addleads/updateLead/UpdateLead')));
const Appointment=Loadable(lazy(()=>import('pages/appointment/Appointment')));
// ==============================|| MAIN ROUTING ||============================== //
const MainRoutes = {
    
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'article',
            element: <Article />
        },
        {
            path: 'editorial',
            element: <Editorial />
        },
        {
            path: 'master',
            element: <Master />
        },
        {
            path: 'course',
            element: <Course />
        },
        {
            path: 'business',
            element: <Business />
        },
        {
            path: 'add-leads',
            element: <AddLeads />
        },
        {
            path: 'form',
            element: <Form />
        },
        {
            path: 'student',
            element: <Student />
        },
        {
            path: 'employee',
            element: <Employee />
        },
        {
            path: 'user-detail',
            element: <UserDetail />
        },
        {
              path: `lead/:LEAD1000`,
            element: <UpdateLead />
        },
        {
            path: 'appointment',
            element: <Appointment />
        }
    ]
};



export default MainRoutes;
