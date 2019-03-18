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

cameraCommands.push({ script: 'Helpers.js' });

cameraCommands.push({
  name: 'Center Camera on Selection',
  identifier: 'sketch-camera-hotkeys.center-camera-on-selection-identifier',
  script: `center-camera-on-selection.js`,
  shortcut: `ctrl d`
});
menuItems.push('sketch-camera-hotkeys.center-camera-on-selection-identifier');

cameraCommands.push({
  name: 'Follow Camera on Selection',
  identifier: 'sketch-camera-hotkeys.follow-camera-on-selection-identifier',
  script: `follow-camera-on-selection.js`,
  shortcut: `ctrl shift d`,
  handlers: {
    run: 'default',
    actions: {
      'SelectionChanged.finish': 'onSelectionChange'
    }
  }
});
menuItems.push('sketch-camera-hotkeys.follow-camera-on-selection-identifier');
menuItems.push('-');

for (let i = 1; i <= 20; i++) {
  let commandBlock;
  if (i <= 10) commandBlock = templateCreate(i);
  else commandBlock = templateJump(i - 10);

  cameraCommands.push(commandBlock.command);
  menuItems.push(commandBlock.identifier);

  if (i == 10) menuItems.push('-');
}

// console.log(cameraCommands);
// console.log(menuItems);

let manifestTemplate = {
  name: 'Camera Hotkeys',
  description: 'Navigate around and present more efficiently',
  author: 'Jay Mo',
  authorEmail: 'jay@jaymo.io',
  homepage: 'https://github.com/jayhxmo/sketch-camera-hotkeys',
  version: '1.0.1',
  identifier: 'io.jaymo.sketch-camera-hotkeys',
  compatibleVersion: 3,
  bundleVersion: 1,
  icon: 'icon.png',
  commands: cameraCommands,
  menu: {
    title: 'Camera Hotkeys',
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
