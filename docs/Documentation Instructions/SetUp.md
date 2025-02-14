# <span class="h1style">Setting up the server:</span>
This page will help you navigate to the right pages, settings, and installations to set up your server correctly. This page is verified by: *Laerk Ndreko*

## <span class="h2style">Initial Navigation</span>
To start, navigate to **console.cloud.com** using an appropriate BU or other authorized account.
- If you are given access to the project, you should be able to see **"empirica-fall-2024"**.
  - If this is not the case, please contact a team lead or supervisor of the research to access.
- On the top-left-hand side, navigate to the three bars, hover over **Compute Engine**, and select **VM Instances**.

---

## <span class="h2style">Server Settings</span>
Now, navigate to **"Create Instance"**. Select **"CREATE VM FROM..."**
- Select **"Marketplace"** and search for **"Ubuntu 22.04 LTS (Jammy)"**.
  - It is **IMPORTANT** that you select this version and not the **Pro** version.
- Launch the virtual operating system.

- Now rename the server to **"(yourname)-h2h-server"**.
    - There is no requirement to what you name your server however it is easy to keep track of:
      - who: started the server.
      - what: the server will host.

- Once that is done, ensure that your server is selected to run with **"E2"** under the **"Machine Configuration"** section.
- **Important** - under **Machine type**:
  - select **High CPU**
  - then select **e2-highcpu-8**
    - **NOTE: If you did this right, the monthly estimate should be "$145.45"**.
 
- Next, under **Identity and API access - Access scopes** select **Allow full access to all Cloud APIs**.

- Next, under **Firewall**, select both **Allow HTTP traffic** AND **Allow HTTPS traffic**.

- **ALL DONE HERE!** Now select "CREATE".
  - Wait for the server to be created and then move on to the next steps.
---
## <span class="h2style">Firewall Settings</span>

- At the top of the page, search for and click **"Firewall"**. Create a new firewall rule.
  - Name it "(yourname)-http-allowall".
    - Enter "Allow all incoming connections to (yourname)'s machines." in the description.
  - Turn on logs.
  - Enter "(yourname)-http-server" in **Target tags**.
  - Enter "0.0.0.0/0" in **Source IPV4 Ranges**.
  - Under **Protocols and ports**, under **Specified protocols and ports**, under **BOTH TCP and UDP** enter "80, 443, 8000".
  - Create!
 
- Navigate back to your vm machine, select it and click edit.
  - Under both "Labels" and "Network Tags", enter **"(yourname)-http-server"**, and click save.

---
## <span class="h2style">SSH and Terminal Instructions</span>
- Now we have to enter the SSH terminal and install the necessary packages.
  - For this to work ensure that any settings on your device, allow pop-ups (including disabling any ad-blockers).

- There should be a button labeled "SSH" at your VM Machine, select that and you should have a terminal pop up on your screen.

- Once that is loaded, now we have to install our libraries/packages for this to work. For that to happen we need to initialize an environment.
- We will be using Miniconda. Copy and paste ```wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh``` into your terminal and press enter.
  - Enter the command ```bash Miniconda3-latest-Linux-x86_64.sh``` and hit enter.
  - Now your terminal should be going through Miniconda's terms and conditions (to shortcut this press q).
  - Follow all instructions and select "yes" when prompted to.
  - If the terminal asks for a folder location, you may hit **Enter** or select a folder yourself.

- Once Miniconda is downloaded, enter ```source ~/.bashrc```.
  - You should see a "(base)" environment to the left of your terminal line, if this appears you have taken all of the correct steps!
  - We now have to create and activate our environment, copy and paste these commands into your terminal:
    ```
    conda create --name empirica_env python=3.9
    conda activate empirica_env
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
    \. "$HOME/.nvm/nvm.sh"
    nvm install 22
    conda install jupyterlab
    ```
    - You may give your environment another name as well.
  - Once those packages are installed, now install Caddy & Empirica:
    ```
    sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
    curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
    curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
    sudo apt update
    sudo apt install caddy
    curl -fsS https://install.empirica.dev | sh
    ```
  - Now you should have a Caddyfile, we will edit it in vim:```sudo vi /etc/caddy/Caddyfile```
  
  **IMPORTANT COMMANDS FOR VIM:**
    - "i" to insert/edit text
    - "Esc" to stop inserting/editing
    - ":" to enter "quit" mode
    - "q!" to quit without saving changes
    - "wq!" to quit and save changes
 
  - In your Caddyfile, comment all code there out, and at the very top of the file insert:
  ```
  :80 { 
    reverse_proxy :3000 
  }
  ```
  - Quit and save changes!

---

## <span class="h2style">SSH-Keygen & Repo Instructions</span>
- Run ```ssh-keygen```.
  - You can pick and choose your own ssh-key password & location to store your ssh-key information.
- Run ```cat ~/.ssh/id_rsa.pub```
  - **NOTE:** do not EVER print your private ssh-key!!!
- Copy your public key and go to your Github account.
  - Go to your Github profile, and go to settings.
  - Navigate to SSH and GPG keys, click "New SSH Key".
  - Name your key "gcp instance empirica game"
  - Double-check that your key is an **authentication key**.
 
- Now, go to the H2H repo, and clone using SSH. Copy and paste that into your terminal!
- Make sure ```git clone``` is in front of your pasted link before you hit enter!
- Now cd into your repository and enter ```cd client && npm i && cd ../server/ && npm i && cd ../ && empirica```.
  - Once your build is created, hit ```Ctrl``` + ```C```.
- Enter ```empirica bundle```.
- Move the newly created "tar.zst" file back into your home directory (use ```mv```).
- Now do ```empirica serve < tar.zst filename >```.
- Your server will be running!
  - To remove the tajriba.json local file and retry your build, run ```rm .empirica/local/*``` first.

---

# <span class="h2style">Running the server in a browser:</span>
- Once your server is running, return to your GCP instance.
- Click on its external IP, this should take you to a new tab.
- In the URL bar, ensure that your URL begins with **http://** and ends in either **:80** or **:80/admin**.
  - The admin username is **"admin"**.
  - To access the admin password, contact the research team.
- Now, you should be able to run experiments on your IP's admin page, players can join by entering your machine's external IP into a browser.

---

# <span class="h2style">Happy Experimenting!</span>

---
