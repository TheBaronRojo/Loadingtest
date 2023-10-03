export const dynamic = 'force-dynamic'

import Link from "next/link"

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done 2')
        }, 5000)
    })
  }

export default async function Dos() {

    const t = await getData();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-3xl">Page test 2</h1>

            <Link prefetch={false} href={"/loading"}>Go to page 1</Link>
        </main>
    )
}
