import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute.js";
import materiRoute from "./routes/materiRoute.js";
import loginRoute from "./routes/loginRoute.js";
import forgetPassRoute from "./routes/forgetPassRoute.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/user', userRoute);
app.use('/materi', materiRoute);
app.use('/login', loginRoute);
app.use('/forgetPass', forgetPassRoute);


 
app.listen(5000, () => console.log('Server running at port 5000'));
