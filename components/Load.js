async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done 2')
        }, 5000)
    })
  }

export default async function Load() {

    const t = await getData();

    return (
        <p>This component is loaded</p>
    )
    
}