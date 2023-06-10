// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const business = {
    id: 'business',
    title: 'Business Development',
    type: 'group',
    children: [
        {
            id: 'business1',
            title: 'Business Development',
            type: 'item',
            url: '/business',
            icon: icons.ProfileOutlined,
            target: true
        }
    ]
};

export default business;
