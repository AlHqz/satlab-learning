<p align="center">
  <img src="frontend/src/assets/brand-logos/satlab_logo.png" alt="SatLab Logo" width="150">
</p>

# SatLab - A Bitcoin Learning Playground

![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)
![Platform: Web](https://img.shields.io/badge/Platform-Web-lightgrey)

SatLab is an open-source educational platform designed to teach the economic and technical foundations of Bitcoin through a highly visualized, interactive and gamified experience. From the principles of Austrian economics to HTLCs on the Lightning Network, SatLab translates highly complex concepts into accessible simulations and friendly explanations for anyone in the world, regardless of their hardware capabilities.

## The Curriculum:

The learning model is strictly sequential, taking the student from the theory of value to second-layer scalability technology through an ecosystem of approximately 25 interactive activities (so far) grouped into four distinct eras:

*   **Era 1: Prehistory:** The fiat money problem, algorithmic scarcity, and the core principles of Austrian economics.
*   **Era 2: The Discovery:** Practical simulations of Hash functions (SHA-256), asymmetric cryptography (public/private keys), and the structural construction of Merkle roots.
*   **Era 3: The Sovereign Network:** The architecture of Proof of Work, blocks, the "blockchain" concept, block mining, mathematical difficulty adjustment, decentralized validation, and much more.
*   **Era 4: The Lightning:** The transition to the Lightning Network, payment channel management, liquidity, instant transaction routing, and more.

## License & Open Source

SatLab is and will always be a public good. This project is licensed under the **GNU Affero General Public License v3.0 (AGPLv3)**. We guarantee that the core source code and any modifications of it will remain free, auditable, and entirely at the service of the global community. Because education must be freely accessible to every individual.

## How to Contribute

SatLab is currently in its earliest stages of development. Every idea, piece of feedback, or bug report you share with us—whether submitted through a GitHub issue or directly via our official channels—is crucial to scaling the platform in the right direction. 

If you wish to actively contribute to the codebase, you are welcome to fork the repository and submit a Pull Request (PR).

## Deployment (MVP)

SatLab's architecture is fully containerized to guarantee environmental consistency and eliminate dependency conflicts across any operating system. Currently, during this phase, local instances are orchestrated exclusively via Docker Compose.

### Prerequisites
Ensure you have the latest version of [Docker](https://docs.docker.com/get-docker/) and Docker Compose installed and running on your host machine.

### Execution Steps

**1. Clone the repository:**
```bash
git clone https://github.com/SatLab-Learning/satlab-learning
```
**2. Change Directory:**
```bash
cd satlab-learning/
```
**3. Build & Initialize Container:**

For dev environment run:
```bash
docker compose -f docker-compose.dev.yml up --build
```
For production deployment, make sure to update the Caddyfile with your domain or IP, then run:
```bash
docker compose -f docker-compose.prod.yml up --build -d
```
**4. Access your local instance (dev) through:**

Access:
```bash
localhost:5173/
```
from any web browser to visualize your own instance of SatLab and, when you are done having fun, just hit Ctrl+C in your terminal. Otherwise, run any of the following commands depending on the build:

For dev environment:
```bash
docker compose -f docker-compose.dev.yml down
```
For production environment:
```bash
docker compose -f docker-compose.prod.yml down
```
