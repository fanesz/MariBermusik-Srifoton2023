import express from "express";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import materiRoute from "./routes/materiRoute.js";

const app = express();

app.use(cors());
app.use(express.json());


app.use('/user', userRoute);
app.use('/materi', materiRoute);


 
app.listen(5000, () => console.log('Server running at port 5000'));
