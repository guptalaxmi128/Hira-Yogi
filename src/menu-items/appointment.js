// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const appointment = {
    id: 'appointment',
    title: 'Appointment',
    type: 'group',
    children: [
        {
            id: 'appointments',
            title: 'Appointment',
            type: 'item',
            url: '/appointment',
            icon: icons.ProfileOutlined,
            target: true
        }
    ]
};

export default appointment;
