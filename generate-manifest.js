const fs = require('fs');

function templateCreate(index) {
  let identifier = `sketch-camera-hotkeys.create-camera-location-${index}-identifier`;
  return {
    command: {
      name: `Create Camera Location ${index}`,
      identifier: identifier,
      script: `camera/create-camera-location-${index}.js`,
      shortcut: `ctrl shift ${index == 10 ? 0 : index}`
    },
    identifier: identifier
  };
}

function templateJump(index) {
  let identifier = `sketch-camera-hotkeys.jump-to-camera-location-${index}-identifier`;
  return {
    command: {
      name: `Jump to Camera Location ${index}`,
      identifier: identifier,
      script: `camera/jump-to-camera-location-${index}.js`,
      shortcut: `ctrl ${index == 10 ? 0 : index}`
    },
    identifier: identifier
  };
}

let cameraCommands = [],
  menuItems = [];

for (let i = 1; i <= 20; i++) {
  let commandBlock;
  if (i <= 10) commandBlock = templateCreate(i);
  else commandBlock = templateJump(i - 10);

  cameraCommands.push(commandBlock.command);
  menuItems.push(commandBlock.identifier);
}

cameraCommands.push({ script: 'Helpers.js' });

// console.log(cameraCommands);
// console.log(menuItems);

let manifestTemplate = {
  compatibleVersion: 3,
  bundleVersion: 1,
  icon: 'icon.png',
  commands: cameraCommands,
  menu: {
    title: 'sketch-camera-hotkeys',
    items: menuItems
  }
};

const manifest = JSON.stringify(manifestTemplate);

fs.writeFile('src/manifest.json', manifest, error => {
  if (error) {
    console.log(`Error occured while writing src/manifest.json: ${error}`);
  } else {
    console.log('👍 Successfully generated manifest.json in /src 🎉');
  }
});
