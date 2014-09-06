

Blockly.Blocks.action_beep = {
  category: 'Action',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(290);
    this.appendDummyInput().appendField("beep");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Causes Cricket to beep.');
  }
};

//Blockly.Blocks['action_beep'] = {
//  init: function() {
//    this.setHelpUrl('http://www.example.com/');
//    this.setColour(290);
//    this.appendDummyInput()
//        .appendField("beep");
//    this.setPreviousStatement(true);
//    this.setNextStatement(true);
//    this.setTooltip('');
//  }
//};

//Blockly.Blocks['date'] = {
//  init: function() {
//    this.setHelpUrl('http://www.example.com/');
//    this.setColour(290);
//    this.appendDummyInput()
//        .appendField("Date");
//    this.setOutput(true);
//    this.setTooltip('');
//  }
//};
Blockly.Blocks['clock_date'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField("get ")
        .appendField(new Blockly.FieldDropdown([["day", "4"], ["month", "5"], ["year", "6"], ["hour", "2"], ["minute", "1"], ["second", "0"], ["day of week", "3"]]), "date");
    this.setOutput(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['display_text'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField("show text  \"")
        .appendField(new Blockly.FieldTextInput("text"), "text")
        .appendField("\"");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

/***
Blockly.Blocks['display_showshorttext'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField("show   \"")
        .appendField(new Blockly.FieldTextInput("text"), "text")
        .appendField("\"");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
/***/

Blockly.Blocks['display_number'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
//    this.appendDummyInput()
//        .appendField("show number  \"")
//        .appendField(new Blockly.FieldTextInput("text"), "text")
//        .appendField("\"");
    this.appendDummyInput()
        .appendField("show number  ");
    this.appendValueInput("value")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

/***


Blockly.Blocks['display_showtext'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
	this.appendDummyInput()
	    .appendField("show   \"");
	this.appendValueInput("value")
	    .setCheck("null")
	this.appendDummyInput()
	    .appendField("\"")
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
/***/

Blockly.Blocks['display_movecursor'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField("move cursor to")
        .appendField(new Blockly.FieldTextInput("position"), "num");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['display_clearscreen'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField("clear screen");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['recorder_play'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(90);
    this.appendDummyInput()
        .appendField("Play Track");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['recorder_next'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(90);
    this.appendDummyInput()
        .appendField("Next Track");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['recorder_prev'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(90);
    this.appendDummyInput()
        .appendField("Prev Track");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['recorder_select'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(90);
    this.appendDummyInput()
        .appendField("Select Track ")
        .appendField(new Blockly.FieldTextInput("N"), "track");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['recorder_eraseall'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(90);
    this.appendDummyInput()
        .appendField("Erase All Tracks");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['i2c_write'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendDummyInput()
        .appendField("Write I2C register:");
    this.appendValueInput("value")
        .setCheck("null")
        .appendField("write ");
    this.appendDummyInput()
        .appendField(" to ")
        .appendField(new Blockly.FieldTextInput("register address"), "reg_addr")
        .appendField(", ")
        .appendField(new Blockly.FieldTextInput("I2C address"), "i2c_addr");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['i2c_read'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendDummyInput()
        .appendField("Read I2C register:")
        .appendField("read from ")
        .appendField(new Blockly.FieldTextInput("register address"), "reg_addr")
        .appendField(", ")
        .appendField(new Blockly.FieldTextInput("I2C address"), "i2c_addr");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};


Blockly.Blocks.action_led = {
  category: 'Action',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(290);
    this.appendDummyInput().appendField("turn LED")
    .appendField(new Blockly.FieldDropdown([["on", "on"], ["off", "off"]]), "onoff");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Causes Cricket to turn LED on/off.');
  }
};

/***
Blockly.Blocks.action_wait = {
  category: 'Action',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(290);
    this.appendDummyInput().appendField("wait")
    .appendField(new Blockly.FieldTextInput("0.1"), "NAME")
    .appendField("second");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Waits for specified time period.');
  }
};
/***/

//***
Blockly.Blocks['action_wait'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("wait");
    this.appendValueInput("NAME", Number);
//    this.appendDummyInput()
//        .appendField("second");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Waits for specified time period.');
  }
};
/***/

Blockly.Blocks.action_gettimer = {
  category: 'Action',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(120);
    this.appendDummyInput().appendField("get timer");
    this.setOutput(true, Number);
    this.setTooltip('Returns value of free-running timer.');
  }
};

Blockly.Blocks.action_reset_timer = {
  category: 'Action',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(120);
    this.appendDummyInput().appendField("reset timer");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Resets free-running timer to zero.');
  }
};

Blockly.Blocks.action_motor = {
  category: 'Action',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(310);
    this.appendDummyInput().appendField("talk to motor")

//    .appendField(new Blockly.FieldDropdown([["", 0], ["a", 1]]), "a")
//    .appendField(",")	
//    .appendField(new Blockly.FieldDropdown([["", 0], ["b", 2]]), "b")
//    .appendField(",")
//    .appendField(new Blockly.FieldDropdown([["", 0], ["c", 4]]), "c")
//    .appendField(",")
//    .appendField(new Blockly.FieldDropdown([["", 0], ["d", 8]]), "d");
    
    .appendField(new Blockly.FieldDropdown([["a", "a"], [" ", ""]]), "a")
    .appendField(",")
    .appendField(new Blockly.FieldDropdown([[" ", ""], ["b", "b"]]), "b")
    .appendField(",")
    .appendField(new Blockly.FieldDropdown([[" ", ""], ["c", "c"]]), "c")
    .appendField(",")
    .appendField(new Blockly.FieldDropdown([[" ", ""], ["d", "d"]]), "d");
    //var input =  this.appendValueInput( "NAME", "motor");
    //input.appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Selects specific motor(s) for control.');
  }
};

Blockly.Blocks.motor_action_turn = {
  category: 'Motor Action',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(316);
    this.appendDummyInput().appendField("turn")
    .appendField(new Blockly.FieldDropdown([["on", "on"], ["off", "off"]]), "turn");
    //var input =  this.appendValueInput( "right", "motor");
    //input.appendField(",");
    //this.setOutput(true, "motor");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Turns on/off selected motor(s).');
  }
};

Blockly.Blocks.motor_action_onfor = {
  category: 'Motor Action',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(316);
//    this.appendDummyInput().appendField("turn on for")
//    .appendField(new Blockly.FieldTextInput("1"), "second")
//    .appendField("second(s)");
    this.appendDummyInput()
        .appendField("turn on for");
    this.appendValueInput("value", Number);
//    this.appendDummyInput()
//        .appendField("second(s)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Turns on selected motor(s) for specified period of time.');
  }
};

/***
Blockly.Blocks.motor_action_thisway = {
  category: 'Motor Action',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(316);
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["this way", "thisway"], ["that way", "thatway"]]), "thisway");
    // this.appendValueInput( "right", "motor");
    //this.setOutput(true, "motor");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('xxxxx');
  }
};
/***/

Blockly.Blocks.motor_action_thisway = {
  category: 'Motor Action',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(316);
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["turn Clockwise", "cw"], ["turn Counter-Clockwise", "ccw"]]), "clockwise");
    // this.appendValueInput( "right", "motor");
    //this.setOutput(true, "motor");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('xxxxx');
  }
};

Blockly.Blocks.motor_action_rd = {
  category: 'Motor Action',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(316);
    this.appendDummyInput().appendField("reverse direction");
    // this.appendValueInput( "right", "motor");
    //this.setOutput(true, "motor");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Reverses direction of selected motor(s).');
  }
};

Blockly.Blocks.motor_action_power = {
  category: 'Motor Action',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(316);
    
    //this.appendDummyInput().appendField("set power").appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"]]), "power");
    
    this.appendValueInput("power", Number).appendField("Set power");
    
    //this.appendDummyInput().appendField("set power");
    //this.appendValueInput("power", Number);
    
    this.setInputsInline(true);
    // this.appendValueInput( "right", "motor");
    //this.setOutput(true, "motor");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sets power level of selected motor(s).');
  }
};

Blockly.Blocks['servo_seth'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(316);
    this.appendValueInput("heading", Number).appendField("Set servo heading");
    this.setInputsInline(true);
//    this.appendDummyInput()
//        .appendField("Set servo heading")
//        .appendField(new Blockly.FieldTextInput("10"), "heading");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['servo_lt'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(316);
    this.appendValueInput("heading", Number).appendField("Servo left turn");
    this.setInputsInline(true);
//    this.appendDummyInput()
//        .appendField("Servo left turn")
//        .appendField(new Blockly.FieldTextInput("10"), "heading");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['servo_rt'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(316);
    this.appendValueInput("heading", Number).appendField("Servo right turn");
    this.setInputsInline(true);
//    this.appendDummyInput()
//        .appendField("Servo right turn")
//        .appendField(new Blockly.FieldTextInput("10"), "heading");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

/***
Blockly.Blocks.motor_action_turn = {
  category: 'Motor Action',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(315);
    this.appendDummyInput().appendField("turn");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([["on", "on"], ["off", "off"]]), "turn");
    this.setPreviousStatement(true, "motor");
    this.setNextStatement(true, "motor");
    this.setTooltip('');
  }
};

/**  CONTROL  **/

Blockly.Blocks['control_true'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("true");
    this.setOutput(true, Boolean);
    this.setTooltip('');
  }
};

Blockly.Blocks.control_if = {
  category: 'Control',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(120);
    this.appendValueInput( "condition" ).setCheck(Boolean).appendField("if");
    var input =  this.appendStatementInput( "statement", null);
    input.appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('If input expression is true, then do some statements.');
  }
};

Blockly.Blocks.control_ifelse = {
  category: 'Control',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(120);
    var input =  this.appendValueInput( "condition" ).setCheck(Boolean);
    input.appendField("if");
    input =  this.appendStatementInput( "if", null);
    input.appendField("do");
    input =  this.appendStatementInput( "else", null);
    input.appendField("else do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('If a value is true, then do the first block of statements.\n' +
        'Otherwise, do the second block of statements.');
  }
};

Blockly.Blocks.control_waituntil = {
  category: 'Control',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(120);
    //this.appendDummyInput();
     this.appendValueInput( "NAME" ).setCheck(Boolean).appendField("wait until");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Repeatedly executes block until it evaluates to true.');
  }
};

Blockly.Blocks.control_repeat = {
  category: 'Control',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(120);
    this.appendDummyInput().appendField("repeat");
     this.appendValueInput( "times", Number);
    var input = this.appendDummyInput();
    input.appendField("time(s)");
    input =  this.appendStatementInput( "do", null);
    input.appendField("do");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Repeats block for specific number of times.');
  }
};

Blockly.Blocks.control_forever = {
  category: 'Control',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(120);
    var input =  this.appendStatementInput( "do", null);
    input.appendField("do");
    input = this.appendDummyInput();
    input.appendField("forever");
    this.setPreviousStatement(true, null);
    this.setTooltip('Indefinitely executes block.');
  }
};


Blockly.Blocks.input_switch = {
  category: 'Input, Output, Storage',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(290);
    this.appendDummyInput().appendField("switch")
    .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"]]), "switch");
    this.setOutput(true, Boolean);
    this.setTooltip('Reports boolean value of specific sensor.');
  }
};

Blockly.Blocks.input_sensor = {
  category: 'Input, Output, Storage',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(290);
    this.appendDummyInput().appendField("sensor")
    .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"]]), "sensor");
    this.setOutput(true, Number);
    this.setTooltip('Reports value of specific sensor.');
  }
};

Blockly.Blocks.input__output__storage_setdp = {
  category: 'Input, Output, Storage',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(220);
    //this.appendDummyInput();
     this.appendValueInput( "DP", Number).appendField("Set Data Pointer");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sets data buffer pointer to specified value.');
  }
};

Blockly.Blocks.input__output__storage_record = {
  category: 'Input, Output, Storage',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(220);
    //this.appendDummyInput();
     this.appendValueInput( "value", null).appendField("record");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Records 8-bit value into data buffer.');
  }
};

Blockly.Blocks.input__output__storage_recall = {
  category: 'Input, Output, Storage',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(220);
    this.appendDummyInput().appendField("recall value");
    this.setOutput(true, null);
    this.setTooltip('Reports 8-bit value stored in data buffer.');
  }
};

Blockly.Blocks.input__output__storage_send_serial = {
  category: 'Input, Output, Storage',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(250);
    this.appendDummyInput().appendField("send");
     this.appendValueInput( "send", null);
    var input = this.appendDummyInput();
    input.appendField("to serial port");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Send data to serial port.');
  }
};

Blockly.Blocks.input__output__storage_new_serial = {
  category: 'Input, Output, Storage',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(250);
    this.appendDummyInput().appendField("new serial?");
    this.setOutput(true, Boolean);
    this.setTooltip('Reports whether value from serial port has been received.');
  }
};

Blockly.Blocks.input__output__storage_get_serial = {
  category: 'Input, Output, Storage',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(250);
    this.appendDummyInput().appendField("get serial");
    this.setOutput(true, null);
    this.setTooltip('Get data from serial port.');
  }
};

Blockly.Blocks.input__output__storage_new_ir = {
  category: 'Input, Output, Storage',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(250);
    this.appendDummyInput().appendField("new infrared?");
    this.setOutput(true, Boolean);
    this.setTooltip('Reports whether infrared value has been received.');
  }
};


Blockly.Blocks.input__output__storage_get_ir = {
  category: 'Input, Output, Storage',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(250);
    this.appendDummyInput().appendField("get infrared");
    this.setOutput(true, null);
    this.setTooltip('');
  }
};

/***
Blockly.Blocks.math_true = {
  category: 'Math',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(10);
    this.appendDummyInput().appendField("True");
    this.setOutput(true, Boolean);
    this.setTooltip('');
  }
};

/***/

Blockly.Blocks.math_number = {
  category: 'Math',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(10);
    this.appendDummyInput().appendField(new Blockly.FieldTextInput("0"), "number");
    this.setOutput(true, Number);
    this.setTooltip('A number.');
  }
};

Blockly.Blocks.math_random = {
  category: 'Math',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(10);
    this.appendDummyInput().appendField("random number");
    this.setOutput(true, Number);
    this.setTooltip('Reports pseudorandom 16 bit value.');
  }
};

Blockly.Blocks.math_equal = {
  category: 'Math',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(10);
     this.appendValueInput( "left", Number);
    var input =  this.appendValueInput( "right", Number);
    input.appendField(new Blockly.FieldDropdown([["=", "="], ["<", "<"], [">", ">"]]), "cond");
    this.setInputsInline(true);
    this.setOutput(true, Boolean);
    this.setTooltip('Reports boolean comparison of two inputs.');
  }
};

Blockly.Blocks.math_operator = {
  category: 'Math',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(10);
     this.appendValueInput( "1stNum", Number);
    var input =  this.appendValueInput( "2ndNum", Number);
    input.appendField(new Blockly.FieldDropdown([["+", "+"], ["-", "-"], ["×", "×"], ["÷", "÷"], ["%", "%"]]), "op");
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('Reports operation of two inputs.');
  }
};

Blockly.Blocks.math_andor = {
  category: 'Math',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(10);
     this.appendValueInput( "left" ).setCheck(Boolean);
    var input =  this.appendValueInput( "right" ).setCheck(Boolean);
    input.appendField(new Blockly.FieldDropdown([["AND", "AND"], ["OR", "OR"]]), "andor");
    this.setInputsInline(true);
    this.setOutput(true, Boolean);
    this.setTooltip('Reports bitwise AND/OR of two inputs.');
  }
};

Blockly.Blocks.math_not = {
  category: 'Math',
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(10);
    //this.appendDummyInput();
     this.appendValueInput( "bool" ).setCheck(Boolean).appendField("not");
    this.setOutput(true, Boolean);
    this.setTooltip('Reports boolean that opposite of input.');
  }
};


/**    Send SMS    **/


Blockly.Blocks.use_sms = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendTitle("Use SMS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};



Blockly.Blocks.send_sms = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendTitle("Send SMS");
    this.appendDummyInput()
        .appendTitle("to : 0")
        .appendTitle(new Blockly.FieldTextInput("8xxxxxxxx"), "phoneno");
    this.appendValueInput("NAME")
        .setCheck(String)
        .appendTitle("message :");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};


/**     RFID    **/


Blockly.Blocks.userfid = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
        .appendTitle("Use RFID");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};



Blockly.Blocks.read_from_rfid = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
        .appendTitle("Read from RFID");
    this.setInputsInline(true);
    this.setOutput(true, String);
    this.setTooltip('');
  }
};



Blockly.Blocks.write_to_rfid = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(230);
    this.appendValueInput("NAME")
        .appendTitle("Write to RFID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};


/**     Finger Scan    **/


Blockly.Blocks.use_finer_scan = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendTitle("Use Finger Scan");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};



Blockly.Blocks.identify_finger = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendTitle("Identify Finger");
    this.setInputsInline(true);
    this.setOutput(true, String);
    this.setTooltip('');
  }
};



Blockly.Blocks.enroll_finger = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendTitle("Enroll Finger");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};


/**     Camera    **/


Blockly.Blocks.use_camera = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendTitle("Use Camera");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks.close_camera = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendTitle("Close Camera");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks.found_face = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendTitle("Found Face?");
    this.setInputsInline(true);
    this.setOutput(true, Boolean);
    this.setTooltip('');
  }
};


/****    VARIABLE    ****/

Blockly.Blocks.variables_get = {
  // Variable getter.
  category: null,  // Variables are handled specially.
  helpUrl: Blockly.LANG_VARIABLES_GET_HELPURL,
  init: function() {
    this.setColour(330);
    this.appendDummyInput().appendField(Blockly.LANG_VARIABLES_GET_TITLE)
    .appendField(new Blockly.FieldVariable(
        Blockly.LANG_VARIABLES_GET_ITEM), 'VAR');
    this.setOutput(true, null);
    this.setTooltip(Blockly.LANG_VARIABLES_GET_TOOLTIP);
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  }
};

Blockly.Blocks.variables_set = {
  // Variable setter.
  category: null,  // Variables are handled specially.
  helpUrl: Blockly.LANG_VARIABLES_SET_HELPURL,
  init: function() {
    this.setColour(330);
    //this.appendDummyInput();
    //this;
    this.appendValueInput( 'VALUE', null).appendField("set").appendField(Blockly.LANG_VARIABLES_SET_TITLE)
    .appendField(new Blockly.FieldVariable(Blockly.LANG_VARIABLES_SET_ITEM), 'VAR');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_VARIABLES_SET_TOOLTIP);
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  }
};  




/****    PROCEDURE    ****/
//***
Blockly.Blocks.procedure_procedure = {
  category: null,
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(210);
    this.appendDummyInput().appendField("to")
    .appendField(new Blockly.FieldTextInput("main"), "pname");
     this.appendStatementInput( "statement", null);
    var input = this.appendDummyInput();
    input.appendField("                   end");
    this.setTooltip('Main procedure.');
  }
};
/****

Paste your new language here

****/
