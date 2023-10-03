export const dynamic = 'force-dynamic'

import Link from "next/link"

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done 1')
        }, 5000)
    })
  }

export default async function Dos() {

    const t = await getData();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-3xl">Page test 1</h1>

            <Link prefetch={false} href={"/loading/subloading"}>Go to page 2</Link>
            <Link prefetch={false} href={"/"}>Go home</Link>
        </main>
    )
}
