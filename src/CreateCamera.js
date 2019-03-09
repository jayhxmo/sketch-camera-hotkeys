import sketch from 'sketch';
import * as Helpers from './Helpers';

export const CreateCamera = function(context, index) {
	const camera = Helpers.getCurrentView(context.document).visibleContentRect();
	const midpointX = camera.size.width / 2 + camera.origin.x,
		midpointY = camera.size.height / 2 + camera.origin.y,
		zoomValue = context.document.zoomValue();

	const location = {
		x: midpointX,
		y: midpointY,
		zoom: zoomValue,
		width: camera.size.width / 2,
		pageID: context.document
			.documentData()
			.currentPage()
			.objectID()
	};

	sketch.Settings.setDocumentSettingForKey(context.document, `camera-location-${index}`, location);

	sketch.UI.message(`Created Camera Location ${index}`);
};
