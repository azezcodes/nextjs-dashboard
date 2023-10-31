import {HomeIcon,UsersIcon,Cog6ToothIcon,PowerIcon} from '@heroicons/react/24/outline';
export const links = [
    {
        label : "Home",
        icon: <HomeIcon />,
        path: "/dashboard"
    },
    {
        label : "Peoples",
        icon: <UsersIcon />,
        path: "/dashboard/users"
    },
    {
        label : "Settings",
        icon: <Cog6ToothIcon />,
        path: "/dashboard/settings"
    },
    {
        label : "Logout",
        icon: <PowerIcon />,
        path: "/dashboard/logout"
    }
]