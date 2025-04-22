export async function Comments(){
    await new Promise((r) => setTimeout(r, 3000))

    return <div>Comments content</div>
}