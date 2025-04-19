import { AlertIcon, EventIcon, FeedIcon, NotificationIcon } from "../icons/Icons";
import Menu from "./Menu";
const menus = [
    {
        id: 1,
        label: "Feeds",
        href: "/feeds",
        icon: <FeedIcon height={16} width={16} />
    },
    {
        id: 2,
        label: "Events",
        href: "/events",
        icon: <EventIcon height={16} width={16} />
    },
    {
        id: 3,
        label: "Alerts",
        href: "/alerts",
        icon: <AlertIcon height={16} width={16} />
    },
    {
        id: 4,
        label: "Notifications",
        href: "/notifications",
        icon: <NotificationIcon height={16} width={16} />
    },
]

const MenuList = () => {
    return (
        <section className="flex flex-row items-center gap-5">
            {
                menus.map(item => <Menu key={item.id} label={item.label} href={item.href}>{item.icon}</Menu>)
            }
        </section>
    )
}

export default MenuList;