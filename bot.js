const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "$";






client.on('message', async message => {
  if(message.content.startsWith(prefix + "تقديم")) {
    await message.channel.send("**:writing_hand: ماهي المده التي تدخل فيها الدسكورد (كل يوم ,كل يومين . كل سبوع)و **").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.edit(`**مده استعمالك للدسكورد**`)
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        e.edit(`**معك مايك ؟**`)
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()
e.edit("**جاري التقديم علي طلبك...**").then(b => {
        setTimeout(() => {
  b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت**`)
        },2000);
var gg = message.guild.channels.find('name', 'التقديمات')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setDescription(`**المده التي يدخل فيها الدسكورد : \n ${lan}\n مده دخولك للدسكورد :\n ${md} \n معه مايك ؟ :\n ${br}  **`)  
          .setFooter(`Codes.`)
.setTimestamp()
});
}        
})
})
})
})
})
}




  client.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  let acRoom = client.channels.get('470661995255955477');
  if(message.content.startsWith(prefix + "قبول")) {
    if(message.guild.id !== '455577214348427264') return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن شخص');
    if(!role) return message.reply('ادخل اسم رتبة');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');

    mention.addRole(mySupport).then(() => {
      acRoom.send(`**[ ${mySupport} ] واعطائك رتبة ${mention} تم بنجاح قبولك**`);
    });
  }
});



  client.on('message',async message => {
  let mention = message.mentions.members.first();
  let acRoom = client.channels.get('470661995255955477');
  if(message.content.startsWith(prefix + "رفض")) {
  if(message.guild.id !== '455577214348427264') return;
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");

  acRoom.send(`**${mention} تم رفضك للاسف**`)
  }
});
;})







const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




client.on('message', message => {
    if (message.content.startsWith(prefix + "help-js")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **#help-js-admin** ' ,' **قسم اكواد الاداريه** ')
.addField('     **#help-js-source**  ' ,' **قسم اكواد السورس الاساسي** ')
.addField('     **#help-js-general** ' , '**قسم اكواد العامة**')
.addField('     **#help-js-welcome** ' , '**قسم اكواد الترحيب**')
.addField('     **#help-js-help** ' ,' ** قسم اكواد الهلب**')
.addField('     ** #help-js-bc** ' , '**قسم اكواد البرودكاست**')
.setColor('RANDOM')
message.channel.sendEmbed(embed);
}
});



client.on('message', message => {
    if (message.content.startsWith(prefix + "help-js-admin")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **#help-js-admin-1 ** ' ,' **كود الباند** ')
.addField('     **#help-js-admin-2 **  ' ,' **كود الكيك** ')
.addField('     **#help-js-admin-3 ** ' , '**كود مسح الشات وشبيه بالبروبوت**')
.addField('     **#help-js-admin-4** ' , '**كود تقفيل وفتح الشات**')
.addField('     **#help-js-admin-5** ' , '**كود لانشاء شات كتابي**')
.addField('     **#help-js-admin-6** ' , '**كود انشاء روم صوتي**')
.addField('     **#help-js-admin-7** ' , '**invite : كود دعوه البوت مثال**')
.addField('     **#help-js-admin-8** ' , '**كود رابط يرسله خاص ل 100شخص لمدة 24 ساعه**')
.addField('     **#help-js-admin-9** ' , '**كود مسح الشات بالرياكشن**')
.setColor('RANDOM')
message.channel.sendEmbed(embed);


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-1") {
		 message.channel.send('**تم ارسال الكود في الخاص**');





 message.author.sendMessage(`
 **
 كود الباند
 https://hastebin.com/ixajoliwox.php
`);

    }
});}})


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-2") {
		 message.channel.send('**تم ارسال الكود في الخاص**');





 message.author.sendMessage(`
 **
كود الكيك
 https://hastebin.com/eyiheyinij.php

`);

    }
});







client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-3") {
		 message.channel.send('**تم ارسال الكود في الخاص**');







 message.author.sendMessage(`
 **
 كود مسح الشات وشبيه بالبروبوت
 https://hastebin.com/yexayotebu.coffeescript

`);

    }
});




client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-4") {
		 message.channel.send('**تم ارسال الكود في الخاص**');





 message.author.sendMessage(`
 **
كود تقفيل الشات وفتح الشات
 https://hastebin.com/romomoxafi.coffeescript

`);

    }
});




client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-5") {
		 message.channel.send('**تم ارسال الكود في الخاص**');





 message.author.sendMessage(`
 **
كود انشاء شات كتابي
 https://hastebin.com/ahitavadaj.go


`);

    }
});



client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-6") {
		 message.channel.send('**تم ارسال الكود في الخاص**');





 message.author.sendMessage(`
 **
كود انشاء روم صوتي
 https://hastebin.com/ocaxixoduw.go

`);

    }
});





client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-7") {
		 message.channel.send('**تم ارسال الكود في الخاص**');





 message.author.sendMessage(`
 **
كود لاضافه البوت
 https://hastebin.com/fonakilepe.php

`);

    }
});



client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-8") {
		 message.channel.send('**تم ارسال الكود في الخاص**');





 message.author.sendMessage(`
 **
كود رابط يرسله خاص ل 100شخص لمدة 24 ساعه
https://hastebin.com/tebizoruru.php

`);

    }
});




client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-9") {
		 message.channel.send('**تم ارسال الكود في الخاص**');




 message.author.sendMessage(`
 **
كود مسح الشات بالرياكشن
https://hastebin.com/nacegagoza.coffeescript

`);

    }
});



client.on('message', message => {
    if (message.content.startsWith(prefix + "help-js-source")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **#help-js-source-1 ** ' ,' **السورس الاساسي** ')
.addField('     **#help-js-source-2 **  ' ,' **السورس الاساسي مع الستريمنق ومعلومات البوت** ')
.setColor('RANDOM')
message.channel.sendEmbed(embed);




    }})




client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-1") {
		 message.channel.send('**تم ارسال الكود في الخاص**');





 message.author.sendMessage(`
 **
السورس الاساسي
 https://hastebin.com/gehajebafi.coffeescript




`);

    }
});






client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-2") {
		 message.channel.send('**تم ارسال الكود في الخاص**');





 message.author.sendMessage(`
 **
 السورس الأساسي مع الستريمنق ومعلومات البوت
 https://hastebin.com/junudobano.coffeescript




`);

    }
});



client.on('message', message => {
    if (message.content.startsWith(prefix + "help-js-general")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **#help-js-general-1 ** ' ,' **كود البنق** ')
.addField('     **#help-js-general-2 **  ' ,' **كود القرعه** ')
.addField('     **#help-js-general-3 ** ' , '**كود الافتار**')
.addField('     **#help-js-general-4** ' , '**كود معلومات السيرفر**')
.addField('     **#help-js-general-5** ' , '**كود معلومات الشخصيه**')
.addField('     **#help-js-general-6** ' , '**كود كت تويت**')
.addField('     **#help-js-general-7** ' , '**كود صراحه**')
.addField('     **#help-js-general-8** ' , '**كود لبلاي وستريمينق واتشنق في كودواحد**')
.addField('     **#help-js-general-9** ' , '**كود فورت نايت**')
message.channel.sendEmbed(embed);




    }})


    client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-general-1") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     كود البنق
     https://hastebin.com/cibopaduxo.coffeescript

    `);

        }
    });


    client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-general-2") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     كود القرعة
     https://hastebin.com/qunobubuji.js

    `);

        }
    });


    client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-general-3") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     كود الافاتار
     https://hastebin.com/wopigecazo.js

    `);

        }
    });


    client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-general-4") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     كود معلومات السيرفر
     https://hastebin.com/xajaregari.js

    `);

        }
    });


   client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-general-5") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     كود المعلومات الشخصية
     https://hastebin.com/vitodewesa.js

    `);

        }
    });


  client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-general-6") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     كود كت تويت
     https://hastebin.com/ocavoviwag.go

    `);

        }
    });


    client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-general-7") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     كود صراحه
     https://hastebin.com/ubafamovuh.coffeescript

    `);

        }
    });

        client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-general-8") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
    كود واتشنق وستريمنق وبلاينق في كود واحد!
    لازم تحط اليوزر ايدي و البيرفكس
     https://hastebin.com/wodupufilu.js
    `);

        }
    });



        client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-general-9") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
          كود معلومات الاعب في فورت نايت
     https://hastebin.com/giwevehoqo.cs

    `);

        }
    });



    client.on('message', message => {
        if (message.content.startsWith(prefix + "help-js-welcome")) {
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField('     **#help-js-welcome-1 ** ' ,' **كود ترحيب مع ذكر رقم عضو** ')
    .addField('     **#help-js-welcome-2 **  ' ,' **كود ترحيب مع صوره** ')
    .addField('     **#help-js-welcome-3 ** ' , '**كود مغادره العضو**')
    .setColor('RANDOM')
    message.channel.sendEmbed(embed);






        }})



        client.on('message', message => {
            if (message.author.bot) return;
             if (message.content === prefix + "help-js-welcome-1") {
                 message.channel.send('**تم ارسال الكود في الخاص**');





         message.author.sendMessage(`
         **
         كود ترحيب مع ذكر رقم العضو
         https://hastebin.com/zapuyexive.js

        `);

            }
        });

        client.on('message', message => {
            if (message.author.bot) return;
             if (message.content === prefix + "help-js-welcome-2") {
                 message.channel.send('**م ارسال الكود في الخاص**');





         message.author.sendMessage(`
         **
         كود الترحيب مع صورة
         https://hastebin.com/tujehubuqo.php

        `);

            }
        });


        client.on('message', message => {
            if (message.author.bot) return;
             if (message.content === prefix + "help-js-welcome-3") {
                 message.channel.send('**تم ارسال الكود في الخاص**');





         message.author.sendMessage(`
         **
         كود مغادرة العضو
         https://hastebin.com/gufimedaca.js

        `);

            }
        });

        client.on('message', message => {
            if (message.content.startsWith(prefix + "help-js-help")) {
        let embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .addField('     **#help-js-help-1 ** ' ,' **كود هلب مع امبد يرسل بنفس الشات** ')
        .addField('     **#help-js-help-2 **  ' ,' **كود هلب مزخرف بدون امبد ويرسل عالخاص** ')
        .setColor('RANDOM')
        message.channel.sendEmbed(embed);

            }})




        client.on('message', message => {
            if (message.author.bot) return;
             if (message.content === prefix + "help-js-help-1") {
                 message.channel.send('**تم ارسال الكود في الخاص**');





         message.author.sendMessage(`
         **
         كود هلب مع امبد يرسل بنفس الشات
         https://hastebin.com/cikeyoguqa.cs

        `);

            }
        });


        client.on('message', message => {
            if (message.author.bot) return;
             if (message.content === prefix + "help-js-help-2") {
                 message.channel.send('**تم ارسال الكود في الخاص**');





         message.author.sendMessage(`
         **
         كود هلب مزخرف بدون امبد ويرسل عالخاص
         https://hastebin.com/eroxisamuk.vbs

        `);

            }
        });

        client.on('message', message => {
            if (message.content.startsWith(prefix + "help-js-bc")) {
        let embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .addField('     **#help-js-bc-1 ** ' ,' ** برودكاست + للكل + مطور** ')
        .addField('     **#help-js-bc-2 **  ' ,' **برودكاست + للكل + غير مطور ** ')
        .addField('     **#help-js-bc-3 ** ' , '**برودكاست + للاونلاين + مع منشن + غير مطور**')
        .addField('     **#help-js-bc-4** ' , '**برودكاست + للكل + مع منشن + غير مطور**')
        .addField('     **#help-js-bc-5** ' , '**برودكاست + للكل + مع منشن + مطور+ رياكشن**')
        .setColor('RANDOM')
        message.channel.sendEmbed(embed);



    }})




    client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-bc-1") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     برودكاست + للكل + مطور
     https://hastebin.com/bipanureqa.js

    `);

        }
    });


    client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-bc-2") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     برودكاست + للكل + غير مطور
     https://hastebin.com/kuvoruzowe.cs

    `);

        }
    });


    client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-bc-3") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     برودكاست + للأونلاين + مع منشن + غير مطور
     https://hastebin.com/zujuvupali.php

    `);

        }
    });

    client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-bc-4") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     برودكاست + للكل + مع منشن + غير مطور
     https://hastebin.com/zojokunayo.php

    `);

        }
    });



     client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-bc-5") {
             message.channel.send('**تم ارسال الكود في الخاص**');


         message.author.sendMessage(`
     **
     بربرودكاست + للكل + مع منشن + مطور+ رياكشن
     https://hastebin.com/zuzezekema.coffeescript

    `);

        }
    });



    const devs = ['429972030092476437' , '' , '' , ''];
const adminprefix = "#";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;

  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
  });

client.login('NDYyNjE3NDE5MTUyNzUyNjQx.DhkdmA.zDnkxioefP01lev76pMBrR7cEzQ');









client.login(process.env.BOT_TOKEN)
