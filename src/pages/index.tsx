import Image from 'next/image'
import { Inter } from 'next/font/google'
import gambar2 from "../../public/OIG (1).jpeg"
import gambar3 from "../../public/OIG (2).jpeg"
import gambar4 from "../../public/OIG (3).jpeg"



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded bg-white h-40 shadow-sm">
        <Image src={gambar4} alt="Image description" />
        </div>
        <div className="rounded bg-white h-40 shadow-sm">
        <Image src={gambar2} alt="Image description" />
        </div>
        <div className="rounded bg-white h-40 shadow-sm">
        <Image src={gambar3} alt="Image description" />
        </div>
      </div>
      <div className="grid col-1 bg-white h-96 shadow-sm"></div>
    </>
  );
}
