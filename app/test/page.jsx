import Link from "next/link"

export default async function Dos() {

    const t = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done')
        }, 3000)
    })

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>pagina de test</h1>

           <Link href={"/"}>ir al 1</Link>
        </main>
    )
}
