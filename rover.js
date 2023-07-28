class Rover {
   constructor(position){
      this.position= position;
      this.mode='NORMAL'; 
      this.generatorWatts=110;
    } 
   receiveMessage(message) {
      let response = {
        message: message.name,
        results: []
      };
  
      for (let command of message.commands) {
        if (command.commandType === "STATUS_CHECK") {
          let result = {
            completed: true,
            roverStatus: {
              position: this.position,
              mode: this.mode,
              generatorWatts: this.generatorWatts
            }
          };
          response.results.push(result);
        } else if (command.commandType === "MOVE") {
          if (this.mode === "LOW_POWER") {
            let result = {
              completed: false
            };
            response.results.push(result);
          } else {
            this.position = command.value; 
            let result = {
              completed: true
            };
            response.results.push(result);
          }
        } else if (command.commandType === "MODE_CHANGE") {
          this.mode = command.value; 
          let result = {
            completed: true
          };
          response.results.push(result);
        }
      }
  
      return response;
    }
}

module.exports = Rover;