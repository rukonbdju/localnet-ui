import { AlertIcon, EventIcon } from "@/components/icons/Icons";
import Container from "@/components/shared/Container";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-4 my-2">
      <Container>
        <section className="flex flex-row gap-2">
          <div>
            <div className="size-10 rounded-full ring">
              <Image src={"/avater-male.jpg"} width={40} height={40} alt="avatar" className="size-full rounded-full object-cover" />
            </div>
          </div>
          <span className="block cursor-pointer font-medium w-full hover:bg-gray-200 rounded border py-2 px-4">Start write here</span>
        </section>
        <section className="flex flex-wrap justify-end items-center gap-2 mt-4">
          <div>
            <button className="flex flex-row items-center gap-1 hover:bg-blue-300 bg-blue-200 rounded px-4 py-1 cursor-pointer">
              <EventIcon />
              <span>Event</span>
            </button>
          </div>
          <div>
            <button className="flex flex-row items-center gap-1 hover:bg-blue-300 bg-blue-200  rounded px-4 py-1 cursor-pointer">
              <AlertIcon />
              <span>Alert</span>
            </button>
          </div>
        </section>
      </Container>
      <Container className="my-4 py-1 rounded">
        <div className="flex items-center">
          <span className="shrink-0">Sort by</span>
          <span className="h-px flex-1 bg-gray-300"></span>
          <div className="shrink-0">
            <select name="sort" id="" className="outline-0">
              <option value="new">New</option>
              <option value="old">Old</option>
            </select>
          </div>
        </div>
      </Container>
      <Container className="py-2">
        <div className="flex flex-wrap gap-2 items-center">
          <span>Filter by:</span>
          <button className="rounded px-4 py-1 bg-blue-200 hover:bg-blue-300">5km</button>
          <button className="rounded px-4 py-1 bg-blue-200 hover:bg-blue-300">10km</button>
          <button className="rounded px-4 py-1 bg-blue-200 hover:bg-blue-300">city</button>
          <button className="rounded px-4 py-1 bg-blue-200 hover:bg-blue-300">Country</button>
        </div>
      </Container>
    </div>
  );
}
