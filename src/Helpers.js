export const getCurrentView = function(doc) {
	if (doc.currentView) {
		return doc.currentView();
	} else if (doc.contentDrawView) {
		return doc.contentDrawView();
	}

	log('ERROR: Can not get currentView');
	return null;
};

export const getSelectionCoordinates = function(selection) {
	let coordinates = { x1: undefined, y2: undefined, x2: undefined, y2: undefined };

	for (let i = 0; i < selection.length; i++) {
		const absoluteRect = selection[i].absoluteRect();

		if (i == 0) {
			coordinates.x1 = absoluteRect.x();
			coordinates.y1 = absoluteRect.y();
			coordinates.x2 = absoluteRect.x() + absoluteRect.width();
			coordinates.y2 = absoluteRect.y() + absoluteRect.height();
		}

		if (coordinates.x1 > absoluteRect.x()) {
			coordinates.x1 = absoluteRect.x();
		}

		if (coordinates.y1 > absoluteRect.y()) {
			coordinates.y1 = absoluteRect.y();
		}

		if (coordinates.x2 < absoluteRect.x() + absoluteRect.width()) {
			coordinates.x2 = absoluteRect.x() + absoluteRect.width();
		}

		if (coordinates.y2 < absoluteRect.y() + absoluteRect.height()) {
			coordinates.y2 = absoluteRect.y() + absoluteRect.height();
		}
	}

	return coordinates;
};
