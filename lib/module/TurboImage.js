function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { requireNativeComponent, NativeModules, processColor, View, StyleSheet } from 'react-native';
const {
  TurboImageViewManager
} = NativeModules;
const ComponentName = 'TurboImageView';
const NativeImage = requireNativeComponent(ComponentName);
const TurboImageView = /*#__PURE__*/forwardRef((props, ref) => {
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
    color: processColor(indicator === null || indicator === void 0 ? void 0 : indicator.color)
  } : undefined;
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.imageContainer, style, rounded && {
      borderRadius: 9999999
    }],
    ref: ref
  }, /*#__PURE__*/React.createElement(NativeImage, _extends({}, restProps, {
    style: StyleSheet.absoluteFill,
    source: source,
    cachePolicy: cachePolicy,
    resizeMode: resizeMode ?? 'contain',
    indicator: processedIndicator,
    placeholder: placeholder,
    showPlaceholderOnFailure: showPlaceholderOnFailure,
    fadeDuration: fadeDuration,
    rounded: rounded,
    blur: blur,
    monochrome: processColor(monochrome),
    resize: resize,
    tint: processColor(tint),
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
const styles = StyleSheet.create({
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
export default TurboImage;
//# sourceMappingURL=TurboImage.js.map