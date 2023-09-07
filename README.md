## Hospital_api
NodeJs Skill Test


-- Tech Stacks-Node.js,Bcrypt,MongoDb,JsonWebToken,PassPort Jwt


## Routes
1 Register Doctor
2.Registre Patient
3.Get All Report
4.Get Single Report
5.Get Status of Patient


  ![image](/hospital_snap.jpg)

``` bash ```
├───config
├───controllers
├───models
├───node_modules
│   ├───.bin
│   ├───@types
│   │   ├───node
│   │   │   ├───assert
│   │   │   ├───dns
│   │   │   ├───fs
│   │   │   ├───readline
│   │   │   ├───stream
│   │   │   ├───timers
│   │   │   └───ts4.8
│   │   │       ├───assert
│   │   │       ├───dns
│   │   │       ├───fs
│   │   │       ├───readline
│   │   │       ├───stream
│   │   │       └───timers
│   │   ├───webidl-conversions
│   │   └───whatwg-url
│   │       └───dist
│   ├───abbrev
│   ├───accepts
│   ├───anymatch
│   ├───array-flatten
│   ├───balanced-match
│   │   └───.github
│   ├───binary-extensions
│   ├───body-parser
│   │   └───lib
│   │       └───types
│   ├───brace-expansion
│   ├───braces
│   │   └───lib
│   ├───bson
│   │   ├───etc
│   │   ├───lib
│   │   ├───src
│   │   │   ├───parser
│   │   │   └───utils
│   │   └───vendor
│   │       ├───base64
│   │       └───text-encoding
│   │           └───lib
│   ├───buffer-equal-constant-time
│   ├───bytes
│   ├───call-bind
│   │   ├───.github
│   │   └───test
│   ├───chokidar
│   │   ├───lib
│   │   └───types
│   ├───concat-map
│   │   ├───example
│   │   └───test
│   ├───content-disposition
│   ├───content-type
│   ├───cookie
│   ├───cookie-signature
│   ├───debug
│   │   └───src
│   ├───depd
│   │   └───lib
│   │       └───browser
│   ├───destroy
│   ├───ecdsa-sig-formatter
│   │   └───src
│   ├───ee-first
│   ├───encodeurl
│   ├───escape-html
│   ├───etag
│   ├───express
│   │   ├───lib
│   │   │   ├───middleware
│   │   │   └───router
│   │   └───node_modules
│   │       ├───body-parser
│   │       │   └───lib
│   │       │       └───types
│   │       └───raw-body
│   ├───fill-range
│   ├───finalhandler
│   ├───forwarded
│   ├───fresh
│   ├───function-bind
│   │   └───test
│   ├───get-intrinsic
│   │   ├───.github
│   │   └───test
│   ├───glob-parent
│   ├───has
│   │   ├───src
│   │   └───test
│   ├───has-flag
│   ├───has-proto
│   │   ├───.github
│   │   └───test
│   ├───has-symbols
│   │   ├───.github
│   │   └───test
│   │       └───shams
│   ├───http-errors
│   ├───iconv-lite
│   │   ├───encodings
│   │   │   └───tables
│   │   └───lib
│   ├───ignore-by-default
│   ├───inherits
│   ├───ip
│   │   └───lib
│   ├───ipaddr.js
│   │   └───lib
│   ├───is-binary-path
│   ├───is-extglob
│   ├───is-glob
│   ├───is-number
│   ├───jsonwebtoken
│   │   ├───lib
│   │   └───node_modules
│   │       └───ms
│   ├───jwa
│   ├───jws
│   │   └───lib
│   ├───kareem
│   ├───lodash.includes
│   ├───lodash.isboolean
│   ├───lodash.isinteger
│   ├───lodash.isnumber
│   ├───lodash.isplainobject
│   ├───lodash.isstring
│   ├───lodash.once
│   ├───lru-cache
│   ├───media-typer
│   ├───memory-pager
│   ├───merge-descriptors
│   ├───methods
│   ├───mime
│   │   └───src
│   ├───mime-db
│   ├───mime-types
│   ├───minimatch
│   ├───mongodb
│   │   ├───etc
│   │   ├───lib
│   │   │   ├───bulk
│   │   │   ├───cmap
│   │   │   │   ├───auth
│   │   │   │   │   └───mongodb_oidc
│   │   │   │   ├───handshake
│   │   │   │   └───wire_protocol
│   │   │   ├───cursor
│   │   │   ├───gridfs
│   │   │   ├───operations
│   │   │   │   └───search_indexes
│   │   │   └───sdam
│   │   └───src
│   │       ├───bulk
│   │       ├───cmap
│   │       │   ├───auth
│   │       │   │   └───mongodb_oidc
│   │       │   ├───handshake
│   │       │   └───wire_protocol
│   │       ├───cursor
│   │       ├───gridfs
│   │       ├───operations
│   │       │   └───search_indexes
│   │       └───sdam
│   ├───mongodb-connection-string-url
│   │   └───lib
│   ├───mongoose
│   │   ├───dist
│   │   ├───lib
│   │   │   ├───cast
│   │   │   ├───cursor
│   │   │   ├───drivers
│   │   │   │   ├───browser
│   │   │   │   └───node-mongodb-native
│   │   │   ├───error
│   │   │   ├───helpers
│   │   │   │   ├───aggregate
│   │   │   │   ├───cursor
│   │   │   │   ├───discriminator
│   │   │   │   ├───document
│   │   │   │   ├───error
│   │   │   │   ├───indexes
│   │   │   │   ├───model
│   │   │   │   ├───path
│   │   │   │   ├───populate
│   │   │   │   ├───projection
│   │   │   │   ├───query
│   │   │   │   ├───schema
│   │   │   │   ├───schematype
│   │   │   │   ├───timestamps
│   │   │   │   ├───topology
│   │   │   │   └───update
│   │   │   ├───options
│   │   │   ├───plugins
│   │   │   ├───schema
│   │   │   │   └───operators
│   │   │   └───types
│   │   │       ├───array
│   │   │       │   └───methods
│   │   │       └───DocumentArray
│   │   │           └───methods
│   │   ├───node_modules
│   │   │   └───ms
│   │   ├───scripts
│   │   ├───tools
│   │   └───types
│   ├───mpath
│   │   ├───lib
│   │   └───test
│   ├───mquery
│   │   ├───.github
│   │   ├───lib
│   │   │   └───collection
│   │   └───node_modules
│   │       ├───debug
│   │       │   └───src
│   │       └───ms
│   ├───ms
│   ├───negotiator
│   │   └───lib
│   ├───nodemon
│   │   ├───bin
│   │   ├───doc
│   │   │   └───cli
│   │   ├───lib
│   │   │   ├───cli
│   │   │   ├───config
│   │   │   ├───help
│   │   │   ├───monitor
│   │   │   ├───rules
│   │   │   └───utils
│   │   └───node_modules
│   │       ├───debug
│   │       │   └───src
│   │       └───ms
│   ├───nopt
│   │   ├───bin
│   │   ├───examples
│   │   └───lib
│   ├───normalize-path
│   ├───object-inspect
│   │   ├───.github
│   │   ├───example
│   │   └───test
│   │       └───browser
│   ├───on-finished
│   ├───parseurl
│   ├───passport
│   │   ├───lib
│   │   │   ├───errors
│   │   │   ├───framework
│   │   │   ├───http
│   │   │   ├───middleware
│   │   │   └───strategies
│   │   └───sponsors
│   ├───passport-jwt
│   │   ├───.github
│   │   │   └───workflows
│   │   ├───docs
│   │   ├───lib
│   │   │   └───helpers
│   │   └───test
│   ├───passport-strategy
│   │   └───lib
│   ├───path-to-regexp
│   ├───pause
│   ├───picomatch
│   │   └───lib
│   ├───proxy-addr
│   ├───pstree.remy
│   │   ├───lib
│   │   └───tests
│   │       └───fixtures
│   ├───punycode
│   ├───qs
│   │   ├───.github
│   │   ├───dist
│   │   ├───lib
│   │   └───test
│   ├───range-parser
│   ├───raw-body
│   ├───readdirp
│   ├───safe-buffer
│   ├───safer-buffer
│   ├───saslprep
│   │   ├───lib
│   │   └───test
│   ├───semver
│   │   ├───bin
│   │   ├───classes
│   │   ├───functions
│   │   ├───internal
│   │   └───ranges
│   ├───send
│   │   └───node_modules
│   │       └───ms
│   ├───serve-static
│   ├───setprototypeof
│   │   └───test
│   ├───side-channel
│   │   ├───.github
│   │   └───test
│   ├───sift
│   │   ├───es
│   │   ├───es5m
│   │   ├───lib
│   │   └───src
│   ├───simple-update-notifier
│   │   ├───build
│   │   └───src
│   ├───smart-buffer
│   │   ├───build
│   │   ├───docs
│   │   └───typings
│   ├───socks
│   │   ├───build
│   │   │   ├───client
│   │   │   └───common
│   │   ├───docs
│   │   │   └───examples
│   │   │       ├───javascript
│   │   │       └───typescript
│   │   └───typings
│   │       ├───client
│   │       └───common
│   ├───sparse-bitfield
│   ├───statuses
│   ├───supports-color
│   ├───to-regex-range
│   ├───toidentifier
│   ├───touch
│   │   └───bin
│   ├───tr46
│   │   └───lib
│   ├───type-is
│   ├───undefsafe
│   │   ├───.github
│   │   │   └───workflows
│   │   └───lib
│   ├───unpipe
│   ├───utils-merge
│   ├───vary
│   ├───webidl-conversions
│   │   └───lib
│   ├───whatwg-url
│   │   └───lib
│   └───yallist
└───routes

``` bash ```
