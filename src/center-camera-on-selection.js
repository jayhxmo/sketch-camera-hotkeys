import sketch from 'sketch';
import * as Helpers from './Helpers';

export default function(context) {
	const currentView = Helpers.getCurrentView(context.document);

	if (context.selection.length == 0) {
		sketch.UI.message(`No Layer Selected`);
	} else {
		const coordinates = Helpers.getSelectionCoordinates(context.selection),
			camera = currentView.visibleContentRect();
		const cameraDest = new sketch.Rectangle(
			(coordinates.x2 - coordinates.x1) / 2 + coordinates.x1 - camera.size.width / 2,
			(coordinates.y2 - coordinates.y1) / 2 + coordinates.y1 - camera.size.height / 2,
			camera.size.width,
			camera.size.height
		).asCGRect();

		sketch.UI.message(`Centered to Selection`);
		currentView.zoomToFitRect(cameraDest);
	}
}
