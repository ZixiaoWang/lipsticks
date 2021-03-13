import { parseColors } from './tools/colors-parser.mjs';
import fs from 'fs-extra';

(async () => {
    const rawdata = await fs.readJSON('./rawdata.json');
    const data = rawdata.map((item) => {
        return {
            ...item,
            ...parseColors(item.value)
        }
    });

    await fs.ensureDir('./dist');
    await fs.writeFile(
        './dist/items.js',
        `var items = ` + JSON.stringify(data) + ';',
        { encoding: 'utf8' }
    )

    console.log(data)
})()