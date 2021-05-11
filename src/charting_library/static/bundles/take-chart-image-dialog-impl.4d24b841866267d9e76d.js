webpackJsonp([2], {
  108: function (e, t, n) {
    'use strict';
    function o(e) {
      return (
        (t = (function (t) {
          function n(e, n) {
            var o = t.call(this, e, n) || this;
            return (
              (o._getWrappedComponent = function (e) {
                o._instance = e;
              }),
              o
            );
          }
          return (
            r.__extends(n, t),
            (n.prototype.componentDidMount = function () {
              this._instance.componentWillEnter &&
                this.context.lifecycleProvider.registerWillEnterCb(
                  this._instance.componentWillEnter.bind(this._instance),
                ),
                this._instance.componentDidEnter &&
                  this.context.lifecycleProvider.registerDidEnterCb(
                    this._instance.componentDidEnter.bind(this._instance),
                  ),
                this._instance.componentWillLeave &&
                  this.context.lifecycleProvider.registerWillLeaveCb(
                    this._instance.componentWillLeave.bind(this._instance),
                  ),
                this._instance.componentDidLeave &&
                  this.context.lifecycleProvider.registerDidLeaveCb(
                    this._instance.componentDidLeave.bind(this._instance),
                  );
            }),
            (n.prototype.render = function () {
              return i.createElement(
                e,
                r.__assign({}, this.props, { ref: this._getWrappedComponent }),
                this.props.children,
              );
            }),
            n
          );
        })(i.PureComponent)),
        (t.displayName = 'Lifecycle Consumer'),
        (t.contextTypes = { lifecycleProvider: a.object }),
        t
      );
      var t;
    }
    var r, i, a, s;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (r = n(5)),
      (i = n(2)),
      (a = n(86)),
      (s = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return r.__extends(t, e), t;
      })(i.PureComponent)),
      (t.LifecycleConsumer = s),
      (t.makeTransitionGroupLifecycleConsumer = o);
  },
  153: function (e, t) {
    e.exports = { body: 'body-1yAIljnK-' };
  },
  154: function (e, t) {
    e.exports = { footer: 'footer-AwxgkLHY-' };
  },
  155: function (e, t) {
    e.exports = { header: 'header-2Hz0Lxou-', close: 'close-3H_MMLbw-' };
  },
  156: function (e, t) {
    e.exports = { message: 'message-1CYdTy_T-', error: 'error-1u_m-Ehm-' };
  },
  157: function (e, t) {
    e.exports = {
      dialog: 'dialog-13-QRYuG-',
      rounded: 'rounded-1GLivxii-',
      shadowed: 'shadowed-30OTTAts-',
    };
  },
  183: function (e, t, n) {
    'use strict';
    function o(e) {
      return r.createElement(
        'div',
        { className: i.body, ref: e.reference },
        e.children,
      );
    }
    var r, i;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (r = n(2)),
      (i = n(153)),
      (t.Body = o);
  },
  184: function (e, t, n) {
    'use strict';
    var o, r, i, a;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (o = n(186)),
      (t.Header = o.Header),
      (r = n(185)),
      (t.Footer = r.Footer),
      (i = n(183)),
      (t.Body = i.Body),
      (a = n(187)),
      (t.Message = a.Message);
  },
  185: function (e, t, n) {
    'use strict';
    function o(e) {
      return r.createElement(
        'div',
        { className: i.footer, ref: e.reference },
        e.children,
      );
    }
    var r, i;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (r = n(2)),
      (i = n(154)),
      (t.Footer = o);
  },
  186: function (e, t, n) {
    'use strict';
    function o(e) {
      return r.createElement(
        'div',
        { className: i.header, 'data-dragg-area': !0, ref: e.reference },
        e.children,
        r.createElement(s.Icon, {
          className: i.close,
          icon: a,
          onClick: e.onClose,
        }),
      );
    }
    var r, i, a, s;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (r = n(2)),
      (i = n(155)),
      (a = n(109)),
      (s = n(76)),
      (t.Header = o);
  },
  187: function (e, t, n) {
    'use strict';
    function o(e) {
      var t, n;
      return (
        e.text
          ? (t = r.createElement('span', null, e.text))
          : e.html &&
            (t = r.createElement('span', {
              dangerouslySetInnerHTML: { __html: e.html },
            })),
        (n = i.message),
        e.isError && (n += ' ' + i.error),
        r.createElement(
          a.CSSTransitionGroup,
          {
            transitionName: 'message',
            transitionEnterTimeout: c.dur,
            transitionLeaveTimeout: c.dur,
          },
          t
            ? r.createElement(
                'div',
                { className: n, key: '0' },
                r.createElement(
                  s.OutsideEvent,
                  { mouseDown: !0, touchStart: !0, handler: e.onClickOutside },
                  t,
                ),
              )
            : null,
        )
      );
    }
    var r, i, a, s, c;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (r = n(2)),
      (i = n(156)),
      (a = n(45)),
      (s = n(107)),
      (c = n(28)),
      (t.Message = o);
  },
  188: function (e, t, n) {
    'use strict';
    function o(e) {
      var t,
        n = e.rounded,
        o = void 0 === n || n,
        s = e.shadowed,
        c = void 0 === s || s,
        l = e.className,
        u = void 0 === l ? '' : l,
        p = a(
          i.dialog,
          ((t = {}),
          (t[u] = !!u),
          (t[i.rounded] = o),
          (t[i.shadowed] = c),
          (t[i.animated] = i.animated),
          t),
        ),
        d = {
          bottom: e.bottom,
          left: e.left,
          maxWidth: e.width,
          right: e.right,
          top: e.top,
          zIndex: e.zIndex,
        };
      return r.createElement(
        'div',
        {
          className: p,
          ref: e.reference,
          style: d,
          onMouseDown: e.onMouseDown,
          onMouseUp: e.onMouseUp,
          onClick: e.onClick,
        },
        e.children,
      );
    }
    var r, i, a;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (r = n(2)),
      (i = n(157)),
      (a = n(26)),
      (t.Dialog = o);
  },
  189: function (e, t, n) {
    'use strict';
    function o() {
      (p = document.createElement('div')), document.body.appendChild(p), i();
    }
    function r(e, t) {
      d.getItems().forEach(function (n) {
        n !== t && f.emitEvent(e + ':' + n);
      });
    }
    function i(e) {
      s.render(
        a.createElement(
          c.TransitionGroup,
          { component: 'div' },
          Array.from(h.values()),
        ),
        p,
        e,
      );
    }
    var a, s, c, l, u, p, d, m, f, h;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (a = n(2)),
      (s = n(55)),
      (c = n(45)),
      (l = n(110)),
      (u = (function () {
        function e() {
          this._storage = [];
        }
        return (
          (e.prototype.add = function (e) {
            this._storage.push(e);
          }),
          (e.prototype.remove = function (e) {
            this._storage = this._storage.filter(function (t) {
              return e !== t;
            });
          }),
          (e.prototype.getIndex = function (e) {
            return this._storage.findIndex(function (t) {
              return e === t;
            });
          }),
          (e.prototype.toTop = function (e) {
            this.remove(e), this.add(e);
          }),
          (e.prototype.has = function (e) {
            return this._storage.includes(e);
          }),
          (e.prototype.getItems = function () {
            return this._storage;
          }),
          e
        );
      })()),
      (t.EVENTS = { ZindexUpdate: 'ZindexUpdate' }),
      (d = new u()),
      (m = 150),
      (f = new l()),
      (h = new Map()),
      (function (e) {
        function n(e) {
          d.has(e) || (d.add(e), r(t.EVENTS.ZindexUpdate, e));
        }
        function o(e) {
          d.remove(e), h.delete(e);
        }
        function a(e) {
          return d.getIndex(e) + m;
        }
        function s(e, t, n) {
          h.set(e, t), i(n);
        }
        function c(e, t) {
          o(e), i(t);
        }
        function l() {
          return f;
        }
        (e.registerWindow = n),
          (e.unregisterWindow = o),
          (e.getZindex = a),
          (e.renderWindow = s),
          (e.removeWindow = c),
          (e.getStream = l);
      })(t.OverlapManager || (t.OverlapManager = {})),
      o();
  },
  190: function (e, t, n) {
    'use strict';
    function o(e) {
      return (
        (t = (function (t) {
          function n() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            i.__extends(n, t),
            (n.prototype.componentWillEnter = function (e) {
              this.props.beforeOpen ? this.props.beforeOpen(e) : e();
            }),
            (n.prototype.componentDidEnter = function () {
              this.props.afterOpen && this.props.afterOpen();
            }),
            (n.prototype.componentWillLeave = function (e) {
              this.props.beforeClose ? this.props.beforeClose(e) : e();
            }),
            (n.prototype.componentDidLeave = function () {
              this.props.afterClose && this.props.afterClose();
            }),
            (n.prototype.render = function () {
              return a.createElement(e, i.__assign({}, this.props));
            }),
            n
          );
        })(a.PureComponent)),
        (t.displayName =
          'OverlapLifecycle(' + (e.displayName || 'Component') + ')'),
        t
      );
      var t;
    }
    function r(e) {
      var t,
        n = l.makeTransitionGroupLifecycleProvider(
          u.makeTransitionGroupLifecycleConsumer(o(e)),
        );
      return (
        (t = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._onZIndexUpdate = function () {
                n.props.isOpened &&
                  ('parent' === n.props.root
                    ? n.forceUpdate()
                    : n._renderWindow(n.props));
              }),
              (n._uuid = p.guid()),
              (n._zIndexUpdateEvent = c.EVENTS.ZindexUpdate + ':' + n._uuid),
              n
            );
          }
          return (
            i.__extends(t, e),
            (t.prototype.componentDidMount = function () {
              this._subscribe();
            }),
            (t.prototype.componentWillUnmount = function () {
              this._unsubscribe(), c.OverlapManager.removeWindow(this._uuid);
            }),
            (t.prototype.componentWillReceiveProps = function (e) {
              'parent' !== this.props.root && this._renderWindow(e);
            }),
            (t.prototype.render = function () {
              return 'parent' === this.props.root
                ? a.createElement(
                    s.TransitionGroup,
                    { component: 'div' },
                    this._createContent(this.props),
                  )
                : null;
            }),
            (t.prototype._renderWindow = function (e) {
              c.OverlapManager.renderWindow(this._uuid, this._createContent(e));
            }),
            (t.prototype._createContent = function (e) {
              return e.isOpened
                ? (c.OverlapManager.registerWindow(this._uuid),
                  a.createElement(
                    n,
                    i.__assign({}, e, {
                      key: this._uuid,
                      zIndex: c.OverlapManager.getZindex(this._uuid),
                    }),
                    e.children,
                  ))
                : (c.OverlapManager.unregisterWindow(this._uuid), null);
            }),
            (t.prototype._subscribe = function () {
              c.OverlapManager.getStream().on(
                this._zIndexUpdateEvent,
                this._onZIndexUpdate,
              );
            }),
            (t.prototype._unsubscribe = function () {
              c.OverlapManager.getStream().off(
                this._zIndexUpdateEvent,
                this._onZIndexUpdate,
              );
            }),
            t
          );
        })(a.PureComponent)),
        (t.displayName = 'Overlapable(' + (e.displayName || 'Component') + ')'),
        t
      );
    }
    var i, a, s, c, l, u, p;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (i = n(5)),
      (a = n(2)),
      (s = n(45)),
      (c = n(189)),
      (l = n(192)),
      (u = n(108)),
      (p = n(64)),
      (t.makeOverlapable = r);
  },
  192: function (e, t, n) {
    'use strict';
    function o(e) {
      return (
        (t = (function (t) {
          function n(e) {
            var n = t.call(this, e) || this;
            return (
              (n._registerWillEnterCb = function (e) {
                n._willEnter.push(e);
              }),
              (n._registerDidEnterCb = function (e) {
                n._didEnter.push(e);
              }),
              (n._registerWillLeaveCb = function (e) {
                n._willLeave.push(e);
              }),
              (n._registerDidLeaveCb = function (e) {
                n._didLeave.push(e);
              }),
              (n._willEnter = []),
              (n._didEnter = []),
              (n._willLeave = []),
              (n._didLeave = []),
              n
            );
          }
          return (
            r.__extends(n, t),
            (n.prototype.getChildContext = function () {
              return {
                lifecycleProvider: {
                  registerWillEnterCb: this._registerWillEnterCb,
                  registerDidEnterCb: this._registerDidEnterCb,
                  registerWillLeaveCb: this._registerWillLeaveCb,
                  registerDidLeaveCb: this._registerDidLeaveCb,
                },
              };
            }),
            (n.prototype.componentWillEnter = function (e) {
              var t = this._willEnter.map(function (e) {
                return new Promise(function (t) {
                  e(t);
                });
              });
              Promise.all(t).then(e);
            }),
            (n.prototype.componentDidEnter = function () {
              this._didEnter.forEach(function (e) {
                e();
              });
            }),
            (n.prototype.componentWillLeave = function (e) {
              var t = this._willLeave.map(function (e) {
                return new Promise(function (t) {
                  e(t);
                });
              });
              Promise.all(t).then(e);
            }),
            (n.prototype.componentDidLeave = function () {
              this._didLeave.forEach(function (e) {
                e();
              });
            }),
            (n.prototype.render = function () {
              return i.createElement(
                e,
                r.__assign({}, this.props),
                this.props.children,
              );
            }),
            n
          );
        })(i.PureComponent)),
        (t.displayName = 'Lifecycle Provider'),
        (t.childContextTypes = { lifecycleProvider: a.object }),
        t
      );
      var t;
    }
    var r, i, a;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (r = n(5)),
      (i = n(2)),
      (a = n(86)),
      (t.makeTransitionGroupLifecycleProvider = o);
  },
  201: function (e, t) {
    e.exports = {
      inputWrapper: 'inputWrapper-23iUt2Ae-',
      textInput: 'textInput-3hvomQp9-',
      error: 'error-2ydrzcvg-',
      success: 'success-2y4Cbw_L-',
      xsmall: 'xsmall-2Dz_yiDV-',
      small: 'small-3g0mV7FW-',
      large: 'large-CZ_w52Xn-',
      iconed: 'iconed-2X3rffL9-',
      inputIcon: 'inputIcon-nJhQLYdg-',
      clearable: 'clearable-3HVD9v3B-',
      clearIcon: 'clearIcon-UZyPhrkf-',
      grouped: 'grouped-2xS7_jZ2-',
    };
  },
  233: function (e, t, n) {
    'use strict';
    function o(e, t, n) {
      function o(e) {
        p ||
          ((p = document.createElement('div')), document.body.appendChild(p)),
          l.render(c.createElement(u.TakeSnapshotModal, e), p);
      }
      function r() {
        o({ isOpened: !1 });
      }
      void 0 === t && (t = {}), a.trackEvent('GUI', 'Get image button');
      var p;
      o({ isOpened: !1 }),
        i.takeSnapshot(
          e,
          function (i) {
            var a, c;
            n && n(i),
              (a = ''),
              (a = s.enabled('charting_library_base')
                ? (t.snapshotUrl ? '' : 'https://www.tradingview.com/x/') + i
                : window.location.protocol +
                  '//' +
                  window.location.host +
                  '/x/' +
                  i +
                  '/'),
              (c = e.activeChartWidget.value().symbolProperty().value()),
              o({ isOpened: !0, onClose: r, imageUrl: a, symbol: c });
          },
          function () {
            o({
              isOpened: !0,
              onClose: r,
              error: window.t('URL cannot be received'),
            });
          },
          { onWidget: e.onWidget, snapshotUrl: t.snapshotUrl },
        ),
        o({ isOpened: !0, onClose: r });
    }
    function r(e, t, n) {
      i.takeSnapshot(
        e,
        function (e) {
          n && n(e);
        },
        function () {
          console.warn(window.t('Error while trying to create snapshot.'));
        },
        { snapshotUrl: t.snapshotUrl },
      );
    }
    var i, a, s, c, l, u;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      n(23),
      (i = n(434)),
      (a = n(48)),
      (s = n(9)),
      (c = n(2)),
      (l = n(55)),
      (u = n(1107)),
      (t.getImageOfChart = o),
      (t.getImageOfChartSilently = r);
  },
  255: function (e, t) {
    e.exports = {
      loader: 'loader-1aihbDEL-',
      warning: 'warning-1sksz0Rq-',
      danger: 'danger-1jVFBwRj-',
      xsmall: 'xsmall-1XIYvP4K-',
      disabled: 'disabled-2jaDvv_v-',
      button: 'button-2jCWN5M1-',
      hiddenText: 'hiddenText-13D-S4nC-',
      secondary: 'secondary-2H-Jwmir-',
      small: 'small-2fwP8rrU-',
      base: 'base-2PiGQ3aT-',
      active: 'active-3Eem2fUt-',
      ghost: 'ghost-2xkVjo4o-',
      success: 'success-13aJxw0L-',
      large: 'large-1a-qmr37-',
      growable: 'growable-S0qQuxEB-',
      link: 'link-1v4pOPj2-',
      grouped: 'grouped-3T2Y_EXg-',
      text: 'text-1d01iK8L-',
      secondaryScript: 'secondaryScript-3pO7_bSM-',
      withPadding: 'withPadding-UPhHkA1c-',
      primary: 'primary-nwbhr-QZ-',
    };
  },
  257: function (e, t) {
    e.exports = {
      loader: 'loader-3q6az1FO-',
      item: 'item-I1y2jPt8-',
      'tv-button-loader': 'tv-button-loader-or3q47Bu-',
      black: 'black-29_3FgL9-',
      white: 'white-PhPAMkPg-',
    };
  },
  321: function (e, t, n) {
    'use strict';
    function o(e) {
      switch (e) {
        case 'default':
          return l.base;
        case 'primary':
          return l.primary;
        case 'secondary':
          return l.secondary;
        case 'secondary-script':
          return l.secondaryScript;
        case 'success':
          return l.success;
        case 'warning':
          return l.warning;
        case 'danger':
          return l.danger;
        case 'link':
          return l.link;
        default:
          return '';
      }
    }
    function r(e) {
      switch (e) {
        case 'xsmall':
          return l.xsmall;
        case 'small':
          return l.small;
        case 'large':
          return l.large;
        default:
          return '';
      }
    }
    function i(e) {
      switch (e) {
        case 'ghost':
          return l.ghost;
        default:
          return '';
      }
    }
    function a(e) {
      var t,
        n = e.active,
        a = void 0 === n || n,
        m = e.children,
        f = e.className,
        h = void 0 === f ? '' : f,
        v = e.disabled,
        g = void 0 !== v && v,
        y = e.grouped,
        _ = void 0 !== y && y,
        b = e.growable,
        w = void 0 !== b && b,
        E = e.id,
        C = void 0 === E ? 0 : E,
        x = e.onClick,
        k = e.reference,
        O = e.size,
        P = e.theme,
        M = e.type,
        L = void 0 === M ? 'default' : M,
        N = e.loading,
        I = void 0 !== N && N,
        T = e.withPadding,
        W = void 0 === T || T,
        U = e.title,
        j = void 0 === U ? '' : U,
        S = e.disabledClassName,
        D = e.tabIndex,
        A = void 0 === D ? 0 : D,
        z = e.component,
        V = void 0 === z ? 'button' : z,
        B = e.target,
        G = void 0 === B ? '' : B,
        H = e.href,
        Z = void 0 === H ? '' : H,
        F = c(
          ((t = {}),
          (t[h] = !!h),
          (t[l.button] = !0),
          (t[l.active] = a && !g),
          (t[S || l.disabled] = g),
          (t[l.grouped] = _),
          (t[l.growable] = w),
          (t[l.withPadding] = W),
          (t[r(O)] = !!O),
          (t[i(P)] = !!P),
          (t[o(L)] = !0),
          t),
        ),
        R = 'default' === L ? 'black' : 'white',
        Y = s.createElement('span', { key: '1', className: l.text }, m);
      return (
        I &&
          (Y = s.createElement(
            'span',
            { key: '2', className: l.loader },
            s.createElement(p.Loader, { color: R }),
          )),
        s.createElement(
          u.CSSTransitionGroup,
          {
            component: V,
            tabIndex: A,
            transitionEnterTimeout: d.dur,
            transitionLeaveTimeout: d.dur,
            transitionName: 'body',
            className: F,
            disabled: g,
            key: C,
            onClick: I ? void 0 : x,
            ref: k,
            title: j,
            target: G,
            href: Z,
          },
          s.createElement('span', { className: l.hiddenText }, m),
          Y,
        )
      );
    }
    var s, c, l, u, p, d;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (s = n(2)),
      (c = n(26)),
      (l = n(255)),
      (u = n(45)),
      (p = n(326)),
      (d = n(28)),
      (t.Button = a);
  },
  325: function (e, t, n) {
    'use strict';
    function o(e) {
      var t,
        n = e.className,
        o = e.icon,
        p = e.clearable,
        d = e.onClear,
        m = e.size,
        f = r.__rest(e, ['className', 'icon', 'clearable', 'onClear', 'size']),
        h = a(
          l.inputWrapper,
          ((t = {}),
          (t[n] = !!n),
          (t[l.iconed] = !!o),
          (t[l.clearable] = p),
          t),
        );
      return i.createElement(
        u,
        r.__assign(
          {
            theme: l,
            className: h,
            leftComponent: o
              ? i.createElement(s.Icon, {
                  key: 'inputIcon',
                  icon: o,
                  className: l.inputIcon,
                })
              : void 0,
            rightComponent: p
              ? i.createElement(s.Icon, {
                  className: l.clearIcon,
                  icon: c,
                  key: 'clearIcon',
                  onClick: d,
                })
              : void 0,
            sizeMode: m,
          },
          f,
        ),
      );
    }
    var r, i, a, s, c, l, u;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (r = n(5)),
      (i = n(2)),
      (a = n(26)),
      (s = n(76)),
      (c = n(330)),
      (l = n(201)),
      (u = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          r.__extends(t, e),
          (t.prototype.render = function () {
            var e,
              t,
              n,
              o,
              s = this.props,
              c = s.theme,
              l = s.error,
              u = s.success,
              p = s.sizeMode,
              d = s.leftComponent,
              m = s.rightComponent,
              f = s.grouped,
              h = s.fontSize,
              v = s.reference,
              g = s.className,
              y = r.__rest(s, [
                'theme',
                'error',
                'success',
                'sizeMode',
                'leftComponent',
                'rightComponent',
                'grouped',
                'fontSize',
                'reference',
                'className',
              ]),
              _ = { fontSize: h },
              b = a(
                c.textInput,
                ((n = {}),
                (n[c.error] = l),
                (n[c.success] = u),
                (n[c[p]] = !!p),
                n),
              ),
              w = a(
                c.inputWrapper,
                ((o = {}), (o[g] = !!g), (o[c.grouped] = f), o),
              ),
              E = [],
              C = i.createElement(
                'input',
                r.__assign(
                  { ref: v, className: b, key: 'textInput', style: _ },
                  y,
                ),
              );
            return (
              d &&
                ((e = {
                  className: a(c.leftComponent, d.props.className),
                  key: 'leftComponent',
                }),
                E.push(i.cloneElement(d, e))),
              E.push(C),
              m &&
                ((t = {
                  className: a(c.leftComponent, m.props.className),
                  key: 'rightComponent',
                }),
                E.push(i.cloneElement(m, t))),
              i.createElement('div', { className: w }, E)
            );
          }),
          t
        );
      })(i.PureComponent)),
      (t.CommonTextInput = u),
      (t.TextInput = o);
  },
  326: function (e, t, n) {
    'use strict';
    function o(e) {
      var t,
        n = e.color,
        o = void 0 === n ? 'black' : n,
        l = a(c.item, ((t = {}), (t[c[o]] = !!o), t));
      return r.createElement(
        i.CSSTransitionGroup,
        {
          transitionName: 'loader',
          transitionAppear: !0,
          transitionAppearTimeout: 2 * s.dur,
          transitionEnter: !1,
          transitionLeave: !1,
        },
        r.createElement(
          'span',
          { className: c.loader },
          r.createElement('span', { className: l }),
          r.createElement('span', { className: l }),
          r.createElement('span', { className: l }),
        ),
      );
    }
    var r, i, a, s, c;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (r = n(2)),
      (i = n(45)),
      (a = n(26)),
      (s = n(28)),
      (c = n(257)),
      (t.Loader = o);
  },
  660: function (e, t) {
    e.exports = {
      modal: 'modal-2zD2ALtD-',
      content: 'content-2CGvrzwk-',
      form: 'form-bYALUAA--',
      copyForm: 'copyForm-11zYGUUD-',
      copyBtn: 'copyBtn-15A10th9-',
      actions: 'actions-3V3KnGhD-',
      link: 'link-2LhR6WUZ-',
      socials: 'socials-3Rpn-Ob0-',
    };
  },
  663: function (e, t) {
    e.exports = {
      modal: 'modal-3RDUwmY4-',
      backdrop: 'backdrop-21zUnyPe-',
      animated: 'animated-1bktBs9g-',
      notAnimated: 'notAnimated-1-OJgr7K-',
    };
  },
  1075: function (e, t, n) {
    'use strict';
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function i(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    var a, s, c, l, u, p, d, m;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (a =
        Object.assign ||
        function (e) {
          var t, n, o;
          for (t = 1; t < arguments.length; t++) {
            n = arguments[t];
            for (o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }),
      (s = (function () {
        function e(e, t) {
          var n, o;
          for (n = 0; n < t.length; n++)
            (o = t[n]),
              (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
        }
        return function (t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t;
        };
      })()),
      (c = function (e, t, n) {
        for (var o, r, i, a, s, c, l = !0; l; ) {
          if (
            ((o = e),
            (r = t),
            (i = n),
            (l = !1),
            null === o && (o = Function.prototype),
            void 0 !== (a = Object.getOwnPropertyDescriptor(o, r)))
          ) {
            if ('value' in a) return a.value;
            if (void 0 === (c = a.get)) return;
            return c.call(i);
          }
          if (null === (s = Object.getPrototypeOf(o))) return;
          (e = s), (t = r), (n = i), (l = !0), (a = s = void 0);
        }
      }),
      (l = n(2)),
      (u = o(l)),
      (p = n(305)),
      (d = o(p)),
      (m = (function (e) {
        function t() {
          r(this, t),
            c(Object.getPrototypeOf(t.prototype), 'constructor', this).apply(
              this,
              arguments,
            );
        }
        return (
          i(t, e),
          s(
            t,
            [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.color,
                    n = e.config,
                    o = a({ width: 2, radius: 10, length: 7, color: t }, n);
                  (this.spinner = new d.default(o)),
                    this.spinner.spin(this.refs.container);
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.spinner.stop();
                },
              },
              {
                key: 'render',
                value: function () {
                  return u.default.createElement('span', { ref: 'container' });
                },
              },
            ],
            [
              {
                key: 'propTypes',
                value: {
                  config: l.PropTypes.object,
                  color: l.PropTypes.string.isRequired,
                },
                enumerable: !0,
              },
              {
                key: 'defaultProps',
                value: { config: {}, color: 'black' },
                enumerable: !0,
              },
            ],
          ),
          t
        );
      })(u.default.Component)),
      (t.default = m),
      (e.exports = t.default);
  },
  1107: function (e, t, n) {
    'use strict';
    var o, r, i, a, s, c, l, u, p, d, m, f, h, v;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (o = n(5)),
      n(23),
      (r = n(2)),
      (i = n(1178)),
      (a = n(184)),
      (s = n(76)),
      (c = n(325)),
      (l = n(321)),
      (u = n(1185)),
      (p = n(1151)),
      (d = n(234)),
      (m = n(660)),
      (f = n(1342)),
      (h = n(1187)),
      (v = (function (e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return (
            (n._hideMessages = function () {
              n.setState({ message: '', error: '' });
            }),
            (n._setInput = function (e) {
              (n._input = e),
                setTimeout(function () {
                  e.focus(), e.select();
                });
            }),
            (n._select = function () {
              n._input.select();
            }),
            (n._shareTwitter = function () {
              p.Twitter.shareSnapshotInstantly(
                n.props.symbol || '',
                n.props.imageUrl || '',
              );
            }),
            (n._onClose = function () {
              n.props.onClose && n.props.onClose(), (n._copyBtn = null);
            }),
            (n.state = { message: t.message, error: t.error }),
            n
          );
        }
        return (
          o.__extends(t, e),
          (t.prototype.componentWillReceiveProps = function (e) {
            this.setState({ message: e.message, error: e.error });
          }),
          (t.prototype.render = function () {
            var e = this,
              t =
                !this.props.imageUrl &&
                !this.props.message &&
                !this.props.error;
            return r.createElement(
              i.Modal,
              {
                isOpened: this.props.isOpened,
                className: m.modal,
                onClickOutside: this._onClose,
                animated: !1,
              },
              r.createElement(
                a.Header,
                { onClose: this._onClose },
                window.t('Image URL'),
              ),
              r.createElement(a.Message, {
                text: this.state.message,
                isError: !1,
                onClickOutside: this._hideMessages,
              }),
              r.createElement(a.Message, {
                text: this.state.error,
                isError: !0,
                onClickOutside: this._hideMessages,
              }),
              r.createElement(
                a.Body,
                null,
                r.createElement(d.KeyboardDocumentListener, {
                  keyCode: 27,
                  handler: this._onClose,
                }),
                r.createElement(
                  'div',
                  { className: m.content },
                  t && r.createElement(u.Spinner, { presetName: 'mini' }),
                  r.createElement(
                    'div',
                    {
                      className: m.form,
                      style: {
                        visibility: this.props.imageUrl ? 'visible' : 'hidden',
                      },
                    },
                    r.createElement(
                      'div',
                      { className: m.copyForm },
                      r.createElement(c.TextInput, {
                        reference: function (t) {
                          return t && e._setInput(t);
                        },
                        readOnly: !0,
                        value: this.props.imageUrl || '',
                        onClick: this._select,
                        onFocus: this._select,
                      }),
                      r.createElement(
                        'div',
                        {
                          ref: function (t) {
                            return t && e._setupClipboard(t);
                          },
                          'data-clipboard-text': this.props.imageUrl,
                          className: m.copyBtn,
                        },
                        r.createElement(
                          l.Button,
                          { type: 'primary', theme: 'ghost' },
                          window.t('Copy'),
                        ),
                      ),
                    ),
                    r.createElement(
                      'div',
                      { className: m.actions },
                      r.createElement(
                        'a',
                        {
                          className: m.link,
                          href: this.props.imageUrl,
                          target: '_blank',
                        },
                        r.createElement(s.Icon, { icon: h }),
                        r.createElement('span', null, window.t('Save image')),
                      ),
                      r.createElement(
                        'span',
                        { className: m.socials, onClick: this._shareTwitter },
                        r.createElement(s.Icon, { icon: f }),
                        r.createElement('span', null, window.t('Tweet')),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }),
          (t.prototype._setupClipboard = function (e) {
            var t = this;
            this._copyBtn ||
              ((this._copyBtn = e),
              n.e(13, function (o) {
                var r = n(332),
                  i = new r(e);
                i.on('success', function () {
                  TradingView.trackEvent('GUI', 'Copied Image Link'),
                    t.setState({ message: window.t('Copied to clipboard') });
                }),
                  i.on('error', function () {
                    t.setState({
                      message: window.t(
                        "Sorry, the Copy Link button doesn't work in your browser. Please select the link and copy it manually.",
                      ),
                    });
                  });
              }));
          }),
          t
        );
      })(r.Component)),
      (t.TakeSnapshotModal = v);
  },
  1151: function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = n(1152);
    t.Twitter = o.Twitter;
  },
  1152: function (e, t, n) {
    'use strict';
    var o;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (o = n(1153)),
      (function (e) {
        function t(e, t) {
          return TradingView.isCmeWidget
            ? t + ' from cmegroup.com via @tradingview $' + e
            : '$' + e + ' chart ' + t + ' via https://www.tradingview.com';
        }
        function n(e) {
          var t = i();
          return {
            onFailure: function () {
              t.close();
            },
            onSuccess: function (n) {
              t.location.href = a(e, n);
            },
          };
        }
        function r(e, t) {
          i(s(e, t));
        }
        function i(e, t) {
          var n, o, r, i;
          return (
            void 0 === e && (e = 'about:blank'),
            void 0 === t && (t = 'snapshot_tweet'),
            (n = 550),
            (o = 420),
            (r = Math.round(screen.width / 2 - n / 2)),
            (i = Math.round(screen.height / 2 - o / 2)),
            window.open(
              e,
              t,
              'scrollbars=yes,resizable=yes,toolbar=no,location=yes,\n\t\t\t\twidth=' +
                n +
                ',height=' +
                o +
                ',\n\t\t\t\tleft=' +
                r +
                ',top=' +
                i,
            )
          );
        }
        function a(e, n) {
          return (
            'https://twitter.com/intent/tweet?&status=' +
            encodeURIComponent(t(e, o.getImageUrl(n)))
          );
        }
        function s(e, n) {
          return (
            'https://twitter.com/intent/tweet?&status=' +
            encodeURIComponent(t(e, n))
          );
        }
        (e.getStatus = t),
          (e.shareSnapshot = n),
          (e.shareSnapshotInstantly = r);
      })(t.Twitter || (t.Twitter = {}));
  },
  1153: function (e, t) {
    'use strict';
    function n(e) {
      return (
        window.location.protocol + '//' + window.location.host + '/x/' + e + '/'
      );
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.getImageUrl = n);
  },
  1177: function (e, t, n) {
    'use strict';
    var o, r;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (o = n(28)),
      (r = n(320)),
      (t.backdropAnimations = {
        enter: {
          opacity: function (e, t) {
            r.lazyVelocity().then(function () {
              $.Velocity.animate(
                e,
                { opacity: [0.5, 0] },
                {
                  duration: 0.75 * o.dur,
                  easing: 'ease-out-cubic',
                  visibility: 'visible',
                },
              ).then(t);
            });
          },
        },
        leave: {
          opacity: function (e, t) {
            r.lazyVelocity().then(function () {
              $.Velocity.animate(
                e,
                { opacity: 0 },
                {
                  duration: 0.5 * o.dur,
                  easing: 'ease-in-cubic',
                  visibility: 'hidden',
                },
              ).then(t);
            });
          },
        },
      }),
      (t.dialogAnimations = {
        enter: {
          fromTop: function (e, t) {
            r.lazyVelocity().then(function () {
              $.Velocity.animate(
                e,
                { opacity: [1, 0], translateY: [0, -20] },
                {
                  duration: 0.75 * o.dur,
                  easing: 'ease-out-cubic',
                  visibility: 'visible',
                },
              ).then(t);
            });
          },
        },
        leave: {
          fromTop: function (e, t) {
            r.lazyVelocity().then(function () {
              $.Velocity.animate(
                e,
                { opacity: [0], translateY: ['-20px', 0] },
                {
                  duration: 0.5 * o.dur,
                  easing: 'ease-in-cubic',
                  visibility: 'hidden',
                },
              ).then(t);
            });
          },
        },
      });
  },
  1178: function (e, t, n) {
    'use strict';
    var o, r, i, a, s, c, l, u, p, d;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (o = n(5)),
      (r = n(2)),
      (i = n(26)),
      (a = n(188)),
      (s = n(1177)),
      (c = n(190)),
      (l = n(108)),
      (u = n(107)),
      (p = n(663)),
      (d = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t._setBackdropElem = function (e) {
              e && (t._backdrop = e);
            }),
            (t._setDialogElem = function (e) {
              t._dialog = e;
            }),
            t
          );
        }
        return (
          o.__extends(t, e),
          (t.prototype.componentWillEnter = function (e) {
            var t, n;
            this.props.animated &&
            this.props.backdropEnterAnimation &&
            this.props.dialogEnterAnimation
              ? ((t =
                  s.backdropAnimations.enter[
                    this.props.backdropEnterAnimation
                  ]),
                (n = s.dialogAnimations.enter[this.props.dialogEnterAnimation]),
                t && this._backdrop && t(this._backdrop),
                n && n(this._dialog, e))
              : e();
          }),
          (t.prototype.componentWillLeave = function (e) {
            var t, n;
            this.props.animated &&
            this.props.backdropLeaveAnimation &&
            this.props.dialogLeaveAnimation
              ? ((t =
                  s.backdropAnimations.leave[
                    this.props.backdropLeaveAnimation
                  ]),
                (n = s.dialogAnimations.leave[this.props.dialogLeaveAnimation]),
                t && this._backdrop && t(this._backdrop),
                n && n(this._dialog, e))
              : e();
          }),
          (t.prototype.render = function () {
            var e,
              t,
              n = this.props,
              s = n.zIndex,
              c = n.animated,
              l = n.onClickOutside,
              d = n.children,
              m = n.className;
            return r.createElement(
              'div',
              { className: p.modal, style: { zIndex: s } },
              r.createElement('div', {
                className: i(
                  p.backdrop,
                  ((e = {}), (e[p.animated] = c), (e[p.notAnimated] = !c), e),
                ),
                ref: this._setBackdropElem,
              }),
              r.createElement(
                u.OutsideEvent,
                { mouseDown: !0, touchStart: !0, handler: l },
                r.createElement(
                  a.Dialog,
                  o.__assign({}, this.props, {
                    className: i(m, ((t = {}), (t[p.notAnimated] = !c), t)),
                    reference: this._setDialogElem,
                  }),
                  d,
                ),
              ),
            );
          }),
          (t.defaultProps = {
            backdropEnterAnimation: 'opacity',
            backdropLeaveAnimation: 'opacity',
            dialogEnterAnimation: 'fromTop',
            dialogLeaveAnimation: 'fromTop',
            animated: !0,
            width: 500,
          }),
          t
        );
      })(r.PureComponent)),
      (t.ModalDialog = d),
      (t.Modal = c.makeOverlapable(l.makeTransitionGroupLifecycleConsumer(d)));
  },
  1185: function (e, t, n) {
    'use strict';
    function o(e) {
      var t,
        n = {
          className: 'spinner',
          color: a.color.spinner,
          corners: 1,
          direction: 1,
          fps: 20,
          hwaccel: !1,
          left: '50%',
          length: 0,
          lines: 17,
          opacity: 0,
          radius: 20,
          rotate: 0,
          scale: 1,
          shadow: !1,
          speed: 1.5,
          top: '50%',
          trail: 60,
          width: 3,
        },
        o = e.presetName ? s[e.presetName] : null;
      return (
        o && (n = Object.assign(n, o)),
        (t = Object.assign({}, n, e.options)),
        r.createElement(i, { config: t })
      );
    }
    var r, i, a, s;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (r = n(2)),
      (i = n(1075)),
      (a = n(28)),
      (s = {
        medium: { lines: 14, scale: 0.8 },
        micro: { lines: 12, scale: 0.2 },
        mini: { lines: 14, scale: 0.4 },
        xlarge: { lines: 16, scale: 1.6 },
      }),
      (t.Spinner = o);
  },
  1187: function (e, t) {
    e.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 15" width="22" height="15"><g fill="none" fill-rule="evenodd" stroke-width="2"><path stroke="#757575" d="M6.25 5.812L11 10.087l4.75-4.275M11 9.868V.315"/><path stroke="#ADAEB0" d="M21 10v4H1v-4"/></g><path d="M.008 12.47V9.994H1.96v3.003h18.095V9.988l.958.021.957.021.02 2.46.02 2.458H.008v-2.477z"/><path d="M8.642 9.27a673.518 673.518 0 0 0-2.658-2.396l-.369-.325.657-.716.658-.716 1.49 1.35c.819.741 1.525 1.348 1.57 1.348.054 0 .079-1.143.079-3.716V.382H11.946v3.717c0 2.129.029 3.716.067 3.716.037 0 .738-.607 1.558-1.349l1.491-1.35.508.543c.28.298.57.626.647.73l.14.187-2.632 2.366c-1.447 1.3-2.668 2.372-2.712 2.381-.044.01-1.111-.915-2.37-2.054z"/></svg>';
  },
  1342: function (e, t) {
    e.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 11.6" width="15px" height="11.6px"><path d="M15 1.4c-.3.1-1 .4-1.7.5.4-.2 1.1-1 1.3-1.6-.4.3-1.4.7-1.9.7-.6-.7-1.4-1-2.3-1-1.7 0-3.1 1.3-3.1 3 0 .2 0 .4.1.7C5.1 3.6 2.4 2.5.9.6 0 2.1.8 3.9 1.8 4.5c-.4 0-1 0-1.3-.3 0 1 .5 2.4 2.4 2.9-.4.2-1 .1-1.3.1.1.9 1.4 2 2.8 2-.6.5-2.3 1.4-4.4 1.1 1.4.8 3.1 1.3 4.8 1.3 5 0 8.8-3.9 8.6-8.6.5-.4 1.1-.9 1.6-1.6z"/></svg>';
  },
});
