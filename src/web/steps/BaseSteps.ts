import {Given, When, Then, expect, Before,After} from 'src/fixtures/Web-Fixtures'
import fs from 'fs';
import path from 'path';


After(async () => {
    const featuresGenPath = path.resolve(process.cwd(), '.features-gen');
    console.log(featuresGenPath)
    if (fs.existsSync(featuresGenPath)) {
        fs.rmSync(featuresGenPath, { recursive: true, force: true });
        console.log('Deleted features-gen directory');
    }
    else {

        console.log('No features-gen directory found');
    }
});


