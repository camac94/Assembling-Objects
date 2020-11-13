#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.2.5),
    on Thu Nov 12 16:46:12 2020
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.2.5'
expName = 'official assembling objects test'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sort_keys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/catie/Desktop/psychopy experiments/final 11:1 official assembling objects test_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=(1024, 768), fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "instructions"
instructionsClock = core.Clock()
participant_instructions = visual.TextStim(win=win, name='participant_instructions',
    text='Study the left-most box and choose which letter (a, b, c, d) the left-most box assembles to. There is only one right answer.\n\nPress keyboard letters (a, b, c, or d) to select your answer.\n',
    font='Times New Roman',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
remove_instructions = keyboard.Keyboard()

# Initialize components for Routine "trial"
trialClock = core.Clock()
question_images = visual.ImageStim(
    win=win,
    name='question_images', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(1.5, 1),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
participant_response = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "instructions"-------
continueRoutine = True
# update component parameters for each repeat
remove_instructions.keys = []
remove_instructions.rt = []
_remove_instructions_allKeys = []
# keep track of which components have finished
instructionsComponents = [participant_instructions, remove_instructions]
for thisComponent in instructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions"-------
while continueRoutine:
    # get current time
    t = instructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *participant_instructions* updates
    if participant_instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        participant_instructions.frameNStart = frameN  # exact frame index
        participant_instructions.tStart = t  # local t and not account for scr refresh
        participant_instructions.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(participant_instructions, 'tStartRefresh')  # time at next scr refresh
        participant_instructions.setAutoDraw(True)
    
    # *remove_instructions* updates
    waitOnFlip = False
    if remove_instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        remove_instructions.frameNStart = frameN  # exact frame index
        remove_instructions.tStart = t  # local t and not account for scr refresh
        remove_instructions.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(remove_instructions, 'tStartRefresh')  # time at next scr refresh
        remove_instructions.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(remove_instructions.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(remove_instructions.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if remove_instructions.status == STARTED and not waitOnFlip:
        theseKeys = remove_instructions.getKeys(keyList=None, waitRelease=False)
        _remove_instructions_allKeys.extend(theseKeys)
        if len(_remove_instructions_allKeys):
            remove_instructions.keys = _remove_instructions_allKeys[-1].name  # just the last key pressed
            remove_instructions.rt = _remove_instructions_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions"-------
for thisComponent in instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('participant_instructions.started', participant_instructions.tStartRefresh)
thisExp.addData('participant_instructions.stopped', participant_instructions.tStopRefresh)
# check responses
if remove_instructions.keys in ['', [], None]:  # No response was made
    remove_instructions.keys = None
thisExp.addData('remove_instructions.keys',remove_instructions.keys)
if remove_instructions.keys != None:  # we had a response
    thisExp.addData('remove_instructions.rt', remove_instructions.rt)
thisExp.addData('remove_instructions.started', remove_instructions.tStartRefresh)
thisExp.addData('remove_instructions.stopped', remove_instructions.tStopRefresh)
thisExp.nextEntry()
# the Routine "instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
questions = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('assembling_images/image_stimulus revised w images.xlsx'),
    seed=None, name='questions')
thisExp.addLoop(questions)  # add the loop to the experiment
thisQuestion = questions.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisQuestion.rgb)
if thisQuestion != None:
    for paramName in thisQuestion:
        exec('{} = thisQuestion[paramName]'.format(paramName))

for thisQuestion in questions:
    currentLoop = questions
    # abbreviate parameter names if possible (e.g. rgb = thisQuestion.rgb)
    if thisQuestion != None:
        for paramName in thisQuestion:
            exec('{} = thisQuestion[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "trial"-------
    continueRoutine = True
    # update component parameters for each repeat
    question_images.setImage(ImageFile)
    participant_response.keys = []
    participant_response.rt = []
    _participant_response_allKeys = []
    # keep track of which components have finished
    trialComponents = [question_images, participant_response]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trial"-------
    while continueRoutine:
        # get current time
        t = trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *question_images* updates
        if question_images.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            question_images.frameNStart = frameN  # exact frame index
            question_images.tStart = t  # local t and not account for scr refresh
            question_images.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(question_images, 'tStartRefresh')  # time at next scr refresh
            question_images.setAutoDraw(True)
        
        # *participant_response* updates
        waitOnFlip = False
        if participant_response.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            participant_response.frameNStart = frameN  # exact frame index
            participant_response.tStart = t  # local t and not account for scr refresh
            participant_response.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(participant_response, 'tStartRefresh')  # time at next scr refresh
            participant_response.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(participant_response.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(participant_response.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if participant_response.status == STARTED and not waitOnFlip:
            theseKeys = participant_response.getKeys(keyList=['a', 'b', 'c', 'd'], waitRelease=False)
            _participant_response_allKeys.extend(theseKeys)
            if len(_participant_response_allKeys):
                participant_response.keys = _participant_response_allKeys[0].name  # just the first key pressed
                participant_response.rt = _participant_response_allKeys[0].rt
                # was this correct?
                if (participant_response.keys == str(corrAns)) or (participant_response.keys == corrAns):
                    participant_response.corr = 1
                else:
                    participant_response.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial"-------
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    questions.addData('question_images.started', question_images.tStartRefresh)
    questions.addData('question_images.stopped', question_images.tStopRefresh)
    # check responses
    if participant_response.keys in ['', [], None]:  # No response was made
        participant_response.keys = None
        # was no response the correct answer?!
        if str(corrAns).lower() == 'none':
           participant_response.corr = 1;  # correct non-response
        else:
           participant_response.corr = 0;  # failed to respond (incorrectly)
    # store data for questions (TrialHandler)
    questions.addData('participant_response.keys',participant_response.keys)
    questions.addData('participant_response.corr', participant_response.corr)
    if participant_response.keys != None:  # we had a response
        questions.addData('participant_response.rt', participant_response.rt)
    questions.addData('participant_response.started', participant_response.tStartRefresh)
    questions.addData('participant_response.stopped', participant_response.tStopRefresh)
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'questions'


# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
