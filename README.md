# react-tooltip-advance

[download-url]: https://www.npmjs.com/package/react-tooltip-advance

[![npm download]][download-url]

- ReactTooltip is developed to provide custom tooltip be it simple text or html content.

If you like the project, please give the project a GitHub 🌟

## Installation

```sh
npm install react-tooltip-advance
```

or

```sh
yarn add react-tooltip-advance
```

## Usage

### Using NPM

1 . Require react-tooltip-advance after installation

```js
import { ReactTooltip as Tooltip } from "react-tooltip-advance";
```

2 . Add `<Tooltip />` component with displayContent and tooltipContent values provided

```jsx
<Tooltip displayContent="Hello text" tooltipContent="hello tooltip" />
```

If you need graphic based tooltip then you can create a presentational component similar to one shown below.

```jsx
const ImageContent = (
  <img
    src="https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ="
    width="200"
    role="presentation"
  />
);

const renderContent = (type) => {
  // your display content with html support
  if (type === "displayContent") {
    return ImageContent;
  } else {
    // your tooltip content with html support
    return (
      <>
        {ImageContent}
        <br />
        Hello World!
      </>
    );
  }
};

<ReactTooltip render={renderContent} />;
```

3 . Internally it generated paragraph and span elements as shown below, do not worry about events and refs. Its needed purely for tooltip to function in a right way.

```jsx
<div className="react-tooltip-container">
  <p className="text-container">
    <span>{displayContent}</span>
  </p>
  <span className="tooltip-container">{tooltipContent}</span>
</div>
```
