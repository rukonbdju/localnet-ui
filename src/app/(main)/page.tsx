import Container from "@/components/shared/Container";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto my-2">

      <Container className="my-4 py-1 rounded">
        <div className="flex items-center text-sm">
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
          <button className="rounded px-3 bg-gray-200 hover:bg-gray-300">5km</button>
          <button className="rounded px-3 bg-gray-200 hover:bg-gray-300">10km</button>
          <button className="rounded px-3 bg-gray-200 hover:bg-gray-300">city</button>
          <button className="rounded px-3 bg-gray-200 hover:bg-gray-300">Country</button>
        </div>
      </Container>
    </div>
  );
}
