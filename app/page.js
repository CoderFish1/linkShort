import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="herosection flex">

      <div className="left h-[90vh] w-[60%] bg-amber-50 flex flex-col justify-center items-center">
        <div className="relative flex flex-col justify-center items-center">
          <div className="heading text-4xl font-bold mb-10">Smart Links for a Fast World</div>
          <div className="subhead text-xl text-center">With LinkShort, your URLs stay short and your reach grows long — no signup, just share</div>
        </div>
        <Link href="/shorten"><button className="btn bg-blue-500 p-3 rounded-xl mt-5 font-medium text-white">Try Now</button></Link>
      </div>

      <div className="right h-[90vh] w-[40%] bg-blue-400 relative">
        <Image src="/link-url.jpg" alt="Link image" className="object-fill" fill/>
      </div>
    </div>
    </>
  );
}
