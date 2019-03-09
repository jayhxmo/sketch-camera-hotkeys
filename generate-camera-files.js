const fs = require('fs');

function templateCamera(type, index) {
	return `import { ${type}Camera } from '../${type}Camera'; export default function(context) { ${type}Camera(context, ${index}); }`;
}

function writeFile(type, index) {
	let typePrefix;
	if (type == 'Create') typePrefix = 'create';
	else if (type == 'JumpTo') typePrefix = 'jump-to';

	const destination = `src/camera/${typePrefix}-camera-location-${index}.js`;

	fs.writeFile(destination, templateCamera(type, index), error => {
		if (error) {
			console.log(`Error occured while writing ${destination}: ${error}`);
		} else {
			console.log(`👍 Successfully generated ${destination} in /src 🎉`);
		}
	});
}

for (let i = 1; i <= 20; i++) {
	if (i <= 10) writeFile('Create', i);
	else writeFile('JumpTo', i - 10);
}
