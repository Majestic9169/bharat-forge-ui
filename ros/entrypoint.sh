#!/bin/bash

set -e
set -x

#virtual display
sleep 2

Xvfb :1 -screen 0 1024x768x16 &
sleep 2

#source ros
source /opt/ros/noetic/setup.bash

export TURTLEBOT3_MODEL=burger

DISPLAY=:1 roslaunch turtlebot3_fake turtlebot3_fake.launch &

# vnc server
x11vnc -display :1 -forever -rfbport 5900 -nopw -listen localhost -xkb &
sleep 2

#novnc
# /opt/novnc/utils/launch.sh --vnc localhost:5900 --listen 8080 &
# novnc_proxy --vnc localhost:5900 --listen 8080 &
websockify --web /usr/share/novnc 8080 localhost:5900
sleep 2

#start ros stuff
roscore &
rviz &
mvsim &

# don't stop
echo "all processes started :)"
tail -f /dev/null
