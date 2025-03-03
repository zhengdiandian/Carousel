import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8">
      <div className="flex flex-col justify-center align-middle gap-4 mb-4 mt-40">
        <h1 className="lg:text-6xl text-4xl line-clamp-6 font-bold text-center">
          MAKE YOUR SPEND, WELL-SPENT
        </h1>
        <p className="font-aeonik text-center font-bold text-black lg:text-2xl text-xl  max-w-[72rem] mx-auto">
          Updating your wardrobe? Get cashback. When in Japan? Spend in Yen. Big
          life goals? Reach them faster. However you spend — Revolut is all you
          need.
        </p>
        <div className="flex justify-center">
          <button className="bg-black text-[20px]  w-auto text-white px-8 py-4 mt-4 rounded-full hover:opacity-85">
            Get started
          </button>
        </div>
      </div>
      <Carousel />
    </main>
  );
}
