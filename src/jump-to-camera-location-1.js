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
	const camera = getCurrentView(context.document).visibleContentRect(),
		cameraSave = sketch.Settings.documentSettingForKey(context.document, 'camera-location-1'),
		cameraZoom = context.document.zoomValue();

	const newWidth = (camera.size.width / cameraSave.zoom) * cameraZoom,
		newHeight = (camera.size.height / cameraSave.zoom) * cameraZoom;

	const cameraDest = new sketch.Rectangle(
		cameraSave.x - newWidth / 2,
		cameraSave.y - newHeight / 2,
		newWidth,
		newHeight
	).asCGRect();

	sketch.UI.message('Jumped to Camera Location 1');
	// sketch.UI.message(`${cameraSave.x - camera.size.width / 2} : ${cameraSave.y - camera.size.height / 2}`);

	getCurrentView(context.document).zoomToFitRect(cameraDest);
}
