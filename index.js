const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const Pino = require("pino")
async function connectToWhatsapp() {
  const auth = await useMultiFileAuthState("auth");
  const jiee = makeWASocket({
    printQRInTerminal: true,
    browser: ["Devrolaich", "Firefox", "1.0.0"] ,
    auth: auth.state ,
    logger: Pino({ level: "silent" })
  });
  jiee.ev.on("creds.update", auth.saveCreds);
  jiee.ev.on("connection.update", ({ connection }) => {
if(connection === "open") console.log("IsOpen");
if(connection === "close") connectToWhatsapp();
  });

 jiee.ev.on("messages.upsert", ({ messages , type }) => {
   console.log(messages);
if(type !== 'notify') return;
   
   const msg = messages[0];
     
   
function reply(text) { jiee.sendMessage(msg.key.remoteJid, {text: text,}, { quoted: msg })
}
   if (msg.message.conversation.toLowerCase() === "p") {
    //console.log(msg);
    reply("Usahakan Salam Ya :3")
  }
  if (msg.message.conversation.toLowerCase() === "gg")
  reply("Well Played!")
  
  if (msg.message.conversation.toLowerCase() === "assalamualaikum")
  reply("Waalaikumsalam")
  
  
function processMessage(message) {
  const commandPrefix = "!";

  if (message.startsWith(commandPrefix)) {
    const command = message.slice(1); 
    handleCommand(command);
  } else {
    handleMessage(message);
  }
}

function getAll(x){
  let pesan = "List Command : \n";
  let arr = Object.keys(x);
  let i = 1;
  arr.forEach((data) => {
  // Code to be executed for each element
  let y = `${i++}. ${data}\n`;
  pesan = pesan.concat(y);
});
  //console.log(pesan);
  reply(pesan);
}
function handleCommand(command) {
  console.log(`Command received: ${command}`);
  //list command
  
  
  let cmdList = {
    hi : "hi!",
    hello : "xd",
  };
   if(command === 'all'){
     const all = getAll(cmdList);
   }

  
}

function handleMessage(message) {
  console.log(`Received message: ${message}`);
}
const receivedMessage = msg.message.conversation;;
processMessage(receivedMessage);
})
jiee.ev.on('group-participants.update', async (messages) => {
  const msg = messages[0];
  function reply(text) { jiee.sendMessage(msg.key.remoteJid, {text: text,}, )
 }
  reply("mbud");
})
}


connectToWhatsapp();
