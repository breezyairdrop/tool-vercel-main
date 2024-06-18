'use server'

import { cookies } from 'next/headers'

export default async function handler(req, res) {
    const { query } = req.query
  
    cookies().set('name', 'John Doe')  
  
  
  
  
    // console.log(query)
  
    res.status(200).send('done')
  }
  

//   async function create(data) {
//     cookies().set('name', 'John Doe')
//   }
//   async function delete (data) {
//     cookies().delete('name')
//   }