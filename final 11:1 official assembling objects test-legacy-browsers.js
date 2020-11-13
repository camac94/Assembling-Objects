/**************************************************** 
 * Final 11:1 Official Assembling Objects Test Test *
 ****************************************************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'final 11:1 official assembling objects test';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const questionsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(questionsLoopBegin, questionsLoopScheduler);
flowScheduler.add(questionsLoopScheduler);
flowScheduler.add(questionsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'assembling_images/q1.png', 'path': 'assembling_images/q1.png'},
    {'name': 'assembling_images/q15.png', 'path': 'assembling_images/q15.png'},
    {'name': 'assembling_images/q8.png', 'path': 'assembling_images/q8.png'},
    {'name': 'assembling_images/q13.png', 'path': 'assembling_images/q13.png'},
    {'name': 'assembling_images/q6.png', 'path': 'assembling_images/q6.png'},
    {'name': 'assembling_images/q10.png', 'path': 'assembling_images/q10.png'},
    {'name': 'assembling_images/q5.png', 'path': 'assembling_images/q5.png'},
    {'name': 'assembling_images/q2.png', 'path': 'assembling_images/q2.png'},
    {'name': 'assembling_images/q11.png', 'path': 'assembling_images/q11.png'},
    {'name': 'assembling_images/q9.png', 'path': 'assembling_images/q9.png'},
    {'name': 'assembling_images/q12.png', 'path': 'assembling_images/q12.png'},
    {'name': 'assembling_images/image_stimulus revised w images.xlsx', 'path': 'assembling_images/image_stimulus revised w images.xlsx'},
    {'name': 'assembling_images/q3.png', 'path': 'assembling_images/q3.png'},
    {'name': 'assembling_images/q16.png', 'path': 'assembling_images/q16.png'},
    {'name': 'assembling_images/q4.png', 'path': 'assembling_images/q4.png'},
    {'name': 'assembling_images/q14.png', 'path': 'assembling_images/q14.png'},
    {'name': 'assembling_images/q7.png', 'path': 'assembling_images/q7.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.5';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instructionsClock;
var participant_instructions;
var remove_instructions;
var trialClock;
var question_images;
var participant_response;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  participant_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'participant_instructions',
    text: 'Study the left-most box and choose which letter (a, b, c, d) the left-most box assembles to. There is only one right answer.\n\nPress keyboard letters (a, b, c, or d) to select your answer.\n',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  remove_instructions = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  question_images = new visual.ImageStim({
    win : psychoJS.window,
    name : 'question_images', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1.5, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  participant_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _remove_instructions_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    remove_instructions.keys = undefined;
    remove_instructions.rt = undefined;
    _remove_instructions_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(participant_instructions);
    instructionsComponents.push(remove_instructions);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


var continueRoutine;
function instructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *participant_instructions* updates
    if (t >= 0.0 && participant_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      participant_instructions.tStart = t;  // (not accounting for frame time here)
      participant_instructions.frameNStart = frameN;  // exact frame index
      
      participant_instructions.setAutoDraw(true);
    }

    
    // *remove_instructions* updates
    if (t >= 0.0 && remove_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      remove_instructions.tStart = t;  // (not accounting for frame time here)
      remove_instructions.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { remove_instructions.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { remove_instructions.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { remove_instructions.clearEvents(); });
    }

    if (remove_instructions.status === PsychoJS.Status.STARTED) {
      let theseKeys = remove_instructions.getKeys({keyList: [], waitRelease: false});
      _remove_instructions_allKeys = _remove_instructions_allKeys.concat(theseKeys);
      if (_remove_instructions_allKeys.length > 0) {
        remove_instructions.keys = _remove_instructions_allKeys[_remove_instructions_allKeys.length - 1].name;  // just the last key pressed
        remove_instructions.rt = _remove_instructions_allKeys[_remove_instructions_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions'-------
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('remove_instructions.keys', remove_instructions.keys);
    if (typeof remove_instructions.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('remove_instructions.rt', remove_instructions.rt);
        routineTimer.reset();
        }
    
    remove_instructions.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var questions;
var currentLoop;
function questionsLoopBegin(questionsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  questions = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'assembling_images/image_stimulus revised w images.xlsx',
    seed: undefined, name: 'questions'
  });
  psychoJS.experiment.addLoop(questions); // add the loop to the experiment
  currentLoop = questions;  // we're now the current loop

  // Schedule all the trials in the trialList:
  questions.forEach(function() {
    const snapshot = questions.getSnapshot();

    questionsLoopScheduler.add(importConditions(snapshot));
    questionsLoopScheduler.add(trialRoutineBegin(snapshot));
    questionsLoopScheduler.add(trialRoutineEachFrame(snapshot));
    questionsLoopScheduler.add(trialRoutineEnd(snapshot));
    questionsLoopScheduler.add(endLoopIteration(questionsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function questionsLoopEnd() {
  psychoJS.experiment.removeLoop(questions);

  return Scheduler.Event.NEXT;
}


var _participant_response_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    question_images.setImage(ImageFile);
    participant_response.keys = undefined;
    participant_response.rt = undefined;
    _participant_response_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(question_images);
    trialComponents.push(participant_response);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *question_images* updates
    if (t >= 0.0 && question_images.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_images.tStart = t;  // (not accounting for frame time here)
      question_images.frameNStart = frameN;  // exact frame index
      
      question_images.setAutoDraw(true);
    }

    
    // *participant_response* updates
    if (t >= 0.0 && participant_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      participant_response.tStart = t;  // (not accounting for frame time here)
      participant_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { participant_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { participant_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { participant_response.clearEvents(); });
    }

    if (participant_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = participant_response.getKeys({keyList: ['a', 'b', 'c', 'd'], waitRelease: false});
      _participant_response_allKeys = _participant_response_allKeys.concat(theseKeys);
      if (_participant_response_allKeys.length > 0) {
        participant_response.keys = _participant_response_allKeys[0].name;  // just the first key pressed
        participant_response.rt = _participant_response_allKeys[0].rt;
        // was this correct?
        if (participant_response.keys == corrAns) {
            participant_response.corr = 1;
        } else {
            participant_response.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (participant_response.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         participant_response.corr = 1;  // correct non-response
      } else {
         participant_response.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('participant_response.keys', participant_response.keys);
    psychoJS.experiment.addData('participant_response.corr', participant_response.corr);
    if (typeof participant_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('participant_response.rt', participant_response.rt);
        routineTimer.reset();
        }
    
    participant_response.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
