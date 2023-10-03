export const dynamic = 'force-dynamic'
import Load from "../../../components/Load"

import Link from "next/link"
import { Suspense } from "react"

export default async function Dos() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Page test 2</h1>

            <Suspense fallback={<p>Loading...</p>} >
                <Load />
            </Suspense>

            <Link prefetch={false} href={"/subtest"}>Go to page 1</Link>
        </main>
    )
}
