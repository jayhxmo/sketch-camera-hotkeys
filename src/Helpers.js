export const getCurrentView = function(doc) {
	if (doc.currentView) {
		return doc.currentView();
	} else if (doc.contentDrawView) {
		return doc.contentDrawView();
	}

	log('ERROR: Can not get currentView');
	return null;
};
