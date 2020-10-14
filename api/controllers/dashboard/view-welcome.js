module.exports = {


  friendlyName: 'View welcome page',


  description: 'Display the dashboard "Welcome" page.',

  inputs: {
      color: {
        description: 'The color of the light',
        // By declaring a numeric example, Sails will automatically respond with `res.badRequest`
        // if the `userId` parameter is not a number.
        type: 'string',
        // By making the `userId` parameter required, Sails will automatically respond with
        // `res.badRequest` if it's left out.
        required: false
      }
   },


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/welcome',
      description: 'Display the welcome page for authenticated users.'
    },

  },


  fn: async function ({color}) {

    /*test*/
    let huejay = require('huejay');

    let client = new huejay.Client({
      host:     '192.168.0.100',
      port:     80,               // Optional
      username: 'pO6R1HIV21MpGGzoBHHJ3GYoQIVEOC818Abp2Ayj', // Optional
      timeout:  15000,            // Optional, timeout in milliseconds (15000 is the default)
    });

    var newcolor;

    // pink 60000
    // green 30000
    // blue 40000
    // purple 50000
    // orange 5000
    // yellow 10000

    switch(color) {
      case 'pink':
        newcolor = 60000;
        break;
      case 'green':
        newcolor = 30000;
        break;
      case 'blue':
        newcolor = 40000;
        break;
      case 'purple':
        newcolor = 50000;
        break;
      case 'orange':
        newcolor = 5000;
        break;
      case 'yellow':
        newcolor = 10000;
        break;
      default:
        // code block
    }
    console.log(color);
    console.log(newcolor);
    

    if (newcolor != null){
      client.lights.getById(8)
      .then(light => {

        light.brightness = 25;
        light.hue        = newcolor;
        light.saturation = 254;

        return client.lights.save(light);
      })
      .then(light => {
        console.log(`Updated light [${light.id}]`);
      })
      .catch(error => {
        console.log('Something went wrong');
        console.log(error.stack);
      });
    }

    return {};



  }


};
