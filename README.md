# xi4n-slmbr
It's a joke.

However if you do want to run it you need to install and run [xi4n](https://github.com/theangryangel/XI4N).

## Installing and Running
  - Download, install and create a basic setup of the latest experimental version of xi4n from git (see [xi4n installation documentation](https://github.com/theangryangel/XI4N/blob/master/docs/installing.md)).
  - Download and extract xi4n-slmbr into plugins/slmbr
  - Add `"slmbr" : { "path": "slmbr", "options": {} }` to config.json, under
    the top most "plugins" (example config below)
  - Add a client, and add "slmbr" to the client's plugins (example config below)

## Example xi4n config
`{
	"xi4n": ">=0.0.4",
	"logger": {
		"level": "crit",
		"stream": "stdout" 
	},
	"plugins": {
		"pong": {
			"path": "pong",
			"options": { }
		},
		"state": {
			"path": "state",
			"options": {}
		},
		"slmbr" :
		{
			"path": "slmbr",
			"options": {}
		}
	},

	// an array of "clients", or insim connections
	"clients": [
		{
			"name": "localhost", 
			"host": "127.0.0.1", 
			"port": 29998, 
			"reconnect": 4, 
			"reconnectcooldown": 5,
			"maxbacklog": 2048, 

			"plugins": [ "pong", "state", "slmbr" ]
		}
	]
}`
