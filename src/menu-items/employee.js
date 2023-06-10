// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const employee = {
    id: 'employee',
    title: 'Employee',
    type: 'group',
    children: [
        {
            id: 'employees',
            title: 'Employee',
            type: 'item',
            url: '/employee',
            icon: icons.ProfileOutlined,
            target: true
        }
    ]
};

export default employee;
