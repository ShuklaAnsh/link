import express, { Express } from "express";
import cors from "cors";
import compression from "compression";  // compresses requests
import session from "express-session";
import bodyParser from "body-parser";
import path from "path";

// Create Express server
const app: Express = express();

const PORT: string | number = process.env.PORT || 4000
app.set("port", PORT);

// Configuration
app.use(cors())
app.use(express.static(path.join(__dirname, 'frontend')));

// Start server
app.listen(PORT, () => {
    console.log(`  App is running at http://localhost:${PORT} in ${app.get('env')} mode`);
    console.log("  Press CTRL-C to stop\n");
});
