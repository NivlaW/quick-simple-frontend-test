import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full flex-row">
      <aside className="border-r flex col-span-6 h-screen w-1/6 max-h-screen "></aside>
      <main className="flex w-full max-h-screen flex-col ">
        <div className="flex input-group items-center p-2 bg-[#4F4F4F]">
          <Image
            priority
            className="mx-2"
            src="/image/search.svg"
            width={20}
            height={20}
            alt="search"
          />
          <input
            type="search"
            className="bg-transparent appearance-none border-0 py-2.5 px-3 leading-tight focus:outline-none focus:border-0 focus:shadow-outline w-100"
            name=""
            id=""
          />
        </div>
      </main>
    </div>
  );
}
