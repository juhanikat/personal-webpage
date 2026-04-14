import Link from "next/link"
import { ViewTransition } from "react"

export default function AboutPage() {
  return (
    <div className="w-full h-full flex flex-1 flex-col justify-center items-center">
      <p>Created with Next.js.</p>
      <a
        href={"https://github.com/juhanikat/personal-webpage"}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        GitHub repository for this page
      </a>
    </div>
  )
}
