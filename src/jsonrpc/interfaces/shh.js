import { Data, Quantity } from '../types';

export default {
  version: {
    desc: 'Returns the current whisper protocol version.',
    params: [],
    returns: {
      type: String,
      desc: 'The current whisper protocol version'
    }
  },

  post: {
    desc: 'Sends a whisper message.',
    params: [
      {
        type: Object, desc: 'The whisper post object:', format: 'inputPostFormatter',
        details: {
          from: {
            type: Data, desc: '60 Bytes - The identity of the sender',
            optional: true
          },
          to: {
            type: Data, desc: '60 Bytes - The identity of the receiver. When present whisper will encrypt the message so that only the receiver can decrypt it',
            optional: true
          },
          topics: {
            type: Array, desc: 'Array of `DATA` topics, for the receiver to identify messages'
          },
          payload: {
            type: Data, desc: 'The payload of the message'
          },
          priority: {
            type: Quantity, desc: 'The integer of the priority in a rang from ... (?)'
          },
          ttl: {
            type: Quantity, desc: 'Integer of the time to live in seconds.'
          }
        }
      }
    ],
    returns: {
      type: Boolean,
      desc: '`true` if the message was send, otherwise `false`'
    }
  },

  newIdentity: {
    desc: 'Creates new whisper identity in the client.',
    params: [],
    returns: {
      type: Data,
      desc: '60 Bytes - the address of the new identiy'
    }
  },

  hasIdentity: {
    desc: 'Checks if the client hold the private keys for a given identity.',
    params: [
      {
        type: Data,
        desc: '60 Bytes - The identity address to check'
      }
    ],
    returns: {
      type: Boolean,
      desc: '`true` if the client holds the privatekey for that identity, otherwise `false`'
    }
  },

  newGroup: {
    desc: '(?)',
    params: [],
    returns: {
      type: Data, desc: '60 Bytes - the address of the new group. (?)'
    }
  },

  addToGroup: {
    desc: '(?)',
    params: [
      {
        type: Data,
        desc: '60 Bytes - The identity address to add to a group (?)'
      }
    ],
    returns: {
      type: Boolean,
      desc: '`true` if the identity was successfully added to the group, otherwise `false` (?)'
    }
  },

  newFilter: {
    desc: 'Creates filter to notify, when client receives whisper message matching the filter options.',
    params: [
      {
        type: Object, desc: 'The filter options:',
        details: {
          to: {
            type: Data, desc: '60 Bytes - Identity of the receiver. *When present it will try to decrypt any incoming message if the client holds the private key to this identity.*',
            optional: true
          },
          topics: {
            type: Array, desc: 'Array of `DATA` topics which the incoming message\'s topics should match.  You can use the following combinations'
          }
        }
      }
    ],
    returns: {
      type: Quantity,
      desc: 'The newly created filter'
    }
  },

  uninstallFilter: {
    desc: 'Uninstalls a filter with given id. Should always be called when watch is no longer needed.\nAdditonally Filters timeout when they aren\'t requested with [shh_getFilterChanges](#shh_getfilterchanges) for a period of time.',
    params: [
      {
        type: Quantity,
        desc: 'The filter id'
      }
    ],
    returns: {
      type: Boolean,
      desc: '`true` if the filter was successfully uninstalled, otherwise `false`'
    }
  },

  getFilterChanges: {
    desc: 'Polling method for whisper filters. Returns new messages since the last call of this method.\n**Note** calling the [shh_getMessages](#shh_getmessages) method, will reset the buffer for this method, so that you won\'t receive duplicate messages.',
    params: [
      {
        type: Quantity,
        desc: 'The filter id'
      }
    ],
    returns: {
      type: Array,
      desc: 'Array of messages received since last poll'
    }
  },

  getMessages: {
    desc: 'Get all messages matching a filter. Unlike `shh_getFilterChanges` this returns all messages.',
    params: [
      {
        type: Quantity,
        desc: 'The filter id'
      }
    ],
    returns: 'See [shh_getFilterChanges](#shh_getfilterchanges)'
  }
};
