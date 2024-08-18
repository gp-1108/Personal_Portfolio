<h2 align="center">
  Portfolio website<br/>
  <a href="https://pi.gp-apps.com/" target="_blank">pi.gp-apps.com</a>
</h2>
<br/>

<center>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) &nbsp;

</center>

## TL;DR

Fork of [Soumyajit4419 Portfolio template](https://github.com/soumyajit4419/Portfolio) adapted to my needs.

## Built With

This project was built using these technologies.

- React.js
- Node.js
- Express.js
- CSS3
- VsCode
- Docker

## Features

**📖 Multi-Page Layout**

**🎨 Styled with React-Bootstrap and Css with easy to customize colors**

**📱 Fully Responsive**

## Getting Started

Clone down this repository. You will need `node.js` and `git` installed globally on your machine.

## 🛠 Installation and Setup Instructions

1. Clone the repo ```git clone https://github.com/gp-1108/Personal_Portfolio.git```
2. Build the docker image ```docker build -t portfolio:webapps```
3. Run the docker container ```docker run -d -p 5000:5000 -v <path to certs>:/certs portfolio:webapps```
4. Visit the website at ```https://localhost:5000```

## How to get the SSL certificates
This project uses SSL certificates to secure the connection. You can generate your own certificates for local usage:
```bash
openssl req -x509 -newkey rsa:2048 -nodes -keyout key.pem -out cert.pem -days 365
```

## Usage Instructions

Open the project folder and Navigate to `/src/components/`. <br/>
You will find all the components used and you can edit your information accordingly.
