<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
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
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/PovedaAqui/mercapp-celo-fe">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Mercapp</h3>

  <p align="center">
    An NFTs Marketplace powered by Tatum and Celo (non-official)
    <br />
    <a href="https://github.com/PovedaAqui/mercapp-celo-fe"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>-->
    ·
    <a href="https://github.com/PovedaAqui/mercapp-celo-fe/issues">Report Bug</a>
    ·
    <a href="https://github.com/PovedaAqui/mercapp-celo-fe/issues">Request Feature</a>
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

[![Mercapp][product-screenshot-1]](https://media.giphy.com/media/ZhNH8Eys8RweUhB3qT/giphy.gif =100x100)

NFTs Marketplace running on the Celo blockchain and using Tatum endpoints.

In this app users can:
* Connect Metamask wallet
* View the NFTs in user's wallet (Celo Testnet)
* List NFTs in the Marketplace
* Sell NFTs
* Buy NFTs

### **This is NOT a production ready project, please DON'T use it on a production environment

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This project built using:

* [![React][React.js]][React-url]
* [![Next][Next.js]][Next-url]


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a paid API Key at [https://tatum.io/](https://tatum.io/)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Repeat steps 2 and 3 for the [https://github.com/PovedaAqui/mercapp-celo-api](https://github.com/PovedaAqui/mercapp-celo-api)
5. Create a .env.local file
6. Enter the folowing parameters in `.env.local`
   ```js
   TATUM_API_KEY = "YOUR-CELO-TESTNET-API-KEY"
   CONTRACT_ADDRESS = "0xCA6Bd586a28aEC941aEcfE2F17c940d1A01D23C2"
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

First, run the frontend server:

```bash
npm start
```

Second, run the backend server:

```bash
npm run dev -- -p 3001
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[![Buy][product-screenshot-2]](https://media.giphy.com/media/LbQyMJ4AfNDIoDzty1/giphy.gif)

[![Sell][product-screenshot-3]](https://media.giphy.com/media/jFVxM4WRjf9U3IrsTE/giphy.gif)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Improve conditional rendering
- [ ] Migrate from material-ui to a more controllable framework
- [ ] Add mint function
- [ ] Deploy project's token
- [ ] Deploy on mainnet
- [ ] Allow to pay in project's token

See the [open issues](https://github.com/PovedaAqui/mercapp-celo-fe/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Luis - [@povedaaqui](https://twitter.com/povedaaqui) - luis.poveda9321@gmail.com

Project Link Frontend: [https://github.com/PovedaAqui/mercapp-celo-fe](https://github.com/PovedaAqui/mercapp-celo-fe)

Project Link Backend: [https://github.com/PovedaAqui/mercapp-celo-api](https://github.com/PovedaAqui/mercapp-celo-api)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [ReacjJS](https://choosealicense.com)
* [NextJS](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Material-UI](https://mui.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/povedaaqui/mercapp-celo-fe.svg?style=for-the-badge
[contributors-url]: https://github.com/PovedaAqui/mercapp-celo-fe/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/povedaaqui/mercapp-celo-fe.svg?style=for-the-badge
[forks-url]: https://github.com/PovedaAqui/mercapp-celo-fe/network/members
[stars-shield]: https://img.shields.io/github/stars/povedaaqui/mercapp-celo-fe.svg?style=for-the-badge
[stars-url]: https://github.com/PovedaAqui/mercapp-celo-fe/stargazers
[issues-shield]: https://img.shields.io/github/issues/povedaaqui/mercapp-celo-fe.svg?style=for-the-badge
[issues-url]: https://github.com/PovedaAqui/mercapp-celo-fe/issues
[license-shield]: https://img.shields.io/github/license/povedaaqui/mercapp-celo-fe.svg?style=for-the-badge
[license-url]: https://github.com/PovedaAqui/mercapp-celo-fe/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/luiscarlospoveda
[product-screenshot-1]: https://drive.google.com/file/d/1TV1ASmGFMT__tDzj28PJ0nsCx4Yfq0Dc/view?usp=sharing
[product-screenshot-2]: https://drive.google.com/file/d/1aTap-7oU-vKr7sKNwMnMwvjipprk3Jtk/view?usp=sharing
[product-screenshot-3]: https://drive.google.com/file/d/1oQ424sm4M_X-mrY2QdTU1BV2wJAht4_X/view?usp=sharing
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com