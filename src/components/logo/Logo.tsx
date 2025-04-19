import Image from "next/image"

export function Logo({ height = 44, width = 44 }: { height?: number; width?: number }) {
    return (
        <div className="flex items-center justify-center">
            <Image src={'/logo.png'} alt="logo" width={width} height={height} />
        </div>
    )
}