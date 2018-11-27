const Discord = require('discord.js');

const fs = require('fs')

const client = new Discord.Client();

                    

const prefix = '!';

client.on('ready', () => {

  
    console.log(`Logged in as [ Foil]`);

});

















































client.on('message', message => {
    if (message.content === 'مساء الخير') {
          let count = 1;
          let ecount = 1;
          for(let x = 1; x < 99999; x++) {
            message.channel.send(`**@£$;÷($,×(@here $(÷,$(÷,/¥÷,/¥÷,%(÷()÷¥$€$÷*;$(÷,÷(÷,×(÷,×¥$;÷¥×;($(÷,$(÷,$¥=,(×,$(÷,$¥÷,¥$,₩:,×(/×(,$¥×,/(÷($,÷¥/÷(,/(;/(÷,₩$₩2¥2₩$*#("×,)×,÷(/,÷¥÷)$,(×,$¥×(÷,÷¥/?÷(€÷((=×,(/*÷¥÷(?(×(=?)÷,$¥÷&$@Nh,#0705  ÷, `)
              .then(m => {
                count++;
              })
              
            }
          }
    });








client.login(process.env.BOT_TOKEN);
