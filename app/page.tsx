import Image from "next/image"
import type { InputHTMLAttributes } from "react"

function InfoCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="rounded-md border border-zinc-300 bg-zinc-100 p-4 dark:border-zinc-700 dark:bg-zinc-800 w-96 min-h-full">
      <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      <p className="text-zinc-700 dark:text-zinc-300">{description}</p>
    </div>
  )
}
export function TextInputBox(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      placeholder="Type here..."
      className="w-full max-w-sm rounded-md border border-zinc-300 px-3 py-2 text-black outline-none focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
      {...props}
    />
  )
}
export default function Home() {
  return (
    <div className="m-20 min-h-full">
      <main className="flex flex-row justify-around gap-10">
        <div className="sky-500/10 flex flex-column">
          <Image
            src="/juhani_naama.jpg"
            alt="Next.js logo"
            width={300}
            height={2000}
            priority
          />
        </div>
        <div className="sky-500/10 flex flex-column justify-center">
          <InfoCard title="Juhani Kataja" description="testing" />
        </div>
      </main>
    </div>
  )
}
