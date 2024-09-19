import Button from "@/app/components/Button";
import Image from "next/image";
import image from '@/public/images/laptop.png'
export default function Mission() {
  return (
    <main className="mt-10">
      <div>
        Mission page
        <p>Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.</p>
        <div className="w-36">
          <Image src={image} alt="image" />
        </div>
        <Button />
      </div>
    </main>
  );
}