// Keep track of the week 1 records here so we can adjust our week 2 records.
// Keeping track of specfic outcomes will help us figure out tie breakers.

// TODO: Could possibly pull this from a Riot website automatically, so no one
//       has to hardcode this
const Week1Records = {
	// Group A
	"AHQ": {
		"wins": [ "EDG" ],
		"losses": [ "C9", "SKT" ]
	},
	"C9": {
		"wins": [ "AHQ", "EDG" ],
		"losses": [ "SKT" ]
	},
	"EDG": {
		"wins": [],
		"losses": [ "AHQ", "SKT", "C9" ]
	},
	"SKT": {
		"wins": [ "C9", "EDG", "AHQ" ],
		"losses": []
	},
	// Group B
	"FNC": {
		"wins": [],
		"losses": [ "GAM", "IMT", "LZ" ]
	},
	"GAM": {
		"wins": [ "FNC" ],
		"losses": [ "LZ", "IMT" ]
	},
	"LZ": {
		"wins": [ "IMT", "GAM", "FNC" ],
		"losses": []
	},
	"IMT": {
		"wins": [ "FNC", "GAM" ],
		"losses": [ "LZ" ]
	},
	// Group C
	"1907": {
		"wins": [],
		"losses": [ "RNG", "G2", "SSG" ]
	},
	"G2": {
		"wins": [ "1907" ],
		"losses": [ "SSG", "RNG" ]
	},
	"RNG": {
		"wins": [ "1907", "SSG", "G2" ],
		"losses": []
	},
	"SSG": {
		"wins": [ "G2", "1907" ],
		"losses": [ "RNG" ]
	},
	// Group D
	"FW": {
		"wins": [],
		"losses": [ "TSM", "MSF", "WE" ]
	},
	"MSF": {
		"wins": [ "FW", "TSM" ],
		"losses": [ "WE" ]
	},
	"TSM": {
		"wins": [ "FW", "WE" ],
		"losses": [ "MSF" ]
	},
	"WE": {
		"wins": [ "MSF", "FW" ],
		"losses": [ "TSM" ]
	}
};

export default Week1Records;