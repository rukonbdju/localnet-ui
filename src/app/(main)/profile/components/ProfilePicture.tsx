import Image from "next/image"

const ProfilePicture = () => {
    return (
        <div className="size-[100px] absolute -bottom-10 left-4">
            <Image src={'/avater-male.jpg'} height={100} width={100} alt="Profile picture" className="size-full object-cover object-center rounded-full border-4 border-blue-500" />
        </div>
    )
}

export default ProfilePicture;