module.exports = {


  friendlyName: 'Update lamp',


  description: 'Update the lamp options for logged-in user.',


  inputs: {

      bridgeHost: {
        type: 'string'
      },

      bridgeUsername: {
        type: 'string'
      },

      lightID: {
        type: 'string'
      },

   },


  exits: {

    /*success: {
      viewTemplatePath: 'pages/account/edit-lamp',
    }*/

  },


  fn: async function (inputs) {
/*
    let huejay = require('huejay');

    let client = new huejay.Client({
      host:     '192.168.0.100', //192.168.0.111
      port:     80,               // Optional
      username: 'pO6R1HIV21MpGGzoBHHJ3GYoQIVEOC818Abp2Ayj', // Optional
      timeout:  15000,            // Optional, timeout in milliseconds (15000 is the default)
    });
  

    // this should be in a sync controller or page ? Then save and go back to page ? 
    huejay.discover()
    .then(bridges => {
      for (let bridge of bridges) {
        console.log(`Id: ${bridge.id}, IP: ${bridge.ip}`);
        bridgeHost = `${bridge.ip}`;
      }
    })
    .catch(error => {
      console.log(`An error occurred: ${error.message}`);
    });

    // Only have to do it the first time we sync ? 
    // Should had a save button... Ohh, maybe we can choose from the list of all the lights ? 

    client.lights.getNew()
    .then(lights => {
      console.log('Found new lights:');
      for (let light of lights) {
        console.log(`Light [${light.id}]:`);
        console.log('  Unique Id:', light.uniqueId);
        console.log('  Model:',     light.model.name);
        console.log('  Reachable:', light.reachable);
      }
    });
*/

console.log("patate");

    // Start building the values to set in the db.
    var valuesToSet = {
      bridgeHost: inputs.bridgeHost,
      bridgeUsername: inputs.bridgeUsername,
      lightID: inputs.lightID,
    };

    // Save to the db
    await User.updateOne({id: this.req.me.id })
    .set(valuesToSet);

    //return {};

  }

};

