const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {
 // Test 4
 it("throws error if a name is NOT passed into the constructor as the first parameter", function(){
    expect( function() { new Message();}).toThrow(new Error('Name parameter required.'));
  });

  // Test 5
  it("constructor sets name", function(){
    let msg = new Message("Test Message", []);
    expect(msg.name).toEqual("Test Message");
  });

  // Test 6
  it("contains a commands array passed into the constructor as 2nd argument", function() {
    let commands = [new Command('STATUS_CHECK'), new Command('MOVE', 20)];
    let message = new Message('Another message!', commands);
    expect(message.commands).toEqual(commands);
  });

});
