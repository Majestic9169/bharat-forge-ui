<!-- Improved compatibility of back to top link: See: https://github.com/Majestic9169/bharat-forge-ui/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the bharat-forge-ui. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url] -->
<!-- [![Forks][forks-shield]][forks-url] -->
<!-- [![Stargazers][stars-shield]][stars-url] -->
<!-- [![Issues][issues-shield]][issues-url] -->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Majestic9169/bharat-forge-ui">
    <img src="https://www.bharatforge.com/assets/images/kalyani-logo.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Bharat Forge UI</h3>

  <p align="center">
    UI For the Bharat Forge Problem Statement, InterIIT Tech 13.0
    <br />
    <!-- <a href="https://github.com/Majestic9169/bharat-forge-ui">View Demo</a> -->
    <!-- · -->
    <a href="https://github.com/Majestic9169/bharat-forge-ui/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/Majestic9169/bharat-forge-ui/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

Unlike external environments, robots placed in indoor workplaces cannot rely on GPS navigation.
However, the goal of development in this field is to achieve complete autonomy in 
robot operations, without the need for human or environmental interaction.

This the frontend repo for the given problem statement

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![Vite][Vite]][Vite-url]
* [![Tailwind CSS][TailwindCSS]][Tailwind-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![ShadCN UI][ShadCN]][ShadCN-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
> **WARNING:** Make sure you have `pnpm` installed
* Windows
  ```sh
  npm install pnpm -g
  pnpm --version
  ```
* Arch Linux
  ```sh
  sudo pacman -S pnpm
  pnpm --version
  ```

> Setup the VNC Server
* Arch/Hyprland
  
  First start the VNC server. Hyprland uses the Wayland protocol so we use `wayvnc`
  ```sh
  wayvnc --output eDP-1 0.0.0.0 5900 -L debug trace
  ```
  Then use `novnc` to connect the server to a websocket
  ```sh
  sudo novnc --vnc localhost:5900 --listen 80
  ```
* Ubuntu
  
    set up `tigervnc` and then use `novnc` similar to above. Follow [this video](https://www.youtube.com/watch?v=fyY6ovGbTO4)

### Installation

```sh
git clone https://github.com/Majestic9169/bharat-forge-ui.git
cd bharat-forge-ui
pnpm install
pnpm run dev
```

make sure your VNC server is running and connected to a websocket

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
<!-- ## Usage -->
<!---->
<!-- Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources. -->
<!---->
<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- ROADMAP -->
<!-- ## Roadmap -->
<!---->
<!-- - [x] Add Changelog -->
<!-- - [x] Add back to top links -->
<!-- - [ ] Add Additional Templates w/ Examples -->
<!-- - [ ] Add "components" document to easily copy & paste sections of the readme -->
<!-- - [ ] Multi-language Support -->
<!--     - [ ] Chinese -->
<!--     - [ ] Spanish -->
<!---->
<!-- See the [open issues](https://github.com/Majestic9169/bharat-forge-ui/issues) for a full list of proposed features (and known issues). -->
<!---->
<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

<!-- 1. Fork the Project -->
1. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
1. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
1. Push to the Branch (`git push origin feature/AmazingFeature`)
1. Open a Pull Request

<!-- ### Top contributors: -->
<!---->
<!-- <a href="https://github.com/Majestic9169/bharat-forge-ui/graphs/contributors"> -->
<!--   <img src="https://contrib.rocks/image?repo=Majestic9169/bharat-forge-ui" alt="contrib.rocks image" /> -->
<!-- </a> -->
<!---->
<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->


<!-- LICENSE -->
<!-- ## License -->
<!---->
<!-- Distributed under the MIT License. See `LICENSE.txt` for more information. -->
<!---->
<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTACT -->
<!-- ## Contact -->
<!---->
<!-- Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com -->
<!---->
<!-- Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name) -->
<!---->
<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Lucide React (Icons)](https://lucide.dev/)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Majestic9169/bharat-forge-ui.svg?style=for-the-badge
[contributors-url]: https://github.com/Majestic9169/bharat-forge-ui/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Majestic9169/bharat-forge-ui.svg?style=for-the-badge
[forks-url]: https://github.com/Majestic9169/bharat-forge-ui/network/members
[stars-shield]: https://img.shields.io/github/stars/Majestic9169/bharat-forge-ui.svg?style=for-the-badge
[stars-url]: https://github.com/Majestic9169/bharat-forge-ui/stargazers
[issues-shield]: https://img.shields.io/github/issues/Majestic9169/bharat-forge-ui.svg?style=for-the-badge
[issues-url]: https://github.com/Majestic9169/bharat-forge-ui/issues
[React.js]: https:/img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFFFFF
[Vite-url]: https://vite.dev/
[TailwindCSS]: https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[ShadCN]: https://img.shields.io/badge/ShadCN%20UI-4A5568?style=for-the-badge&logo=react&logoColor=white
[ShadCN-url]: https://ui.shadcn.com/
