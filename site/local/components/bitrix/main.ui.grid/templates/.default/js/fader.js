;(function() {
	'use strict';

	BX.namespace('BX.Grid');


	/**
	 * BX.Grid.Fader
	 * @param {BX.Main.grid} parent
	 * @constructor
	 */
	BX.Grid.Fader = function(parent)
	{
		this.parent = null;
		this.table = null;
		this.container = null;
		this.init(parent);
	};

	BX.Grid.Fader.prototype = {
		init: function(parent)
		{
			this.parent = parent;
			this.table = this.parent.getTable();
			this.container = this.table.parentNode;

			if (this.parent.getParam('ALLOW_PIN_HEADER'))
			{
				this.fixedTable = this.parent.getPinHeader().getFixedTable();
			}

			this.debounceScrollHandler = BX.debounce(this._onWindowScroll, 400, this);

			BX.bind(window, 'resize', BX.proxy(this.toggle, this));
			BX.bind(window, 'scroll', this.debounceScrollHandler);
			BX.bind(this.container, 'scroll', BX.proxy(this.toggle, this));
			BX.addCustomEvent(window, 'Grid::updated', BX.proxy(this.toggle, this));
			BX.addCustomEvent(window, 'Grid::columnResize', BX.proxy(this.toggle, this));
			BX.bind(this.getEarLeft(), 'mouseenter', BX.proxy(this._onMouseoverLeft, this));
			BX.bind(this.getEarRight(), 'mouseenter', BX.proxy(this._onMouseoverRight, this));
			BX.bind(this.getEarLeft(), 'mouseleave', BX.proxy(this.stopScroll, this));
			BX.bind(this.getEarRight(), 'mouseleave', BX.proxy(this.stopScroll, this));

			this.toggle();
			this.adjustEarOffset(true);
		},

		destroy: function()
		{
			BX.unbind(window, 'resize', BX.proxy(this.toggle, this));
			BX.unbind(window, 'scroll', this.debounceScrollHandler);
			BX.unbind(this.container, 'scroll', BX.proxy(this.toggle, this));
			BX.removeCustomEvent(window, 'Grid::updated', BX.proxy(this.toggle, this));
			BX.removeCustomEvent(window, 'Grid::columnResize', BX.proxy(this.toggle, this));
			BX.unbind(this.getEarLeft(), 'mouseenter', BX.proxy(this._onMouseoverLeft, this));
			BX.unbind(this.getEarRight(), 'mouseenter', BX.proxy(this._onMouseoverRight, this));
			BX.unbind(this.getEarLeft(), 'mouseleave', BX.proxy(this.stopScroll, this));
			BX.unbind(this.getEarRight(), 'mouseleave', BX.proxy(this.stopScroll, this));
			this.hideLeftEar();
			this.hideRightEar();
			this.stopScroll();
		},

		_onMouseoverLeft: function()
		{
			this.startScrollByDirection('left');
		},

		_onMouseoverRight: function()
		{
			this.startScrollByDirection('right');
		},

		stopScroll: function()
		{
			clearTimeout(this.scrollTimer);
			clearInterval(this.scrollInterval);
		},

		startScrollByDirection: function(direction)
		{
			var container = this.container;
			var offset = container.scrollLeft;
			var self = this;
			var stepLength = 8;
			var stepTime = ((1000 / 60) / 2);

			this.scrollTimer = setTimeout(function() {
				self.scrollInterval = setInterval(function() {
					container.scrollLeft = direction == 'right' ? (offset += stepLength) : (offset -= stepLength);
				}, stepTime);
			}, 100);
		},

		getEarLeft: function()
		{
			if (!this.earLeft)
			{
				this.earLeft = BX.Grid.Utils.getByClass(this.parent.getContainer(), this.parent.settings.get('classEarLeft'), true);
			}

			return this.earLeft;
		},

		getEarRight: function()
		{
			if (!this.earRight)
			{
				this.earRight = BX.Grid.Utils.getByClass(this.parent.getContainer(), this.parent.settings.get('classEarRight'), true);
			}

			return this.earRight;
		},

		adjustEarOffset: function(prepare)
		{
			if (prepare)
			{
				this.windowHeight = BX.height(window);
				this.tbodyPos = BX.pos(this.table.tBodies[0]);
				this.headerPos = BX.pos(this.table.tHead);
			}

			var scrollY = window.scrollY;

			if (this.parent.isIE())
			{
				scrollY = document.documentElement.scrollTop;
			}

			var bottomPos = (scrollY + this.windowHeight) - this.tbodyPos.top;
			var posTop = scrollY - this.tbodyPos.top;

			if (bottomPos > (this.tbodyPos.bottom - this.tbodyPos.top))
			{
				bottomPos = this.tbodyPos.bottom - this.tbodyPos.top;
			}

			if (posTop < this.headerPos.height)
			{
				posTop = this.headerPos.height;
			}
			else
			{
				bottomPos -= posTop;
				bottomPos += this.headerPos.height;
			}

			BX.Grid.Utils.requestAnimationFrame(BX.proxy(function() {
				if (posTop !== this.lastPosTop)
				{
					var translate = 'translate3d(0px, ' + posTop + 'px, 0)';
					this.getEarLeft().style.transform = translate;
					this.getEarRight().style.transform = translate;
				}

				if (bottomPos !== this.lastBottomPos)
				{
					this.getEarLeft().style.height = bottomPos + 'px';
					this.getEarRight().style.height = bottomPos + 'px';
				}

				this.lastPosTop = posTop;
				this.lastBottomPos = bottomPos;
			}, this));
		},

		_onWindowScroll: function()
		{
			this.adjustEarOffset();
		},

		hasScroll: function()
		{
			return this.table.offsetWidth > this.container.clientWidth;
		},

		hasScrollLeft: function()
		{
			return this.container.scrollLeft > 0;
		},

		hasScrollRight: function()
		{
			return this.table.offsetWidth > (this.container.scrollLeft + this.container.clientWidth);
		},

		showLeftEar: function()
		{
			BX.addClass(this.container.parentNode, this.parent.settings.get('classFadeContainerLeft'));
			BX.addClass(this.getEarLeft(), this.parent.settings.get('classShow'));
		},

		hideLeftEar: function()
		{
			BX.removeClass(this.container.parentNode, this.parent.settings.get('classFadeContainerLeft'));
			BX.removeClass(this.getEarLeft(), this.parent.settings.get('classShow'));
		},

		showRightEar: function()
		{
			BX.addClass(this.container.parentNode, this.parent.settings.get('classFadeContainerRight'));
			BX.addClass(this.getEarRight(), this.parent.settings.get('classShow'));
		},

		hideRightEar: function()
		{
			BX.removeClass(this.container.parentNode, this.parent.settings.get('classFadeContainerRight'));
			BX.removeClass(this.getEarRight(), this.parent.settings.get('classShow'));
		},

		adjustFixedTablePosition: function()
		{
			this.fixedTable.style.transform = 'translate3d(-'+this.container.scrollLeft+'px, 0px, 0)';
		},

		toggle: function()
		{
			this.adjustEarOffset(true);
			this.fixedTable && this.adjustFixedTablePosition();

			if (this.hasScroll())
			{
				this.hasScrollLeft() ? this.showLeftEar() : this.hideLeftEar();
				this.hasScrollRight() ? this.showRightEar() : this.hideRightEar();
			}
			else
			{
				this.hideLeftEar();
				this.hideRightEar();
			}
		}
	};
})();