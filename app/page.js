import Link from "next/link"


export default async function Home() {

  const t = await new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done')
    }, 3000)
})

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>

      <Link prefetch={false} href={"/test"}>ir al 2</Link>
    </main>
  )
}
