export const dynamic = 'force-dynamic'
import Link from "next/link"

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>

      <Link className="text-3xl" prefetch={false} href={"/suspense"}>Go to suspense</Link>
      <Link className="text-3xl" prefetch={false} href={"/loading"}>Go to Loading.jsx</Link>
    </main>
  )
}
