export const dynamic = 'force-dynamic'

import Link from "next/link"

async function getData() {
    
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('done')
      }, 5000)
  })
}

export default async function Home() {

  const t = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>

      <h3 className="text-3xl">{t}</h3>

      <Link prefetch={false} href={"/test"}>ir al 2</Link>
    </main>
  )
}
