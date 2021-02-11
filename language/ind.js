exports . wait  =  ( )  =>  {
	return `*「 WAIT 」IN PROCESS *`
}

exports . succes  =  ( )  =>  (
	return `*「 SUCCES 」*`
}

exports . lvlon  =  ( )  =>  (
	return `*「 ENABLE 」LEVELING *`
}

exports . lvloff  =  ( )  =>  (
	return `*「 DISABLE 」LEVELING *`
}

exports . lvlnul  =  ( )  =>  (
	return `* YOUR LEVEL IS STILL EMPTY *`
}

exports . lvlnoon  =  ( )  =>  {
	return `* GRUB LEVEL IS NOT ACTIVATED *`
}

exports . noregis  =  ( )  =>  (
	return `*「 NOT REGISTER 」* \ n \ n * how to register $ { prefix } list name | age * \ n * example $ { prefix } list affis | 17 *`
}

exports . rediregis  =  ( )  =>  {
	return `*「 ALREADY REGISTERED 」* \ n \ n * You are already registered in the bot database *`
}

exports . stikga  =  ( )  =>  (
	return `* yah failed, try again later *`
}

exports . linkga  =  ( )  =>  (
	return `* sorry the link is invalid *`
}

exports . groupo  =  ( )  =>  (
	return `*「 GROUP ONLY 」*`
}

exports . ownerb  =  ( )  =>  (
	return `*「 OWNER BOT ONLY 」*`
}

exports . ownerg  =  ( )  =>  (
	return `*「 OWNER GROUP ONLY 」*`
}

exports . admin  =  ( )  =>  {
	return `*「 ADMIN GROUP ONLY 」*`
}

exports . badmin  =  ( )  =>  (
	return `*「 BOT MUST BE ADMIN 」*`
}

exports . nsfwoff  =  ( )  =>  (
	return `* NSFW OFF *`
}

exports . bug  =  ( )  =>  {
	return `* Problem has been reported to BOT owner, fake / main2 reports will not be responded to *`
}

exports . wrongf  =  ( )  =>  (
	return `* Incorrect format / empty text *`
}

exports . clears  =  ( )  =>  (
	return `* clear all Success *`
}

exports . pc  =  ( )  =>  (
	return `*「 REGISTRATION 」* \ n \ nto find out if you are already registered please check the message I sent \ n \ nNOTE: \ n * if you haven't received a message. means you haven't saved your bot number * `
}

exports . registered  =  ( username ,  user age ,  serialUser ,  time ,  sender )  =>  {
	return `*「 COUNTRY DATA 」* \ n \ nyou are already registered with data \ n \ n┏━⊱name \ n┗⊱ $ { Username } \ n┏━⊱number \ n┗⊱wa.me / $ { sender . split ( "@" ) [ 0 ] } \ n┏━⊱ age \ n┗⊱ $ { User age } \ n┏━⊱ registration time \ n┗⊱ $ { time } \ n \ n┏━❉ * NS * ❉ ━ \ n┣⊱ $ { serialUser } \ n┗⊱NOTE: don't forget this number because it's important: v`
}

exports . cmdnf  =  ( prefix ,  command )  =>  {
	return `command * $ { prefix } $ { command } * not found \ try to write * $ { prefix } menu *`
}

exports . owneresce  =  ( pushname )  =>  {
	return `* sorry but $ { pushname } is not the owner script *`
}

exports . reglevelaha  =  ( command ,  pushname ,  getLevelingLevel ,  sender ,  aha )  =>  (
	return `* Sorry your $ { pushname } level is not sufficient * \ n \ n * ┏⊱your level: $ { getLevelingLevel ( sender ) } * \ n * ┣⊱command type: $ { command } * \ n * ┗⊱ level: $ { aha } * \ n \ n_NOTE: CHAT / ALWAYS ON TO GET XP_`
}

exports . reglevelahb  =  ( command ,  pushname ,  getLevelingLevel ,  sender ,  ahb )  =>  (
	return `* Sorry your $ { pushname } level is not sufficient * \ n \ n * ┏⊱your level: $ { getLevelingLevel ( sender ) } * \ n * ┣⊱command type: $ { command } * \ n * ┗⊱ level: $ { ahb } * \ n \ n_NOTE: CHAT / ALWAYS ON TO GET XP_`
}

exports . reglevelahc  =  ( command ,  pushname ,  getLevelingLevel ,  sender ,  ahc )  =>  (
	return `* Sorry your $ { pushname } level is not sufficient * \ n \ n * ┏⊱your level: $ { getLevelingLevel ( sender ) } * \ n * ┣⊱command type: $ { command } * \ n * ┗⊱ level: $ { ahc } * \ n \ n_NOTE: CHAT / ALWAYS ON TO GET XP_`
}

exports . reglevelahd  =  ( command ,  pushname ,  getLevelingLevel ,  sender ,  ahd )  =>  (
	return `* Sorry your $ { pushname } level is not sufficient * \ n \ n * ┏⊱your level: $ { getLevelingLevel ( sender ) } * \ n * ┣⊱command type: $ { command } * \ n * ┗⊱ level: $ { ahd } * \ n \ n_NOTE: CHAT / ALWAYS ON TO GET XP_`
}

exports . reglevelahe  =  ( command ,  pushname ,  getLevelingLevel ,  sender ,  ahe )  =>  (
	return `* Sorry your $ { pushname } level is not sufficient * \ n \ n * ┏⊱your level: $ { getLevelingLevel ( sender ) } * \ n * ┣⊱command type: $ { command } * \ n * ┗⊱ level: $ { ahe } * \ n \ n_NOTE: CHAT / ALWAYS ON TO GET XP_`
}

exports . reglevelahf  =  ( command ,  pushname ,  getLevelingLevel ,  sender ,  ahf )  =>  (
	return `* Sorry your $ { pushname } level is not sufficient * \ n \ n * ┏⊱your level: $ { getLevelingLevel ( sender ) } * \ n * ┣⊱command type: $ { command } * \ n * ┗⊱ level: $ { ahf } * \ n \ n_NOTE: CHAT / ALWAYS ON TO GET XP_`
}

exports . menu  =  ( pushname ,  prefix ,  getLevelingLevel ,  getLevelingXp ,  sender ,  reqXp ,  _registered ,  my money ,  role )  =>  { 
	return  `
┏━━━⊱  *ABOUT USER*  ⊰━━┓
┣⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Uang mu* : Rp${uangku}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp} 
┣⊱ *Level* : ${getLevelingLevel(sender)}
┣⊱ *User register* : ${_registered.length}
┗━━━⊱  ⸨ *AFFIS* ⸩  ⊰━━━━┛

 *${prefix}info*
 *${prefix}donasi*
 *${prefix}owner*

┏━━⊱ *MAKER MENU* ⊰━━┓
┣⊱ *${prefix}sticker* 
┣⊱ *${prefix}quotemaker* <text|author>
┣⊱ *${prefix}qrcode* <text>
┣⊱ *${prefix}ttp*
┣⊱ *${prefix}stickerhide* <text>
┣⊱ *${prefix}emoji*
┣━━⊱  *FUN MENU*  ⊰━━━┫
┣⊱ *${prefix}lirik* <text>
┣⊱ *${prefix}artinama
┣⊱ *${prefix}chord* <text>
┣⊱ *${prefix}bisakah* <teks>
┣⊱ *${prefix}kapankah* <teks>
┣⊱ *${prefix}apakah* <teks>
┣⊱ *${prefix}rate* <teks>
┣⊱ *${prefix}slap*
┣⊱ *${prefix}tampar*
┣⊱ *${prefix}moddroid* <teks>
┣⊱ *${prefix}happymod* <teks>
┣━━⊱ *MUTUAL* ⊰━━━━━┫
┣⊱ *${prefix}mutual*
┣⊱ *${prefix}next*
┣━━⊱ *MEDIA MENU* ⊰━━┫
┣⊱ *${prefix}brainly* [error]
┣⊱ *${prefix}pinterest*
┣⊱ *${prefix}resepmasakan* <teks>
┣⊱ *${prefix}igstalk* <username>
┣⊱ *${prefix}bitly* <link>
┣⊱ *${prefix}tiktok* <username>
┣⊱ *${prefix}ssweb* <link>
┣⊱ *${prefix}kbbi* <text>
┣━━⊱ *YT & SONG* ⊰━━━┫
┣⊱ *${prefix}ytmp3* <link>
┣⊱ *${prefix}ytmp4* <link>
┣⊱ *${prefix}joox* <judul>
┣━━⊱  *NSFW MENU*  ⊰━┫
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}blowjob*
┣⊱ *${prefix}nekonime*
┣⊱ *${prefix}pokemon*
┣⊱ *${prefix}husbu*
┣⊱ *${prefix}nangis*
┣⊱ *${prefix}cium*
┣⊱ *${prefix}peluk*
┣⊱ *${prefix}ranime*
┣━━⊱ *LIMIT & UANG* ⊰━┫
┣⊱ *${prefix}limit* 
┣⊱ *${prefix}buylimit* <jumblah>
┣⊱ *${prefix}transfer* <tag |jumblah>
┣⊱ *${prefix}dompet*
┣⊱ *${prefix}leaderboard*
┣━━⊱ *GROUP MENU* ⊰━┫
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}blocklist*
┣⊱ *${prefix}grouplist*
┣⊱ *${prefix}level*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add* <tag>
┣⊱ *${prefix}kick* <tag>
┣⊱ *${prefix}setname* <teks>
┣⊱ *${prefix}setdesc* <teks>
┣⊱ *${prefix}demote* <tag>
┣⊱ *${prefix}promote* <tag>
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [buka/tutup]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}welcome* [1/0]
┣━━⊱ *OWNER MENU* ⊰━┫
┣⊱ *${prefix}bc* <teks>
┣⊱ *${prefix}bcgc* <teks>
┣⊱ *${prefix}kickall* <rawan ban>
┣⊱ *${prefix}setreply* <teks>
┣⊱ *${prefix}setprefix* <symbol>
┣⊱ *${prefix}clearall*
┣⊱ *${prefix}block* <tag>
┣⊱ *${prefix}unblock* <tag>
┣⊱ *${prefix}leave*
┣⊱ *${prefix}event* [1/0]
┣⊱ *${prefix}clone* <tag>
┣⊱ *${prefix}setppbot*
┣━━⊱ *THANGKS TO* ⊰━━┫
┃
┣⊱ *AFFIS JUNIANTO* <dev>
┣⊱ *FADHIL GRAPHY* <partner>
┣⊱ *MHANKBARBARS* <sc ori>
┣⊱ *MYBOT TEAM* <team>
┃
┣⊱ NOTE : TQTO DI HAPUS
┃ GW GAK UP LAGI OKE
┃
┗━━⊱  ⸨ *X-BOT* ⸩  ⊰━━━━┛
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*
┏⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* : +3
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*beli limit untuk mendapatkan limit/ naik level*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}
