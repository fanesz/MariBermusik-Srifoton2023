import express from "express";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import materiRoute from "./routes/materiRoute.js";
import loginRoute from "./routes/loginRoute.js";
import forgetPassRoute from "./routes/forgetPassRoute.js";
import forumRoute from "./routes/forumRoute.js";
import { validateToken } from "./config/validation.js";

const app = express();

const corsOptions = {
  origin: "https://maribermusik.fanesp.online",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', validateToken, userRoute);
app.use('/api/materi', validateToken, materiRoute);
app.use('/api/login', validateToken, loginRoute);
app.use('/api/forgetPass', validateToken, forgetPassRoute);
app.use('/api/forum', validateToken, forumRoute);


app.listen(5000, () => console.log('Server running at port 5000'));
