import {asyncHandler }from '../utils/asyncHandler.js'

export const signup=asyncHandler(async(req,res)=>{
   res.send("Signup Route Called")
})