import sketch from 'sketch';
import * as Helpers from './Helpers';

export const JumpToCamera = function(context, index) {
	const currentView = Helpers.getCurrentView(context.document);

	// Retrieve saved data
	const camera = currentView.visibleContentRect(),
		cameraSave = sketch.Settings.documentSettingForKey(context.document, `camera-location-${index}`),
		cameraZoom = context.document.zoomValue();

	if (cameraSave == null) {
		sketch.UI.message(`Camera Location ${index} Has Not Been Created`);
	} else {
		// Set page before camera position
		const pages = context.document.pages();
		for (let i = 0; i < pages.length; i++) {
			if (cameraSave.pageID == pages[i].objectID()) {
				// log(`Page Index ${i} with ID ${pages[i].objectID()}`);
				context.document.setCurrentPage(pages[i]);
				break;
			}
		}

		// Calculate to make sure responsiveness and zoom settings
		const newWidth = (camera.size.width / cameraSave.zoom) * cameraZoom,
			newHeight = (camera.size.height / cameraSave.zoom) * cameraZoom;

		// Set object with camera position
		const cameraDest = new sketch.Rectangle(
			cameraSave.x - newWidth / 2,
			cameraSave.y - newHeight / 2,
			newWidth,
			newHeight
		).asCGRect();

		sketch.UI.message(`Jumped to Camera Location ${index}`);
		// sketch.UI.message(`${cameraSave.x - camera.size.width / 2} : ${cameraSave.y - camera.size.height / 2}`);
		currentView.zoomToFitRect(cameraDest);
	}
};
