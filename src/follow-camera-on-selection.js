import sketch from 'sketch';
import * as Helpers from './Helpers';

export default function(context) {
	const isFollowing = sketch.Settings.documentSettingForKey(context.document, 'follow-camera-on-selection');
	sketch.Settings.setDocumentSettingForKey(context.document, 'follow-camera-on-selection', !isFollowing);
	if (!isFollowing) {
		sketch.UI.message(`✅ Camera Now Following Selection`);
		centerSelectionZoomedOut(context.document, context.selection);
	} else {
		sketch.UI.message(`❌ Stop Camera Follow`);
	}
}

export function onSelectionChange(context) {
	if (sketch.Settings.documentSettingForKey(context.actionContext.document, 'follow-camera-on-selection')) {
		const currentView = Helpers.getCurrentView(context.actionContext.document);
		centerSelectionZoomedOut(context.actionContext.document, context.actionContext.newSelection);
	}
}

function centerSelectionZoomedOut(doc, selection) {
	const currentView = Helpers.getCurrentView(doc);

	if (selection.length == 0) {
		// sketch.UI.message(`No Target Selected`);
	} else {
		const coordinates = Helpers.getSelectionCoordinates(selection),
			camera = currentView.visibleContentRect();

		const width = coordinates.x2 - coordinates.x1,
			height = coordinates.y2 - coordinates.y1;

		const cameraDest = new sketch.Rectangle(
			coordinates.x1 - width * 0.1,
			coordinates.y1 - height * 0.1,
			width * 1.2,
			height * 1.2
		).asCGRect();

		currentView.zoomToFitRect(cameraDest);
	}
}
