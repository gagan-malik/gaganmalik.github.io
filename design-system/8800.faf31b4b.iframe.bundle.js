(self.webpackChunk_purity_design_system=self.webpackChunk_purity_design_system||[]).push([[8800],{"../node_modules/css-loader/dist/cjs.js!../node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!./src/components/DateRangePicker/DateRangePicker.css":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,"",""]),module.exports=exports},"../node_modules/css-loader/dist/cjs.js!../node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!./src/components/DateRangePickerV2/DateRangePickerV2.css":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,`/* React Datepicker Custom Styles */
.react-datepicker {
    border: none !important;
    /* left: 35px; */
    margin-top: 0.25rem !important;
    border-radius: var(--radius-4xl) !important;
    border-width: 0 !important;
    background-color: var(--bg-primary) !important; 
  } 
  .react-datepicker-popper {
    top: 2.5rem !important;
    left: -2.5rem !important;
    transform: none !important; 
}

.react-datepicker__month-container {
    border-radius: var(--radius-4xl);
    border-width: 1px;
    border-color: var(--border-primary); 
}


  
  /* Change background color when selecting. */
  .react-datepicker__day--keyboard-selected:not(
      .react-datepicker__day--range-start
    ) {
    border-radius: 100% !important; /* Change this to your desired border radius */
    /* background-color: var(--bg-brand-solid) !important; */
    z-index: -1 !important;
    background-color: var(--bg-brand-solid) !important;
    --tw-text-opacity: 1 !important;
    color: rgb(255 255 255 / var(--tw-text-opacity, 1)) !important;
  }
  
  .react-datepicker__day:not([aria-disabled=true]):hover, .react-datepicker__month-text:not([aria-disabled=true]):hover, .react-datepicker__quarter-text:not([aria-disabled=true]):hover, .react-datepicker__year-text:not([aria-disabled=true]):hover {
    background-color: var(--bg-secondary);
    color: var(--text-secondary); 
}
  /* Change background color when hovering. */
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: var(--bg-secondary) !important;
    color: var(--text-secondary) !important;
  }
  
  /* Change background color when selecting. */
  .react-datepicker__day--in-range {
    z-index: 5 !important;
    width: 41px !important;
    margin:  0 !important;
    border-radius: 0px;
    background-color: var(--bg-active) !important;
    color: var(--text-secondary) !important;
  }
  
  /* Change background color when selecting. */
  .react-datepicker__day--range-start,
  .react-datepicker__day--range-end {
    position: relative !important;
    z-index: 1 !important;
    background-color: var(--bg-active) !important;
    --tw-text-opacity: 1 !important;
    color: rgb(255 255 255 / var(--tw-text-opacity, 1)) !important;

  }
  
  /* Change background color when selecting. */
  .react-datepicker__day--range-start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
    left: 3px !important;
  }
  
  /* Change background color when selecting. */
  .react-datepicker__day--range-end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
    left: 0px !important;
    right: 10px !important;
  }
  
  /* Change background color when selecting. */
  .react-datepicker__day--range-start::before,
  .react-datepicker__day--range-end::before {
    content: "";
    width: 28px;
    height: 28px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 0px;
    z-index: -1;
    background-color: var(--bg-brand-solid) !important;
    --tw-text-opacity: 1 !important;
    color: rgb(255 255 255 / var(--tw-text-opacity, 1)) !important;
  }
  
  .react-datepicker__day--range-start::before {
    margin-left: 0px; /* Adjust circle position */
    transform: translate(6px, -60%);
  }
  
  .react-datepicker__day--range-end::before {
    margin-left: 13px;
    transform: translate(-7px, -60%);
  }

  /* Change background color when selecting. */
  .react-datepicker__day--in-selecting-range {
    border-radius: var(--radius-full) !important;
    background-color: var(--bg-active) !important; 
}
  
  .react-datepicker__header {
    border-radius: var(--radius-4xl) !important;
    border-style: none !important;
    background-color: var(--bg-primary) !important;
    padding-top: 0.5rem !important; 
}
  
  .react-datepicker__day-disabled {
    color: red;
  }
  
  .react-datepicker__day {
    color: var(--text-secondary);
    height: 35px !important;
    width: 35px !important; 
}
  
  .react-datepicker__day--outside-month {
    color: #888; /* Change this to your desired color */
  }

  .react-datepicker__day-name {
    height: 35px !important;
    width: 35px !important;
    font-size: 0.875rem !important;
    line-height: 1.25rem !important;
    font-weight: 500 !important;
    color: var(--text-secondary) !important; 
}

  .react-datepicker__day-names {
    background-color: var(--bg-primary); 
}
  .react-datepicker__triangle{
    opacity: 0;
  }`,""]),module.exports=exports},"../node_modules/css-loader/dist/cjs.js!../node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!./src/components/Loader/loader.css":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,`.spinner {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`,""]),module.exports=exports},"../node_modules/css-loader/dist/cjs.js!../node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!./src/styles/tailwind-theme.css":(module,exports,__webpack_require__)=>{var ___CSS_LOADER_API_IMPORT___=__webpack_require__("../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_GET_URL_IMPORT___=__webpack_require__("../node_modules/css-loader/dist/runtime/getUrl.js"),___CSS_LOADER_URL_IMPORT_0___=__webpack_require__("./src/assets/icons/SendAIPromptIcon.svg"),___CSS_LOADER_URL_IMPORT_1___=__webpack_require__("./src/assets/icons/DisabledSendAIPromptIcon.svg"),___CSS_LOADER_URL_IMPORT_2___=__webpack_require__("./src/assets/icons/DisabledSendAIPromptIconDark.svg");exports=___CSS_LOADER_API_IMPORT___(!1);var ___CSS_LOADER_URL_REPLACEMENT_0___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___),___CSS_LOADER_URL_REPLACEMENT_2___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);exports.push([module.id,`*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(147 197 253 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(147 197 253 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}/*
! tailwindcss v3.4.18 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: var(--gray-200); /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: var(--gray-400); /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: var(--gray-400); /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}

[type='text'],input:where(:not([type])),[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: var(--gray-500);
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, input:where(:not([type])):focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: var(--blue-600);
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: var(--blue-600);
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: var(--gray-500);
  opacity: 1;
}

input::placeholder,textarea::placeholder {
  color: var(--gray-500);
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-date-and-time-value {
  min-height: 1.5em;
  text-align: inherit;
}

::-webkit-datetime-edit {
  display: inline-flex;
}

::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field {
  padding-top: 0;
  padding-bottom: 0;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
}

[multiple],[size]:where(select:not([size="1"])) {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
          print-color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: var(--blue-600);
  background-color: #fff;
  border-color: var(--gray-500);
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
  border-radius: 0px;
}

[type='radio'] {
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: var(--blue-600);
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

@media (forced-colors: active)  {

  [type='checkbox']:checked {
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}

[type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

@media (forced-colors: active)  {

  [type='radio']:checked {
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}

[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='checkbox']:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

@media (forced-colors: active)  {

  [type='checkbox']:indeterminate {
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus {
  outline: 1px solid ButtonText;
  outline: 1px auto -webkit-focus-ring-color;
}

* {
  scrollbar-color: initial;
  scrollbar-width: initial;
}
  :root {
    --primary-50: #eff6ff;
    --primary-100: #dbeafe;
    --primary-200: #bfdbfe;
    --primary-300: #93c5fd;
    --primary-400: #60a5fa;
    --primary-500: #3b82f6;
    --primary-600: #2563eb;
    --primary-700: #1d4ed8;
    --primary-800: #1e40af;
    --primary-900: #1e3a8a;

    --secondary-700: #57606a;

    --blue-25: #f5faff;
    --blue-50: #eff8ff;
    --blue-100: #d1e9ff;
    --blue-200: #b2ddff;
    --blue-300: #84caff;
    --blue-400: #53b1fd;
    --blue-500: #2e90fa;
    --blue-600: #1570ef;
    --blue-700: #175cd3;
    --blue-800: #1849a9;
    --blue-900: #194185;
    --blue-950: #102a56;

    --blue-dark-25: #f5f8ff;
    --blue-dark-50: #eff4ff;
    --blue-dark-100: #d1e0ff;
    --blue-dark-200: #b2ccff;
    --blue-dark-300: #84adff;
    --blue-dark-400: #528bff;
    --blue-dark-500: #2970ff;
    --blue-dark-600: #155eef;
    --blue-dark-700: #004eeb;
    --blue-dark-800: #0040c1;
    --blue-dark-900: #00359e;
    --blue-dark-950: #002266;

    --base-black: #000000;
    --base-white: #ffffff;
    --base-transparent: rgba(255, 255, 255, 0);

    --gray-25: #fcfcfd;
    --gray-50: #f9fafb;
    --gray-100: #f2f4f7;
    --gray-200: #eaecf0;
    --gray-300: #d0d5dd;
    --gray-400: #98a2b3;
    --gray-500: #667085;
    --gray-600: #475467;
    --gray-700: #344054;
    --gray-800: #182230;
    --gray-900: #101828;
    --gray-950: #0c111d;
    --gray-secondary: #6e6e73;

    --brand-25: #f5faff;
    --brand-50: #eff8ff;
    --brand-100: #d1e9ff;
    --brand-200: #b2ddff;
    --brand-300: #84caff;
    --brand-400: #53b1fd;
    --brand-500: #2e90fa;
    --brand-600: #1570ef;
    --brand-700: #175cd3;
    --brand-800: #1849a9;
    --brand-900: #194185;
    --brand-950: #102a56;

    --error-25: #fffbfa;
    --error-50: #fef3f2;
    --error-100: #fee4e2;
    --error-200: #fecdca;
    --error-300: #fda29b;
    --error-400: #f97066;
    --error-500: #f04438;
    --error-600: #d92d20;
    --error-700: #b42318;
    --error-800: #912018;
    --error-900: #7a271a;
    --error-950: #55160c;

    --warning-25: #fffcf5;
    --warning-50: #fffaeb;
    --warning-100: #fef0c7;
    --warning-200: #fedf89;
    --warning-300: #fec84b;
    --warning-400: #fdb022;
    --warning-500: #f79009;
    --warning-600: #dc6803;
    --warning-700: #b54708;
    --warning-800: #93370d;
    --warning-900: #7a2e0e;
    --warning-950: #4e1d09;

    --success-25: #f6fef9;
    --success-50: #ecfdf3;
    --success-100: #dcfae6;
    --success-200: #abefc6;
    --success-300: #75e0a7;
    --success-400: #47cd89;
    --success-500: #17b26a;
    --success-600: #079455;
    --success-700: #067647;
    --success-800: #085d3a;
    --success-900: #074d31;
    --success-950: #053321;

    --gray-blue-25: #fcfcfd;
    --gray-blue-50: #f8f9fc;
    --gray-blue-100: #eaecf5;
    --gray-blue-200: #d5d9eb;
    --gray-blue-300: #b3b8db;
    --gray-blue-400: #717bbc;
    --gray-blue-500: #4e5ba6;
    --gray-blue-600: #3e4784;
    --gray-blue-700: #363f72;
    --gray-blue-800: #293056;
    --gray-blue-900: #101323;
    --gray-blue-950: #0d0f1c;

    --gray-cool-25: #fcfcfd;
    --gray-cool-50: #f9f9fb;
    --gray-cool-100: #eff1f5;
    --gray-cool-200: #dcdfea;
    --gray-cool-300: #b9c0d4;
    --gray-cool-400: #7d89b0;
    --gray-cool-500: #5d6b98;
    --gray-cool-600: #4a5578;
    --gray-cool-700: #404968;
    --gray-cool-800: #30374f;
    --gray-cool-900: #111322;
    --gray-cool-950: #0e101b;

    --gray-modern-25: #fcfcfd;
    --gray-modern-50: #f8fafc;
    --gray-modern-100: #eef2f6;
    --gray-modern-200: #e3e8ef;
    --gray-modern-300: #cdd5df;
    --gray-modern-400: #9aa4b2;
    --gray-modern-500: #697586;
    --gray-modern-600: #4b5565;
    --gray-modern-700: #364152;
    --gray-modern-800: #202939;
    --gray-modern-900: #121926;
    --gray-modern-950: #0d121c;

    --gray-neutral-25: #fcfcfd;
    --gray-neutral-50: #f9fafb;
    --gray-neutral-100: #f3f4f6;
    --gray-neutral-200: #e5e7eb;
    --gray-neutral-300: #d2d6db;
    --gray-neutral-400: #9da4ae;
    --gray-neutral-500: #6c737f;
    --gray-neutral-600: #4d5761;
    --gray-neutral-700: #384250;
    --gray-neutral-800: #1f2a37;
    --gray-neutral-900: #111927;
    --gray-neutral-950: #0d121c;

    --gray-iron-25: #fcfcfc;
    --gray-iron-50: #fafafa;
    --gray-iron-100: #f4f4f5;
    --gray-iron-200: #e4e4e7;
    --gray-iron-300: #d1d1d6;
    --gray-iron-400: #a0a0ab;
    --gray-iron-500: #70707b;
    --gray-iron-600: #51525c;
    --gray-iron-700: #3f3f46;
    --gray-iron-800: #26272b;
    --gray-iron-900: #1a1a1e;
    --gray-iron-950: #131316;

    --gray-true-25: #fcfcfc;
    --gray-true-50: #fafafa;
    --gray-true-100: #f5f5f5;
    --gray-true-200: #e5e5e5;
    --gray-true-300: #d6d6d6;
    --gray-true-400: #a3a3a3;
    --gray-true-500: #737373;
    --gray-true-600: #525252;
    --gray-true-700: #424242;
    --gray-true-800: #292929;
    --gray-true-900: #141414;
    --gray-true-950: #0f0f0f;

    --gray-warm-25: #fdfdfc;
    --gray-warm-50: #fafaf9;
    --gray-warm-100: #f5f5f4;
    --gray-warm-200: #e7e5e4;
    --gray-warm-300: #d7d3d0;
    --gray-warm-400: #a9a29d;
    --gray-warm-500: #79716b;
    --gray-warm-600: #57534e;
    --gray-warm-700: #44403c;
    --gray-warm-800: #292524;
    --gray-warm-900: #1c1917;
    --gray-warm-950: #171412;

    --moss-25: #fafdf7;
    --moss-50: #f5fbee;
    --moss-100: #e6f4d7;
    --moss-200: #ceeab0;
    --moss-300: #acdc79;
    --moss-400: #86cb3c;
    --moss-500: #669f2a;
    --moss-600: #4f7a21;
    --moss-700: #3f621a;
    --moss-800: #335015;
    --moss-900: #2b4212;
    --moss-950: #1a280b;

    --green-light-25: #fafef5;
    --green-light-50: #f3fee7;
    --green-light-100: #e4fbcc;
    --green-light-200: #d0f8ab;
    --green-light-300: #a6ef67;
    --green-light-400: #85e13a;
    --green-light-500: #66c61c;
    --green-light-600: #4ca30d;
    --green-light-700: #3b7c0f;
    --green-light-800: #326212;
    --green-light-900: #2b5314;
    --green-light-950: #15290a;

    --green-25: #f6fef9;
    --green-50: #edfcf2;
    --green-100: #d3f8df;
    --green-200: #aaf0c4;
    --green-300: #73e2a3;
    --green-400: #3ccb7f;
    --green-500: #16b364;
    --green-600: #099250;
    --green-700: #087443;
    --green-800: #095c37;
    --green-900: #084c2e;
    --green-950: #052e1c;

    --teal-25: #f6fefc;
    --teal-50: #f0fdf9;
    --teal-100: #ccfbef;
    --teal-200: #99f6e0;
    --teal-300: #5fe9d0;
    --teal-400: #2ed3b7;
    --teal-500: #15b79e;
    --teal-600: #0e9384;
    --teal-700: #107569;
    --teal-800: #125d56;
    --teal-900: #134e48;
    --teal-950: #0a2926;

    --cyan-25: #f5feff;
    --cyan-50: #ecfdff;
    --cyan-100: #cff9fe;
    --cyan-200: #a5f0fc;
    --cyan-300: #67e3f9;
    --cyan-400: #22ccee;
    --cyan-500: #06aed4;
    --cyan-600: #088ab2;
    --cyan-700: #0e7090;
    --cyan-800: #155b75;
    --cyan-900: #164c63;
    --cyan-950: #0d2d3a;

    --blue-light-25: #f5fbff;
    --blue-light-50: #f0f9ff;
    --blue-light-100: #e0f2fe;
    --blue-light-200: #b9e6fe;
    --blue-light-300: #7cd4fd;
    --blue-light-400: #36bffa;
    --blue-light-500: #0ba5ec;
    --blue-light-600: #0086c9;
    --blue-light-700: #026aa2;
    --blue-light-800: #065986;
    --blue-light-900: #0b4a6f;
    --blue-light-950: #062c41;

    --indigo-25: #f5f8ff;
    --indigo-50: #eef4ff;
    --indigo-100: #e0eaff;
    --indigo-200: #c7d7fe;
    --indigo-300: #a4bcfd;
    --indigo-400: #8098f9;
    --indigo-500: #6172f3;
    --indigo-600: #444ce7;
    --indigo-700: #3538cd;
    --indigo-800: #2d31a6;
    --indigo-900: #1b184e;
    --indigo-950: #2d3282;

    --violet-25: #fbfaff;
    --violet-50: #f5f3ff;
    --violet-100: #ece9fe;
    --violet-200: #ddd6fe;
    --violet-300: #c3b5fd;
    --violet-400: #a48afb;
    --violet-500: #875bf7;
    --violet-600: #7839ee;
    --violet-700: #6927da;
    --violet-800: #5720b7;
    --violet-900: #491c96;
    --violet-950: #2e125e;

    --purple-25: #fafaff;
    --purple-50: #f4f3ff;
    --purple-100: #ebe9fe;
    --purple-200: #d9d6fe;
    --purple-300: #bdb4fe;
    --purple-400: #9b8afb;
    --purple-500: #7a5af8;
    --purple-600: #6938ef;
    --purple-700: #5925dc;
    --purple-800: #4a1fb8;
    --purple-900: #3e1c96;
    --purple-950: #27115f;

    --fuchsia-25: #fefaff;
    --fuchsia-50: #fdf4ff;
    --fuchsia-100: #fbe8ff;
    --fuchsia-200: #f6d0fe;
    --fuchsia-300: #eeaafd;
    --fuchsia-400: #e478fa;
    --fuchsia-500: #d444f1;
    --fuchsia-600: #ba24d5;
    --fuchsia-700: #9f1ab1;
    --fuchsia-800: #821890;
    --fuchsia-900: #6f1877;
    --fuchsia-950: #47104c;

    --pink-25: #fef6fb;
    --pink-50: #fdf2fa;
    --pink-100: #fce7f6;
    --pink-200: #fcceee;
    --pink-300: #faa7e0;
    --pink-400: #f670c7;
    --pink-500: #ee46bc;
    --pink-600: #dd2590;
    --pink-700: #c11574;
    --pink-800: #9e165f;
    --pink-900: #851651;
    --pink-950: #4e0d30;

    --rose-25: #fff5f6;
    --rose-50: #fff1f3;
    --rose-100: #ffe4e8;
    --rose-200: #fecdd6;
    --rose-300: #fea3b4;
    --rose-400: #fd6f8e;
    --rose-500: #f63d68;
    --rose-600: #e31b54;
    --rose-700: #c01048;
    --rose-800: #a11043;
    --rose-900: #89123e;
    --rose-950: #510b24;

    --orange-25: #fefaf5;
    --orange-50: #fef6ee;
    --orange-100: #fdead7;
    --orange-200: #f9dbaf;
    --orange-300: #f7b27a;
    --orange-400: #f38744;
    --orange-500: #ef6820;
    --orange-600: #e04f16;
    --orange-700: #b93815;
    --orange-800: #932f19;
    --orange-900: #772917;
    --orange-950: #511c10;

    --yellow-25: #fefdf0;
    --yellow-50: #fefbe8;
    --yellow-100: #fef7c3;
    --yellow-200: #feee95;
    --yellow-300: #fde272;
    --yellow-400: #fac515;
    --yellow-500: #eaaa08;
    --yellow-600: #ca8504;
    --yellow-700: #a15c07;
    --yellow-800: #854a0e;
    --yellow-900: #713b12;
    --yellow-950: #542c0d;

    --surface-fg-white: #fff;

    /* random colors used in figma */

    --card-bg: #f5f5f7;

    --green-dark: #00875a;
    --red-dark: #e53e3e;

    --neutral-0: #fff;
    --neutral-40: #dfe1e6;
    --neutral-100: ##7a869a;
    --neutral-600: #344563;
    --neutral-800: #172b4d;

    --tertiary: #f5f5f7;
    --tertiary-600: #6e7781;

    --N-0: #fff;
    --N-50: #2f353d;
    --text-default: #172b4d;
    --text-subtlest: #626f86;
    --border-avatar: rgba(0, 0, 0, 0.08);
    --border-avatar-focused: rgba(152, 162, 179, 0.14);
    --black-transparent: #00000080;

    --bg-avatar:#F2F4F7;

    /* radius */
    --radius-none: 0rem;
    --radius-xxs: 0.125rem;
    --radius-xs: 0.25rem;
    --radius-sm: 0.375rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.625rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --radius-3xl: 1.25rem;
    --radius-4xl: 1.5rem;
    --radius-5xl: 1.75rem;
    --radius-6xl: 2rem;
    --radius-full: 9999px;

    /* spacing */
    --spacing-none: 0rem;
    --spacing-xxs: 0.125rem;
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.375rem;
    --spacing-md: 0.5rem;
    --spacing-lg: 0.75rem;
    --spacing-xl: 1rem;
    --spacing-2xl: 1.25rem;
    --spacing-3xl: 1.5rem;
    --spacing-4xl: 2rem;
    --spacing-5xl: 2.5rem;
    --spacing-6xl: 3rem;
    --spacing-7xl: 4rem;
    --spacing-8xl: 5rem;
    --spacing-9xl: 6rem;
    --spacing-10xl: 8rem;
    --spacing-11xl: 10rem;

    /* Widths */
    --width-xxs: 20rem;
    --width-xs: 24rem;
    --width-sm: 30rem;
    --width-md: 35rem;
    --width-lg: 40rem;
    --width-xl: 48rem;
    --width-2xl: 64rem;
    --width-3xl: 80rem;
    --width-4xl: 90rem;
    --width-5xl: 100rem;
    --width-6xl: 120rem;

    /* Containers */
    --container-padding-mobile: 1rem;
    --container-padding-desktop: 2rem;
    --container-max-width-desktop: 80rem;

    /* Paragraph max-widths */
    --paragraph-max-width: 20rem;

    /* Safe area insets for devices with notches */
    --safe-area-inset-top: env(safe-area-inset-top, 0px);
    --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
    --safe-area-inset-left: env(safe-area-inset-left, 0px);
    --safe-area-inset-right: env(safe-area-inset-right, 0px);

    /* Touch target sizes (Apple HIG recommendation) */
    --touch-target-min: 44px;
    --touch-target-comfortable: 48px;

    /* Mobile breakpoints */
    --breakpoint-mobile: 320px;
    --breakpoint-mobile-lg: 414px;
    --breakpoint-tablet: 768px;

    /* shadow  */
    /* to do: discuss name for light theme  */
    --shadow-xs: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    --shadow-sm: 0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06);
    --shadow-md: 0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);

    --shadow-lg: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);

    --shadow-xl: 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
    --shadow-2xl: 0px 24px 48px -12px rgba(16, 24, 40, 0.18);
    --shadow-3xl: 0px 32px 64px -12px rgba(16, 24, 40, 0.14);


    --shadow-modal: 0px 3px 5px 0px rgba(9, 30, 66, 0.2),
      0px 0px 1px 0px rgba(9, 30, 66, 0.31);

    /* to do: verify with figma  */
    --border-1: 1px;

    /* --secondary-700: var(--gray-700); */

    --text-primary: var(--gray-900);
    --text-primary_on_brand: var(--base-white);
    --text-secondary: var(--gray-700);
    --text-secondary_hover: var(--gray-800);
    --text-secondary_on_brand: var(--brand-200);
    --text-tertiary: var(--gray-600);
    --text-tertiary_hover: var(--gray-700);
    --text-tertiary_on_brand: var(--brand-200);
    --text-quaternary: var(--gray-500);
    --text-quaternary_on_brand: var(--brand-300);
    --text-white: var(--base-white);
    --text-disabled: var(--gray-500);
    --text-placeholder: var(--gray-500);
    --text-placeholder_subtle: var(--gray-300);
    --text-brand-primary: var(--brand-900);
    --text-brand-secondary: var(--brand-700);
    --text-brand-tertiary: var(--brand-600);
    --text-brand-tertiary_alt: var(--brand-600);
    --text-error-primary: var(--error-600);
    --text-warning-primary: var(--warning-600);
    --text-success-primary: var(--success-600);

    --border-primary: var(--gray-300);
    --border-secondary: var(--gray-200);
    --border-tertiary: var(--gray-100);
    --border-disabled: var(--gray-300);
    --border-disabled_subtle: var(--gray-200);
    --border-brand: var(--brand-300);
    --border-brand_solid: var(--brand-600);
    --border-brand_solid_alt: var(--brand-600);
    --border-error: var(--error-300);
    --border-error_solid: var(--error-600);

    --fg-primary: var(--gray-900);
    --fg-secondary: var(--gray-700);
    --fg-secondary_hover: var(--gray-800);
    --fg-tertiary: var(--gray-600);
    --fg-tertiary_hover: var(--gray-700);
    --fg-quaternary: var(--gray-500);
    --fg-quaternary_hover: var(--gray-600);
    --fg-quinary: var(--gray-400);
    --fg-quinary_hover: var(--gray-500);
    --fg-senary: var(--gray-300);
    --fg-white: var(--base-white);
    --fg-disabled: var(--gray-400);
    --fg-disabled_subtle: var(--gray-300);
    --fg-brand-primary: var(--brand-600);
    --fg-brand-primary_alt: var(--brand-600);
    --fg-brand-secondary: var(--brand-500);
    --fg-error-primary: var(--error-600);
    --fg-error-secondary: var(--error-500);
    --fg-warning-primary: var(--warning-600);
    --fg-warning-secondary: var(--warning-500);
    --fg-success-primary: var(--success-600);
    --fg-success-secondary: var(--success-500);

    --bg-primary: var(--base-white);
    --bg-primary_alt: var(--gray-25);
    --bg-primary_hover: var(--gray-50);
    --bg-primary-solid: var(--gray-900);
    --bg-secondary: var(--gray-50);
    --bg-secondary_alt: var(--gray-50);
    --bg-secondary_hover: var(--gray-100);
    --bg-secondary_subtle: var(--gray-200);
    --bg-secondary_solid: var(--gray-600);
    --bg-tertiary: var(--gray-100);
    --bg-quaternary: var(--gray-200);
    --bg-active: var(--gray-50);
    --bg-disabled: var(--gray-100);
    --bg-disabled_subtle: var(--gray-100);
    --bg-overlay: #0c111d70;
    --bg-brand-primary: var(--brand-25);
    --bg-brand-primary_alt: var(--brand-50);
    --bg-brand-secondary: var(--brand-100);
    --bg-brand-solid: var(--brand-600);
    --bg-brand-solid_hover: var(--brand-700);
    --bg-brand-section: var(--brand-800);
    --bg-brand-section_subtle: var(--brand-700);
    --bg-error-primary: var(--error-50);
    --bg-error-secondary: var(--error-100);
    --bg-error-solid: var(--error-600);
    --bg-warning-primary: var(--warning-50);
    --bg-warning-secondary: var(--warning-100);
    --bg-warning-solid: var(--warning-600);
    --bg-success-primary: var(--success-50);
    --bg-success-secondary: var(--success-100);
    --bg-success-solid: var(--success-600);

    /* utility light  */
    --utility-gray-50: var(--gray-50);
    --utility-gray-100: var(--gray-100);
    --utility-gray-200: var(--gray-200);
    --utility-gray-300: var(--gray-300);
    --utility-gray-400: var(--gray-400);
    --utility-gray-500: var(--gray-500);
    --utility-gray-600: var(--gray-600);
    --utility-gray-700: var(--gray-700);
    --utility-gray-800: var(--gray-800);
    --utility-gray-900: var(--gray-900);

    --utility-brand-50: var(--brand-50);
    --utility-brand-50_alt: var(--brand-50);
    --utility-brand-100: var(--brand-100);
    --utility-brand-100_alt: var(--brand-100);
    --utility-brand-200: var(--brand-200);
    --utility-brand-200_alt: var(--brand-200);
    --utility-brand-300: var(--brand-300);
    --utility-brand-300_alt: var(--brand-300);
    --utility-brand-400: var(--brand-400);
    --utility-brand-400_alt: var(--brand-400);
    --utility-brand-500: var(--brand-500);
    --utility-brand-500_alt: var(--brand-500);
    --utility-brand-600: var(--brand-600);
    --utility-brand-600_alt: var(--brand-600);
    --utility-brand-700: var(--brand-700);
    --utility-brand-700_alt: var(--brand-700);
    --utility-brand-800: var(--brand-800);
    --utility-brand-800_alt: var(--brand-800);
    --utility-brand-900: var(--brand-900);
    --utility-brand-900_alt: var(--brand-900);

    --utility-error-50: var(--error-50);
    --utility-error-100: var(--error-100);
    --utility-error-200: var(--error-200);
    --utility-error-300: var(--error-300);
    --utility-error-400: var(--error-400);
    --utility-error-500: var(--error-500);
    --utility-error-600: var(--error-600);
    --utility-error-700: var(--error-700);

    --utility-warning-50: var(--warning-50);
    --utility-warning-100: var(--warning-100);
    --utility-warning-200: var(--warning-200);
    --utility-warning-300: var(--warning-300);
    --utility-warning-400: var(--warning-400);
    --utility-warning-500: var(--warning-500);
    --utility-warning-600: var(--warning-600);
    --utility-warning-700: var(--warning-700);

    --utility-success-50: var(--success-50);
    --utility-success-100: var(--success-100);
    --utility-success-200: var(--success-200);
    --utility-success-300: var(--success-300);
    --utility-success-400: var(--success-400);
    --utility-success-500: var(--success-500);
    --utility-success-600: var(--success-600);
    --utility-success-700: var(--success-700);

    --utility-gray-blue-50: var(--gray-blue-50);
    --utility-gray-blue-100: var(--gray-blue-100);
    --utility-gray-blue-200: var(--gray-blue-200);
    --utility-gray-blue-300: var(--gray-blue-300);
    --utility-gray-blue-400: var(--gray-blue-400);
    --utility-gray-blue-500: var(--gray-blue-500);
    --utility-gray-blue-600: var(--gray-blue-600);
    --utility-gray-blue-700: var(--gray-blue-700);

    --utility-blue-light-50: var(--blue-light-50);
    --utility-blue-light-100: var(--blue-light-100);
    --utility-blue-light-200: var(--blue-light-200);
    --utility-blue-light-300: var(--blue-light-300);
    --utility-blue-light-400: var(--blue-light-400);
    --utility-blue-light-500: var(--blue-light-500);
    --utility-blue-light-600: var(--blue-light-600);
    --utility-blue-light-700: var(--blue-light-700);

    --utility-blue-50: var(--blue-50);
    --utility-blue-100: var(--blue-100);
    --utility-blue-200: var(--blue-200);
    --utility-blue-300: var(--blue-300);
    --utility-blue-400: var(--blue-400);
    --utility-blue-500: var(--blue-500);
    --utility-blue-600: var(--blue-600);
    --utility-blue-700: var(--blue-700);

    --utility-blue-dark-50: var(--blue-dark-50);
    --utility-blue-dark-100: var(--blue-dark-100);
    --utility-blue-dark-200: var(--blue-dark-200);
    --utility-blue-dark-300: var(--blue-dark-300);
    --utility-blue-dark-400: var(--blue-dark-400);
    --utility-blue-dark-500: var(--blue-dark-500);
    --utility-blue-dark-600: var(--blue-dark-600);
    --utility-blue-dark-700: var(--blue-dark-700);

    --utility-indigo-50: var(--indigo-50);
    --utility-indigo-100: var(--indigo-100);
    --utility-indigo-200: var(--indigo-200);
    --utility-indigo-300: var(--indigo-300);
    --utility-indigo-400: var(--indigo-400);
    --utility-indigo-500: var(--indigo-500);
    --utility-indigo-600: var(--indigo-600);
    --utility-indigo-700: var(--indigo-700);

    --utility-purple-50: var(--purple-50);
    --utility-purple-100: var(--purple-100);
    --utility-purple-200: var(--purple-200);
    --utility-purple-300: var(--purple-300);
    --utility-purple-400: var(--purple-400);
    --utility-purple-500: var(--purple-500);
    --utility-purple-600: var(--purple-600);
    --utility-purple-700: var(--purple-700);

    --utility-fuchsia-50: var(--fuchsia-50);
    --utility-fuchsia-100: var(--fuchsia-100);
    --utility-fuchsia-200: var(--fuchsia-200);
    --utility-fuchsia-300: var(--fuchsia-300);
    --utility-fuchsia-400: var(--fuchsia-400);
    --utility-fuchsia-500: var(--fuchsia-500);
    --utility-fuchsia-600: var(--fuchsia-600);
    --utility-fuchsia-700: var(--fuchsia-700);

    --utility-pink-50: var(--pink-50);
    --utility-pink-100: var(--pink-100);
    --utility-pink-200: var(--pink-200);
    --utility-pink-300: var(--pink-300);
    --utility-pink-400: var(--pink-400);
    --utility-pink-500: var(--pink-500);
    --utility-pink-600: var(--pink-600);
    --utility-pink-700: var(--pink-700);

    --utility-orange-50: var(--orange-50);
    --utility-orange-100: var(--orange-100);
    --utility-orange-200: var(--orange-200);
    --utility-orange-300: var(--orange-300);
    --utility-orange-400: var(--orange-400);
    --utility-orange-500: var(--orange-500);
    --utility-orange-600: var(--orange-600);
    --utility-orange-700: var(--orange-700);

    /* Gradients */
    --gray-gradients-600-0-600: linear-gradient(0deg, #475467, #475467);
    --gray-gradients-600-90-500: linear-gradient(90deg, #475467, #667085);
    --gray-gradients-700-45-600: linear-gradient(45deg, #344054, #475467);
    --gray-gradients-800-45-600: linear-gradient(45deg, #1a222e, #475467);
    --gray-gradients-800-90-600: linear-gradient(45deg, #1a222e, #475467);
    --gray-gradients-800-26-700: linear-gradient(26.5deg, #1a222e, #344054);
    --gray-gradients-900-45-600: linear-gradient(45deg, #101828, #475467);

    --brand-gradients-900-45-600: linear-gradient(0deg, #7f56d9, #7f56d9);
    --brand-gradients-600-90-500: linear-gradient(90deg, #7f56d9, #000000);
    --brand-gradients-700-45-600: linear-gradient(45deg, #6941c6, #7f56d9);
    --brand-gradients-800-45-600: linear-gradient(45deg, #53389e, #000000);
    --brand-gradients-800-90-600: linear-gradient(90deg, #53389e, #7f56d9);
    --brand-gradients-800-26-700: linear-gradient(26.5deg, #53389e, #6941c6);
    --brand-gradients-900-45-600: linear-gradient(45deg, #42307d, #7f56d9);

    --gray-neutral-gradients-1: linear-gradient(180deg, #ffffff, #f3f5f7);
    --gray-neutral-gradients-2: linear-gradient(180deg, #f9fafb, #edf0f3);
    --gray-neutral-gradients-3: linear-gradient(180deg, #edf0f3, #e7ebef);
    --gray-neutral-gradients-4: linear-gradient(180deg, #f3f5f7, #e0e5eb);
    --gray-neutral-gradients-5: linear-gradient(180deg, #edf0f3, #d4dbe2);
    --gray-neutral-gradients-6: linear-gradient(180deg, #e7ebef, #c8d1da);
    --gray-neutral-gradients-7: linear-gradient(180deg, #e7ebef, #c8d1da);

    --gray-true-gradients-1: linear-gradient(180deg, ##ffffff, #f5f5f5);
    --gray-true-gradients-2: linear-gradient(180deg, #fafafa, #f0f0f0);
    --gray-true-gradients-3: linear-gradient(180deg, #fafafa, #ebebeb);
    --gray-true-gradients-4: linear-gradient(180deg, #f5f5f5, #e5e5e5);
    --gray-true-gradients-5: linear-gradient(180deg, #f0f0f0, #dbdbdb);
    --gray-true-gradients-6: linear-gradient(180deg, #ebebeb, #d1d1d1);
    --gray-true-gradients-7: linear-gradient(180deg, #ebebeb, #d1d1d1);

    --button-tertiary-color-fg: #175CD3;
    --button-tertiary-fg: #6E7781;
    --button-tertiary-error-fg: #B42318;
    --button-secondary-color-fg: #175CD3;
    --button-tertiary-color-fg_hover: #1849A9;
    --button-tertiary-fg_hover: #57606A;
    --button-secondary-fg: #57606A;
    --button-secondary-error-fg: #B42318;
    --button-tertiary-error-fg_hover: #B42318;
    --button-primary-fg: #FFFFFF;
    --button-secondary-color-fg_hover: #1849A9;
    --button-secondary-fg_hover: #424A53;
    --button-secondary-error-fg_hover: #912018;
    --button-primary-fg_hover: #FFFFFF;
    --button-primary-border: #175CD3;
    --button-primary-bg: #175CD3;
    --button-primary-error-border: #B42318;
    --button-primary-error-bg: #B42318;
    --button-secondary-border: #D0D7DE;
    --button-secondary-error-border: #FDA29B;
    --button-secondary-bg: #FFFFFF;
    --button-secondary-error-bg: #FFFFFF;
    --button-secondary-color-bg: #FFFFFF;
    --button-primary-bg_hover: #1849A9;
    --button-primary-border_hover: #1849A9;
    --button-secondary-color-border: #84CAFF;
    --button-secondary-color-border_hover: #84CAFF;
    --button-primary-error-bg_hover: #912018;
    --button-primary-error-border_hover: #912018;
    --button-secondary-border_hover: #D0D7DE;
    --button-tertiary-color-bg_hover: #EFF8FF;
    --button-secondary-color-bg_hover: #EFF8FF;
    --button-secondary-bg_hover: #F9FAFB;
    --button-tertiary-bg_hover: #F9FAFB;
    --button-secondary-error-border_hover: #FDA29B;
    --button-tertiary-error-bg_hover: #FEF3F2;
    --button-secondary-error-bg_hover: #FEF3F2;

    --nav-item-icon-fg : #8C959F;
    
    --ring-brand-shadow-sm: rgba(21, 112, 239, 0.24);
    --ring-gray-shadow-sm:  rgba(152, 162, 179, 0.14);
    --ring-error-shadow-sm:  rgba(240, 68, 56, 0.24);


    .assistant-send-icon {
        background-image: url(`+___CSS_LOADER_URL_REPLACEMENT_0___+`);
        width: 44px;
        height: 44px;
        background-size: cover;
        &.disabled {
            background-image: url(`+___CSS_LOADER_URL_REPLACEMENT_1___+`);
        }
    }
  }
  .dark {
    --text-primary: var(--gray-50);
    --text-primary_on_brand: var(--gray-50);
    --text-secondary: var(--gray-300);
    --text-secondary_hover: var(--gray-200);
    --text-secondary_on_brand: var(--gray-300);
    --text-tertiary: var(--gray-400);
    --text-tertiary_hover: var(--gray-300);
    --text-tertiary_on_brand: var(--gray-400);
    --text-quaternary: var(--gray-400);
    --text-quaternary_on_brand: var(--gray-400);
    --text-white: var(--base-white);
    --text-disabled: var(--gray-500);
    --text-placeholder: var(--gray-400);
    --text-placeholder_subtle: var(--gray-700);
    --text-brand-primary: var(--gray-50);
    --text-brand-secondary: var(--gray-300);
    --text-brand-tertiary: var(--gray-400);
    --text-brand-tertiary_alt: var(--gray-50);
    --text-error-primary: var(--error-400);
    --text-warning-primary: var(--warning-400);
    --text-success-primary: var(--success-400);

    --border-primary: var(--gray-700);
    --border-secondary: var(--gray-800);
    --border-tertiary: var(--gray-800);
    --border-disabled: var(--gray-700);
    --border-disabled_subtle: var(--gray-800);
    --border-brand: var(--brand-400);
    --border-brand_solid: var(--brand-500);
    --border-brand_solid_alt: var(--gray-700);
    --border-error: var(--error-400);
    --border-error_solid: var(--error-500);

    --fg-primary: var(--base-white);
    --fg-secondary: var(--gray-300);
    --fg-secondary_hover: var(--gray-200);
    --fg-tertiary: var(--gray-400);
    --fg-tertiary_hover: var(--gray-300);
    --fg-quaternary: var(--gray-400);
    --fg-quaternary_hover: var(--gray-300);
    --fg-quinary: var(--gray-500);
    --fg-quinary_hover: var(--gray-400);
    --fg-senary: var(--gray-600);
    --fg-white: var(--base-white);
    --fg-disabled: var(--gray-500);
    --fg-disabled_subtle: var(--gray-600);
    --fg-brand-primary: var(--brand-500);
    --fg-brand-primary_alt: var(--gray-300);
    --fg-brand-secondary: var(--brand-500);
    --fg-error-primary: var(--error-500);
    --fg-error-secondary: var(--error-400);
    --fg-warning-primary: var(--warning-500);
    --fg-warning-secondary: var(--warning-400);
    --fg-success-primary: var(--success-500);
    --fg-success-secondary: var(--success-400);

    --bg-primary: var(--base-black);
    --bg-primary_alt: var(--gray-950);
    --bg-primary_hover: var(--gray-900);
    --bg-primary-solid: var(--gray-900);
    --bg-secondary: var(--gray-900);
    --bg-secondary_alt: var(--gray-900);
    --bg-secondary_hover: var(--gray-800);
    --bg-secondary_subtle: var(--gray-700);
    --bg-secondary_solid: var(--gray-600);
    --bg-tertiary: var(--gray-800);
    --bg-quaternary: var(--gray-700);
    --bg-active: var(--gray-800);
    --bg-disabled: var(--gray-700);
    --bg-disabled_subtle: var(--gray-900);
    --bg-overlay: #29292970;
    --bg-brand-primary: var(--brand-950);
    --bg-brand-primary_alt: var(--brand-900);
    --bg-brand-secondary: var(--brand-800);
    --bg-brand-solid: var(--brand-500);
    --bg-brand-solid_hover: var(--brand-400);
    --bg-error-primary: var(--error-950);
    --bg-error-secondary: var(--error-900);
    --bg-error-solid: var(--error-500);
    --bg-warning-primary: var(--warning-950);
    --bg-warning-secondary: var(--warning-900);
    --bg-warning-solid: var(--warning-500);
    --bg-success-primary: var(--success-950);
    --bg-success-secondary: var(--success-900);
    --bg-success-solid: var(--success-500);

    --bg-avatar:var(--gray-800);

    --blue-25: #f5f8ff;
    --blue-50: #eff4ff;
    --blue-100: #d1e0ff;
    --blue-200: #b2ccff;
    --blue-300: #84adff;
    --blue-400: #528bff;
    --blue-500: #2970ff;
    --blue-600: #155eef;
    --blue-700: #004eeb;
    --blue-800: #0040c1;
    --blue-900: #00359e;
    --blue-950: #002266;

    --gray-25: #FCFCFC;
    --gray-50: #FAFAFA;
    --gray-100: #f5f5f5;
    --gray-200: #E5E5E5;
    --gray-300: #D6D6D6;
    --gray-400: #A3A3A3;
    --gray-500: #737373;
    --gray-600: #525252;
    --gray-700: #424242;
    --gray-800: #292929;
    --gray-900: #141414;
    --gray-950: #0F0F0F;

    --orange-25: #fff9f5;
    --orange-50: #fff4ed;
    --orange-100: #ffe6d5;
    --orange-200: #ffd6ae;
    --orange-300: #ff9c66;
    --orange-400: #ff692e;
    --orange-500: #ff4405;
    --orange-600: #e62e05;
    --orange-700: #bc1b06;
    --orange-800: #97180c;
    --orange-900: #771a0d;
    --orange-950: #57130a;

    --text-default: #cecfd2;

    /* utility dark  */
    --utility-gray-50: var(--gray-900);
    --utility-gray-100: var(--gray-800);
    --utility-gray-200: var(--gray-700);
    --utility-gray-300: var(--gray-700);
    --utility-gray-400: var(--gray-600);
    --utility-gray-500: var(--gray-500);
    --utility-gray-600: var(--gray-400);
    --utility-gray-700: var(--gray-300);
    --utility-gray-800: var(--gray-200);
    --utility-gray-900: var(--gray-100);

    --utility-brand-50: var(--brand-950);
    --utility-brand-50_alt: var(--gray-900);
    --utility-brand-100: var(--brand-900);
    --utility-brand-100_alt: var(--gray-800);
    --utility-brand-200: var(--brand-800);
    --utility-brand-200_alt: var(--gray-700);
    --utility-brand-300: var(--brand-700);
    --utility-brand-300_alt: var(--gray-700);
    --utility-brand-400: var(--brand-600);
    --utility-brand-400_alt: var(--gray-600);
    --utility-brand-500: var(--brand-500);
    --utility-brand-500_alt: var(--gray-500);
    --utility-brand-600: var(--brand-400);
    --utility-brand-600_alt: var(--gray-400);
    --utility-brand-700: var(--brand-300);
    --utility-brand-700_alt: var(--gray-300);
    --utility-brand-800: var(--brand-200);
    --utility-brand-800_alt: var(--gray-200);
    --utility-brand-900: var(--brand-100);
    --utility-brand-900_alt: var(--gray-100);

    --utility-error-50: var(--error-950);
    --utility-error-100: var(--error-900);
    --utility-error-200: var(--error-800);
    --utility-error-300: var(--error-700);
    --utility-error-400: var(--error-600);
    --utility-error-500: var(--error-500);
    --utility-error-600: var(--error-400);
    --utility-error-700: var(--error-300);

    --utility-warning-50: var(--warning-950);
    --utility-warning-100: var(--warning-900);
    --utility-warning-200: var(--warning-800);
    --utility-warning-300: var(--warning-700);
    --utility-warning-400: var(--warning-600);
    --utility-warning-500: var(--warning-500);
    --utility-warning-600: var(--warning-400);
    --utility-warning-700: var(--warning-300);

    --utility-success-50: var(--success-950);
    --utility-success-100: var(--success-900);
    --utility-success-200: var(--success-800);
    --utility-success-300: var(--success-700);
    --utility-success-400: var(--success-600);
    --utility-success-500: var(--success-500);
    --utility-success-600: var(--success-400);
    --utility-success-700: var(--success-300);

    --utility-gray-blue-50: var(--gray-blue-950);
    --utility-gray-blue-100: var(--gray-blue-900);
    --utility-gray-blue-200: var(--gray-blue-800);
    --utility-gray-blue-300: var(--gray-blue-700);
    --utility-gray-blue-400: var(--gray-blue-600);
    --utility-gray-blue-500: var(--gray-blue-500);
    --utility-gray-blue-600: var(--gray-blue-400);
    --utility-gray-blue-700: var(--gray-blue-300);

    --utility-blue-light-50: var(--blue-light-950);
    --utility-blue-light-100: var(--blue-light-900);
    --utility-blue-light-200: var(--blue-light-800);
    --utility-blue-light-300: var(--blue-light-700);
    --utility-blue-light-400: var(--blue-light-600);
    --utility-blue-light-500: var(--blue-light-500);
    --utility-blue-light-600: var(--blue-light-400);
    --utility-blue-light-700: var(--blue-light-300);

    --utility-blue-50: var(--blue-950);
    --utility-blue-100: var(--blue-900);
    --utility-blue-200: var(--blue-800);
    --utility-blue-300: var(--blue-700);
    --utility-blue-400: var(--blue-600);
    --utility-blue-500: var(--blue-500);
    --utility-blue-600: var(--blue-400);
    --utility-blue-700: var(--blue-300);

    --utility-blue-dark-50: var(--blue-dark-950);
    --utility-blue-dark-100: var(--blue-dark-900);
    --utility-blue-dark-200: var(--blue-dark-800);
    --utility-blue-dark-300: var(--blue-dark-700);
    --utility-blue-dark-400: var(--blue-dark-600);
    --utility-blue-dark-500: var(--blue-dark-500);
    --utility-blue-dark-600: var(--blue-dark-400);
    --utility-blue-dark-700: var(--blue-dark-300);

    --utility-indigo-50: var(--indigo-950);
    --utility-indigo-100: var(--indigo-900);
    --utility-indigo-200: var(--indigo-800);
    --utility-indigo-300: var(--indigo-700);
    --utility-indigo-400: var(--indigo-600);
    --utility-indigo-500: var(--indigo-500);
    --utility-indigo-600: var(--indigo-400);
    --utility-indigo-700: var(--indigo-300);

    --utility-purple-50: var(--purple-950);
    --utility-purple-100: var(--purple-900);
    --utility-purple-200: var(--purple-800);
    --utility-purple-300: var(--purple-700);
    --utility-purple-400: var(--purple-600);
    --utility-purple-500: var(--purple-500);
    --utility-purple-600: var(--purple-400);
    --utility-purple-700: var(--purple-300);

    --utility-fuchsia-50: var(--fuchsia-950);
    --utility-fuchsia-100: var(--fuchsia-900);
    --utility-fuchsia-200: var(--fuchsia-800);
    --utility-fuchsia-300: var(--fuchsia-700);
    --utility-fuchsia-400: var(--fuchsia-600);
    --utility-fuchsia-500: var(--fuchsia-500);
    --utility-fuchsia-600: var(--fuchsia-400);
    --utility-fuchsia-700: var(--fuchsia-300);

    --utility-pink-50: var(--pink-950);
    --utility-pink-100: var(--pink-900);
    --utility-pink-200: var(--pink-800);
    --utility-pink-300: var(--pink-700);
    --utility-pink-400: var(--pink-600);
    --utility-pink-500: var(--pink-500);
    --utility-pink-600: var(--pink-400);
    --utility-pink-700: var(--pink-300);

    --utility-orange-50: var(--orange-950);
    --utility-orange-100: var(--orange-900);
    --utility-orange-200: var(--orange-800);

    --utility-orange-300: var(--orange-700);
    --utility-orange-400: var(--orange-600);
    --utility-orange-500: var(--orange-500);
    --utility-orange-600: var(--orange-400);
    --utility-orange-700: var(--orange-300);


    --shadow-xs: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    --shadow-sm: 0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06);
    --shadow-md:  0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);

    --shadow-lg: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);

    --shadow-xl: 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);

    --shadow-2xl: 0px 24px 48px -12px rgba(16, 24, 40, 0.18);
    --shadow-3xl: 0px 32px 64px -12px rgba(16, 24, 40, 0.14);

/* 
      --fg-disabled: #737373; */
      /* --fg-white: #FFFFFF; */
      --button-tertiary-fg: #A3A3A3;
      --button-tertiary-color-fg: #D6D6D6;
      --button-tertiary-error-fg: #D92D20;
      --button-tertiary-fg_hover: #E5E5E5;
      --button-tertiary-error-fg_hover: #F04438;
      --button-tertiary-color-fg_hover: #F5F5F5;
      --button-secondary-color-fg: #D6D6D6;
      --button-secondary-fg: #D6D6D6;
      --button-secondary-error-fg: #FECDCA;
      --button-secondary-error-fg_hover: #FEE4E2;
      --button-secondary-color-fg_hover: #F5F5F5;
      --button-secondary-fg_hover: #F5F5F5;
      --button-secondary-color-bg: #141414;
      --button-secondary-bg: #141414;
      --button-primary-fg: #FFFFFF;
      --button-primary-fg_hover: #FFFFFF;
      --button-primary-border: #1570EF;
      --button-primary-bg: #1570EF;
      /* --border-disabled_subtle: #292929; */
      /* --bg-primary: #000000; */
      --button-secondary-border: #424242;
      --button-secondary-color-border: #424242;
      /* --bg-disabled: #424242; */
      --button-secondary-error-bg: #55160C;
      --button-secondary-error-border: #912018;
      --button-primary-error-bg: #D92D20;
      --button-primary-error-border: #D92D20;
      --button-secondary-color-bg_hover: #292929;
      --button-tertiary-bg_hover: #292929;
      --button-tertiary-color-bg_hover: #292929;
      --button-secondary-bg_hover: #292929;
      --button-primary-border_hover: #2E90FA;
      --button-primary-bg_hover: #2E90FA;
      --button-secondary-color-border_hover: #424242;
      --button-secondary-border_hover: #424242;
      --button-tertiary-error-bg_hover: #7A271A;
      --button-secondary-error-bg_hover: #7A271A;
      --button-secondary-error-border_hover: #B42318;
      --button-primary-error-border_hover: #F04438;
      --button-primary-error-bg_hover: #F04438;

      --ring-brand-shadow-sm: rgba(21, 112, 239, 0.24);
      --ring-gray-shadow-sm:  rgba(152, 162, 179, 0.14);
      --ring-error-shadow-sm:  rgba(240, 68, 56, 0.24);

    
    /* --secondary-700: var(--gray-300); */
    .assistant-send-icon{
        background-image: url(`+___CSS_LOADER_URL_REPLACEMENT_0___+`);
        width: 44px;
        height: 44px;
        background-size: cover;
        &.disabled {
          background-image: url(`+___CSS_LOADER_URL_REPLACEMENT_2___+`);
      }
    }
  }
.\\!container {
  width: 100% !important;
  margin-right: auto !important;
  margin-left: auto !important;
  padding-right: 2rem !important;
  padding-left: 2rem !important;
}
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem;
  padding-left: 2rem;
}
@media (min-width: 1400px) {

  .\\!container {
    max-width: 1400px !important;
  }

  .container {
    max-width: 1400px;
  }
}
.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border-width: 0 !important;
}
.pointer-events-none {
  pointer-events: none !important;
}
.pointer-events-auto {
  pointer-events: auto !important;
}
.visible {
  visibility: visible !important;
}
.invisible {
  visibility: hidden !important;
}
.static {
  position: static !important;
}
.fixed {
  position: fixed !important;
}
.absolute {
  position: absolute !important;
}
.relative {
  position: relative !important;
}
.inset-0 {
  inset: 0px !important;
}
.inset-x-0 {
  left: 0px !important;
  right: 0px !important;
}
.inset-y-0 {
  top: 0px !important;
  bottom: 0px !important;
}
.-bottom-1 {
  bottom: -0.25rem !important;
}
.-left-2 {
  left: -0.5rem !important;
}
.-top-1 {
  top: -0.25rem !important;
}
.bottom-0 {
  bottom: 0px !important;
}
.bottom-12 {
  bottom: 3rem !important;
}
.bottom-4 {
  bottom: 1rem !important;
}
.bottom-\\[-0\\.325rem\\] {
  bottom: -0.325rem !important;
}
.bottom-\\[-8px\\] {
  bottom: -8px !important;
}
.bottom-\\[22px\\] {
  bottom: 22px !important;
}
.bottom-full {
  bottom: 100% !important;
}
.left-0 {
  left: 0px !important;
}
.left-0\\.5 {
  left: 0.125rem !important;
}
.left-1 {
  left: 0.25rem !important;
}
.left-1\\/2 {
  left: 50% !important;
}
.left-4 {
  left: 1rem !important;
}
.left-\\[-8px\\] {
  left: -8px !important;
}
.left-\\[10px\\] {
  left: 10px !important;
}
.left-\\[20\\%\\] {
  left: 20% !important;
}
.left-full {
  left: 100% !important;
}
.right-0 {
  right: 0px !important;
}
.right-10 {
  right: 2.5rem !important;
}
.right-14 {
  right: 3.5rem !important;
}
.right-16 {
  right: 4rem !important;
}
.right-2 {
  right: 0.5rem !important;
}
.right-28 {
  right: 7rem !important;
}
.right-4 {
  right: 1rem !important;
}
.right-\\[-20px\\] {
  right: -20px !important;
}
.right-\\[-8px\\] {
  right: -8px !important;
}
.right-\\[20\\%\\] {
  right: 20% !important;
}
.right-full {
  right: 100% !important;
}
.top-0 {
  top: 0px !important;
}
.top-0\\.5 {
  top: 0.125rem !important;
}
.top-1 {
  top: 0.25rem !important;
}
.top-1\\/2 {
  top: 50% !important;
}
.top-2 {
  top: 0.5rem !important;
}
.top-3 {
  top: 0.75rem !important;
}
.top-7 {
  top: 1.75rem !important;
}
.top-\\[-22px\\] {
  top: -22px !important;
}
.top-\\[-8px\\] {
  top: -8px !important;
}
.top-full {
  top: 100% !important;
}
.z-10 {
  z-index: 10 !important;
}
.z-50 {
  z-index: 50 !important;
}
.z-\\[1000\\] {
  z-index: 1000 !important;
}
.z-\\[1100\\] {
  z-index: 1100 !important;
}
.z-\\[998\\] {
  z-index: 998 !important;
}
.z-\\[9999\\] {
  z-index: 9999 !important;
}
.z-\\[999\\] {
  z-index: 999 !important;
}
.z-\\[99\\] {
  z-index: 99 !important;
}
.m-0 {
  margin: 0px !important;
}
.m-1 {
  margin: 0.25rem !important;
}
.m-2 {
  margin: 0.5rem !important;
}
.m-4 {
  margin: 1rem !important;
}
.m-5 {
  margin: 1.25rem !important;
}
.m-auto {
  margin: auto !important;
}
.-my-1\\.5 {
  margin-top: -0.375rem !important;
  margin-bottom: -0.375rem !important;
}
.mx-4 {
  margin-left: 1rem !important;
  margin-right: 1rem !important;
}
.mx-auto {
  margin-left: auto !important;
  margin-right: auto !important;
}
.my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}
.-mb-4 {
  margin-bottom: -1rem !important;
}
.-ml-4 {
  margin-left: -1rem !important;
}
.-mr-1 {
  margin-right: -0.25rem !important;
}
.-mr-1\\.5 {
  margin-right: -0.375rem !important;
}
.-mt-3 {
  margin-top: -0.75rem !important;
}
.-mt-4 {
  margin-top: -1rem !important;
}
.mb-1 {
  margin-bottom: 0.25rem !important;
}
.mb-2 {
  margin-bottom: 0.5rem !important;
}
.mb-4 {
  margin-bottom: 1rem !important;
}
.mb-\\[10px\\] {
  margin-bottom: 10px !important;
}
.ml-1 {
  margin-left: 0.25rem !important;
}
.ml-2 {
  margin-left: 0.5rem !important;
}
.ml-3 {
  margin-left: 0.75rem !important;
}
.mr-1 {
  margin-right: 0.25rem !important;
}
.mr-2 {
  margin-right: 0.5rem !important;
}
.mr-3 {
  margin-right: 0.75rem !important;
}
.mt-0\\.5 {
  margin-top: 0.125rem !important;
}
.mt-1 {
  margin-top: 0.25rem !important;
}
.mt-10 {
  margin-top: 2.5rem !important;
}
.mt-2 {
  margin-top: 0.5rem !important;
}
.mt-3 {
  margin-top: 0.75rem !important;
}
.mt-4 {
  margin-top: 1rem !important;
}
.mt-auto {
  margin-top: auto !important;
}
.box-border {
  box-sizing: border-box !important;
}
.line-clamp-1 {
  overflow: hidden !important;
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  -webkit-line-clamp: 1 !important;
}
.line-clamp-2 {
  overflow: hidden !important;
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  -webkit-line-clamp: 2 !important;
}
.block {
  display: block !important;
}
.inline-block {
  display: inline-block !important;
}
.inline {
  display: inline !important;
}
.flex {
  display: flex !important;
}
.inline-flex {
  display: inline-flex !important;
}
.table {
  display: table !important;
}
.grid {
  display: grid !important;
}
.contents {
  display: contents !important;
}
.hidden {
  display: none !important;
}
.size-6 {
  width: 1.5rem !important;
  height: 1.5rem !important;
}
.size-fit {
  width: -moz-fit-content !important;
  width: fit-content !important;
  height: -moz-fit-content !important;
  height: fit-content !important;
}
.h-0 {
  height: 0px !important;
}
.h-1 {
  height: 0.25rem !important;
}
.h-1\\.5 {
  height: 0.375rem !important;
}
.h-10 {
  height: 2.5rem !important;
}
.h-11 {
  height: 2.75rem !important;
}
.h-12 {
  height: 3rem !important;
}
.h-14 {
  height: 3.5rem !important;
}
.h-16 {
  height: 4rem !important;
}
.h-2 {
  height: 0.5rem !important;
}
.h-2\\.5 {
  height: 0.625rem !important;
}
.h-20 {
  height: 5rem !important;
}
.h-24 {
  height: 6rem !important;
}
.h-3 {
  height: 0.75rem !important;
}
.h-32 {
  height: 8rem !important;
}
.h-4 {
  height: 1rem !important;
}
.h-40 {
  height: 10rem !important;
}
.h-5 {
  height: 1.25rem !important;
}
.h-6 {
  height: 1.5rem !important;
}
.h-7 {
  height: 1.75rem !important;
}
.h-8 {
  height: 2rem !important;
}
.h-80 {
  height: 20rem !important;
}
.h-9 {
  height: 2.25rem !important;
}
.h-96 {
  height: 24rem !important;
}
.h-\\[100px\\] {
  height: 100px !important;
}
.h-\\[128px\\] {
  height: 128px !important;
}
.h-\\[132px\\] {
  height: 132px !important;
}
.h-\\[162px\\] {
  height: 162px !important;
}
.h-\\[184px\\] {
  height: 184px !important;
}
.h-\\[20px\\] {
  height: 20px !important;
}
.h-\\[21px\\] {
  height: 21px !important;
}
.h-\\[232px\\] {
  height: 232px !important;
}
.h-\\[360px\\] {
  height: 360px !important;
}
.h-\\[450px\\] {
  height: 450px !important;
}
.h-\\[72px\\] {
  height: 72px !important;
}
.h-\\[calc\\(100\\%-8px\\)\\] {
  height: calc(100% - 8px) !important;
}
.h-fit {
  height: -moz-fit-content !important;
  height: fit-content !important;
}
.h-full {
  height: 100% !important;
}
.h-px {
  height: 1px !important;
}
.h-screen {
  height: 100vh !important;
}
.max-h-3 {
  max-height: 0.75rem !important;
}
.max-h-56 {
  max-height: 14rem !important;
}
.max-h-60 {
  max-height: 15rem !important;
}
.max-h-80 {
  max-height: 20rem !important;
}
.max-h-\\[60vh\\] {
  max-height: 60vh !important;
}
.max-h-\\[90vh\\] {
  max-height: 90vh !important;
}
.max-h-\\[95vh\\] {
  max-height: 95vh !important;
}
.min-h-\\[84px\\] {
  min-height: 84px !important;
}
.min-h-\\[8px\\] {
  min-height: 8px !important;
}
.min-h-touch {
  min-height: 44px !important;
}
.min-h-touch-lg {
  min-height: 48px !important;
}
.w-0 {
  width: 0px !important;
}
.w-1 {
  width: 0.25rem !important;
}
.w-1\\.5 {
  width: 0.375rem !important;
}
.w-1\\/2 {
  width: 50% !important;
}
.w-10 {
  width: 2.5rem !important;
}
.w-11 {
  width: 2.75rem !important;
}
.w-12 {
  width: 3rem !important;
}
.w-14 {
  width: 3.5rem !important;
}
.w-16 {
  width: 4rem !important;
}
.w-2 {
  width: 0.5rem !important;
}
.w-2\\.5 {
  width: 0.625rem !important;
}
.w-28 {
  width: 7rem !important;
}
.w-2xl {
  width: var(--width-2xl) !important;
}
.w-3 {
  width: 0.75rem !important;
}
.w-3\\/4 {
  width: 75% !important;
}
.w-36 {
  width: 9rem !important;
}
.w-4 {
  width: 1rem !important;
}
.w-40 {
  width: 10rem !important;
}
.w-5 {
  width: 1.25rem !important;
}
.w-56 {
  width: 14rem !important;
}
.w-6 {
  width: 1.5rem !important;
}
.w-64 {
  width: 16rem !important;
}
.w-7 {
  width: 1.75rem !important;
}
.w-8 {
  width: 2rem !important;
}
.w-9 {
  width: 2.25rem !important;
}
.w-\\[21px\\] {
  width: 21px !important;
}
.w-\\[260px\\] {
  width: 260px !important;
}
.w-\\[275px\\] {
  width: 275px !important;
}
.w-\\[310px\\] {
  width: 310px !important;
}
.w-\\[350px\\] {
  width: 350px !important;
}
.w-\\[360px\\] {
  width: 360px !important;
}
.w-\\[384px\\] {
  width: 384px !important;
}
.w-\\[400px\\] {
  width: 400px !important;
}
.w-\\[528px\\] {
  width: 528px !important;
}
.w-\\[calc\\(100\\%-8px\\)\\] {
  width: calc(100% - 8px) !important;
}
.w-auto {
  width: auto !important;
}
.w-fit {
  width: -moz-fit-content !important;
  width: fit-content !important;
}
.w-full {
  width: 100% !important;
}
.w-max {
  width: -moz-max-content !important;
  width: max-content !important;
}
.w-px {
  width: 1px !important;
}
.w-xxs {
  width: var(--width-xxs) !important;
}
.min-w-\\[170px\\] {
  min-width: 170px !important;
}
.min-w-\\[2\\.5rem\\] {
  min-width: 2.5rem !important;
}
.min-w-\\[200px\\] {
  min-width: 200px !important;
}
.min-w-\\[250px\\] {
  min-width: 250px !important;
}
.min-w-\\[350px\\] {
  min-width: 350px !important;
}
.min-w-\\[3rem\\] {
  min-width: 3rem !important;
}
.min-w-\\[720px\\] {
  min-width: 720px !important;
}
.min-w-touch {
  min-width: 44px !important;
}
.min-w-touch-lg {
  min-width: 48px !important;
}
.max-w-3 {
  max-width: 0.75rem !important;
}
.max-w-\\[200px\\] {
  max-width: 200px !important;
}
.max-w-\\[300px\\] {
  max-width: 300px !important;
}
.max-w-full {
  max-width: 100% !important;
}
.max-w-lg {
  max-width: 32rem !important;
}
.max-w-md {
  max-width: 28rem !important;
}
.max-w-sm {
  max-width: 24rem !important;
}
.max-w-xs {
  max-width: 20rem !important;
}
.flex-1 {
  flex: 1 1 0% !important;
}
.flex-auto {
  flex: 1 1 auto !important;
}
.flex-initial {
  flex: 0 1 auto !important;
}
.flex-none {
  flex: none !important;
}
.flex-shrink-0 {
  flex-shrink: 0 !important;
}
.shrink-0 {
  flex-shrink: 0 !important;
}
.flex-grow {
  flex-grow: 1 !important;
}
.origin-top-right {
  transform-origin: top right !important;
}
.-translate-x-1\\/2 {
  --tw-translate-x: -50% !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
.-translate-x-full {
  --tw-translate-x: -100% !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
.-translate-y-1\\/2 {
  --tw-translate-y: -50% !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
.-translate-y-full {
  --tw-translate-y: -100% !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
.translate-x-0 {
  --tw-translate-x: 0px !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
.translate-x-4 {
  --tw-translate-x: 1rem !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
.translate-x-5 {
  --tw-translate-x: 1.25rem !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
.translate-x-7 {
  --tw-translate-x: 1.75rem !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
.translate-x-full {
  --tw-translate-x: 100% !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
.translate-y-0 {
  --tw-translate-y: 0px !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
.translate-y-full {
  --tw-translate-y: 100% !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
.-rotate-90 {
  --tw-rotate: -90deg !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
.rotate-180 {
  --tw-rotate: 180deg !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
.scale-100 {
  --tw-scale-x: 1 !important;
  --tw-scale-y: 1 !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
.scale-105 {
  --tw-scale-x: 1.05 !important;
  --tw-scale-y: 1.05 !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
.scale-125 {
  --tw-scale-x: 1.25 !important;
  --tw-scale-y: 1.25 !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
.scale-95 {
  --tw-scale-x: .95 !important;
  --tw-scale-y: .95 !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
.animate-\\[shimmer_2s_infinite\\] {
  animation: shimmer 2s infinite !important;
}
.cursor-col-resize {
  cursor: col-resize !important;
}
.cursor-default {
  cursor: default !important;
}
.cursor-grab {
  cursor: grab !important;
}
.cursor-grabbing {
  cursor: grabbing !important;
}
.cursor-move {
  cursor: move !important;
}
.cursor-not-allowed {
  cursor: not-allowed !important;
}
.cursor-pointer {
  cursor: pointer !important;
}
.cursor-row-resize {
  cursor: row-resize !important;
}
.select-none {
  -webkit-user-select: none !important;
     -moz-user-select: none !important;
          user-select: none !important;
}
.resize-none {
  resize: none !important;
}
.resize {
  resize: both !important;
}
.appearance-none {
  -webkit-appearance: none !important;
     -moz-appearance: none !important;
          appearance: none !important;
}
.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
}
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
}
.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
}
.grid-cols-7 {
  grid-template-columns: repeat(7, minmax(0, 1fr)) !important;
}
.grid-rows-6 {
  grid-template-rows: repeat(6, minmax(0, 1fr)) !important;
}
.flex-row {
  flex-direction: row !important;
}
.flex-row-reverse {
  flex-direction: row-reverse !important;
}
.flex-col {
  flex-direction: column !important;
}
.flex-col-reverse {
  flex-direction: column-reverse !important;
}
.flex-wrap {
  flex-wrap: wrap !important;
}
.items-start {
  align-items: flex-start !important;
}
.items-end {
  align-items: flex-end !important;
}
.items-center {
  align-items: center !important;
}
.justify-start {
  justify-content: flex-start !important;
}
.justify-end {
  justify-content: flex-end !important;
}
.justify-center {
  justify-content: center !important;
}
.justify-between {
  justify-content: space-between !important;
}
.justify-around {
  justify-content: space-around !important;
}
.gap-0 {
  gap: 0px !important;
}
.gap-0\\.5 {
  gap: 0.125rem !important;
}
.gap-1 {
  gap: 0.25rem !important;
}
.gap-1\\.5 {
  gap: 0.375rem !important;
}
.gap-2 {
  gap: 0.5rem !important;
}
.gap-2\\.5 {
  gap: 0.625rem !important;
}
.gap-3 {
  gap: 0.75rem !important;
}
.gap-4 {
  gap: 1rem !important;
}
.gap-5 {
  gap: 1.25rem !important;
}
.gap-6 {
  gap: 1.5rem !important;
}
.gap-7 {
  gap: 1.75rem !important;
}
.gap-8 {
  gap: 2rem !important;
}
.gap-\\[10px\\] {
  gap: 10px !important;
}
.gap-\\[6px\\] {
  gap: 6px !important;
}
.gap-lg {
  gap: var(--spacing-lg) !important;
}
.gap-md {
  gap: var(--spacing-md) !important;
}
.gap-px {
  gap: 1px !important;
}
.gap-xl {
  gap: var(--spacing-xl) !important;
}
.gap-x-1 {
  -moz-column-gap: 0.25rem !important;
       column-gap: 0.25rem !important;
}
.gap-x-1\\.5 {
  -moz-column-gap: 0.375rem !important;
       column-gap: 0.375rem !important;
}
.gap-x-2 {
  -moz-column-gap: 0.5rem !important;
       column-gap: 0.5rem !important;
}
.gap-x-3 {
  -moz-column-gap: 0.75rem !important;
       column-gap: 0.75rem !important;
}
.gap-x-4 {
  -moz-column-gap: 1rem !important;
       column-gap: 1rem !important;
}
.gap-y-2 {
  row-gap: 0.5rem !important;
}
.space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0 !important;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse)) !important;
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse))) !important;
}
.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0 !important;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse)) !important;
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse))) !important;
}
.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0 !important;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse)) !important;
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse))) !important;
}
.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0 !important;
  margin-right: calc(1rem * var(--tw-space-x-reverse)) !important;
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse))) !important;
}
.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0 !important;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse))) !important;
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse)) !important;
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0 !important;
  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse))) !important;
  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse)) !important;
}
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0 !important;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse))) !important;
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse)) !important;
}
.space-y-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0 !important;
  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse))) !important;
  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse)) !important;
}
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0 !important;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse))) !important;
  margin-bottom: calc(1rem * var(--tw-space-y-reverse)) !important;
}
.space-y-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0 !important;
  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse))) !important;
  margin-bottom: calc(2rem * var(--tw-space-y-reverse)) !important;
}
.space-x-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 1 !important;
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0 !important;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse))) !important;
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse)) !important;
}
.divide-gray-300 > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--gray-300) !important;
}
.self-stretch {
  align-self: stretch !important;
}
.overflow-auto {
  overflow: auto !important;
}
.overflow-hidden {
  overflow: hidden !important;
}
.overflow-x-auto {
  overflow-x: auto !important;
}
.overflow-y-auto {
  overflow-y: auto !important;
}
.truncate {
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
}
.whitespace-nowrap {
  white-space: nowrap !important;
}
.\\!rounded {
  border-radius: 0.25rem !important;
}
.rounded {
  border-radius: 0.25rem !important;
}
.rounded-2xl {
  border-radius: var(--radius-2xl) !important;
}
.rounded-3xl {
  border-radius: var(--radius-3xl) !important;
}
.rounded-4xl {
  border-radius: var(--radius-4xl) !important;
}
.rounded-5xl {
  border-radius: var(--radius-5xl) !important;
}
.rounded-6xl {
  border-radius: var(--radius-6xl) !important;
}
.rounded-\\[24px\\] {
  border-radius: 24px !important;
}
.rounded-\\[2px\\] {
  border-radius: 2px !important;
}
.rounded-\\[40px\\] {
  border-radius: 40px !important;
}
.rounded-\\[50\\%\\] {
  border-radius: 50% !important;
}
.rounded-\\[9999px\\] {
  border-radius: 9999px !important;
}
.rounded-full {
  border-radius: var(--radius-full) !important;
}
.rounded-lg {
  border-radius: var(--radius-lg) !important;
}
.rounded-md {
  border-radius: var(--radius-md) !important;
}
.rounded-none {
  border-radius: var(--radius-none) !important;
}
.rounded-sm {
  border-radius: var(--radius-sm) !important;
}
.rounded-xl {
  border-radius: var(--radius-xl) !important;
}
.rounded-xs {
  border-radius: var(--radius-xs) !important;
}
.rounded-b-2xl {
  border-bottom-right-radius: var(--radius-2xl) !important;
  border-bottom-left-radius: var(--radius-2xl) !important;
}
.rounded-b-none {
  border-bottom-right-radius: var(--radius-none) !important;
  border-bottom-left-radius: var(--radius-none) !important;
}
.rounded-l-full {
  border-top-left-radius: var(--radius-full) !important;
  border-bottom-left-radius: var(--radius-full) !important;
}
.rounded-l-lg {
  border-top-left-radius: var(--radius-lg) !important;
  border-bottom-left-radius: var(--radius-lg) !important;
}
.rounded-r-full {
  border-top-right-radius: var(--radius-full) !important;
  border-bottom-right-radius: var(--radius-full) !important;
}
.rounded-r-lg {
  border-top-right-radius: var(--radius-lg) !important;
  border-bottom-right-radius: var(--radius-lg) !important;
}
.rounded-r-md {
  border-top-right-radius: var(--radius-md) !important;
  border-bottom-right-radius: var(--radius-md) !important;
}
.rounded-t-2xl {
  border-top-left-radius: var(--radius-2xl) !important;
  border-top-right-radius: var(--radius-2xl) !important;
}
.rounded-t-3xl {
  border-top-left-radius: var(--radius-3xl) !important;
  border-top-right-radius: var(--radius-3xl) !important;
}
.border {
  border-width: 1px !important;
}
.border-0 {
  border-width: 0 !important;
}
.border-1 {
  border-width: var(--border-1) !important;
}
.border-2 {
  border-width: 2px !important;
}
.border-4 {
  border-width: 4px !important;
}
.border-x {
  border-left-width: 1px !important;
  border-right-width: 1px !important;
}
.border-x-\\[6px\\] {
  border-left-width: 6px !important;
  border-right-width: 6px !important;
}
.border-y {
  border-top-width: 1px !important;
  border-bottom-width: 1px !important;
}
.border-y-\\[6px\\] {
  border-top-width: 6px !important;
  border-bottom-width: 6px !important;
}
.border-b {
  border-bottom-width: 1px !important;
}
.border-b-0 {
  border-bottom-width: 0 !important;
}
.border-b-2 {
  border-bottom-width: 2px !important;
}
.border-b-8 {
  border-bottom-width: 8px !important;
}
.border-l {
  border-left-width: 1px !important;
}
.border-l-0 {
  border-left-width: 0 !important;
}
.border-l-8 {
  border-left-width: 8px !important;
}
.border-r-0 {
  border-right-width: 0 !important;
}
.border-r-8 {
  border-right-width: 8px !important;
}
.border-t {
  border-top-width: 1px !important;
}
.border-t-0 {
  border-top-width: 0 !important;
}
.border-t-2 {
  border-top-width: 2px !important;
}
.border-t-4 {
  border-top-width: 4px !important;
}
.border-t-8 {
  border-top-width: 8px !important;
}
.border-solid {
  border-style: solid !important;
}
.border-none {
  border-style: none !important;
}
.border-bg-secondary {
  border-color: var(--bg-secondary) !important;
}
.border-bg-success-solid {
  border-color: var(--bg-success-solid) !important;
}
.border-blue-300 {
  border-color: var(--blue-300) !important;
}
.border-border-brand {
  border-color: var(--border-brand) !important;
}
.border-border-disabled {
  border-color: var(--border-disabled) !important;
}
.border-border-disabled_subtle {
  border-color: var(--border-disabled_subtle) !important;
}
.border-border-error {
  border-color: var(--border-error) !important;
}
.border-border-primary {
  border-color: var(--border-primary) !important;
}
.border-border-secondary {
  border-color: var(--border-secondary) !important;
}
.border-borderAvatar {
  border-color: var(--border-avatar) !important;
}
.border-borderAvatarFocused {
  border-color: var(--border-avatar-focused) !important;
}
.border-borderPrimary {
  border-color: var(--border-primary) !important;
}
.border-button-primaryBorder {
  border-color: var(--button-primary-border) !important;
}
.border-button-primaryErrorBorder {
  border-color: var(--button-primary-error-border) !important;
}
.border-button-secondaryBorder {
  border-color: var(--button-secondary-border) !important;
}
.border-button-secondaryErrorBorder {
  border-color: var(--button-secondary-error-border) !important;
}
.border-error-300 {
  border-color: var(--error-300) !important;
}
.border-gray-200 {
  border-color: var(--gray-200) !important;
}
.border-gray-300 {
  border-color: var(--gray-300) !important;
}
.border-primary-300 {
  border-color: var(--primary-300) !important;
}
.border-primary-500 {
  border-color: var(--primary-500) !important;
}
.border-primary-600 {
  border-color: var(--primary-600) !important;
}
.border-text-secondary {
  border-color: var(--text-secondary) !important;
}
.border-transparent {
  border-color: transparent !important;
}
.border-utility-brand-200 {
  border-color: var(--utility-brand-200) !important;
}
.border-utility-error-200 {
  border-color: var(--utility-error-200) !important;
}
.border-utility-error-600 {
  border-color: var(--utility-error-600) !important;
}
.border-utility-error-700 {
  border-color: var(--utility-error-700) !important;
}
.border-utility-gray-200 {
  border-color: var(--utility-gray-200) !important;
}
.border-utility-success-200 {
  border-color: var(--utility-success-200) !important;
}
.border-x-transparent {
  border-left-color: transparent !important;
  border-right-color: transparent !important;
}
.border-y-transparent {
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
}
.border-b-bg-primary-solid {
  border-bottom-color: var(--bg-primary-solid) !important;
}
.border-l-bg-primary-solid {
  border-left-color: var(--bg-primary-solid) !important;
}
.border-l-border-primary {
  border-left-color: var(--border-primary) !important;
}
.border-r-bg-primary-solid {
  border-right-color: var(--bg-primary-solid) !important;
}
.border-t-bg-primary-solid {
  border-top-color: var(--bg-primary-solid) !important;
}
.border-t-fg-brand-primary_alt {
  border-top-color: var(--fg-brand-primary_alt) !important;
}
.border-t-primary-600 {
  border-top-color: var(--primary-600) !important;
}
.bg-base-white {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1)) !important;
}
.bg-bg-active {
  background-color: var(--bg-active) !important;
}
.bg-bg-avatar {
  background-color: var(--bg-avatar) !important;
}
.bg-bg-brand-primary {
  background-color: var(--bg-brand-primary) !important;
}
.bg-bg-brand-solid {
  background-color: var(--bg-brand-solid) !important;
}
.bg-bg-disabled {
  background-color: var(--bg-disabled) !important;
}
.bg-bg-disabled_subtle {
  background-color: var(--bg-disabled_subtle) !important;
}
.bg-bg-error-secondary {
  background-color: var(--bg-error-secondary) !important;
}
.bg-bg-overlay {
  background-color: var(--bg-overlay) !important;
}
.bg-bg-primary {
  background-color: var(--bg-primary) !important;
}
.bg-bg-primary-solid {
  background-color: var(--bg-primary-solid) !important;
}
.bg-bg-primary_alt {
  background-color: var(--bg-primary_alt) !important;
}
.bg-bg-primary_hover {
  background-color: var(--bg-primary_hover) !important;
}
.bg-bg-quaternary {
  background-color: var(--bg-quaternary) !important;
}
.bg-bg-secondary {
  background-color: var(--bg-secondary) !important;
}
.bg-bg-secondary_subtle {
  background-color: var(--bg-secondary_subtle) !important;
}
.bg-bg-success-solid {
  background-color: var(--bg-success-solid) !important;
}
.bg-bg-tertiary {
  background-color: var(--bg-tertiary) !important;
}
.bg-bg-warning-solid {
  background-color: var(--bg-warning-solid) !important;
}
.bg-blackTransparent {
  background-color: var(--black-transparent) !important;
}
.bg-blue-600 {
  background-color: var(--blue-600) !important;
}
.bg-border-secondary {
  background-color: var(--border-secondary) !important;
}
.bg-brand-700 {
  background-color: var(--brand-700) !important;
}
.bg-button-primaryBg {
  background-color: var(--button-primary-bg) !important;
}
.bg-button-primaryErrorBg {
  background-color: var(--button-primary-error-bg) !important;
}
.bg-button-secondaryBg {
  background-color: var(--button-secondary-bg) !important;
}
.bg-button-secondaryErrorBg {
  background-color: var(--button-secondary-error-bg) !important;
}
.bg-button-tertiaryErrorFg {
  background-color: var(--button-tertiary-error-fg) !important;
}
.bg-cardbg {
  background-color: var(--card-bg) !important;
}
.bg-error-600 {
  background-color: var(--error-600) !important;
}
.bg-fg-brand-primary_alt {
  background-color: var(--fg-brand-primary_alt) !important;
}
.bg-fg-white {
  background-color: var(--fg-white) !important;
}
.bg-gray-100 {
  background-color: var(--gray-100) !important;
}
.bg-gray-200 {
  background-color: var(--gray-200) !important;
}
.bg-gray-300 {
  background-color: var(--gray-300) !important;
}
.bg-gray-50 {
  background-color: var(--gray-50) !important;
}
.bg-gray-500 {
  background-color: var(--gray-500) !important;
}
.bg-gray-900 {
  background-color: var(--gray-900) !important;
}
.bg-green-600 {
  background-color: var(--green-600) !important;
}
.bg-indigo-500 {
  background-color: var(--indigo-500) !important;
}
.bg-indigo-600 {
  background-color: var(--indigo-600) !important;
}
.bg-neutral-40 {
  background-color: var(--neutral-40) !important;
}
.bg-primary-100 {
  background-color: var(--primary-100) !important;
}
.bg-primary-50 {
  background-color: var(--primary-50) !important;
}
.bg-primary-500 {
  background-color: var(--primary-500) !important;
}
.bg-primary-600 {
  background-color: var(--primary-600) !important;
}
.bg-purple-400 {
  background-color: var(--purple-400) !important;
}
.bg-red-600 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1)) !important;
}
.bg-text-primary {
  background-color: var(--text-primary) !important;
}
.bg-text-secondary {
  background-color: var(--text-secondary) !important;
}
.bg-transparent {
  background-color: transparent !important;
}
.bg-utility-brand-50 {
  background-color: var(--utility-brand-50) !important;
}
.bg-utility-brand-500 {
  background-color: var(--utility-brand-500) !important;
}
.bg-utility-error-50 {
  background-color: var(--utility-error-50) !important;
}
.bg-utility-error-500 {
  background-color: var(--utility-error-500) !important;
}
.bg-utility-error-600 {
  background-color: var(--utility-error-600) !important;
}
.bg-utility-error-700 {
  background-color: var(--utility-error-700) !important;
}
.bg-utility-gray-200 {
  background-color: var(--utility-gray-200) !important;
}
.bg-utility-gray-50 {
  background-color: var(--utility-gray-50) !important;
}
.bg-utility-gray-500 {
  background-color: var(--utility-gray-500) !important;
}
.bg-utility-success-50 {
  background-color: var(--utility-success-50) !important;
}
.bg-utility-success-500 {
  background-color: var(--utility-success-500) !important;
}
.bg-warning-500 {
  background-color: var(--warning-500) !important;
}
.bg-white {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1)) !important;
}
.bg-white\\/50 {
  background-color: rgb(255 255 255 / 0.5) !important;
}
.bg-yellow-600 {
  background-color: var(--yellow-600) !important;
}
.bg-opacity-75 {
  --tw-bg-opacity: 0.75 !important;
}
.bg-gradient {
  background-image: linear-gradient(30deg, #AD00FE, #00E0EE) !important;
}
.bg-headerBottom {
  background-image: linear-gradient(180deg, rgba(9, 30, 66, 0.13) 0%, rgba(9, 30, 66, 0.13) 25%, rgba(9, 30, 66, 0.08) 25.01%, rgba(9, 30, 66, 0.00) 100%) !important;
}
.from-bg-primary {
  --tw-gradient-from: var(--bg-primary) var(--tw-gradient-from-position) !important;
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position) !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
}
.from-blue-500 {
  --tw-gradient-from: var(--blue-500) var(--tw-gradient-from-position) !important;
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position) !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
}
.from-pink-500 {
  --tw-gradient-from: var(--pink-500) var(--tw-gradient-from-position) !important;
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position) !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
}
.from-purple-500 {
  --tw-gradient-from: var(--purple-500) var(--tw-gradient-from-position) !important;
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position) !important;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
}
.to-pink-500 {
  --tw-gradient-to: var(--pink-500) var(--tw-gradient-to-position) !important;
}
.to-purple-500 {
  --tw-gradient-to: var(--purple-500) var(--tw-gradient-to-position) !important;
}
.to-red-500 {
  --tw-gradient-to: #ef4444 var(--tw-gradient-to-position) !important;
}
.to-transparent {
  --tw-gradient-to: transparent var(--tw-gradient-to-position) !important;
}
.fill-base-white {
  fill: #ffffff !important;
}
.fill-blue-500 {
  fill: var(--blue-500) !important;
}
.fill-error-600 {
  fill: var(--error-600) !important;
}
.fill-gray-500 {
  fill: var(--gray-500) !important;
}
.object-cover {
  -o-object-fit: cover !important;
     object-fit: cover !important;
}
.p-0 {
  padding: 0px !important;
}
.p-1 {
  padding: 0.25rem !important;
}
.p-1\\.5 {
  padding: 0.375rem !important;
}
.p-10 {
  padding: 2.5rem !important;
}
.p-2 {
  padding: 0.5rem !important;
}
.p-2\\.5 {
  padding: 0.625rem !important;
}
.p-20 {
  padding: 5rem !important;
}
.p-3 {
  padding: 0.75rem !important;
}
.p-4 {
  padding: 1rem !important;
}
.p-5 {
  padding: 1.25rem !important;
}
.p-6 {
  padding: 1.5rem !important;
}
.p-8 {
  padding: 2rem !important;
}
.p-\\[10px\\] {
  padding: 10px !important;
}
.p-\\[14px\\] {
  padding: 14px !important;
}
.p-\\[1px\\] {
  padding: 1px !important;
}
.p-\\[var\\(--spacing-lg\\2c 12px\\)_var\\(--container-padding-desktop\\2c 32px\\)\\] {
  padding: var(--spacing-lg,12px) var(--container-padding-desktop,32px) !important;
}
.p-md {
  padding: var(--spacing-md) !important;
}
.px-0 {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.px-1 {
  padding-left: 0.25rem !important;
  padding-right: 0.25rem !important;
}
.px-2 {
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important;
}
.px-2\\.5 {
  padding-left: 0.625rem !important;
  padding-right: 0.625rem !important;
}
.px-3 {
  padding-left: 0.75rem !important;
  padding-right: 0.75rem !important;
}
.px-4 {
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}
.px-6 {
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
}
.px-9 {
  padding-left: 2.25rem !important;
  padding-right: 2.25rem !important;
}
.px-\\[14px\\] {
  padding-left: 14px !important;
  padding-right: 14px !important;
}
.px-\\[18px\\] {
  padding-left: 18px !important;
  padding-right: 18px !important;
}
.px-\\[22px\\] {
  padding-left: 22px !important;
  padding-right: 22px !important;
}
.px-\\[3px\\] {
  padding-left: 3px !important;
  padding-right: 3px !important;
}
.py-0 {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
.py-0\\.5 {
  padding-top: 0.125rem !important;
  padding-bottom: 0.125rem !important;
}
.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}
.py-1\\.5 {
  padding-top: 0.375rem !important;
  padding-bottom: 0.375rem !important;
}
.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
.py-2\\.5 {
  padding-top: 0.625rem !important;
  padding-bottom: 0.625rem !important;
}
.py-3 {
  padding-top: 0.75rem !important;
  padding-bottom: 0.75rem !important;
}
.py-3\\.5 {
  padding-top: 0.875rem !important;
  padding-bottom: 0.875rem !important;
}
.py-4 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}
.py-5 {
  padding-top: 1.25rem !important;
  padding-bottom: 1.25rem !important;
}
.py-8 {
  padding-top: 2rem !important;
  padding-bottom: 2rem !important;
}
.py-\\[10px\\] {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
.py-\\[2px\\] {
  padding-top: 2px !important;
  padding-bottom: 2px !important;
}
.py-\\[8px\\] {
  padding-top: 8px !important;
  padding-bottom: 8px !important;
}
.py-xs {
  padding-top: var(--spacing-xs) !important;
  padding-bottom: var(--spacing-xs) !important;
}
.pb-0 {
  padding-bottom: 0px !important;
}
.pb-1 {
  padding-bottom: 0.25rem !important;
}
.pb-10 {
  padding-bottom: 2.5rem !important;
}
.pb-2 {
  padding-bottom: 0.5rem !important;
}
.pb-3 {
  padding-bottom: 0.75rem !important;
}
.pb-4 {
  padding-bottom: 1rem !important;
}
.pb-6 {
  padding-bottom: 1.5rem !important;
}
.pb-8 {
  padding-bottom: 2rem !important;
}
.pl-1 {
  padding-left: 0.25rem !important;
}
.pl-10 {
  padding-left: 2.5rem !important;
}
.pl-2 {
  padding-left: 0.5rem !important;
}
.pl-2\\.5 {
  padding-left: 0.625rem !important;
}
.pl-3 {
  padding-left: 0.75rem !important;
}
.pl-4 {
  padding-left: 1rem !important;
}
.pl-6 {
  padding-left: 1.5rem !important;
}
.pl-7 {
  padding-left: 1.75rem !important;
}
.pl-8 {
  padding-left: 2rem !important;
}
.pl-\\[90px\\] {
  padding-left: 90px !important;
}
.pr-1 {
  padding-right: 0.25rem !important;
}
.pr-10 {
  padding-right: 2.5rem !important;
}
.pr-12 {
  padding-right: 3rem !important;
}
.pr-16 {
  padding-right: 4rem !important;
}
.pr-2 {
  padding-right: 0.5rem !important;
}
.pr-20 {
  padding-right: 5rem !important;
}
.pr-3 {
  padding-right: 0.75rem !important;
}
.pr-4 {
  padding-right: 1rem !important;
}
.pr-5 {
  padding-right: 1.25rem !important;
}
.pr-9 {
  padding-right: 2.25rem !important;
}
.pt-0 {
  padding-top: 0px !important;
}
.pt-1\\.5 {
  padding-top: 0.375rem !important;
}
.pt-2 {
  padding-top: 0.5rem !important;
}
.pt-2\\.5 {
  padding-top: 0.625rem !important;
}
.pt-20 {
  padding-top: 5rem !important;
}
.pt-3 {
  padding-top: 0.75rem !important;
}
.pt-4 {
  padding-top: 1rem !important;
}
.pt-5 {
  padding-top: 1.25rem !important;
}
.pt-\\[20vh\\] {
  padding-top: 20vh !important;
}
.pt-\\[2px\\] {
  padding-top: 2px !important;
}
.text-left {
  text-align: left !important;
}
.text-center {
  text-align: center !important;
}
.text-right {
  text-align: right !important;
}
.align-middle {
  vertical-align: middle !important;
}
.text-2xl {
  font-size: 1.5rem !important;
  line-height: 2rem !important;
}
.text-3xl {
  font-size: 1.875rem !important;
  line-height: 2.25rem !important;
}
.text-4xl {
  font-size: 2.25rem !important;
  line-height: 2.5rem !important;
}
.text-5xl {
  font-size: 3rem !important;
  line-height: 1 !important;
}
.text-6xl {
  font-size: 3.75rem !important;
  line-height: 1 !important;
}
.text-7xl {
  font-size: 4.5rem !important;
  line-height: 1 !important;
}
.text-8xl {
  font-size: 6rem !important;
  line-height: 1 !important;
}
.text-9xl {
  font-size: 8rem !important;
  line-height: 1 !important;
}
.text-\\[10px\\] {
  font-size: 10px !important;
}
.text-base {
  font-size: 1rem !important;
  line-height: 1.5rem !important;
}
.text-lg {
  font-size: 1.125rem !important;
  line-height: 1.75rem !important;
}
.text-sm {
  font-size: 0.875rem !important;
  line-height: 1.25rem !important;
}
.text-xl {
  font-size: 1.25rem !important;
  line-height: 1.75rem !important;
}
.text-xs {
  font-size: 0.75rem !important;
  line-height: 1rem !important;
}
.text-xxs {
  font-size: 10px !important;
}
.font-black {
  font-weight: 900 !important;
}
.font-bold {
  font-weight: 700 !important;
}
.font-extrabold {
  font-weight: 800 !important;
}
.font-extralight {
  font-weight: 200 !important;
}
.font-light {
  font-weight: 300 !important;
}
.font-medium {
  font-weight: 500 !important;
}
.font-normal {
  font-weight: 400 !important;
}
.font-semibold {
  font-weight: 600 !important;
}
.font-thin {
  font-weight: 100 !important;
}
.uppercase {
  text-transform: uppercase !important;
}
.italic {
  font-style: italic !important;
}
.not-italic {
  font-style: normal !important;
}
.leading-3 {
  line-height: .75rem !important;
}
.leading-6 {
  line-height: 1.5rem !important;
}
.leading-7 {
  line-height: 1.75rem !important;
}
.leading-none {
  line-height: 1 !important;
}
.tracking-\\[0\\.18px\\] {
  letter-spacing: 0.18px !important;
}
.text-N-0 {
  color: var(--N-0) !important;
}
.text-\\[\\#57606A\\] {
  --tw-text-opacity: 1 !important;
  color: rgb(87 96 106 / var(--tw-text-opacity, 1)) !important;
}
.text-\\[\\#6E7781\\] {
  --tw-text-opacity: 1 !important;
  color: rgb(110 119 129 / var(--tw-text-opacity, 1)) !important;
}
.text-baseBlack {
  color: var(--base-black) !important;
}
.text-bg-brand-solid {
  color: var(--bg-brand-solid) !important;
}
.text-bg-success-solid {
  color: var(--bg-success-solid) !important;
}
.text-blue-600 {
  color: var(--blue-600) !important;
}
.text-blue-700 {
  color: var(--blue-700) !important;
}
.text-button-primaryFg {
  color: var(--button-primary-fg) !important;
}
.text-button-secondaryErrorFg {
  color: var(--button-secondary-error-fg) !important;
}
.text-button-secondaryFg {
  color: var(--button-secondary-fg) !important;
}
.text-button-tertiaryColorFg {
  color: var(--button-tertiary-color-fg) !important;
}
.text-button-tertiaryErrorFg {
  color: var(--button-tertiary-error-fg) !important;
}
.text-button-tertiaryFg {
  color: var(--button-tertiary-fg) !important;
}
.text-error-600 {
  color: var(--error-600) !important;
}
.text-error-700 {
  color: var(--error-700) !important;
}
.text-fg-disabled {
  color: var(--fg-disabled) !important;
}
.text-fg-nav_icon {
  color: var(--nav-item-icon-fg) !important;
}
.text-fg-quaternary {
  color: var(--fg-quaternary) !important;
}
.text-fg-secondary {
  color: var(--fg-secondary) !important;
}
.text-fg-tertiary {
  color: var(--fg-tertiary) !important;
}
.text-gray-400 {
  color: var(--gray-400) !important;
}
.text-gray-500 {
  color: var(--gray-500) !important;
}
.text-gray-600 {
  color: var(--gray-600) !important;
}
.text-gray-700 {
  color: var(--gray-700) !important;
}
.text-indigo-600 {
  color: var(--indigo-600) !important;
}
.text-neutral-500 {
  color: var(--neutral-500) !important;
}
.text-primary-600 {
  color: var(--primary-600) !important;
}
.text-primary-700 {
  color: var(--primary-700) !important;
}
.text-red-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(239 68 68 / var(--tw-text-opacity, 1)) !important;
}
.text-secondary-700 {
  color: var(--secondary-700) !important;
}
.text-subtlest {
  color: var(--text-subtlest) !important;
}
.text-surface-white {
  color: var(--surface-fg-white) !important;
}
.text-tert-600 {
  color: var(--tertiary-600) !important;
}
.text-text-brand-secondary {
  color: var(--text-brand-secondary) !important;
}
.text-text-disabled {
  color: var(--text-disabled) !important;
}
.text-text-error-primary {
  color: var(--text-error-primary) !important;
}
.text-text-placeholder {
  color: var(--text-placeholder) !important;
}
.text-text-primary {
  color: var(--text-primary) !important;
}
.text-text-quaternary {
  color: var(--text-quaternary) !important;
}
.text-text-secondary {
  color: var(--text-secondary) !important;
}
.text-text-success-primary {
  color: var(--text-success-primary) !important;
}
.text-text-tertiary {
  color: var(--text-tertiary) !important;
}
.text-text-warning-primary {
  color: var(--text-warning-primary) !important;
}
.text-text-white {
  color: var(--text-white) !important;
}
.text-utility-brand-700 {
  color: var(--utility-brand-700) !important;
}
.text-utility-error-600 {
  color: var(--utility-error-600) !important;
}
.text-utility-error-700 {
  color: var(--utility-error-700) !important;
}
.text-utility-gray-700 {
  color: var(--utility-gray-700) !important;
}
.text-utility-pink-600 {
  color: var(--utility-pink-600) !important;
}
.text-utility-success-700 {
  color: var(--utility-success-700) !important;
}
.text-white {
  --tw-text-opacity: 1 !important;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1)) !important;
}
.underline {
  text-decoration-line: underline !important;
}
.line-through {
  text-decoration-line: line-through !important;
}
.no-underline {
  text-decoration-line: none !important;
}
.placeholder-text-placeholder::-moz-placeholder {
  color: var(--text-placeholder) !important;
}
.placeholder-text-placeholder::placeholder {
  color: var(--text-placeholder) !important;
}
.opacity-0 {
  opacity: 0 !important;
}
.opacity-100 {
  opacity: 1 !important;
}
.opacity-50 {
  opacity: 0.5 !important;
}
.opacity-70 {
  opacity: 0.7 !important;
}
.shadow-2xl {
  --tw-shadow: var(--shadow-2xl) !important;
  --tw-shadow-colored: var(--shadow-2xl) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}
.shadow-3xl {
  --tw-shadow: var(--shadow-3xl) !important;
  --tw-shadow-colored: var(--shadow-3xl) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}
.shadow-boxShadowBlack {
  --tw-shadow: 0px 0 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) !important;
  --tw-shadow-colored: 0px 0 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}
.shadow-boxShadowFilter {
  --tw-shadow: rgb(204, 204, 204) 1px 1px 1px 1px !important;
  --tw-shadow-colored: 1px 1px 1px 1px var(--tw-shadow-color) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}
.shadow-lg {
  --tw-shadow: var(--shadow-lg) !important;
  --tw-shadow-colored: var(--shadow-lg) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}
.shadow-md {
  --tw-shadow: var(--shadow-md) !important;
  --tw-shadow-colored: var(--shadow-md) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}
.shadow-sm {
  --tw-shadow: var(--shadow-sm) !important;
  --tw-shadow-colored: var(--shadow-sm) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}
.shadow-xl {
  --tw-shadow: var(--shadow-xl) !important;
  --tw-shadow-colored: var(--shadow-xl) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}
.shadow-xs {
  --tw-shadow: var(--shadow-xs) !important;
  --tw-shadow-colored: var(--shadow-xs) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}
.outline-none {
  outline: 2px solid transparent !important;
  outline-offset: 2px !important;
}
.ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
}
.ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
}
.ring-blue-500 {
  --tw-ring-color: var(--blue-500) !important;
}
.ring-border-brand_solid {
  --tw-ring-color: var(--border-brand_solid) !important;
}
.ring-offset-2 {
  --tw-ring-offset-width: 2px !important;
}
.ring-offset-white {
  --tw-ring-offset-color: #fff !important;
}
.blur {
  --tw-blur: blur(8px) !important;
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
}
.backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px) !important;
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia) !important;
}
.backdrop-filter {
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia) !important;
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  transition-duration: 150ms !important;
}
.transition-all {
  transition-property: all !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  transition-duration: 150ms !important;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  transition-duration: 150ms !important;
}
.transition-opacity {
  transition-property: opacity !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  transition-duration: 150ms !important;
}
.transition-transform {
  transition-property: transform !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  transition-duration: 150ms !important;
}
.duration-100 {
  transition-duration: 100ms !important;
}
.duration-200 {
  transition-duration: 200ms !important;
}
.duration-300 {
  transition-duration: 300ms !important;
}
.duration-500 {
  transition-duration: 500ms !important;
}
.duration-75 {
  transition-duration: 75ms !important;
}
.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1) !important;
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1) !important;
}
.scrollbar::-webkit-scrollbar-track {
  background-color: var(--scrollbar-track) !important;
  border-radius: var(--scrollbar-track-radius) !important;
}
.scrollbar::-webkit-scrollbar-track:hover {
  background-color: var(--scrollbar-track-hover, var(--scrollbar-track)) !important;
}
.scrollbar::-webkit-scrollbar-track:active {
  background-color: var(--scrollbar-track-active, var(--scrollbar-track-hover, var(--scrollbar-track))) !important;
}
.scrollbar::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb) !important;
  border-radius: var(--scrollbar-thumb-radius) !important;
}
.scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: var(--scrollbar-thumb-hover, var(--scrollbar-thumb)) !important;
}
.scrollbar::-webkit-scrollbar-thumb:active {
  background-color: var(--scrollbar-thumb-active, var(--scrollbar-thumb-hover, var(--scrollbar-thumb))) !important;
}
.scrollbar::-webkit-scrollbar-corner {
  background-color: var(--scrollbar-corner) !important;
  border-radius: var(--scrollbar-corner-radius) !important;
}
.scrollbar::-webkit-scrollbar-corner:hover {
  background-color: var(--scrollbar-corner-hover, var(--scrollbar-corner)) !important;
}
.scrollbar::-webkit-scrollbar-corner:active {
  background-color: var(--scrollbar-corner-active, var(--scrollbar-corner-hover, var(--scrollbar-corner))) !important;
}
.scrollbar {
  scrollbar-width: auto !important;
  scrollbar-color: var(--scrollbar-thumb, initial) var(--scrollbar-track, initial) !important;
}
.scrollbar::-webkit-scrollbar {
  display: block !important;
  width: var(--scrollbar-width, 16px) !important;
  height: var(--scrollbar-height, 16px) !important;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background-color: var(--scrollbar-track) !important;
  border-radius: var(--scrollbar-track-radius) !important;
}
.scrollbar-thin::-webkit-scrollbar-track:hover {
  background-color: var(--scrollbar-track-hover, var(--scrollbar-track)) !important;
}
.scrollbar-thin::-webkit-scrollbar-track:active {
  background-color: var(--scrollbar-track-active, var(--scrollbar-track-hover, var(--scrollbar-track))) !important;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb) !important;
  border-radius: var(--scrollbar-thumb-radius) !important;
}
.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background-color: var(--scrollbar-thumb-hover, var(--scrollbar-thumb)) !important;
}
.scrollbar-thin::-webkit-scrollbar-thumb:active {
  background-color: var(--scrollbar-thumb-active, var(--scrollbar-thumb-hover, var(--scrollbar-thumb))) !important;
}
.scrollbar-thin::-webkit-scrollbar-corner {
  background-color: var(--scrollbar-corner) !important;
  border-radius: var(--scrollbar-corner-radius) !important;
}
.scrollbar-thin::-webkit-scrollbar-corner:hover {
  background-color: var(--scrollbar-corner-hover, var(--scrollbar-corner)) !important;
}
.scrollbar-thin::-webkit-scrollbar-corner:active {
  background-color: var(--scrollbar-corner-active, var(--scrollbar-corner-hover, var(--scrollbar-corner))) !important;
}
.scrollbar-thin {
  scrollbar-width: thin !important;
  scrollbar-color: var(--scrollbar-thumb, initial) var(--scrollbar-track, initial) !important;
}
.scrollbar-thin::-webkit-scrollbar {
  display: block !important;
  width: 8px !important;
  height: 8px !important;
}
.scrollbar-track-bg-primary {
  --scrollbar-track: var(--bg-primary) !important;
}
.scrollbar-thumb-bg-quaternary {
  --scrollbar-thumb: var(--bg-quaternary) !important;
}
.scrollbar-thumb-border-secondary {
  --scrollbar-thumb: var(--border-secondary) !important;
}
.scrollbar-corner-bg-quaternary {
  --scrollbar-corner: var(--bg-quaternary) !important;
}
/* Add this to your CSS file if not using Tailwind */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

.first\\:rounded-t-lg:first-child {
  border-top-left-radius: var(--radius-lg) !important;
  border-top-right-radius: var(--radius-lg) !important;
}

.last\\:border-b-0:last-child {
  border-bottom-width: 0 !important;
}

@media (hover: hover) and (pointer: fine) {

  .group:hover .group-hover\\:bg-bg-primary_hover {
    background-color: var(--bg-primary_hover) !important;
  }

  .group:hover .group-hover\\:bg-transparent {
    background-color: transparent !important;
  }

  .group:hover .group-hover\\:text-fg-quaternary_hover {
    color: var(--fg-quaternary_hover) !important;
  }
}

.data-\\[checked\\]\\:z-10[data-checked] {
  z-index: 10 !important;
}

.data-\\[checked\\]\\:border-indigo-200[data-checked] {
  border-color: var(--indigo-200) !important;
}

.data-\\[checked\\]\\:bg-indigo-50[data-checked] {
  background-color: var(--indigo-50) !important;
}

.group[data-checked] .group-data-\\[checked\\]\\:border-transparent {
  border-color: transparent !important;
}

.group[data-checked] .group-data-\\[checked\\]\\:bg-indigo-600 {
  background-color: var(--indigo-600) !important;
}

.group[data-checked] .group-data-\\[checked\\]\\:text-indigo-700 {
  color: var(--indigo-700) !important;
}

.group[data-checked] .group-data-\\[checked\\]\\:text-indigo-900 {
  color: var(--indigo-900) !important;
}

.group[data-focus] .group-data-\\[focus\\]\\:ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
}

.group[data-focus] .group-data-\\[focus\\]\\:ring-indigo-600 {
  --tw-ring-color: var(--indigo-600) !important;
}

.group[data-focus] .group-data-\\[focus\\]\\:ring-offset-2 {
  --tw-ring-offset-width: 2px !important;
}

@media (hover: hover) and (pointer: fine) {

  .hover\\:scale-110:hover {
    --tw-scale-x: 1.1 !important;
    --tw-scale-y: 1.1 !important;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
  }

  .hover\\:border-button-primaryBorderHover:hover {
    border-color: var(--button-primary-border_hover) !important;
  }

  .hover\\:border-button-primaryErrorBorderHover:hover {
    border-color: var(--button-primary-error-border_hover) !important;
  }

  .hover\\:border-button-secondaryBorderHover:hover {
    border-color: var(--button-secondary-border_hover) !important;
  }

  .hover\\:border-button-secondaryErrorBorderHover:hover {
    border-color: var(--button-secondary-error-border_hover) !important;
  }

  .hover\\:bg-bg-active:hover {
    background-color: var(--bg-active) !important;
  }

  .hover\\:bg-bg-primary_hover:hover {
    background-color: var(--bg-primary_hover) !important;
  }

  .hover\\:bg-bg-secondary:hover {
    background-color: var(--bg-secondary) !important;
  }

  .hover\\:bg-bg-secondary_hover:hover {
    background-color: var(--bg-secondary_hover) !important;
  }

  .hover\\:bg-blue-50:hover {
    background-color: var(--blue-50) !important;
  }

  .hover\\:bg-blue-700:hover {
    background-color: var(--blue-700) !important;
  }

  .hover\\:bg-border-primary:hover {
    background-color: var(--border-primary) !important;
  }

  .hover\\:bg-button-primaryBgHover:hover {
    background-color: var(--button-primary-bg_hover) !important;
  }

  .hover\\:bg-button-primaryErrorBgHover:hover {
    background-color: var(--button-primary-error-bg_hover) !important;
  }

  .hover\\:bg-button-secondaryBgHover:hover {
    background-color: var(--button-secondary-bg_hover) !important;
  }

  .hover\\:bg-button-secondaryErrorBgHover:hover {
    background-color: var(--button-secondary-error-bg_hover) !important;
  }

  .hover\\:bg-button-tertiaryBgHover:hover {
    background-color: var(--button-tertiary-bg_hover) !important;
  }

  .hover\\:bg-button-tertiaryErrorBgHover:hover {
    background-color: var(--button-tertiary-error-bg_hover) !important;
  }

  .hover\\:bg-cardbg:hover {
    background-color: var(--card-bg) !important;
  }

  .hover\\:bg-error-100:hover {
    background-color: var(--error-100) !important;
  }

  .hover\\:bg-error-50:hover {
    background-color: var(--error-50) !important;
  }

  .hover\\:bg-error-700:hover {
    background-color: var(--error-700) !important;
  }

  .hover\\:bg-gray-200:hover {
    background-color: var(--gray-200) !important;
  }

  .hover\\:bg-primary-100:hover {
    background-color: var(--primary-100) !important;
  }

  .hover\\:bg-primary-500:hover {
    background-color: var(--primary-500) !important;
  }

  .hover\\:bg-white:hover {
    --tw-bg-opacity: 1 !important;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1)) !important;
  }

  .hover\\:bg-white\\/75:hover {
    background-color: rgb(255 255 255 / 0.75) !important;
  }

  .hover\\:bg-gradient:hover {
    background-image: linear-gradient(30deg, #AD00FE, #00E0EE) !important;
  }

  .hover\\:text-button-primaryFgHover:hover {
    color: var(--button-primary-fg_hover) !important;
  }

  .hover\\:text-button-secondaryErrorFgHover:hover {
    color: var(--button-secondary-error-fg_hover) !important;
  }

  .hover\\:text-button-secondaryFgHover:hover {
    color: var(--button-secondary-fg_hover) !important;
  }

  .hover\\:text-button-tertiaryErrorFgHover:hover {
    color: var(--button-tertiary-error-fg_hover) !important;
  }

  .hover\\:text-button-tertiaryFgHover:hover {
    color: var(--button-tertiary-fg_hover) !important;
  }

  .hover\\:text-text-primary:hover {
    color: var(--text-primary) !important;
  }

  .hover\\:text-text-secondary:hover {
    color: var(--text-secondary) !important;
  }

  .hover\\:text-text-tertiary_hover:hover {
    color: var(--text-tertiary_hover) !important;
  }

  .hover\\:text-text-white:hover {
    color: var(--text-white) !important;
  }

  .hover\\:underline:hover {
    text-decoration-line: underline !important;
  }

  .hover\\:opacity-90:hover {
    opacity: 0.9 !important;
  }
}

.focus\\:border-border-brand:focus {
  border-color: var(--border-brand) !important;
}

.focus\\:border-transparent:focus {
  border-color: transparent !important;
}

.focus\\:bg-blue-600:focus {
  background-color: var(--blue-600) !important;
}

.focus\\:bg-error-600:focus {
  background-color: var(--error-600) !important;
}

.focus\\:outline-none:focus {
  outline: 2px solid transparent !important;
  outline-offset: 2px !important;
}

.focus\\:ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
}

.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
}

.focus\\:ring-4:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
}

.focus\\:ring-bg-secondary_hover:focus {
  --tw-ring-color: var(--bg-secondary_hover) !important;
}

.focus\\:ring-blue-400:focus {
  --tw-ring-color: var(--blue-400) !important;
}

.focus\\:ring-brand-300:focus {
  --tw-ring-color: var(--brand-300) !important;
}

.focus\\:ring-button-ringBrandShadowSm:focus {
  --tw-ring-color: var(--ring-brand-shadow-sm) !important;
}

.focus\\:ring-button-ringErrorShadowSm:focus {
  --tw-ring-color: var(--ring-error-shadow-sm) !important;
}

.focus\\:ring-button-ringGrayShadowSm:focus {
  --tw-ring-color: var(--ring-gray-shadow-sm) !important;
}

.focus\\:ring-error-400:focus {
  --tw-ring-color: var(--error-400) !important;
}

.focus\\:ring-gray-300:focus {
  --tw-ring-color: var(--gray-300) !important;
}

.focus\\:ring-gray-400:focus {
  --tw-ring-color: var(--gray-400) !important;
}

.focus\\:ring-primary-500:focus {
  --tw-ring-color: var(--primary-500) !important;
}

.focus\\:ring-white:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity, 1)) !important;
}

.focus\\:ring-offset-0:focus {
  --tw-ring-offset-width: 0px !important;
}

.focus\\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px !important;
}

.active\\:scale-95:active {
  --tw-scale-x: .95 !important;
  --tw-scale-y: .95 !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.active\\:cursor-grabbing:active {
  cursor: grabbing !important;
}

.disabled\\:cursor-not-allowed:disabled {
  cursor: not-allowed !important;
}

.disabled\\:opacity-50:disabled {
  opacity: 0.5 !important;
}

@media (min-width: 0px) {

  .df\\:w-full {
    width: 100% !important;
  }
}

@media (min-width: 640px) {

  .sm\\:not-sr-only {
    position: static !important;
    width: auto !important;
    height: auto !important;
    padding: 0 !important;
    margin: 0 !important;
    overflow: visible !important;
    clip: auto !important;
    white-space: normal !important;
  }

  .sm\\:text-sm {
    font-size: 0.875rem !important;
    line-height: 1.25rem !important;
  }

  .sm\\:leading-6 {
    line-height: 1.5rem !important;
  }
}

@media (min-width: 768px) {

  .md\\:h-\\[496px\\] {
    height: 496px !important;
  }

  .md\\:w-\\[400px\\] {
    width: 400px !important;
  }

  .md\\:w-\\[480px\\] {
    width: 480px !important;
  }

  .md\\:w-\\[500px\\] {
    width: 500px !important;
  }

  .md\\:w-\\[800px\\] {
    width: 800px !important;
  }

  .md\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  }

  .md\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
  }

  .md\\:items-stretch {
    align-items: stretch !important;
  }

  .md\\:divide-x > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-x-reverse: 0 !important;
    border-right-width: calc(1px * var(--tw-divide-x-reverse)) !important;
    border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse))) !important;
  }

  .md\\:divide-gray-200 > :not([hidden]) ~ :not([hidden]) {
    border-color: var(--gray-200) !important;
  }

  .md\\:rounded-md {
    border-radius: var(--radius-md) !important;
  }

  .md\\:p-4 {
    padding: 1rem !important;
  }

  .md\\:px-8 {
    padding-left: 2rem !important;
    padding-right: 2rem !important;
  }
}

@media (min-width: 1024px) {

  .lg\\:flex {
    display: flex !important;
  }

  .lg\\:hidden {
    display: none !important;
  }

  .lg\\:h-full {
    height: 100% !important;
  }

  .lg\\:flex-col {
    flex-direction: column !important;
  }
}

.dark\\:divide-\\[\\#21262D\\]:where(.dark, .dark *) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1 !important;
  border-color: rgb(33 38 45 / var(--tw-divide-opacity, 1)) !important;
}

.dark\\:border-\\[\\#21262D\\]:where(.dark, .dark *) {
  --tw-border-opacity: 1 !important;
  border-color: rgb(33 38 45 / var(--tw-border-opacity, 1)) !important;
}

.dark\\:bg-\\[\\#0D1117\\]:where(.dark, .dark *) {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(13 17 23 / var(--tw-bg-opacity, 1)) !important;
}

.dark\\:bg-slate-400:where(.dark, .dark *) {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(148 163 184 / var(--tw-bg-opacity, 1)) !important;
}

.dark\\:bg-slate-600:where(.dark, .dark *) {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(71 85 105 / var(--tw-bg-opacity, 1)) !important;
}

.dark\\:bg-slate-800:where(.dark, .dark *) {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1)) !important;
}

.dark\\:text-slate-300:where(.dark, .dark *) {
  --tw-text-opacity: 1 !important;
  color: rgb(203 213 225 / var(--tw-text-opacity, 1)) !important;
}

.dark\\:text-white:where(.dark, .dark *) {
  --tw-text-opacity: 1 !important;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1)) !important;
}

.dark\\:brightness-50:where(.dark, .dark *) {
  --tw-brightness: brightness(.5) !important;
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
}

.dark\\:filter:where(.dark, .dark *) {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
}`,""]),module.exports=exports},"./src/assets/icons/DisabledSendAIPromptIcon.svg":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/DisabledSendAIPromptIcon.52eea591.svg"},"./src/assets/icons/DisabledSendAIPromptIconDark.svg":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/DisabledSendAIPromptIconDark.00f0b470.svg"},"./src/assets/icons/SendAIPromptIcon.svg":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/SendAIPromptIcon.71765d7f.svg"},"./src/assets/icons/calIcon.svg":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/calIcon.8dfca2ef.svg"},"./src/assets/icons/close-sm.svg":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/close-sm.167117aa.svg"},"./src/assets/icons/close.svg":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/close.390561d6.svg"},"./src/assets/icons/newSideNav/chevronDown.svg":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/chevronDown.fd1b2115.svg"},"./src/assets/icons/picture.svg":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/picture.a2cdd842.svg"},"./src/assets/icons/star.svg":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/star.849895f1.svg"},"./src/assets/icons/tripleDot.svg":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/tripleDot.9fae1cfd.svg"},"./src/components/Accordion/Accordion.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>Accordion});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var Accordion=function(param){var items=param.items,_param_allowMultiple=param.allowMultiple,allowMultiple=void 0!==_param_allowMultiple&&_param_allowMultiple,onToggle=param.onToggle,_param_className=param.className,_param_variant=param.variant,variant=void 0===_param_variant?"default":_param_variant,_param_testId=param.testId,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set(items.filter(function(item){return item.defaultOpen}).map(function(item){return item.id}))),2),openItems=_useState[0],setOpenItems=_useState[1],handleToggle=function(itemId){var item=items.find(function(i){return i.id===itemId});null!=item&&item.disabled||setOpenItems(function(prev){var isOpen=prev.has(itemId),newSet=new Set(prev);return allowMultiple?isOpen?newSet.delete(itemId):newSet.add(itemId):isOpen?newSet.delete(itemId):(newSet.clear(),newSet.add(itemId)),null==onToggle||onToggle(itemId,!isOpen),newSet})};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({default:"space-y-2",bordered:"space-y-2 border border-border-secondary rounded-lg overflow-hidden",separated:"space-y-4"}[variant],void 0===_param_className?"":_param_className),"data-testid":void 0===_param_testId?"accordion":_param_testId},items.map(function(item){var _item_disabled,isOpen=openItems.has(item.id),isDisabled=null!=(_item_disabled=item.disabled)&&_item_disabled;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:item.id,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("overflow-hidden","bordered"===variant&&"border-b border-border-secondary last:border-b-0")},react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:function(){return handleToggle(item.id)},disabled:isDisabled,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-full flex items-center justify-between p-4 text-left transition-colors","hover:bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-primary-500",{"opacity-50 cursor-not-allowed":isDisabled,"bg-bg-secondary":isOpen}),"aria-expanded":isOpen,"aria-disabled":isDisabled},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex-1"},item.header),react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-5 h-5 text-text-quaternary transition-transform duration-200",{"transform rotate-180":isOpen}),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__.N,null,isOpen&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.P.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"overflow-hidden"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"p-4 pt-0 text-text-secondary"},item.content))))}))};try{Accordion.displayName="Accordion",Accordion.__docgenInfo={description:`Accordion - Collapsible content sections
Perfect for FAQs, expandable sections, and nested navigation`,displayName:"Accordion",props:{items:{defaultValue:null,description:"Array of accordion items",name:"items",required:!0,type:{name:"AccordionItem[]"}},allowMultiple:{defaultValue:{value:"false"},description:"Whether multiple items can be open at once",name:"allowMultiple",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"Callback when item is toggled",name:"onToggle",required:!1,type:{name:"((itemId: string, isOpen: boolean) => void)"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:"Variant style",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"bordered"'},{value:'"separated"'}]}},testId:{defaultValue:{value:"accordion"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:Accordion.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ActionSheet/ActionSheet.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>ActionSheet});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_MobileSheet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/MobileSheet/index.ts"),ActionSheet=function(param){var open=param.open,onClose=param.onClose,actions=param.actions,_param_cancelLabel=param.cancelLabel,title=param.title,_param_testId=param.testId,handleAction=function(action){action.disabled||(action.onAction(),onClose())};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MobileSheet__WEBPACK_IMPORTED_MODULE_2__.C,{open:open,onClose:onClose,snapPoints:[.5],dismissible:!0,testId:void 0===_param_testId?"action-sheet":_param_testId},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"pb-4"},title&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"px-4 py-3 border-b border-border-secondary"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",{className:"text-sm font-semibold text-text-primary"},title)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"py-2"},actions.map(function(action,index){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{key:index,onClick:function(){return handleAction(action)},disabled:action.disabled,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-full px-4 py-3 text-left flex items-center gap-3","transition-colors",action.destructive?"text-error-600 hover:bg-error-50":"text-text-primary hover:bg-bg-secondary",action.disabled&&"opacity-50 cursor-not-allowed")},action.icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"flex-shrink-0"},"string"==typeof action.icon?react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:action.icon,alt:"",className:"w-5 h-5"}):action.icon),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"font-medium"},action.label))})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"px-4 pt-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:onClose,className:"w-full py-3 text-center font-semibold text-text-primary bg-bg-secondary rounded-lg hover:bg-bg-secondary_hover transition-colors"},void 0===_param_cancelLabel?"Cancel":_param_cancelLabel))))};try{ActionSheet.displayName="ActionSheet",ActionSheet.__docgenInfo={description:`ActionSheet - Native mobile action sheet pattern
Displays actions in a bottom sheet with cancel option`,displayName:"ActionSheet",props:{open:{defaultValue:null,description:"Whether the action sheet is open",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback when sheet should close",name:"onClose",required:!0,type:{name:"() => void"}},actions:{defaultValue:null,description:"Action items to display",name:"actions",required:!0,type:{name:"ActionSheetItem[]"}},cancelLabel:{defaultValue:{value:"Cancel"},description:"Cancel button label",name:"cancelLabel",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Title of the action sheet",name:"title",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"action-sheet"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ActionSheet/ActionSheet.tsx#ActionSheet"]={docgenInfo:ActionSheet.__docgenInfo,name:"ActionSheet",path:"src/components/ActionSheet/ActionSheet.tsx#ActionSheet"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/AlCreditsCard/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>AlCreditsCard});var react=__webpack_require__("../node_modules/react/index.js"),ProgressCircle=function(param){var radius=param.radius,stroke=param.stroke,normalizedRadius=param.normalizedRadius,circumference=param.circumference,strokeDashoffset=param.strokeDashoffset,usedCredits=param.usedCredits;return react.createElement(react.Fragment,null,react.createElement("div",{className:"flex items-center w-fit justify-center rounded-full text-text-primary text-2xl font-semibold"},react.createElement("svg",{height:2*radius,width:2*radius,className:"transform -rotate-90"},react.createElement("circle",{stroke:"var(--border-disabled_subtle)",fill:"transparent",strokeWidth:stroke,r:normalizedRadius,cx:radius,cy:radius}),react.createElement("circle",{stroke:"var(--bg-brand-solid)",fill:"transparent",strokeWidth:stroke,strokeDasharray:circumference+" "+circumference,style:{strokeDashoffset:strokeDashoffset,strokeLinecap:"round"},r:normalizedRadius,cx:radius,cy:radius})),react.createElement("div",{className:"absolute text-center text-2xl"},usedCredits)))};try{ProgressCircle.displayName="ProgressCircle",ProgressCircle.__docgenInfo={description:"",displayName:"ProgressCircle",props:{radius:{defaultValue:null,description:"",name:"radius",required:!0,type:{name:"number"}},stroke:{defaultValue:null,description:"",name:"stroke",required:!0,type:{name:"number"}},normalizedRadius:{defaultValue:null,description:"",name:"normalizedRadius",required:!0,type:{name:"number"}},circumference:{defaultValue:null,description:"",name:"circumference",required:!0,type:{name:"number"}},strokeDashoffset:{defaultValue:null,description:"",name:"strokeDashoffset",required:!0,type:{name:"number"}},usedCredits:{defaultValue:null,description:"",name:"usedCredits",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AlCreditsCard/ProgressCircle.tsx#ProgressCircle"]={docgenInfo:ProgressCircle.__docgenInfo,name:"ProgressCircle",path:"src/components/AlCreditsCard/ProgressCircle.tsx#ProgressCircle"})}catch(__react_docgen_typescript_loader_error){}var AlCreditsCard=function(param){var title=param.title,description=param.description,totalCredits=param.totalCredits,usedCredits=param.usedCredits,button=param.button,isExpended=param.isExpended,_param_showProgressCircle=param.showProgressCircle,circumference=46*Math.PI,strokeDashoffset=circumference-usedCredits/totalCredits*100/100*circumference;return react.createElement(react.Fragment,null,isExpended?react.createElement("div",{className:"flex flex-col bg-bg-primary hover:bg-bg-secondary p-4 rounded-4xl w-full"},react.createElement("div",{className:"flex gap-1 items-center -mt-4 -ml-4"},react.createElement("div",null,react.createElement(ProgressCircle,{radius:35,stroke:6,normalizedRadius:23,circumference:circumference,strokeDashoffset:strokeDashoffset,usedCredits:usedCredits})),react.createElement("div",{className:"flex flex-col gap-1"},react.createElement("span",{className:"text-text-primary text-sm font-semibold"},title),react.createElement("span",{className:"text-text-secondary text-xs font-regular"},description))),react.createElement("div",{className:"flex justify-end -mt-3"},button)):void 0!==_param_showProgressCircle&&_param_showProgressCircle?react.createElement(ProgressCircle,{radius:35,stroke:6,normalizedRadius:23,circumference:circumference,strokeDashoffset:strokeDashoffset,usedCredits:usedCredits}):react.createElement("div",{className:"text-text-primary text-2xl w-12 h-12 font-semibold bg-bg-secondary rounded-full flex items-center justify-center"},usedCredits))};try{AlCreditsCard.displayName="AlCreditsCard",AlCreditsCard.__docgenInfo={description:"",displayName:"AlCreditsCard",props:{totalCredits:{defaultValue:null,description:"",name:"totalCredits",required:!0,type:{name:"number"}},usedCredits:{defaultValue:null,description:"",name:"usedCredits",required:!0,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"ReactNode"}},isExpended:{defaultValue:null,description:"",name:"isExpended",required:!0,type:{name:"boolean"}},showProgressCircle:{defaultValue:{value:"false"},description:"",name:"showProgressCircle",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AlCreditsCard/AlCreditsCard.tsx#AlCreditsCard"]={docgenInfo:AlCreditsCard.__docgenInfo,name:"AlCreditsCard",path:"src/components/AlCreditsCard/AlCreditsCard.tsx#AlCreditsCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Alert/Alert.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>Alert});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Icons/Icons.tsx"),Alert=function(param){var message=param.message,onClose=param.onClose,actionDiv=param.actionDiv,alertType=param.alertType,messageColor=param.messageColor,backgroundColor=param.backgroundColor,messageText=param.messageText,_param_showCloseButton=param.showCloseButton;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex w-full  h-11  justify-center items-center ".concat({error:"bg-button-tertiaryErrorFg",warning:"bg-bg-warning-solid",info:"bg-bg-brand-solid",success:"bg-bg-success-solid",transparent:"",primary:"bg-bg-brand-solid",default:"bg-bg-primary-solid",custom:backgroundColor}[alertType])},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex w-2xl justify-between items-center"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"".concat({error:"text-sm  font-semibold",warning:"text-sm  font-semibold",info:"text-sm  font-semibold",success:"text-sm  font-semibold",transparent:"text-sm  font-semibold",primary:"text-sm  font-semibold",default:"text-sm  font-semibold",custom:messageText}[alertType]," ").concat({error:"text-white",warning:"text-white",info:"text-white",success:"text-white",transparent:"text-text-primary",primary:"text-white",default:"text-white",custom:messageColor}[alertType])},message),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center gap-2"},actionDiv,(void 0===_param_showCloseButton||_param_showCloseButton)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"cursor-pointer",onClick:onClose},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__.F,{name:"close",size:"xs",color:"text-white"}))))))};try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},actionDiv:{defaultValue:null,description:"",name:"actionDiv",required:!1,type:{name:"ReactNode"}},alertType:{defaultValue:null,description:"",name:"alertType",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"default"'},{value:'"transparent"'},{value:'"primary"'},{value:'"custom"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'}]}},messageColor:{defaultValue:null,description:"",name:"messageColor",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},messageText:{defaultValue:null,description:"",name:"messageText",required:!1,type:{name:"string"}},closeButton:{defaultValue:null,description:"",name:"closeButton",required:!1,type:{name:"ReactNode"}},showCloseButton:{defaultValue:{value:"true"},description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Alert/Alert.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"src/components/Alert/Alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/AreaChart/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>AreaChart_AreaChart});var react=__webpack_require__("../node_modules/react/index.js"),ResponsiveContainer=__webpack_require__("../node_modules/recharts/es6/component/ResponsiveContainer.js"),AreaChart=__webpack_require__("../node_modules/recharts/es6/chart/AreaChart.js"),XAxis=__webpack_require__("../node_modules/recharts/es6/cartesian/XAxis.js"),YAxis=__webpack_require__("../node_modules/recharts/es6/cartesian/YAxis.js"),Tooltip=__webpack_require__("../node_modules/recharts/es6/component/Tooltip.js"),Area=__webpack_require__("../node_modules/recharts/es6/cartesian/Area.js"),src=__webpack_require__("./src/index.ts"),AreaChart_AreaChart=function(param){var height=param.height,data=param.data,dataKeys=param.dataKeys,gradientColors=param.gradientColors,lineColors=param.lineColors,_param_hideAxis=param.hideAxis,hideAxis=void 0===_param_hideAxis||_param_hideAxis;return param.isDataLoading?react.createElement("div",{className:"flex items-end h-full"},react.createElement(src.aH,null)):react.createElement(ResponsiveContainer.u,{width:"99%",height:height},data.length>0?react.createElement(AreaChart.Q,{width:730,height:250,data:data,margin:{top:10,right:30,left:0,bottom:0}},react.createElement("defs",null,dataKeys.map(function(datakey,index){return react.createElement("linearGradient",{id:datakey,x1:"0",y1:"0",x2:"0",y2:"1"},react.createElement("stop",{offset:"5%",stopColor:gradientColors[index],stopOpacity:.7}),react.createElement("stop",{offset:"80%",stopColor:gradientColors[index],stopOpacity:0}))})),react.createElement(XAxis.W,{dataKey:"name",hide:hideAxis}),react.createElement(YAxis.h,{hide:hideAxis}),react.createElement(Tooltip.m,null),dataKeys.map(function(datakey,index){return react.createElement(Area.G,{type:"monotone",dataKey:datakey,stroke:lineColors[index],fillOpacity:1,fill:"url(#".concat(datakey,")"),strokeWidth:1.5})})):react.createElement("div",{className:"flex items-end h-full"},react.createElement("p",{className:"text-5xl font-bold text-baseBlack"},"No Data")))};try{AreaChart_AreaChart.displayName="AreaChart",AreaChart_AreaChart.__docgenInfo={description:"",displayName:"AreaChart",props:{height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"{ [x: string]: string | number; }[]"}},dataKeys:{defaultValue:null,description:"",name:"dataKeys",required:!0,type:{name:"string[]"}},gradientColors:{defaultValue:null,description:"",name:"gradientColors",required:!0,type:{name:"string[]"}},lineColors:{defaultValue:null,description:"",name:"lineColors",required:!0,type:{name:"string[]"}},hideAxis:{defaultValue:{value:"true"},description:"",name:"hideAxis",required:!1,type:{name:"boolean"}},isDataLoading:{defaultValue:null,description:"",name:"isDataLoading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AreaChart/AreaChart.tsx#AreaChart"]={docgenInfo:AreaChart_AreaChart.__docgenInfo,name:"AreaChart",path:"src/components/AreaChart/AreaChart.tsx#AreaChart"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/AspectRatio/AspectRatio.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>AspectRatio});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),RATIOS={square:1,video:16/9,wide:21/9,portrait:9/16},AspectRatio=function(param){var ratio=param.ratio,_param_variant=param.variant,children=param.children,_param_className=param.className,_param_testId=param.testId,aspectRatio=ratio||RATIOS[void 0===_param_variant?"square":_param_variant]||1;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative w-full",void 0===_param_className?"":_param_className),"data-testid":void 0===_param_testId?"aspect-ratio":_param_testId},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{paddingBottom:"".concat(1/aspectRatio*100,"%")}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"absolute inset-0"},children))};try{AspectRatio.displayName="AspectRatio",AspectRatio.__docgenInfo={description:`AspectRatio - Maintain aspect ratio container
Perfect for images, videos, and media containers`,displayName:"AspectRatio",props:{ratio:{defaultValue:null,description:"Aspect ratio (width/height)",name:"ratio",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"square"},description:"Common aspect ratios",name:"variant",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"square"'},{value:'"video"'},{value:'"wide"'},{value:'"portrait"'}]}},children:{defaultValue:null,description:"Children content",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"aspect-ratio"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AspectRatio/AspectRatio.tsx#AspectRatio"]={docgenInfo:AspectRatio.__docgenInfo,name:"AspectRatio",path:"src/components/AspectRatio/AspectRatio.tsx#AspectRatio"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/AssistantInput/AssistantInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>AssistantInput});var react=__webpack_require__("../node_modules/react/index.js");let attachmentsClip_namespaceObject=__webpack_require__.p+"static/media/attachmentsClip.efa619a3.svg";var Button=__webpack_require__("./src/components/Button/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var AssistantInput=function(param){var _param_showAttachmentIcon=param.showAttachmentIcon,_param_placeholderText=param.placeholderText,onSend=param.onSend,handleAttachment=param.handleAttachment,scopeDropdown=param.scopeDropdown,fileInfoDiv=param.fileInfoDiv,_param_isSendDisabled=param.isSendDisabled,isSendDisabled=void 0!==_param_isSendDisabled&&_param_isSendDisabled,_param_showUpgradeButton=param.showUpgradeButton,_param_upgradeMessage=param.upgradeMessage,upgradeClick=param.upgradeClick,_useState=_sliced_to_array((0,react.useState)(""),2),inputText=_useState[0],setInputText=_useState[1],_useState1=_sliced_to_array((0,react.useState)(null),2),attachment=_useState1[0],setAttachment=_useState1[1],handleSend=function(){onSend&&onSend(inputText),setInputText("")};return react.createElement(react.Fragment,null,void 0!==_param_showUpgradeButton&&_param_showUpgradeButton?react.createElement("div",{className:"w-full mx-auto flex flex-col items-center border border-border-primary bg-bg-disabled rounded-3xl pl-2.5 px-3 py-3"},react.createElement("div",{className:"p-2 text-text-primary"},void 0===_param_upgradeMessage?"You are out of free daily assistant credits. Please wait 24 hours before trying again or consider upgrading for unlimited AI access.":_param_upgradeMessage),react.createElement("div",{className:"flex items-center w-full justify-end"},react.createElement(Button.$,{color:"gradient",shape:"circle",onClick:upgradeClick},"Get unlimited AI"))):react.createElement("div",{className:"w-full mx-auto flex flex-col items-center border border-border-primary bg-bg-primary rounded-3xl pl-2.5 px-3 py-3"},react.createElement("textarea",{className:"w-full flex-grow p-2 outline-none border-0 rounded-xl focus:outline-none focus:ring-0 text-base bg-bg-primary text-text-primary overflow-auto",placeholder:void 0===_param_placeholderText?"Ask or search for anything...":_param_placeholderText,value:inputText,onChange:function(e){return setInputText(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&!e.shiftKey&&(e.preventDefault(),isSendDisabled||handleSend())},rows:1,style:{resize:"none",overflow:"hidden"}}),react.createElement("div",{className:"flex items-center w-full justify-between"},react.createElement("div",{className:"flex items-center"},(void 0===_param_showAttachmentIcon||_param_showAttachmentIcon)&&!attachment&&react.createElement("label",{htmlFor:"file-upload",className:"mr-1 cursor-pointer rounded-full p-1.5"},react.createElement("img",{src:attachmentsClip_namespaceObject,alt:"Attachments clip",className:"w-6 object-cover"}),react.createElement("input",{id:"file-upload",type:"file",className:"hidden",accept:"image/*",onChange:function(e){var _e_target_files;setAttachment((null==(_e_target_files=e.target.files)?void 0:_e_target_files[0])||null),null==handleAttachment||handleAttachment(e)}})),attachment&&react.createElement("div",{className:"flex items-center"},fileInfoDiv)),react.createElement("div",{className:"flex items-center"},scopeDropdown,react.createElement("div",{className:"pl-2 cursor-pointer"},react.createElement("div",{className:"assistant-send-icon ".concat(isSendDisabled?"disabled":""),role:"img","aria-label":"Send AI Prompt Icon",onClick:isSendDisabled?void 0:handleSend}))))))};try{AssistantInput.displayName="AssistantInput",AssistantInput.__docgenInfo={description:"",displayName:"AssistantInput",props:{showAttachmentIcon:{defaultValue:{value:"true"},description:"",name:"showAttachmentIcon",required:!1,type:{name:"boolean"}},placeholderText:{defaultValue:{value:"Ask or search for anything..."},description:"",name:"placeholderText",required:!1,type:{name:"string"}},onSend:{defaultValue:null,description:"",name:"onSend",required:!1,type:{name:"((text: string) => void)"}},handleAttachment:{defaultValue:null,description:"",name:"handleAttachment",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},scopeDropdown:{defaultValue:null,description:"",name:"scopeDropdown",required:!1,type:{name:"ReactNode"}},fileInfoDiv:{defaultValue:null,description:"",name:"fileInfoDiv",required:!1,type:{name:"ReactNode"}},isSendDisabled:{defaultValue:{value:"false"},description:"",name:"isSendDisabled",required:!1,type:{name:"boolean"}},showUpgradeButton:{defaultValue:{value:"false"},description:"",name:"showUpgradeButton",required:!1,type:{name:"boolean"}},upgradeMessage:{defaultValue:{value:"You are out of free daily assistant credits. Please wait 24 hours before trying again or consider upgrading for unlimited AI access."},description:"",name:"upgradeMessage",required:!1,type:{name:"string"}},upgradeClick:{defaultValue:null,description:"",name:"upgradeClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AssistantInput/AssistantInput.tsx#AssistantInput"]={docgenInfo:AssistantInput.__docgenInfo,name:"AssistantInput",path:"src/components/AssistantInput/AssistantInput.tsx#AssistantInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Avatar/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_Avatar__WEBPACK_IMPORTED_MODULE_0__.A});var _Avatar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Avatar/Avatar.tsx")},"./src/components/Badge/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Badge_Badge});var react=__webpack_require__("../node_modules/react/index.js"),Badge=function(param){var _param_variant=param.variant,variant=void 0===_param_variant?"filled":_param_variant,children=param.children,icon=param.icon,_param_color=param.color,color=void 0===_param_color?"default":_param_color,_param_imagePlacement=param.imagePlacement,_param_size=param.size,_param_showDot=param.showDot,_param_border=param.border,border=void 0===_param_border||_param_border,customClass=param.customClass,colorStyles={primary:{filled:"text-utility-brand-700 bg-utility-brand-50 ".concat(border?"border border-solid border-utility-brand-200":""),outlined:"text-utility-brand-700 ".concat(border?"border border-solid border-utility-brand-200":""),dotBg:"bg-utility-brand-500"},default:{filled:"text-text-secondary bg-bg-disabled ".concat(border?"border border-solid border-utility-gray-200":""),outlined:"text-text-secondary ".concat(border?"border border-solid border-utility-gray-200":""),dotBg:"bg-utility-gray-500"},transparent:{filled:"text-utility-gray-700 ".concat(border?"border border-solid border-utility-gray-200":""),outlined:"text-utility-gray-700 ".concat(border?"border border-solid border-utility-gray-200":""),dotBg:"bg-utility-gray-500"},added:{filled:"text-utility-success-700 bg-utility-success-50 ".concat(border?"border border-solid border-utility-success-200":""),outlined:"text-utility-success-700 ".concat(border?"border border-solid border-utility-success-200":""),dotBg:"bg-utility-success-500"},important:{filled:"text-utility-error-700 bg-utility-error-50 ".concat(border?"border border-solid border-utility-error-200":""),outlined:"text-utility-error-700 ".concat(border?"border border-solid border-utility-error-200":""),dotBg:"bg-utility-error-500"},counter:{filled:"text-white bg-utility-error-600 ".concat(border?"border border-solid border-utility-error-600":""),outlined:"text-utility-error-600 ".concat(border?"border border-solid border-utility-error-700":""),dotBg:"bg-utility-error-700"},success:{filled:"text-white bg-bg-success-solid ".concat(border?"border border-solid border-bg-success-solid":""),outlined:"text-bg-success-solid ".concat(border?"border border-solid border-bg-success-solid":""),dotBg:"bg-utility-gray-500"},gradient:{filled:"text-white bg-gradient",outlined:"text-gradient ".concat(border?"border border-solid border-bg-gradient":""),dotBg:"bg-gradient"},custom:{filled:null==customClass?void 0:customClass.filled,outlined:null==customClass?void 0:customClass.outlined,dotBg:null==customClass?void 0:customClass.dotBg}},badgeStyles="".concat("font-medium rounded-full"," ").concat({xs:"py-0.5 px-2 text-xxs gap-1",sm:"py-[2px] px-2 text-xs gap-1",md:"py-[2px] px-2.5 text-sm gap-1.5",lg:"py-1 px-3 text-sm gap-1.5"}[void 0===_param_size?"sm":_param_size]," ").concat(colorStyles[color][variant],"  ").concat({left:"",right:"flex-row-reverse"}[void 0===_param_imagePlacement?"left":_param_imagePlacement]," flex items-center justify-center"),dotStyle="".concat(colorStyles[color].dotBg," h-2 w-2 rounded-full");return react.createElement("div",{className:badgeStyles},void 0!==_param_showDot&&_param_showDot?react.createElement(react.Fragment,null,react.createElement("div",{className:dotStyle})):react.createElement(react.Fragment,null," ",icon&&react.createElement("img",{src:icon,className:"".concat({filled:"fill-base-white",outlined:""}[variant]),alt:"img"})),react.createElement("span",null,children))};let Badge_Badge=Badge;try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"default"'},{value:'"transparent"'},{value:'"primary"'},{value:'"gradient"'},{value:'"custom"'},{value:'"important"'},{value:'"added"'},{value:'"counter"'}]}},variant:{defaultValue:{value:"filled"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"filled"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},imagePlacement:{defaultValue:{value:"left"},description:"",name:"imagePlacement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'}]}},showDot:{defaultValue:{value:"false"},description:"",name:"showDot",required:!1,type:{name:"boolean"}},border:{defaultValue:{value:"true"},description:"",name:"border",required:!1,type:{name:"boolean"}},customClass:{defaultValue:null,description:"",name:"customClass",required:!1,type:{name:"{ filled?: string; outlined?: string; dotBg?: string | undefined; } | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/Badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/BasicButton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>BaseButton,A:()=>BasicButton_BasicButton});var react=__webpack_require__("../node_modules/react/index.js"),BasicButton=function(props){var text=props.text,_props_active=props.active,onClick=props.onClick;return react.createElement("button",{className:"shadow-none rounded-md border-none border-transparent bg-transparent px-xl_4 py-xs text-sm  hover:bg-white dark:text-white ".concat(void 0!==_props_active&&_props_active?"bg-white font-semibold shadow-boxShadowFilter dark:bg-slate-400":"font-medium"),onClick:function(){onClick&&onClick()}},text)};let BasicButton_BasicButton=BasicButton;try{BasicButton.displayName="BasicButton",BasicButton.__docgenInfo={description:"",displayName:"BasicButton",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BasicButton/BasicButton.tsx#BasicButton"]={docgenInfo:BasicButton.__docgenInfo,name:"BasicButton",path:"src/components/BasicButton/BasicButton.tsx#BasicButton"})}catch(__react_docgen_typescript_loader_error){}var classnames=__webpack_require__("../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),BaseButton=function(param){var boder_left=param.boder_left,boder_right=param.boder_right,children=param.children,_param_selected=param.selected,onClick=param.onClick,btnClass=classnames_default()("px-4 w-full py-2 border border-solid border-border-primary flex items-center text-sm font-semibold  text-text-secondary justify-center cursor-pointer ".concat(boder_left?"rounded-l-lg":boder_right?"rounded-r-lg":""," ").concat(void 0!==_param_selected&&_param_selected?"bg-bg-primary_hover":"bg-bg-primary"));return react.createElement("div",{onClick:onClick,className:btnClass},children)};try{BaseButton.displayName="BaseButton",BaseButton.__docgenInfo={description:"",displayName:"BaseButton",props:{boder_left:{defaultValue:null,description:"",name:"boder_left",required:!1,type:{name:"boolean"}},boder_right:{defaultValue:null,description:"",name:"boder_right",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BasicButton/BaseButton.tsx#BaseButton"]={docgenInfo:BaseButton.__docgenInfo,name:"BaseButton",path:"src/components/BasicButton/BaseButton.tsx#BaseButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/BillingCard/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>BillingCard});var react=__webpack_require__("../node_modules/react/index.js"),Badge=__webpack_require__("./src/components/Badge/index.ts");let checkIcon_namespaceObject=__webpack_require__.p+"static/media/checkIcon.834e0a06.svg";var star=__webpack_require__("./src/assets/icons/star.svg"),BillingCard=function(param){var title=param.title,description=param.description,features=param.features,isActive=param.isActive,totalUser=param.totalUser,activeUser=param.activeUser,button=param.button,featuresTitle=param.featuresTitle;return react.createElement("div",{className:"p-6 border border-solid border-gray-200 rounded-2xl flex flex-col w-full shadow-sm ".concat(isActive?"cursor-default":"cursor-not-allowed	")},react.createElement("div",{className:"flex justify-between items-start mb-4"},react.createElement("div",null,react.createElement("h2",{className:"text-base font-semibold text-text-primary"},title),react.createElement("p",{className:"text-sm text-gray-600 text-secondary-700"},description)),isActive?react.createElement("div",{className:"text-right flex flex-col items-end"},react.createElement("span",{className:"text-4xl font-medium pb-2 flex"},activeUser,"/",totalUser),react.createElement(Badge.A,{color:"default"},"Active Users")):react.createElement("div",{className:"text-right flex flex-col items-end"},react.createElement(Badge.A,{color:"primary",icon:star},"Coming Soon"))),react.createElement("div",{className:"mb-4"},react.createElement("h3",{className:"font-medium mb-2 text-secondary-700 text-sm"},featuresTitle),react.createElement("ul",{className:"space-y-2"},features.map(function(feature,index){return react.createElement("li",{key:index,className:"flex items-center"},react.createElement("img",{src:checkIcon_namespaceObject,alt:"CheckIcon"}),react.createElement("span",{className:"text-gray-600 text-base pl-2 font-normal"},feature))}))),button&&react.createElement("div",{className:"flex justify-end text-base"},button))};try{BillingCard.displayName="BillingCard",BillingCard.__docgenInfo={description:"",displayName:"BillingCard",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},features:{defaultValue:null,description:"",name:"features",required:!0,type:{name:"string[]"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},totalUser:{defaultValue:null,description:"",name:"totalUser",required:!0,type:{name:"number"}},activeUser:{defaultValue:null,description:"",name:"activeUser",required:!0,type:{name:"number"}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"ReactNode"}},featuresTitle:{defaultValue:null,description:"",name:"featuresTitle",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BillingCard/BillingCard.tsx#BillingCard"]={docgenInfo:BillingCard.__docgenInfo,name:"BillingCard",path:"src/components/BillingCard/BillingCard.tsx#BillingCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ButtonV2/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>_ButtonV2__WEBPACK_IMPORTED_MODULE_0__.J});var _ButtonV2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ButtonV2/ButtonV2.tsx")},"./src/components/Card/DashboardCards/DashboardCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>DashboardCards_DashboardCard});var react=__webpack_require__("../node_modules/react/index.js"),CardKPI=__webpack_require__("./src/components/Card/common/CardKPI.tsx"),NewCardHeader=function(param){var title=param.title,trendData=param.trendData;return react.createElement("div",{className:"flex flex-col gap-1 w-full"},react.createElement("div",{className:"flex items-center justify-between w-full"},react.createElement("p",{className:"text-base font-semibold text-text-primary"},title)),trendData&&react.createElement("div",{className:"flex gap-4 w-full items-center"},react.createElement("p",{className:"font-semibold text-text-primary text-4xl"},null==trendData?void 0:trendData.data),react.createElement(CardKPI.A,{percentageChange:null==trendData?void 0:trendData.percentageChange,description:null==trendData?void 0:trendData.trendDescription})))};try{NewCardHeader.displayName="NewCardHeader",NewCardHeader.__docgenInfo={description:"",displayName:"NewCardHeader",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},trendData:{defaultValue:null,description:"",name:"trendData",required:!1,type:{name:"{ data: string | number; percentageChange: number; trendDescription: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/common/NewCardHeader.tsx#NewCardHeader"]={docgenInfo:NewCardHeader.__docgenInfo,name:"NewCardHeader",path:"src/components/Card/common/NewCardHeader.tsx#NewCardHeader"})}catch(__react_docgen_typescript_loader_error){}var DashboardCard=function(props){var title=props.title,children=(props.subTitle,props.onDeleteClick,props.onRefreshClick,props.children),_props_gap=props.gap,trendData=props.trendData;return react.createElement("div",{className:"border border-border-secondary bg-bg-primary flex flex-col items-start justify-between rounded-2xl ".concat({sm:"gap-5",md:"gap-6",lg:"gap-7"}[void 0===_props_gap?"md":_props_gap]," p-6 shadow-xs")},react.createElement(NewCardHeader,{trendData:trendData,title:title}),children)};let DashboardCards_DashboardCard=DashboardCard;try{DashboardCard.displayName="DashboardCard",DashboardCard.__docgenInfo={description:"",displayName:"DashboardCard",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},onDeleteClick:{defaultValue:null,description:"",name:"onDeleteClick",required:!1,type:{name:"(() => void)"}},onRefreshClick:{defaultValue:null,description:"",name:"onRefreshClick",required:!1,type:{name:"(() => void)"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},trendData:{defaultValue:null,description:"",name:"trendData",required:!1,type:{name:"{ data: string | number; percentageChange: number; trendDescription: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/DashboardCards/DashboardCard.tsx#DashboardCard"]={docgenInfo:DashboardCard.__docgenInfo,name:"DashboardCard",path:"src/components/Card/DashboardCards/DashboardCard.tsx#DashboardCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Card/OverviewCard/OverviewCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_common_CardKPI__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Card/common/CardKPI.tsx"),_Loader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Loader/index.ts"),OverviewCard=function(props){var title=props.title,data=props.data,_props_percentageChange=props.percentageChange,trendDescription=props.trendDescription,isDataLoading=props.isDataLoading,isPercentageLoading=props.isPercentageLoading;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-cardbg flex h-[162px] flex-col justify-between rounded-2xl px-6 py-8 dark:bg-slate-600"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text-base font-semibold leading-6 dark:text-white"},title),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-end justify-between"},isDataLoading?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{paddingLeft:"15px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loader__WEBPACK_IMPORTED_MODULE_2__.A,null)):react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:" text-4xl font-bold dark:text-slate-300"},data),isPercentageLoading?react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_CardKPI__WEBPACK_IMPORTED_MODULE_1__.A,{percentageChange:void 0===_props_percentageChange?0:_props_percentageChange,description:trendDescription})))};let __WEBPACK_DEFAULT_EXPORT__=OverviewCard;try{OverviewCard.displayName="OverviewCard",OverviewCard.__docgenInfo={description:"",displayName:"OverviewCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"any"}},percentageChange:{defaultValue:null,description:"",name:"percentageChange",required:!1,type:{name:"number"}},trendDescription:{defaultValue:null,description:"",name:"trendDescription",required:!1,type:{name:"string"}},isDataLoading:{defaultValue:null,description:"",name:"isDataLoading",required:!1,type:{name:"boolean"}},isPercentageLoading:{defaultValue:null,description:"",name:"isPercentageLoading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/OverviewCard/OverviewCard.tsx#OverviewCard"]={docgenInfo:OverviewCard.__docgenInfo,name:"OverviewCard",path:"src/components/Card/OverviewCard/OverviewCard.tsx#OverviewCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Card/common/CardKPI.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>common_CardKPI});var react=__webpack_require__("../node_modules/react/index.js");let greenArrowUp_namespaceObject=__webpack_require__.p+"static/media/greenArrowUp.84f98d37.svg",redArrowDown_namespaceObject=__webpack_require__.p+"static/media/redArrowDown.c6519183.svg";var CardKPI=function(props){var _props_percentageChange=props.percentageChange,percentageChange=void 0===_props_percentageChange?0:_props_percentageChange,description=props.description;return react.createElement(react.Fragment,null,react.createElement("div",{className:"flex gap-1 w-full"},percentageChange>0&&react.createElement("img",{src:greenArrowUp_namespaceObject,alt:""}),percentageChange<0&&react.createElement("img",{src:redArrowDown_namespaceObject,alt:""}),react.createElement("div",{className:"flex gap-2 text-sm font-medium"},react.createElement("p",{className:"".concat(percentageChange>0&&"text-text-success-primary"," ").concat(percentageChange<0&&"text-text-error-primary",`
              `).concat(0===percentageChange&&"text-text-primary")},0===percentageChange?"No change":Math.abs(percentageChange)+"%"," "),react.createElement("p",{className:"text-text-tertiary"},description))))};let common_CardKPI=CardKPI;try{CardKPI.displayName="CardKPI",CardKPI.__docgenInfo={description:"",displayName:"CardKPI",props:{percentageChange:{defaultValue:null,description:"",name:"percentageChange",required:!1,type:{name:"number"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/common/CardKPI.tsx#CardKPI"]={docgenInfo:CardKPI.__docgenInfo,name:"CardKPI",path:"src/components/Card/common/CardKPI.tsx#CardKPI"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Carousel/Carousel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>Carousel});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs"),_hooks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/hooks/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var Carousel=function(param){var items=param.items,_param_autoPlay=param.autoPlay,autoPlay=void 0!==_param_autoPlay&&_param_autoPlay,_param_autoPlayInterval=param.autoPlayInterval,autoPlayInterval=void 0===_param_autoPlayInterval?5e3:_param_autoPlayInterval,_param_showIndicators=param.showIndicators,_param_showArrows=param.showArrows,_param_loop=param.loop,loop=void 0===_param_loop||_param_loop,_param_defaultIndex=param.defaultIndex,controlledIndex=param.currentIndex,onSlideChange=param.onSlideChange,_param_className=param.className,_param_testId=param.testId,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0===_param_defaultIndex?0:_param_defaultIndex),2),internalIndex=_useState[0],setInternalIndex=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isPaused=_useState1[0],setIsPaused=_useState1[1],intervalRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),isMobile=(0,_hooks__WEBPACK_IMPORTED_MODULE_4__.al)(),isControlled=void 0!==controlledIndex,currentIndex=isControlled?controlledIndex:internalIndex,goToSlide=function(index){if(loop){var newIndex=index<0?items.length-1:index>=items.length?0:index;isControlled||setInternalIndex(newIndex),null==onSlideChange||onSlideChange(newIndex)}else{var newIndex1=Math.max(0,Math.min(items.length-1,index));isControlled||setInternalIndex(newIndex1),null==onSlideChange||onSlideChange(newIndex1)}},goToNext=function(){return goToSlide(currentIndex+1)};return((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(autoPlay&&!isPaused&&items.length>1)return intervalRef.current=setInterval(function(){goToNext()},autoPlayInterval),function(){intervalRef.current&&clearInterval(intervalRef.current)}},[autoPlay,isPaused,currentIndex,items.length,autoPlayInterval]),0===items.length)?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative w-full overflow-hidden",void 0===_param_className?"":_param_className),onMouseEnter:function(){return setIsPaused(!0)},onMouseLeave:function(){return setIsPaused(!1)},"data-testid":void 0===_param_testId?"carousel":_param_testId},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"relative w-full",style:{aspectRatio:"16/9"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__.N,{mode:"wait"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.P.div,{key:currentIndex,initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},transition:{duration:.3},className:"absolute inset-0 flex items-center justify-center"},items[currentIndex]))),(void 0===_param_showArrows||_param_showArrows)&&items.length>1&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:function(){return goToSlide(currentIndex-1)},className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute left-4 top-1/2 -translate-y-1/2 z-10","p-2 rounded-full bg-bg-overlay/50 backdrop-blur-sm text-white","hover:bg-bg-overlay/70 transition-colors","focus:outline-none focus:ring-2 focus:ring-white",isMobile&&"p-1.5"),"aria-label":"Previous slide"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-5 h-5",isMobile&&"w-4 h-4"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:goToNext,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute right-4 top-1/2 -translate-y-1/2 z-10","p-2 rounded-full bg-bg-overlay/50 backdrop-blur-sm text-white","hover:bg-bg-overlay/70 transition-colors","focus:outline-none focus:ring-2 focus:ring-white",isMobile&&"p-1.5"),"aria-label":"Next slide"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-5 h-5",isMobile&&"w-4 h-4"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})))),(void 0===_param_showIndicators||_param_showIndicators)&&items.length>1&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2"},items.map(function(_,index){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{key:index,onClick:function(){return goToSlide(index)},className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("rounded-full transition-all",currentIndex===index?"w-8 h-2 bg-white":"w-2 h-2 bg-white/50 hover:bg-white/75"),"aria-label":"Go to slide ".concat(index+1)})})))};try{Carousel.displayName="Carousel",Carousel.__docgenInfo={description:`Carousel - Image/content carousel component
Perfect for image galleries, testimonials, and featured content`,displayName:"Carousel",props:{items:{defaultValue:null,description:"Array of carousel items",name:"items",required:!0,type:{name:"ReactNode[]"}},autoPlay:{defaultValue:{value:"false"},description:"Whether to auto-play",name:"autoPlay",required:!1,type:{name:"boolean"}},autoPlayInterval:{defaultValue:{value:"5000"},description:"Auto-play interval in milliseconds",name:"autoPlayInterval",required:!1,type:{name:"number"}},showIndicators:{defaultValue:{value:"true"},description:"Whether to show indicators",name:"showIndicators",required:!1,type:{name:"boolean"}},showArrows:{defaultValue:{value:"true"},description:"Whether to show navigation arrows",name:"showArrows",required:!1,type:{name:"boolean"}},loop:{defaultValue:{value:"true"},description:"Whether to loop",name:"loop",required:!1,type:{name:"boolean"}},defaultIndex:{defaultValue:{value:"0"},description:"Initial slide index",name:"defaultIndex",required:!1,type:{name:"number"}},currentIndex:{defaultValue:null,description:"Controlled slide index",name:"currentIndex",required:!1,type:{name:"number"}},onSlideChange:{defaultValue:null,description:"Callback when slide changes",name:"onSlideChange",required:!1,type:{name:"((index: number) => void)"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"carousel"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:Carousel.__docgenInfo,name:"Carousel",path:"src/components/Carousel/Carousel.tsx#Carousel"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Checkbox/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>_Checkbox__WEBPACK_IMPORTED_MODULE_0__.S});var _Checkbox__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Checkbox/Checkbox.tsx")},"./src/components/Collapsible/Collapsible.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>Collapsible});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var Collapsible=function(param){var _param_defaultOpen=param.defaultOpen,controlledOpen=param.open,onOpenChange=param.onOpenChange,trigger=param.trigger,children=param.children,_param_className=param.className,_param_testId=param.testId,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0!==_param_defaultOpen&&_param_defaultOpen),2),internalOpen=_useState[0],setInternalOpen=_useState[1],isControlled=void 0!==controlledOpen,open=isControlled?controlledOpen:internalOpen;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-full",void 0===_param_className?"":_param_className),"data-testid":void 0===_param_testId?"collapsible":_param_testId},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{onClick:function(){var newOpen=!open;isControlled||setInternalOpen(newOpen),null==onOpenChange||onOpenChange(newOpen)},className:"cursor-pointer"},trigger),react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__.N,null,open&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.P.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"overflow-hidden"},children)))};try{Collapsible.displayName="Collapsible",Collapsible.__docgenInfo={description:`Collapsible - Show/hide content toggle
Simple expandable sections`,displayName:"Collapsible",props:{defaultOpen:{defaultValue:{value:"false"},description:"Whether content is initially open",name:"defaultOpen",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"Controlled open state",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback when open state changes",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},trigger:{defaultValue:null,description:"Trigger element",name:"trigger",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Content to show/hide",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"collapsible"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Collapsible/Collapsible.tsx#Collapsible"]={docgenInfo:Collapsible.__docgenInfo,name:"Collapsible",path:"src/components/Collapsible/Collapsible.tsx#Collapsible"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/CommandMenu/CommandMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>CommandMenu});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var CommandMenu=function(param){var open=param.open,onClose=param.onClose,items=param.items,_param_placeholder=param.placeholder,_param_testId=(param.className,param.testId),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),2),query=_useState[0],setQuery=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),2),selectedIndex=_useState1[0],setSelectedIndex=_useState1[1],inputRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),filteredItems=items.filter(function(item){if(!query)return!0;var _item_keywords,searchTerm=query.toLowerCase();return item.label.toLowerCase().includes(searchTerm)||(null==(_item_keywords=item.keywords)?void 0:_item_keywords.some(function(kw){return kw.toLowerCase().includes(searchTerm)}))}),groupedItems=filteredItems.reduce(function(acc,item){var group=item.group||"Other";return acc[group]||(acc[group]=[]),acc[group].push(item),acc},{});return((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(open){var _inputRef_current;null==(_inputRef_current=inputRef.current)||_inputRef_current.focus(),setQuery(""),setSelectedIndex(0)}},[open]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(open){var handleKeyDown=function(e){"Escape"===e.key?onClose():"ArrowDown"===e.key?(e.preventDefault(),setSelectedIndex(function(prev){return prev<filteredItems.length-1?prev+1:0})):"ArrowUp"===e.key?(e.preventDefault(),setSelectedIndex(function(prev){return prev>0?prev-1:filteredItems.length-1})):"Enter"===e.key&&filteredItems[selectedIndex]&&(e.preventDefault(),filteredItems[selectedIndex].onSelect(),onClose())};return document.addEventListener("keydown",handleKeyDown),function(){return document.removeEventListener("keydown",handleKeyDown)}}},[open,filteredItems,selectedIndex,onClose]),open)?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"fixed inset-0 bg-bg-overlay/50 backdrop-blur-sm z-[9999] flex items-start justify-center pt-[20vh]",onClick:onClose,"data-testid":void 0===_param_testId?"command-menu":_param_testId},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-full max-w-lg bg-bg-primary rounded-lg shadow-3xl border border-border-secondary overflow-hidden",onClick:function(e){return e.stopPropagation()}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"p-3 border-b border-border-secondary"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{ref:inputRef,type:"text",value:query,onChange:function(e){return setQuery(e.target.value)},placeholder:void 0===_param_placeholder?"Type a command or search...":_param_placeholder,className:"w-full bg-transparent outline-none text-text-primary placeholder-text-placeholder"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"max-h-[60vh] overflow-y-auto"},Object.entries(groupedItems).map(function(param){var _param=_sliced_to_array(param,2),group=_param[0],groupItems=_param[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:group},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"px-3 py-2 text-xs font-semibold text-text-quaternary uppercase"},group),groupItems.map(function(item,index){var globalIndex=filteredItems.indexOf(item);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{key:item.id,onClick:function(){item.onSelect(),onClose()},className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-full px-3 py-2 flex items-center gap-3 text-left","hover:bg-bg-secondary transition-colors",selectedIndex===globalIndex&&"bg-bg-secondary")},item.icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"w-5 h-5"},"string"==typeof item.icon?react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:item.icon,alt:""}):item.icon),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-text-primary"},item.label))}))})))):null};try{CommandMenu.displayName="CommandMenu",CommandMenu.__docgenInfo={description:`CommandMenu - Command palette (Cmd+K style)
Perfect for quick actions, search commands, and keyboard navigation`,displayName:"CommandMenu",props:{open:{defaultValue:null,description:"Whether menu is open",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback when menu should close",name:"onClose",required:!0,type:{name:"() => void"}},items:{defaultValue:null,description:"Menu items",name:"items",required:!0,type:{name:"CommandMenuItem[]"}},placeholder:{defaultValue:{value:"Type a command or search..."},description:"Placeholder text",name:"placeholder",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"command-menu"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CommandMenu/CommandMenu.tsx#CommandMenu"]={docgenInfo:CommandMenu.__docgenInfo,name:"CommandMenu",path:"src/components/CommandMenu/CommandMenu.tsx#CommandMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Comments/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function timeAgo(date){if(isNaN(date.getTime()))return"";var diffInSeconds=Math.floor((new Date().getTime()-date.getTime())/1e3);if(diffInSeconds<60)return"just now";var diffInMinutes=Math.floor(diffInSeconds/60);if(diffInMinutes<60)return"".concat(diffInMinutes," minutes ago");var diffInHours=Math.floor(diffInMinutes/60);if(diffInHours<24)return"".concat(diffInHours," hours ago");var diffInDays=Math.floor(diffInHours/24);if(diffInDays<30)return"".concat(diffInDays," days ago");var diffInMonths=Math.floor(diffInDays/30);return"".concat(diffInMonths," months ago")}__webpack_require__.d(__webpack_exports__,{f:()=>timeAgo})},"./src/components/Confetti/Confetti.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>Confetti});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),react_confetti__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/react-confetti/dist/react-confetti.mjs");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var Confetti=function(param){var _param_size=param.size,size=void 0===_param_size?"md":_param_size,_param_speed=param.speed,speed=void 0===_param_speed?"medium":_param_speed,_param_duration=param.duration,duration=void 0===_param_duration?10:_param_duration,width=param.width,height=param.height,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),2),isVisible=_useState[0],setIsVisible=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(duration){var timer=setTimeout(function(){setIsVisible(!1)},1e3*duration);return function(){return clearTimeout(timer)}}},[duration]);var speedValue="super-slow"===speed?.01:"slow"===speed?.1:"medium"===speed?.2:"fast"===speed?.3:"super-fast"===speed?.4:.3,numberOfPieces="sm"===size?100:"md"===size?200:"lg"===size?300:"xl"===size?400:"2xl"===size?500:300,confettiWidth=width||window.innerWidth,confettiHeight=height||window.innerHeight;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"fixed z-[9999]"},isVisible&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_confetti__WEBPACK_IMPORTED_MODULE_1__.A,{width:confettiWidth,height:confettiHeight,numberOfPieces:numberOfPieces,gravity:speedValue}))};try{Confetti.displayName="Confetti",Confetti.__docgenInfo={description:"",displayName:"Confetti",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}},speed:{defaultValue:{value:"medium"},description:"",name:"speed",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"super-slow"'},{value:'"slow"'},{value:'"fast"'},{value:'"super-fast"'}]}},duration:{defaultValue:{value:"10"},description:"",name:"duration",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Confetti/Confetti.tsx#Confetti"]={docgenInfo:Confetti.__docgenInfo,name:"Confetti",path:"src/components/Confetti/Confetti.tsx#Confetti"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ContentBox/ContentBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),ContentBox=function(param){var content=param.content,theme=param.theme;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"p-4 bg-bg-primary border border-solid border-border-secondary rounded-2xl text-sm text-secondary-700 flex items-center justify-start gap-3 w-full ".concat(theme)},content)};let __WEBPACK_DEFAULT_EXPORT__=ContentBox;try{ContentBox.displayName="ContentBox",ContentBox.__docgenInfo={description:"",displayName:"ContentBox",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"String"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContentBox/ContentBox.tsx#ContentBox"]={docgenInfo:ContentBox.__docgenInfo,name:"ContentBox",path:"src/components/ContentBox/ContentBox.tsx#ContentBox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ContentBox/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_ContentBox__WEBPACK_IMPORTED_MODULE_0__.A});var _ContentBox__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ContentBox/ContentBox.tsx")},"./src/components/ContextMenu/ContextMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>ContextMenu});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var ContextMenu=function(param){var items=param.items,children=param.children,_param_className=param.className,_param_testId=param.testId,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isOpen=_useState[0],setIsOpen=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({x:0,y:0}),2),position=_useState1[0],setPosition=_useState1[1],menuRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),isMobile=(0,_hooks__WEBPACK_IMPORTED_MODULE_2__.al)(),handlers=(0,_hooks__WEBPACK_IMPORTED_MODULE_2__.HZ)({onLongPress:function(){setIsOpen(!0)},threshold:500}).handlers;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var handleClickOutside=function(e){menuRef.current&&!menuRef.current.contains(e.target)&&setIsOpen(!1)},handleEscape=function(e){"Escape"===e.key&&setIsOpen(!1)};if(isOpen&&(document.addEventListener("mousedown",handleClickOutside),document.addEventListener("keydown",handleEscape),menuRef.current)){var rect=menuRef.current.getBoundingClientRect(),newPosition=_object_spread({},position);rect.right>window.innerWidth&&(newPosition.x=window.innerWidth-rect.width-10),rect.bottom>window.innerHeight&&(newPosition.y=window.innerHeight-rect.height-10),(newPosition.x!==position.x||newPosition.y!==position.y)&&setPosition(newPosition)}return function(){document.removeEventListener("mousedown",handleClickOutside),document.removeEventListener("keydown",handleEscape)}},[isOpen,position]);var handleItemClick=function(item){item.disabled||item.separator||(item.onClick(),setIsOpen(!1))};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_object_spread_props(_object_spread({className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative",void 0===_param_className?"":_param_className),onContextMenu:function(e){e.preventDefault(),setPosition({x:e.clientX,y:e.clientY}),setIsOpen(!0)}},isMobile?handlers:{}),{"data-testid":void 0===_param_testId?"context-menu":_param_testId}),children,isOpen&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:menuRef,className:"fixed z-[9999] bg-bg-primary border border-border-secondary rounded-lg shadow-xl py-1 min-w-[200px]",style:{left:"".concat(position.x,"px"),top:"".concat(position.y,"px")}},items.map(function(item,index){return item.separator?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:"separator-".concat(index),className:"h-px bg-border-secondary my-1"}):react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{key:index,onClick:function(){return handleItemClick(item)},disabled:item.disabled,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-full px-4 py-2 text-left flex items-center gap-3 text-sm","hover:bg-bg-secondary transition-colors",item.destructive&&"text-error-600",!item.destructive&&"text-text-primary",item.disabled&&"opacity-50 cursor-not-allowed")},item.icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"w-4 h-4"},"string"==typeof item.icon?react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:item.icon,alt:""}):item.icon),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,item.label))})))};try{ContextMenu.displayName="ContextMenu",ContextMenu.__docgenInfo={description:`ContextMenu - Right-click/long-press menu
Perfect for contextual actions and right-click menus`,displayName:"ContextMenu",props:{items:{defaultValue:null,description:"Menu items",name:"items",required:!0,type:{name:"ContextMenuItem[]"}},children:{defaultValue:null,description:"Children to attach context menu to",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"context-menu"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContextMenu/ContextMenu.tsx#ContextMenu"]={docgenInfo:ContextMenu.__docgenInfo,name:"ContextMenu",path:"src/components/ContextMenu/ContextMenu.tsx#ContextMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DateRangePicker/DateRangePicker.css":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("../node_modules/css-loader/dist/cjs.js!../node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!./src/components/DateRangePicker/DateRangePicker.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={};options.insert="head",options.singleton=!1,api(content,options),module.exports=content.locals||{}},"./src/components/DateRangePicker/DateRangePicker.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_assets_icons_calIcon_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/assets/icons/calIcon.svg");__webpack_require__("./src/components/DateRangePicker/DateRangePicker.css");var react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/react-tailwindcss-datepicker/dist/index.esm.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var DateRangePicker=function(){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({startDate:null,endDate:null}),2),value=_useState[0],setValue=_useState[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-[310px] bg-bg-primary rounded-full flex items-center *hover:bg-bg-primary_hover "},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-bg-primary rounded-l-full py-[10px] pl-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:_assets_icons_calIcon_svg__WEBPACK_IMPORTED_MODULE_1__,alt:"calendar",className:"w-5 h-5"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_3__.A,{value:value,onChange:function(newValue){return setValue(newValue)},showShortcuts:!0,inputClassName:" w-[260px] focus:ring-0 border-none font-semibold bg-bg-primary text-text-secondary rounded-r-full",toggleClassName:"opacity-0 w-0",showFooter:!0,configs:{shortcuts:{today:"Today",yesterday:"Yesterday",past:function(period){return"Last "+period+" Days"},currentMonth:"Current Month",pastMonth:"Past Month"},footer:{cancel:"Cancel",apply:"Apply"}}}))};let __WEBPACK_DEFAULT_EXPORT__=DateRangePicker;try{DateRangePicker.displayName="DateRangePicker",DateRangePicker.__docgenInfo={description:"",displayName:"DateRangePicker",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DateRangePicker/DateRangePicker.tsx#DateRangePicker"]={docgenInfo:DateRangePicker.__docgenInfo,name:"DateRangePicker",path:"src/components/DateRangePicker/DateRangePicker.tsx#DateRangePicker"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DateRangePickerV2/DateRangePickerV2.css":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("../node_modules/css-loader/dist/cjs.js!../node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!./src/components/DateRangePickerV2/DateRangePickerV2.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={};options.insert="head",options.singleton=!1,api(content,options),module.exports=content.locals||{}},"./src/components/DateRangePickerV2/DateRangePickerV2.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>components_DateRangePickerV2_DateRangePickerV2});var react=__webpack_require__("../node_modules/react/index.js"),react_datepicker_min=__webpack_require__("../node_modules/react-datepicker/dist/react-datepicker.min.js"),react_datepicker_min_default=__webpack_require__.n(react_datepicker_min);__webpack_require__("../node_modules/react-datepicker/dist/react-datepicker.css"),__webpack_require__("./src/components/DateRangePickerV2/DateRangePickerV2.css");var calIcon=__webpack_require__("./src/assets/icons/calIcon.svg"),close_sm=__webpack_require__("./src/assets/icons/close-sm.svg"),chevronDown=__webpack_require__("./src/assets/icons/newSideNav/chevronDown.svg"),DateInputShowComponent=function(param){var id=param.id,placeholder=param.placeholder,onClick=param.onClick,ref=param.ref,clearDate=param.clearDate,setOpen=param.setOpen,onClickHandler=function(event){onClick&&onClick(event)},width="Date"===placeholder?"60px":"200px";return react.createElement("div",{className:"bg-bg-primary rounded-full flex items-center group cursor-pointer"},react.createElement("div",{className:"bg-bg-primary rounded-l-full py-[8px] pl-2 group-hover:bg-bg-primary_hover "},react.createElement("img",{src:calIcon,alt:"calendar",className:"w-5 h-5"})),react.createElement("input",{id:id,value:placeholder,onClick:function(e){onClickHandler(e),setOpen(!0)},ref:ref,className:"focus:ring-0 border-none font-semibold bg-bg-primary text-sm  text-text-secondary cursor-pointer  group-hover:bg-bg-primary_hover",style:{width:"".concat(width)},onChange:function(e){console.log(e.target.value)}}),"Date"!==placeholder?react.createElement("div",{className:"bg-bg-primary rounded-r-full py-3 pr-2 cursor-pointer group-hover:bg-bg-primary_hover",onClick:clearDate},react.createElement("img",{src:close_sm,alt:"calendar",className:"w-3 h-3"})):react.createElement("div",{className:"bg-bg-primary rounded-r-full py-2 pr-1 cursor-pointer group-hover:bg-bg-primary_hover"},react.createElement("img",{src:chevronDown,alt:"calendar",className:"w-5 h-5"})))};try{DateInputShowComponent.displayName="DateInputShowComponent",DateInputShowComponent.__docgenInfo={description:"",displayName:"DateInputShowComponent",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLElement> | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!0,type:{name:"Ref<HTMLDivElement>"}},clearDate:{defaultValue:null,description:"",name:"clearDate",required:!0,type:{name:"() => void"}},setOpen:{defaultValue:null,description:"",name:"setOpen",required:!0,type:{name:"(open: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DateRangePickerV2/DateInputShowComponent.tsx#DateInputShowComponent"]={docgenInfo:DateInputShowComponent.__docgenInfo,name:"DateInputShowComponent",path:"src/components/DateRangePickerV2/DateInputShowComponent.tsx#DateInputShowComponent"})}catch(__react_docgen_typescript_loader_error){}var ChevronLeftIcon=__webpack_require__("../node_modules/@heroicons/react/20/solid/esm/ChevronLeftIcon.js"),ChevronRightIcon=__webpack_require__("../node_modules/@heroicons/react/20/solid/esm/ChevronRightIcon.js"),dayjs_min=__webpack_require__("../node_modules/dayjs/dayjs.min.js"),dayjs_min_default=__webpack_require__.n(dayjs_min),ButtonV2=__webpack_require__("./src/components/ButtonV2/index.ts");let DateRangePickerV2_CustomHeaderProps=function(param){var date=param.date,decreaseMonth=param.decreaseMonth,increaseMonth=param.increaseMonth,setDateRange=param.setDateRange,setOpen=param.setOpen,showShortcuts=param.showShortcuts;return react.createElement("div",{className:"bg-bg-primary rounded-4xl"},react.createElement("div",{className:"flex justify-between items-center"},react.createElement("div",{className:"cursor-pointer p-2 rounded-full hover:bg-bg-primary_hover",onClick:decreaseMonth},react.createElement(ChevronLeftIcon.A,{className:"h-5 w-5","aria-hidden":"true",color:"#1570ef"})),react.createElement("div",{className:"font-medium text-fg-secondary",style:{fontSize:"16px"}},date.toLocaleDateString("en-US",{month:"long",year:"numeric"})),react.createElement("div",{className:"cursor-pointer p-2 rounded-full hover:bg-bg-primary_hover",onClick:increaseMonth},react.createElement(ChevronRightIcon.A,{className:"h-5 w-5","aria-hidden":"true",color:"#1570ef"}))),showShortcuts&&react.createElement("div",{className:"flex justify-between items-center pb-1"},react.createElement(ButtonV2.J,{hierarchy:"tertiary",textColor:"text-button-tertiaryColorFg",onClick:function(){setDateRange([dayjs_min_default()().subtract(1,"week").toDate(),dayjs_min_default()().toDate()]),setOpen(!1)}},"Last Week"),react.createElement(ButtonV2.J,{hierarchy:"tertiary",textColor:"text-button-tertiaryColorFg",onClick:function(){setDateRange([dayjs_min_default()().subtract(1,"month").toDate(),dayjs_min_default()().toDate()]),setOpen(!1)}},"Last Month"),react.createElement(ButtonV2.J,{hierarchy:"tertiary",textColor:"text-button-tertiaryColorFg",onClick:function(){setDateRange([dayjs_min_default()().subtract(1,"year").toDate(),dayjs_min_default()().toDate()]),setOpen(!1)}},"Last Year")))};try{CustomHeaderProps.displayName="CustomHeaderProps",CustomHeaderProps.__docgenInfo={description:"",displayName:"CustomHeaderProps",props:{date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"Date"}},decreaseMonth:{defaultValue:null,description:"",name:"decreaseMonth",required:!0,type:{name:"() => void"}},increaseMonth:{defaultValue:null,description:"",name:"increaseMonth",required:!0,type:{name:"() => void"}},setDateRange:{defaultValue:null,description:"",name:"setDateRange",required:!0,type:{name:"(dateRange: [Date | null, Date | null]) => void"}},setOpen:{defaultValue:null,description:"",name:"setOpen",required:!0,type:{name:"(open: boolean) => void"}},showShortcuts:{defaultValue:null,description:"",name:"showShortcuts",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DateRangePickerV2/CustomHeaderProps.tsx#CustomHeaderProps"]={docgenInfo:CustomHeaderProps.__docgenInfo,name:"CustomHeaderProps",path:"src/components/DateRangePickerV2/CustomHeaderProps.tsx#CustomHeaderProps"})}catch(__react_docgen_typescript_loader_error){}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var DateRangePickerV2_DateRangePickerV2=function(param){var onDateRangeChange=param.onDateRangeChange,defaultDateRange=param.defaultDateRange,showShortcuts=param.showShortcuts,_useState=_sliced_to_array((0,react.useState)(defaultDateRange),2),dateRange=_useState[0],setDateRange=_useState[1],_useState1=_sliced_to_array((0,react.useState)(defaultDateRange[0]||void 0),2),startDate=_useState1[0],setStartDate=_useState1[1],_useState2=_sliced_to_array((0,react.useState)(defaultDateRange[1]||void 0),2),endDate=_useState2[0],setEndDate=_useState2[1],_useState3=_sliced_to_array((0,react.useState)(!1),2),open=_useState3[0],setOpen=_useState3[1],clearDate=function(){setDateRange([null,null]),onDateRangeChange([null,null])},CustomDateInput=(0,react.forwardRef)(function(param,ref){var value=param.value,onClick=param.onClick;return react.createElement(DateInputShowComponent,{id:"date-picker",placeholder:value||"Date",onClick:onClick,ref:ref,clearDate:clearDate,setOpen:setOpen})});(0,react.useEffect)(function(){dateRange[0]?setStartDate(dateRange[0]):setStartDate(void 0),dateRange[1]?setEndDate(dateRange[1]):setEndDate(void 0)},[dateRange]);var handleDateRangeChange=function(dateRange){setDateRange(dateRange),dateRange[0]?setStartDate(dateRange[0]):setStartDate(void 0),dateRange[1]?setEndDate(dateRange[1]):setEndDate(void 0),onDateRangeChange(dateRange)};return react.createElement("div",{className:" relative z-99"},react.createElement(react_datepicker_min_default(),{selectsRange:!0,startDate:startDate,endDate:endDate,onChange:function(update){handleDateRangeChange(update)},calendarStartDay:1,customInput:react.createElement(CustomDateInput,null),open:open,onCalendarOpen:function(){return setOpen(!0)},onCalendarClose:function(){return setOpen(!1)},renderCustomHeader:function(props){return react.createElement(DateRangePickerV2_CustomHeaderProps,{date:props.date,decreaseMonth:props.decreaseMonth,increaseMonth:props.increaseMonth,setDateRange:handleDateRangeChange,setOpen:setOpen,showShortcuts:showShortcuts})}}))};let components_DateRangePickerV2_DateRangePickerV2=DateRangePickerV2_DateRangePickerV2;try{DateRangePickerV2_DateRangePickerV2.displayName="DateRangePickerV2",DateRangePickerV2_DateRangePickerV2.__docgenInfo={description:"",displayName:"DateRangePickerV2",props:{onDateRangeChange:{defaultValue:null,description:"",name:"onDateRangeChange",required:!0,type:{name:"(dateRange: [Date | null, Date | null]) => void"}},defaultDateRange:{defaultValue:null,description:"",name:"defaultDateRange",required:!0,type:{name:"[Date | null, Date | null]"}},showShortcuts:{defaultValue:null,description:"",name:"showShortcuts",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DateRangePickerV2/DateRangePickerV2.tsx#DateRangePickerV2"]={docgenInfo:DateRangePickerV2_DateRangePickerV2.__docgenInfo,name:"DateRangePickerV2",path:"src/components/DateRangePickerV2/DateRangePickerV2.tsx#DateRangePickerV2"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DropdownMenu/DropdownMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>DropdownMenu});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var DropdownMenu=function(param){var trigger=param.trigger,items=param.items,_param_placement=param.placement,controlledOpen=param.open,_param_defaultOpen=param.defaultOpen,onOpenChange=param.onOpenChange,_param_className=param.className,_param_testId=param.testId,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0!==_param_defaultOpen&&_param_defaultOpen),2),internalOpen=_useState[0],setInternalOpen=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),hoveredIndex=_useState1[0],setHoveredIndex=_useState1[1],_useState2=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),openSubmenu=_useState2[0],setOpenSubmenu=_useState2[1],menuRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),isControlled=void 0!==controlledOpen,open=isControlled?controlledOpen:internalOpen;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(open){var handleKeyDown=function(e){if("Escape"===e.key)handleClose();else if("ArrowDown"===e.key)e.preventDefault(),setHoveredIndex(function(prev){return null===prev?0:Math.min(prev+1,items.length-1)});else if("ArrowUp"===e.key)e.preventDefault(),setHoveredIndex(function(prev){return null===prev?items.length-1:Math.max(prev-1,0)});else if(("Enter"===e.key||" "===e.key)&&(e.preventDefault(),null!==hoveredIndex&&items[hoveredIndex])){var item=items[hoveredIndex];item.children?setOpenSubmenu(item.label):!item.disabled&&item.onClick&&(item.onClick(),handleClose())}};return document.addEventListener("keydown",handleKeyDown),function(){return document.removeEventListener("keydown",handleKeyDown)}}},[open,hoveredIndex,items]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var handleClickOutside=function(e){menuRef.current&&!menuRef.current.contains(e.target)&&handleClose()};if(open)return document.addEventListener("mousedown",handleClickOutside),function(){return document.removeEventListener("mousedown",handleClickOutside)}},[open]);var handleClose=function(){isControlled||setInternalOpen(!1),null==onOpenChange||onOpenChange(!1),setHoveredIndex(null),setOpenSubmenu(null)},renderMenuItem=function(item,index){var level=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(item.separator)return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:"separator-".concat(index),className:"h-px bg-border-secondary my-1"});var hasChildren=item.children&&item.children.length>0,isHovered=hoveredIndex===index;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:index,className:"relative"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:function(){hasChildren?setOpenSubmenu(openSubmenu===item.label?null:item.label):!item.disabled&&item.onClick&&(item.onClick(),handleClose())},onMouseEnter:function(){return setHoveredIndex(index)},disabled:item.disabled,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-full px-4 py-2 text-left flex items-center justify-between gap-3 text-sm","hover:bg-bg-secondary transition-colors",isHovered&&"bg-bg-secondary",item.disabled&&"opacity-50 cursor-not-allowed",!item.disabled&&"cursor-pointer")},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center gap-3"},item.icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"w-4 h-4"},"string"==typeof item.icon?react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:item.icon,alt:""}):item.icon),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-text-primary"},item.label)),hasChildren&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{className:"w-4 h-4 text-text-quaternary",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"}))),hasChildren&&openSubmenu===item.label&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute z-50 bg-bg-primary border border-border-secondary rounded-lg shadow-xl py-1 min-w-[200px]","top-0 left-full ml-2")},item.children.map(function(child,childIndex){return renderMenuItem(child,childIndex,level+1)})))};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative inline-block",void 0===_param_className?"":_param_className),ref:menuRef,"data-testid":void 0===_param_testId?"dropdown-menu":_param_testId},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{onClick:function(){var newOpen=!open;isControlled||setInternalOpen(newOpen),null==onOpenChange||onOpenChange(newOpen),newOpen||(setHoveredIndex(null),setOpenSubmenu(null))}},trigger),open&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute z-[9999] bg-bg-primary border border-border-secondary rounded-lg shadow-xl py-1 min-w-[200px]",{"top-left":"bottom-full right-0 mb-2","top-right":"bottom-full left-0 mb-2","bottom-left":"top-full right-0 mt-2","bottom-right":"top-full left-0 mt-2"}[void 0===_param_placement?"bottom-left":_param_placement])},items.map(function(item,index){return renderMenuItem(item,index)})))};try{DropdownMenu.displayName="DropdownMenu",DropdownMenu.__docgenInfo={description:`DropdownMenu - Enhanced dropdown with keyboard navigation and sub-menus
More sophisticated than basic Dropdown`,displayName:"DropdownMenu",props:{trigger:{defaultValue:null,description:"Trigger element",name:"trigger",required:!0,type:{name:"ReactNode"}},items:{defaultValue:null,description:"Menu items",name:"items",required:!0,type:{name:"DropdownMenuItem[]"}},placement:{defaultValue:{value:"bottom-left"},description:"Placement",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'}]}},open:{defaultValue:null,description:"Whether menu is open (controlled)",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"false"},description:"Default open state",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback when open state changes",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"dropdown-menu"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropdownMenu/DropdownMenu.tsx#DropdownMenu"]={docgenInfo:DropdownMenu.__docgenInfo,name:"DropdownMenu",path:"src/components/DropdownMenu/DropdownMenu.tsx#DropdownMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FeedCard/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function Card(_param){var title=_param.title,subtitle=_param.subtitle,icon=_param.icon,children=_param.children,_param_size=_param.size,size=void 0===_param_size?"md":_param_size,onClickHandler=_param.onClickHandler,props=_object_without_properties(_param,["title","subtitle","icon","children","size","onClickHandler"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_object_spread({className:"flex justify-between items-center gap-2 px-4 py-2 rounded-5xl bg-bg-primary_alt hover:bg-bg-secondary_hover ".concat(onClickHandler?"cursor-pointer":""),onClick:onClickHandler},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-row gap-2 items-center"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex-shrink-0"},icon),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col flex-1 min-w-0"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"".concat({sm:"text-sm",md:"text-md",lg:"text-lg"}[size]," font-semibold text-text-secondary line-clamp-1"),title:"string"==typeof title?title:""},title),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"".concat({sm:"text-xs",md:"text-sm",lg:"text-md"}[size]," font-regular text-text-tertiary line-clamp-1"),title:"string"==typeof subtitle?subtitle:""},subtitle))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex-shrink-0"},children))}let __WEBPACK_DEFAULT_EXPORT__=Card;try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},onClickHandler:{defaultValue:null,description:"",name:"onClickHandler",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FeedCard/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/FeedCard/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FeedCard/FeedCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_assets_icons_close_sm_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/assets/icons/close-sm.svg"),_ButtonV2__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ButtonV2/index.ts"),_ProgressBar_ProgressBar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ProgressBar/ProgressBar.tsx"),_Checkbox__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Checkbox/index.ts"),_MetricItem_MetricItem__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/MetricItem/MetricItem.tsx"),_Card__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/FeedCard/Card.tsx"),_Badge__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Badge/index.ts"),_Icons_Icons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/Icons/Icons.tsx"),FeedCard=function(param){param.iconLeft;var title=param.title,type=param.type,closeClickHandler=param.closeClickHandler,_param_showCloseButton=param.showCloseButton,_param_progress=param.progress,_param_steps=param.steps,steps=void 0===_param_steps?[]:_param_steps,_param_reportItems=param.reportItems,reportItems=void 0===_param_reportItems?[]:_param_reportItems,viewAllClickHandler=param.viewAllClickHandler,_param_defaultItems=param.defaultItems,defaultItems=void 0===_param_defaultItems?[]:_param_defaultItems,_param_cardStyle=param.cardStyle,getRightDiv=function(item){var rightDiv=null==item?void 0:item.children;return(null==item?void 0:item.date)&&(null==item?void 0:item.dateType)=="overdue"?rightDiv=react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Badge__WEBPACK_IMPORTED_MODULE_7__.A,{color:"custom",variant:"filled",size:"xs",customClass:{filled:"bg-utility-error-50 text-utility-error-700"},border:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-row gap-1 items-center"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icons__WEBPACK_IMPORTED_MODULE_8__.F,{name:"clock-stopwatch",size:"xxs",color:"text-utility-error-700"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,new Date(item.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})))):(null==item?void 0:item.date)&&(null==item?void 0:item.dateType)=="default"&&(rightDiv=react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Badge__WEBPACK_IMPORTED_MODULE_7__.A,{color:"custom",variant:"filled",size:"xs",customClass:{filled:"bg-utility-gray-50 text-utility-gray-700"},border:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-row gap-1 items-center"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icons__WEBPACK_IMPORTED_MODULE_8__.F,{name:"clock-stopwatch",size:"xxs",color:"text-utility-gray-700"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,new Date(item.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short"}))))),rightDiv};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col p-6 bg-bg-primary_alt hover:bg-bg-primary_hover rounded-5xl gap-2 ".concat(void 0===_param_cardStyle?"h-[360px] w-xxs":_param_cardStyle)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col h-full"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-row justify-between items-center h-8"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-md font-semibold text-text-secondary"},title),void 0!==_param_showCloseButton&&_param_showCloseButton&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ButtonV2__WEBPACK_IMPORTED_MODULE_2__.J,{hierarchy:"tertiary",size:"xs",shape:"rounded",iconTrailingSrc:_assets_icons_close_sm_svg__WEBPACK_IMPORTED_MODULE_1__,iconOnly:!0,onClick:closeClickHandler})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex-grow"},"getting started"===type&&(steps&&steps.length>0?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col gap-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"py-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProgressBar_ProgressBar__WEBPACK_IMPORTED_MODULE_3__.z,{progress:void 0===_param_progress?0:_param_progress,size:"sm",showLabel:!0})),steps.map(function(step){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:step.id,className:"flex flex-row gap-2 items-center px-4 py-2 rounded-5xl hover:bg-bg-secondary_hover"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Checkbox__WEBPACK_IMPORTED_MODULE_4__.S,{id:step.id.toString(),checked:step.isCompleted?"basic":"unchecked",pointerClassName:"cursor-default"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-text-secondary text-sm font-medium"},step.step_name))})):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex h-full items-center justify-center gap-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-text-secondary text-sm font-semibold"},"No items found"))),"report"===type&&(reportItems&&reportItems.length>0?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col gap-2"},reportItems.map(function(item){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MetricItem_MetricItem__WEBPACK_IMPORTED_MODULE_5__.i,{data:item.data,title:item.title,percentageChange:item.percentageChange,size:"sm"})})):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex h-full items-center justify-center gap-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-text-secondary text-sm font-medium"},"No items found"))),"default"===type&&(defaultItems&&defaultItems.length>0?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col gap-2"},defaultItems.map(function(item){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Card__WEBPACK_IMPORTED_MODULE_6__.A,{title:item.title,size:"sm",icon:item.icon,children:getRightDiv(item),onClickHandler:item.onClickHandler})})):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex h-full items-center justify-center gap-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-text-secondary text-sm font-medium"},"No items found")))),viewAllClickHandler&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"mt-auto pt-2 flex justify-end"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ButtonV2__WEBPACK_IMPORTED_MODULE_2__.J,{shape:"rounded",hierarchy:"tertiary",children:"View All",onClick:viewAllClickHandler}))))};let __WEBPACK_DEFAULT_EXPORT__=FeedCard;try{FeedCard.displayName="FeedCard",FeedCard.__docgenInfo={description:"",displayName:"FeedCard",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"getting started"'},{value:'"report"'},{value:'"suggestion"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | Element"}},closeClickHandler:{defaultValue:null,description:"",name:"closeClickHandler",required:!1,type:{name:"(() => void)"}},showCloseButton:{defaultValue:{value:"false"},description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"string | Element"}},progress:{defaultValue:{value:"0"},description:"",name:"progress",required:!1,type:{name:"number"}},cardStyle:{defaultValue:{value:"h-[360px] w-xxs"},description:"",name:"cardStyle",required:!1,type:{name:"string"}},steps:{defaultValue:{value:"[]"},description:"",name:"steps",required:!1,type:{name:"{ step_name: string; id: string | number; isCompleted: boolean; }[]"}},reportItems:{defaultValue:{value:"[]"},description:"",name:"reportItems",required:!1,type:{name:"{ title: string; data: number; percentageChange: number; }[]"}},defaultItems:{defaultValue:{value:"[]"},description:"",name:"defaultItems",required:!1,type:{name:'{ icon?: Element; title: string | Element; date?: string; dateType?: "default" | "overdue" | undefined; children?: Element | undefined; onClickHandler?: (() => void) | undefined; }[] | undefined'}},viewAllClickHandler:{defaultValue:null,description:"",name:"viewAllClickHandler",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FeedCard/FeedCard.tsx#FeedCard"]={docgenInfo:FeedCard.__docgenInfo,name:"FeedCard",path:"src/components/FeedCard/FeedCard.tsx#FeedCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FileManager/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>FileManager_FileManager});var react=__webpack_require__("../node_modules/react/index.js"),utils=__webpack_require__("./src/components/Comments/utils.ts"),Table=__webpack_require__("./src/components/Table/Table.tsx"),src=__webpack_require__("./src/index.ts"),File=function(param){var id=param.id,icon=param.icon,title=param.title,description=param.description,timestamp=param.timestamp,onClickHandler=(param.user,param.onClickHandler),optionsDiv=param.optionsDiv;return react.createElement(react.Fragment,null,react.createElement("div",{key:id,className:"bg-bg-primary hover:bg-bg-primary_hover border-border-secondary border w-full p-4 cursor-pointer min-w-[250px] min-h-[84px] rounded-3xl shadow-boxShadowBlack flex flex-col justify-between",onClick:function(){onClickHandler&&onClickHandler()}},react.createElement("div",{className:"flex justify-between items-start"},react.createElement("div",{className:"flex gap-2 justify-center items-center"},"string"==typeof icon?react.createElement("img",{className:"h-[20px]",src:icon,alt:""}):icon,title),optionsDiv&&optionsDiv),react.createElement("div",{className:"flex justify-between"},react.createElement("div",null,description),react.createElement("div",{className:"text-sm font-normal text-text-tertiary pr-5"},(0,utils.f)(new Date(null!=timestamp?timestamp:""))))))};try{File.displayName="File",File.__docgenInfo={description:"",displayName:"File",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string | Element"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string | Element"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | Element"}},timestamp:{defaultValue:null,description:"",name:"timestamp",required:!0,type:{name:"string"}},user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"IFileUserProps"}},onClickHandler:{defaultValue:null,description:"",name:"onClickHandler",required:!1,type:{name:"(() => void)"}},optionsDiv:{defaultValue:null,description:"",name:"optionsDiv",required:!1,type:{name:"Element"}},coverImage:{defaultValue:null,description:"",name:"coverImage",required:!1,type:{name:"string"}},titleImage:{defaultValue:null,description:"",name:"titleImage",required:!1,type:{name:"string | Element"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FileManager/File.tsx#File"]={docgenInfo:File.__docgenInfo,name:"File",path:"src/components/FileManager/File.tsx#File"})}catch(__react_docgen_typescript_loader_error){}var HomeCard=__webpack_require__("./src/components/HomeCard/HomeCard.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx"),MarketplaceCard=function(param){var id=param.id,icon=param.icon,title=param.title,description=param.description,user=(param.timestamp,param.user),onClickHandler=param.onClickHandler,optionsDiv=param.optionsDiv,button=param.button,onClickButton=param.onClickButton,isDisabled=param.isDisabled;return react.createElement(react.Fragment,null,react.createElement("div",{key:id,className:"bg-bg-secondary w-full p-4 min-w-[250px] min-h-[84px] rounded-5xl  flex flex-col justify-between gap-1 ".concat(onClickHandler?"cursor-pointer hover:bg-bg-secondary_hover":isDisabled?"cursor-not-allowed":"cursor-default"),onClick:function(){onClickHandler&&onClickHandler()}},react.createElement("div",{className:"flex justify-between"},react.createElement("div",{className:"flex gap-2 justify-center items-center"},"string"==typeof icon?react.createElement("img",{className:"h-[20px]",src:icon,alt:""}):icon,react.createElement("div",{className:"flex flex-col gap-1"},react.createElement("span",{className:"text-base font-bold text-text-secondary"},title),description&&react.createElement("span",{className:"text-base font-regular text-text-tertiary"},description))),optionsDiv&&optionsDiv),react.createElement("div",{className:"flex justify-between items-center"},react.createElement("div",{className:"text-sm font-normal text-text-tertiary flex gap-2 items-center"}," ",(null==user?void 0:user.avatar)&&react.createElement(src.eu,{size:"sm",imageUrl:null==user?void 0:user.avatar})," ",null==user?void 0:user.fullname),"string"==typeof button?react.createElement(Button.$,{size:"sm",color:"primary",shape:"circle"},react.createElement("div",{className:"px-3",onClick:function(){onClickButton&&onClickButton()}},button)):button)))};try{MarketplaceCard.displayName="MarketplaceCard",MarketplaceCard.__docgenInfo={description:"",displayName:"MarketplaceCard",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string | Element"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string | Element"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | Element"}},timestamp:{defaultValue:null,description:"",name:"timestamp",required:!0,type:{name:"string"}},user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"IFileUserProps"}},onClickHandler:{defaultValue:null,description:"",name:"onClickHandler",required:!1,type:{name:"(() => void)"}},optionsDiv:{defaultValue:null,description:"",name:"optionsDiv",required:!1,type:{name:"Element"}},coverImage:{defaultValue:null,description:"",name:"coverImage",required:!1,type:{name:"string"}},titleImage:{defaultValue:null,description:"",name:"titleImage",required:!1,type:{name:"string | Element"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"string | Element"}},onClickButton:{defaultValue:null,description:"",name:"onClickButton",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FileManager/MarketplaceCard.tsx#MarketplaceCard"]={docgenInfo:MarketplaceCard.__docgenInfo,name:"MarketplaceCard",path:"src/components/FileManager/MarketplaceCard.tsx#MarketplaceCard"})}catch(__react_docgen_typescript_loader_error){}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var columns=[{key:"name",title:"Name",headerStyle:"px-3 py-3.5 text-left text-sm font-semibold text-text-tertiary",columnStyle:"whitespace-nowrap px-3 py-4 text-sm text-text-primary"},{key:"owner",title:"Owner",headerStyle:"px-3 py-3.5 text-left text-sm font-semibold text-text-tertiary",columnStyle:"whitespace-nowrap px-3 py-4 text-sm text-text-tertiary"},{key:"last_modified",title:"Last Modified",headerStyle:"px-3 py-3.5 text-left text-sm font-semibold text-text-tertiary",columnStyle:"whitespace-nowrap px-3 py-4 text-sm text-text-tertiary"},{key:"action",title:"Action",headerStyle:"px-3 py-3.5 text-left text-sm font-semibold text-text-tertiary",columnStyle:"whitespace-nowrap px-3 py-4 text-sm text-text-tertiary"}],formatDataForDocument=function(item){var _item_user,_item_user1;return{title:item.title,userAvatar:null==(_item_user=item.user)?void 0:_item_user.avatar,timestamp:item.timestamp,fullName:null==(_item_user1=item.user)?void 0:_item_user1.fullname,coverImage:null==item?void 0:item.coverImage,titleImage:null==item?void 0:item.titleImage,onCardClick:function(){item.onClickHandler&&item.onClickHandler()},optionsDiv:item.optionsDiv}},FileManager=function(param){var data=param.data,_param_grid=param.grid,heading=param.heading,_param_view=param.view,view=void 0===_param_view?"gallery":_param_view,_param_fileType=(param.varient,param.fileType),fileType=void 0===_param_fileType?"folder":_param_fileType,_param_showAction=param.showAction,showAction=void 0===_param_showAction||_param_showAction;return react.createElement(react.Fragment,null,"gallery"==view&&react.createElement("div",{className:"flex flex-col gap-4 min-w-[720px]"},react.createElement("div",{className:"flex flex-row justify-between items-center"},react.createElement("h1",{className:"text-text-primary font-inter text-lg font-semibold leading-7 tracking-[0.18px]"},heading)),react.createElement("div",{className:"grid grid-cols-".concat(void 0===_param_grid?3:_param_grid," gap-4 w-full")},null==data?void 0:data.map(function(item,index){return"folder"==fileType?react.createElement(File,_object_spread_props(_object_spread({},item),{key:index})):"document"==fileType?react.createElement(HomeCard.A,formatDataForDocument(item)):react.createElement(MarketplaceCard,item)}))),"list"==view&&react.createElement("div",{className:"flex flex-col gap-4 min-w-[720px]"},react.createElement(Table.X,{data:data.map(function(item){var _item_user,_item_user1,_item_user2,_item_user3,_item_timestamp;return{name:react.createElement("div",{className:"flex items-center gap-2"},item.icon,item.title),owner:(null==(_item_user=item.user)?void 0:_item_user.fullname)&&react.createElement("div",{className:"flex items-center gap-2"},react.createElement(src.eu,{size:"xs",imageUrl:null==(_item_user1=item.user)?void 0:_item_user1.avatar,fullName:null==(_item_user2=item.user)?void 0:_item_user2.fullname}),react.createElement("span",{className:"text-text-primary"},null==(_item_user3=item.user)?void 0:_item_user3.fullname)," "),last_modified:(0,utils.f)(new Date(null!=(_item_timestamp=item.timestamp)?_item_timestamp:"")),action:item.optionsDiv}}),paginationEnabled:!1,showTopSection:!1,multiSelect:!1,columns:columns.filter(function(column){return!!showAction||"action"!==column.key}),TableTitle:""})))};let FileManager_FileManager=FileManager;try{FileManager.displayName="FileManager",FileManager.__docgenInfo={description:"",displayName:"FileManager",props:{grid:{defaultValue:{value:"3"},description:"",name:"grid",required:!1,type:{name:"Number"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string | Element"}},view:{defaultValue:{value:"gallery"},description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"gallery"'}]}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"IFileProps[] | IMarketplaceCardProps[]"}},varient:{defaultValue:{value:"default"},description:"",name:"varient",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"large"'}]}},fileType:{defaultValue:{value:"folder"},description:"",name:"fileType",required:!1,type:{name:"enum",value:[{value:'"document"'},{value:'"folder"'},{value:'"marketplace"'}]}},showAction:{defaultValue:{value:"true"},description:"",name:"showAction",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FileManager/FileManager.tsx#FileManager"]={docgenInfo:FileManager.__docgenInfo,name:"FileManager",path:"src/components/FileManager/FileManager.tsx#FileManager"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FloatingToolbar/FloatingToolbar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>FloatingToolbar});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_assets_icons_newSideNav_chevronDown_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/assets/icons/newSideNav/chevronDown.svg"),_assets_icons_close_sm_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/assets/icons/close-sm.svg"),_Button_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/Button.tsx"),FloatingToolbar=function(param){param.variant;var children=param.children,action=(param.image,param.action),onBackClickHandler=param.onBackClickHandler,onCloseClickHandler=param.onCloseClickHandler,_param_customClass=param.customClass,_param_position=param.position,_param_showBackButton=param.showBackButton,_param_showCloseButton=param.showCloseButton;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"z-50 fixed ".concat(void 0===_param_position?"bottom-12 left-1/2 transform -translate-x-1/2":_param_position," flex gap-2 justify-between bg-bg-secondary rounded-6xl p-4 ").concat(void 0===_param_customClass?"w-[528px] h-fit":_param_customClass)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex gap-2 items-center"},void 0!==_param_showBackButton&&_param_showBackButton&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_3__.$,{onClick:onBackClickHandler,imgSrc:_assets_icons_newSideNav_chevronDown_svg__WEBPACK_IMPORTED_MODULE_1__,color:"label",variant:"outlined",shape:"circle",size:"mini",style:{transform:"rotate(90deg)"}}),children),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex gap-2 items-center"},action,void 0!==_param_showCloseButton&&_param_showCloseButton&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_3__.$,{onClick:onCloseClickHandler,imgSrc:_assets_icons_close_sm_svg__WEBPACK_IMPORTED_MODULE_2__,color:"label",variant:"outlined",shape:"circle",size:"mini"})))};try{FloatingToolbar.displayName="FloatingToolbar",FloatingToolbar.__docgenInfo={description:"",displayName:"FloatingToolbar",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"custom"'},{value:'"add"'},{value:'"permission"'},{value:'"authentication"'}]}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ReactNode"}},onBackClickHandler:{defaultValue:null,description:"",name:"onBackClickHandler",required:!1,type:{name:"(() => void)"}},onCloseClickHandler:{defaultValue:null,description:"",name:"onCloseClickHandler",required:!1,type:{name:"(() => void)"}},customClass:{defaultValue:{value:"w-[528px] h-fit"},description:"",name:"customClass",required:!1,type:{name:"string"}},position:{defaultValue:{value:"bottom-12 left-1/2 transform -translate-x-1/2"},description:"",name:"position",required:!1,type:{name:"string"}},showBackButton:{defaultValue:{value:"false"},description:"",name:"showBackButton",required:!1,type:{name:"boolean"}},showCloseButton:{defaultValue:{value:"false"},description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingToolbar/FloatingToolbar.tsx#FloatingToolbar"]={docgenInfo:FloatingToolbar.__docgenInfo,name:"FloatingToolbar",path:"src/components/FloatingToolbar/FloatingToolbar.tsx#FloatingToolbar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Form/Form.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>Form});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),Form=function(param){var children=param.children,onSubmit=param.onSubmit,_param_className=param.className,_param_testId=param.testId;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("form",{onSubmit:function(e){e.preventDefault(),null==onSubmit||onSubmit(e)},className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("space-y-4",void 0===_param_className?"":_param_className),"data-testid":void 0===_param_testId?"form":_param_testId},children)};try{Form.displayName="Form",Form.__docgenInfo={description:`Form - Form wrapper component with validation
Provides form context and validation utilities`,displayName:"Form",props:{children:{defaultValue:null,description:"Form fields/children",name:"children",required:!0,type:{name:"ReactNode"}},onSubmit:{defaultValue:null,description:"Form submit handler",name:"onSubmit",required:!1,type:{name:"((e: FormEvent<HTMLFormElement>) => void)"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"form"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Form/Form.tsx#Form"]={docgenInfo:Form.__docgenInfo,name:"Form",path:"src/components/Form/Form.tsx#Form"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FormGroup/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>FormGroup_FormGroup});var react=__webpack_require__("../node_modules/react/index.js"),FormGroup=function(props){var children=props.children;return react.createElement("div",{className:"flex w-full flex-col items-start justify-center gap-4"},children.map(function(child){return child}))};let FormGroup_FormGroup=FormGroup;try{FormGroup.displayName="FormGroup",FormGroup.__docgenInfo={description:"",displayName:"FormGroup",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormGroup/FormGroup.tsx#FormGroup"]={docgenInfo:FormGroup.__docgenInfo,name:"FormGroup",path:"src/components/FormGroup/FormGroup.tsx#FormGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FormInput/FileUpload/FileInfo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>FileUpload_FileInfo});var react=__webpack_require__("../node_modules/react/index.js");let FileUpload_Spinner=function(){return react.createElement(react.Fragment,null,react.createElement("div",{className:"inline-block w-7 h-7 border-4 border-t-4 border-bg-secondary border-t-fg-brand-primary_alt rounded-full animate-spin"}))};var close_sm=__webpack_require__("./src/assets/icons/close-sm.svg");let file_namespaceObject=__webpack_require__.p+"static/media/file.0954c39d.svg",errorReload_namespaceObject=__webpack_require__.p+"static/media/errorReload.bc646f0f.svg";var picture=__webpack_require__("./src/assets/icons/picture.svg");let docLines_namespaceObject=__webpack_require__.p+"static/media/docLines.81538837.svg";var Icons=__webpack_require__("./src/components/Icons/Icons.tsx"),FileInfo=function(param){var data=param.data,extension=data.mediaName?data.mediaName.split(".").pop():"unknown";return react.createElement("div",{className:"p-3 border border-solid rounded-2xl w-full flex gap-4 hover:bg-bg-primary_hover justify-between ".concat(data.uploadError?"border-border-error bg-bg-primary ":"border-border-secondary bg-bg-primary")},react.createElement("div",{className:"flex gap-4"},react.createElement("div",null,react.createElement("img",{className:"w-9 h-9 dark:filter dark:brightness-50",src:file_namespaceObject,alt:"file"}),react.createElement("div",{className:"relative bottom-[22px] left-[10px] h-0"},function(type){switch(type){case"pdf":case"doc":case"docx":default:return react.createElement("img",{className:"w-4 h-4",src:docLines_namespaceObject,alt:"file"});case"jpg":case"jpeg":case"png":return react.createElement("img",{className:"w-4 h-4",src:picture,alt:"picture"});case"mp4":return react.createElement(Icons.F,{name:"play-circle",color:"text-utility-blue-dark-600",size:"xs"});case"mp3":case"m4a":case"webm":case"mpga":case"wav":case"mpeg":return react.createElement(Icons.F,{name:"music-note-01",color:"text-utility-pink-600",size:"xs"})}}(extension))),react.createElement("div",{className:"flex flex-col"},react.createElement("span",{className:"text-sm font-medium text-text-secondary"},data.mediaName),react.createElement("span",{className:"text-sm font-normal text-text-tertiary"},data.size?function(size){if(!size)return"";var sizeInMB=size/1048576,sizeInGB=size/0x40000000;return sizeInGB>=1?sizeInGB.toFixed(2)+" GB":sizeInMB>=1?sizeInMB.toFixed(2)+" MB":(size/1024).toFixed(2)+" KB"}(data.size):""))),react.createElement("div",null,data.uploadError?react.createElement("img",{src:errorReload_namespaceObject,className:"cursor-pointer",alt:"error"}):100==data.progress?data.handleDelete&&react.createElement("div",{className:"cursor-pointer p-2 rounded-full bg-bg-secondary",onClick:function(){return data.handleDelete&&data.handleDelete(data)}},react.createElement("img",{src:close_sm,alt:"delete"})):data.showLoader&&react.createElement(FileUpload_Spinner,null)))};let FileUpload_FileInfo=FileInfo;try{FileInfo.displayName="FileInfo",FileInfo.__docgenInfo={description:"",displayName:"FileInfo",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"IfileInfo"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormInput/FileUpload/FileInfo.tsx#FileInfo"]={docgenInfo:FileInfo.__docgenInfo,name:"FileInfo",path:"src/components/FormInput/FileUpload/FileInfo.tsx#FileInfo"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FormInput/TextArea/TextArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var TextArea=function(_param){var _param_label=_param.label,_param_className=_param.className,props=_object_without_properties(_param,["label","className"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col items-start justify-center gap-1 w-full"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"font-semibold text-sm text-text-secondary"},void 0===_param_label?"Description":_param_label),react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea",_object_spread({className:"w-full p-3 rounded-[24px] border-2 border-solid font-normal text-base border-border-primary bg-bg-primary ".concat(void 0===_param_className?"":_param_className)},props))))};let __WEBPACK_DEFAULT_EXPORT__=TextArea;try{TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{label:{defaultValue:{value:"Description"},description:"",name:"label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormInput/TextArea/TextArea.tsx#TextArea"]={docgenInfo:TextArea.__docgenInfo,name:"TextArea",path:"src/components/FormInput/TextArea/TextArea.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Grid/Grid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>Grid});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/index.ts"),gapClasses={none:"gap-0",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8"},Grid=function(param){var _param_columns=param.columns,columns=void 0===_param_columns?3:_param_columns,_param_gap=param.gap,children=param.children,_param_className=param.className,_param_testId=param.testId,_useResponsive=(0,_hooks__WEBPACK_IMPORTED_MODULE_2__.Qs)(),isMobile=_useResponsive.isMobile,isTablet=_useResponsive.isTablet;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("grid","number"==typeof columns?isMobile?"grid-cols-1":isTablet?"grid-cols-2":"grid-cols-".concat(columns):isMobile&&columns.sm?"grid-cols-".concat(columns.sm):isTablet&&columns.md?"grid-cols-".concat(columns.md):columns.lg?"grid-cols-".concat(columns.lg):columns.xl?"grid-cols-".concat(columns.xl):"grid-cols-3",gapClasses[void 0===_param_gap?"md":_param_gap],void 0===_param_className?"":_param_className),"data-testid":void 0===_param_testId?"grid":_param_testId},children)};try{Grid.displayName="Grid",Grid.__docgenInfo={description:`Grid - Responsive grid layout component
Perfect for image grids, card grids, and collection views`,displayName:"Grid",props:{columns:{defaultValue:{value:"3"},description:"Number of columns on desktop",name:"columns",required:!1,type:{name:"number | { sm?: number; md?: number; lg?: number | undefined; xl?: number | undefined; } | undefined"}},gap:{defaultValue:{value:"md"},description:"Gap between grid items",name:"gap",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'},{value:'"xl"'}]}},children:{defaultValue:null,description:"Children items",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"grid"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Grid/Grid.tsx#Grid"]={docgenInfo:Grid.__docgenInfo,name:"Grid",path:"src/components/Grid/Grid.tsx#Grid"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/HomeCard/HomeCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_Avatar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Avatar/index.ts"),_Comments_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Comments/utils.ts"),HomeCard=function(param){var title=param.title,subtitle=param.subtitle,userAvatar=param.userAvatar,coverImage=(param.DateCreated,param.coverImage),timestamp=param.timestamp,titleImage=(param.firstName,param.lastName,param.titleImage),fullName=param.fullName,optionsDiv=param.optionsDiv,onCardClick=param.onCardClick;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-bg-secondary flex rounded-[24px] flex-col cursor-pointer border border-border-secondary overflow-hidden",onClick:function(){return onCardClick()}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"h-[100px] rounded-t-2xl w-full bg-utility-gray-200 "},coverImage&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{className:"object-cover w-full rounded-t-2xl h-[100px]",src:coverImage,alt:""})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"h-0 right-[-20px] relative top-[-22px]"},"string"==typeof titleImage?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_1__.A,{imageUrl:titleImage}):titleImage),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:" flex flex-col pl-6 pr-2 py-2.5 justify-around"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-base font-semibold text-text-secondary pt-4 line-clamp-1 pr-4"},title),subtitle&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-bg-brand-solid text-sm font-semibold pt-1.5 pb-1"},subtitle)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-row justify-between"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center pt-2.5 pb-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_1__.A,{imageUrl:userAvatar,fullName:null!=fullName?fullName:"",size:"xs"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"font-normal text-text-tertiary px-3 text-sm"},(0,_Comments_utils__WEBPACK_IMPORTED_MODULE_2__.f)(new Date(timestamp)))),optionsDiv&&optionsDiv)))};let __WEBPACK_DEFAULT_EXPORT__=HomeCard;try{HomeCard.displayName="HomeCard",HomeCard.__docgenInfo={description:"",displayName:"HomeCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | Element"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},userAvatar:{defaultValue:null,description:"",name:"userAvatar",required:!1,type:{name:"string | null"}},DateCreated:{defaultValue:null,description:"",name:"DateCreated",required:!1,type:{name:"string"}},coverImage:{defaultValue:null,description:"",name:"coverImage",required:!1,type:{name:"string"}},timestamp:{defaultValue:null,description:"",name:"timestamp",required:!0,type:{name:"string"}},firstName:{defaultValue:null,description:"",name:"firstName",required:!1,type:{name:"string"}},lastName:{defaultValue:null,description:"",name:"lastName",required:!1,type:{name:"string"}},titleImage:{defaultValue:null,description:"",name:"titleImage",required:!1,type:{name:"ReactNode"}},fullName:{defaultValue:null,description:"",name:"fullName",required:!1,type:{name:"string"}},optionsDiv:{defaultValue:null,description:"",name:"optionsDiv",required:!1,type:{name:"ReactNode"}},onCardClick:{defaultValue:null,description:"",name:"onCardClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HomeCard/HomeCard.tsx#HomeCard"]={docgenInfo:HomeCard.__docgenInfo,name:"HomeCard",path:"src/components/HomeCard/HomeCard.tsx#HomeCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/HomeCardGroup/HomeCardGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_HomeCard_HomeCard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/HomeCard/HomeCard.tsx"),HomeCardGroup=function(param){var heading=param.heading,data=(param.isDraggable,param.data);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col gap-4 min-w-[720px]"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-row justify-between items-center"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"text-text-primary font-inter text-lg font-semibold leading-7 tracking-[0.18px]"},heading)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"grid grid-cols-3 gap-4 w-full"},null==data?void 0:data.map(function(item,index){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:index,className:"w-full"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_HomeCard_HomeCard__WEBPACK_IMPORTED_MODULE_1__.A,item))}))))};let __WEBPACK_DEFAULT_EXPORT__=HomeCardGroup;try{HomeCardGroup.displayName="HomeCardGroup",HomeCardGroup.__docgenInfo={description:"",displayName:"HomeCardGroup",props:{heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string"}},isDraggable:{defaultValue:null,description:"",name:"isDraggable",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"IHomeCardProps[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HomeCardGroup/HomeCardGroup.tsx#HomeCardGroup"]={docgenInfo:HomeCardGroup.__docgenInfo,name:"HomeCardGroup",path:"src/components/HomeCardGroup/HomeCardGroup.tsx#HomeCardGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/HoverCard/HoverCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{j:()=>HoverCard});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var HoverCard=function(param){var children=param.children,content=param.content,_param_delay=param.delay,delay=void 0===_param_delay?300:_param_delay,_param_className=param.className,_param_testId=param.testId,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isOpen=_useState[0],setIsOpen=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({x:0,y:0}),2),position=_useState1[0],setPosition=_useState1[1],timeoutRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),triggerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),cardRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){return function(){timeoutRef.current&&clearTimeout(timeoutRef.current)}},[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(isOpen&&cardRef.current&&triggerRef.current){var cardRect=cardRef.current.getBoundingClientRect(),triggerRect=triggerRef.current.getBoundingClientRect(),x=triggerRect.left+triggerRect.width/2,y=triggerRect.top-cardRect.height-10;x+cardRect.width/2>window.innerWidth&&(x=window.innerWidth-cardRect.width/2-10),x-cardRect.width/2<0&&(x=cardRect.width/2+10),y<0&&(y=triggerRect.bottom+10),setPosition({x:x,y:y})}},[isOpen]),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:triggerRef,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("inline-block",void 0===_param_className?"":_param_className),onMouseEnter:function(e){timeoutRef.current&&clearTimeout(timeoutRef.current),timeoutRef.current=setTimeout(function(){if(triggerRef.current){var rect=triggerRef.current.getBoundingClientRect();setPosition({x:rect.left+rect.width/2,y:rect.top}),setIsOpen(!0)}},delay)},onMouseLeave:function(){timeoutRef.current&&clearTimeout(timeoutRef.current),setIsOpen(!1)},"data-testid":void 0===_param_testId?"hover-card":_param_testId},children,isOpen&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:cardRef,className:"fixed z-[9999] bg-bg-primary border border-border-secondary rounded-lg shadow-xl p-4 max-w-sm",style:{left:"".concat(position.x,"px"),top:"".concat(position.y,"px"),transform:"translate(-50%, -100%)"},onMouseEnter:function(){return setIsOpen(!0)},onMouseLeave:function(){return setIsOpen(!1)}},content))};try{HoverCard.displayName="HoverCard",HoverCard.__docgenInfo={description:`HoverCard - Card shown on hover
Perfect for user previews and tooltips with rich content`,displayName:"HoverCard",props:{children:{defaultValue:null,description:"Trigger element",name:"children",required:!0,type:{name:"ReactNode"}},content:{defaultValue:null,description:"Content to show on hover",name:"content",required:!0,type:{name:"ReactNode"}},delay:{defaultValue:{value:"300"},description:"Delay before showing (ms)",name:"delay",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"hover-card"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HoverCard/HoverCard.tsx#HoverCard"]={docgenInfo:HoverCard.__docgenInfo,name:"HoverCard",path:"src/components/HoverCard/HoverCard.tsx#HoverCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/InfiniteScroll/InfiniteScroll.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>InfiniteScroll});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_Loader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Loader/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error);return}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self1=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self1,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)})}}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _ts_generator(thisArg,body){var f,y,t,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]},g=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return g.next=verb(0),g.throw=verb(1),g.return=verb(2),"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw TypeError("Generator is already executing.");for(;g&&(g=0,op[0]&&(_=0)),_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=(t=_.trys).length>0&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}var InfiniteScroll=function(param){var onLoadMore=param.onLoadMore,hasMore=param.hasMore,_param_isLoading=param.isLoading,isLoading=void 0!==_param_isLoading&&_param_isLoading,loader=param.loader,endMessage=param.endMessage,_param_threshold=param.threshold,threshold=void 0===_param_threshold?200:_param_threshold,children=param.children,_param_className=param.className,_param_testId=param.testId,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isLoadingMore=_useState[0],setIsLoadingMore=_useState[1],observerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),sentinelRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),handleLoadMore=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){return _async_to_generator(function(){return _ts_generator(this,function(_state){switch(_state.label){case 0:if(isLoading||isLoadingMore||!hasMore)return[2];setIsLoadingMore(!0),_state.label=1;case 1:return _state.trys.push([1,,3,4]),[4,onLoadMore()];case 2:return _state.sent(),[3,4];case 3:return setIsLoadingMore(!1),[7];case 4:return[2]}})})()},[onLoadMore,isLoading,isLoadingMore,hasMore]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(hasMore&&!isLoading){var sentinel=sentinelRef.current;if(sentinel)return observerRef.current=new IntersectionObserver(function(entries){_sliced_to_array(entries,1)[0].isIntersecting&&hasMore&&!isLoading&&!isLoadingMore&&handleLoadMore()},{root:null,rootMargin:"".concat(threshold,"px"),threshold:.1}),observerRef.current.observe(sentinel),function(){observerRef.current&&observerRef.current.disconnect()}}},[hasMore,isLoading,isLoadingMore,threshold,handleLoadMore]);var defaultLoader=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex justify-center py-4"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loader__WEBPACK_IMPORTED_MODULE_1__.Loader,{size:"sm"})),defaultEndMessage=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-center py-4 text-text-quaternary text-sm"},"No more items to load");return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:void 0===_param_className?"":_param_className,"data-testid":void 0===_param_testId?"infinite-scroll":_param_testId},children,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:sentinelRef,className:"h-1"}),(isLoading||isLoadingMore)&&hasMore&&(loader||defaultLoader),!hasMore&&!isLoading&&(endMessage||defaultEndMessage))};try{InfiniteScroll.displayName="InfiniteScroll",InfiniteScroll.__docgenInfo={description:`InfiniteScroll - Auto-load more content when scrolling near bottom
Mobile-optimized infinite scroll component`,displayName:"InfiniteScroll",props:{onLoadMore:{defaultValue:null,description:"Callback when more items should be loaded",name:"onLoadMore",required:!0,type:{name:"() => void | Promise<void>"}},hasMore:{defaultValue:null,description:"Whether more items are available",name:"hasMore",required:!0,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"Whether loading is in progress",name:"isLoading",required:!1,type:{name:"boolean"}},loader:{defaultValue:null,description:"Loading indicator component",name:"loader",required:!1,type:{name:"ReactNode"}},endMessage:{defaultValue:null,description:"End message when no more items",name:"endMessage",required:!1,type:{name:"ReactNode"}},threshold:{defaultValue:{value:"200"},description:"Threshold in pixels from bottom to trigger load",name:"threshold",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Children content",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"infinite-scroll"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InfiniteScroll/InfiniteScroll.tsx#InfiniteScroll"]={docgenInfo:InfiniteScroll.__docgenInfo,name:"InfiniteScroll",path:"src/components/InfiniteScroll/InfiniteScroll.tsx#InfiniteScroll"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/InfoChart/InfoChart.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_Card_common_CardKPI__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Card/common/CardKPI.tsx"),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/index.ts"),InfoChart=function(props){var data=props.data,percentageChange=props.percentageChange,trendDescription=props.trendDescription,isDataLaoding=props.isDataLaoding,isPercentageChangeLoading=props.isPercentageChangeLoading;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col w-full items-start gap-4"},isDataLaoding?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.aH,null):react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"font-semibold text-text-primary ".concat(data&&data<=1e3?"text-4xl":"text-3xl")},null!=data?data:"No Data"),isPercentageChangeLoading?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.aH,{size:"sm"}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,null!=percentageChange&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Card_common_CardKPI__WEBPACK_IMPORTED_MODULE_1__.A,{percentageChange:percentageChange,description:trendDescription})))};let __WEBPACK_DEFAULT_EXPORT__=InfoChart;try{InfoChart.displayName="InfoChart",InfoChart.__docgenInfo={description:"",displayName:"InfoChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"string | number"}},percentageChange:{defaultValue:null,description:"",name:"percentageChange",required:!1,type:{name:"number"}},trendDescription:{defaultValue:null,description:"",name:"trendDescription",required:!1,type:{name:"string"}},isDataLaoding:{defaultValue:null,description:"",name:"isDataLaoding",required:!1,type:{name:"boolean"}},isPercentageChangeLoading:{defaultValue:null,description:"",name:"isPercentageChangeLoading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InfoChart/InfoChart.tsx#InfoChart"]={docgenInfo:InfoChart.__docgenInfo,name:"InfoChart",path:"src/components/InfoChart/InfoChart.tsx#InfoChart"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/InfoChart/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_InfoChart__WEBPACK_IMPORTED_MODULE_0__.A});var _InfoChart__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/InfoChart/InfoChart.tsx")},"./src/components/Label/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>_Label__WEBPACK_IMPORTED_MODULE_0__.J});var _Label__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Label/Label.tsx")},"./src/components/LiquidGlassTabBar/LiquidGlassTabBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>LiquidGlassTabBar});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var VARIANTS_COMPACT="compact",LiquidGlassTabBar=function(param){var tabs=param.tabs,controlledActiveTab=param.activeTab,defaultTab=param.defaultTab,onTabChange=param.onTabChange,_param_position=param.position,position=void 0===_param_position?"bottom":_param_position,_param_className=param.className,className=void 0===_param_className?"":_param_className,_param_variant=param.variant,variant=void 0===_param_variant?"default":_param_variant,_param_testId=param.testId,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function(){if(defaultTab)return defaultTab;var _tabs_,firstEnabledTab=tabs.find(function(tab){return!tab.disabled});return(null==firstEnabledTab?void 0:firstEnabledTab.id)||(null==(_tabs_=tabs[0])?void 0:_tabs_.id)||""}),2),internalActiveTab=_useState[0],setInternalActiveTab=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({left:"0px",width:"0px",opacity:0}),2),indicatorStyle=_useState1[0],setIndicatorStyle=_useState1[1],tabRefs=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map),containerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),resizeTimeoutRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),activeTab=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return void 0!==controlledActiveTab?controlledActiveTab:internalActiveTab},[controlledActiveTab,internalActiveTab]),isControlled=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return void 0!==controlledActiveTab},[controlledActiveTab]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){tabs&&0!==tabs.length||console.warn("LiquidGlassTabBar: tabs array is empty or undefined")},[tabs]);var updateIndicator=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){var activeTabElement=tabRefs.current.get(activeTab),container=containerRef.current;if(activeTabElement&&container){var containerRect=container.getBoundingClientRect(),tabRect=activeTabElement.getBoundingClientRect(),left=tabRect.left-containerRect.left,width=tabRect.width;setIndicatorStyle({left:"".concat(left,"px"),width:"".concat(width,"px"),opacity:1})}},[activeTab]),handleResize=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){resizeTimeoutRef.current&&clearTimeout(resizeTimeoutRef.current),resizeTimeoutRef.current=setTimeout(function(){updateIndicator()},100)},[updateIndicator]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var timeoutId=setTimeout(function(){updateIndicator()},0);return window.addEventListener("resize",handleResize),window.addEventListener("orientationchange",handleResize),function(){clearTimeout(timeoutId),window.removeEventListener("resize",handleResize),window.removeEventListener("orientationchange",handleResize),resizeTimeoutRef.current&&clearTimeout(resizeTimeoutRef.current)}},[activeTab,tabs,updateIndicator,handleResize]);var handleTabClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(tabId,disabled){disabled||(isControlled||setInternalActiveTab(tabId),null==onTabChange||onTabChange(tabId))},[isControlled,onTabChange]),handleKeyDown=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(event,tabId,index){var enabledTabs=tabs.filter(function(tab){return!tab.disabled}),currentIndex=enabledTabs.findIndex(function(tab){return tab.id===tabId}),targetIndex=currentIndex;switch(event.key){case"ArrowRight":case"ArrowDown":event.preventDefault(),targetIndex=currentIndex<enabledTabs.length-1?currentIndex+1:0;break;case"ArrowLeft":case"ArrowUp":event.preventDefault(),targetIndex=currentIndex>0?currentIndex-1:enabledTabs.length-1;break;case"Home":event.preventDefault(),targetIndex=0;break;case"End":event.preventDefault(),targetIndex=enabledTabs.length-1;break;case"Enter":case" ":event.preventDefault(),handleTabClick(tabId);return;default:return}var targetTab=enabledTabs[targetIndex];if(targetTab){var targetElement=tabRefs.current.get(targetTab.id);null==targetElement||targetElement.focus(),handleTabClick(targetTab.id,targetTab.disabled)}},[tabs,handleTabClick]),setTabRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(tabId,element){element?tabRefs.current.set(tabId,element):tabRefs.current.delete(tabId)},[]),containerClasses=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return classnames__WEBPACK_IMPORTED_MODULE_1___default()("fixed left-1/2 transform -translate-x-1/2 z-50 rounded-full shadow-2xl transition-all duration-300","top"===position?"top-0":"bottom-0",variant===VARIANTS_COMPACT?"px-3 py-2":"px-4 py-3",className)},[position,variant,className]),containerStyle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(20px) saturate(180%)",WebkitBackdropFilter:"blur(20px) saturate(180%)",boxShadow:"0 8px 32px 0 rgba(31, 38, 135, 0.37)",border:"1px solid rgba(255, 255, 255, 0.18)"}},[]),indicatorHeight=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return variant===VARIANTS_COMPACT?"calc(100% - 8px)":"calc(100% - 12px)"},[variant]),indicatorTop=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return variant===VARIANTS_COMPACT?"4px":"6px"},[variant]),tabPaddingClasses=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return variant===VARIANTS_COMPACT?"px-4 py-2":"px-6 py-3"},[variant]),renderTab=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(tab,index){var _tab_disabled,isActive=activeTab===tab.id,isDisabled=null!=(_tab_disabled=tab.disabled)&&_tab_disabled,ariaLabel=tab.ariaLabel||tab.label,tabClasses=classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative rounded-full font-semibold text-sm transition-all duration-300","flex items-center gap-2 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",tabPaddingClasses,{"text-text-primary":isActive,"text-text-disabled cursor-not-allowed":isDisabled,"text-text-quaternary hover:text-text-secondary":!isActive&&!isDisabled,"hover:bg-bg-primary_hover/30":!isDisabled&&!isActive}),dotPosition="top"===position?"-bottom-1":"-top-1";return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{key:tab.id,ref:function(el){return setTabRef(tab.id,el)},onClick:function(){return handleTabClick(tab.id,isDisabled)},onKeyDown:function(e){return handleKeyDown(e,tab.id,index)},disabled:isDisabled,role:"tab","aria-selected":isActive,"aria-label":ariaLabel,"aria-controls":"tabpanel-".concat(tab.id),tabIndex:isActive&&!isDisabled?0:-1,className:tabClasses,"data-testid":"tab-".concat(tab.id)},tab.icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"flex items-center justify-center","aria-hidden":"true"},"string"==typeof tab.icon?react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:tab.icon,alt:"",className:"w-5 h-5",role:"presentation"}):tab.icon),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,tab.label),isActive&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary-500 transition-all duration-300",dotPosition),style:{boxShadow:"0 0 8px rgba(59, 130, 246, 0.8)"},"aria-hidden":"true"}))},[activeTab,position,tabPaddingClasses,handleTabClick,handleKeyDown,setTabRef]);return tabs&&0!==tabs.length?react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav",{ref:containerRef,className:containerClasses,style:containerStyle,role:"tablist","aria-label":"Tab navigation","data-testid":void 0===_param_testId?"liquid-glass-tab-bar":_param_testId},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"relative flex items-center gap-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"absolute h-full bg-bg-secondary/40 rounded-full pointer-events-none",style:_object_spread_props(_object_spread({},indicatorStyle),{height:indicatorHeight,top:indicatorTop,borderRadius:"9999px",backdropFilter:"blur(10px)",boxShadow:"inset 0 2px 4px rgba(255, 255, 255, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)",transition:"left ".concat(500,"ms ease-out, width ").concat(500,"ms ease-out, opacity ").concat(500,"ms ease-out")}),"aria-hidden":"true"}),tabs.map(function(tab,index){return renderTab(tab,index)}))):null};try{LiquidGlassTabBar.displayName="LiquidGlassTabBar",LiquidGlassTabBar.__docgenInfo={description:`LiquidGlassTabBar - A beautiful tab bar navigation component with glassmorphism effect
and smooth animated indicator`,displayName:"LiquidGlassTabBar",props:{tabs:{defaultValue:null,description:"Array of tab items to display",name:"tabs",required:!0,type:{name:"LiquidGlassTabItem[]"}},activeTab:{defaultValue:null,description:"Controlled active tab ID",name:"activeTab",required:!1,type:{name:"string"}},defaultTab:{defaultValue:null,description:"Default active tab ID (uncontrolled mode)",name:"defaultTab",required:!1,type:{name:"string"}},onTabChange:{defaultValue:null,description:"Callback fired when tab changes",name:"onTabChange",required:!1,type:{name:"((tabId: string) => void)"}},position:{defaultValue:{value:"bottom"},description:"Position of the tab bar",name:"position",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:"Size variant of the tab bar",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"compact"'}]}},testId:{defaultValue:{value:"liquid-glass-tab-bar"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LiquidGlassTabBar/LiquidGlassTabBar.tsx#LiquidGlassTabBar"]={docgenInfo:LiquidGlassTabBar.__docgenInfo,name:"LiquidGlassTabBar",path:"src/components/LiquidGlassTabBar/LiquidGlassTabBar.tsx#LiquidGlassTabBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Loader/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Loader_Loader});var react=__webpack_require__("../node_modules/react/index.js");__webpack_require__("./src/components/Loader/loader.css");var classnames=__webpack_require__("../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Loader=function(param){var _param_fullPage=param.fullPage,_param_size=param.size,size=void 0===_param_size?"md":_param_size;return react.createElement("div",{className:classnames_default()("flex justify-center items-center",{"fixed inset-0 bg-blackTransparent z-[1100]":void 0!==_param_fullPage&&_param_fullPage})},react.createElement("div",{className:classnames_default()("spinner border-4 border-solid border-t-primary-600 rounded-full",{"w-10 h-10":"md"===size},{"w-8 h-8":"sm"===size},{"w-12 h-12":"lg"===size})}))};let Loader_Loader=Loader;try{Loader.displayName="Loader",Loader.__docgenInfo={description:"",displayName:"Loader",props:{fullPage:{defaultValue:{value:"false"},description:"",name:"fullPage",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Loader/Loader.tsx#Loader"]={docgenInfo:Loader.__docgenInfo,name:"Loader",path:"src/components/Loader/Loader.tsx#Loader"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Loader/loader.css":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("../node_modules/css-loader/dist/cjs.js!../node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!./src/components/Loader/loader.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={};options.insert="head",options.singleton=!1,api(content,options),module.exports=content.locals||{}},"./src/components/MenuPopover/DropdownItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@heroicons/react/20/solid/esm/CheckIcon.js"),DropdownItem=function(param){var _data_customClass,_data_customClass1,_data_customClass2,data=param.data,key=param.key;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center px-4 py-2 justify-between bg-bg-primary hover:bg-bg-primary_hover rounded-4xl ".concat("disabled"===data.state?"cursor-not-allowed":"cursor-pointer"),onClick:data.onClick,key:key},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center gap-2 ".concat("disabled"===data.state&&"opacity-50")},"icon"===data.type||"avatar"===data.type?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"string"==typeof data.icon?react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{className:(null==(_data_customClass=data.customClass)?void 0:_data_customClass.icon)||"w-4 h-4",src:data.icon,alt:data.title}):data.icon):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:(null==(_data_customClass1=data.customClass)?void 0:_data_customClass1.title)||({list:"text-text-primary text-sm font-medium",menu:"text-text-primary text-base font-medium"})[null==data?void 0:data.category]},data.title),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:(null==(_data_customClass2=data.customClass)?void 0:_data_customClass2.description)||({list:"text-text-secondary text-sm font-normal",menu:"text-text-secondary text-sm font-normal"})[null==data?void 0:data.category]},data.description))),"list"===data.category?null==data?void 0:data.badge:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"h-5 w-5"},data.selected?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__.A,{className:"h-5 w-5","aria-hidden":"true",color:"#1570ef"}):null))};let __WEBPACK_DEFAULT_EXPORT__=DropdownItem;try{DropdownItem.displayName="DropdownItem",DropdownItem.__docgenInfo={description:"",displayName:"DropdownItem",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"DropdownDataProps"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MenuPopover/DropdownItem.tsx#DropdownItem"]={docgenInfo:DropdownItem.__docgenInfo,name:"DropdownItem",path:"src/components/MenuPopover/DropdownItem.tsx#DropdownItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/MenuPopover/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bi:()=>MenuPopover,D$:()=>Popover.D});var react=__webpack_require__("../node_modules/react/index.js"),Popover=__webpack_require__("./src/components/MenuPopover/Popover.tsx"),DropdownItem=__webpack_require__("./src/components/MenuPopover/DropdownItem.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var MenuPopover=function(param){var datas=param.datas,children=param.children,placement=param.placement,onClick=param.onClick,width=param.width,transform=param.transform,noSizeFit=param.noSizeFit,containerClass=param.containerClass,dropdownData=param.dropdownData,isOpen=param.isOpen,setIsOpen=param.setIsOpen,addEventProp=param.addEventProp,_React_useState=_sliced_to_array(react.useState(!1),2),show=_React_useState[0],setShow=_React_useState[1],setPopoverIsOpen=setIsOpen||setShow;return console.log(dropdownData,"dropdownData"),react.createElement(Popover.t,{placement:placement,onClick:onClick,transform:transform,width:width,noSizeFit:noSizeFit,isOpen:void 0!==isOpen?isOpen:show,setIsOpen:setPopoverIsOpen,addEventProp:addEventProp,content:react.createElement("div",null,datas&&(null==datas?void 0:datas.map(function(data,dataIndex){return react.createElement(react.Fragment,{key:dataIndex},react.createElement("ul",{style:{maxHeight:"300px",overflowY:"auto",width:width,padding:"0.5rem"},className:"".concat(containerClass||"")},data.map(function(menuItem,index){var _menuItem_customClass,_menuItem_customClass1,_menuItem_customClass2,_menuItem_customClass3,_menuItem_customClass4,_menuItem_customClass5;return react.createElement("li",{key:menuItem.title||index},menuItem.borderTop&&react.createElement("div",{className:"border-t-2 border-border-secondary"}),react.createElement("div",{className:"".concat((null==(_menuItem_customClass=menuItem.customClass)?void 0:_menuItem_customClass.container)||"flex items-center px-3 py-2 justify-between rounded-full"," ").concat(menuItem.onClick?"cursor-pointer":""," ").concat(menuItem.hover?"hover:bg-bg-active rounded-full cursor-pointer":""),onClick:function(e){e.stopPropagation(),menuItem.onClick&&menuItem.onClick(menuItem),setPopoverIsOpen(!1)}},react.createElement("div",{className:"flex items-center"},menuItem.img&&react.createElement("img",{src:menuItem.img,alt:"default-avatar",className:"".concat((null==(_menuItem_customClass1=menuItem.customClass)?void 0:_menuItem_customClass1.img)||"w-8 h-8 rounded-full "),width:menuItem.imgSize?menuItem.imgSize:"32",height:menuItem.imgSize?menuItem.imgSize:"32"}),menuItem.heading&&react.createElement("p",{className:"".concat((null==(_menuItem_customClass2=menuItem.customClass)?void 0:_menuItem_customClass2.heading)||"text-text-secondary text-sm font-medium")},menuItem.heading),menuItem.title&&react.createElement("div",{className:"ml-3"},react.createElement("p",{className:"".concat((null==(_menuItem_customClass3=menuItem.customClass)?void 0:_menuItem_customClass3.title)||"text-md font-semibold text-text-secondary")},menuItem.title),menuItem.subHeading&&react.createElement("p",{className:"".concat((null==(_menuItem_customClass4=menuItem.customClass)?void 0:_menuItem_customClass4.subHeading)||"text-sm font-medium text-text-tertiary")},menuItem.subHeading))),menuItem.badge&&("string"==typeof menuItem.badge?react.createElement("img",{src:menuItem.badge,alt:"star-avatar",className:"".concat((null==(_menuItem_customClass5=menuItem.customClass)?void 0:_menuItem_customClass5.badge)||"h-6"),width:"24",height:"24"}):menuItem.badge)),menuItem.underline&&react.createElement("div",{className:"border-t-2 border-border-secondary"}))})))})),react.createElement("div",{className:"m-2 bg-bg-primary ".concat(containerClass)},dropdownData&&(null==dropdownData?void 0:dropdownData.map(function(item,index){return react.createElement(DropdownItem.A,{data:item,key:null==index?void 0:index.toString()})}))))},children)};try{MenuPopover.displayName="MenuPopover",MenuPopover.__docgenInfo={description:"",displayName:"MenuPopover",props:{datas:{defaultValue:null,description:"",name:"datas",required:!1,type:{name:"MenuPopoverData[][]"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"bottom"'},{value:'"top"'},{value:'"bottomLeft"'},{value:'"bottomRight"'},{value:'"topRight"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"Function"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"PositionTransform"}},noSizeFit:{defaultValue:null,description:"",name:"noSizeFit",required:!1,type:{name:"boolean"}},containerClass:{defaultValue:null,description:"",name:"containerClass",required:!1,type:{name:"string"}},dropdownData:{defaultValue:null,description:"",name:"dropdownData",required:!1,type:{name:"DropdownDataProps[]"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},setIsOpen:{defaultValue:null,description:"",name:"setIsOpen",required:!1,type:{name:"Dispatch<SetStateAction<boolean>>"}},addEventProp:{defaultValue:null,description:"",name:"addEventProp",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MenuPopover/MenuPopover.tsx#MenuPopover"]={docgenInfo:MenuPopover.__docgenInfo,name:"MenuPopover",path:"src/components/MenuPopover/MenuPopover.tsx#MenuPopover"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/MetricItem/MetricItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,i:()=>MetricItem});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_Badge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Badge/index.ts"),_FeedCard_Card__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/FeedCard/Card.tsx"),MetricItem=function(param){var data=param.data,percentageChange=param.percentageChange,title=param.title,_param_size=(param.isLoading,param.size),size=void 0===_param_size?"md":_param_size,kpiValue=percentageChange?percentageChange>0?"+"+percentageChange+"%":percentageChange+"%":"-",badgeColor=percentageChange?percentageChange>0?"success":"counter":"default";return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"md"===size&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col items-start gap-4 rounded-6xl p-6 min-w-80 bg-bg-secondary hover:bg-bg-secondary_hover"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-base font-semibold text-text-primary"},title),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex w-full justify-between items-center"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-3xl font-medium text-text-primary"},data),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Badge__WEBPACK_IMPORTED_MODULE_1__.A,{color:badgeColor,variant:"filled",border:!1},kpiValue)))),"sm"===size&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FeedCard_Card__WEBPACK_IMPORTED_MODULE_2__.A,{title:title,size:"sm",children:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex gap-3 items-center"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Badge__WEBPACK_IMPORTED_MODULE_1__.A,{color:badgeColor,size:"xs",variant:"filled",border:!1},kpiValue)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-md font-semibold text-text-primary"},data))}))};let __WEBPACK_DEFAULT_EXPORT__=MetricItem;try{MetricItem.displayName="MetricItem",MetricItem.__docgenInfo={description:"",displayName:"MetricItem",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"string | number"}},percentageChange:{defaultValue:null,description:"",name:"percentageChange",required:!1,type:{name:"number | null"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MetricItem/MetricItem.tsx#MetricItem"]={docgenInfo:MetricItem.__docgenInfo,name:"MetricItem",path:"src/components/MetricItem/MetricItem.tsx#MetricItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Modal/AlertDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>AlertDialog});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Button/index.ts"),_hooks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/index.ts"),_MobileSheet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/MobileSheet/index.ts"),AlertDialog=function(param){var open=param.open,onClose=param.onClose,title=param.title,description=param.description,_param_cancelLabel=param.cancelLabel,actionLabel=param.actionLabel,_param_actionVariant=param.actionVariant,_param_actionColor=param.actionColor,_param_destructive=param.destructive,onConfirm=param.onConfirm,icon=param.icon,_param_className=param.className,_param_testId=param.testId,isMobile=(0,_hooks__WEBPACK_IMPORTED_MODULE_3__.al)();if(!open)return null;var content=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("space-y-4",void 0===_param_className?"":_param_className)},icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex justify-center"},"string"==typeof icon?react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:icon,alt:"",className:"w-12 h-12"}):icon),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-center"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",{className:"text-lg font-semibold text-text-primary"},title)),description&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-center"},"string"==typeof description?react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text-sm text-text-secondary"},description):description),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex gap-3",isMobile?"flex-col-reverse":"flex-row justify-end")},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.$,{variant:"outlined",color:"secondary",onClick:onClose,className:isMobile?"w-full":""},void 0===_param_cancelLabel?"Cancel":_param_cancelLabel),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.$,{variant:void 0===_param_actionVariant?"filled":_param_actionVariant,color:void 0!==_param_destructive&&_param_destructive?"destructive":void 0===_param_actionColor?"primary":_param_actionColor,onClick:function(){onConfirm(),onClose()},className:isMobile?"w-full":""},actionLabel)));return isMobile?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MobileSheet__WEBPACK_IMPORTED_MODULE_4__.C,{open:open,onClose:onClose,dismissible:!1,snapPoints:[.4],showBackdrop:!0},content):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"fixed inset-0 flex items-center justify-center bg-bg-overlay backdrop-filter backdrop-blur-sm z-[999]",onClick:function(e){e.target===e.currentTarget&&onClose()},"data-testid":void 0===_param_testId?"alert-dialog":_param_testId},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-full max-w-md bg-bg-primary rounded-2xl shadow-3xl p-6 m-4"},content))};try{AlertDialog.displayName="AlertDialog",AlertDialog.__docgenInfo={description:`AlertDialog - A specialized modal for confirmations and alerts
Optimized for critical user decisions`,displayName:"AlertDialog",props:{open:{defaultValue:null,description:"Whether the dialog is open",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback when dialog should close",name:"onClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"Title of the alert dialog",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Description/content of the alert dialog",name:"description",required:!1,type:{name:"ReactNode"}},cancelLabel:{defaultValue:{value:"Cancel"},description:"Label for the cancel button",name:"cancelLabel",required:!1,type:{name:"string"}},actionLabel:{defaultValue:null,description:"Label for the action button",name:"actionLabel",required:!0,type:{name:"string"}},actionVariant:{defaultValue:{value:"filled"},description:"Variant of the action button",name:"actionVariant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"filled"'}]}},actionColor:{defaultValue:{value:"primary"},description:"Color of the action button",name:"actionColor",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"primary"'},{value:'"secondary"'},{value:'"destructive"'},{value:'"gradient"'}]}},destructive:{defaultValue:{value:"false"},description:"Whether the action is destructive",name:"destructive",required:!1,type:{name:"boolean"}},onConfirm:{defaultValue:null,description:"Callback when action is confirmed",name:"onConfirm",required:!0,type:{name:"() => void"}},icon:{defaultValue:null,description:"Icon to display",name:"icon",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"alert-dialog"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/AlertDialog.tsx#AlertDialog"]={docgenInfo:AlertDialog.__docgenInfo,name:"AlertDialog",path:"src/components/Modal/AlertDialog.tsx#AlertDialog"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Modal/common/BasicForm.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_FormInput_Input_Input__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/FormInput/Input/Input.tsx"),_FormInput_TextArea_TextArea__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/FormInput/TextArea/TextArea.tsx");let __WEBPACK_DEFAULT_EXPORT__=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex w-full flex-col items-start justify-center gap-4"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormInput_Input_Input__WEBPACK_IMPORTED_MODULE_1__.A,{placeholder:"Enter your name",onChange:function(e){return console.log(e.target.value)},label:"Name"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormInput_TextArea_TextArea__WEBPACK_IMPORTED_MODULE_2__.A,{placeholder:"Enter about yourself",onChange:function(e){return console.log(e.target.value)}}))}},"./src/components/NavigationMenu/NavigationMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>NavigationMenu});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var NavigationMenu=function(param){var items=param.items,activeItem=param.activeItem,_param_orientation=param.orientation,orientation=void 0===_param_orientation?"horizontal":_param_orientation,_param_className=param.className,_param_testId=param.testId,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),openSubmenu=_useState[0],setOpenSubmenu=_useState[1],handleItemClick=function(item){item.onClick&&item.onClick(),item.children&&item.children.length>0&&setOpenSubmenu(openSubmenu===item.label?null:item.label)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex","horizontal"===orientation?"flex-row":"flex-col",void 0===_param_className?"":_param_className),"data-testid":void 0===_param_testId?"navigation-menu":_param_testId},items.map(function(item,index){var hasSubmenu=item.children&&item.children.length>0,isActive=activeItem===item.label,isSubmenuOpen=openSubmenu===item.label;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:index,className:"relative"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:function(){return handleItemClick(item)},className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("px-4 py-2 font-medium text-sm transition-colors","hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500",isActive?"text-primary-600 border-b-2 border-primary-600":"text-text-secondary","vertical"===orientation&&"w-full text-left")},item.label,hasSubmenu&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("ml-1 w-4 h-4 inline transition-transform",isSubmenuOpen&&"transform rotate-180"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"}))),hasSubmenu&&isSubmenuOpen&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute z-50 bg-bg-primary border border-border-secondary rounded-lg shadow-xl py-2 min-w-[200px]","horizontal"===orientation?"top-full mt-1":"left-full ml-1")},item.children.map(function(child,childIndex){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{key:childIndex,href:child.href,onClick:child.onClick,className:"block px-4 py-2 text-sm text-text-primary hover:bg-bg-secondary"},child.label)})))}))};try{NavigationMenu.displayName="NavigationMenu",NavigationMenu.__docgenInfo={description:`NavigationMenu - Horizontal navigation with mega menus
Perfect for main navigation and header menus`,displayName:"NavigationMenu",props:{items:{defaultValue:null,description:"Menu items",name:"items",required:!0,type:{name:"NavigationMenuItem[]"}},activeItem:{defaultValue:null,description:"Active item",name:"activeItem",required:!1,type:{name:"string"}},orientation:{defaultValue:{value:"horizontal"},description:"Orientation",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"navigation-menu"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NavigationMenu/NavigationMenu.tsx#NavigationMenu"]={docgenInfo:NavigationMenu.__docgenInfo,name:"NavigationMenu",path:"src/components/NavigationMenu/NavigationMenu.tsx#NavigationMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/PagginationDotGroup/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>PagginationDotGroup_PagginationDotGroup});var react=__webpack_require__("../node_modules/react/index.js"),PagginationDotGroup=function(param){var type=param.type,size=param.size,activeIndex=param.activeIndex,totalSteps=param.totalSteps,_param_variant=param.variant,_param_backgroundColor=param.backgroundColor;return react.createElement("div",{className:"".concat("filled"===(void 0===_param_variant?"transparent":_param_variant)?void 0===_param_backgroundColor?"bg-bg-primary":_param_backgroundColor:""," ").concat("dot"===type?"w-fit":"w-full"," rounded-full p-2 flex")},Array.from({length:totalSteps}).map(function(_,index){return react.createElement("div",{key:index,className:"".concat(index===activeIndex-1?"bg-fg-brand-primary_alt":"bg-bg-quaternary"," ").concat("dot"===type?"".concat({small:"w-2 h-2",medium:"w-3 h-3",large:"w-4 h-4"}[size]," rounded-full m-1"):"".concat({small:"h-1",medium:"h-2",large:"h-3"}[size]," rounded-full m-1 flex-1"))})}))};let PagginationDotGroup_PagginationDotGroup=PagginationDotGroup;try{PagginationDotGroup.displayName="PagginationDotGroup",PagginationDotGroup.__docgenInfo={description:"",displayName:"PagginationDotGroup",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"dot"'},{value:'"line"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},activeIndex:{defaultValue:null,description:"",name:"activeIndex",required:!0,type:{name:"number"}},totalSteps:{defaultValue:null,description:"",name:"totalSteps",required:!0,type:{name:"number"}},variant:{defaultValue:{value:"transparent"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"transparent"'},{value:'"filled"'}]}},backgroundColor:{defaultValue:{value:"bg-bg-primary"},description:"",name:"backgroundColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PagginationDotGroup/PagginationDotGroup.tsx#PagginationDotGroup"]={docgenInfo:PagginationDotGroup.__docgenInfo,name:"PagginationDotGroup",path:"src/components/PagginationDotGroup/PagginationDotGroup.tsx#PagginationDotGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Pagination/Pagination.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>Pagination});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/index.ts"),Pagination=function(param){var currentPage=param.currentPage,totalPages=param.totalPages,onPageChange=param.onPageChange,_param_siblingCount=param.siblingCount,siblingCount=void 0===_param_siblingCount?1:_param_siblingCount,_param_showFirstLast=param.showFirstLast,showFirstLast=void 0===_param_showFirstLast||_param_showFirstLast,_param_className=param.className,_param_testId=param.testId,isMobile=(0,_hooks__WEBPACK_IMPORTED_MODULE_2__.al)();if(totalPages<=1)return null;var pages=function(){var pages=[];if(totalPages<=2*siblingCount+5+2)for(var i=1;i<=totalPages;i++)pages.push(i);else{var leftSiblingIndex=Math.max(currentPage-siblingCount,1),rightSiblingIndex=Math.min(currentPage+siblingCount,totalPages),shouldShowLeftEllipsis=leftSiblingIndex>2,shouldShowRightEllipsis=rightSiblingIndex<totalPages-1;if(!shouldShowLeftEllipsis&&shouldShowRightEllipsis){for(var i1=1;i1<=3+2*siblingCount;i1++)pages.push(i1);pages.push("ellipsis"),pages.push(totalPages)}else if(shouldShowLeftEllipsis&&!shouldShowRightEllipsis){pages.push(1),pages.push("ellipsis");for(var i2=totalPages-(2+2*siblingCount);i2<=totalPages;i2++)pages.push(i2)}else{pages.push(1),pages.push("ellipsis");for(var i3=leftSiblingIndex;i3<=rightSiblingIndex;i3++)pages.push(i3);pages.push("ellipsis"),pages.push(totalPages)}}return pages}(),handlePageClick=function(page){page>=1&&page<=totalPages&&page!==currentPage&&onPageChange(page)},buttonClass=function(page){return classnames__WEBPACK_IMPORTED_MODULE_1___default()("min-w-[2.5rem] h-10 px-3 rounded-lg font-medium transition-colors","focus:outline-none focus:ring-2 focus:ring-primary-500",page===currentPage?"bg-primary-600 text-white":"bg-bg-primary text-text-primary hover:bg-bg-secondary border border-border-secondary")};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex items-center justify-center gap-1",void 0===_param_className?"":_param_className),"aria-label":"Pagination","data-testid":void 0===_param_testId?"pagination":_param_testId},showFirstLast&&currentPage>1&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:function(){return handlePageClick(1)},className:buttonClass(-1),"aria-label":"First page"},isMobile?"«":"First"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:function(){return handlePageClick(currentPage-1)},disabled:1===currentPage,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(buttonClass(-1),1===currentPage&&"opacity-50 cursor-not-allowed"),"aria-label":"Previous page"},isMobile?"‹":"Previous"),pages.map(function(page,index){return"ellipsis"===page?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{key:"ellipsis-".concat(index),className:"px-2 text-text-quaternary"},"..."):react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{key:page,onClick:function(){return handlePageClick(page)},className:buttonClass(page),"aria-label":"Page ".concat(page),"aria-current":page===currentPage?"page":void 0},page)}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:function(){return handlePageClick(currentPage+1)},disabled:currentPage===totalPages,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(buttonClass(-1),currentPage===totalPages&&"opacity-50 cursor-not-allowed"),"aria-label":"Next page"},isMobile?"›":"Next"),showFirstLast&&currentPage<totalPages&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:function(){return handlePageClick(totalPages)},className:buttonClass(-1),"aria-label":"Last page"},isMobile?"»":"Last"))};try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:`Pagination - Page navigation component
Perfect for table pagination, list pagination, and content navigation`,displayName:"Pagination",props:{currentPage:{defaultValue:null,description:"Current page (1-indexed)",name:"currentPage",required:!0,type:{name:"number"}},totalPages:{defaultValue:null,description:"Total number of pages",name:"totalPages",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"Callback when page changes",name:"onPageChange",required:!0,type:{name:"(page: number) => void"}},siblingCount:{defaultValue:{value:"1"},description:"Number of pages to show on each side of current page",name:"siblingCount",required:!1,type:{name:"number"}},showFirstLast:{defaultValue:{value:"true"},description:"Whether to show first/last page buttons",name:"showFirstLast",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"pagination"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/PaymentCard/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>PaymentCard});var react=__webpack_require__("../node_modules/react/index.js"),Badge=__webpack_require__("./src/components/Badge/index.ts"),PaymentCard=function(param){var amount=param.amount,currency=param.currency;return react.createElement("div",{className:"p-4 border border-solid border-gray-200 rounded-2xl flex-col w-full"},react.createElement("span",{className:"flex pb-4 text-base font-semibold"},"Payment due"),react.createElement("div",{className:"flex justify-between items-center"},react.createElement("span",{className:"text-4xl font-semibold "},currency,amount.toFixed(2)),react.createElement("div",null,react.createElement(Badge.A,{color:"default"},"No Payment Due"))))};try{PaymentCard.displayName="PaymentCard",PaymentCard.__docgenInfo={description:"",displayName:"PaymentCard",props:{amount:{defaultValue:null,description:"",name:"amount",required:!0,type:{name:"number"}},currency:{defaultValue:null,description:"",name:"currency",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PaymentCard/PaymentCard.tsx#PaymentCard"]={docgenInfo:PaymentCard.__docgenInfo,name:"PaymentCard",path:"src/components/PaymentCard/PaymentCard.tsx#PaymentCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/PaymentCardDetails/PaymentCardDetails.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>PaymentCardDetails});var react=__webpack_require__("../node_modules/react/index.js");let visa_namespaceObject=__webpack_require__.p+"static/media/visa.19313571.svg",mastercard_namespaceObject=__webpack_require__.p+"static/media/mastercard.1517172c.svg",applePay_namespaceObject=__webpack_require__.p+"static/media/applePay.8a06b096.svg",gPay_namespaceObject=__webpack_require__.p+"static/media/gPay.ae27339a.svg",klarna_namespaceObject=__webpack_require__.p+"static/media/klarna.d98f79e3.svg",shopPay_namespaceObject=__webpack_require__.p+"static/media/shopPay.fd96e409.svg",amex_namespaceObject=__webpack_require__.p+"static/media/amex.855de0f8.svg";var PaymentCardDetails=function(param){var cardType=param.cardType,last4Digits=param.last4Digits,expiryDate=param.expiryDate,actions=param.actions,_param_state=param.state;return react.createElement("div",{className:"flex justify-between gap-2 rounded-4xl p-4 ".concat({default:"bg-bg-primary hover:bg-bg-primary_hover",active:"bg-bg-active",disabled:"bg-bg-primary cursor-not-allowed opacity-50"}[void 0===_param_state?"default":_param_state])},react.createElement("div",{className:"flex gap-4"},react.createElement("div",null,"string"==typeof cardType?react.createElement("img",{src:{visa:visa_namespaceObject,mastercard:mastercard_namespaceObject,applePay:applePay_namespaceObject,gPay:gPay_namespaceObject,klarna:klarna_namespaceObject,shopPay:shopPay_namespaceObject,amex:amex_namespaceObject}[cardType],alt:cardType,className:"h-11 w-auto"}):cardType),react.createElement("div",{className:"flex flex-col"},react.createElement("div",{className:"text-text-primary text-base font-medium"},"Card ending in ",last4Digits),react.createElement("div",{className:"text-text-tertiary text-sm font-regular"},"Expiry ",expiryDate))),actions)};try{PaymentCardDetails.displayName="PaymentCardDetails",PaymentCardDetails.__docgenInfo={description:"",displayName:"PaymentCardDetails",props:{cardType:{defaultValue:null,description:"",name:"cardType",required:!0,type:{name:"ReactNode"}},last4Digits:{defaultValue:null,description:"",name:"last4Digits",required:!0,type:{name:"string"}},expiryDate:{defaultValue:null,description:"",name:"expiryDate",required:!0,type:{name:"string"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"default"'},{value:'"active"'}]}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PaymentCardDetails/PaymentCardDetails.tsx#PaymentCardDetails"]={docgenInfo:PaymentCardDetails.__docgenInfo,name:"PaymentCardDetails",path:"src/components/PaymentCardDetails/PaymentCardDetails.tsx#PaymentCardDetails"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/PickerView/PickerView.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>PickerView});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var PickerView=function(param){var _options_,options=param.options,controlledValue=param.value,defaultValue=param.defaultValue,onChange=param.onChange,_param_visibleCount=param.visibleCount,_param_className=param.className,className=void 0===_param_className?"":_param_className,_param_testId=param.testId,testId=void 0===_param_testId?"picker-view":_param_testId,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue||(null==(_options_=options[0])?void 0:_options_.value)),2),internalValue=_useState[0],setInternalValue=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2);_useState1[0],_useState1[1];var _useState2=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),2),dragY=_useState2[0];_useState2[1];var pickerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),isMobile=(0,_hooks__WEBPACK_IMPORTED_MODULE_2__.al)(),value=void 0!==controlledValue?controlledValue:internalValue,selectedIndex=options.findIndex(function(opt){return opt.value===value});if(!isMobile)return react__WEBPACK_IMPORTED_MODULE_0__.createElement("select",{value:value,onChange:function(e){var _options_find,newValue=null==(_options_find=options.find(function(opt){return opt.value.toString()===e.target.value}))?void 0:_options_find.value;void 0!==newValue&&(void 0===controlledValue&&setInternalValue(newValue),null==onChange||onChange(newValue))},className:className,"data-testid":testId},options.map(function(opt){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:opt.value,value:opt.value},opt.label)}));var containerHeight=44*(void 0===_param_visibleCount?5:_param_visibleCount),selectedY=containerHeight/2-22,handleSelect=function(index){var selectedOption=options[index];selectedOption&&(void 0===controlledValue&&setInternalValue(selectedOption.value),null==onChange||onChange(selectedOption.value))};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:pickerRef,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative overflow-hidden",className),style:{height:"".concat(containerHeight,"px")},"data-testid":testId},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-bg-primary to-transparent z-10 pointer-events-none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bg-primary to-transparent z-10 pointer-events-none"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"absolute left-0 right-0 border-t border-b border-primary-500 z-10 pointer-events-none",style:{top:"".concat(selectedY,"px"),height:"".concat(44,"px")}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"relative"},options.map(function(option,index){var y=44*index-44*selectedIndex+selectedY+dragY,distance=Math.abs(index-selectedIndex),scale=Math.max(.8,1-.1*distance),opacity=Math.max(.3,1-.3*distance);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{key:option.value,onClick:function(){return handleSelect(index)},className:"absolute left-0 right-0 flex items-center justify-center text-text-primary font-medium",style:{top:"".concat(y,"px"),height:"".concat(44,"px"),transform:"scale(".concat(scale,")"),opacity:opacity}},option.label)})))};try{PickerView.displayName="PickerView",PickerView.__docgenInfo={description:`PickerView - Wheel picker (spinner) component
Perfect for mobile date/time selection and option selection`,displayName:"PickerView",props:{options:{defaultValue:null,description:"Options to display",name:"options",required:!0,type:{name:"PickerViewOption[]"}},value:{defaultValue:null,description:"Selected value",name:"value",required:!1,type:{name:"string | number"}},defaultValue:{defaultValue:null,description:"Default value",name:"defaultValue",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"Callback when value changes",name:"onChange",required:!1,type:{name:"((value: string | number) => void)"}},visibleCount:{defaultValue:{value:"5"},description:"Number of visible options",name:"visibleCount",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"picker-view"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PickerView/PickerView.tsx#PickerView"]={docgenInfo:PickerView.__docgenInfo,name:"PickerView",path:"src/components/PickerView/PickerView.tsx#PickerView"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/PieChart/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>components_PieChart_PieChart});var react=__webpack_require__("../node_modules/react/index.js"),PieChart=__webpack_require__("../node_modules/recharts/es6/chart/PieChart.js"),Pie=__webpack_require__("../node_modules/recharts/es6/polar/Pie.js"),Cell=__webpack_require__("../node_modules/recharts/es6/component/Cell.js"),Tooltip=__webpack_require__("../node_modules/recharts/es6/component/Tooltip.js"),Identifiers=function(props){return react.createElement("div",{className:"flex flex-col items-start gap-1"},props.data.map(function(data){return react.createElement("div",{className:"flex items-center justify-start gap-2"},react.createElement("div",{style:{backgroundColor:data.color},className:"h-2 min-h-[8px] w-2 rounded-[40px]"}),react.createElement("span",{className:"text-text-tertiary text-sm font-normal"},data.label))}))};try{Identifiers.displayName="Identifiers",Identifiers.__docgenInfo={description:"",displayName:"Identifiers",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"chartData[]"}},isDataLoading:{defaultValue:null,description:"",name:"isDataLoading",required:!1,type:{name:"boolean"}},isDonutChart:{defaultValue:null,description:"",name:"isDonutChart",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PieChart/Identifiers.tsx#Identifiers"]={docgenInfo:Identifiers.__docgenInfo,name:"Identifiers",path:"src/components/PieChart/Identifiers.tsx#Identifiers"})}catch(__react_docgen_typescript_loader_error){}var src=__webpack_require__("./src/index.ts"),CustomTooltip=function(props){var _payload__payload,_payload_,active=props.active,payload=props.payload,color=null==(_payload_=payload[0])||null==(_payload__payload=_payload_.payload)?void 0:_payload__payload.color;return active?react.createElement("div",{className:"custom-tooltip rounded-md border border-solid border-borderPrimary bg-white p-1.5"},react.createElement("label",null,react.createElement("span",{style:{color:color}},payload[0].name)," : ".concat(payload[0].value,"%"))):null},PieChart_PieChart=function(props){var data=props.data,isDataLoading=props.isDataLoading,isDonutChart=props.isDonutChart,COLORS=[];return data.forEach(function(data){COLORS.push(data.color)}),react.createElement("div",{className:"flex w-full flex-col items-start justify-center gap-1 rounded-2xl py-2"},react.createElement("div",{className:"flex w-full items-center gap-4"},isDataLoading?react.createElement(src.aH,null):react.createElement(react.Fragment,null,data.length>0?react.createElement(PieChart.r,{width:130,height:130},react.createElement(Pie.F,{data:data,cx:"50%",cy:"50%",labelLine:!1,outerRadius:65,innerRadius:50*!!isDonutChart,fill:"#8884d8",dataKey:"value"},data.map(function(entry,index){return react.createElement(Cell.f,{key:"cell-".concat(index),fill:COLORS[index%COLORS.length]})})),react.createElement(Tooltip.m,{content:react.createElement(CustomTooltip,null)})):react.createElement("p",{className:"text-5xl font-bold text-baseBlack"},"No Data"),react.createElement(Identifiers,{data:data}))))};let components_PieChart_PieChart=PieChart_PieChart;try{PieChart_PieChart.displayName="PieChart",PieChart_PieChart.__docgenInfo={description:"",displayName:"PieChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"chartData[]"}},isDataLoading:{defaultValue:null,description:"",name:"isDataLoading",required:!1,type:{name:"boolean"}},isDonutChart:{defaultValue:null,description:"",name:"isDonutChart",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PieChart/PieChart.tsx#PieChart"]={docgenInfo:PieChart_PieChart.__docgenInfo,name:"PieChart",path:"src/components/PieChart/PieChart.tsx#PieChart"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/PlayGround/PlayGround.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>PlayGround});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_MenuPopover__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/MenuPopover/index.ts"),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Button/index.ts"),_assets_icons_tripleDot_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/assets/icons/tripleDot.svg"),_FloatingToolbar_FloatingToolbar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/FloatingToolbar/FloatingToolbar.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var PlayGround=function(param){var playGround=param.playGround,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2);return _useState[0],_useState[1],react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,1==playGround&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex h-20"},[0,1,2,3,4,5,6,7].map(function(item){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MenuPopover__WEBPACK_IMPORTED_MODULE_1__.bi,{key:item.toString(),children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.$,{variant:"outlined",color:"label",shape:"circle"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:_assets_icons_tripleDot_svg__WEBPACK_IMPORTED_MODULE_3__,alt:"TripleDot"})),width:"200px",transform:{left:70},datas:[[{title:"Rename",hover:!0,onClick:function(){}},{title:"Delete ",hover:!0,onClick:function(){}}]]})})),2==playGround&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:" h-80 w-full"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FloatingToolbar_FloatingToolbar__WEBPACK_IMPORTED_MODULE_4__.w,{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Hello"),action:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Action"),onBackClickHandler:function(){},onCloseClickHandler:function(){},showBackButton:!0,showCloseButton:!0})))};try{PlayGround.displayName="PlayGround",PlayGround.__docgenInfo={description:"",displayName:"PlayGround",props:{playGround:{defaultValue:null,description:"",name:"playGround",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PlayGround/PlayGround.tsx#PlayGround"]={docgenInfo:PlayGround.__docgenInfo,name:"PlayGround",path:"src/components/PlayGround/PlayGround.tsx#PlayGround"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Popover/Popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Popover});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var Popover=function(param){var trigger=param.trigger,content=param.content,_param_placement=param.placement,placement=void 0===_param_placement?"bottom":_param_placement,controlledOpen=param.open,_param_defaultOpen=param.defaultOpen,onOpenChange=param.onOpenChange,_param_className=param.className,_param_testId=param.testId,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0!==_param_defaultOpen&&_param_defaultOpen),2),internalOpen=_useState[0],setInternalOpen=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({x:0,y:0}),2),position=_useState1[0],setPosition=_useState1[1],triggerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),popoverRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),isControlled=void 0!==controlledOpen,open=isControlled?controlledOpen:internalOpen;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(open&&triggerRef.current){var rect=triggerRef.current.getBoundingClientRect(),x=0,y=0;switch(placement){case"top":x=rect.left+rect.width/2,y=rect.top;break;case"bottom":x=rect.left+rect.width/2,y=rect.bottom;break;case"left":x=rect.left,y=rect.top+rect.height/2;break;case"right":x=rect.right,y=rect.top+rect.height/2}setPosition({x:x,y:y})}},[open,placement]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var handleClickOutside=function(e){popoverRef.current&&triggerRef.current&&!popoverRef.current.contains(e.target)&&!triggerRef.current.contains(e.target)&&(isControlled||setInternalOpen(!1),null==onOpenChange||onOpenChange(!1))};if(open)return document.addEventListener("mousedown",handleClickOutside),function(){return document.removeEventListener("mousedown",handleClickOutside)}},[open,isControlled,onOpenChange]),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative inline-block",void 0===_param_className?"":_param_className),"data-testid":void 0===_param_testId?"popover":_param_testId},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:triggerRef,onClick:function(){var newOpen=!open;isControlled||setInternalOpen(newOpen),null==onOpenChange||onOpenChange(newOpen)}},trigger),open&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:popoverRef,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("fixed z-[9999] bg-bg-primary border border-border-secondary rounded-lg shadow-xl p-4",{top:"bottom-full left-1/2 -translate-x-1/2 mb-2",bottom:"top-full left-1/2 -translate-x-1/2 mt-2",left:"right-full top-1/2 -translate-y-1/2 mr-2",right:"left-full top-1/2 -translate-y-1/2 ml-2"}[placement]),style:{left:"".concat(position.x,"px"),top:"".concat(position.y,"px")}},content))};try{Popover.displayName="Popover",Popover.__docgenInfo={description:`Popover - Floating popup component
Perfect for additional controls and inline editing`,displayName:"Popover",props:{trigger:{defaultValue:null,description:"Trigger element",name:"trigger",required:!0,type:{name:"ReactNode"}},content:{defaultValue:null,description:"Content to display in popover",name:"content",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:{value:"bottom"},description:"Placement",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'}]}},open:{defaultValue:null,description:"Whether popover is open (controlled)",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"false"},description:"Default open state",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback when open state changes",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"popover"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/Popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"src/components/Popover/Popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ProgressBar/ProgressBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>ProgressBar});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),ProgressBar=function(param){var progress=param.progress,_param_size=param.size,_param_showLabel=param.showLabel,sizeClass={xs:"h-1",sm:"h-2",md:"h-3",lg:"h-4"}[void 0===_param_size?"sm":_param_size];return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-row gap-2 items-center"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-full bg-bg-quaternary rounded-full ".concat(sizeClass)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-bg-brand-solid rounded-full ".concat(sizeClass),style:{width:"".concat(progress,"%")}})),void 0!==_param_showLabel&&_param_showLabel&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-text-secondary text-sm font-medium"},progress,"%"))};try{ProgressBar.displayName="ProgressBar",ProgressBar.__docgenInfo={description:"",displayName:"ProgressBar",props:{size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'}]}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},showLabel:{defaultValue:{value:"false"},description:"",name:"showLabel",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressBar/ProgressBar.tsx#ProgressBar"]={docgenInfo:ProgressBar.__docgenInfo,name:"ProgressBar",path:"src/components/ProgressBar/ProgressBar.tsx#ProgressBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/PullToRefresh/PullToRefresh.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>PullToRefresh});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Loader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Loader/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error);return}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self1=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self1,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)})}}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _ts_generator(thisArg,body){var f,y,t,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]},g=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return g.next=verb(0),g.throw=verb(1),g.return=verb(2),"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw TypeError("Generator is already executing.");for(;g&&(g=0,op[0]&&(_=0)),_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=(t=_.trys).length>0&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}var PullToRefresh=function(param){var onRefresh=param.onRefresh,_param_isRefreshing=param.isRefreshing,isRefreshing=void 0!==_param_isRefreshing&&_param_isRefreshing,_param_threshold=param.threshold,threshold=void 0===_param_threshold?80:_param_threshold,pullIndicator=param.pullIndicator,releaseIndicator=param.releaseIndicator,refreshingIndicator=param.refreshingIndicator,children=param.children,_param_className=param.className,_param_testId=param.testId,_param_disabled=param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),2),pullDistance=_useState[0],setPullDistance=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isPulling=_useState1[0],setIsPulling=_useState1[1],_useState2=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),canRelease=_useState2[0],setCanRelease=_useState2[1],containerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),startYRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),currentYRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){isRefreshing&&pullDistance>0&&(setPullDistance(0),setIsPulling(!1),setCanRelease(!1))},[isRefreshing,pullDistance]);var pullPercentage=Math.min(pullDistance/threshold*100,150),defaultPullIndicator=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center gap-2 text-text-quaternary"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{className:"w-5 h-5 transition-transform",style:{transform:"rotate(".concat(1.8*pullPercentage,"deg)")},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-sm"},"Pull to refresh")),defaultReleaseIndicator=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center gap-2 text-primary-600"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{className:"w-5 h-5 transition-transform",style:{transform:"rotate(180deg)"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-sm font-semibold"},"Release to refresh")),defaultRefreshingIndicator=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center gap-2 text-primary-600"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loader__WEBPACK_IMPORTED_MODULE_2__.Loader,{size:"sm"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-sm font-semibold"},"Refreshing..."));return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:containerRef,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative",void 0===_param_className?"":_param_className),onTouchStart:function(e){disabled||isRefreshing||window.scrollY>0||(startYRef.current=e.touches[0].clientY,setIsPulling(!0))},onTouchMove:function(e){if(!disabled&&!isRefreshing&&isPulling&&!(window.scrollY>0)){currentYRef.current=e.touches[0].clientY;var distance=currentYRef.current-startYRef.current;if(distance>0){e.preventDefault();var pullDist=Math.min(.5*distance,1.5*threshold);setPullDistance(pullDist),setCanRelease(pullDist>=threshold)}}},onTouchEnd:function(){return _async_to_generator(function(){return _ts_generator(this,function(_state){switch(_state.label){case 0:if(disabled||isRefreshing||!isPulling)return[2];if(!(canRelease&&pullDistance>=threshold))return[3,2];return[4,onRefresh()];case 1:_state.sent(),_state.label=2;case 2:return setPullDistance(0),setIsPulling(!1),setCanRelease(!1),[2]}})})()},"data-testid":void 0===_param_testId?"pull-to-refresh":_param_testId},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute left-0 right-0 flex items-center justify-center transition-all duration-200",pullDistance>0?"opacity-100":"opacity-0"),style:{top:"".concat(-60+.3*pullDistance,"px"),height:"60px"}},isRefreshing?refreshingIndicator||defaultRefreshingIndicator:canRelease?releaseIndicator||defaultReleaseIndicator:pullIndicator||defaultPullIndicator),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{transform:"translateY(".concat(Math.max(0,.5*pullDistance),"px)"),transition:isRefreshing?"transform 0.3s ease-out":"none"}},children))};try{PullToRefresh.displayName="PullToRefresh",PullToRefresh.__docgenInfo={description:`PullToRefresh - Native mobile pull-to-refresh pattern
Pull down to trigger refresh callback`,displayName:"PullToRefresh",props:{onRefresh:{defaultValue:null,description:"Callback when refresh is triggered",name:"onRefresh",required:!0,type:{name:"() => void | Promise<void>"}},isRefreshing:{defaultValue:{value:"false"},description:"Whether refresh is in progress",name:"isRefreshing",required:!1,type:{name:"boolean"}},threshold:{defaultValue:{value:"80"},description:"Threshold in pixels to trigger refresh",name:"threshold",required:!1,type:{name:"number"}},pullIndicator:{defaultValue:null,description:"Pull indicator content",name:"pullIndicator",required:!1,type:{name:"ReactNode"}},releaseIndicator:{defaultValue:null,description:"Release indicator content",name:"releaseIndicator",required:!1,type:{name:"ReactNode"}},refreshingIndicator:{defaultValue:null,description:"Refreshing indicator content",name:"refreshingIndicator",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Children content",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"pull-to-refresh"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PullToRefresh/PullToRefresh.tsx#PullToRefresh"]={docgenInfo:PullToRefresh.__docgenInfo,name:"PullToRefresh",path:"src/components/PullToRefresh/PullToRefresh.tsx#PullToRefresh"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RadioButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>RadioButton_RadioButton,B:()=>RadioButton_RadioButtonOption});var classnames=__webpack_require__("../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("../node_modules/react/index.js"),RadioButton_RadioButton=function(param){var options=param.options,value=param.value,onChange=param.onChange;return react.createElement("div",{className:"space-y-3 rounded-3xl bg-bg-primary"},options.map(function(option,index){return react.createElement("div",{key:option.name,className:classnames_default()(value.name===option.name&&"ring-2 ring-border-brand_solid","group rounded-3xl relative flex cursor-pointer border border-border-secondary p-3 focus:outline-none data-[checked]:z-10 data-[checked]:border-indigo-200 data-[checked]:bg-indigo-50")},react.createElement(RadioButton_RadioButtonOption,{option:option,isSelected:value.name===option.name,onChange:onChange}))}))},RadioButton_RadioButtonOption=function(param){var option=param.option,isSelected=param.isSelected,onChange=param.onChange;return react.createElement("div",{className:"flex w-full items-center",onClick:function(){onChange&&option&&onChange(option)}},react.createElement("span",{"aria-hidden":"true",className:"mt-0.5 flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border-primary ".concat(isSelected?"bg-blue-600":"bg-bg-primary"," group-data-[checked]:border-transparent group-data-[checked]:bg-indigo-600 group-data-[focus]:ring-2 group-data-[focus]:ring-indigo-600 group-data-[focus]:ring-offset-2")},isSelected&&react.createElement("span",{className:"h-1.5 w-1.5 rounded-full bg-bg-primary_alt"})),option&&option.image&&react.createElement("div",{className:"px-4"},react.createElement("img",{src:option.image,alt:option.name,className:"h-16 w-16 rounded-md"})),option&&react.createElement("span",{className:"ml-3 flex flex-col"},react.createElement("span",{className:"block text-sm font-medium text-text-primary group-data-[checked]:text-indigo-900"},option.name),react.createElement("span",{className:"block text-sm text-text-placeholder group-data-[checked]:text-indigo-700"},option.description)))};try{RadioButton_RadioButton.displayName="RadioButton",RadioButton_RadioButton.__docgenInfo={description:"",displayName:"RadioButton",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"IRadioOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"IRadioOption"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(option: IRadioOption) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/RadioButton.tsx#RadioButton"]={docgenInfo:RadioButton_RadioButton.__docgenInfo,name:"RadioButton",path:"src/components/RadioButton/RadioButton.tsx#RadioButton"})}catch(__react_docgen_typescript_loader_error){}try{RadioButton_RadioButtonOption.displayName="RadioButtonOption",RadioButton_RadioButtonOption.__docgenInfo={description:"",displayName:"RadioButtonOption",props:{option:{defaultValue:null,description:"",name:"option",required:!1,type:{name:"IRadioOption"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((option: IRadioOption) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/RadioButton.tsx#RadioButtonOption"]={docgenInfo:RadioButton_RadioButtonOption.__docgenInfo,name:"RadioButtonOption",path:"src/components/RadioButton/RadioButton.tsx#RadioButtonOption"})}catch(__react_docgen_typescript_loader_error){}try{RadioButton.displayName="RadioButton",RadioButton.__docgenInfo={description:"",displayName:"RadioButton",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"IRadioOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"IRadioOption"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(option: IRadioOption) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/index.tsx#RadioButton"]={docgenInfo:RadioButton.__docgenInfo,name:"RadioButton",path:"src/components/RadioButton/index.tsx#RadioButton"})}catch(__react_docgen_typescript_loader_error){}try{RadioButtonOption.displayName="RadioButtonOption",RadioButtonOption.__docgenInfo={description:"",displayName:"RadioButtonOption",props:{option:{defaultValue:null,description:"",name:"option",required:!1,type:{name:"IRadioOption"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((option: IRadioOption) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/index.tsx#RadioButtonOption"]={docgenInfo:RadioButtonOption.__docgenInfo,name:"RadioButtonOption",path:"src/components/RadioButton/index.tsx#RadioButtonOption"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RadioGroup/RadioGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>RadioGroup});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var RadioGroup=function(param){var options=param.options,controlledValue=param.value,defaultValue=param.defaultValue,onChange=param.onChange,_param_orientation=param.orientation,_param_className=param.className,_param_testId=param.testId,_React_useState=_sliced_to_array(react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultValue||""),2),internalValue=_React_useState[0],setInternalValue=_React_useState[1],isControlled=void 0!==controlledValue,value=isControlled?controlledValue:internalValue,handleChange=function(optionValue){isControlled||setInternalValue(optionValue),null==onChange||onChange(optionValue)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{role:"radiogroup",className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("horizontal"===(void 0===_param_orientation?"vertical":_param_orientation)?"flex gap-4":"space-y-2",void 0===_param_className?"":_param_className),"data-testid":void 0===_param_testId?"radio-group":_param_testId},options.map(function(option){var _option_disabled,isSelected=value===option.value,isDisabled=null!=(_option_disabled=option.disabled)&&_option_disabled;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{key:option.value,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors","hover:bg-bg-secondary",isSelected&&"bg-primary-50 border-2 border-primary-500",!isSelected&&"border-2 border-transparent",isDisabled&&"opacity-50 cursor-not-allowed")},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"radio",value:option.value,checked:isSelected,onChange:function(){return handleChange(option.value)},disabled:isDisabled,className:"mt-1 w-4 h-4 text-primary-600 focus:ring-primary-500"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex-1"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"font-medium text-text-primary"},option.label),option.description&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-sm text-text-secondary mt-1"},option.description)))}))};try{RadioGroup.displayName="RadioGroup",RadioGroup.__docgenInfo={description:`RadioGroup - Group of radio buttons
Perfect for form selections and option groups`,displayName:"RadioGroup",props:{options:{defaultValue:null,description:"Options to display",name:"options",required:!0,type:{name:"RadioGroupOption[]"}},value:{defaultValue:null,description:"Selected value",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Default value",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback when selection changes",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},orientation:{defaultValue:{value:"vertical"},description:"Orientation",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"radio-group"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RadioGroup/RadioGroup.tsx#RadioGroup"]={docgenInfo:RadioGroup.__docgenInfo,name:"RadioGroup",path:"src/components/RadioGroup/RadioGroup.tsx#RadioGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Resizable/Resizable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>Resizable});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var Resizable=function(param){var firstPanel=param.firstPanel,secondPanel=param.secondPanel,_param_direction=param.direction,direction=void 0===_param_direction?"horizontal":_param_direction,_param_defaultRatio=param.defaultRatio,_param_minSize=param.minSize,minSize=void 0===_param_minSize?100:_param_minSize,_param_className=param.className,_param_testId=param.testId,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0===_param_defaultRatio?.5:_param_defaultRatio),2),ratio=_useState[0],setRatio=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isDragging=_useState1[0],setIsDragging=_useState1[1],containerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(isDragging){var handleMouseMove=function(e){if(containerRef.current){var newRatio,rect=containerRef.current.getBoundingClientRect();if("horizontal"===direction){var x=e.clientX-rect.left,totalWidth=rect.width;newRatio=Math.max(minSize/totalWidth,Math.min(1-minSize/totalWidth,x/totalWidth))}else{var y=e.clientY-rect.top,totalHeight=rect.height;newRatio=Math.max(minSize/totalHeight,Math.min(1-minSize/totalHeight,y/totalHeight))}setRatio(newRatio)}},handleMouseUp=function(){setIsDragging(!1)};return document.addEventListener("mousemove",handleMouseMove),document.addEventListener("mouseup",handleMouseUp),function(){document.removeEventListener("mousemove",handleMouseMove),document.removeEventListener("mouseup",handleMouseUp)}}},[isDragging,direction,minSize]);var firstPanelSize=100*ratio,secondPanelSize=(1-ratio)*100;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:containerRef,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex","horizontal"===direction?"flex-row":"flex-col",void 0===_param_className?"":_param_className),"data-testid":void 0===_param_testId?"resizable":_param_testId},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"overflow-hidden",style:"horizontal"===direction?{width:"".concat(firstPanelSize,"%")}:{height:"".concat(firstPanelSize,"%")}},firstPanel),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{onMouseDown:function(){setIsDragging(!0)},className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("bg-border-secondary hover:bg-border-primary transition-colors",isDragging&&"bg-primary-500","horizontal"===direction?"w-1 cursor-col-resize":"h-1 cursor-row-resize")}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"overflow-hidden flex-1",style:"horizontal"===direction?{width:"".concat(secondPanelSize,"%")}:{height:"".concat(secondPanelSize,"%")}},secondPanel))};try{Resizable.displayName="Resizable",Resizable.__docgenInfo={description:`Resizable - Resizable panels/panes
Perfect for split views and adjustable layouts`,displayName:"Resizable",props:{firstPanel:{defaultValue:null,description:"First panel content",name:"firstPanel",required:!0,type:{name:"ReactNode"}},secondPanel:{defaultValue:null,description:"Second panel content",name:"secondPanel",required:!0,type:{name:"ReactNode"}},direction:{defaultValue:{value:"horizontal"},description:"Direction",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},defaultRatio:{defaultValue:{value:"0.5"},description:"Default split ratio (0-1)",name:"defaultRatio",required:!1,type:{name:"number"}},minSize:{defaultValue:{value:"100"},description:"Minimum panel size (pixels)",name:"minSize",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"resizable"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Resizable/Resizable.tsx#Resizable"]={docgenInfo:Resizable.__docgenInfo,name:"Resizable",path:"src/components/Resizable/Resizable.tsx#Resizable"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ScrollArea/ScrollArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>ScrollArea});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),ScrollArea=function(param){var children=param.children,_param_maxHeight=param.maxHeight,maxHeight=void 0===_param_maxHeight?"400px":_param_maxHeight,_param_showScrollbar=param.showScrollbar,_param_className=param.className,_param_testId=param.testId;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("overflow-auto",void 0===_param_showScrollbar||_param_showScrollbar?"scrollbar-thin scrollbar-thumb-border-secondary scrollbar-track-bg-primary":"scrollbar-hide",void 0===_param_className?"":_param_className),style:{maxHeight:"number"==typeof maxHeight?"".concat(maxHeight,"px"):maxHeight},"data-testid":void 0===_param_testId?"scroll-area":_param_testId},children)};try{ScrollArea.displayName="ScrollArea",ScrollArea.__docgenInfo={description:`ScrollArea - Custom scrollable container
Perfect for custom scrollbars and scroll animations`,displayName:"ScrollArea",props:{children:{defaultValue:null,description:"Children content",name:"children",required:!0,type:{name:"ReactNode"}},maxHeight:{defaultValue:{value:"400px"},description:"Maximum height",name:"maxHeight",required:!1,type:{name:"string | number"}},showScrollbar:{defaultValue:{value:"true"},description:"Whether to show scrollbar",name:"showScrollbar",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"scroll-area"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ScrollArea/ScrollArea.tsx#ScrollArea"]={docgenInfo:ScrollArea.__docgenInfo,name:"ScrollArea",path:"src/components/ScrollArea/ScrollArea.tsx#ScrollArea"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SearchInput/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>SearchInput});var react=__webpack_require__("../node_modules/react/index.js");let searchIcon_sm_namespaceObject=__webpack_require__.p+"static/media/searchIcon-sm.4bf18f55.svg",filterLines_namespaceObject=__webpack_require__.p+"static/media/filterLines.160c3c5c.svg";var close_sm=__webpack_require__("./src/assets/icons/close-sm.svg");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var SearchInput=function(_param){var placeholder=_param.placeholder,showActionButton=(_param.onSearchInput,_param.showActionButton),onActionButtonClick=_param.onActionButtonClick,containerDiv=_param.containerDiv,showRoundedBottom=_param.showRoundedBottom,value=_param.value,onClearButtonClick=_param.onClearButtonClick,props=_object_without_properties(_param,["placeholder","onSearchInput","showActionButton","onActionButtonClick","containerDiv","showRoundedBottom","value","onClearButtonClick"]);return react.createElement("div",{className:"w-full"},react.createElement("form",{className:"flex bg-bg-primary text-text-primary items-center shadow-boxShadowBlack px-4	".concat(showRoundedBottom?"rounded-3xl":"rounded-t-3xl"," h-[72px]")},react.createElement("div",{className:""},react.createElement("img",{src:searchIcon_sm_namespaceObject,alt:"searchIcon"})),react.createElement("input",_object_spread({type:"text",placeholder:placeholder,className:"text-base w-full py-2 bg-transparent border-0 focus:outline-none focus:ring-0"},props)),value&&react.createElement("button",{type:"button",className:"rounded-full hover:bg-bg-primary_hover focus:outline-none focus:ring-2 focus:ring-gray-300 p-3",onClick:onClearButtonClick},react.createElement("img",{src:close_sm,alt:"closeIcon"})),showActionButton&&react.createElement("button",{type:"button",className:"rounded-full hover:bg-bg-primary_hover focus:outline-none focus:ring-2 focus:ring-gray-300 p-3",onClick:onActionButtonClick},react.createElement("img",{className:"h-[20px]",src:filterLines_namespaceObject,alt:"filterLines"}))),containerDiv)};try{SearchInput.displayName="SearchInput",SearchInput.__docgenInfo={description:"",displayName:"SearchInput",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onSearchInput:{defaultValue:null,description:"",name:"onSearchInput",required:!0,type:{name:"(val: string) => void"}},showActionButton:{defaultValue:null,description:"",name:"showActionButton",required:!0,type:{name:"boolean"}},onActionButtonClick:{defaultValue:null,description:"",name:"onActionButtonClick",required:!0,type:{name:"() => void"}},onClearButtonClick:{defaultValue:null,description:"",name:"onClearButtonClick",required:!0,type:{name:"() => void"}},containerDiv:{defaultValue:null,description:"",name:"containerDiv",required:!1,type:{name:"Element"}},showRoundedBottom:{defaultValue:null,description:"",name:"showRoundedBottom",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SearchInput/SearchInput.tsx#SearchInput"]={docgenInfo:SearchInput.__docgenInfo,name:"SearchInput",path:"src/components/SearchInput/SearchInput.tsx#SearchInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SectionLabel/SectionLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{e:()=>SectionLabel});var react=__webpack_require__("../node_modules/react/index.js");let helpIcon_namespaceObject=__webpack_require__.p+"static/media/helpIcon.63398a1c.svg";var ToolTip=__webpack_require__("./src/components/ToolTip/ToolTip.tsx"),SectionLabel=function(param){var title=param.title,description=param.description,_param_helpIcon=param.helpIcon,helpText=param.helpText,actions=param.actions,_param_size=param.size,size=void 0===_param_size?"md":_param_size,tooltipAlign=param.tooltipAlign,sizeClass={sm:{title:"text-sm font-semibold text-text-secondary",description:"text-sm font-regular text-text-tertiary"},md:{title:"text-base font-semibold text-text-secondary",description:"text-base font-regular text-text-tertiary"},lg:{title:"text-lg font-semibold text-text-secondary",description:"text-lg font-regular text-text-tertiary"}};return react.createElement("div",{className:"flex flex-col bg-bg-primary"},react.createElement("div",{className:"flex items-center gap-2"},react.createElement("div",{className:"".concat(sizeClass[size].title)},title),void 0!==_param_helpIcon&&_param_helpIcon&&react.createElement(ToolTip.w,{text:helpText||"",align:tooltipAlign||"bottom"},react.createElement("img",{src:helpIcon_namespaceObject,alt:"help",className:"w-4 h-4"}))),description&&react.createElement("div",{className:"".concat(sizeClass[size].description)},description),react.createElement("div",{className:"mt-2"},actions))};try{SectionLabel.displayName="SectionLabel",SectionLabel.__docgenInfo={description:"",displayName:"SectionLabel",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},helpIcon:{defaultValue:{value:"false"},description:"",name:"helpIcon",required:!1,type:{name:"boolean"}},helpText:{defaultValue:null,description:"",name:"helpText",required:!1,type:{name:"string"}},tooltipAlign:{defaultValue:null,description:"",name:"tooltipAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'}]}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SectionLabel/SectionLabel.tsx#SectionLabel"]={docgenInfo:SectionLabel.__docgenInfo,name:"SectionLabel",path:"src/components/SectionLabel/SectionLabel.tsx#SectionLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SegmentTabs/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>SegmentTabs_SegmentTab});var react=__webpack_require__("../node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var SegmentTabs_SegmentTab=function(param){var tabs=param.tabs,onTabChange=param.onTabChange,defaultTab=param.defaultTab,defaultBackground=param.defaultBackground,_param_orientation=param.orientation,orientation=void 0===_param_orientation?"horizontal":_param_orientation,_param_animated=param.animated,animated=void 0===_param_animated||_param_animated,_param_className=param.className,_useState=_sliced_to_array((0,react.useState)(defaultTab||tabs[0].id),2),activeTab=_useState[0],setActiveTab=_useState[1],indicatorRef=react.useRef(null),tabsRef=react.useRef(new Map),handleTabClick=function(tabId){setActiveTab(tabId),null==onTabChange||onTabChange(tabId)};react.useEffect(function(){if(animated){var activeButton=tabsRef.current.get(activeTab),indicator=indicatorRef.current,container=null==activeButton?void 0:activeButton.parentElement;if(activeButton&&indicator&&container){var containerRect=container.getBoundingClientRect(),buttonRect=activeButton.getBoundingClientRect();if("horizontal"===orientation){var left=buttonRect.left-containerRect.left,width=buttonRect.width;indicator.style.left="".concat(left,"px"),indicator.style.width="".concat(width,"px"),indicator.style.top="",indicator.style.height=""}else{var top=buttonRect.top-containerRect.top,height=buttonRect.height;indicator.style.top="".concat(top,"px"),indicator.style.height="".concat(height,"px"),indicator.style.left="",indicator.style.width=""}}}},[activeTab,orientation,animated,tabs]);var containerClasses=classNames("horizontal"===orientation?"flex":"flex flex-col",defaultBackground?"w-fit bg-bg-secondary rounded-full p-1":"rounded-md p-1 bg-bg-primary",void 0===_param_className?"":_param_className);return react.createElement("div",{className:containerClasses},react.createElement("div",{className:classNames("relative","horizontal"===orientation?"flex gap-1":"flex flex-col gap-1")},animated&&react.createElement("div",{ref:indicatorRef,className:classNames("absolute bg-bg-secondary_subtle rounded-full transition-all duration-300 ease-out","horizontal"===orientation?"h-[calc(100%-8px)] top-1":"w-[calc(100%-8px)] left-1"),style:{opacity:0}}),tabs.map(function(tab){var isActive=activeTab===tab.id;return react.createElement("button",{key:tab.id,ref:function(el){el&&tabsRef.current.set(tab.id,el)},className:classNames("relative px-3 py-2 rounded-full font-semibold text-base transition-colors","flex items-center gap-2",isActive?"bg-bg-secondary_subtle text-text-secondary":defaultBackground?"text-text-quaternary":"text-text-quaternary hover:bg-bg-primary_hover"),onClick:function(){return handleTabClick(tab.id)}},tab.icon&&react.createElement("span",{className:"w-5 h-5"},"string"==typeof tab.icon?react.createElement("img",{src:tab.icon,alt:""}):tab.icon),react.createElement("span",null,tab.label))})))};try{SegmentTabs_SegmentTab.displayName="SegmentTab",SegmentTabs_SegmentTab.__docgenInfo={description:"",displayName:"SegmentTab",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"{ id: string; label: string; icon?: ReactNode; }[]"}},onTabChange:{defaultValue:null,description:"",name:"onTabChange",required:!1,type:{name:"((tabId: string) => void)"}},defaultTab:{defaultValue:null,description:"",name:"defaultTab",required:!1,type:{name:"string"}},defaultBackground:{defaultValue:null,description:"",name:"defaultBackground",required:!1,type:{name:"boolean"}},orientation:{defaultValue:{value:"horizontal"},description:"Orientation of tabs",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},animated:{defaultValue:{value:"true"},description:"Enable animations",name:"animated",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SegmentTabs/SegmentTabs.tsx#SegmentTab"]={docgenInfo:SegmentTabs_SegmentTab.__docgenInfo,name:"SegmentTab",path:"src/components/SegmentTabs/SegmentTabs.tsx#SegmentTab"})}catch(__react_docgen_typescript_loader_error){}try{SegmentTab.displayName="SegmentTab",SegmentTab.__docgenInfo={description:"",displayName:"SegmentTab",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"{ id: string; label: string; icon?: ReactNode; }[]"}},onTabChange:{defaultValue:null,description:"",name:"onTabChange",required:!1,type:{name:"((tabId: string) => void)"}},defaultTab:{defaultValue:null,description:"",name:"defaultTab",required:!1,type:{name:"string"}},defaultBackground:{defaultValue:null,description:"",name:"defaultBackground",required:!1,type:{name:"boolean"}},orientation:{defaultValue:{value:"horizontal"},description:"Orientation of tabs",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},animated:{defaultValue:{value:"true"},description:"Enable animations",name:"animated",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SegmentTabs/index.tsx#SegmentTab"]={docgenInfo:SegmentTab.__docgenInfo,name:"SegmentTab",path:"src/components/SegmentTabs/index.tsx#SegmentTab"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Separator/Separator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>Separator});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),Separator=function(param){var _param_orientation=param.orientation,orientation=void 0===_param_orientation?"horizontal":_param_orientation,_param_decorative=param.decorative,decorative=void 0===_param_decorative||_param_decorative,_param_className=param.className,_param_testId=param.testId;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{role:decorative?"none":"separator","aria-orientation":orientation,"aria-hidden":decorative,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("bg-border-secondary","horizontal"===orientation?"h-px w-full":"w-px h-full",void 0===_param_className?"":_param_className),"data-testid":void 0===_param_testId?"separator":_param_testId})};try{Separator.displayName="Separator",Separator.__docgenInfo={description:`Separator - Visual divider component
Used to separate content sections and list items`,displayName:"Separator",props:{orientation:{defaultValue:{value:"horizontal"},description:"Orientation of the separator",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},decorative:{defaultValue:{value:"true"},description:"Whether separator is decorative (aria-hidden)",name:"decorative",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"separator"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Separator/Separator.tsx#Separator"]={docgenInfo:Separator.__docgenInfo,name:"Separator",path:"src/components/Separator/Separator.tsx#Separator"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Separator/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>_Separator__WEBPACK_IMPORTED_MODULE_0__.w});var _Separator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Separator/Separator.tsx")},"./src/components/Sheet/Sheet.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>Sheet});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs"),Sheet=function(param){var open=param.open,onClose=param.onClose,_param_side=param.side,side=void 0===_param_side?"right":_param_side,children=param.children,_param_className=param.className,_param_testId=param.testId,variant={right:{x:"100%",xOpen:0},left:{x:"-100%",xOpen:0},top:{y:"-100%",yOpen:0},bottom:{y:"100%",yOpen:0}}[side];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__.N,null,open&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:onClose,className:"fixed inset-0 bg-bg-overlay z-[998]"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.P.div,{initial:variant,animate:"top"===side||"bottom"===side?{y:variant.yOpen}:{x:variant.xOpen},exit:variant,transition:{type:"spring",damping:30,stiffness:300},className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("fixed z-[999] bg-bg-primary shadow-3xl",{right:"inset-y-0 right-0",left:"inset-y-0 left-0",top:"inset-x-0 top-0",bottom:"inset-x-0 bottom-0"}[side],"top"===side||"bottom"===side?"max-h-[90vh]":"w-full max-w-md",void 0===_param_className?"":_param_className),"data-testid":void 0===_param_testId?"sheet":_param_testId},children)))};try{Sheet.displayName="Sheet",Sheet.__docgenInfo={description:`Sheet - Side panel drawer component
Perfect for filters, details panel, and side navigation`,displayName:"Sheet",props:{open:{defaultValue:null,description:"Whether the sheet is open",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback when sheet should close",name:"onClose",required:!0,type:{name:"() => void"}},side:{defaultValue:{value:"right"},description:"Side to open from",name:"side",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'}]}},children:{defaultValue:null,description:"Children content",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"sheet"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Sheet/Sheet.tsx#Sheet"]={docgenInfo:Sheet.__docgenInfo,name:"Sheet",path:"src/components/Sheet/Sheet.tsx#Sheet"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Skeleton/Skeleton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Skeleton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),Skeleton=function(param){var width=param.width,height=param.height,_param_variant=param.variant,variant=void 0===_param_variant?"rectangular":_param_variant,_param_lines=param.lines,lines=void 0===_param_lines?1:_param_lines,_param_animation=param.animation,_param_className=param.className,_param_testId=param.testId,testId=void 0===_param_testId?"skeleton":_param_testId,baseClasses=classnames__WEBPACK_IMPORTED_MODULE_1___default()("bg-bg-secondary rounded",{pulse:"animate-pulse",wave:"animate-[shimmer_2s_infinite]",none:""}[void 0===_param_animation?"pulse":_param_animation],void 0===_param_className?"":_param_className);return"text"===variant&&lines>1?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"space-y-2","data-testid":testId},Array.from({length:lines}).map(function(_,index){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:index,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(baseClasses,index===lines-1?"w-3/4":"w-full"),style:{height:height||"1rem"}})})):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(baseClasses,{text:"rounded",circular:"rounded-full",rectangular:"rounded-md"}[variant]),style:{width:width||("circular"===variant?height||"40px":"100%"),height:height||("circular"===variant?width||"40px":"1rem")},"data-testid":testId})};try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:`Skeleton - Loading placeholder component
Shows content placeholders during data loading`,displayName:"Skeleton",props:{width:{defaultValue:null,description:"Width of the skeleton",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"Height of the skeleton",name:"height",required:!1,type:{name:"string | number"}},variant:{defaultValue:{value:"rectangular"},description:"Shape variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"circular"'},{value:'"rectangular"'}]}},lines:{defaultValue:{value:"1"},description:"Number of lines (for text variant)",name:"lines",required:!1,type:{name:"number"}},animation:{defaultValue:{value:"pulse"},description:"Animation speed",name:"animation",required:!1,type:{name:"enum",value:[{value:'"pulse"'},{value:'"wave"'},{value:'"none"'}]}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"skeleton"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/Skeleton/Skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Slider/Slider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Slider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var Slider=function(param){var controlledValue=param.value,_param_defaultValue=param.defaultValue,_param_min=param.min,min=void 0===_param_min?0:_param_min,_param_max=param.max,max=void 0===_param_max?100:_param_max,_param_step=param.step,step=void 0===_param_step?1:_param_step,onChange=param.onChange,onValueCommit=param.onValueCommit,_param_disabled=param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,_param_orientation=param.orientation,orientation=void 0===_param_orientation?"horizontal":_param_orientation,_param_showValue=param.showValue,_param_className=param.className,_param_testId=param.testId,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0===_param_defaultValue?0:_param_defaultValue),2),internalValue=_useState[0],setInternalValue=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isDragging=_useState1[0],setIsDragging=_useState1[1],sliderRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,_hooks__WEBPACK_IMPORTED_MODULE_2__.al)();var value=void 0!==controlledValue?controlledValue:internalValue,percentage=(value-min)/(max-min)*100,updateValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(clientX,clientY){if(sliderRef.current&&!disabled){var rect=sliderRef.current.getBoundingClientRect(),newValue=Math.round((min+Math.max(0,Math.min(100,"horizontal"===orientation?(clientX-rect.left)/rect.width*100:(rect.bottom-clientY)/rect.height*100))/100*(max-min))/step)*step,clampedValue=Math.max(min,Math.min(max,newValue));void 0===controlledValue&&setInternalValue(clampedValue),null==onChange||onChange(clampedValue)}},[min,max,step,disabled,orientation,controlledValue,onChange]),trackClasses=classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative bg-bg-secondary rounded-full","horizontal"===orientation?"h-2 w-full":"w-2 h-full",disabled&&"opacity-50 cursor-not-allowed"),thumbClasses=classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute bg-primary-600 rounded-full shadow-lg transition-all","focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2","horizontal"===orientation?"top-1/2 -translate-y-1/2 h-4 w-4":"left-1/2 -translate-x-1/2 h-4 w-4",!disabled&&(isDragging?"scale-125":"hover:scale-110 cursor-grab active:cursor-grabbing"),disabled&&"cursor-not-allowed");return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex items-center gap-3","vertical"===orientation&&"flex-col",void 0===_param_className?"":_param_className),"data-testid":void 0===_param_testId?"slider":_param_testId},void 0!==_param_showValue&&_param_showValue&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-sm font-medium text-text-primary min-w-[3rem] text-right"},value),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:sliderRef,className:trackClasses,onMouseDown:function(e){if(!disabled){e.preventDefault(),setIsDragging(!0),updateValue(e.clientX,e.clientY);var handleMouseMove=function(e){updateValue(e.clientX,e.clientY)},handleMouseUp=function(){setIsDragging(!1),void 0===controlledValue?null==onValueCommit||onValueCommit(internalValue):null==onValueCommit||onValueCommit(value),document.removeEventListener("mousemove",handleMouseMove),document.removeEventListener("mouseup",handleMouseUp)};document.addEventListener("mousemove",handleMouseMove),document.addEventListener("mouseup",handleMouseUp)}},onTouchStart:function(e){if(!disabled){e.preventDefault(),setIsDragging(!0);var touch=e.touches[0];updateValue(touch.clientX,touch.clientY)}},onTouchMove:function(e){if(isDragging&&!disabled){e.preventDefault();var touch=e.touches[0];updateValue(touch.clientX,touch.clientY)}},onTouchEnd:function(){disabled||(setIsDragging(!1),void 0===controlledValue?null==onValueCommit||onValueCommit(internalValue):null==onValueCommit||onValueCommit(value))},role:"slider","aria-valuemin":min,"aria-valuemax":max,"aria-valuenow":value,"aria-disabled":disabled,tabIndex:disabled?-1:0},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute rounded-full bg-primary-600","horizontal"===orientation?"h-full top-0 left-0":"w-full bottom-0 left-0"),style:"horizontal"===orientation?{width:"".concat(percentage,"%")}:{height:"".concat(percentage,"%")}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:thumbClasses,style:"horizontal"===orientation?{left:"".concat(percentage,"%"),transform:"translate(-50%, -50%)"}:{bottom:"".concat(percentage,"%"),transform:"translate(-50%, 50%)"}})))};try{Slider.displayName="Slider",Slider.__docgenInfo={description:`Slider - Range input component
Perfect for settings, filters, and value selection`,displayName:"Slider",props:{value:{defaultValue:null,description:"Current value",name:"value",required:!1,type:{name:"number"}},defaultValue:{defaultValue:{value:"0"},description:"Default value (uncontrolled)",name:"defaultValue",required:!1,type:{name:"number"}},min:{defaultValue:{value:"0"},description:"Minimum value",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Maximum value",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"Step increment",name:"step",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"Callback when value changes",name:"onChange",required:!1,type:{name:"((value: number) => void)"}},onValueCommit:{defaultValue:null,description:"Callback on value commit (after drag ends)",name:"onValueCommit",required:!1,type:{name:"((value: number) => void)"}},disabled:{defaultValue:{value:"false"},description:"Whether slider is disabled",name:"disabled",required:!1,type:{name:"boolean"}},orientation:{defaultValue:{value:"horizontal"},description:"Orientation",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},showValue:{defaultValue:{value:"false"},description:"Show value label",name:"showValue",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"slider"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Slider/Slider.tsx#Slider"]={docgenInfo:Slider.__docgenInfo,name:"Slider",path:"src/components/Slider/Slider.tsx#Slider"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Stackchart/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>Stackchart});var react=__webpack_require__("../node_modules/react/index.js"),ResponsiveContainer=__webpack_require__("../node_modules/recharts/es6/component/ResponsiveContainer.js"),BarChart=__webpack_require__("../node_modules/recharts/es6/chart/BarChart.js"),XAxis=__webpack_require__("../node_modules/recharts/es6/cartesian/XAxis.js"),YAxis=__webpack_require__("../node_modules/recharts/es6/cartesian/YAxis.js"),Tooltip=__webpack_require__("../node_modules/recharts/es6/component/Tooltip.js"),Bar=__webpack_require__("../node_modules/recharts/es6/cartesian/Bar.js"),src=__webpack_require__("./src/index.ts"),CustomTooltip=function(param){var active=param.active,payload=param.payload,label=param.label;if(active&&(null==payload?void 0:payload.length)){var _payload_,activeDataKey=null==(_payload_=payload[0])?void 0:_payload_.dataKey,filteredPayload=payload.filter(function(item){return item.dataKey===activeDataKey});return react.createElement("div",{className:"bg-primary-50"},react.createElement("p",null,label),filteredPayload.map(function(item,index){return react.createElement("p",{key:index},"".concat(item.name," : ").concat(item.value))}))}return null},Stackchart=function(param){var _param_height=param.height,_param_barSize=param.barSize,data=(param.chartBackgroundColor,param.data),dataKeys=(param.strokeWidth,param.dataKeys),colors=param.colors,_param_hideAxis=param.hideAxis,hideAxis=void 0===_param_hideAxis||_param_hideAxis,isDataLoading=param.isDataLoading;return react.createElement(react.Fragment,null,isDataLoading?react.createElement("div",{className:"flex items-end h-full"},react.createElement(src.aH,null)):react.createElement(ResponsiveContainer.u,{width:"99%",height:void 0===_param_height?200:_param_height},data.length>0?react.createElement(BarChart.E,{barSize:void 0===_param_barSize?15:_param_barSize,data:data,margin:{top:20,right:30,left:20,bottom:5}},react.createElement(XAxis.W,{dataKey:"name",hide:hideAxis}),react.createElement(YAxis.h,{hide:hideAxis}),react.createElement(Tooltip.m,{content:react.createElement(CustomTooltip,null),shared:!1,cursor:{fill:"transparent"}}),dataKeys.map(function(key,index){var bars=[];return bars.push(react.createElement(Bar.y,{dataKey:key,stackId:"singleId",fill:colors[index],radius:[10,10,10,10],style:{transform:"translateY(-".concat(2*(index+1),"px)")}})),bars})):react.createElement("div",{className:"flex items-end h-full"},react.createElement("p",{className:"text-5xl font-bold text-baseBlack"},"No Data"))))};try{Stackchart.displayName="Stackchart",Stackchart.__docgenInfo={description:"",displayName:"Stackchart",props:{height:{defaultValue:{value:"200"},description:"",name:"height",required:!1,type:{name:"number"}},barSize:{defaultValue:{value:"15"},description:"",name:"barSize",required:!1,type:{name:"number"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"{ [x: string]: string | number; }[]"}},strokeWidth:{defaultValue:{value:"5"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},dataKeys:{defaultValue:null,description:"",name:"dataKeys",required:!0,type:{name:"string[]"}},colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"string[]"}},chartBackgroundColor:{defaultValue:{value:"#fff"},description:"",name:"chartBackgroundColor",required:!1,type:{name:"string"}},hideAxis:{defaultValue:{value:"true"},description:"",name:"hideAxis",required:!1,type:{name:"boolean"}},isDataLoading:{defaultValue:null,description:"",name:"isDataLoading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stackchart/Stackchart.tsx#Stackchart"]={docgenInfo:Stackchart.__docgenInfo,name:"Stackchart",path:"src/components/Stackchart/Stackchart.tsx#Stackchart"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/StatusBar/StatusBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{e:()=>StatusBar});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/index.ts"),StatusBar=function(param){var children=param.children,_param_className=param.className,_param_testId=param.testId,top=(0,_hooks__WEBPACK_IMPORTED_MODULE_2__.cr)().top;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("fixed top-0 left-0 right-0 z-[9999] bg-bg-primary/80 backdrop-blur-sm","flex items-center justify-between px-4 py-2 text-xs text-text-secondary",void 0===_param_className?"":_param_className),style:{paddingTop:"".concat(top+8,"px")},"data-testid":void 0===_param_testId?"status-bar":_param_testId},children||react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"9:41"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center gap-1"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-4 h-4 border border-text-secondary rounded-sm"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-6 h-3 border border-text-secondary rounded-sm"}))))};try{StatusBar.displayName="StatusBar",StatusBar.__docgenInfo={description:`StatusBar - System status bar component
Perfect for mobile status indicators`,displayName:"StatusBar",props:{children:{defaultValue:null,description:"Status items",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"status-bar"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/StatusBar/StatusBar.tsx#StatusBar"]={docgenInfo:StatusBar.__docgenInfo,name:"StatusBar",path:"src/components/StatusBar/StatusBar.tsx#StatusBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Stepper/Stepper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>Stepper});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),Stepper=function(param){var value=param.value,_param_min=param.min,min=void 0===_param_min?0:_param_min,_param_max=param.max,max=void 0===_param_max?100:_param_max,_param_step=param.step,step=void 0===_param_step?1:_param_step,onChange=param.onChange,_param_disabled=param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,_param_size=param.size,size=void 0===_param_size?"md":_param_size,_param_className=param.className,_param_testId=param.testId,buttonSizeClasses={sm:"w-7 h-7",md:"w-9 h-9",lg:"w-11 h-11"};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("inline-flex items-center border border-border-primary rounded-lg bg-bg-primary",void 0===_param_className?"":_param_className),"data-testid":void 0===_param_testId?"stepper":_param_testId},react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button",onClick:function(){disabled||onChange(Math.max(min,value-step))},disabled:disabled||value<=min,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex items-center justify-center font-semibold text-text-primary","hover:bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-primary-500","disabled:opacity-50 disabled:cursor-not-allowed","transition-colors",buttonSizeClasses[size],"rounded-l-lg"),"aria-label":"Decrease value"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20 12H4"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("px-4 py-2 min-w-[3rem] text-center font-semibold text-text-primary border-x border-border-primary",{sm:"text-sm",md:"text-base",lg:"text-lg"}[size])},value),react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button",onClick:function(){disabled||onChange(Math.min(max,value+step))},disabled:disabled||value>=max,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex items-center justify-center font-semibold text-text-primary","hover:bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-primary-500","disabled:opacity-50 disabled:cursor-not-allowed","transition-colors",buttonSizeClasses[size],"rounded-r-lg"),"aria-label":"Increase value"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"}))))};try{Stepper.displayName="Stepper",Stepper.__docgenInfo={description:`Stepper - Increment/decrement control
Perfect for quantity selectors and number inputs`,displayName:"Stepper",props:{value:{defaultValue:null,description:"Current value",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:{value:"0"},description:"Minimum value",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Maximum value",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"Step increment",name:"step",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"Callback when value changes",name:"onChange",required:!0,type:{name:"(value: number) => void"}},disabled:{defaultValue:{value:"false"},description:"Whether stepper is disabled",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"stepper"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stepper/Stepper.tsx#Stepper"]={docgenInfo:Stepper.__docgenInfo,name:"Stepper",path:"src/components/Stepper/Stepper.tsx#Stepper"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SwipeableCard/SwipeableCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>SwipeableCard});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/index.ts"),framer_motion__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var SwipeableCard=function(param){var children=param.children,_param_swipeLeftActions=param.swipeLeftActions,swipeLeftActions=void 0===_param_swipeLeftActions?[]:_param_swipeLeftActions,_param_swipeRightActions=param.swipeRightActions,swipeRightActions=void 0===_param_swipeRightActions?[]:_param_swipeRightActions,_param_swipeThreshold=param.swipeThreshold,swipeThreshold=void 0===_param_swipeThreshold?100:_param_swipeThreshold,_param_enabled=param.enabled,enabled=void 0===_param_enabled||_param_enabled,onSwipeStart=param.onSwipeStart,onSwipeEnd=param.onSwipeEnd,_param_className=param.className,_param_testId=param.testId,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),2),swipeOffset=_useState[0],setSwipeOffset=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isSwipeActive=_useState1[0],setIsSwipeActive=_useState1[1],cardRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),hasLeftActions=swipeLeftActions.length>0,hasRightActions=swipeRightActions.length>0,actionWidth=80*(swipeOffset>0?swipeRightActions:swipeLeftActions).length,swipeHandlers=(0,_hooks__WEBPACK_IMPORTED_MODULE_2__.o_)({onSwipeLeft:enabled&&hasLeftActions?function(){Math.abs(swipeOffset)>=swipeThreshold&&(setSwipeOffset(-actionWidth),setIsSwipeActive(!0))}:void 0,onSwipeRight:enabled&&hasRightActions?function(){swipeOffset>=swipeThreshold&&(setSwipeOffset(actionWidth),setIsSwipeActive(!0))}:void 0,threshold:swipeThreshold}).swipeHandlers,handleAction=function(action){action.onAction(),setSwipeOffset(0),setIsSwipeActive(!1)},handleReset=function(){setSwipeOffset(0),setIsSwipeActive(!1),null==onSwipeEnd||onSwipeEnd()},renderActions=function(actions,position){return 0===actions.length?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute top-0 bottom-0 flex items-center","left"===position?"left-0":"right-0")},actions.map(function(action,index){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{key:index,onClick:function(){return handleAction(action)},className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("h-full px-6 flex items-center justify-center gap-2 text-white font-semibold",action.destructive?"bg-error-600":action.color||"bg-primary-600","transition-colors hover:opacity-90"),style:{minWidth:"80px"}},action.icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"string"==typeof action.icon?react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:action.icon,alt:action.label,className:"w-5 h-5"}):action.icon),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,action.label))}))};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_object_spread({ref:cardRef,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative overflow-hidden rounded-lg",void 0===_param_className?"":_param_className),"data-testid":void 0===_param_testId?"swipeable-card":_param_testId},enabled?swipeHandlers:{}),hasLeftActions&&renderActions(swipeLeftActions,"left"),hasRightActions&&renderActions(swipeRightActions,"right"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.P.div,{className:"relative bg-bg-primary rounded-lg",animate:{x:swipeOffset},drag:!!enabled&&"x",dragConstraints:{left:hasRightActions?-actionWidth:0,right:hasLeftActions?actionWidth:0},dragElastic:.2,onDrag:function(_,info){setSwipeOffset(info.offset.x),Math.abs(info.offset.x)>10&&(setIsSwipeActive(!0),null==onSwipeStart||onSwipeStart())},onDragEnd:function(_,info){var velocity=info.velocity.x;Math.abs(info.offset.x)>swipeThreshold||Math.abs(velocity)>500?info.offset.x>0&&hasRightActions?setSwipeOffset(actionWidth):info.offset.x<0&&hasLeftActions?setSwipeOffset(-actionWidth):handleReset():handleReset()},whileTap:{scale:enabled&&!isSwipeActive?.98:1}},children,isSwipeActive&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"absolute inset-0 bg-transparent z-10",onClick:handleReset,"aria-label":"Reset swipe"})))};try{SwipeableCard.displayName="SwipeableCard",SwipeableCard.__docgenInfo={description:`SwipeableCard - A card component with swipe actions
Supports swipe left/right to reveal action buttons`,displayName:"SwipeableCard",props:{children:{defaultValue:null,description:"Card content",name:"children",required:!0,type:{name:"ReactNode"}},swipeLeftActions:{defaultValue:{value:"[]"},description:"Actions available on swipe left",name:"swipeLeftActions",required:!1,type:{name:"SwipeAction[]"}},swipeRightActions:{defaultValue:{value:"[]"},description:"Actions available on swipe right",name:"swipeRightActions",required:!1,type:{name:"SwipeAction[]"}},swipeThreshold:{defaultValue:{value:"100"},description:"Threshold in pixels to trigger swipe",name:"swipeThreshold",required:!1,type:{name:"number"}},enabled:{defaultValue:{value:"true"},description:"Whether swipe is enabled",name:"enabled",required:!1,type:{name:"boolean"}},onSwipeStart:{defaultValue:null,description:"Callback when swipe starts",name:"onSwipeStart",required:!1,type:{name:"(() => void)"}},onSwipeEnd:{defaultValue:null,description:"Callback when swipe ends",name:"onSwipeEnd",required:!1,type:{name:"(() => void)"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"swipeable-card"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SwipeableCard/SwipeableCard.tsx#SwipeableCard"]={docgenInfo:SwipeableCard.__docgenInfo,name:"SwipeableCard",path:"src/components/SwipeableCard/SwipeableCard.tsx#SwipeableCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SwipeableCard/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>_SwipeableCard__WEBPACK_IMPORTED_MODULE_0__.X});var _SwipeableCard__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/SwipeableCard/SwipeableCard.tsx")},"./src/components/Table/Table.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>Table});var react=__webpack_require__("../node_modules/react/index.js"),Checkbox=__webpack_require__("./src/components/Checkbox/index.ts");function TableHeader(param){var columns=param.columns,selectAll=(param.TableTitle,param.selectAll),onSelectAll=param.onSelectAll,multiSelect=param.multiSelect;return react.createElement("tr",{className:"bg-bg-secondary"},react.createElement("th",{className:"".concat(multiSelect?"px-6":"px-9"," py-3.5 text-left text-sm font-semibold text-text-tertiary")},react.createElement("div",{className:"flex items-center gap-3"},multiSelect&&react.createElement(Checkbox.S,{id:"select-all-checkbox",checked:selectAll?"basic":"unchecked",label:"",onChange:function(newValue){return onSelectAll("basic"===newValue)}}),columns[0].title)),columns.slice(1).map(function(column,index){return react.createElement("th",{key:"table-header-".concat(index),className:column.headerStyle||"px-3 py-3.5 text-left text-sm font-semibold text-text-tertiary"},column.title)}))}try{TableHeader.displayName="TableHeader",TableHeader.__docgenInfo={description:"",displayName:"TableHeader",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"IColumnType<T>[]"}},TableTitle:{defaultValue:null,description:"",name:"TableTitle",required:!0,type:{name:"string | Element"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"boolean"}},onSelectAll:{defaultValue:null,description:"",name:"onSelectAll",required:!0,type:{name:"(isChecked: boolean) => void"}},multiSelect:{defaultValue:null,description:"",name:"multiSelect",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableHeader.tsx#TableHeader"]={docgenInfo:TableHeader.__docgenInfo,name:"TableHeader",path:"src/components/Table/TableHeader.tsx#TableHeader"})}catch(__react_docgen_typescript_loader_error){}var classnames=__webpack_require__("../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function TableHeaderEnhanced(param){var columns=param.columns,selectAll=(param.TableTitle,param.selectAll),onSelectAll=param.onSelectAll,multiSelect=param.multiSelect,sortColumn=param.sortColumn,sortDirection=param.sortDirection,onSort=param.onSort,columnWidths=param.columnWidths,onResize=param.onResize,_React_useState=_sliced_to_array(react.useState(null),2),resizingColumn=_React_useState[0],setResizingColumn=_React_useState[1],handleResizeStart=function(columnKey,e){e.preventDefault(),setResizingColumn(columnKey);var startX=e.clientX,startWidth=(null==columnWidths?void 0:columnWidths[columnKey])||150,handleMouseMove=function(e){var newWidth=Math.max(100,startWidth+(e.clientX-startX));null==onResize||onResize(columnKey,newWidth)},handleMouseUp=function(){setResizingColumn(null),document.removeEventListener("mousemove",handleMouseMove),document.removeEventListener("mouseup",handleMouseUp)};document.addEventListener("mousemove",handleMouseMove),document.addEventListener("mouseup",handleMouseUp)};return react.createElement("tr",{className:"bg-bg-secondary"},react.createElement("th",{className:"".concat(multiSelect?"px-6":"px-9"," py-3.5 text-left text-sm font-semibold text-text-tertiary"),style:(null==columnWidths?void 0:columnWidths[columns[0].key])?{width:"".concat(columnWidths[columns[0].key],"px")}:void 0},react.createElement("div",{className:"flex items-center gap-3"},multiSelect&&react.createElement(Checkbox.S,{id:"select-all-checkbox",checked:selectAll?"basic":"unchecked",label:"",onChange:function(newValue){return onSelectAll("basic"===newValue)}}),react.createElement("div",{className:"flex items-center gap-2 flex-1"},react.createElement("span",null,columns[0].title),columns[0].sortable&&react.createElement("button",{onClick:function(){return null==onSort?void 0:onSort(columns[0].key)},className:"hover:bg-bg-primary_hover rounded p-1"},react.createElement("svg",{className:classnames_default()("w-4 h-4 text-text-quaternary",sortColumn===columns[0].key&&"text-primary-600"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:sortColumn===columns[0].key&&"desc"===sortDirection?"M5 15l7-7 7 7":"M19 9l-7 7-7-7"}))))),columns[0].resizable&&react.createElement("div",{onMouseDown:function(e){return handleResizeStart(columns[0].key,e)},className:classnames_default()("absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-primary-500",resizingColumn===columns[0].key&&"bg-primary-500")})),columns.slice(1).map(function(column,index){return react.createElement("th",{key:"table-header-".concat(index),className:classnames_default()(column.headerStyle||"px-3 py-3.5 text-left text-sm font-semibold text-text-tertiary","relative"),style:(null==columnWidths?void 0:columnWidths[column.key])?{width:"".concat(columnWidths[column.key],"px")}:void 0},react.createElement("div",{className:"flex items-center gap-2"},react.createElement("span",null,column.title),column.sortable&&react.createElement("button",{onClick:function(){return null==onSort?void 0:onSort(column.key)},className:"hover:bg-bg-primary_hover rounded p-1"},react.createElement("svg",{className:classnames_default()("w-4 h-4 text-text-quaternary",sortColumn===column.key&&"text-primary-600"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:sortColumn===column.key&&"desc"===sortDirection?"M5 15l7-7 7 7":"M19 9l-7 7-7-7"})))),column.resizable&&react.createElement("div",{onMouseDown:function(e){return handleResizeStart(column.key,e)},className:classnames_default()("absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-primary-500",resizingColumn===column.key&&"bg-primary-500")}))}))}try{TableHeaderEnhanced.displayName="TableHeaderEnhanced",TableHeaderEnhanced.__docgenInfo={description:"",displayName:"TableHeaderEnhanced",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"IColumnType<T>[]"}},TableTitle:{defaultValue:null,description:"",name:"TableTitle",required:!0,type:{name:"string | Element"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"boolean"}},onSelectAll:{defaultValue:null,description:"",name:"onSelectAll",required:!0,type:{name:"(isChecked: boolean) => void"}},multiSelect:{defaultValue:null,description:"",name:"multiSelect",required:!0,type:{name:"boolean"}},sortColumn:{defaultValue:null,description:"",name:"sortColumn",required:!1,type:{name:"string"}},sortDirection:{defaultValue:null,description:"",name:"sortDirection",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'}]}},onSort:{defaultValue:null,description:"",name:"onSort",required:!1,type:{name:"((columnKey: string) => void)"}},columnWidths:{defaultValue:null,description:"",name:"columnWidths",required:!1,type:{name:"Record<string, number>"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!1,type:{name:"((columnKey: string, width: number) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableHeaderEnhanced.tsx#TableHeaderEnhanced"]={docgenInfo:TableHeaderEnhanced.__docgenInfo,name:"TableHeaderEnhanced",path:"src/components/Table/TableHeaderEnhanced.tsx#TableHeaderEnhanced"})}catch(__react_docgen_typescript_loader_error){}function TableRowCell(param){var _item_column_key,item=param.item,column=param.column;return react.createElement("td",{className:column.columnStyle},column.render?column.render(column,item):react.createElement("div",null,null!=(_item_column_key=item[column.key])?_item_column_key:""))}try{TableRowCell.displayName="TableRowCell",TableRowCell.__docgenInfo={description:"",displayName:"TableRowCell",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"T"}},column:{defaultValue:null,description:"",name:"column",required:!0,type:{name:"IColumnType<T>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableRowCell.tsx#TableRowCell"]={docgenInfo:TableRowCell.__docgenInfo,name:"TableRowCell",path:"src/components/Table/TableRowCell.tsx#TableRowCell"})}catch(__react_docgen_typescript_loader_error){}function TableRow(param){var data=param.data,columns=param.columns,selectedRows=param.selectedRows,onRowSelect=param.onRowSelect,startIndex=param.startIndex,multiSelect=param.multiSelect;return react.createElement(react.Fragment,null,data.map(function(item,itemIndex){var rowIndex=startIndex+itemIndex;return react.createElement("tr",{key:"table-body-".concat(rowIndex),className:"".concat(selectedRows.includes(rowIndex)?"bg-gray-200":"bg-bg-primary"," hover:bg-bg-primary_hover")},react.createElement("td",{className:"px-6 py-3 flex items-center gap-3"},multiSelect&&react.createElement(Checkbox.S,{id:"row-checkbox-".concat(rowIndex),checked:selectedRows.includes(rowIndex)?"basic":"unchecked",label:"",onChange:function(){return onRowSelect(rowIndex)}}),react.createElement(TableRowCell,{key:"table-row-cell-first-".concat(rowIndex),item:item,column:columns[0]})),columns.slice(1).map(function(column,columnIndex){return react.createElement(TableRowCell,{key:"table-row-cell-".concat(rowIndex,"-").concat(columnIndex),item:item,column:column})}))}))}try{TableRow.displayName="TableRow",TableRow.__docgenInfo={description:"",displayName:"TableRow",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"IColumnType<T>[]"}},selectedRows:{defaultValue:null,description:"",name:"selectedRows",required:!0,type:{name:"number[]"}},onRowSelect:{defaultValue:null,description:"",name:"onRowSelect",required:!0,type:{name:"(index: number) => void"}},startIndex:{defaultValue:null,description:"",name:"startIndex",required:!0,type:{name:"number"}},multiSelect:{defaultValue:null,description:"",name:"multiSelect",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableRow.tsx#TableRow"]={docgenInfo:TableRow.__docgenInfo,name:"TableRow",path:"src/components/Table/TableRow.tsx#TableRow"})}catch(__react_docgen_typescript_loader_error){}var SwipeableCard=__webpack_require__("./src/components/SwipeableCard/index.ts");function TableMobileCard(param){var item=param.item,columns=param.columns,index=param.index,isSelected=param.isSelected,onSelect=param.onSelect,_param_multiSelect=param.multiSelect,multiSelect=void 0!==_param_multiSelect&&_param_multiSelect,swipeActions=param.swipeActions,primaryColumn=columns[0],secondaryColumns=columns.slice(1,3),cardContent=react.createElement("div",{className:"p-4 rounded-lg border border-border-secondary ".concat(isSelected?"bg-primary-50 border-primary-300":"bg-bg-primary"),onClick:multiSelect?void 0:onSelect},react.createElement("div",{className:"flex items-start justify-between mb-2"},react.createElement("div",{className:"flex items-center gap-3 flex-1"},multiSelect&&react.createElement(Checkbox.S,{id:"mobile-row-checkbox-".concat(index),checked:isSelected?"basic":"unchecked",label:"",onChange:onSelect,onClick:function(e){return e.stopPropagation()}}),react.createElement("div",{className:"flex-1"},primaryColumn.render?primaryColumn.render(primaryColumn,item):item[primaryColumn.key]))),secondaryColumns.length>0&&react.createElement("div",{className:"space-y-1.5 mt-3 pt-3 border-t border-border-secondary"},secondaryColumns.map(function(column,colIndex){return react.createElement("div",{key:"mobile-col-".concat(colIndex),className:"flex justify-between"},react.createElement("span",{className:"text-xs font-medium text-text-quaternary"},column.title,":"),react.createElement("span",{className:"text-sm text-text-secondary text-right"},column.render?column.render(column,item):item[column.key]))})),columns.length>3&&react.createElement("div",{className:"mt-2 text-xs text-text-quaternary"},"+",columns.length-3," more"));return swipeActions&&swipeActions.length>0?react.createElement(SwipeableCard.X,{swipeLeftActions:swipeActions.map(function(action){return{label:action.label,icon:action.icon,onAction:action.onAction,destructive:action.destructive}})},cardContent):react.createElement("div",null,cardContent)}try{TableMobileCard.displayName="TableMobileCard",TableMobileCard.__docgenInfo={description:"Mobile-optimized card view for table rows",displayName:"TableMobileCard",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"T"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"IColumnType<T>[]"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"() => void"}},multiSelect:{defaultValue:{value:"false"},description:"",name:"multiSelect",required:!1,type:{name:"boolean"}},swipeActions:{defaultValue:null,description:"",name:"swipeActions",required:!1,type:{name:"{ label: string; icon?: string; onAction: () => void; destructive?: boolean; }[] | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableMobileCard.tsx#TableMobileCard"]={docgenInfo:TableMobileCard.__docgenInfo,name:"TableMobileCard",path:"src/components/Table/TableMobileCard.tsx#TableMobileCard"})}catch(__react_docgen_typescript_loader_error){}let arrow_left_namespaceObject=__webpack_require__.p+"static/media/arrow-left.7caa3a2d.svg",arrow_right_namespaceObject=__webpack_require__.p+"static/media/arrow-right.5712eb04.svg";var Button=__webpack_require__("./src/components/Button/index.ts");let dotsvertical_namespaceObject=__webpack_require__.p+"static/media/dotsvertical.8d6c3bd0.svg";var hooks=__webpack_require__("./src/hooks/index.ts");function Table_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Table_array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return Table_array_like_to_array(arr)}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function Table_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function Table_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function Table_sliced_to_array(arr,i){return Table_array_with_holes(arr)||Table_iterable_to_array_limit(arr,i)||Table_unsupported_iterable_to_array(arr,i)||Table_non_iterable_rest()}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||Table_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function Table_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return Table_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Table_array_like_to_array(o,minLen)}}function Table(param){var data=param.data,columns=param.columns,TableTitle=param.TableTitle,style=param.style,_param_currentPage=(param.itemsPerPage,param.currentPage),currentPage=void 0===_param_currentPage?1:_param_currentPage,_param_totalPages=param.totalPages,totalPages=void 0===_param_totalPages?1:_param_totalPages,onPageChange=param.onPageChange,headerAction=param.headerAction,_param_paginationEnabled=param.paginationEnabled,paginationEnabled=void 0===_param_paginationEnabled||_param_paginationEnabled,onPerformAction=param.onPerformAction,_param_showTopSection=param.showTopSection,showTopSection=void 0===_param_showTopSection||_param_showTopSection,_param_multiSelect=param.multiSelect,multiSelect=void 0===_param_multiSelect||_param_multiSelect,_param_mobileView=param.mobileView,mobileView=void 0===_param_mobileView?"cards":_param_mobileView,mobileSwipeActions=param.mobileSwipeActions,_param_sortable=param.sortable,sortable=void 0!==_param_sortable&&_param_sortable,_param_filterable=param.filterable,_param_resizable=param.resizable,_useState=Table_sliced_to_array((0,react.useState)([]),2),selectedRows=_useState[0],setSelectedRows=_useState[1],_useState1=Table_sliced_to_array((0,react.useState)(),2),sortColumn=_useState1[0],setSortColumn=_useState1[1],_useState2=Table_sliced_to_array((0,react.useState)("asc"),2),sortDirection=_useState2[0],setSortDirection=_useState2[1],_useState3=Table_sliced_to_array((0,react.useState)({}),2),filters=_useState3[0];_useState3[1];var _useState4=Table_sliced_to_array((0,react.useState)(function(){var widths={};return columns.forEach(function(col){col.width&&(widths[col.key]=col.width)}),widths}),2),columnWidths=_useState4[0],setColumnWidths=_useState4[1],isMobile=(0,hooks.al)(),processedData=_to_consumable_array(data);if(sortable&&sortColumn){var column=columns.find(function(col){return col.key===sortColumn});(null==column?void 0:column.sortable)&&processedData.sort(function(a,b){if(column.sortFn)return column.sortFn(a,b)*("asc"===sortDirection?1:-1);var aVal=a[sortColumn],bVal=b[sortColumn];return(aVal<bVal?-1:+(aVal>bVal))*("asc"===sortDirection?1:-1)})}void 0!==_param_filterable&&_param_filterable&&(processedData=processedData.filter(function(item){return columns.every(function(column){return!column.filterable||!filters[column.key]||(column.filterFn?column.filterFn(item,filters[column.key]):String(item[column.key]||"").toLowerCase().includes(filters[column.key].toLowerCase()))})}));var currentData=processedData,handleSelectAll=function(isChecked){if(isChecked){var currentPageRowIndexes=currentData.map(function(_,index){return 0+index});setSelectedRows(function(prevSelectedRows){return _to_consumable_array(prevSelectedRows).concat(_to_consumable_array(currentPageRowIndexes))})}else{var currentPageRowIndexes1=currentData.map(function(_,index){return 0+index});setSelectedRows(function(prevSelectedRows){return prevSelectedRows.filter(function(index){return!currentPageRowIndexes1.includes(index)})})}},handleRowSelect=function(index){setSelectedRows(function(prevSelectedRows){return prevSelectedRows.includes(index)?prevSelectedRows.filter(function(i){return i!==index}):_to_consumable_array(prevSelectedRows).concat([index])})},isAllSelected=function(){return currentData.every(function(_,index){return selectedRows.includes(0+index)})},handlePageChange=function(page){onPageChange&&onPageChange(page)};return isMobile&&"cards"===mobileView?react.createElement("div",{className:"w-full",style:style},showTopSection&&react.createElement("div",{className:"w-full flex justify-between py-5 px-4"},react.createElement("div",{className:"text-lg font-semibold text-text-primary"},TableTitle||"Table Title"),react.createElement("div",{className:"flex items-center space-x-3"},headerAction||react.createElement("img",{src:dotsvertical_namespaceObject,alt:"Options",className:"cursor-pointer"}),onPerformAction&&react.createElement(Button.$,{color:"primary",onClick:function(){return onPerformAction(selectedRows)},disabled:0===selectedRows.length},"Perform Action"))),react.createElement("div",{className:"space-y-3 px-4"},currentData.map(function(item,index){var rowIndex=0+index,swipeActions=null==mobileSwipeActions?void 0:mobileSwipeActions.map(function(action){return{label:action.label,icon:action.icon,onAction:function(){return action.onAction(rowIndex)},destructive:action.destructive}});return react.createElement(TableMobileCard,{key:"mobile-card-".concat(rowIndex),item:item,columns:columns,index:rowIndex,isSelected:selectedRows.includes(rowIndex),onSelect:function(){return handleRowSelect(rowIndex)},multiSelect:multiSelect,swipeActions:swipeActions})})),paginationEnabled&&totalPages>1&&react.createElement("div",{className:"flex justify-between items-center px-4 py-4"},react.createElement(Button.$,{color:"secondary",imgSrc:arrow_left_namespaceObject,shape:"circle",size:"md",variant:"filled",onClick:function(){return handlePageChange(Math.max(currentPage-1,1))},disabled:1===currentPage}),react.createElement("span",{className:"text-gray-700"},"Page ",currentPage," of ",totalPages),react.createElement(Button.$,{color:"secondary",imgSrc:arrow_right_namespaceObject,shape:"circle",size:"md",variant:"filled",onClick:function(){return handlePageChange(Math.min(currentPage+1,totalPages))},disabled:currentPage===totalPages}))):react.createElement("div",{className:"w-full",style:style},react.createElement("div",{className:"overflow-x-auto w-full"},react.createElement("div",{className:"inline-block min-w-full align-middle w-full overflow-hidden rounded-[24px] border border-gray-300 dark:border-[#21262D]"},showTopSection&&react.createElement("div",{className:"w-full flex justify-between py-5 px-6"},react.createElement("div",{className:"text-lg font-semibold text-text-primary"},TableTitle||"Table Title"),react.createElement("div",{className:"flex items-center space-x-3"},headerAction||react.createElement("img",{src:dotsvertical_namespaceObject,alt:"Options",className:"cursor-pointer"}),onPerformAction&&react.createElement(Button.$,{color:"primary",onClick:function(){return onPerformAction(selectedRows)},disabled:0===selectedRows.length},"Perform Action"))),react.createElement("table",{className:"rounded-[24px] min-w-full w-full dark:border-[#21262D] divide-y divide-gray-300 dark:divide-[#21262D]"},react.createElement("thead",null,sortable||void 0!==_param_resizable&&_param_resizable?react.createElement(TableHeaderEnhanced,{columns:isMobile?columns.slice(0,2):columns,TableTitle:TableTitle,selectAll:isAllSelected(),onSelectAll:handleSelectAll,multiSelect:multiSelect,sortColumn:sortColumn,sortDirection:sortDirection,onSort:function(columnKey){sortable&&(sortColumn===columnKey?setSortDirection("asc"===sortDirection?"desc":"asc"):(setSortColumn(columnKey),setSortDirection("asc")))},columnWidths:columnWidths,onResize:function(columnKey,width){setColumnWidths(function(prev){return _object_spread_props(_object_spread({},prev),_define_property({},columnKey,width))})}}):react.createElement(TableHeader,{columns:isMobile?columns.slice(0,2):columns,TableTitle:TableTitle,selectAll:isAllSelected(),onSelectAll:handleSelectAll,multiSelect:multiSelect})),react.createElement("tbody",null,isMobile&&"table"!==mobileView?null:react.createElement(TableRow,{data:currentData,columns:isMobile?columns.slice(0,2):columns,selectedRows:selectedRows,onRowSelect:handleRowSelect,startIndex:0,multiSelect:multiSelect})),paginationEnabled&&totalPages>1&&react.createElement("tfoot",null,react.createElement("tr",null,react.createElement("td",{colSpan:columns.length+1,className:"px-6 py-4"},react.createElement("div",{className:"flex justify-between items-center"},isMobile?react.createElement(Button.$,{color:"secondary",imgSrc:arrow_left_namespaceObject,shape:"circle",size:"md",variant:"filled",onClick:function(){return handlePageChange(Math.max(currentPage-1,1))},disabled:1===currentPage}):react.createElement(Button.$,{color:"secondary",imagePlacement:"left",imgSrc:arrow_left_namespaceObject,shape:"circle",size:"md",variant:"filled",onClick:function(){return handlePageChange(Math.max(currentPage-1,1))},disabled:1===currentPage},"Previous"),isMobile?react.createElement("span",{className:"text-gray-700"},"Page ",currentPage," of ",totalPages):react.createElement("div",{className:"flex items-center space-x-1 mx-4"},(function(){var pages=[];if(totalPages<=6)for(var i=1;i<=totalPages;i++)pages.push(i);else if(currentPage<=3){for(var i1=1;i1<=3;i1++)pages.push(i1);pages.push("...");for(var i2=totalPages-2;i2<=totalPages;i2++)pages.push(i2)}else if(currentPage>=4&&currentPage<=totalPages-5){pages.push(currentPage-1,currentPage,currentPage+1),pages.push("...");for(var i3=totalPages-2;i3<=totalPages;i3++)pages.push(i3)}else for(var i4=totalPages-4;i4<=totalPages;i4++)pages.push(i4);return pages})().map(function(pageNumber,index){return"number"==typeof pageNumber?react.createElement("button",{key:index,onClick:function(){return handlePageChange(pageNumber)},className:"p-3 ".concat(currentPage===pageNumber?"bg-bg-secondary text-text-secondary font-bold rounded-xl":"bg-bg-primary text-text-secondary")},pageNumber):react.createElement("span",{key:index,className:"p-3 text-gray-400"},pageNumber)})),isMobile?react.createElement(Button.$,{color:"secondary",imgSrc:arrow_right_namespaceObject,shape:"circle",size:"md",variant:"filled",onClick:function(){return handlePageChange(Math.min(currentPage+1,totalPages))},disabled:currentPage===totalPages}):react.createElement(Button.$,{color:"secondary",imagePlacement:"right",imgSrc:arrow_right_namespaceObject,shape:"circle",size:"md",variant:"filled",onClick:function(){return handlePageChange(Math.min(currentPage+1,totalPages))},disabled:currentPage===totalPages},"Next")))))))))}try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"IColumnType<T>[]"}},TableTitle:{defaultValue:null,description:"",name:"TableTitle",required:!0,type:{name:"string | Element"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},itemsPerPage:{defaultValue:{value:"2"},description:"",name:"itemsPerPage",required:!1,type:{name:"number"}},currentPage:{defaultValue:{value:"1"},description:"",name:"currentPage",required:!1,type:{name:"number"}},totalPages:{defaultValue:{value:"1"},description:"",name:"totalPages",required:!1,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!1,type:{name:"((page: number) => void)"}},paginationEnabled:{defaultValue:{value:"true"},description:"",name:"paginationEnabled",required:!1,type:{name:"boolean"}},headerAction:{defaultValue:null,description:"",name:"headerAction",required:!1,type:{name:"Element"}},onPerformAction:{defaultValue:null,description:"",name:"onPerformAction",required:!1,type:{name:"((selectedRows: number[]) => void)"}},showTopSection:{defaultValue:{value:"true"},description:"",name:"showTopSection",required:!1,type:{name:"boolean"}},multiSelect:{defaultValue:{value:"true"},description:"",name:"multiSelect",required:!1,type:{name:"boolean"}},mobileView:{defaultValue:{value:"cards"},description:"Mobile: View mode for mobile devices",name:"mobileView",required:!1,type:{name:"enum",value:[{value:'"table"'},{value:'"cards"'}]}},mobileSwipeActions:{defaultValue:null,description:"Mobile: Swipe actions for mobile card view",name:"mobileSwipeActions",required:!1,type:{name:"{ label: string; icon?: string; onAction: (rowIndex: number) => void; destructive?: boolean; }[] | undefined"}},sortable:{defaultValue:{value:"false"},description:"Enable sorting",name:"sortable",required:!1,type:{name:"boolean"}},filterable:{defaultValue:{value:"false"},description:"Enable filtering",name:"filterable",required:!1,type:{name:"boolean"}},resizable:{defaultValue:{value:"false"},description:"Enable column resizing",name:"resizable",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TemplateCard/TemplateCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_Avatar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Avatar/index.ts"),TemplateCard=function(param){var title=param.title,subtitle=param.subtitle,userAvatar=param.userAvatar,coverImage=param.coverImage,firstName=param.firstName,lastName=param.lastName,onCardClick=param.onCardClick,flag=param.flag,isDisabled=param.isDisabled;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-gray-100 flex h-[232px] rounded-2xl dark:bg-slate-600 flex-col shadow-boxShadowBlack ".concat(isDisabled?"cursor-not-allowed":"cursor-pointer"),onClick:function(){return!isDisabled&&onCardClick()}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"h-[100px] rounded-t-2xl w-full bg-gray-200 "},coverImage&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{className:"object-cover w-full rounded-t-2xl h-[100px]",src:coverImage,alt:""})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"h-[132px] flex flex-col px-6 py-2 justify-around"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-base font-semibold text-secondary-700"},title),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-tert-600 text-sm font-regular py-0.5"},subtitle)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex justify-between"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_1__.A,{imageUrl:userAvatar,firstName:null!=firstName?firstName:"",lastName:null!=lastName?lastName:""}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"font-medium text-tert-600 px-3 text-xs"},firstName," ",lastName)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center"},flag))))};let __WEBPACK_DEFAULT_EXPORT__=TemplateCard;try{TemplateCard.displayName="TemplateCard",TemplateCard.__docgenInfo={description:"",displayName:"TemplateCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},userAvatar:{defaultValue:null,description:"",name:"userAvatar",required:!1,type:{name:"string | null"}},coverImage:{defaultValue:null,description:"",name:"coverImage",required:!1,type:{name:"string"}},firstName:{defaultValue:null,description:"",name:"firstName",required:!1,type:{name:"string"}},lastName:{defaultValue:null,description:"",name:"lastName",required:!1,type:{name:"string"}},flag:{defaultValue:null,description:"",name:"flag",required:!1,type:{name:"Element"}},onCardClick:{defaultValue:null,description:"",name:"onCardClick",required:!0,type:{name:"() => void"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TemplateCard/TemplateCard.tsx#TemplateCard"]={docgenInfo:TemplateCard.__docgenInfo,name:"TemplateCard",path:"src/components/TemplateCard/TemplateCard.tsx#TemplateCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ThemeSelector/ThemeSelector.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{j:()=>ThemeSelector});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/contexts/ThemeContext.tsx"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/index.ts"),ThemeSelector=function(param){var _param_showLabels=param.showLabels,showLabels=void 0===_param_showLabels||_param_showLabels,_param_size=param.size,size=void 0===_param_size?"md":_param_size,_param_className=param.className,_param_testId=param.testId,_useTheme=(0,_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.D)(),theme=_useTheme.theme,setTheme=_useTheme.setTheme;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("inline-flex rounded-lg border border-border-secondary p-1",void 0===_param_className?"":_param_className),role:"radiogroup","aria-label":"Theme selection","data-testid":void 0===_param_testId?"theme-selector":_param_testId},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.$,{variant:"light"===theme?"filled":"outlined",color:"light"===theme?"primary":"secondary",size:size,onClick:function(){return setTheme("light")},className:"rounded-md","aria-label":"Light theme","aria-pressed":"light"===theme},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})),showLabels&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Light")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.$,{variant:"dark"===theme?"filled":"outlined",color:"dark"===theme?"primary":"secondary",size:size,onClick:function(){return setTheme("dark")},className:"rounded-md","aria-label":"Dark theme","aria-pressed":"dark"===theme},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})),showLabels&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Dark")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.$,{variant:"system"===theme?"filled":"outlined",color:"system"===theme?"primary":"secondary",size:size,onClick:function(){return setTheme("system")},className:"rounded-md","aria-label":"System theme","aria-pressed":"system"===theme},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})),showLabels&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"System")))};try{ThemeSelector.displayName="ThemeSelector",ThemeSelector.__docgenInfo={description:`ThemeSelector - Select between light, dark, or system theme
Provides full theme control including system preference`,displayName:"ThemeSelector",props:{showLabels:{defaultValue:{value:"true"},description:"Show labels",name:"showLabels",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"theme-selector"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThemeSelector/ThemeSelector.tsx#ThemeSelector"]={docgenInfo:ThemeSelector.__docgenInfo,name:"ThemeSelector",path:"src/components/ThemeSelector/ThemeSelector.tsx#ThemeSelector"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ThemeSelector/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{j:()=>_ThemeSelector__WEBPACK_IMPORTED_MODULE_0__.j});var _ThemeSelector__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ThemeSelector/ThemeSelector.tsx")},"./src/components/ThemeToggle/ThemeToggle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>ThemeToggle});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/contexts/ThemeContext.tsx"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/index.ts"),ThemeToggle=function(param){var _param_showLabel=param.showLabel,showLabel=void 0!==_param_showLabel&&_param_showLabel,_param_size=param.size,_param_className=param.className,_param_testId=param.testId,_useTheme=(0,_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.D)(),resolvedTheme=_useTheme.resolvedTheme,toggleTheme=_useTheme.toggleTheme;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.$,{onClick:toggleTheme,variant:"outlined",color:"secondary",size:void 0===_param_size?"md":_param_size,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("gap-2",void 0===_param_className?"":_param_className),"data-testid":void 0===_param_testId?"theme-toggle":_param_testId,"aria-label":"Switch to ".concat("light"===resolvedTheme?"dark":"light"," mode")},"light"===resolvedTheme?react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})),showLabel&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Dark Mode")):react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})),showLabel&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Light Mode")))};try{ThemeToggle.displayName="ThemeToggle",ThemeToggle.__docgenInfo={description:`ThemeToggle - Toggle between light and dark themes
Provides a simple UI control for theme switching`,displayName:"ThemeToggle",props:{showLabel:{defaultValue:{value:"false"},description:"Show labels",name:"showLabel",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"theme-toggle"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThemeToggle/ThemeToggle.tsx#ThemeToggle"]={docgenInfo:ThemeToggle.__docgenInfo,name:"ThemeToggle",path:"src/components/ThemeToggle/ThemeToggle.tsx#ThemeToggle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ThemeToggle/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>_ThemeToggle__WEBPACK_IMPORTED_MODULE_0__.U});var _ThemeToggle__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ThemeToggle/ThemeToggle.tsx")},"./src/components/ToastAlert/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>ToastAlert});var react=__webpack_require__("../node_modules/react/index.js");let infoCircle_namespaceObject=__webpack_require__.p+"static/media/infoCircle.a8516a54.svg",infoCirclePrimary_namespaceObject=__webpack_require__.p+"static/media/infoCirclePrimary.3b851d94.svg",alertCircleError_namespaceObject=__webpack_require__.p+"static/media/alertCircleError.59969625.svg",alertCircleWarning_namespaceObject=__webpack_require__.p+"static/media/alertCircleWarning.663bd69e.svg",checkCircle_namespaceObject=__webpack_require__.p+"static/media/checkCircle.4c8eda20.svg",secondaryCircle_namespaceObject=__webpack_require__.p+"static/media/secondaryCircle.7438f6af.svg";var alert_close=__webpack_require__("./src/assets/icons/alert/close.svg"),classnames=__webpack_require__("../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),ToastAlert=function(props){var message=props.message,description=props.description,variant=props.variant,_props_showDismiss=props.showDismiss,actionLabel=props.actionLabel,onActionClick=props.onActionClick,onClose=props.onClose,id=props.id;return react.createElement("div",{className:"flex gap-xl rounded-xl border border-border-primary p-4 shadow-xs bg-bg-primary z-50"},react.createElement("div",{className:"flex ".concat("basic"===variant?"h-10 w-10 rounded-md border-1 border-solid border-gray-200 p-md shadow-xs ":""," items-start justify-start ")},"primary"===variant?react.createElement("img",{className:"w-6 h-6",src:infoCirclePrimary_namespaceObject,alt:""}):"success"===variant?react.createElement("img",{className:"w-6 h-6",src:checkCircle_namespaceObject,alt:""}):"error"===variant?react.createElement("img",{src:alertCircleError_namespaceObject,alt:""}):"warinng"===variant?react.createElement("img",{src:alertCircleWarning_namespaceObject,alt:""}):"secondary"===variant?react.createElement("img",{src:secondaryCircle_namespaceObject,alt:""}):react.createElement("img",{src:infoCircle_namespaceObject,alt:""})),react.createElement("div",{className:classnames_default()("flex w-full flex-col items-start justify-center",{"gap-lg":description})},react.createElement("div",{className:"w-full"},react.createElement("div",{className:"flex items-start justify-between"},react.createElement("p",{className:"text-sm font-semibold text-text-secondary"},message),react.createElement("img",{className:"cursor-pointer",onClick:function(){return onClose(id)},src:alert_close,alt:""})),description&&react.createElement("p",{className:"font-weight: 400; mt-1 text-sm text-text-tertiary"},description)),react.createElement("div",{className:"flex items-start justify-center gap-3 cursor-pointer"},void 0!==_props_showDismiss&&_props_showDismiss&&react.createElement("span",{onClick:function(){return onClose(id)},className:"text-sm font-semibold text-text-tertiary"},"Dismiss"),actionLabel&&react.createElement("span",{onClick:onActionClick,className:"text-sm font-semibold text-blue-700"},actionLabel))))};try{ToastAlert.displayName="ToastAlert",ToastAlert.__docgenInfo={description:"",displayName:"ToastAlert",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"primary"'},{value:'"secondary"'},{value:'"error"'},{value:'"basic"'},{value:'"warinng"'}]}},showDismiss:{defaultValue:null,description:"",name:"showDismiss",required:!1,type:{name:"boolean"}},actionLabel:{defaultValue:null,description:"",name:"actionLabel",required:!1,type:{name:"string"}},onActionClick:{defaultValue:null,description:"",name:"onActionClick",required:!0,type:{name:"() => void"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(id: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ToastAlert/ToastAlert.tsx#ToastAlert"]={docgenInfo:ToastAlert.__docgenInfo,name:"ToastAlert",path:"src/components/ToastAlert/ToastAlert.tsx#ToastAlert"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Toggle/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>Toggle});var react=__webpack_require__("../node_modules/react/index.js"),classnames=__webpack_require__("../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var Toggle=function(param){var _obj,id=param.id,label=param.label,isChecked=param.isChecked,onChange=param.onChange,_param_disabled=param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,_param_variant=param.variant,_param_size=param.size,_param_labelPosition=param.labelPosition,labelPosition=void 0===_param_labelPosition?"right":_param_labelPosition,_param_color=param.color,color=void 0===_param_color?"primary":_param_color,_useState=_sliced_to_array((0,react.useState)(isChecked),2),checked=_useState[0],setChecked=_useState[1],handleToggle=function(){if(!disabled){var newChecked=!checked;setChecked(newChecked),onChange(newChecked)}},colorClasses={primary:checked?"bg-blue-600":"bg-bg-tertiary",success:checked?"bg-green-600":"bg-bg-tertiary",warning:checked?"bg-yellow-600":"bg-bg-tertiary",error:checked?"bg-red-600":"bg-bg-tertiary"},sizeConfig={sm:{track:"w-9 h-5",thumb:"w-4 h-4",translate:"translate-x-4"},md:{track:"w-11 h-6",thumb:"w-5 h-5",translate:"translate-x-5"},lg:{track:"w-14 h-7",thumb:"w-6 h-6",translate:"translate-x-7"}}[void 0===_param_size?"md":_param_size];return"ios"===(void 0===_param_variant?"default":_param_variant)?react.createElement("label",{htmlFor:id,className:classnames_default()("flex items-center cursor-pointer","right"===labelPosition?"flex-row":"flex-row-reverse",{"opacity-50 cursor-not-allowed":disabled})},label&&react.createElement("div",{className:classnames_default()("text-text-secondary font-medium","right"===labelPosition?"ml-3":"mr-3")},label),react.createElement("div",{className:"relative"},react.createElement("input",{type:"checkbox",id:id,className:"sr-only",checked:checked,onChange:handleToggle,disabled:disabled}),react.createElement("div",{className:classnames_default()("block rounded-full transition-all duration-300 ease-in-out",sizeConfig.track,colorClasses[color],{"ring-2 ring-offset-2 ring-blue-500 ring-offset-white":checked&&!disabled})}),react.createElement("div",{className:classnames_default()("absolute left-0.5 top-0.5 bg-white rounded-full shadow-lg transition-all duration-300 ease-in-out",sizeConfig.thumb,(_define_property(_obj={},sizeConfig.translate,checked),_define_property(_obj,"shadow-md",checked),_define_property(_obj,"shadow-sm",!checked),_obj))}))):react.createElement("label",{htmlFor:id,className:classnames_default()("flex items-center cursor-pointer","right"===labelPosition?"flex-row":"flex-row-reverse",{"opacity-50 cursor-not-allowed":disabled})},react.createElement("div",{className:"relative"},react.createElement("input",{type:"checkbox",id:id,className:"sr-only",checked:checked,onChange:handleToggle,disabled:disabled}),react.createElement("div",{className:classnames_default()("block rounded-full transition-colors duration-300 ease-in-out",sizeConfig.track,colorClasses[color])}),react.createElement("div",{className:classnames_default()("absolute left-0.5 top-0.5 bg-fg-white rounded-full shadow transition-transform duration-300 ease-in-out",sizeConfig.thumb,_define_property({},sizeConfig.translate,checked))})),label&&react.createElement("div",{className:classnames_default()("text-text-secondary font-medium","right"===labelPosition?"ml-3":"mr-3")},label))};try{Toggle.displayName="Toggle",Toggle.__docgenInfo={description:"",displayName:"Toggle",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(checked: boolean) => void"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"iOS-style switch variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"ios"'}]}},size:{defaultValue:{value:"md"},description:"Size of the switch",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},labelPosition:{defaultValue:{value:"right"},description:"Show label on the right",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},color:{defaultValue:{value:"primary"},description:"Color variant",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"primary"'},{value:'"error"'},{value:'"warning"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toggle/Toggle.tsx#Toggle"]={docgenInfo:Toggle.__docgenInfo,name:"Toggle",path:"src/components/Toggle/Toggle.tsx#Toggle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Toolbar/Toolbar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>Toolbar});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Separator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Separator/index.ts"),Toolbar=function(param){var children=param.children,_param_orientation=param.orientation,orientation=void 0===_param_orientation?"horizontal":_param_orientation,_param_className=param.className,_param_testId=param.testId;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex items-center gap-1 p-2 bg-bg-primary border border-border-secondary rounded-lg","vertical"===orientation&&"flex-col",void 0===_param_className?"":_param_className),role:"toolbar","data-testid":void 0===_param_testId?"toolbar":_param_testId},react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,function(child,index){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:index},child,index<react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)-1&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Separator__WEBPACK_IMPORTED_MODULE_2__.w,{orientation:"vertical"===orientation?"horizontal":"vertical"}))}))};try{Toolbar.displayName="Toolbar",Toolbar.__docgenInfo={description:`Toolbar - Bottom action toolbar
Perfect for editor toolbars and action bars`,displayName:"Toolbar",props:{children:{defaultValue:null,description:"Toolbar items/buttons",name:"children",required:!0,type:{name:"ReactNode"}},orientation:{defaultValue:{value:"horizontal"},description:"Orientation",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"toolbar"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toolbar/Toolbar.tsx#Toolbar"]={docgenInfo:Toolbar.__docgenInfo,name:"Toolbar",path:"src/components/Toolbar/Toolbar.tsx#Toolbar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TopBar/TopBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>TopBar});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Icons/Icons.tsx"),_ButtonV2__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ButtonV2/index.ts"),TopBar=function(param){var showBackButton=param.showBackButton,showBreadcrumb=param.showBreadcrumb,showCreditCounter=param.showCreditCounter,showSearchIcon=param.showSearchIcon,actionsOnRight=param.actionsOnRight,actionsOnLeft=param.actionsOnLeft,onBackButtonClick=param.onBackButtonClick,breadcrumbs=param.breadcrumbs,creditCounter=param.creditCounter,title=param.title,showTitle=param.showTitle,showSideMenu=param.showSideMenu,onSideMenuClick=param.onSideMenuClick,onSearchIconClick=param.onSearchIconClick,showProductTour=param.showProductTour,onProductTourClick=param.onProductTourClick,showNotificationIcon=param.showNotificationIcon,onNotificationIconClick=param.onNotificationIconClick;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex h-16 w-full bg-bg-primary_alt p-[var(--spacing-lg,12px)_var(--container-padding-desktop,32px)] items-center self-stretch"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-row gap-4 justify-start items-center w-full"},showSideMenu&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"cursor-pointer",onClick:function(){null==onSideMenuClick||onSideMenuClick()}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__.F,{name:"sidebar-left"})),showBackButton&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ButtonV2__WEBPACK_IMPORTED_MODULE_2__.J,{hierarchy:"tertiary",onClick:onBackButtonClick,iconLeadingSrc:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__.F,{name:"chevron-left",size:"sm"}),size:"sm"},"Back"),actionsOnLeft,showBreadcrumb&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-row"},null==breadcrumbs?void 0:breadcrumbs.map(function(breadcrumb,index){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:index,className:"flex flex-row items-center"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-button-tertiaryFg flex flex-row items-center text-sm  rounded-full px-2 py-1 ".concat(index<breadcrumbs.length-1?"font-medium":"font-semibold",`
                `).concat(breadcrumb.onClick?"cursor-pointer hover:bg-button-tertiaryBgHover":"",`
                `),onClick:breadcrumb.onClick?null==breadcrumb?void 0:breadcrumb.onClick:void 0},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"line-clamp-1"},breadcrumb.label)),index<breadcrumbs.length-1&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__.F,{name:"chevron-right",size:"xs",color:"text-button-tertiaryFg"}))})),showTitle&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex-1 text-lg font-semibold text-text-primary"},title)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-row gap-3 justify-end items-center w-full"},showProductTour&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ButtonV2__WEBPACK_IMPORTED_MODULE_2__.J,{size:"sm",hierarchy:"tertiary",onClick:function(){null==onProductTourClick||onProductTourClick()},iconLeadingSrc:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__.F,{name:"video-recorder",size:"sm",color:"text-button-tertiaryColorFg"}),textColor:"text-button-tertiaryColorFg"},"Take a tour"),showCreditCounter&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex gap-1 items-center text-sm text-text-secondary font-medium"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__.F,{name:"star-01",size:"sm"}),null==creditCounter?void 0:creditCounter.remainingCredits," of ",null==creditCounter?void 0:creditCounter.totalCredits," ",(null==creditCounter?void 0:creditCounter.suffix)||"daily AI credits left"),showSearchIcon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ButtonV2__WEBPACK_IMPORTED_MODULE_2__.J,{size:"sm",hierarchy:"tertiary",iconLeadingSrc:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__.F,{name:"search-sm",size:"sm"}),iconOnly:!0,onClick:onSearchIconClick}),showNotificationIcon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ButtonV2__WEBPACK_IMPORTED_MODULE_2__.J,{size:"sm",hierarchy:"tertiary",iconLeadingSrc:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__.F,{name:"bell-02",size:"sm"}),iconOnly:!0,onClick:onNotificationIconClick}),actionsOnRight))};try{TopBar.displayName="TopBar",TopBar.__docgenInfo={description:"",displayName:"TopBar",props:{showBackButton:{defaultValue:null,description:"",name:"showBackButton",required:!1,type:{name:"boolean"}},showBreadcrumb:{defaultValue:null,description:"",name:"showBreadcrumb",required:!1,type:{name:"boolean"}},showCreditCounter:{defaultValue:null,description:"",name:"showCreditCounter",required:!1,type:{name:"boolean"}},showTitle:{defaultValue:null,description:"",name:"showTitle",required:!1,type:{name:"boolean"}},actionsOnRight:{defaultValue:null,description:"",name:"actionsOnRight",required:!1,type:{name:"ReactNode"}},actionsOnLeft:{defaultValue:null,description:"",name:"actionsOnLeft",required:!1,type:{name:"ReactNode"}},onBackButtonClick:{defaultValue:null,description:"",name:"onBackButtonClick",required:!1,type:{name:"(() => void)"}},breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!1,type:{name:"ITopBarBreadcrumb[]"}},creditCounter:{defaultValue:null,description:"",name:"creditCounter",required:!1,type:{name:"ITopBarCreditCounter"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},showSideMenu:{defaultValue:null,description:"",name:"showSideMenu",required:!1,type:{name:"boolean"}},onSideMenuClick:{defaultValue:null,description:"",name:"onSideMenuClick",required:!1,type:{name:"(() => void)"}},showSearchIcon:{defaultValue:null,description:"",name:"showSearchIcon",required:!1,type:{name:"boolean"}},onSearchIconClick:{defaultValue:null,description:"",name:"onSearchIconClick",required:!1,type:{name:"(() => void)"}},showProductTour:{defaultValue:null,description:"",name:"showProductTour",required:!1,type:{name:"boolean"}},onProductTourClick:{defaultValue:null,description:"",name:"onProductTourClick",required:!1,type:{name:"(() => void)"}},showNotificationIcon:{defaultValue:null,description:"",name:"showNotificationIcon",required:!1,type:{name:"boolean"}},onNotificationIconClick:{defaultValue:null,description:"",name:"onNotificationIconClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TopBar/TopBar.tsx#TopBar"]={docgenInfo:TopBar.__docgenInfo,name:"TopBar",path:"src/components/TopBar/TopBar.tsx#TopBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{QF:()=>AreaChart.Q,Dt:()=>AuthLayout_AuthLayout,eu:()=>Avatar.A,lo:()=>AvatarLabelGroup_AvatarLabelGroup,Ex:()=>Badge.A,SC:()=>BasicButton.S,JK:()=>BasicButton.A,lv:()=>BottomNav,YZ:()=>BreadCrumb_BreadCrumb,$n:()=>Button.$,e2:()=>ButtonGroup_ButtonGroup,Hw:()=>Comments_Comments,mc:()=>Container_Container,qv:()=>DashboardCard.A,lr:()=>DatePicker_DatePicker,V6:()=>DonutChart,BS:()=>DragAndDrop_DragAndDrop,sx:()=>Draggable_Draggable,_s:()=>Drawer,CJ:()=>Dropdown.A,ef:()=>FileUpload_FileUpload,sh:()=>FilesInfoList_FilesInfoList,gE:()=>FormGroup.A,DZ:()=>Heading_Heading,Dy:()=>HomeCardGroup.A,qm:()=>InfoContainer_InfoContainer,pd:()=>Input.A,aH:()=>Loader.A,nc:()=>MenuDrawer,bi:()=>MenuPopover.bi,aF:()=>Modal.A,Bs:()=>ModalContainer_ModalContainer,$0:()=>Notifications_Notifications,oR:()=>OverviewCard.A,rW:()=>PieChart.A,mL:()=>PlanList_PlanList,D$:()=>MenuPopover.D$,zD:()=>Popup,Os:()=>SearchAndFilter_SearchFilter,l6:()=>Select_Select,$m:()=>SideDrawer_SideDrawer,f8:()=>SideNav_SideNav,Ju:()=>Stackchart.J,XI:()=>Table.X,fs:()=>TextArea.A,yd:()=>ToastAlert.y,HY:()=>ToastNotification,wV:()=>ToolTip.w,o5:()=>Typography});var ToastAlert=__webpack_require__("./src/components/ToastAlert/index.ts"),Button=__webpack_require__("./src/components/Button/index.ts"),Stackchart=__webpack_require__("./src/components/Stackchart/index.ts"),react=__webpack_require__("../node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var Link=function(param){var children=param.children,to=param.to,disabled=param.disabled,newTab=param.newTab,reactRouterLinkProps=param.reactRouterLinkProps,RouterLink=param.reactRouterLink,onClick=param.onClick,className=param.className,routerLinkClassname=param.routerLinkClassname;return react.createElement(react.Fragment,null,RouterLink?react.createElement(RouterLink,_object_spread_props(_object_spread({to:to||""},reactRouterLinkProps),{className:routerLinkClassname,onClick:onClick}),react.createElement("span",{className:className||"text-subtlest text-sm font-medium underline"},children)):react.createElement("a",{target:newTab?"_blank":"","aria-disabled":disabled,className:className||"text-sm font-medium underline",href:to||void 0,onClick:onClick},react.createElement("span",{className:"text-subtlest w-full"}," ",children)))};try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{to:{defaultValue:null,description:"",name:"to",required:!1,type:{name:"string"}},newTab:{defaultValue:null,description:"",name:"newTab",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},reactRouterLink:{defaultValue:null,description:"",name:"reactRouterLink",required:!1,type:{name:"ComponentType<LinkProps>"}},reactRouterLinkProps:{defaultValue:null,description:"",name:"reactRouterLinkProps",required:!1,type:{name:"LinkProps"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},routerLinkClassname:{defaultValue:null,description:"",name:"routerLinkClassname",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Link/Link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/components/Link/Link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}var BottomNav=function(props){var isLoading=props.isLoading,navItems=props.navItems,tmp=props.activePath,pathname=void 0===tmp?"/":tmp,reactRouterLink=props.reactRouterLink;return react.createElement("nav",{className:"border-t-nuetralLightN20 flex inset-x-0 bottom:0 h-16 gap-x-1 border-t-2 px-2 justify-around"},isLoading?react.createElement("div",{className:"w-full flex items-start justify-center h-full"},react.createElement(Loader.A,{size:"sm"})):navItems.map(function(navItem){return navItem.href?react.createElement(Link,{reactRouterLink:reactRouterLink,to:navItem.href,key:navItem.label,reactRouterLinkProps:navItem.reactRouterLinkProps,className:"flex flex-col items-center justify-center rounded hover:bg-primary-100 ".concat(pathname===navItem.href?"bg-primary-100":""),routerLinkClassname:"flex justify-center"},react.createElement("img",{src:pathname===navItem.href?navItem.iconSelected:navItem.icon,alt:navItem.label,className:"h-7 w-7 "}),react.createElement("span",{className:"text-xs font-bold pt-0 pr-1 pb-0 pl-1"},navItem.label)):react.createElement("a",{className:"flex flex-col items-center justify-center rounded hover:bg-primary-100 ".concat(pathname===navItem.href?"bg-primary-100":""),onClick:navItem.onClick,key:navItem.label},react.createElement("img",{src:pathname===navItem.href?navItem.iconSelected:navItem.icon,alt:navItem.label,className:"h-7 w-7"}),react.createElement("span",{className:"text-xs font-bold"},navItem.label))}))};try{BottomNav.displayName="BottomNav",BottomNav.__docgenInfo={description:"",displayName:"BottomNav",props:{navItems:{defaultValue:null,description:"",name:"navItems",required:!0,type:{name:"IBottomNavItem[]"}},activePath:{defaultValue:null,description:"",name:"activePath",required:!1,type:{name:"string"}},reactRouterLink:{defaultValue:null,description:"",name:"reactRouterLink",required:!1,type:{name:"ComponentType<LinkProps>"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BottomNav/BottomNav.tsx#BottomNav"]={docgenInfo:BottomNav.__docgenInfo,name:"BottomNav",path:"src/components/BottomNav/BottomNav.tsx#BottomNav"})}catch(__react_docgen_typescript_loader_error){}var use_animation=__webpack_require__("../node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs"),proxy=__webpack_require__("../node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs"),Icons=__webpack_require__("./src/components/Icons/Icons.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var SideNav=function(param){var _headerRef_current,navItems=param.navItems,tmp=param.activePath,pathname=void 0===tmp?"/":tmp,footer=param.footer,collapsedfooter=param.collapsedfooter,header=param.header,collapsedheader=param.collapsedheader,reactRouterLink=param.reactRouterLink,_param_rounded=param.rounded,getIsExpanded=param.getIsExpanded,customHeight=param.customHeight,_useState=_sliced_to_array((0,react.useState)(function(){return"true"===localStorage.getItem("isSideNavExpanded")}),2),expanded=_useState[0],setExpanded=_useState[1],containerControls=(0,use_animation.E)(),svgControls=(0,use_animation.E)();(0,react.useEffect)(function(){expanded?(containerControls.start("open"),svgControls.start("open")):(containerControls.start("close"),svgControls.start("close"))},[expanded]);var headerRef=(0,react.useRef)(null);return react.createElement(proxy.P.nav,{className:"grid h-full ".concat(void 0!==_param_rounded&&_param_rounded?"rounded-xl_4":"","  bg-bg-primary_alt flex-col overflow-hidden"),initial:"close",variants:{close:{width:"80px",transition:{type:"spring",damping:15,duration:.5}},open:{width:"312px",transition:{type:"spring",damping:15,duration:.5}}},animate:containerControls},react.createElement("div",{className:"flex flex-col gap-3 ".concat("items-center"," pt-5 w-full")},react.createElement("div",{className:"flex ".concat(expanded?"w-full justify-start pl-7":"justify-center"," items-center cursor-pointer"),onClick:function(){var isExpanded=!expanded;getIsExpanded(isExpanded),localStorage.setItem("isSideNavExpanded",JSON.stringify(isExpanded)),setExpanded(isExpanded)}},react.createElement(Icons.F,{name:"sidebar-left"})),header&&react.createElement("div",{className:"px-4 flex items-end w-full",ref:headerRef},expanded&&header,!expanded&&collapsedheader),react.createElement("div",{className:"overflow-auto flex justify-center items-center"},react.createElement("ul",{className:"flex flex-col ".concat(expanded?"gap-1  w-[275px]":"gap-1 items-center justify-center w-full"),style:{minHeight:"60px",height:customHeight?"calc(100vh - ".concat((null==(_headerRef_current=headerRef.current)?void 0:_headerRef_current.offsetHeight)||0,"px - ").concat(customHeight,"px)"):void 0}},navItems.map(function(nav){return react.createElement(Link,{key:nav.label,reactRouterLink:reactRouterLink,to:nav.href,onClick:nav.onNavClick,reactRouterLinkProps:nav.reactRouterLinkProps,className:"rounded-full flex items-center hover:bg-bg-active ".concat(pathname===nav.href&&!nav.onNavClick?"bg-bg-active":""," ").concat(expanded?"w-full px-2 py-2":"justify-center w-auto p-2")},react.createElement("li",{className:"flex items-center ".concat(expanded?"justify-between w-full":"justify-center w-auto")},react.createElement("div",{className:"flex items-center  ".concat(expanded?"gap-3":"justify-center")},react.createElement("img",{src:nav.icon,alt:"".concat(nav.label," icon")}),expanded&&react.createElement("p",{className:"text-base text-text-secondary font-semibold"},nav.label)),expanded&&nav.badge))})))),footer&&react.createElement("div",{className:"pb-8 flex items-end w-full"},expanded&&footer,!expanded&&collapsedfooter))};let SideNav_SideNav=SideNav;try{SideNav.displayName="SideNav",SideNav.__docgenInfo={description:"",displayName:"SideNav",props:{navItems:{defaultValue:null,description:"",name:"navItems",required:!0,type:{name:"TSideNavItem[]"}},activePath:{defaultValue:{value:"/"},description:"",name:"activePath",required:!1,type:{name:"string"}},companyName:{defaultValue:null,description:"",name:"companyName",required:!0,type:{name:"string"}},companyAvatarUrl:{defaultValue:null,description:"",name:"companyAvatarUrl",required:!0,type:{name:"string"}},supportText:{defaultValue:null,description:"",name:"supportText",required:!0,type:{name:"string"}},menuItems:{defaultValue:null,description:"",name:"menuItems",required:!0,type:{name:"ReactNode[]"}},reactRouterLink:{defaultValue:null,description:"",name:"reactRouterLink",required:!1,type:{name:"ComponentType<LinkProps>"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}},collapsedfooter:{defaultValue:null,description:"",name:"collapsedfooter",required:!1,type:{name:"ReactNode"}},rounded:{defaultValue:{value:"false"},description:"",name:"rounded",required:!1,type:{name:"boolean"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},collapsedheader:{defaultValue:null,description:"",name:"collapsedheader",required:!1,type:{name:"ReactNode"}},getIsExpanded:{defaultValue:null,description:"",name:"getIsExpanded",required:!0,type:{name:"(isExpanded: boolean) => void"}},customHeight:{defaultValue:null,description:"",name:"customHeight",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SideNav/SideNav.tsx#SideNav"]={docgenInfo:SideNav.__docgenInfo,name:"SideNav",path:"src/components/SideNav/SideNav.tsx#SideNav"})}catch(__react_docgen_typescript_loader_error){}let alertcircle_namespaceObject=__webpack_require__.p+"static/media/alertcircle.6276c3ef.svg",Avatar_namespaceObject=__webpack_require__.p+"static/media/Avatar.ed4ed002.svg",Packaged_namespaceObject=__webpack_require__.p+"static/media/Packaged.6414a25e.svg",upload_namespaceObject=__webpack_require__.p+"static/media/upload.c058f568.svg";var alert_close=__webpack_require__("./src/assets/icons/alert/close.svg");let success_namespaceObject=__webpack_require__.p+"static/media/success.9d1e5b29.svg",release_namespaceObject=__webpack_require__.p+"static/media/release.7bcfd294.svg";var classnames=__webpack_require__("../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),ToastNotification=function(props){var message=props.message,description=props.description,variant=props.variant,showDismiss=props.showDismiss,actionLabel=props.actionLabel,onActionClick=props.onActionClick,onClose=props.onClose,id=props.id,isDesktop=props.isDesktop,isMobile=props.isMobile;return react.createElement(react.Fragment,null,isDesktop&&react.createElement("div",{className:"flex gap-xl rounded-xl border-2 border-solid border-gray-300 p-4 shadow-xs bg-base-white w-[400px] h-[128px]"},react.createElement("div",{className:"flex ".concat("alertcircle"===variant?"h-10 w-10 rounded-md border-1 border-solid border-gray-200 p-md shadow-xs ":""," items-start justify-start ")},"alertcircle"===variant?react.createElement("img",{src:alertcircle_namespaceObject,alt:"Alert Icon"}):"Avatar"===variant?react.createElement("img",{src:Avatar_namespaceObject,alt:"Avatar Icon"}):"packaged"===variant?react.createElement("img",{src:Packaged_namespaceObject,alt:"Packaged Icon"}):"uploadcloud"===variant?react.createElement("img",{src:upload_namespaceObject,alt:"Upload Cloud Icon"}):"success"===variant?react.createElement("img",{src:success_namespaceObject,alt:"Success Icon"}):"release"===variant?react.createElement("img",{src:release_namespaceObject,alt:"Release Icon"}):"undo"===variant?react.createElement("img",{src:alertcircle_namespaceObject,alt:"Release Icon"}):null),react.createElement("div",{className:classnames_default()("flex w-full flex-col items-start justify-center",{"gap-lg":description})},react.createElement("div",{className:"w-full"},react.createElement("div",{className:"flex items-start justify-between"},react.createElement("p",{className:"text-sm font-semibold text-secondary-700"},message),react.createElement("img",{className:"cursor-pointer",onClick:function(){return onClose(id)},src:alert_close,alt:"Close Icon"})),description&&react.createElement("p",{className:"font-normal mt-1 text-sm text-gray-600"},description)),react.createElement("div",{className:"flex items-center justify-center gap-3 cursor-pointer"},"string"==typeof showDismiss?react.createElement("span",{onClick:function(){return onClose(id)},className:"text-sm font-semibold text-gray-600"},showDismiss):showDismiss?react.createElement("span",{onClick:function(){return onClose(id)},className:"text-sm font-semibold text-gray-600"},"Dismiss"):null,actionLabel&&react.createElement("span",{onClick:onActionClick,className:"text-sm font-semibold text-blue-700"},actionLabel)))),isMobile&&react.createElement("div",{className:"flex flex-col gap-xl rounded-xl border-2 border-solid border-gray-300 p-4 shadow-xs bg-base-white w-[400px] h-[184px]"},react.createElement("div",{className:"flex justify-between"},react.createElement("div",{className:"flex justify-start items-start ".concat("alertcircle"===variant?"h-10 w-10 rounded-md border-1 border-solid border-gray-200 p-md shadow-xs":"")},"alertcircle"===variant?react.createElement("img",{src:alertcircle_namespaceObject,alt:"Alert Icon"}):"Avatar"===variant?react.createElement("img",{src:Avatar_namespaceObject,alt:"Avatar Icon"}):"packaged"===variant?react.createElement("img",{src:Packaged_namespaceObject,alt:"Packaged Icon"}):"uploadcloud"===variant?react.createElement("img",{src:upload_namespaceObject,alt:"Upload Cloud Icon"}):"success"===variant?react.createElement("img",{src:success_namespaceObject,alt:"Success Icon"}):"release"===variant?react.createElement("img",{src:release_namespaceObject,alt:"Release Icon"}):"undo"===variant?react.createElement("img",{src:alertcircle_namespaceObject,alt:"Undo Icon"}):null),react.createElement("img",{className:"cursor-pointer",onClick:function(){return onClose(id)},src:alert_close,alt:"Close Icon"})),react.createElement("div",{className:classnames_default()("flex w-full flex-col items-start justify-center",{"gap-lg":description})},react.createElement("div",{className:"w-full"},react.createElement("div",{className:"flex items-start justify-between"},react.createElement("p",{className:"text-sm font-semibold text-secondary-700"},message)),description&&react.createElement("p",{className:"font-normal mt-1 text-sm text-gray-600"},description)),react.createElement("div",{className:"flex items-center justify-center gap-3 cursor-pointer"},"string"==typeof showDismiss?react.createElement("span",{onClick:function(){return onClose(id)},className:"text-sm font-semibold text-gray-600"},showDismiss):showDismiss?react.createElement("span",{onClick:function(){return onClose(id)},className:"text-sm font-semibold text-gray-600"},"Dismiss"):null,actionLabel&&react.createElement("span",{onClick:onActionClick,className:"text-sm font-semibold text-blue-700"},actionLabel)))))};try{ToastNotification.displayName="ToastNotification",ToastNotification.__docgenInfo={description:"",displayName:"ToastNotification",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"alertcircle"'},{value:'"Avatar"'},{value:'"packaged"'},{value:'"uploadcloud"'},{value:'"undo"'},{value:'"release"'},{value:'"UpdateProfile"'},{value:'"success"'}]}},showDismiss:{defaultValue:null,description:"",name:"showDismiss",required:!1,type:{name:"string | boolean"}},undoActionClick:{defaultValue:null,description:"",name:"undoActionClick",required:!0,type:{name:"() => void"}},actionLabel:{defaultValue:null,description:"",name:"actionLabel",required:!1,type:{name:"string"}},undoLabel:{defaultValue:null,description:"",name:"undoLabel",required:!1,type:{name:"string"}},onActionClick:{defaultValue:null,description:"",name:"onActionClick",required:!0,type:{name:"() => void"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(id: number) => void"}},isDesktop:{defaultValue:null,description:"",name:"isDesktop",required:!1,type:{name:"boolean"}},isMobile:{defaultValue:null,description:"",name:"isMobile",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ToastNotification/ToastNotification.tsx#ToastNotification"]={docgenInfo:ToastNotification.__docgenInfo,name:"ToastNotification",path:"src/components/ToastNotification/ToastNotification.tsx#ToastNotification"})}catch(__react_docgen_typescript_loader_error){}var MenuPopover=__webpack_require__("./src/components/MenuPopover/index.ts"),PieChart=__webpack_require__("./src/components/PieChart/index.ts");__webpack_require__("./src/components/InfoChart/index.ts");var DashboardCard=__webpack_require__("./src/components/Card/DashboardCards/DashboardCard.tsx"),OverviewCard=__webpack_require__("./src/components/Card/OverviewCard/OverviewCard.tsx");__webpack_require__.p;var Header_Header=function(props){props.avatarUrl;var permitechLogoOnClick=props.permitechLogoOnClick,menuItems=props.menuItems,rightSideIcon=props.rightSideIcon;return React.createElement("div",{className:"w-full fixed z-[99]"},React.createElement("header",{className:"flex h-14 items-center justify-between bg-white py-4 px-4 dark:bg-slate-800 "},React.createElement("div",{className:"navbar flex items-center justify-start"},React.createElement("img",{onClick:permitechLogoOnClick,alt:"Permitech logo",style:{cursor:"pointer",zIndex:0,marginLeft:".5em",height:"1.25em"},src:permitechHeaderLogo}),React.createElement("div",{className:"flex flex-start gap-4"},menuItems)),React.createElement("div",{className:"flex gap-4"},rightSideIcon)),React.createElement("div",{className:"h-1 bg-headerBottom"}))};try{Header_Header.displayName="Header",Header_Header.__docgenInfo={description:"",displayName:"Header",props:{avatarUrl:{defaultValue:null,description:"",name:"avatarUrl",required:!0,type:{name:"string"}},permitechLogoOnClick:{defaultValue:null,description:"",name:"permitechLogoOnClick",required:!0,type:{name:"() => void"}},menuItems:{defaultValue:null,description:"",name:"menuItems",required:!0,type:{name:"ReactNode[]"}},rightSideIcon:{defaultValue:null,description:"",name:"rightSideIcon",required:!0,type:{name:"ReactNode[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Header/Header.tsx#Header"]={docgenInfo:Header_Header.__docgenInfo,name:"Header",path:"src/components/Header/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}var ButtonGroup=function(props){var children=props.children,_props_variant=props.variant,variant=void 0===_props_variant?"gap":_props_variant,btnGroupClass=classnames_default()({"bg-bg-tertiary flex items-center justify-center gap-md rounded-lg p-1":"gap"===variant},{"shadow-xs flex items-center justify-start":"stick"===variant});return react.createElement("div",{className:btnGroupClass},children)};let ButtonGroup_ButtonGroup=ButtonGroup;try{ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:"",displayName:"ButtonGroup",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"gap"'},{value:'"stick"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ButtonGroup/ButtonGroup.tsx#ButtonGroup"]={docgenInfo:ButtonGroup.__docgenInfo,name:"ButtonGroup",path:"src/components/ButtonGroup/ButtonGroup.tsx#ButtonGroup"})}catch(__react_docgen_typescript_loader_error){}var BasicButton=__webpack_require__("./src/components/BasicButton/index.ts"),ToolTip=__webpack_require__("./src/components/ToolTip/index.ts"),Modal=__webpack_require__("./src/components/Modal/Modal.tsx");__webpack_require__("./src/components/Modal/AlertDialog.tsx");var ModalFooter=__webpack_require__("./src/components/Modal/ModalFooter.tsx"),ActionButton=function(props){var children=props.children,onClick=props.onClick,_props_variant=props.variant,_props_disabled=props.disabled;return react.createElement("button",{disabled:void 0!==_props_disabled&&_props_disabled,style:{cursor:"pointer"},onClick:onClick,className:"px-3 py-1.5 rounded-lg ".concat("primary"===(void 0===_props_variant?"primary":_props_variant)?"bg-blue-600 text-N-600":"text-neutral-500","  text-center text-N-0 text-base font-medium cursor-pointer")},children)};try{ActionButton.displayName="ActionButton",ActionButton.__docgenInfo={description:"",displayName:"ActionButton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"tertiary"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/common/ActionButton.tsx#ActionButton"]={docgenInfo:ActionButton.__docgenInfo,name:"ActionButton",path:"src/components/Modal/common/ActionButton.tsx#ActionButton"})}catch(__react_docgen_typescript_loader_error){}var BasicForm=__webpack_require__("./src/components/Modal/common/BasicForm.tsx");function ModalContainer_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ModalContainer_array_with_holes(arr){if(Array.isArray(arr))return arr}function ModalContainer_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function ModalContainer_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ModalContainer_sliced_to_array(arr,i){return ModalContainer_array_with_holes(arr)||ModalContainer_iterable_to_array_limit(arr,i)||ModalContainer_unsupported_iterable_to_array(arr,i)||ModalContainer_non_iterable_rest()}function ModalContainer_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return ModalContainer_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ModalContainer_array_like_to_array(o,minLen)}}var ModalContainer=function(props){var header=props.header,widthVariant=props.widthVariant,onShown=props.onShown,_useState=ModalContainer_sliced_to_array((0,react.useState)(!1),2),showModal=_useState[0],setShowModal=_useState[1],onClose=function(){setShowModal(!1)};return react.createElement(react.Fragment,null,react.createElement("div",{className:"w-full h-[450px]"},"THIS IS JUST A WRAPPER COMPONENT TO DEMO THE USAGE OF MODAL.",react.createElement("div",{className:"max-w-[200px]"},react.createElement(ActionButton,{onClick:function(){return setShowModal(!showModal)}},"Open Modal"))),showModal&&react.createElement(Modal.A,{header:header,footer:react.createElement(ModalFooter.A,{closeActionLabel:"Close",onCancel:onClose,onShown:onShown}),onClose:onClose,widthVariant:widthVariant},react.createElement(BasicForm.A,null)))};let ModalContainer_ModalContainer=ModalContainer;try{ModalContainer.displayName="ModalContainer",ModalContainer.__docgenInfo={description:"",displayName:"ModalContainer",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!0,type:{name:"ReactNode"}},widthVariant:{defaultValue:null,description:"",name:"widthVariant",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"full"'},{value:'"default"'},{value:'"large"'}]}},onShown:{defaultValue:null,description:"",name:"onShown",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/ModalContainer/ModalContainer.tsx#ModalContainer"]={docgenInfo:ModalContainer.__docgenInfo,name:"ModalContainer",path:"src/components/Modal/ModalContainer/ModalContainer.tsx#ModalContainer"})}catch(__react_docgen_typescript_loader_error){}var TextArea=__webpack_require__("./src/components/FormInput/TextArea/TextArea.tsx"),Input=__webpack_require__("./src/components/FormInput/Input/index.ts"),Table=__webpack_require__("./src/components/Table/Table.tsx"),Heading=function(param){var breadCrumb=param.breadCrumb,heading=param.heading,subHeading=param.subHeading,action=param.action,style=param.style,_param_type=param.type,type=void 0===_param_type?"default":_param_type,FontSize={small:{heading:"text-lg",subHeading:"text-sm"},default:{heading:"text-3xl",subHeading:"text-base"},large:{heading:"text-5xl",subHeading:"text-xl"}};return react.createElement("div",null,breadCrumb&&react.createElement("div",{className:"w-full pb-6 text-text-primary"},breadCrumb),react.createElement("div",null,react.createElement("div",{className:"flex flex-row justify-between items-center",style:style},react.createElement("div",{className:"font-semibold text-text-primary ".concat(FontSize[type].heading)},heading),react.createElement("div",null,action)),react.createElement("div",{className:"font-normal text-text-tertiary ".concat(FontSize[type].subHeading)},subHeading)))};let Heading_Heading=Heading;try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Heading/Heading.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/components/Heading/Heading.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}var Dropdown=__webpack_require__("./src/components/Dropdown/Dropdown.tsx"),ChevronUpDownIcon=__webpack_require__("../node_modules/@heroicons/react/20/solid/esm/ChevronUpDownIcon.js"),CheckIcon=__webpack_require__("../node_modules/@heroicons/react/20/solid/esm/CheckIcon.js"),combobox=__webpack_require__("../node_modules/@headlessui/react/dist/components/combobox/combobox.js"),RadioButton1=__webpack_require__("./src/components/RadioButton/index.tsx"),Checkbox=__webpack_require__("./src/components/Checkbox/index.ts");function Select_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Select_array_with_holes(arr){if(Array.isArray(arr))return arr}function Select_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Select_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function Select_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Select_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Select_define_property(target,key,source[key])})}return target}function Select_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Select_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Select_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function Select_sliced_to_array(arr,i){return Select_array_with_holes(arr)||Select_iterable_to_array_limit(arr,i)||Select_unsupported_iterable_to_array(arr,i)||Select_non_iterable_rest()}function Select_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return Select_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Select_array_like_to_array(o,minLen)}}function classNames1(){for(var _len=arguments.length,classes=Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.filter(Boolean).join(" ")}var renderData=function(item){if(item.render)return item.render(item.id);if(item.menuRender){var menuItem;return menuItem=item.menuRender,react.createElement("div",{className:"flex items-center p-2 justify-between ".concat(menuItem.onClick?"cursor-pointer":""),onClick:function(){return menuItem.onClick&&menuItem.onClick(menuItem)}},react.createElement("div",{className:"flex items-center justify-left"},menuItem.img&&react.createElement("img",{src:menuItem.img,alt:"default-avatar",className:"w- h-6",width:menuItem.imgSize?menuItem.imgSize:"24",height:menuItem.imgSize?menuItem.imgSize:"24"}),menuItem.heading&&react.createElement("p",{className:"text-text-primary text-sm font-medium"},menuItem.heading),menuItem.title&&react.createElement("div",{className:"ml-2 flex flex-row space-x-2 items-center"},react.createElement("p",{className:"text-sm font-semibold text-text-primary"},menuItem.title," "),menuItem.subHeading&&react.createElement("p",{className:"text-xs font-medium text-text-primary"},menuItem.subHeading))),menuItem.badge&&("string"==typeof menuItem.badge?react.createElement("img",{src:menuItem.badge,alt:"star-avatar",className:"h-6",width:"24",height:"24"}):menuItem.badge))}return item.name},Select=function(param){var options=param.options,onClick=param.onClick,defaultSelected=param.defaultSelected,label=param.label,required=param.required,defautFocus=param.defautFocus,placeholder=param.placeholder,_param_labelBold=param.labelBold,_param_type=param.type,type=void 0===_param_type?"check":_param_type,_param_variant=param.variant,_param_disableSearch=param.disableSearch,disableSearch=void 0!==_param_disableSearch&&_param_disableSearch,_param_placement=param.placement,_param_size=param.size,commentRef=react.useRef(null),_useState=Select_sliced_to_array((0,react.useState)(""),2),query=_useState[0],setQuery=_useState[1],_useState1=Select_sliced_to_array((0,react.useState)(null!=defautFocus&&defautFocus),2),isFocused=_useState1[0],setIsFocused=_useState1[1],_useState2=Select_sliced_to_array((0,react.useState)(defaultSelected?options.find(function(d){return d.id===defaultSelected.id}):void 0),2),selectedItem=_useState2[0],setSelectedItem=_useState2[1],_useState3=Select_sliced_to_array((0,react.useState)(defaultSelected&&options.find(function(d){return d.id===defaultSelected.id})?[options.find(function(d){return d.id===defaultSelected.id})]:[]),2),multiSelectedItem=_useState3[0],setMultiSelectedItem=_useState3[1],parentRef=react.useRef(null),_useState4=Select_sliced_to_array((0,react.useState)(0),2),overflowCount=_useState4[0],setOverflowCount=_useState4[1];(0,react.useEffect)(function(){var parent=parentRef.current;if(parent){var children=Array.from(parent.children),parentRect=parent.getBoundingClientRect();setOverflowCount(children.filter(function(child){return child.getBoundingClientRect().right>parentRect.right}).length)}},[multiSelectedItem]);var onInputChange=function(e){e.preventDefault(),setQuery(e.target.value)};react.useEffect(function(){var _commentRef_current;isFocused&&(null==commentRef||null==(_commentRef_current=commentRef.current)||_commentRef_current.focus())},[query]);var borderVariant={outlined:query.length||isFocused?"border ring-2 border-border-brand":"border border-border-primary",ghost:query.length||isFocused?"border-4 border-border-brand":""},selectPillClassname="flex items-center flex-row w-full bg-bg-primary py-1.5 pl-3 pr-10 text-text-primary focus:ring-brand-300 text-base sm:leading-6 rounded-full ".concat(borderVariant[void 0===_param_variant?"outlined":_param_variant]),optionsClass="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-3xl bg-bg-primary py-1 text-base sm:text-sm border-border-primary border-1 p-4 ".concat({"top-left":"bottom-12 right-0","top-right":"bottom-12 left-0","bottom-left":"right-0","bottom-right":"left-0"}[void 0===_param_placement?"bottom-right":_param_placement]),MyCustomButton=(0,react.forwardRef)(function(props,ref){return react.createElement("div",{onBlur:function(){return setTimeout(function(){setQuery(""),setIsFocused(!1)},300)},onFocus:function(){setIsFocused(!0),setTimeout(function(){var _commentRef_current;null==commentRef||null==(_commentRef_current=commentRef.current)||_commentRef_current.focus()})},tabIndex:0,className:selectPillClassname},"checkbox"===type&&multiSelectedItem.length?react.createElement("div",{className:"overflow-hidden flex flex-row",ref:parentRef},multiSelectedItem.map(function(item,index){return react.createElement("div",{style:multiSelectedItem.length-overflowCount<index+1?{visibility:"hidden"}:{},className:"w-max flex justify-center items-center m-1 font-medium py-1 px-2 bg-bg-primary: rounded-full text-text-primary bg-bg-primary_hover border border-border-primary"},react.createElement("div",{className:"text-xs font-normal leading-none w-max flex-initial"},renderData(item)),react.createElement("div",{className:"flex flex-auto flex-row-reverse",onClick:function(){return setMultiSelectedItem(multiSelectedItem.filter(function(i){return i.id!==item.id}))}},react.createElement("div",null,react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-x cursor-pointer hover:text-text-tertiary_hover rounded-full w-4 h-4 ml-2"},react.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),react.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})))))})):react.createElement(react.Fragment,null,react.createElement("input",Select_object_spread_props(Select_object_spread({className:"border-transparent focus:border-transparent focus:ring-0 w-full p-0 bg-bg-primary text-text-primary",ref:commentRef},props),{id:"select-input",value:query,disabled:disableSearch,onChange:onInputChange})),!query.length&&(selectedItem?react.createElement("label",{htmlFor:"select-input",className:"absolute pl-2 text-text-primary"},renderData(selectedItem)):react.createElement("label",{htmlFor:"select-input",className:"absolute pl-2 text-text-placeholder"},placeholder))),overflowCount>0&&react.createElement("div",{className:"box-border align-end  border-1 py-2 px-2 ml-2"},"+",overflowCount))}),filteredData=""===query?options:options.filter(function(item){return item.name.toLowerCase().includes(query.toLowerCase())});return react.createElement("div",{className:"flex w-full flex-col items-start justify-center gap-1"},label&&react.createElement("p",{className:classNames1("text-sm block mb-2",void 0===_param_labelBold||_param_labelBold?"font-semibold text-text-primary":"block mb-2 text-text-tertiary font-medium")},label," ",required&&react.createElement("span",{className:"text-red-500"},"*")),react.createElement(combobox.G,{style:{width:{full:"100%",big:"80%",medium:"50%",small:"20%"}[void 0===_param_size?"full":_param_size]},as:"div",value:"checkbox"===type?multiSelectedItem:selectedItem,multiple:"checkbox"===type,onChange:function(value){"checkbox"===type?setMultiSelectedItem(value):setSelectedItem(value),"checkbox"!==type&&setIsFocused(!1),setQuery(""),onClick&&onClick(value)}},function(param){var open=param.open;return react.createElement("div",{className:"relative"},react.createElement(combobox.G.Input,{as:MyCustomButton}),react.createElement(combobox.G.Button,{className:"absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"},react.createElement(ChevronUpDownIcon.A,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})),filteredData.length>0&&(open||query.length||isFocused)?react.createElement(combobox.G.Options,{static:!0,className:optionsClass},filteredData.map(function(item){return react.createElement(combobox.G.Option,{key:item.id,value:item,disabled:item.disable,className:function(param){return classNames1("relative cursor-default select-none py-2 pl-3 pr-9 rounded-full",param.active&&!item.disable?"bg-bg-active text-text-primary":"bg-bg-primary text-text-primary")}},function(param){var active=param.active,selected=param.selected;return react.createElement(react.Fragment,null,"radio"===type&&react.createElement("span",{className:classNames1("absolute inset-y-0 left-0 flex items-center pl-4",active&&!item.disable?"text-text-primary":"text-indigo-600")},react.createElement(RadioButton1.B,{isSelected:selected})),"checkbox"===type&&react.createElement("span",{className:classNames1("absolute inset-y-0 left-0 flex items-center pl-4",active&&!item.disable?"text-text-primary":"text-indigo-600")},react.createElement(Checkbox.S,{id:""+item.id,checked:selected?"basic":"unchecked"})),react.createElement("span",{className:classNames1("block truncate",selected?"font-semibold":"","radio"===type||"checkbox"===type?"pl-8":"")},renderData(item)),selected&&react.createElement("span",{className:classNames1("absolute inset-y-0 right-0 flex items-center pr-4",active&&!item.disable?"text-text-primary":"text-indigo-600")},"check"===type&&react.createElement(CheckIcon.A,{className:"h-5 w-5","aria-hidden":"true",color:"#2e90fa"})))})})):react.createElement(react.Fragment,null))}))};let Select_Select=Select;try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ISelectData[]"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"Function"}},defaultSelected:{defaultValue:null,description:"",name:"defaultSelected",required:!1,type:{name:"ISelectData"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},defautFocus:{defaultValue:null,description:"",name:"defautFocus",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},labelBold:{defaultValue:{value:"true"},description:"",name:"labelBold",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"check"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"radio"'},{value:'"check"'},{value:'"checkbox"'}]}},variant:{defaultValue:{value:"outlined"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"ghost"'}]}},disableSearch:{defaultValue:{value:"false"},description:"",name:"disableSearch",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:"bottom-right"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'}]}},size:{defaultValue:{value:"full"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"big"'},{value:'"small"'},{value:'"medium"'},{value:'"full"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}var Typography=function(param){var _param_fontWeight=param.fontWeight,_param_fontSize=param.fontSize,_param_fontStyle=param.fontStyle,_param_fontColor=param.fontColor,children=param.children,textStyles="".concat({thin:"font-thin",extralight:"font-extralight",light:"font-light",normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold",extrabold:"font-extrabold",black:"font-black"}[void 0===_param_fontWeight?"light":_param_fontWeight]," ").concat({xs:"text-xs",sm:"text-sm",base:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl","3xl":"text-3xl","4xl":"text-4xl","5xl":"text-5xl","6xl":"text-6xl","7xl":"text-7xl","8xl":"text-8xl","9xl":"text-9xl"}[void 0===_param_fontSize?"sm":_param_fontSize]," ").concat({italic:"italic",normal:"not-italic"}[void 0===_param_fontStyle?"normal":_param_fontStyle]," ").concat({primary:"text-text-primary",secondary:"text-text-secondary",tertiary:"text-text-tertiary",white:"text-text-white",disabled:"text-text-disabled",placeholder:"text-text-placeholder",warning:"text-text-warning"}[void 0===_param_fontColor?"primary":_param_fontColor]);return react.createElement("div",{className:textStyles},children)};try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{fontWeight:{defaultValue:{value:"light"},description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"medium"'},{value:'"light"'},{value:'"thin"'},{value:'"extralight"'},{value:'"normal"'},{value:'"semibold"'},{value:'"extrabold"'},{value:'"black"'}]}},fontStyle:{defaultValue:{value:"normal"},description:"",name:"fontStyle",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"italic"'}]}},fontSize:{defaultValue:{value:"sm"},description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'},{value:'"base"'},{value:'"3xl"'},{value:'"4xl"'},{value:'"5xl"'},{value:'"6xl"'},{value:'"7xl"'},{value:'"8xl"'},{value:'"9xl"'}]}},fontColor:{defaultValue:{value:"primary"},description:"",name:"fontColor",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"placeholder"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"warning"'},{value:'"white"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Typography.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"src/components/Typography/Typography.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}var FormGroup=__webpack_require__("./src/components/FormGroup/index.ts"),clsx=__webpack_require__("../node_modules/clsx/dist/clsx.mjs");function Drawer_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var openClassNames={right:"translate-x-0",left:"translate-x-0",top:"translate-y-0",bottom:"translate-y-0"},closeClassNames={right:"translate-x-full",left:"-translate-x-full",top:"-translate-y-full",bottom:"translate-y-full"},Drawer_classNames={right:"inset-y-0 right-0",left:"inset-y-0 left-0",top:"inset-x-0 top-0",bottom:"inset-x-0 bottom-0"},Drawer=function(param){var open=param.open,setOpen=param.setOpen,_param_side=param.side,side=void 0===_param_side?"right":_param_side,children=param.children,style=param.style;return react.createElement("div",{id:"dialog-".concat(side),className:"relative z-10","aria-labelledby":"slide-over",role:"dialog","aria-modal":"true",onClick:function(){return setOpen(!open)}},react.createElement("div",{className:(0,clsx.$)("fixed inset-0 bg-gray-500 bg-opacity-75 transition-all",{"opacity-100 duration-500 ease-in-out visible":open},{"opacity-0 duration-500 ease-in-out invisible":!open})}),react.createElement("div",{className:(0,clsx.$)({"fixed inset-0 overflow-hidden":open})},react.createElement("div",{className:"absolute inset-0 overflow-hidden"},react.createElement("div",{className:(0,clsx.$)("pointer-events-none fixed max-w-full",Drawer_classNames[side]),style:style},react.createElement("div",{className:(0,clsx.$)("pointer-events-auto relative w-full h-full transform transition ease-in-out duration-500",Drawer_define_property({},closeClassNames[side],!open),Drawer_define_property({},openClassNames[side],open)),onClick:function(event){event.preventDefault(),event.stopPropagation()}},react.createElement("div",{className:(0,clsx.$)("flex flex-col h-full bg-gray-50 p-5 shadow-xl rounded-lg")},children))))))};try{Drawer.displayName="Drawer",Drawer.__docgenInfo={description:"",displayName:"Drawer",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},setOpen:{defaultValue:null,description:"",name:"setOpen",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}},side:{defaultValue:{value:"right"},description:"",name:"side",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Drawer/Drawer.tsx#Drawer"]={docgenInfo:Drawer.__docgenInfo,name:"Drawer",path:"src/components/Drawer/Drawer.tsx#Drawer"})}catch(__react_docgen_typescript_loader_error){}var icons_close=__webpack_require__("./src/assets/icons/close.svg");function MenuDrawer_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MenuDrawer_array_with_holes(arr){if(Array.isArray(arr))return arr}function MenuDrawer_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function MenuDrawer_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MenuDrawer_sliced_to_array(arr,i){return MenuDrawer_array_with_holes(arr)||MenuDrawer_iterable_to_array_limit(arr,i)||MenuDrawer_unsupported_iterable_to_array(arr,i)||MenuDrawer_non_iterable_rest()}function MenuDrawer_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return MenuDrawer_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return MenuDrawer_array_like_to_array(o,minLen)}}var MenuDrawer=function(param){var datas=param.datas,childern=param.childern,style=param.style,_useState=MenuDrawer_sliced_to_array((0,react.useState)(!1),2),openBottom=_useState[0],setOpenBottom=_useState[1];return react.createElement("div",{className:"min-h-screen flex items-center justify-center flex-col"},react.createElement("div",{onClick:function(){return setOpenBottom(!openBottom)}},childern),react.createElement(Drawer,{open:openBottom,side:"bottom",style:style,setOpen:setOpenBottom,children:react.createElement("div",{className:"flex flex-col"},react.createElement("div",{className:"flex justify-end items-end",onClick:function(){return setOpenBottom(!openBottom)}},react.createElement("img",{src:icons_close})),react.createElement("div",{className:"p-10"},datas.map(function(data){return react.createElement("ul",{style:{maxHeight:"350px p-20",overflowY:"auto"}},data.map(function(menuItem){return react.createElement("li",{key:menuItem.title,className:"first:rounded-t-lg"},react.createElement("div",{className:"flex items-center mb-1 p-2 justify-between bg-white ".concat(menuItem.onClick?"cursor-pointer":""),onClick:function(){return menuItem.onClick&&menuItem.onClick(menuItem)}},react.createElement("div",{className:"flex items-center"},menuItem.img&&react.createElement("img",{src:menuItem.img,alt:"default-avatar",className:"w- h-6",width:menuItem.imgSize?menuItem.imgSize:"24",height:menuItem.imgSize?menuItem.imgSize:"24"}),menuItem.heading&&react.createElement("p",{className:"text-gray-600 text-sm font-medium"},menuItem.heading),menuItem.title&&react.createElement("div",{className:"ml-2"},react.createElement("p",{className:"text-sm font-semibold"},menuItem.title," "),menuItem.subHeading&&react.createElement("p",{className:"text-xs font-medium text-gray-600 "},menuItem.subHeading))),menuItem.badge&&("string"==typeof menuItem.badge?react.createElement("img",{src:menuItem.badge,alt:"star-avatar",className:"h-6",width:"24",height:"24"}):menuItem.badge)),menuItem.underline&&react.createElement("div",{className:"border-t-2 border-gray-200"}))}))})))}))};try{MenuDrawer.displayName="MenuDrawer",MenuDrawer.__docgenInfo={description:"",displayName:"MenuDrawer",props:{datas:{defaultValue:null,description:"",name:"datas",required:!0,type:{name:"MenuDrawerData[][]"}},childern:{defaultValue:null,description:"",name:"childern",required:!0,type:{name:"Element"}},style:{defaultValue:null,description:"",name:"style",required:!0,type:{name:"CSSProperties | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Drawer/MenuDrawer.tsx#MenuDrawer"]={docgenInfo:MenuDrawer.__docgenInfo,name:"MenuDrawer",path:"src/components/Drawer/MenuDrawer.tsx#MenuDrawer"})}catch(__react_docgen_typescript_loader_error){}var ChevronLeftIcon=__webpack_require__("../node_modules/@heroicons/react/20/solid/esm/ChevronLeftIcon.js"),ChevronRightIcon=__webpack_require__("../node_modules/@heroicons/react/20/solid/esm/ChevronRightIcon.js"),Popover=__webpack_require__("./src/components/MenuPopover/Popover.tsx");function DatePicker_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function DatePicker_array_with_holes(arr){if(Array.isArray(arr))return arr}function DatePicker_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function DatePicker_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function DatePicker_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function DatePicker_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){DatePicker_define_property(target,key,source[key])})}return target}function DatePicker_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function DatePicker_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):DatePicker_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function DatePicker_sliced_to_array(arr,i){return DatePicker_array_with_holes(arr)||DatePicker_iterable_to_array_limit(arr,i)||DatePicker_unsupported_iterable_to_array(arr,i)||DatePicker_non_iterable_rest()}function DatePicker_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return DatePicker_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return DatePicker_array_like_to_array(o,minLen)}}var months=["January","February","March","April","May","June","July","August","September","October","November","December"],getNextDays=function(){var currentDate=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,daysToAdd=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,nextDate=new Date(currentDate);return nextDate.setDate(currentDate.getDate()+daysToAdd),nextDate};function yyyymmdd(date){function twoDigit(n){return(n<10?"0":"")+n}return date.getFullYear()+"-"+twoDigit(date.getMonth()+1)+"-"+twoDigit(date.getDate())}var manipulate=function(year,month,date){for(var dateArray=[],currentDate=yyyymmdd(new Date),last=new Date(year,month+1,0),lastdate=last.getDate(),dayend=new Date(year,month,lastdate).getDay(),monthlastdate=new Date(year,month,0),count=0,i=monthlastdate.getDay();0!==i;){var nextDate=getNextDays(monthlastdate,count);if(0===(i=nextDate.getDay()))break;dateArray.splice(0,0,{date:yyyymmdd(nextDate)}),count-=1}count=1;for(var i1=1;i1<=lastdate;i1++){var nextDateString=yyyymmdd(getNextDays(monthlastdate,count)),isToday=nextDateString===currentDate;dateArray.push({date:nextDateString,isCurrentMonth:!0,isToday:isToday}),count+=1}count=1;for(var i2=dayend;0!==i2;){var nextDay=getNextDays(last,count);dateArray.push({date:yyyymmdd(nextDay)}),count+=1,i2=nextDay.getDay()}return dateArray};function clsNames(){for(var _len=arguments.length,classes=Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.filter(Boolean).join(" ")}var addZeroPrefix=function(currentMinutes){return 1==currentMinutes.toString().length&&(currentMinutes="0"+currentMinutes),currentMinutes};function DatePicker(param){var startFrom=param.startFrom,onDateSelection=param.onDateSelection,defaultSelectDate=param.defaultSelectDate,_param_onlyShow=param.onlyShow,onlyShow=void 0===_param_onlyShow?"date":_param_onlyShow,_param_placement=param.placement,placement=void 0===_param_placement?Popover.D.bottom:_param_placement,width=param.width,label=param.label,_param_labelBold=param.labelBold,labelBold=void 0===_param_labelBold||_param_labelBold,_param_required=param.required,title=param.title,_useState=DatePicker_sliced_to_array((0,react.useState)(null!=startFrom?startFrom:new Date),2),currentDate=_useState[0],setCurrentDate=_useState[1],_useState1=DatePicker_sliced_to_array((0,react.useState)([]),2),dateArray=_useState1[0],setDateArray=_useState1[1],_useState2=DatePicker_sliced_to_array((0,react.useState)(null!=defaultSelectDate?defaultSelectDate:void 0),2),selectedDate=_useState2[0],setSelectedDate=_useState2[1],_useState3=DatePicker_sliced_to_array((0,react.useState)(!1),2),hidePopover=_useState3[0],setHidePopover=_useState3[1],_useState4=DatePicker_sliced_to_array((0,react.useState)(defaultSelectDate?"".concat(addZeroPrefix(null==defaultSelectDate?void 0:defaultSelectDate.getHours()),":").concat(addZeroPrefix(null==defaultSelectDate?void 0:defaultSelectDate.getMinutes())):void 0),2),time=_useState4[0],setTime=_useState4[1];(0,react.useEffect)(function(){"date"===onlyShow&&selectedDate&&onDateSelection&&onDateSelection(selectedDate),"time"===onlyShow&&time&&onDateSelection&&onDateSelection(time),"datetime"===onlyShow&&selectedDate&&time&&onDateSelection&&onDateSelection(new Date("".concat(yyyymmdd(selectedDate),"T").concat(time,":00")))},[selectedDate,time]);var inputDate=document.getElementById("inputId");null==inputDate||inputDate.addEventListener("focus",function(evt){if(this&&"time"===this.getAttribute("type"))try{null===this||void 0===this||this.showPicker()}catch(error){}}),(0,react.useEffect)(function(){currentDate&&setDateArray(manipulate(currentDate.getFullYear(),currentDate.getMonth(),currentDate))},[currentDate]),(0,react.useEffect)(function(){if(selectedDate&&dateArray.length){var selectedDateString=yyyymmdd(selectedDate);setDateArray(dateArray.map(function(date){return date.date===selectedDateString?DatePicker_object_spread_props(DatePicker_object_spread({},date),{isSelected:!0}):DatePicker_object_spread_props(DatePicker_object_spread({},date),{isSelected:!1})}))}},[selectedDate,JSON.stringify(dateArray)]);var onDateClick=function(day){setSelectedDate(new Date(day.date)),setHidePopover(!0)};return react.createElement("div",{className:"flex flex-col items-start justify-center gap-1 w-full"},label&&react.createElement("p",{className:classnames_default()("text-sm",{"font-semibold text-text-primary":labelBold},{"font-medium text-text-secondary":!labelBold})},label," ",void 0!==_param_required&&_param_required&&react.createElement("span",{className:"text-red-500"},"*")),react.createElement("div",{className:"flex flex-row w-full group"},("datetime"===onlyShow||"date"===onlyShow)&&react.createElement(Popover.t,{placement:placement,transform:{left:100},noSizeFit:!0,zIndexToShow:1,stopAutoClose:!0,hidePopover:hidePopover,content:react.createElement("div",{className:"md:divide-x md:divide-gray-200 p-5 bg-bg-secondary"},react.createElement("div",null,react.createElement("div",{className:"flex items-center justify-center text-center"},react.createElement("button",{type:"button",className:"-my-1.5 flex flex-none items-center justify-center p-1.5 text-text-tertiary hover:text-text-tertiary_hover"},react.createElement("span",{className:"sr-only"},"Previous month"),react.createElement(ChevronLeftIcon.A,{className:"h-5 w-5","aria-hidden":"true",onClick:function(){0>=currentDate.getMonth()?setCurrentDate(new Date(currentDate.getFullYear()-1,11,1)):setCurrentDate(new Date(currentDate.getFullYear(),currentDate.getMonth()-1,1))}})),react.createElement("h2",{className:"flex-auto text-sm font-semibold text-text-primary"},"".concat(months[currentDate.getMonth()]," ").concat(currentDate.getFullYear())),react.createElement("button",{type:"button",className:"-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-text-tertiary hover:text-text-tertiary_hove"},react.createElement("span",{className:"sr-only"},"Next month"),react.createElement(ChevronRightIcon.A,{className:"h-5 w-5","aria-hidden":"true",onClick:function(){11===currentDate.getMonth()?setCurrentDate(new Date(currentDate.getFullYear()+1,0,1)):setCurrentDate(new Date(currentDate.getFullYear(),currentDate.getMonth()+1,1))}}))),react.createElement("div",{className:"mt-10 grid grid-cols-7 text-center text-xs leading-6 text-text-tertiary"},react.createElement("div",null,"Mo"),react.createElement("div",null,"Tu"),react.createElement("div",null,"We"),react.createElement("div",null,"Th"),react.createElement("div",null,"Fr"),react.createElement("div",null,"Sat"),react.createElement("div",null,"Su")),react.createElement("div",{className:"mt-2 grid grid-cols-7 text-sm"},dateArray.map(function(day,dayIdx){var _day_date_split_pop;return react.createElement("div",{key:day.date,className:clsNames(dayIdx>6&&"border-t border-border-secondary","py-2")},react.createElement("button",{type:"button",onClick:function(){return onDateClick(day)},className:clsNames(day.isSelected&&"text-white",!day.isSelected&&day.isToday&&"text-indigo-600",!day.isSelected&&!day.isToday&&day.isCurrentMonth&&"text-text-primary",!day.isSelected&&!day.isToday&&!day.isCurrentMonth&&"text-text-tertiary",day.isSelected&&day.isToday&&"bg-brand-700",day.isSelected&&!day.isToday&&"bg-brand-700",!day.isSelected&&"hover:bg-gray-200",(day.isSelected||day.isToday)&&"font-semibold","mx-auto flex h-8 w-8 items-center justify-center rounded-full")},react.createElement("time",{dateTime:day.date},null==(_day_date_split_pop=day.date.split("-").pop())?void 0:_day_date_split_pop.replace(/^0/,""))))})))),contentWidth:null==width?void 0:width.dateWidth},react.createElement("div",{className:"justify-end flex",title:title},react.createElement("div",{className:"date"!==onlyShow?"flex gap-2 flex-row bg-bg-primary group-hover:bg-bg-primary_hover border border-border-primary px-4 py-2 rounded-l-full overflow-hidden":"flex items-center gap-2 bg-bg-primary group-hover:bg-bg-primary_hover px-4 py-2 rounded-full border border-border-secondary shadow-xs",style:{width:"datetime"===onlyShow?"100%":null==width?void 0:width.dateWidth}},react.createElement("div",{className:"flex items-center pointer-events-none"},react.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M17.5 8.33335H2.5M13.3333 1.66669V5.00002M6.66667 1.66669V5.00002M6.5 18.3334H13.5C14.9001 18.3334 15.6002 18.3334 16.135 18.0609C16.6054 17.8212 16.9878 17.4387 17.2275 16.9683C17.5 16.4336 17.5 15.7335 17.5 14.3334V7.33335C17.5 5.93322 17.5 5.23316 17.2275 4.69838C16.9878 4.22797 16.6054 3.84552 16.135 3.60584C15.6002 3.33335 14.9001 3.33335 13.5 3.33335H6.5C5.09987 3.33335 4.3998 3.33335 3.86502 3.60584C3.39462 3.84552 3.01217 4.22797 2.77248 4.69838C2.5 5.23316 2.5 5.93322 2.5 7.33335V14.3334C2.5 15.7335 2.5 16.4336 2.77248 16.9683C3.01217 17.4387 3.39462 17.8212 3.86502 18.0609C4.3998 18.3334 5.09987 18.3334 6.5 18.3334Z",stroke:"#57606A","stroke-width":"1.66667","stroke-linecap":"round","stroke-linejoin":"round"}))),react.createElement("input",{type:"text",placeholder:"Select date",className:"border-none w-full block font-semibold text-text-secondary text-sm focus:ring-0 bg-transparent group-hover:bg-transparent p-0",onClick:function(){return setHidePopover(!1)},value:selectedDate?"".concat(months[selectedDate.getMonth()].slice(0,3)," ").concat(selectedDate.getDate(),", ").concat(selectedDate.getFullYear()):""})))),("datetime"===onlyShow||"time"===onlyShow)&&react.createElement("input",{type:"time",value:time,id:"inputId",style:{width:null==width?void 0:width.timeWidth},onChange:function(event){setTime(event.target.value)},className:"time"!==onlyShow?"flex flex-row text-text-secondary font-semibold text-text-secondary text-sm bg-bg-primary group-hover:bg-bg-primary_hover border border-border-primary px-4 py-0 rounded-r-full overflow-hidden":"flex items-center gap-2  font-semibold text-text-secondary text-sm text-text-secondary bg-bg-primary group-hover:bg-bg-primary_hover px-4py-0rounded-full border border-border-secondary shadow-xs"})))}let DatePicker_DatePicker=DatePicker;try{DatePicker.displayName="DatePicker",DatePicker.__docgenInfo={description:"",displayName:"DatePicker",props:{startFrom:{defaultValue:null,description:"",name:"startFrom",required:!1,type:{name:"Date"}},onDateSelection:{defaultValue:null,description:"",name:"onDateSelection",required:!1,type:{name:"Function"}},defaultSelectDate:{defaultValue:null,description:"",name:"defaultSelectDate",required:!0,type:{name:"Date"}},onlyShow:{defaultValue:{value:"date"},description:"",name:"onlyShow",required:!1,type:{name:"enum",value:[{value:'"date"'},{value:'"time"'},{value:'"datetime"'}]}},placement:{defaultValue:{value:"PopoverPlacement.bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"bottom"'},{value:'"top"'},{value:'"bottomLeft"'},{value:'"bottomRight"'},{value:'"topRight"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"{ timeWidth?: string; dateWidth?: string; } | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelBold:{defaultValue:{value:"true"},description:"",name:"labelBold",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DatePicker/DatePicker.tsx#DatePicker"]={docgenInfo:DatePicker.__docgenInfo,name:"DatePicker",path:"src/components/DatePicker/DatePicker.tsx#DatePicker"})}catch(__react_docgen_typescript_loader_error){}var Loader=__webpack_require__("./src/components/Loader/index.ts"),useDrag=__webpack_require__("../node_modules/react-dnd/dist/hooks/useDrag/useDrag.js"),src=__webpack_require__("./src/index.ts");function IssueCard_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function IssueCard_array_with_holes(arr){if(Array.isArray(arr))return arr}function IssueCard_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function IssueCard_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function IssueCard_sliced_to_array(arr,i){return IssueCard_array_with_holes(arr)||IssueCard_iterable_to_array_limit(arr,i)||IssueCard_unsupported_iterable_to_array(arr,i)||IssueCard_non_iterable_rest()}function IssueCard_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return IssueCard_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return IssueCard_array_like_to_array(o,minLen)}}var IssueCard=function(props){var _issue_assignee,issue=props.issue,status=props.status,onCardClick=(props.statusColor,props.onCardClick),_useDrag=(props.attachments,IssueCard_sliced_to_array((0,useDrag.i)(function(){return{type:"IssueCard",item:{issue:issue,status:status},collect:function(monitor){return{isDragging:!!monitor.isDragging()}}}}),2)),isDragging=_useDrag[0].isDragging,drag=_useDrag[1];return react.createElement(react.Fragment,null,react.createElement("div",{ref:drag,onClick:function(){return onCardClick(issue)},className:"p-4 w-full ".concat(isDragging?"opacity-50 cursor-grabbing":"opacity-100 cursor-grab transform scale-105"," flex flex-col items-start justify-center gap-2 rounded-4xl bg-bg-primary")},(null==issue?void 0:issue.attachmentURL)?react.createElement("div",{className:"w-full overflow-hidden flex items-center justify-start"},react.createElement("img",{style:{width:"100%"},src:issue.attachmentURL,alt:"",className:"rounded-4xl"})):null,react.createElement("p",{className:"text-base font-medium text-text-primary line-clamp-2 pr-16"},issue.text," "),react.createElement("div",{className:"flex items-center justify-between w-full"},react.createElement("div",{className:"flex items-center justify-center gap-2"},issue.issue_type&&react.createElement(src.eu,{imageUrl:issue.issue_type_icon,fullName:issue.issue_type,border:"none",size:"sm"}),react.createElement("p",{className:"text-xs font-semibold text-text-tertiary ".concat((null==issue?void 0:issue.is_archived)?"line-through":"")},issue.ticket_number)),react.createElement("div",{className:"flex items-center justify-center gap-2"},issue.priority&&react.createElement(src.eu,{imageUrl:issue.priority_icon,fullName:issue.priority,border:"none",size:"sm"}),(null==issue||null==(_issue_assignee=issue.assignee)?void 0:_issue_assignee.fullname)&&react.createElement(src.eu,{imageUrl:issue.assignee.avatar,fullName:issue.assignee.fullname,border:"none",size:"sm",showTooltip:!0,tooltipText:issue.assignee.fullname,tooltipAlign:"left"})))))};try{IssueCard.displayName="IssueCard",IssueCard.__docgenInfo={description:"",displayName:"IssueCard",props:{issue:{defaultValue:null,description:"",name:"issue",required:!0,type:{name:"IIssueData"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"string"}},statusColor:{defaultValue:null,description:"",name:"statusColor",required:!0,type:{name:"string"}},onCardClick:{defaultValue:null,description:"",name:"onCardClick",required:!0,type:{name:"OnCardClickFunctionType"}},attachments:{defaultValue:null,description:"",name:"attachments",required:!1,type:{name:"attachments[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DragAndDrop/IssueCard/IssueCard.tsx#IssueCard"]={docgenInfo:IssueCard.__docgenInfo,name:"IssueCard",path:"src/components/DragAndDrop/IssueCard/IssueCard.tsx#IssueCard"})}catch(__react_docgen_typescript_loader_error){}var useDrop=__webpack_require__("../node_modules/react-dnd/dist/hooks/useDrop/useDrop.js");function Section_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Section_array_with_holes(arr){if(Array.isArray(arr))return arr}function Section_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function Section_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Section_sliced_to_array(arr,i){return Section_array_with_holes(arr)||Section_iterable_to_array_limit(arr,i)||Section_unsupported_iterable_to_array(arr,i)||Section_non_iterable_rest()}function Section_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return Section_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Section_array_like_to_array(o,minLen)}}var Section=function(props){var isLoading=props.isLoading,title=props.title,issues=props.issues,statusColor=props.statusColor,onCardClick=props.onCardClick,onDrop=props.onDrop,attachments=props.attachments,onButtonClick=props.onButtonClick,_useDrop=Section_sliced_to_array((0,useDrop.H)(function(){return{accept:"IssueCard",drop:function(issue){return onDrop(issue,title)},collect:function(monitor){return{isOver:!!monitor.isOver()}}}}),2),isOver=_useDrop[0].isOver,drop=_useDrop[1];return react.createElement("div",{ref:drop,className:"".concat(isOver?"bg-bg-tertiary":"bg-bg-secondary"," rounded-4xl pt-4 pb-10 px-4 w-[350px] min-w-[350px] relative flex items-start flex-col justify-start gap-4 flex-grow duration-300")},react.createElement("p",{className:"text-xl font-semibold text-text-primary"},title),isLoading?react.createElement("div",{className:"w-full flex items-start justify-center h-full"},react.createElement(Loader.A,{size:"sm"})):react.createElement(react.Fragment,null,0===issues.length&&react.createElement("div",{className:"flex items-center justify-center w-full"},onButtonClick?react.createElement(Button.$,{color:"secondary",shape:"circle",variant:"outlined",onClick:function(){return onButtonClick(title)}},"+ Create Issue"):react.createElement("p",null,"No ",title," issues found")),issues.map(function(issue){return react.createElement(IssueCard,{key:issue.id,issue:issue,status:title,statusColor:statusColor,onCardClick:onCardClick,attachments:attachments})})))};try{Section.displayName="Section",Section.__docgenInfo={description:"",displayName:"Section",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},issues:{defaultValue:null,description:"",name:"issues",required:!0,type:{name:"any"}},setIssues:{defaultValue:null,description:"",name:"setIssues",required:!0,type:{name:"any"}},statusColor:{defaultValue:null,description:"",name:"statusColor",required:!0,type:{name:"string"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!0,type:{name:"OnDropFunctionType"}},onCardClick:{defaultValue:null,description:"",name:"onCardClick",required:!0,type:{name:"OnCardClickFunctionType"}},attachments:{defaultValue:null,description:"",name:"attachments",required:!1,type:{name:"attachments[]"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},onButtonClick:{defaultValue:null,description:"",name:"onButtonClick",required:!1,type:{name:"((value: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DragAndDrop/Section.tsx#Section"]={docgenInfo:Section.__docgenInfo,name:"Section",path:"src/components/DragAndDrop/Section.tsx#Section"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("../node_modules/react-dnd-html5-backend/dist/index.js"),DndProvider=__webpack_require__("../node_modules/react-dnd/dist/core/DndProvider.js");function DragAndDrop_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function DragAndDrop_array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return DragAndDrop_array_like_to_array(arr)}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function DragAndDrop_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function DragAndDrop_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function DragAndDrop_sliced_to_array(arr,i){return DragAndDrop_array_with_holes(arr)||DragAndDrop_iterable_to_array_limit(arr,i)||DragAndDrop_unsupported_iterable_to_array(arr,i)||DragAndDrop_non_iterable_rest()}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||DragAndDrop_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function DragAndDrop_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return DragAndDrop_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return DragAndDrop_array_like_to_array(o,minLen)}}var statusColors=["#FF2D55","#FF9500","#30B0C7","green"],DragAndDrop=function(props){var data=props.data,ticketAttachments=props.attachments,onCardClick=props.onCardClick,onDrop=props.onDrop,filterOptions=props.filterOptions,_props_isLoading=props.isLoading,isLoading=void 0!==_props_isLoading&&_props_isLoading,onButtonClick=props.onButtonClick,_useState=DragAndDrop_sliced_to_array((0,react.useState)(data),2),issues=_useState[0],setIssues=_useState[1],_useState1=DragAndDrop_sliced_to_array((0,react.useState)(data),2),filteredIssues=_useState1[0],setFilteredIssues=_useState1[1],_useState2=DragAndDrop_sliced_to_array((0,react.useState)(null),2),filters=_useState2[0],setFilters=_useState2[1];return(0,react.useEffect)(function(){setIssues(data),setFilteredIssues(data)},[JSON.stringify(data)]),(0,react.useEffect)(function(){var temp=JSON.parse(JSON.stringify(_to_consumable_array(issues)));filters&&(Object.keys(filters.search).length&&temp.forEach(function(issue){issue.items=issue.items.filter(function(item){return item.text.toLowerCase().includes(filters.search.searchValue1)})}),Object.keys(filters.filter).length&&(filters.filter.filter2&&temp.forEach(function(issue){var _filters_filter_filter2_name,_filters_filter_filter2,_filters_filter_filter2_name1,_filters_filter_filter21;(null==(_filters_filter_filter2=filters.filter.filter2)||null==(_filters_filter_filter2_name=_filters_filter_filter2.name)?void 0:_filters_filter_filter2_name.trim().toLowerCase())!=="all"&&(issue.items=issue.name.trim().toLowerCase()===(null==(_filters_filter_filter21=filters.filter.filter2)||null==(_filters_filter_filter2_name1=_filters_filter_filter21.name)?void 0:_filters_filter_filter2_name1.trim().toLowerCase())?issue.items:[])}),filters.filter.filter1&&temp.forEach(function(issue){var _filters_filter_filter1_name,_filters_filter_filter1;(null==(_filters_filter_filter1=filters.filter.filter1)||null==(_filters_filter_filter1_name=_filters_filter_filter1.name)?void 0:_filters_filter_filter1_name.trim().toLowerCase())!=="all"&&(issue.items=issue.items.filter(function(el){var _el_issue_type,_filters_filter_filter1;return(null==el||null==(_el_issue_type=el.issue_type)?void 0:_el_issue_type.toLowerCase())===(null==(_filters_filter_filter1=filters.filter.filter1)?void 0:_filters_filter_filter1.name.toLowerCase())}))})),setFilteredIssues(temp))},[JSON.stringify(filters)]),react.createElement(react.Fragment,null,react.createElement("div",{className:"flex flex-col gap-8 w-full"},filterOptions&&!isLoading&&react.createElement(src.Os,{filterOptions:filterOptions,onSearchFilter:function(filters){setFilters(filters)}}),react.createElement(DndProvider.Q,{backend:dist.t2},react.createElement("div",{className:"flex flex-row gap-2 overflow-x-auto"},filteredIssues.map(function(issue,index){return react.createElement(Section,{isLoading:isLoading,key:issue.name,title:issue.name,issues:issue.items,setIssues:setIssues,onDrop:onDrop,statusColor:statusColors[index],onCardClick:onCardClick,attachments:ticketAttachments,onButtonClick:onButtonClick})})))))};let DragAndDrop_DragAndDrop=DragAndDrop;try{DragAndDrop.displayName="DragAndDrop",DragAndDrop.__docgenInfo={description:"",displayName:"DragAndDrop",props:{isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"IIssuesByLane[]"}},attachments:{defaultValue:null,description:"",name:"attachments",required:!1,type:{name:"attachments[]"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!0,type:{name:"OnDropFunctionType"}},onCardClick:{defaultValue:null,description:"",name:"onCardClick",required:!0,type:{name:"OnCardClickFunctionType"}},filterOptions:{defaultValue:null,description:"",name:"filterOptions",required:!1,type:{name:"filter[]"}},onButtonClick:{defaultValue:null,description:"",name:"onButtonClick",required:!1,type:{name:"((value: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DragAndDrop/DragAndDrop.tsx#DragAndDrop"]={docgenInfo:DragAndDrop.__docgenInfo,name:"DragAndDrop",path:"src/components/DragAndDrop/DragAndDrop.tsx#DragAndDrop"})}catch(__react_docgen_typescript_loader_error){}function SearchFilter_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SearchFilter_array_with_holes(arr){if(Array.isArray(arr))return arr}function SearchFilter_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SearchFilter_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SearchFilter_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SearchFilter_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SearchFilter_define_property(target,key,source[key])})}return target}function SearchFilter_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SearchFilter_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SearchFilter_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SearchFilter_sliced_to_array(arr,i){return SearchFilter_array_with_holes(arr)||SearchFilter_iterable_to_array_limit(arr,i)||SearchFilter_unsupported_iterable_to_array(arr,i)||SearchFilter_non_iterable_rest()}function SearchFilter_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SearchFilter_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SearchFilter_array_like_to_array(o,minLen)}}let SearchAndFilter_SearchFilter=function(param){var filterOptions=param.filterOptions,onSearchFilter=param.onSearchFilter,_useState=SearchFilter_sliced_to_array((0,react.useState)({search:{},filter:{}}),2),filters=_useState[0],setFilters=_useState[1],handleSearchFilter=function(type,val){var temp,index=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;onSearchFilter(temp="search"===type?SearchFilter_object_spread_props(SearchFilter_object_spread({},filters),{filter:SearchFilter_object_spread({},filters.filter),search:SearchFilter_define_property({},"searchValue".concat(index),val)}):SearchFilter_object_spread_props(SearchFilter_object_spread({},filters),{search:SearchFilter_object_spread({},filters.search),filter:SearchFilter_object_spread_props(SearchFilter_object_spread({},filters.filter),SearchFilter_define_property({},"filter".concat(index),val))})),setFilters(temp)};return react.createElement(react.Fragment,null,react.createElement("div",{className:"bg-bg-secondary p-4 rounded-xl"},react.createElement("div",{className:"flex items-center space-x-2 justify-between"},react.createElement("div",{className:"-mb-4 w-3/4"},filterOptions.filter(function(el){return"text"===el.type}).map(function(option,ind){return react.createElement(src.pd,{key:ind,iconUrl:option.iconUrl,label:option.label,onChange:function(e){handleSearchFilter("search",e.target.value,ind+1)},placeholder:option.placeholder,type:option.type})})),react.createElement("div",{className:"grid grid-cols-2 gap-x-3"},filterOptions.filter(function(el){return"select"===el.type}).map(function(option,ind){var _option_placeholder;return react.createElement(src.l6,{key:ind,labelBold:option.labelBold,placeholder:null!=(_option_placeholder=option.placeholder)?_option_placeholder:"",label:option.label,onClick:function(val){handleSearchFilter("filter",val,ind+1)},defaultSelected:option.defaultSelected,options:option.options?option.options:[]})})))))};try{SearchFilter.displayName="SearchFilter",SearchFilter.__docgenInfo={description:"",displayName:"SearchFilter",props:{onSearchFilter:{defaultValue:null,description:"",name:"onSearchFilter",required:!0,type:{name:"OnSearchFilterFunctionType"}},filterOptions:{defaultValue:null,description:"",name:"filterOptions",required:!0,type:{name:"filter[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SearchAndFilter/SearchFilter.tsx#SearchFilter"]={docgenInfo:SearchFilter.__docgenInfo,name:"SearchFilter",path:"src/components/SearchAndFilter/SearchFilter.tsx#SearchFilter"})}catch(__react_docgen_typescript_loader_error){}var Badge=__webpack_require__("./src/components/Badge/index.ts");let icons_upload_namespaceObject=__webpack_require__.p+"static/media/upload.f8a161b3.svg";var es=__webpack_require__("../node_modules/react-dropzone/dist/es/index.js"),FileInfo=__webpack_require__("./src/components/FormInput/FileUpload/FileInfo.tsx"),Avatar=__webpack_require__("./src/components/Avatar/index.ts");function FileUpload_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function FileUpload_array_with_holes(arr){if(Array.isArray(arr))return arr}function FileUpload_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function FileUpload_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function FileUpload_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function FileUpload_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){FileUpload_define_property(target,key,source[key])})}return target}function FileUpload_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function FileUpload_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):FileUpload_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function FileUpload_sliced_to_array(arr,i){return FileUpload_array_with_holes(arr)||FileUpload_iterable_to_array_limit(arr,i)||FileUpload_unsupported_iterable_to_array(arr,i)||FileUpload_non_iterable_rest()}function FileUpload_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return FileUpload_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return FileUpload_array_like_to_array(o,minLen)}}var FileUpload=function(param){var labelHighlight=param.labelHighlight,label=param.label,description=param.description,uploadedFiles=param.uploadedFiles,_param_grid=param.grid,customGridClass=param.customGridClass,onFileUpload=param.onFileUpload,inputRef=(0,react.useRef)(null),_useState=FileUpload_sliced_to_array((0,react.useState)(!1),2),fileUploaing=_useState[0],setFileUploaing=_useState[1],_useState1=FileUpload_sliced_to_array((0,react.useState)(uploadedFiles),2),files=_useState1[0],setFiles=_useState1[1];(0,react.useEffect)(function(){setFiles(uploadedFiles)},[uploadedFiles]);var onDrop=(0,react.useCallback)(function(acceptedFiles){setFileUploaing(!0),acceptedFiles.length&&onFileUpload&&(onFileUpload(acceptedFiles),setFileUploaing(!1))},[]),_useDropzone=(0,es.VB)({onDrop:onDrop}),getRootProps=_useDropzone.getRootProps,getInputProps=_useDropzone.getInputProps,isDragActive=_useDropzone.isDragActive;return react.createElement(react.Fragment,null,react.createElement("input",FileUpload_object_spread_props(FileUpload_object_spread({},getInputProps()),{style:{display:"none"},ref:inputRef,type:"file",onChange:function(e){setFileUploaing(!0);var filesUploaded=e.target.files;filesUploaded.length&&onFileUpload&&(onFileUpload(filesUploaded),setFileUploaing(!1))}})),react.createElement("div",{className:"flex flex-col gap-4 items-center justify-center h-full"},react.createElement("div",FileUpload_object_spread_props(FileUpload_object_spread({},getRootProps()),{onClick:function(){inputRef.current&&inputRef.current.click()},className:"rounded-2xl bg-bg-primary border border-solid border-border-secondary py-4 px-6 flex flex-col items-center justify-center gap-3 cursor-pointer w-full h-full"}),react.createElement("div",null,react.createElement(Avatar.A,{border:"none",size:"lg",icon:icons_upload_namespaceObject})),react.createElement("div",{className:"flex flex-col items-center justify-center gap-1 text-sm text-tert-600 font-normal"},react.createElement("p",null,labelHighlight&&react.createElement("span",{className:"text-blue-700 text-sm font-semibold"},fileUploaing?"Uploading...":isDragActive?"Drop the files here ...":labelHighlight," "),!isDragActive&&!fileUploaing&&label),react.createElement("p",null,description))),files&&react.createElement("div",{className:"grid grid-cols-".concat(void 0===_param_grid?1:_param_grid," gap-3 w-full ").concat(customGridClass)},files.map(function(data){return react.createElement(FileInfo.A,{data:data})}))))};let FileUpload_FileUpload=FileUpload;try{FileUpload.displayName="FileUpload",FileUpload.__docgenInfo={description:"",displayName:"FileUpload",props:{labelHighlight:{defaultValue:null,description:"",name:"labelHighlight",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},uploadedFiles:{defaultValue:null,description:"",name:"uploadedFiles",required:!1,type:{name:"IfileInfo[]"}},grid:{defaultValue:{value:"1"},description:"",name:"grid",required:!1,type:{name:"number"}},customGridClass:{defaultValue:null,description:"",name:"customGridClass",required:!1,type:{name:"string"}},onFileUpload:{defaultValue:null,description:"",name:"onFileUpload",required:!1,type:{name:"((files: any) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormInput/FileUpload/FileUpload.tsx#FileUpload"]={docgenInfo:FileUpload.__docgenInfo,name:"FileUpload",path:"src/components/FormInput/FileUpload/FileUpload.tsx#FileUpload"})}catch(__react_docgen_typescript_loader_error){}var utils=__webpack_require__("./src/components/Comments/utils.ts"),CommentCard=function(param){var _data_first_name,_data_last_name,data=param.data,separator=param.separator;return react.createElement("div",{className:classnames_default()("flex items-center justify-start gap-3 py-4",separator&&" border-y border-solid border-gray-200 ")},react.createElement("div",null,react.createElement(src.eu,{imageUrl:data.avatar,firstName:null!=(_data_first_name=data.first_name)?_data_first_name:"",lastName:null!=(_data_last_name=data.last_name)?_data_last_name:""})),react.createElement("div",{className:"text-sm text-tert-600 font-normal flex flex-col items-start justify-center gap-1"},react.createElement("p",{className:"flex items-center justify-start gap-2"},react.createElement("span",{className:"text-secondary-700 font-medium"},data.first_name+" "+data.last_name),react.createElement("span",null,(0,utils.f)(new Date(data.created_at)))),react.createElement("p",null,data.description?data.description:data.text?data.text:""," ",react.createElement("span",{className:"text-secondary-700 font-medium"},data.lane_id?data.lane_id:data.issue_id?data.issue_id:""))))};try{CommentCard.displayName="CommentCard",CommentCard.__docgenInfo={description:"",displayName:"CommentCard",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"INotificationCard"}},separator:{defaultValue:null,description:"",name:"separator",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Comments/CommentCard.tsx#CommentCard"]={docgenInfo:CommentCard.__docgenInfo,name:"CommentCard",path:"src/components/Comments/CommentCard.tsx#CommentCard"})}catch(__react_docgen_typescript_loader_error){}var Comments=function(param){var data=param.data;return param.theme,react.createElement(react.Fragment,null,react.createElement("div",null,data.map(function(d,ind){return react.createElement(CommentCard,{data:d})})))};let Comments_Comments=Comments;try{Comments.displayName="Comments",Comments.__docgenInfo={description:"",displayName:"Comments",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"INotificationCard[]"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"String"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Comments/Comments.tsx#Comments"]={docgenInfo:Comments.__docgenInfo,name:"Comments",path:"src/components/Comments/Comments.tsx#Comments"})}catch(__react_docgen_typescript_loader_error){}function FilesInfoList_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function FilesInfoList_array_with_holes(arr){if(Array.isArray(arr))return arr}function FilesInfoList_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function FilesInfoList_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function FilesInfoList_sliced_to_array(arr,i){return FilesInfoList_array_with_holes(arr)||FilesInfoList_iterable_to_array_limit(arr,i)||FilesInfoList_unsupported_iterable_to_array(arr,i)||FilesInfoList_non_iterable_rest()}function FilesInfoList_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return FilesInfoList_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return FilesInfoList_array_like_to_array(o,minLen)}}var FilesInfoList=function(param){var _param_files=param.files,_param_grid=param.grid,allFiles=FilesInfoList_sliced_to_array((0,react.useState)(void 0===_param_files?[]:_param_files),1)[0];return react.createElement(react.Fragment,null,react.createElement("div",{className:"grid grid-cols-".concat(void 0===_param_grid?1:_param_grid," gap-3 w-full")},allFiles.map(function(data){return react.createElement(FileInfo.A,{data:data})})))};let FilesInfoList_FilesInfoList=FilesInfoList;try{FilesInfoList.displayName="FilesInfoList",FilesInfoList.__docgenInfo={description:"",displayName:"FilesInfoList",props:{files:{defaultValue:{value:"[]"},description:"",name:"files",required:!1,type:{name:"IfileInfo[]"}},grid:{defaultValue:{value:"1"},description:"",name:"grid",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormInput/FileUpload/FilesInfoList/FilesInfoList.tsx#FilesInfoList"]={docgenInfo:FilesInfoList.__docgenInfo,name:"FilesInfoList",path:"src/components/FormInput/FileUpload/FilesInfoList/FilesInfoList.tsx#FilesInfoList"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/components/LiquidGlassTabBar/LiquidGlassTabBar.tsx");var Popup=function(param){var popupText=param.popupText,showPopup=param.showPopup,placement=param.placement,children=param.children,popoverWidth=param.popoverWidth;return popupText||showPopup?react.createElement(Popover.t,{content:react.createElement("div",null,popupText),trigger:"hover",placement:null!=placement?placement:Popover.D.right,width:null!=popoverWidth?popoverWidth:"200px"},react.createElement("div",null,children)):react.createElement("div",null,children)};try{Popup.displayName="Popup",Popup.__docgenInfo={description:"",displayName:"Popup",props:{popupText:{defaultValue:null,description:"",name:"popupText",required:!1,type:{name:"string | Element"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"bottom"'},{value:'"top"'},{value:'"bottomLeft"'},{value:'"bottomRight"'},{value:'"topRight"'}]}},popoverWidth:{defaultValue:null,description:"",name:"popoverWidth",required:!1,type:{name:"string"}},showPopup:{defaultValue:null,description:"",name:"showPopup",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popup/Popup.tsx#Popup"]={docgenInfo:Popup.__docgenInfo,name:"Popup",path:"src/components/Popup/Popup.tsx#Popup"})}catch(__react_docgen_typescript_loader_error){}function InfoContainer_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function InfoContainer_array_with_holes(arr){if(Array.isArray(arr))return arr}function InfoContainer_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function InfoContainer_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function InfoContainer_sliced_to_array(arr,i){return InfoContainer_array_with_holes(arr)||InfoContainer_iterable_to_array_limit(arr,i)||InfoContainer_unsupported_iterable_to_array(arr,i)||InfoContainer_non_iterable_rest()}function InfoContainer_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return InfoContainer_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return InfoContainer_array_like_to_array(o,minLen)}}__webpack_require__("./src/components/Toggle/index.ts");var InfoContainer=function(param){var icon=param.icon,title=param.title,subTitle=param.subTitle,action=param.action,style=param.style,align=param.align,isDisabled=param.isDisabled,flag=param.flag,box=param.box,onClickHandler=param.onClickHandler,_useState=InfoContainer_sliced_to_array((0,react.useState)(!1),2),showFlag=_useState[0],setShowFlag=_useState[1],alignment="left"==align?"items-start":"right"==align?"items-end":"items-center",cursorStyle=isDisabled?"cursor-not-allowed":"cursor-pointer";return cursorStyle=box?cursorStyle:"cursor-default",react.createElement("div",{style:style,className:"flex p-4 flex-col ".concat(box&&"rounded-3xl bg-gray-100 dark:bg-slate-600"," ").concat(cursorStyle," ").concat(alignment),onClick:function(){onClickHandler&&!isDisabled&&onClickHandler()},onMouseEnter:function(){setShowFlag(!0)},onMouseLeave:function(){setShowFlag(!1)}},showFlag&&react.createElement("div",{className:"text-right flex flex-col items-end h-0 w-full relative"},flag),icon&&react.createElement("div",{className:"pb-3"},react.createElement("img",{className:"h-7 w-7",src:icon,alt:""})),react.createElement("div",{className:"flex flex-col ".concat(alignment)},react.createElement("div",{className:"text-xl font-semibold text-text-primary"},title),react.createElement("div",{className:"text-sm font-normal text-tert-600"},subTitle)),react.createElement("div",null,action))};let InfoContainer_InfoContainer=InfoContainer;try{InfoContainer.displayName="InfoContainer",InfoContainer.__docgenInfo={description:"",displayName:"InfoContainer",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | Element"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string | Element"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"string | Element"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"Boolean"}},flag:{defaultValue:null,description:"",name:"flag",required:!1,type:{name:"Element"}},box:{defaultValue:null,description:"",name:"box",required:!1,type:{name:"Boolean"}},onClickHandler:{defaultValue:null,description:"",name:"onClickHandler",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InfoContainer/InfoContainer.tsx#InfoContainer"]={docgenInfo:InfoContainer.__docgenInfo,name:"InfoContainer",path:"src/components/InfoContainer/InfoContainer.tsx#InfoContainer"})}catch(__react_docgen_typescript_loader_error){}var AreaChart=__webpack_require__("./src/components/AreaChart/index.ts"),DonutChart=function(param){var data=param.data,isDataLoading=param.isDataLoading;return react.createElement(PieChart.A,{isDonutChart:!0,data:data,isDataLoading:isDataLoading})};try{DonutChart.displayName="DonutChart",DonutChart.__docgenInfo={description:"",displayName:"DonutChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"chartData[]"}},isDataLoading:{defaultValue:null,description:"",name:"isDataLoading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DonutChart/DonutChart.tsx#DonutChart"]={docgenInfo:DonutChart.__docgenInfo,name:"DonutChart",path:"src/components/DonutChart/DonutChart.tsx#DonutChart"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/components/ContentBox/index.ts"),__webpack_require__("./src/components/HomeCard/HomeCard.tsx");var HomeCardGroup=__webpack_require__("./src/components/HomeCardGroup/HomeCardGroup.tsx");function timeAgo(date){if(isNaN(date.getTime()))return"";var diffInSeconds=Math.floor((new Date().getTime()-date.getTime())/1e3);if(diffInSeconds<60)return"just now";var diffInMinutes=Math.floor(diffInSeconds/60);if(diffInMinutes<60)return"".concat(diffInMinutes," minutes ago");var diffInHours=Math.floor(diffInMinutes/60);if(diffInHours<24)return"".concat(diffInHours," hours ago");var diffInDays=Math.floor(diffInHours/24);if(diffInDays<30)return"".concat(diffInDays," days ago");var diffInMonths=Math.floor(diffInDays/30);return"".concat(diffInMonths," months ago")}var NotificationCard=function(param){var data=param.data;return react.createElement("div",{className:"rounded-3xl	p-4	hover:bg-bg-primary_hover ".concat(data.onClickHandler?"cursor-pointer":"")},react.createElement("div",{className:"flex items-center justify-between ",onClick:data.onClickHandler},react.createElement("div",{className:classnames_default()("flex justify-start gap-3")},react.createElement("div",null,data.notificationIcon),react.createElement("div",{className:"text-sm text-text-secondary flex flex-col items-start"},react.createElement("div",{className:"flex"},react.createElement("span",{className:"flex justify-start gap-2 font-semibold text-sm"},data.notificationTitle),react.createElement("span",{className:"flex items-center font-normal text-text-tertiary px-3 text-xs"},timeAgo(new Date(data.createdAt)))),data.notificationDescription)),!data.notificationRead&&react.createElement("div",{className:"pr-2"},react.createElement("div",{className:"h-2.5 w-2.5 bg-error-600 rounded-lg"}))),data.content&&react.createElement("div",{className:"pl-10 pr-20 py-2"},data.content))};try{NotificationCard.displayName="NotificationCard",NotificationCard.__docgenInfo={description:"",displayName:"NotificationCard",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"INotificationCard"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Notifications/NotificationCard.tsx#NotificationCard"]={docgenInfo:NotificationCard.__docgenInfo,name:"NotificationCard",path:"src/components/Notifications/NotificationCard.tsx#NotificationCard"})}catch(__react_docgen_typescript_loader_error){}var Notifications=function(param){var data=param.data,theme=param.theme;return react.createElement(react.Fragment,null,react.createElement("div",{className:"".concat(theme)},data.map(function(d,ind){return react.createElement(NotificationCard,{data:d})})))};let Notifications_Notifications=Notifications;try{Notifications.displayName="Notifications",Notifications.__docgenInfo={description:"",displayName:"Notifications",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"INotificationCard[]"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"String"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Notifications/Notifications.tsx#Notifications"]={docgenInfo:Notifications.__docgenInfo,name:"Notifications",path:"src/components/Notifications/Notifications.tsx#Notifications"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/components/PaymentCard/index.ts"),__webpack_require__("./src/components/BillingCard/index.ts"),__webpack_require__("./src/components/SegmentTabs/index.tsx"),__webpack_require__("./src/components/SearchInput/index.ts"),__webpack_require__("./src/components/TemplateCard/TemplateCard.tsx");var Avatar_Avatar=__webpack_require__("./src/components/Avatar/Avatar.tsx");function AvatarLabelGroup_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function AvatarLabelGroup_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){AvatarLabelGroup_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var AvatarLabelGroup=function(_param){var title=_param.title,description=_param.description,_param_size=_param.size,size=void 0===_param_size?"sm":_param_size,props=_object_without_properties(_param,["title","description","size"]);return react.createElement("div",{className:"flex items-center justify-start gap-2.5 bg-bg-primary"},react.createElement(Avatar_Avatar.A,AvatarLabelGroup_object_spread({size:size},props)),react.createElement("div",{className:"flex flex-col items-start"},react.createElement("p",{className:"".concat({sm:"text-sm font-semibold",md:"text-sm font-semibold",lg:"text-base font-semibold",xl:"text-lg font-semibold"}[size]," text-text-primary")},title),react.createElement("p",{className:"".concat({sm:"text-xs font-normal",md:"text-sm font-normal",lg:"text-base font-normal",xl:"text-base font-normal"}[size]," text-text-tertiary")},description)))};let AvatarLabelGroup_AvatarLabelGroup=AvatarLabelGroup;try{AvatarLabelGroup.displayName="AvatarLabelGroup",AvatarLabelGroup.__docgenInfo={description:"",displayName:"AvatarLabelGroup",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},firstName:{defaultValue:null,description:"",name:"firstName",required:!1,type:{name:"string"}},lastName:{defaultValue:null,description:"",name:"lastName",required:!1,type:{name:"string"}},tooltipAlign:{defaultValue:null,description:"",name:"tooltipAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string | null"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"online"'},{value:'"offline"'},{value:'"blueTick"'},{value:'"organization"'}]}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"string | null"}},fullName:{defaultValue:null,description:"",name:"fullName",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"default"'},{value:'"focused"'}]}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!1,type:{name:"string | null"}},showTooltip:{defaultValue:null,description:"",name:"showTooltip",required:!1,type:{name:"boolean"}},tooltipText:{defaultValue:null,description:"",name:"tooltipText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AvatarLabelGroup/AvatarLabelGroup.tsx#AvatarLabelGroup"]={docgenInfo:AvatarLabelGroup.__docgenInfo,name:"AvatarLabelGroup",path:"src/components/AvatarLabelGroup/AvatarLabelGroup.tsx#AvatarLabelGroup"})}catch(__react_docgen_typescript_loader_error){}var react_beautiful_dnd_esm=__webpack_require__("../node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");let dots_drag_namespaceObject=__webpack_require__.p+"static/media/dots-drag.97ef71af.svg";function Draggable_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Draggable_array_with_holes(arr){if(Array.isArray(arr))return arr}function Draggable_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Draggable_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function Draggable_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Draggable_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Draggable_define_property(target,key,source[key])})}return target}function Draggable_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Draggable_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Draggable_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function Draggable_sliced_to_array(arr,i){return Draggable_array_with_holes(arr)||Draggable_iterable_to_array_limit(arr,i)||Draggable_unsupported_iterable_to_array(arr,i)||Draggable_non_iterable_rest()}function Draggable_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return Draggable_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Draggable_array_like_to_array(o,minLen)}}var reorder=function(list,startIndex,endIndex){var result=Array.from(list),removed=Draggable_sliced_to_array(result.splice(startIndex,1),1)[0];return result.splice(endIndex,0,removed),result},Draggable=function(param){var items=param.items,className=param.className,backgroundColor=param.backgroundColor,leftDrag=param.leftDrag,handleDragEnd=param.handleDragEnd,_useState=Draggable_sliced_to_array((0,react.useState)(items||[]),2),dragItems=_useState[0],setDragItems=_useState[1];return react.createElement(react_beautiful_dnd_esm.JY,{onDragEnd:function(result){if(result.destination){var reorderedItems=reorder(dragItems,result.source.index,result.destination.index);setDragItems(reorderedItems),handleDragEnd&&handleDragEnd(reorderedItems)}}},react.createElement(react_beautiful_dnd_esm.gL,{droppableId:"droppable"},function(provided,snapshot){return react.createElement("div",Draggable_object_spread_props(Draggable_object_spread({},provided.droppableProps),{ref:provided.innerRef,className:"".concat(className," ").concat(snapshot.isDraggingOver&&(backgroundColor||"bg-bg-quaternary"))}),dragItems.map(function(item,index){return react.createElement(react_beautiful_dnd_esm.sx,{key:item.id,draggableId:item.id,index:index},function(provided,snapshot){return react.createElement("div",Draggable_object_spread({className:"",ref:provided.innerRef},provided.draggableProps),react.createElement("div",{className:"flex ".concat(leftDrag?"justify-start":"justify-end"," pr-2 w-full")},react.createElement("img",Draggable_object_spread_props(Draggable_object_spread({},provided.dragHandleProps),{className:"cursor-move relative top-7 right-0",draggable:!1,src:dots_drag_namespaceObject,alt:"drag"}))),item.children)})}),provided.placeholder)}))};let Draggable_Draggable=Draggable;try{Draggable.displayName="Draggable",Draggable.__docgenInfo={description:"",displayName:"Draggable",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DragItem[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},leftDrag:{defaultValue:null,description:"",name:"leftDrag",required:!1,type:{name:"boolean"}},handleDragEnd:{defaultValue:null,description:"",name:"handleDragEnd",required:!1,type:{name:"((items: DragItem[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Draggable/Draggable.tsx#Draggable"]={docgenInfo:Draggable.__docgenInfo,name:"Draggable",path:"src/components/Draggable/Draggable.tsx#Draggable"})}catch(__react_docgen_typescript_loader_error){}function PlanList_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function PlanList_array_with_holes(arr){if(Array.isArray(arr))return arr}function PlanList_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function PlanList_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function PlanList_sliced_to_array(arr,i){return PlanList_array_with_holes(arr)||PlanList_iterable_to_array_limit(arr,i)||PlanList_unsupported_iterable_to_array(arr,i)||PlanList_non_iterable_rest()}function PlanList_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return PlanList_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return PlanList_array_like_to_array(o,minLen)}}var PlanList=function(param){var _plans_,plans=param.plans,onSelect=param.onSelect,activePlanID=param.activePlanID,_useState=PlanList_sliced_to_array((0,react.useState)(activePlanID||(plans.length>0?null==(_plans_=plans[0])?void 0:_plans_.id:null)),2),selectedPlan=_useState[0],setSelectedPlan=_useState[1],handlePlanChanage=function(plan){plan.is_active&&(setSelectedPlan(plan.id),onSelect(plan))};return react.createElement("section",{className:"flex flex-col gap-5 w-full overflow-hidden"},plans.map(function(plan){return react.createElement("div",{onClick:function(){return handlePlanChanage(plan)},key:plan.id,className:"rounded-4xl ".concat(selectedPlan===plan.id?" bg-gradient":plan.is_active?"bg-border-secondary":""," p-[1px]")},react.createElement("div",{className:"flex flex-col p-3 gap-1 rounded-4xl ".concat(plan.is_active?"bg-bg-primary hover:bg-bg-primary_hover cursor-pointer":"bg-bg-disabled_subtle border border-border-disabled cursor-not-allowed")},react.createElement("div",{className:"flex justify-between items-center"},react.createElement("div",{className:"flex gap-2"},react.createElement("p",{className:"text-text-secondary font-semibold"},plan.name),!plan.is_active&&react.createElement(src.Ex,{color:"primary",variant:"filled",size:"xs",border:!1},"Upcoming")),react.createElement("input",{className:"".concat(plan.is_active?selectedPlan===plan.id?"":"bg-bg-primary":"bg-bg-disabled_subtle"),name:"plan",type:"radio",disabled:!plan.is_active,checked:selectedPlan===plan.id,onChange:function(){return handlePlanChanage(plan)}})),plan.is_active?react.createElement("div",{className:"text-text-tertiary font-regular"},"$".concat(plan.amount," per member / month")):null))}))};let PlanList_PlanList=PlanList;try{PlanList.displayName="PlanList",PlanList.__docgenInfo={description:"",displayName:"PlanList",props:{plans:{defaultValue:null,description:"",name:"plans",required:!0,type:{name:"IPlan[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(plan: IPlan) => void"}},activePlanID:{defaultValue:null,description:"",name:"activePlanID",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PlanList/PlanList.tsx#PlanList"]={docgenInfo:PlanList.__docgenInfo,name:"PlanList",path:"src/components/PlanList/PlanList.tsx#PlanList"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/components/FileManager/index.ts");var Button_Button=__webpack_require__("./src/components/Button/Button.tsx"),SideDrawer=function(param){var heading=param.heading,children=param.children,showCloseIcon=param.showCloseIcon,onCloseClick=param.onCloseClick;return react.createElement("div",{className:"flex flex-col h-full p-4 w-[384px] border-l"},react.createElement("div",{className:"flex justify-between items-center"},heading&&react.createElement("div",{className:"text-xl font-semibold text-text-primary"},heading),showCloseIcon&&react.createElement(Button_Button.$,{variant:"outlined",color:"label",shape:"circle",size:"mini",imgSrc:icons_close,onClick:onCloseClick})),children)};let SideDrawer_SideDrawer=SideDrawer;try{SideDrawer.displayName="SideDrawer",SideDrawer.__docgenInfo={description:"",displayName:"SideDrawer",props:{heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string | Element"}},showCloseIcon:{defaultValue:null,description:"",name:"showCloseIcon",required:!1,type:{name:"boolean"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SideDrawer/SideDrawer.tsx#SideDrawer"]={docgenInfo:SideDrawer.__docgenInfo,name:"SideDrawer",path:"src/components/SideDrawer/SideDrawer.tsx#SideDrawer"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/components/PagginationDotGroup/index.ts"),__webpack_require__("./src/components/AssistantInput/AssistantInput.tsx"),__webpack_require__("./src/components/Alert/Alert.tsx"),__webpack_require__("./src/components/AlCreditsCard/index.ts"),__webpack_require__("./src/components/SectionLabel/SectionLabel.tsx"),__webpack_require__("./src/components/PaymentCardDetails/PaymentCardDetails.tsx"),__webpack_require__("./src/components/PlayGround/PlayGround.tsx"),__webpack_require__("./src/components/MetricItem/MetricItem.tsx"),__webpack_require__("./src/components/MenuPopover/DropdownItem.tsx"),__webpack_require__("./src/components/FloatingToolbar/FloatingToolbar.tsx"),__webpack_require__("./src/components/Confetti/Confetti.tsx"),__webpack_require__("./src/components/TopBar/TopBar.tsx"),__webpack_require__("./src/components/ButtonV2/index.ts"),__webpack_require__("./src/components/DateRangePickerV2/DateRangePickerV2.tsx"),__webpack_require__("./src/components/DateRangePicker/DateRangePicker.tsx"),__webpack_require__("./src/components/FeedCard/FeedCard.tsx"),__webpack_require__("./src/components/ProgressBar/ProgressBar.tsx"),__webpack_require__("./src/components/FeedCard/Card.tsx"),__webpack_require__("./src/components/Calendar/Calendar.tsx"),__webpack_require__("./src/components/MobileSheet/index.ts"),__webpack_require__("./src/components/SwipeableCard/index.ts"),__webpack_require__("./src/components/PullToRefresh/PullToRefresh.tsx"),__webpack_require__("./src/components/ActionSheet/ActionSheet.tsx"),__webpack_require__("./src/components/InfiniteScroll/InfiniteScroll.tsx"),__webpack_require__("./src/components/Accordion/Accordion.tsx"),__webpack_require__("./src/components/Separator/index.ts"),__webpack_require__("./src/components/Label/index.ts"),__webpack_require__("./src/components/Skeleton/Skeleton.tsx"),__webpack_require__("./src/components/Slider/Slider.tsx"),__webpack_require__("./src/components/Stepper/Stepper.tsx"),__webpack_require__("./src/components/AspectRatio/AspectRatio.tsx"),__webpack_require__("./src/components/Collapsible/Collapsible.tsx"),__webpack_require__("./src/components/Carousel/Carousel.tsx"),__webpack_require__("./src/components/Pagination/Pagination.tsx"),__webpack_require__("./src/components/Grid/Grid.tsx"),__webpack_require__("./src/components/RadioGroup/RadioGroup.tsx"),__webpack_require__("./src/components/ContextMenu/ContextMenu.tsx"),__webpack_require__("./src/components/ScrollArea/ScrollArea.tsx"),__webpack_require__("./src/components/Toolbar/Toolbar.tsx"),__webpack_require__("./src/components/StatusBar/StatusBar.tsx"),__webpack_require__("./src/components/HoverCard/HoverCard.tsx"),__webpack_require__("./src/components/Sheet/Sheet.tsx"),__webpack_require__("./src/components/CommandMenu/CommandMenu.tsx"),__webpack_require__("./src/components/PickerView/PickerView.tsx"),__webpack_require__("./src/components/NavigationMenu/NavigationMenu.tsx"),__webpack_require__("./src/components/Resizable/Resizable.tsx"),__webpack_require__("./src/components/Form/Form.tsx"),__webpack_require__("./src/components/Popover/Popover.tsx"),__webpack_require__("./src/components/DropdownMenu/DropdownMenu.tsx"),__webpack_require__("./src/components/ThemeToggle/index.ts"),__webpack_require__("./src/components/ThemeSelector/index.ts");let slash_namespaceObject=__webpack_require__.p+"static/media/slash.45bcb96e.svg",rightArrow_namespaceObject=__webpack_require__.p+"static/media/rightArrow.8760404b.svg";var BreadCrumb=function(props){var list=props.list,reactRouterLink=props.reactRouterLink,reactRouterLinkProps=props.reactRouterLinkProps,_props_separator=props.separator,separator=void 0===_props_separator?"line":_props_separator,_props_color=props.color,_props_variant=props.variant,listSelected="".concat({primary:{filled:"text-text-secondary bg-bg-brand-primary rounded-full font-medium text-sm py-1 px-2",default:"text-text-secondary font-medium text-sm"},default:{filled:"text-text-secondary bg-bg-secondary rounded-full font-semibold text-s py-1 px-2",default:"text-text-secondary font-semibold text-sm"}}[void 0===_props_color?"default":_props_color][void 0===_props_variant?"default":_props_variant]);return react.createElement("div",null,react.createElement("ul",{className:"flex items-center justify-start gap-3"},list.map(function(currList,ind){return react.createElement(react.Fragment,null,react.createElement("li",{className:ind!==list.length-1?"text-sm font-medium text-tert-600":listSelected},currList.link?react.createElement(Link,{reactRouterLink:reactRouterLink,to:currList.link,reactRouterLinkProps:reactRouterLinkProps,className:"no-underline"},currList.name):react.createElement("span",{onClick:currList.onClick},currList.name)),ind!==list.length-1?react.createElement(react.Fragment,null,"line"===separator?react.createElement("img",{src:slash_namespaceObject,alt:"/"}):react.createElement("img",{src:rightArrow_namespaceObject,alt:">"})):"")})))};let BreadCrumb_BreadCrumb=BreadCrumb;try{BreadCrumb.displayName="BreadCrumb",BreadCrumb.__docgenInfo={description:"",displayName:"BreadCrumb",props:{reactRouterLink:{defaultValue:null,description:"",name:"reactRouterLink",required:!1,type:{name:"ComponentType<LinkProps>"}},list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"breadCrumbList[]"}},reactRouterLinkProps:{defaultValue:null,description:"",name:"reactRouterLinkProps",required:!1,type:{name:"LinkProps"}},separator:{defaultValue:null,description:"",name:"separator",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"arrow"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"filled"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BreadCrumb/BreadCrumb.tsx#BreadCrumb"]={docgenInfo:BreadCrumb.__docgenInfo,name:"BreadCrumb",path:"src/components/BreadCrumb/BreadCrumb.tsx#BreadCrumb"})}catch(__react_docgen_typescript_loader_error){}var Container=function(props){var children=props.children,height=props.height;return react.createElement("div",{style:height?{height:height}:{},className:"px-4 md:px-8 flex flex-col dark:bg-[#0D1117] dark:text-white items-center justify-center g-8 mx-auto"},children)};let Container_Container=Container;try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Container/Container.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/Container/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}let AuthLayout_Header=function(props){var imageUrl=props.imageUrl,title=props.title,description=props.description;return react.createElement("div",{className:"flex flex-col items-center justify-center gap-6"},imageUrl&&react.createElement("div",null,react.createElement("img",{src:imageUrl,alt:"logo"})),title&&react.createElement("div",{className:"flex flex-col items-center justify-center gap-3"},title&&react.createElement("p",{className:"text-3xl font-semibold text-text-primary"},title),description&&description))};try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AuthLayout/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/components/AuthLayout/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}function AuthLayout_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function AuthLayout_array_with_holes(arr){if(Array.isArray(arr))return arr}function AuthLayout_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function AuthLayout_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function AuthLayout_sliced_to_array(arr,i){return AuthLayout_array_with_holes(arr)||AuthLayout_iterable_to_array_limit(arr,i)||AuthLayout_unsupported_iterable_to_array(arr,i)||AuthLayout_non_iterable_rest()}function AuthLayout_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return AuthLayout_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return AuthLayout_array_like_to_array(o,minLen)}}var AuthLayout=function(props){var headerTitle=props.headerTitle,headerDescription=props.headerDescription,headerImageUrl=props.headerImageUrl,children=props.children,footer=props.footer,header=props.header,shadow=props.shadow,_useState=AuthLayout_sliced_to_array((0,react.useState)({}),2),style=_useState[0],setStyle=_useState[1];(0,react.useEffect)(function(){var handleResize=function handleResize(){window.innerWidth>768&&setStyle({})};return window.addEventListener("resize",handleResize),handleResize(),function(){window.removeEventListener("resize",handleResize)}},[]);var authLayoutClass=classnames_default()("flex flex-col gap-8 w-[360px]",{"md:p-4 md:rounded-md md:sh":shadow});return react.createElement("div",{style:style,className:authLayoutClass},header||(headerTitle?react.createElement(AuthLayout_Header,{imageUrl:headerImageUrl,title:headerTitle,description:headerDescription}):react.createElement(react.Fragment,null)),children,footer)};let AuthLayout_AuthLayout=AuthLayout;try{AuthLayout.displayName="AuthLayout",AuthLayout.__docgenInfo={description:"",displayName:"AuthLayout",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"ReactNode"}},headerTitle:{defaultValue:null,description:"",name:"headerTitle",required:!1,type:{name:"string"}},headerDescription:{defaultValue:null,description:"",name:"headerDescription",required:!1,type:{name:"ReactNode"}},headerImageUrl:{defaultValue:null,description:"",name:"headerImageUrl",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"",name:"footer",required:!0,type:{name:"ReactNode"}},shadow:{defaultValue:null,description:"",name:"shadow",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AuthLayout/AuthLayout.tsx#AuthLayout"]={docgenInfo:AuthLayout.__docgenInfo,name:"AuthLayout",path:"src/components/AuthLayout/AuthLayout.tsx#AuthLayout"})}catch(__react_docgen_typescript_loader_error){}},"./src/contexts/ThemeContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>useTheme,N:()=>ThemeProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var ThemeContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),ThemeProvider=function(param){var children=param.children,_param_defaultTheme=param.defaultTheme,defaultTheme=void 0===_param_defaultTheme?"system":_param_defaultTheme,_param_storageKey=param.storageKey,storageKey=void 0===_param_storageKey?"purity-theme":_param_storageKey,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function(){if("undefined"==typeof window)return defaultTheme;var stored=localStorage.getItem(storageKey);return stored&&["light","dark","system"].includes(stored)?stored:defaultTheme}),2),theme=_useState[0],setThemeState=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function(){return"undefined"==typeof window?"light":"system"===theme?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":theme}),2),resolvedTheme=_useState1[0],setResolvedTheme=_useState1[1],applyTheme=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(newTheme){var root=document.documentElement;"dark"===newTheme?root.classList.add("dark"):root.classList.remove("dark"),setResolvedTheme(newTheme)},[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if("undefined"!=typeof window){if("system"===theme){var effectiveTheme,mediaQuery=window.matchMedia("(prefers-color-scheme: dark)");effectiveTheme=mediaQuery.matches?"dark":"light";var handleChange=function(e){applyTheme(e.matches?"dark":"light")};return mediaQuery.addEventListener("change",handleChange),function(){return mediaQuery.removeEventListener("change",handleChange)}}applyTheme(effectiveTheme=theme)}},[theme,applyTheme]);var setTheme=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(newTheme){setThemeState(newTheme),"undefined"!=typeof window&&localStorage.setItem(storageKey,newTheme)},[storageKey]),toggleTheme=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){setTheme("light"===resolvedTheme?"dark":"light")},[resolvedTheme,setTheme]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeContext.Provider,{value:{theme:theme,resolvedTheme:resolvedTheme,setTheme:setTheme,toggleTheme:toggleTheme}},children)},useTheme=function(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);if(void 0===context)throw Error("useTheme must be used within a ThemeProvider");return context};try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:`ThemeProvider - Manages theme state and persistence
Provides light/dark mode support with system preference detection`,displayName:"ThemeProvider",props:{defaultTheme:{defaultValue:{value:"system"},description:"",name:"defaultTheme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'},{value:'"system"'}]}},storageKey:{defaultValue:{value:"purity-theme"},description:"",name:"storageKey",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/contexts/ThemeContext.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/contexts/ThemeContext.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}try{useTheme.displayName="useTheme",useTheme.__docgenInfo={description:"useTheme - Hook to access theme context",displayName:"useTheme",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/contexts/ThemeContext.tsx#useTheme"]={docgenInfo:useTheme.__docgenInfo,name:"useTheme",path:"src/contexts/ThemeContext.tsx#useTheme"})}catch(__react_docgen_typescript_loader_error){}},"./src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{QF:()=>components.QF,Dt:()=>components.Dt,eu:()=>components.eu,lo:()=>components.lo,Ex:()=>components.Ex,JK:()=>components.JK,lv:()=>components.lv,YZ:()=>components.YZ,$n:()=>components.$n,e2:()=>components.e2,mc:()=>components.mc,lr:()=>components.lr,V6:()=>components.V6,BS:()=>components.BS,sx:()=>components.sx,_s:()=>components._s,CJ:()=>components.CJ,gE:()=>components.gE,DZ:()=>components.DZ,Dy:()=>components.Dy,qm:()=>components.qm,pd:()=>components.pd,aH:()=>components.aH,nc:()=>components.nc,bi:()=>components.bi,aF:()=>components.aF,oR:()=>components.oR,rW:()=>components.rW,D$:()=>components.D$,zD:()=>components.zD,Os:()=>components.Os,l6:()=>components.l6,$m:()=>components.$m,f8:()=>components.f8,Ju:()=>components.Ju,XI:()=>components.XI,yd:()=>components.yd,HY:()=>components.HY,wV:()=>components.wV,o5:()=>components.o5}),__webpack_require__("./src/styles/tailwind-theme.css");var components=__webpack_require__("./src/components/index.ts");__webpack_require__("./src/hooks/index.ts"),__webpack_require__("./src/utils/mobile.ts"),__webpack_require__("./src/contexts/ThemeContext.tsx")},"./src/styles/tailwind-theme.css":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("../node_modules/css-loader/dist/cjs.js!../node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!./src/styles/tailwind-theme.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={};options.insert="head",options.singleton=!1,api(content,options),module.exports=content.locals||{}}}]);
//# sourceMappingURL=8800.faf31b4b.iframe.bundle.js.map