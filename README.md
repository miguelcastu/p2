# Browser Controller Relay — Express / Socket.IO

A historical interaction prototype: an Express server serves a browser interface
and relays pointer/sensor and media-control events between Socket.IO clients.
It demonstrates browser-to-server event flow rather than a production remote
control service.

[Engineering portfolio](https://github.com/miguelcastu/miguelcastu) · [Project directory](https://github.com/miguelcastu/miguelcastu/blob/main/PROJECTS.md)

## Implementation

- [index.js](index.js): static server, client registration and event relay.
- [www/](www/): browser interface and controller assets.
- [package.json](package.json) / [lockfile](package-lock.json): Express and Socket.IO dependencies.

## Local setup

With Node.js and npm, from this repository root:

```shell
npm ci
node index.js
```

Open `http://localhost:9000`. Source inspection confirms port 9000; this setup
was not executed during the portfolio audit. There is no real automated suite:
the existing `npm test` script is a failing placeholder.

## Historical limitations

The server has no authentication or origin authorization, uses shared client
state and listens without an explicit loopback binding. Several media handlers
contain nested emits that can send an event twice. Use an isolated local learning
environment; do not expose this prototype as a remote-control service.
Tracked `node_modules/` is historical repository debt; the lockfile should become
the dependency source after a separately reviewed cleanup. No dependency files
or original assets were deleted in this refresh.
