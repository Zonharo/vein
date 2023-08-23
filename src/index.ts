import { Context } from './core/context';

import * as Button from './items/button';
import * as Checkbox from './items/checkbox';
import * as Dummy from './items/dummy';
import * as Heading from './items/heading';
import * as Label from './items/label';
import * as ProgressBar from './items/progressbar';
import * as Selectable from './items/selectable';
import * as Separator from './items/separator';
import * as Slider from './items/slider';
import * as Spacing from './items/spacing';
import * as Sprite from './items/sprite';
import * as SpriteButton from './items/spritebutton';
import * as TextArea from './items/textarea';
import * as TextEdit from './items/textedit';

let isDebugEnabled: boolean = false;

let currentContext: Context | undefined = undefined;
const globalContext: Context = new Context();

export function getCurrentContext(): Context {
	return currentContext ?? globalContext;
}

export function getIsDebugEnabled(): boolean {
	return isDebugEnabled;
}

globalThis.exports('setDebugEnabled', function (enabled: boolean) {
	isDebugEnabled = enabled;
});

globalThis.exports('isDebugEnabled', function (): boolean {
	return getIsDebugEnabled();
});

globalThis.exports('setNextWindowNoDrag', function (isNoDrag: boolean) {
	getCurrentContext().setWindowNoDrag(isNoDrag);
});

globalThis.exports('setNextWindowNoBackground', function (isNoBackground: boolean) {
	getCurrentContext().setWindowNoBackground(isNoBackground);
});

globalThis.exports('setNextWindowId', function (id: string) {
	getCurrentContext().setWindowId(id);
});

globalThis.exports('setNextWindowSpacing', function (x: number, y: number) {
	getCurrentContext().setWindowSpacing(x, y);
});

globalThis.exports('beginWindow', function (x?: number, y?: number) {
	getCurrentContext().beginWindow(x, y);
});

globalThis.exports('endWindow', function (): any {
	const windowPos = getCurrentContext().endWindow();
	return { x: windowPos.x, y: windowPos.y };
});

globalThis.exports('isItemHovered', function (): boolean {
	return getCurrentContext().isItemHovered();
});

globalThis.exports('isItemClicked', function (): boolean {
	return getCurrentContext().isItemClicked();
});

globalThis.exports('setWindowSkipNextDrawing', function () {
	getCurrentContext().setWindowSkipNextDrawing();
});

globalThis.exports('beginRow', function () {
	getCurrentContext().getPainter().beginRow();
});

globalThis.exports('endRow', function () {
	getCurrentContext().getPainter().endRow();
});

globalThis.exports('setNextTextEntry', function (entry: string, ...components: any) {
	getCurrentContext().setNextTextEntry(entry, ...components);
});

globalThis.exports('pushTextEntry', function (entry: string, ...components: any) {
	getCurrentContext().pushTextEntry(entry, ...components);
});

globalThis.exports('popTextEntry', function () {
	getCurrentContext().popTextEntry();
});

globalThis.exports('setNextItemWidth', function (w: number) {
	getCurrentContext().setNextItemWidth(w);
});

globalThis.exports('pushItemWidth', function (w: number) {
	getCurrentContext().pushItemWidth(w);
});

globalThis.exports('popItemWidth', function () {
	getCurrentContext().popItemWidth();
});

globalThis.exports('setStyleSheet', function (styleSheet: string) {
	getCurrentContext().getPainter().getStyle().setSheet(styleSheet);
});

globalThis.exports('useDefaultStyle', function () {
	getCurrentContext().getPainter().getStyle().useDefault();
});

globalThis.exports('setNextItemId', function (id: string) {
	getCurrentContext().setNextItemId(id);
});

globalThis.exports('pushItemId', function (id: string) {
	getCurrentContext().pushItemId(id);
});

globalThis.exports('popItemId', function () {
	getCurrentContext().popItemId();
});

Button.declareExport();
Checkbox.declareExport();
Dummy.declareExport();
Heading.declareExport();
Label.declareExport();
ProgressBar.declareExport();
Selectable.declareExport();
Separator.declareExport();
Slider.declareExport();
Spacing.declareExport();
Sprite.declareExport();
SpriteButton.declareExport();
TextArea.declareExport();
TextEdit.declareExport();