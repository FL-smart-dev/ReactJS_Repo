## cafe bio

### Description:
cafe bio is a web app is  promotion system 


### Table of Contents:
1. [Usage](#usage)
2. [Installation](#installation)


### Usage:
- **Generating SSL Certificates using mkcert:**

    **Prerequisites:** 
    - Install mkcert
    
    **Steps:**
    1. Install mkcert:
        ```bash
        brew install mkcert
        brew install nss # if you use Firefox
        ```
    2. Generate certificates:
        ```bash
        mkcert example.com "*.example.com" example.test localhost 127.0.0.1 ::1
        ```
    3. Rename files:
        - Rename `localhost-key.pem` to `key.pem`.
        - Rename `localhost.pem` to `cert.pem`.
    4. Move renamed files to the `cafebio/certs` folder.
    5. Run the project:
        ```bash
        npm run start:https
        ```

### Installation:

- **macOS:**
    - Install via Homebrew:
        ```bash
        brew install mkcert
        brew install nss # if you use Firefox
        ```
    - Alternatively, use MacPorts:
        ```bash
        sudo port selfupdate
        sudo port install mkcert
        sudo port install nss # if you use Firefox
        ```

> **Warning:** The `rootCA-key.pem` file that mkcert automatically generates gives complete power to intercept secure requests from your machine. Do not share it.



