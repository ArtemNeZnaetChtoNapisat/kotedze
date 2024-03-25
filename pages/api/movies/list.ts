import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import { redirect } from 'next/navigation';

export default async function listMovies(req, res) {
  const session = await getServerSession(req, res, authOptions)


  if(req.url=="/user" && req.url=="setpromocode"){
    if (session) {
      //  redirect('/login')
  //  console.log(req.url)
    res.redirect('/login');
      // res.send({
      //   movies: [
      //     { title: "Вы авторизованы", id: session, e: 2 }
      //   ],
      // })
    } else {
      res.redirect('/login');
      // res.statusCode = 301;
      res.send({
        error: "Иди нахуй черт ебаный",
      })
    }
  }
  res.send({
    error: "ok",
  })
}