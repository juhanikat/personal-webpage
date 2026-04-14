"use client"

import Image from "next/image"
import { ViewTransition } from "react"
import { useState } from "react"
import Link from "next/link"

function InfoCard({
  title,
  description,
  linkedin,
}: {
  title: string
  description: string
  linkedin: string
}) {
  return (
    <div className="min-w-50 min-h-50 rounded-md border border-zinc-300 bg-zinc-100 p-4 dark:border-zinc-700 dark:bg-zinc-800">
      <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      <p className="text-zinc-700 dark:text-zinc-300">{description}</p>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        LinkedIn
      </a>
    </div>
  )
}

export default function Home() {
  const [showZoomedView, setShowZoomedView] = useState(false)

  return (
    <div className="min-h-screen w-full">
      <main className="flex min-h-screen w-full flex-row justify-around gap-10 bg-sky-950/40 ">
        <div className="flex flex-col justify-center">
          <ViewTransition name={"photo"}>
            <Link href={"/zoomedview"}>
              <Image
                src="/juhani_naama.jpg"
                alt="Picture of me"
                width={300}
                height={200}
                priority
                onClick={() => setShowZoomedView(!showZoomedView)}
              />
            </Link>
          </ViewTransition>
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <InfoCard
            title="Juhani Kataja"
            description="Student at University of Helsinki."
            linkedin="https://www.linkedin.com/in/juhani-kataja-1b211b2aa/"
          />
        </div>
      </main>
    </div>
  )
}
