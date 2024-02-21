import React from 'react'
import {readFile, writeFile} from '../../helpers/file-helpers';

const DATABASE_PATH = '/src/database.json';

function HitCounter() {
    let {hits} = JSON.parse(readFile(DATABASE_PATH));
    hits+=1;

    writeFile(DATABASE_PATH, JSON.stringify({hits}));

    return(
        <div>
            <h1>Hit Counter</h1>
            <p>Number of hits: {hits}</p>
        </div>
    )
}

export default HitCounter;