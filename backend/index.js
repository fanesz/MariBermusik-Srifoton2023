import express from "express";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import materiRoute from "./routes/materiRoute.js";
import loginRoute from "./routes/loginRoute.js";
import forgetPassRoute from "./routes/forgetPassRoute.js";
import forumRoute from "./routes/forumRoute.js";
import { validateToken } from "./config/validation.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', validateToken, userRoute);
app.use('/materi', validateToken, materiRoute);
app.use('/login', validateToken, loginRoute);
app.use('/forgetPass', validateToken, forgetPassRoute);
app.use('/forum', validateToken, forumRoute);


app.listen(5000, () => console.log('Server running at port 5000'));
