import assert from 'assert';
import InnovationMapTz from '../src/main.js';

function requireApiKey(){
	const innovate = new InnovationMapTz();
	assert.throws(innovate.getInnovators, Error );
}

requireApiKey();