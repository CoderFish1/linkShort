import { redirect } from "next/navigation"
import clientPromise from "../libs/mongodb"

export default async function Page({ params }) {
  const  shorturl  = (await params).shorturl

   const client = await clientPromise;
    const db = client.db('linkshort');
    const collection = db.collection('url');

     const doc = await collection.findOne({shorturl: shorturl})
    if(doc){
      redirect(doc.url)
    }
    else{
      redirect(`${NEXT_PUBLIC_HOST}`)
    }

  return <div>My Post: {url}</div>
}