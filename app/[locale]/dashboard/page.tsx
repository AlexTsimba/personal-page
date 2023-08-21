export default function Dashboard() {
  return (
    <div data-scroll-speed="1" className="flex h-screen items-center justify-center bg-green-400">
      dashboard
      <span
        data-scroll
        data-scroll-speed="1"
        className="mr-20 mt-20 text-4xl"
      >
        HelloWorld
      </span>
      <div data-scroll data-scroll-speed="0.1" className="bg-black">
        COntent
      </div>
    </div>
  );
}
