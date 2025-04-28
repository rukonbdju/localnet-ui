import { AlertIcon, EventIcon, HomeIcon, NotificationIcon } from "../icons/Icons";
import Menu from "./Menu";
const menus = [
    {
        id: 1,
        label: "Home",
        href: "/",
        icon: <HomeIcon />
    },
    {
        id: 2,
        label: "Events",
        href: "/events",
        icon: <EventIcon />
    },
    {
        id: 3,
        label: "Alerts",
        href: "/alerts",
        icon: <AlertIcon />
    },
    {
        id: 4,
        label: "Notifications",
        href: "/notifications",
        icon: <NotificationIcon />
    },
]

const MenuList = () => {
    return (
        <section className="flex flex-row items-center gap-4">
            {
                menus.map(item => <Menu key={item.id} label={item.label} href={item.href}>{item.icon}</Menu>)
            }
        </section>
    )
}

export default MenuList;