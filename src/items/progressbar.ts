import { context } from '../exports';
import { numberEquals } from '../core/utils';
import { Color } from '../exports';

export function progressBar(min: number, value: number, max: number, w: number) {
	const painter = context.getPainter();
	const style = painter.getStyle();

	context.beginItem(w, style.item.height);

	const h = style.progressBar.height;

	const properties = style.getProperties(context.tryGetItemId() ?? 'progress-bar');

	painter.setColor(properties.get<Color>('background-color'));
	painter.move(0, (style.item.height - h) / 2);
	painter.drawRect(w, h);

	if (!numberEquals(value, min)) {
		const pw = numberEquals(value, max) ? w : ((value - min) / (max - min)) * w;

		painter.setColor(properties.get<Color>('color'));
		painter.drawRect(pw, h);
	}

	context.endItem();
}
