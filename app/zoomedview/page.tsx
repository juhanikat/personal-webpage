import Link from "next/link"
import Image from "next/image"
import { ViewTransition } from "react"

export default function ZoomedView() {
  return (
    <div className="flex flex-1 flex-row gap-20 justify-center items-center bg-black">
      <ViewTransition name={"photo"}>
        <Image
          src="/juhani_naama.jpg"
          alt="Zoomed picture of me"
          width={500}
          height={200}
          priority
        />
      </ViewTransition>
      <Link href={"/"} className="border-2 p-5">Go Back</Link>
    </div>
  )
}
