class Message {
   constructor(name, commands){
      this.name= name;
      this.commands= commands;
     if (typeof name !== "string") {
        throw Error('Name parameter required.');
      }
      
    
    }   
}

module.exports = Message;