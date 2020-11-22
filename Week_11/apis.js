let names = Object.getOwnPropertyNames(window);

function filterOut(names, props) {
    let set = new Set();
    props.forEach(o => set.add(o));
    return names.filter(e => !set.has(e));
}

// ECMA 262
{
    let set = new Set()
    let obj = ["globalThis", "console", "BigInt", "BigInt64Array", "BigUint64Array", "Infinity", "NaN", "undefined", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "Array", "Date", "RegExp", "Promise", "Proxy", "Map", "WeakMap", "Set", "WeakSet", "Function", "Boolean", "String", "Number", "Symbol", "Object", "Error", "EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError", "ArrayBuffer", "SharedArrayBuffer", "DataView", "Float32Array", "Float64Array", "Int8Array", "Int16Array", "Int32Array", "Uint8Array", "Uint16Array", "Uint32Array", "Uint8ClampedArray", "Atomics", "JSON", "Math", "Reflect", "escape", "unescape"]
    obj.forEach(o => set.add(o))
    names = names.filter(e => !set.has(e))
}

// Node 的子节点，比如 HTMLXXXElement, 来自DOM API
names = names.filter(e => {
    try {
        return !(window[e].prototype instanceof Node)
    } catch (err) {
        return true;
    }
}).filter(e => e != "Node");


// 忽略webKit 的实现，忽略 onXX 等事件处理机制
names = names.filter(e => !e.match(/^on/))
names = names.filter(e => !e.match(/^([wW])eb[kK]it/))

/**
 * ECMA International
 * https://ecma-international.org/ecma-402/
 * 关于国际化的规范
 */
names = filterOut(names, ['Intl']);


// 从html 规范中被删除的
names = filterOut(names, ['external'])

/**
 * 关于window的规范
 * https://html.spec.whatwg.org/#window
 */
names = filterOut(names, ["window", "self", "document", "name", "location", "history", "customElements", "locationbar", "menubar", " personalbar", "scrollbars", "statusbar", "toolbar", "status", "close", "closed", "stop", "focus", " blur", "frames", "length", "top", "opener", "parent", "frameElement", "open", "navigator", "applicationCache", "alert", "confirm", "prompt", "print", "postMessage", "console", "origin", "personalbar"]);


/**
 * window object
 * 关于HTML的 Living Standard 规范
 * https://html.spec.whatwg.org/
 */

names = filterOut(names, ['ApplicationCache', 'AudioTrack', 'AudioTrackList', 'BarProp', 'BeforeUnloadEvent', 'BroadcastChannel', 'CanvasGradient', 'CanvasPattern', 'CanvasRenderingContext2D', 'CloseEvent', 'CustomElementRegistry', 'DOMParser', 'DOMStringList', 'DOMStringMap', 'DataTransfer', 'DataTransferItem', 'DataTransferItemList', 'DedicatedWorkerGlobalScope', 'Document', 'DragEvent', 'ElementInternals', 'ErrorEvent', 'EventSource', 'External', 'FormDataEvent', 'HTMLAllCollection', 'HTMLAnchorElement', 'HTMLAreaElement', 'HTMLAudioElement', 'HTMLBRElement', 'HTMLBaseElement', 'HTMLBodyElement', 'HTMLButtonElement', 'HTMLCanvasElement', 'HTMLDListElement', 'HTMLDataElement', 'HTMLDataListElement', 'HTMLDetailsElement', 'HTMLDialogElement', 'HTMLDirectoryElement', 'HTMLDivElement', 'HTMLElement', 'HTMLEmbedElement', 'HTMLFieldSetElement', 'HTMLFontElement', 'HTMLFormControlsCollection', 'HTMLFormElement', 'HTMLFrameElement', 'HTMLFrameSetElement', 'HTMLHRElement', 'HTMLHeadElement', 'HTMLHeadingElement', 'HTMLHtmlElement', 'HTMLIFrameElement', 'HTMLImageElement', 'HTMLInputElement', 'HTMLLIElement', 'HTMLLabelElement', 'HTMLLegendElement', 'HTMLLinkElement', 'HTMLMapElement', 'HTMLMarqueeElement', 'HTMLMediaElement', 'HTMLMenuElement', 'HTMLMetaElement', 'HTMLMeterElement', 'HTMLModElement', 'HTMLOListElement', 'HTMLObjectElement', 'HTMLOptGroupElement', 'HTMLOptionElement', 'HTMLOptionsCollection', 'HTMLOutputElement', 'HTMLParagraphElement', 'HTMLParamElement', 'HTMLPictureElement', 'HTMLPreElement', 'HTMLProgressElement', 'HTMLQuoteElement', 'HTMLScriptElement', 'HTMLSelectElement', 'HTMLSlotElement', 'HTMLSourceElement', 'HTMLSpanElement', 'HTMLStyleElement', 'HTMLTableCaptionElement', 'HTMLTableCellElement', 'HTMLTableColElement', 'HTMLTableElement', 'HTMLTableRowElement', 'HTMLTableSectionElement', 'HTMLTemplateElement', 'HTMLTextAreaElement', 'HTMLTimeElement', 'HTMLTitleElement', 'HTMLTrackElement', 'HTMLUListElement', 'HTMLUnknownElement', 'HTMLVideoElement', 'HashChangeEvent', 'History', 'ImageBitmap', 'ImageBitmapRenderingContext', 'ImageData', 'Location', 'MediaError', 'MessageChannel', 'MessageEvent', 'MessagePort', 'MimeType', 'MimeTypeArray', 'Navigator', 'OffscreenCanvas', 'OffscreenCanvasRenderingContext2D', 'PageTransitionEvent', 'Path2D', 'Plugin', 'PluginArray', 'PopStateEvent', 'PromiseRejectionEvent', 'RadioNodeList', 'SharedWorker', 'SharedWorkerGlobalScope', 'Storage', 'StorageEvent', 'SubmitEvent', 'TextMetrics', 'TextTrack', 'TextTrackCue', 'TextTrackCueList', 'TextTrackList', 'TimeRanges', 'TrackEvent', 'ValidityState', 'VideoTrack', 'VideoTrackList', 'WebSocket', 'Window', 'Worker', 'WorkerGlobalScope', 'WorkerLocation', 'WorkerNavigator', 'Worklet', 'WorkletGlobalScope', 'setInterval', 'setTimeout', 'requestAnimationFrame', 'cancelAnimationFrame', 'clearInterval', 'clearTimeout', 'clientInformation', 'sessionStorage', 'localStorage', 'atob', 'btoa', 'blur', 'createImageBitmap', 'queueMicrotask']);

/**
 * Document
 * https://dom.spec.whatwg.org/#interface-document
 */
names = filterOut(names, ['DOMImplementation', 'NamedNodeMap']);


/**
 * DOM Events
 * https://dom.spec.whatwg.org/#events
 */
names = filterOut(names, []);

//http://www.ecma-international.org/ecma-402/5.0/index.html#Title
names = names.filter(e => e != "Intl")

names = filterOut(names, ['Event', 'EventTarget', 'CustomEvent', 'PopStateEvent', 'PointerEvent', 'UIEvent', 'TextEvent', 'WheelEvent', 'BeforeInstallPromptEvent', 'PageTransitionEvent', 'FocusEvent', 'MouseEvent', 'HashChangeEvent', 'ErrorEvent', 'DragEvent', 'CompositionEvent', 'BeforeUnloadEvent', 'ClipboardEvent', 'SecurityPolicyViolationEvent', 'KeyboardEvent', 'InputEvent', 'AbortController', 'AbortSignal', 'MutationObserver', 'MutationRecord', 'XPathResult', 'XPathExpression', 'XPathEvaluator', 'Range', 'StaticRange', 'Selection', 'getSelection', 'DOMTokenList', 'URL', 'URLSearchParams', 'NodeIterator', 'TreeWalker', 'NodeFilter']);


/**
  * Canvas
  * https://html.spec.whatwg.org/multipage/canvas.html
  */
names = filterOut(names, ['CanvasRenderingContext2D', 'OffscreenCanvasRenderingContext2D', 'Path2D', 'ImageBitmap', 'ImageData', 'TextMetrics', 'CanvasGradient', 'CanvasPattern', 'OffscreenCanvas', 'ImageBitmapRenderingContext', 'createImageBitmap',]);


/**
 * Worker
 * https://html.spec.whatwg.org/multipage/workers.html
 * https://w3c.github.io/ServiceWorker/
 * https://drafts.css-houdini.org/worklets/
 */
names = filterOut(names, ['Worker', 'SharedWorker', 'ServiceWorker', 'ServiceWorkerContainer', 'Cache', 'caches', 'CacheStorage', 'Worklet', 'NavigationPreloadManager',],);


/**
 * 4
 * whatwg webstorage
 * https://html.spec.whatwg.org/multipage/#toc-webstorage
 */
names = filterOut(names, ['Storage', 'sessionStorage', 'localStorage', 'StorageEvent', 'StorageManager',],);

/**
 * xhr
 * https://xhr.spec.whatwg.org/
 */
names = filterOut(names, ['XMLHttpRequestUpload', 'XMLHttpRequestEventTarget', 'XMLHttpRequest', 'FormData', 'ProgressEvent']);

/**
 * fetch
 * https://fetch.spec.whatwg.org/
 */
names = filterOut(names, ['fetch', 'Request', 'Response', 'Headers'], WhatWg);

/**
 * csswg
 * CSSOM
 * https://drafts.csswg.org/cssom/
 * https://drafts.css-houdini.org/css-typed-om-1/
 * https://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSview-getComputedStyle
 */
names = filterOut(names, ['getComputedStyle', 'matchMedia', 'MediaQueryListEvent', 'MediaQueryList', 'MediaList', 'StyleSheetList', 'StyleSheet', 'StylePropertyMapReadOnly', 'StylePropertyMap',]);

// https://drafts.csswg.org/cssom-view/#extensions-to-the-window-interface
names = filterOut(names, ['moveTo', 'moveBy', 'resizeTo', 'resizeBy', 'scroll', 'scrollTo', 'scrollBy', 'scrollX', 'scrollY', 'screenX', 'screenY', 'innerHeight', 'innerWidth', 'outerHeight', 'outerWidth', 'pageXOffset', 'pageYOffset', 'devicePixelRatio', 'screenLeft', 'screenTop'],);


/**
 * CSS Transitions
 * https://drafts.csswg.org/css-transitions/
 */
names = filterOut(names, ['TransitionEvent', 'TransformStream'], W3C);

/**
 * Web Animations
 * https://drafts.csswg.org/web-animations-1/
 */
names = filterOut(names, ['Animation', 'KeyframeEffect', 'AnimationEffect', 'AnimationPlaybackEvent', 'DocumentTimeline', 'AnimationTimeline',],);

//https://www.w3.org/TR/webaudio/
names = filterOut(names, ["AudioContext", "AudioNode", "AnalyserNode", "AudioBuffer", "AudioBufferSourceNode", "AudioDestinationNode", "AudioParam", "AudioListener", "AudioWorklet", "AudioWorkletGlobalScope", "AudioWorkletNode", "AudioWorkletProcessor", "BiquadFilterNode", "ChannelMergerNode", "ChannelSplitterNode", "ConstantSourceNode", "ConvolverNode", "DelayNode", "DynamicsCompressorNode", "GainNode", "IIRFilterNode", "MediaElementAudioSourceNode", "MediaStreamAudioSourceNode", "MediaStreamTrackAudioSourceNode", "MediaStreamAudioDestinationNode", "PannerNode", "PeriodicWave", "OscillatorNode", "StereoPannerNode", "WaveShaperNode", "ScriptProcessorNode", "AudioProcessingEvent"]);

//https://encoding.spec.whatwg.org/#dom-textencoder
names = filterOut(names, ["TextDecoder", "TextEncoder", "TextDecoderStream", "TextEncoderStream"]);

//https://streams.spec.whatwg.org/#blqs-class
names = filterOut(names, ["ReadableStream", "ReadableStreamDefaultReader", "ReadableStreamBYOBReader", "ReadableStreamDefaultController", "ReadableByteStreamController", "ReadableStreamBYOBRequest", "WritableStream", "WritableStreamDefaultWriter", "WritableStreamDefaultController", "TransformStream", "TransformStreamDefaultController", "ByteLengthQueuingStrategy", "CountQueuingStrategy"]);

//https://wicg.github.io/BackgroundSync/spec/#sync-manager-interface
names = filterOut(names, ["SyncManager"]);



console.log(names)