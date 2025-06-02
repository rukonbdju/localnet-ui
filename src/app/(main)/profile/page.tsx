import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import CoverPhoto from "./components/CoverPhoto";
import PersonalInfo from "./components/PersonalInfo";
import ProfilePicture from "./components/ProfilePicture";
import UserInfo from "./components/UserInfo";

const Profile = () => {
    return (
        <div className="m-4">
            <div className="max-w-2xl mx-auto my-5">
                <section className="rounded shadow-2xs bg-white">
                    <div className="relative">
                        <CoverPhoto />
                        <ProfilePicture />
                    </div>
                    <div className="mt-8 p-5">
                        <UserInfo />
                    </div>
                </section>
                <section className="rounded shadow-2xs mt-5 p-5 bg-white">
                    <h3 className="font-bold border-b mb-5">Personal Information</h3>
                    <PersonalInfo />
                </section>
                <TabGroup className="mt-8 bg-white p-5 rounded shadow-2xs">
                    <TabList className='border-b pb-1 flex flex-wrap gap-3 sticky top-16 bg-white z-40'>
                        <Tab className="outline-0 border border-blue-500 px-3 rounded transition-colors duration-150 data-hover:bg-blue-400 data-selected:bg-blue-500 data-selected:text-white">
                            Feeds
                        </Tab>
                        <Tab className="outline-0 border border-blue-500 px-3 rounded transition-colors duration-150 data-hover:bg-blue-400 data-selected:bg-blue-500 data-selected:text-white">
                            Events
                        </Tab>
                        <Tab className="outline-0 border border-blue-500 px-3 rounded transition-colors duration-150 data-hover:bg-blue-400 data-selected:bg-blue-500 data-selected:text-white">
                            Alerts
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dolores nostrum animi, consequuntur vel ad mollitia ut dolorum aut et, officiis incidunt corporis nisi sequi molestias fugit perspiciatis quos praesentium?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio iusto, provident veritatis facilis temporibus aliquid eius, at, accusamus voluptatum id. Illum iusto ipsa totam necessitatibus error, doloremque beatae inventore?
                        </TabPanel>
                        <TabPanel>Content 2</TabPanel>
                        <TabPanel>Content 3</TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    )
}
export default Profile;