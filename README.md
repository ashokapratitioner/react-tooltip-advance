# react-tooltip-advance

[download-url]: https://npmjs.org/package/react-tooltip

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
import { Tooltip } from 'react-tooltip-advance'
```

```js
import { Tooltip as ReactTooltip } from 'react-tooltip-advance'
```

2 . Add `<Tooltip />` component with displayText and tooltipText values provided

```jsx
<Tooltip displayText="Hello text" tooltipText="hello tooltip" />
```

3 . Internally it generated paragraph element and span element as shown below, do not worry about events and refs. Its needed purely for tooltip to function in a right way. 

```jsx
    <div className="react-tooltip-container">
      <p
        className="text-container"
        ref={paraRef}
        onMouseOver={handleMouseOver}
      >
        {displayText}
      </p>
      <span className="tooltip-container" ref={tooltipRef}>
        {tooltipText}
      </span>
    </div>
```

