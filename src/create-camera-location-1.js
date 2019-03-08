import sketch from 'sketch';

const getCurrentView = function(doc) {
	if (doc.currentView) {
		return doc.currentView();
	} else if (doc.contentDrawView) {
		return doc.contentDrawView();
	}
	log('ERROR: Can not get currentView');
	return null;
};

export default function(context) {
	const camera = getCurrentView(context.document).visibleContentRect();
	log(camera);
	log(sketch.Settings);

	const midpointX = camera.size.width / 2 + camera.origin.x,
		midpointY = camera.size.height / 2 + camera.origin.y,
		zoomValue = context.document.zoomValue();

	const location = { x: midpointX, y: midpointY, zoom: zoomValue };
	sketch.Settings.setDocumentSettingForKey(context.document, 'camera-location-1', location);

	// log(sketch.Settings.settingForKey('camera-location-1'));

	sketch.UI.message('Created Camera Location 1: ' + midpointX + ':' + midpointY);
}
