import { Logo } from "../logo/Logo";
import MenuList from "./MenuList";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
    return (
        <div className="h-14 md:h-16 content-center max-w-2xl mx-auto">
            <div className="flex flex-row gap-5 items-center justify-between">
                <section className="flex flex-row gap-1 items-center">
                    <div className="size-6">
                        <Logo height={24} width={24} />
                    </div>
                    <strong className="hidden md:inline-block">LocalNet</strong>
                </section>
                <section className="max-w-2xl w-full flex justify-end items-center gap-4">
                    <MenuList />
                    <UserDropdown />
                </section>
            </div>
        </div>
    )
}

export default Navbar;