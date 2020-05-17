# EyeOS
By Michael Fatemi, Suhas Nandiraju, Autin Mitra

## How does it work?
To set up, simply allow access to the webcam, and calibrate EyeOS by looking at the corners of your screen. We are using a computer vision technique called [Haar Cascades](https://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_objdetect/py_face_detection/py_face_detection.html) and a pertained model for the Dlib library, which can detect features of an image in real time. To detect if the user was blinking, we calculated the distance between the eyelids (in pixels) and normalized it based on the distance between the eyes. To calibrate it, we found the location of the pupil relative to the center of the eye when the user was looking at the top-left of the screen, and the bottom-right of the screen. Then, we scaled the location of the pupil to the coordinates (0, 0), and (ScreenWidth, ScreenHeight). To control the cursor position, we used [pyautogui](https://pypi.org/project/PyAutoGUI/). We also used the Google Cloud Speech to Text API to add additional functionality, such as typing and voice commands to exit the program.

## Inspiration
In today's increasingly digital world, it can be extremely disadvantageous to be unable to control a computer. To resolve this issue, we wanted to make something that could help people control their computer simply by looking at where they wanted to click. 

## What it does
EyeOS is a way for people to easily control their computer without the use of their hands. You calibrate it by looking at the top-left corner of the screen and the bottom-right corner of the screen. Once calibrated, whenever you look feature on the screen, the cursor will move there. Then, you can access the keyboard and mouse with voice commands, detailed below.

## Features
### Eye tracking
Control the mouse position and scroll wheel by moving your eyes.
### Nose tracking
Additional option to use your nose for more control
### Voice commands
- **type [string]**: Type a string, as if from a keyboard.
  - This feature can be enabled/disabled by saying **typing on/off**.
- **press/hold/release** (key): Press/hold/release a key on the keyboard.
- **google [query]**: Open a web browser and search Google.
- **copy/cut/paste**: Copy/cut/paste a selection of text.
- **cursor/scroll**: Choose to change control to the mouse cursor or mouse scroll wheel.
- **calibrate**: Recalibrates the system.
- **eye mode**: Recalibrates the system and uses eye tracking.
- **nose mode**: Recalibrates the system and uses nose tracking.
- **click/left click/right click/double click**: Clicks
- **website [url]**: Opens a website at that URL
- **open [program name]**: Searches your start menu folder for a program, and opens it.
- **exit/stop/quit**: Stops the tracker.

## How we built it
We used Git for collaboration, and coded using [Visual Studio Code](https://code.visualstudio.com/). The language was Python 3, using a library called [OpenCV](https://opencv.org/) to help with the computer vision. To control the mouse and keyboard, we used [pyautogui](https://pypi.org/project/PyAutoGUI/). The UI was created with React and Electron.

## Challenges we ran into
It was quite difficult to have the program accurately determine where the pupils were, whether or not the eyes were closed, and making an easy way to accurately calibrate the system. It was also difficult to accurately detect voice commands.

## Accomplishments that we're proud of
The tracking is accurate and the systems work! Plus, this could really be useful to someone in real life, which makes us happy :)

## What we learned
We learned a lot about Computer Vision and facial feature tracking. In addition, we learned how to interface Google Cloud APIs with Python.

## What's next for EyeOS
We hope to add more features and increase ease of use in order to add further control over the computer for people who can't use a mouse or keyboard. We also want to improve the accuracy of the detector.

