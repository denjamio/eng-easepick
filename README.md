eng-easepick
===

[![npm version](https://badge.fury.io/js/@eng-easepick%2Fbundle.svg)](https://www.npmjs.com/package/@eng-easepick/bundle)

> **Fork of [easepick](https://github.com/easepick/easepick)** - MIT licensed date picker for modern browsers.

## Why this fork?

The original [easepick](https://github.com/easepick/easepick) repository was archived. While the GitHub repository has been updated to MIT license, the npm packages remain under GPL. This fork provides MIT-licensed packages published to npm.

## Installation

```bash
npm install @eng-easepick/bundle
```

## Usage

```javascript
import { easepick } from '@eng-easepick/bundle';

const picker = new easepick.create({
  element: document.getElementById('datepicker'),
});
```

## Features

- No dependencies
- Uses [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
- Supports plugins

## Packages

| Package | Description |
|---------|-------------|
| [@eng-easepick/bundle](https://www.npmjs.com/package/@eng-easepick/bundle) | All-in-one bundle |
| [@eng-easepick/core](https://www.npmjs.com/package/@eng-easepick/core) | Core functionality |
| [@eng-easepick/datetime](https://www.npmjs.com/package/@eng-easepick/datetime) | DateTime utilities |
| [@eng-easepick/range-plugin](https://www.npmjs.com/package/@eng-easepick/range-plugin) | Date range selection |
| [@eng-easepick/lock-plugin](https://www.npmjs.com/package/@eng-easepick/lock-plugin) | Lock dates |
| [@eng-easepick/time-plugin](https://www.npmjs.com/package/@eng-easepick/time-plugin) | Time selection |
| [@eng-easepick/preset-plugin](https://www.npmjs.com/package/@eng-easepick/preset-plugin) | Preset ranges |
| [@eng-easepick/kbd-plugin](https://www.npmjs.com/package/@eng-easepick/kbd-plugin) | Keyboard navigation |
| [@eng-easepick/amp-plugin](https://www.npmjs.com/package/@eng-easepick/amp-plugin) | AMP support |

## License

MIT - See [LICENSE.md](./LICENSE.md)

## Credits

Original work by [Rinat G.](https://github.com/nicolo) - [easepick](https://github.com/easepick/easepick)

