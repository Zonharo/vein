import { ContextId, PositionObject, TextEntryComponents } from './common/types';
import { Context } from './core/context';

import * as Button from './widgets/button';
import * as Checkbox from './widgets/checkbox';
import * as Dummy from './widgets/dummy';
import * as Heading from './widgets/heading';
import * as Label from './widgets/label';
import * as ProgressBar from './widgets/progressbar';
import * as Separator from './widgets/separator';
import * as Slider from './widgets/slider';
import * as Spacing from './widgets/spacing';
import * as Sprite from './widgets/sprite';
import * as SpriteButton from './widgets/spritebutton';
import * as TextArea from './widgets/textarea';
import * as TextEdit from './widgets/textedit';

let isDebugEnabled: boolean = false;
let currentContext: Context | undefined = undefined;
const globalContext: Context = new Context();

export function getCurrentContext(): Context {
	return currentContext ?? globalContext;
}

export function getIsDebugEnabled(): boolean {
	return isDebugEnabled;
}

globalThis.exports('setDebugEnabled', function (enabled: boolean): void {
	isDebugEnabled = enabled;
});

globalThis.exports('isDebugEnabled', function (): boolean {
	return getIsDebugEnabled();
});

globalThis.exports('setNextWindowNoDrag', function (isNoDrag: boolean): void {
	getCurrentContext().setWindowNoDrag(isNoDrag);
});

globalThis.exports('setNextWindowNoBackground', function (isNoBackground: boolean): void {
	getCurrentContext().setWindowNoBackground(isNoBackground);
});

globalThis.exports('beginWindow', function (x?: number, y?: number): void {
	getCurrentContext().beginWindow(x, y);
});

globalThis.exports('endWindow', function (): PositionObject {
	return getCurrentContext().endWindow();
});

globalThis.exports('isWidgetHovered', function (): boolean {
	return getCurrentContext().isWidgetHovered();
});

globalThis.exports('isWidgetClicked', function (): boolean {
	return getCurrentContext().isWidgetClicked();
});

globalThis.exports('setWindowSkipNextDrawing', function (): void {
	getCurrentContext().setWindowSkipNextDrawing();
});

globalThis.exports('beginRow', function (): void {
	getCurrentContext().getPainter().beginRow();
});

globalThis.exports('endRow', function (): void {
	getCurrentContext().getPainter().endRow();
});

globalThis.exports('setNextTextEntry', function (entry: string, ...components: TextEntryComponents): void {
	getCurrentContext().setNextTextEntry(entry, ...components);
});

globalThis.exports('pushTextEntry', function (entry: string, ...components: TextEntryComponents): void {
	getCurrentContext().pushTextEntry(entry, ...components);
});

globalThis.exports('popTextEntry', function (): void {
	getCurrentContext().popTextEntry();
});

globalThis.exports('setNextWidgetWidth', function (w: number): void {
	getCurrentContext().setNextWidgetWidth(w);
});

globalThis.exports('pushWidgetWidth', function (w: number): void {
	getCurrentContext().pushWidgetWidth(w);
});

globalThis.exports('popWidgetWidth', function (): void {
	getCurrentContext().popWidgetWidth();
});

globalThis.exports('setDarkColorTheme', function (): void {
	getCurrentContext().getPainter().getStyle().setDarkColorTheme();
});

globalThis.exports('setLightColorTheme', function (): void {
	getCurrentContext().getPainter().getStyle().setLightColorTheme();
});

Button.declareExport();
Checkbox.declareExport();
Dummy.declareExport();
Heading.declareExport();
Label.declareExport();
ProgressBar.declareExport();
Separator.declareExport();
Slider.declareExport();
Spacing.declareExport();
Sprite.declareExport();
SpriteButton.declareExport();
TextArea.declareExport();
TextEdit.declareExport();
