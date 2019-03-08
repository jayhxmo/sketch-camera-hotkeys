import sketch from 'sketch';

export default function(context) {
	sketch.UI.message(sketch.Settings.documentSettingForKey(context.document, 'camera-location-1').x);
}
