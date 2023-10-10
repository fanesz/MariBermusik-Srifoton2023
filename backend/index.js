import express from "express";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import materiRoute from "./routes/materiRoute.js";
import loginRoute from "./routes/loginRoute.js";
import forgetPassRoute from "./routes/forgetPassRoute.js";
import forumRoute from "./routes/forumRoute.js";

const app = express();

const corsOptions = {
  origin: 'https://maribermusik.fanesp.online/',
  optionsSuccessStatus: 200
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', cors(corsOptions), userRoute);
app.use('/api/materi', cors(corsOptions), materiRoute);
app.use('/api/login', cors(corsOptions), loginRoute);
app.use('/api/forgetPass', cors(corsOptions), forgetPassRoute);
app.use('/api/forum', cors(corsOptions), forumRoute);


app.listen(5000, () => console.log('Server running at port 5000'));
