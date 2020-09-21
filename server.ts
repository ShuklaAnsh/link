import express, { Express } from "express";
import cors from "cors";
import compression from "compression";
import formidable from "formidable";
import session from "express-session";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs";

// Create Express server
const app: Express = express();

const PORT: string | number = process.env.PORT || 4000
app.set("port", PORT);

// Configuration
if(app.get('env') === 'development') app.use(cors());
app.use(compression());
app.use(express.static(path.join(__dirname, 'frontend')));


//routes
app.post('/api/file', (req, res, next) => {
    try {
        const form = new formidable.IncomingForm();
        form.uploadDir = path.join(__dirname, '/uploads');
        form.keepExtensions = true;
        let files = [], fields = [];
        form.on('field', function(field, value) {
            fields.push([field, value]);
        })
        form.on('file', function(field, file) {
            console.log(file.name);
            files.push([field, file]);
        })
        form.on('end', function() {
            console.log('done');
        });
        form.parse(req);
        res.status(200).send("Uploaded");
    } catch (e) {
        console.log(e)
        res.send("done")
    }
})

// Start server
app.listen(PORT, () => {
    console.log(`  App is running at http://localhost:${PORT} in ${app.get('env')} mode`);
    console.log("  Press CTRL-C to stop\n");
});
