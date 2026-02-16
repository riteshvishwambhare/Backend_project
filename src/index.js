import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config(
    {
        path: './env'
    }
)

connectDB()

.then(()=>{

    app.on("error", (error)=>{
        console.log("error", error);
        throw error;
    }) 
    app.listen(process.env.PORT || 5000)
})
.catch((error)=>{
    console.log("MONGO DB connection failed", error)
});


 






// import express from "express"
// const app = express()

// (async ()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error", (error)=>{
//         console.log("ERROR :", error)
//        })

//        app.Listen(process.env.PORT, () =>{
//         console.log(`App is listing on port ${process.env.PORT}`);
//        })
//     } catch (error) {
//         console.error("ERROR", error)
//     }
// })()