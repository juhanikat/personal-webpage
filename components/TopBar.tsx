import Link from "next/link";

function Tab({ label, route }: { label: string, route: string }) {
    return <Link href={route}>{label}</Link>;
}

export function TopBar() {
    return <div className="w-full h-16 bg-zinc-700 flex items-center justify-start gap-4 px-4">
        <Tab label="Home" route="/" />
        <Tab label="About" route="/about" />
    </div>
}