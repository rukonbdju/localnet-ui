import Image from "next/image"

const CoverPhoto = () => {
    return (
        <div className="h-[200] md:h-[300]">
            <Image src={'/cover-photo.jpg'} width={672} height={400} alt="cover photo" className="w-full h-full object-cover rounded-t-2xl" />
        </div>
    )
}

export default CoverPhoto;