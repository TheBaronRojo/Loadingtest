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
            <h1>pagina de test</h1>

            <h3 className="text-3xl">{t}</h3>

           <Link prefetch={false} href={"/"}>ir al 1</Link>
        </main>
    )
}
