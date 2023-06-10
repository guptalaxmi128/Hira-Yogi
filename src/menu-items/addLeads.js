// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const addLeads = {
    id: 'addleads',
    title: 'Lead',
    type: 'group',
    children: [
        {
            id: 'addleads',
            title: 'Add Leads',
            type: 'item',
            url: '/add-leads',
            icon: icons.ProfileOutlined,
            target: true
        }
    ]
};

export default addLeads;
