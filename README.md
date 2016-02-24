# React-Truncate-Text [![npm version](https://badge.fury.io/js/react-text-truncate.svg)](https://badge.fury.io/js/react-text-truncate)

## Install

```
npm install react-text-truncate
```

## Usage

```
import TextTruncate from 'react-text-truncate'; // recommend
var TextTruncate = require('react-text-truncate'); // CommonJS or UMD
```

## Markup

```
<TextTruncate
	line={1}
	truncateText="…"
	text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
	showTitle={true} />
```

[Demo](http://shinychang.github.io/React-Text-Truncate/)


## Changelog
* 0.3.6 Support CommonJS and UMD module loader
* 0.3.5 Fix window resize issue
* 0.3.4 supports Babel6
* 0.2.0 supoorts React 0.14
* 0.1.5 supports React 0.13.3 and below
