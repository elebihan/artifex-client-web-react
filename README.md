# Artifex - Web client (using React)

This is a web application client to interact with an [Artifex][artifex] server
over gPRC, using [React][react] framework.

# Setup

This project uses [Node.js][nodejs] as its build system. Install the LTS version
matching your system as explained on the website.

Then, install [Yarn][yarn], the package manager:

```sh
npm -g yarn
```

Finally install the project's dependencies:

```sh
yarn install
```

# Build

To build and serve the application using a local server, execute:

```sh
yarn run dev
```

To build the application, execute:

```sh
yarn run build
```

The files to serve will be available in the ``dist`` directory.

# License

Copyright (c) 2024 Eric Le Bihan

This program is distributed under the terms of the MIT License.

See the [LICENSE](LICENSE) file for license details.

[artifex]: https://github.com/elebihan/artifex
[nodejs]: https://nodejs.org/
[react]: https://react.dev/
[yarn]: https://yarnpkg.com/
