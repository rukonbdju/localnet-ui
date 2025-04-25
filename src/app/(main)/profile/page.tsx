import CoverPhoto from "./components/CoverPhoto";
import PersonalInfo from "./components/PersonalInfo";
import ProfilePicture from "./components/ProfilePicture";
import UserInfo from "./components/UserInfo";

const Profile = () => {
    return (
        <div className="m-4">
            <div className="max-w-3xl mx-auto my-5">
                <section className="rounded-2xl shadow-xl">
                    <div className="relative">
                        <CoverPhoto />
                        <ProfilePicture />
                    </div>
                    <div className="mt-8 p-5">
                        <UserInfo />
                    </div>
                </section>
                <section className="rounded-2xl mt-5 shadow-xl p-5">
                    <h3 className="font-bold border-b-2 mb-5">Personal Information</h3>
                    <PersonalInfo />
                </section>
                <section className="rounded-2xl mt-5 shadow-xl p-5">
                    <h3 className="font-bold border-b-2 mb-5">Feeds</h3>
                    <p>Not Found!</p>
                </section>
                <section className="rounded-2xl mt-5 shadow-xl p-5">
                    <h3 className="font-bold border-b-2 mb-5">Events</h3>
                    <p>Not Found!</p>
                </section>
            </div>
        </div>
    )
}
export default Profile;