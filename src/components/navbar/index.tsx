import { Logo } from "../logo/Logo";
import MenuList from "./MenuList";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
    return (
        <div className="h-14 content-center shadow z-40 bg-white">
            <div className="flex flex-row gap-5 items-center justify-between mx-5">
                <section className="flex flex-col gap-1 items-center">
                    <div>
                        <Logo height={24} width={24} />
                    </div>
                    <span className="hidden md:inline">LocalNet</span>
                </section>
                <section className="max-w-2xl w-full flex justify-end gap-4">
                    <MenuList />
                    <UserDropdown />
                </section>
            </div>
        </div>
    )
}

export default Navbar;