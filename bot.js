const Discord = require('discord.js');

const fs = require('fs')

const client = new Discord.Client();

                    

const prefix = '';

client.on('ready', () => {

  
    console.log(`Logged in as [ Pharaohs]`);

});

















































client.on('message', message => {
    if (message.content === 'بووم') {
          let count = 1;
          let ecount = 1;
          for(let x = 1; x < 99999; x++) {
            message.channel.send(`**كسمك يا ابن المتناكة عل كسمكم الي هيا الشرموطة بتاعتي نايكم اانا يسعودين يمتانيك وربي مصر نايككم يبتوع الكبسة انتم احنا نايكنكم مش احنا طعمية انتم كبسة كسمكم يا ولاد المرة المنيوكة خاضعنكم احنا يا ولادا العرص نايكنكم سبام يامتانيك احلا نيكة يا ولاد العرص روحو ومتجوش تاني تمام المعلم عليكم @! -,@.₄₅# @here 
$%@#%^%%&#^%@^$#$%&$%^#@#%&%%@#%&&&&&&&&%$^*#^%#^$#$^$&%*$*%^$%$^#%%%&%^**%^%(%(%*(^&%&%$&%^*%%^*%&#$^#^$*%#^&**`)
              .then(m => {
                count++;
              })
              
            }
          }
    });








client.login(process.env.BOT_TOKEN);
