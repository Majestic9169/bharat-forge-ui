FROM osrf/ros:noetic-desktop-full

ENV DEBIAN_FRONTEND=noninteractive

# dependencies
RUN apt-get update && apt-get install -y \
  x11vnc xvfb wget ros-noetic-rviz ros-noetic-mvsim git novnc websockify \
  ros-noetic-turtlebot3 ros-noetic-turtlebot3-msgs ros-noetic-turtlebot3-simulations ros-noetic-dynamixel-sdk && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

ENV TURTLEBOT3_MODEL=burger

# novnc install
# WORKDIR /opt/novnc
# RUN git clone https://github.com/novnc/noVNC.git && \
#   ln -s /opt/novnc/utils/novnc_proxy /usr/local/bin/novnc_proxy
# WORKDIR /opt/novnc
# RUN wget https://github.com/novnc/noVNC/archive/refs/tags/v1.4.0.tar.gz && \
#   tar -xzf v1.4.0.tar.gz --strip-components=1 && \
#   rm v1.4.0.tar.gz && \
#   ln -s /opt/novnc/utils/websockify /usr/local/bin/websockify   

# # vnc passwd, replace "password" not that it matters
# RUN mkdir ~/.vnc && echo "password" | vncpasswd -f > ~/.vnc/passwd && chmod 600 ~/.vnc/passwd

# Set working directory
WORKDIR /root/catkin_ws

# Copy and configure entrypoint script
COPY entrypoint.sh /root/catkin_ws/entrypoint.sh
RUN chmod +x /root/catkin_ws/entrypoint.sh

# expose ports
EXPOSE 5900 8080

ENTRYPOINT ["/ros_ws/entrypoint.sh"]
