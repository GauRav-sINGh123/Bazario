import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
 

const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

app.use(express.json({limit:'16kb'}));
app.use(express.urlencoded({extended:true,limit:'16kb'}));
app.use(express.static('public'));
app.use(cookieParser());

// routes import 
import userRouter from './routes/userRoutes.js'
import productRouter from './routes/productRoutes.js'
import cartRoutes from "./routes/cartRoutes.js";
import couponRoutes from "./routes/couponRoutes.js";

app.use('/api/v1/user',userRouter)

app.use('/api/v1/products',productRouter)

app.use ('/api/v1/cart',cartRoutes)

app.use("/api/v1/coupon",couponRoutes)



export {app}