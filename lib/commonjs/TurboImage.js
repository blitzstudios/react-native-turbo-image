"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const {
  TurboImageViewManager
} = _reactNative.NativeModules;
const ComponentName = 'TurboImageView';
const NativeImage = (0, _reactNative.requireNativeComponent)(ComponentName);
const TurboImageView = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    source,
    style,
    cachePolicy,
    resizeMode,
    indicator,
    placeholder,
    showPlaceholderOnFailure,
    fadeDuration,
    rounded,
    blur,
    monochrome,
    resize,
    resizeWidth,
    resizeHeight,
    tint,
    enableLiveTextInteraction,
    isProgressiveImageRenderingEnabled,
    allowHardware,
    format,
    onStart,
    onSuccess,
    onFailure,
    onCompletion,
    ...restProps
  } = props;
  if (placeholder && Object.keys(placeholder).length !== 1) {
    throw new Error('Choose only one placeholder');
  }
  if (showPlaceholderOnFailure && !placeholder) {
    throw new Error('A placeholder is required since showPlaceholderOnFailure is true');
  }
  const processedIndicator = indicator && Object.keys(indicator).length !== 0 ? {
    style: indicator === null || indicator === void 0 ? void 0 : indicator.style,
    color: (0, _reactNative.processColor)(indicator === null || indicator === void 0 ? void 0 : indicator.color)
  } : undefined;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.imageContainer, style, rounded && {
      borderRadius: 9999999
    }],
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(NativeImage, _extends({}, restProps, {
    style: _reactNative.StyleSheet.absoluteFill,
    source: source,
    cachePolicy: cachePolicy,
    resizeMode: resizeMode ?? 'contain',
    indicator: processedIndicator,
    placeholder: placeholder,
    showPlaceholderOnFailure: showPlaceholderOnFailure,
    fadeDuration: fadeDuration,
    rounded: rounded,
    blur: blur,
    monochrome: (0, _reactNative.processColor)(monochrome),
    resize: resize,
    resizeWidth: resizeWidth,
    resizeHeight: resizeHeight,
    tint: (0, _reactNative.processColor)(tint),
    enableLiveTextInteraction: enableLiveTextInteraction,
    allowHardware: allowHardware,
    isProgressiveImageRenderingEnabled: isProgressiveImageRenderingEnabled,
    format: format,
    onStart: onStart,
    onSuccess: onSuccess,
    onFailure: onFailure,
    onCompletion: onCompletion
  })));
});
const styles = _reactNative.StyleSheet.create({
  imageContainer: {
    overflow: 'hidden'
  }
});
const TurboImage = Object.assign({}, TurboImageView, {
  prefetch: async (sources, cachePolicy = 'urlCache') => {
    return await TurboImageViewManager.prefetch(sources, cachePolicy);
  },
  dispose: async sources => {
    return await TurboImageViewManager.dispose(sources);
  },
  clearMemoryCache: async () => {
    return await TurboImageViewManager.clearMemoryCache();
  },
  clearDiskCache: async () => {
    return await TurboImageViewManager.clearDiskCache();
  }
});
var _default = exports.default = TurboImage;
//# sourceMappingURL=TurboImage.js.map