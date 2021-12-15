local _context = getContext()
local _painter = _context:getPainter()
local _style = _painter:getStyle()

exports('separator', function(w)
	_painter:beginDraw()

	local w = w or _painter:getWidgetWidth()

	_painter:setColor(_style.color.secondary)
	_painter:move(0, (_style.widget.height - _style.separator.height) / 2)
	_painter:drawRect(w, _style.separator.height)

	_painter:endDraw(w, _style.widget.height)
end)
