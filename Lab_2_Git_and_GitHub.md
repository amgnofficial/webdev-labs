# Web Development — DAUST Fall 2026

# Lab 2 — Git and GitHub: From Installation to Submitting Your Work

By the end of this lab, your `lab1` folder will be on GitHub and live on the web. From now on this is how you submit work in this course, including the weekly commits of **Assignment 1**.

**How to work.** Run every command yourself in a terminal, and read its output. Git's messages usually tell you exactly what to do next. Write each **Prediction** down before you run the command, and keep your answers in a file that you will commit in Part 11 (`lab2/ANSWERS.md`).

|Word|Meaning|
|---|---|
|**Repository** (repo)|A project folder whose history Git records|
|**Commit**|A saved snapshot of the project, with a message and an author|
|**Staging area**|The list of changes you have chosen for the **next** commit|
|**Remote**|A copy of the repository somewhere else, usually on GitHub (`origin`)|
|**Push / Pull**|Send your commits to the remote / bring the remote's commits to you|
|**Branch**|An independent line of work inside the same repository|

---

## Part 0 — Which Terminal Should I Use?

Every command in this lab is typed in a **terminal**. The commands are identical on every system, as long as you use the right terminal:

|Your computer|Use|Do **not** use for this lab|
|---|---|---|
|**Windows**|**Git Bash**, installed with Git in Part 1|Command Prompt (`cmd`), PowerShell, WSL|
|**macOS**|**Terminal** (Applications → Utilities)|—|
|**Linux**|Your usual terminal|—|

> **Windows users — you do not need WSL.** WSL ("Windows Subsystem for Linux") runs a separate Linux system inside Windows. If you have never heard of it, ignore it. If you already have it, still use **Git Bash** for this course. WSL has its **own** Git, its own settings, and its own SSH keys, and its files live apart from your Windows folders. Mixing the two is the most common cause of "it worked yesterday" problems.

### Terminal survival kit

|Command|Does|Example|
|---|---|---|
|`pwd`|Show the folder you are in|`/c/Users/Awa`|
|`ls` / `ls -a`|List the files / including hidden ones||
|`cd <folder>`|Go into a folder|`cd webdev-labs`|
|`cd ..` / `cd ~`|Go up one level / go to your home folder||
|`mkdir <name>`|Create a folder|`mkdir git-practice`|
|`cat <file>`|Print a file|`cat README.md`|
|`code .`|Open the current folder in VS Code||
|`clear`|Clear the screen||

Press **Tab** to complete folder and file names, and **↑** to bring back the previous command.

### Windows: how Git Bash sees your files

* Git Bash writes Windows paths with forward slashes: `C:\Users\Awa\Documents` becomes `**/c/Users/Awa/Documents**`. Your home folder `C:\Users\Awa` is `**\~**`.
*  **Open Git Bash directly in a folder:** in File Explorer, right-click the folder → **Open Git Bash here**. On Windows 11 it is under **Show more options**.
*  **Copy and paste in Git Bash:** selecting text copies it. Paste with **Shift + Insert** or a **right-click**. `Ctrl + V` does not always work.
*  **Open the current folder in Explorer:** `explorer .`
*  **Show file extensions** so that you can see `.gitignore` and `.html` correctly: File Explorer → **View → Show → File name extensions**. Create files in **VS Code**, not Notepad. Notepad secretly adds `.txt`.
*  **Avoid OneDrive folders for repositories.** On many laptops, `Documents` and `Desktop` are synchronised by OneDrive, which can corrupt the hidden `.git` folder. Keep your repositories directly in your home folder, `C:\Users\<you>` (that is, `~`).

---

## Part 1 — Installing Git

**Windows**

1. Download the **x64 Setup** installer from **https://git-scm.com/install/windows** and run it. Choose **ARM64** only if your laptop has an ARM processor (for example a Snapdragon). *Alternative, if you know `winget`:* in PowerShell, `winget install --id Git.Git -e --source winget`.
2. Click **Next** through the screens and keep the defaults, **except** on two screens:
   *  *Choosing the default editor used by Git* → **Use Visual Studio Code as Git's default editor**. (The default is Vim, which beginners often cannot exit.)
   *  *Adjusting the name of the initial branch in new repositories* → **Override the default branch name for new repositories**, and type `main`.

   Among the defaults you keep, **Git Credential Manager** is enabled, and line endings are set to *Checkout Windows-style, commit Unix-style*. Both are correct.
3. When it finishes, open **Git Bash** from the Start menu.

**macOS**

```bash
xcode-select --install      # installs Apple's command-line tools, which include Git
```

Or, if you use Homebrew: `brew install git`.

**Linux (Ubuntu / Debian)**

```bash
sudo apt update && sudo apt install git
```

**Everyone — verify:**

```bash
git --version
```

**Checkpoint 1** — the command prints a version such as `git version 2.56.0` (on Windows, `2.56.0.windows.1`). Any recent 2.x version is fine.

### Use Git Bash inside VS Code (Windows)

In VS Code, press **Ctrl + Shift + P**, type **Terminal: Select Default Profile**, and choose **Git Bash**. Then open **Terminal → New Terminal**: the prompt should end with `$`, not `>`. From now on, you can type every command in VS Code's terminal.

> Already had VS Code open during the installation? Close it completely and reopen it, so that it finds Git.

---

## Part 2 — Telling Git Who You Are

Every commit records an author. Configure yours **once** per computer:

```bash
git config --global user.name "Awa Diop"
git config --global user.email "awa.diop@example.com"   # the same email as your GitHub account
git config --global init.defaultBranch main
git config --global core.editor "code --wait"
git config --global pull.rebase false                   # how "git pull" combines histories (Part 10)
```

Check the result:

```bash
git config --list --global
```

**Checkpoint 2** — your name, email, `init.defaultbranch=main`, `core.editor=code --wait`, and `pull.rebase=false` appear in the list.

> **Why set `main`?** Older Git versions name the first branch `master`, while GitHub uses `main`. Git 3.0 (expected around the end of 2026) will use `main` by default. Until then, this setting keeps your computer and GitHub consistent.

> **Keep your email private (optional).** On GitHub, **Settings → Emails → Keep my email addresses private** gives you an address like `12345+awadiop@users.noreply.github.com`. You can use it in `user.email` instead of your real address.

---

## Part 3 — Creating Your GitHub Account

1. Go to **https://github.com/signup**.
2. Choose a **professional username**, because employers will see it: for example `awadiop` or `awa-diop`, not `darkninja2006`.
3. Verify your email address.
4.  **Enable two-factor authentication (2FA):** **Settings → Password and authentication → Enable two-factor authentication**. GitHub requires 2FA for accounts that contribute code, so set it up now rather than being blocked later. Use an **authenticator app** (Google Authenticator, Microsoft Authenticator…) or **GitHub Mobile**; you can also add a **passkey**. **Download your recovery codes and keep them somewhere safe.** Without them, a lost phone means a lost account.
5. Complete your profile: your real name, a photo, and "Student at DAUST".

**Checkpoint 3** — you can log in, 2FA is on, and your profile page `https://github.com/<username>` exists.

---

## Part 4 — Connecting Your Computer to GitHub (SSH Key)

GitHub does not accept your account password from the terminal. Your computer proves its identity with an **SSH key**, a pair of files: a **private** key that never leaves your computer, and a **public** key that you give to GitHub. Run these commands in **Git Bash** on Windows, and in the Terminal on macOS and Linux.

### 4a. Create the key

```bash
ssh-keygen -t ed25519 -C "awa.diop@example.com"
```

*  *Enter file in which to save the key*: press **Enter** to accept the default (`~/.ssh/id_ed25519`).
*  *Enter passphrase*: a passphrase protects the key if your laptop is stolen, and you will type it when you push. On a personal laptop, you may press **Enter** twice for none. Nothing appears on screen while you type a passphrase; that is normal.

### 4b. Give the public key to GitHub

Copy the **public** key. Its file name ends in `.pub`:

|System|Command|
|---|---|
|Windows (Git Bash)|`clip < ~/.ssh/id_ed25519.pub`|
|macOS|`pbcopy < ~/.ssh/id_ed25519.pub`|
|Linux|`cat ~/.ssh/id_ed25519.pub`, then select the line and copy it|

The copied text is one line: `ssh-ed25519 AAAA… awa.diop@example.com`. On GitHub, go to **Settings → SSH and GPG keys → New SSH key**. Enter a title such as "My laptop", keep *Key type: Authentication Key*, paste the key, and click **Add SSH key**.

> **Never** share or paste the file **without** `.pub`. That is your private key; anyone who has it can act as you.

### 4c. Test the connection

```bash
ssh -T git@github.com
```

The first time, the terminal asks *"Are you sure you want to continue connecting (yes/no/\[fingerprint\])?"*. Type `yes` in full and press Enter.

**Checkpoint 4** — the response is `Hi <username>! You've successfully authenticated, but GitHub does not provide shell access.` That message means it worked.

> **The test hangs, then says `Connection timed out`?** Some networks, including some campus Wi-Fi, block the SSH port (22). GitHub also accepts SSH on port 443. Create the file `~/.ssh/config` (`code ~/.ssh/config`) with:
>
> ```text
> Host github.com
>     Hostname ssh.github.com
>     Port 443
>     User git
> ```
>
> Save it, run `ssh -T git@github.com` again, and answer `yes`.

---

## Part 5 — Your First Repository, Locally

Practise in a scratch folder first, **not** inside `lab1`.

```bash
cd ~                       # your home folder (Windows: C:\Users\<you>)
mkdir git-practice
cd git-practice
git init
```

**Prediction 5a.** Run `ls -a`. What new, hidden item appeared? Then run `git status`.

Create a file and follow it through the **three areas** of Git:

```text
 working folder  ──git add──►  staging area  ──git commit──►  repository (history)
 (your files)                  (the next snapshot)            (all snapshots)
```

```bash
echo "# Git Practice" > README.md
git status                 # README.md is "untracked": Git sees it, but does not record it yet
git add README.md
git status                 # "Changes to be committed": it is staged
git commit -m "Add README"
git status                 # "nothing to commit, working tree clean"
git log --oneline          # one commit
```

Now make a change and inspect it **before** you commit:

```bash
echo "Practising Git for the DAUST Web Development course." >> README.md
git diff                   # what changed since the last commit (+ added, - removed)
git add README.md
git commit -m "Describe the purpose of the repository"
git log --oneline
```

> If `git diff` or `git log` fills the screen and shows `:` or `(END)` at the bottom, you are in a viewer. Press **q** to leave it.

> **Windows:** a message such as `LF will be replaced by CRLF` is only information about line endings. You can ignore it.

**Prediction 5b.** Open the folder in VS Code (`code .`), delete everything in `README.md`, type nonsense, and save. Now run:

```bash
git restore README.md
```

What is in the file now? What does this tell you about committed work?

### Writing good commit messages

A commit message completes the sentence *"If applied, this commit will…"*

|✘ Weak|✔ Clear|
|---|---|
|`update`|`Add email validation to the guest form`|
|`fix`|`Stop the counter from going below zero`|
|`asdf`|`Build the weekly menu from the meals array`|

Commit **small, meaningful steps**: one commit per feature or fix, not one commit at the end of the week.

**Checkpoint 5** — `git log --oneline` shows two commits with clear messages.

**Question 5.** In your own words, why does Git have a staging area instead of committing every changed file automatically? (Hint: you changed three files, but only two of them belong to the feature you just finished.)

---

## Part 6 — Ignoring Files: `.gitignore`

Some files must **never** be committed: system files, editor settings, dependencies, and secrets.

```bash
echo "temporary" > notes.tmp
mkdir node_modules && echo "x" > node_modules/big.js
git status
```

In VS Code, create a file named exactly `.gitignore`, with the dot and no extension:

```text
# system and editor files
.DS_Store
Thumbs.db
desktop.ini
.vscode/

# dependencies — reinstalled with npm, never committed
node_modules/

# temporary files and secrets
*.tmp
.env
```

```bash
git status                 # notes.tmp and node_modules/ are no longer listed
git add .gitignore
git commit -m "Ignore system files, dependencies, and temporary files"
```

**Checkpoint 6** — `git status` is clean, even though `notes.tmp` still exists on disk.

> `git add .` stages **everything** in the folder. Always run `git status` first to see what "everything" means.

---

## Part 7 — Putting the Repository on GitHub (Push)

1. On GitHub, click **+ → New repository**.
2. Name: `git-practice` · **Public** · leave "Add README", ".gitignore", and "license" **off** (you already have files) → **Create repository**.
3. GitHub shows the setup commands. Make sure **SSH** is selected (the URL starts with `git@github.com:`), then run the "push an existing repository" commands:

```bash
git remote add origin git@github.com:<username>/git-practice.git
git branch -M main          # makes sure your branch is called main
git push -u origin main
```

Refresh the GitHub page: your files and commits are there.

> `-u` is needed only the first time. It links your `main` to `origin/main`, so later a plain `git push` is enough.

Make one more change to `README.md` locally, then:

```bash
git add README.md
git commit -m "Add a line about GitHub"
git push
```

**Checkpoint 7** — GitHub shows 4 commits. Click the commit count and open one commit to see its diff.

---

## Part 8 — Changes From Elsewhere (Pull and Clone)

### 8a. Pull

On GitHub, open `README.md`, click the ✏️ pencil, add a line, and click **Commit changes**. That commit exists on GitHub but **not** on your computer.

**Prediction 8.** Run `git log --oneline` locally. Is the new commit there?

```bash
git pull
git log --oneline
```

### 8b. Clone

Cloning downloads a full copy of a repository, with all its history. This is how you get a project onto a new computer, or get a classmate's project:

```bash
cd ~
git clone git@github.com:<username>/git-practice.git git-practice-copy
cd git-practice-copy
git log --oneline
```

**Checkpoint 8** — both local folders have the same history as GitHub. Delete the copy afterwards: `cd ~ && rm -rf git-practice-copy`.

> **Rule for every work session:** `git pull` when you **start**, and `git push` when you **stop**.

---

## Part 9 — Branches and Pull Requests

Professional teams do not commit directly on `main`. Each feature is built on a **branch**, proposed as a **Pull Request (PR)**, reviewed, and then merged.

```bash
cd ~/git-practice
git switch -c add-contact          # create a branch and move to it
echo "Contact: awa.diop@example.com" >> README.md
git add README.md
git commit -m "Add contact line"
```

**Prediction 9.** Run `git switch main` and look at `README.md` (`cat README.md`). Is the contact line there? Then run `git switch add-contact` and look again.

Push the branch and open a PR:

```bash
git push -u origin add-contact
```

1. On GitHub, click **Compare & pull request**.
2. Write a title and a short description of **what** changed and **why** → **Create pull request**.
3. Look at the **Files changed** tab. This is what a reviewer reads.
4. Click **Merge pull request → Confirm merge**, then **Delete branch**.

Bring the merged result back to your computer:

```bash
git switch main
git pull
git branch -d add-contact          # delete the local branch; it is merged
```

**Checkpoint 9** — `main` contains the contact line, both locally and on GitHub, and the PR shows as **Merged**.

---

## Part 10 — Resolving a Merge Conflict

A **conflict** happens when two commits change the **same line** in different ways. Git cannot choose, so it asks you. Create one on purpose:

1. On GitHub, edit the **first line** of `README.md` to `# Git Practice — GitHub version` and commit.
2. Locally, **without pulling**, edit the same line to `# Git Practice — laptop version`, then:

```bash
git add README.md
git commit -m "Rename title on laptop"
git pull
```

Git reports `CONFLICT (content): Merge conflict in README.md`. Open the file in VS Code:

```text
<<<<<<< HEAD
# Git Practice — laptop version
=======
# Git Practice — GitHub version
>>>>>>> 1a2b3c4 (…)
```

Edit the file so that it contains the final version you want, and **delete the three marker lines**. VS Code also offers buttons above the conflict: *Accept Current Change*, *Accept Incoming Change*, *Accept Both Changes*. Then:

```bash
git add README.md
git commit -m "Merge title changes"
git push
```

> If `git pull` complains about "divergent branches", you skipped the `pull.rebase` setting from Part 2: run it, then `git pull` again.
>
> If `git commit` opens a VS Code tab with a prepared merge message, close that tab to finish the commit. If instead a strange full-screen editor appears in the terminal (Vim), press **Esc**, type `:wq`, and press **Enter**. Then redo the `core.editor` setting from Part 2.

**Checkpoint 10** — `git log --oneline --graph` shows the two lines of history joining.

**Question 10.** How could two team members avoid most conflicts? Give two habits.

---

## Part 11 — Submitting Lab 1 (and Every Lab After It)

You will keep **one** repository for all your Web Development labs. Each lab is a folder inside it: `lab1` now, then `lab2`, and later labs as they come.

### 11a. Build the folder

1. Create the repository folder in your home folder (**not** in OneDrive): `mkdir ~/webdev-labs`
2.  **Move** your `lab1` folder into it. The simplest way: `explorer ~/webdev-labs` on Windows, or `open ~/webdev-labs` on macOS, then drag `lab1` into the window.
3. Create a `lab2` folder for this lab's answers.
4. Open the whole folder in VS Code:

```bash
cd ~/webdev-labs
code .
```

1. Add the `.gitignore` from Part 6 and a `README.md`:

```markdown
# Web Development Labs — DAUST Fall 2026

**Student:** Awa Diop · **GitHub:** awadiop

## Lab 1 — JavaScript and the DOM

| Exercise | Topic | Open |
|---|---|---|
| 1 | Strings (Console) | [exercise1](lab1/exercise1/index.html) |
| 2 | Conditionals and loops (Console) | [exercise2](lab1/exercise2/index.html) |
| 3 | Arrays of objects (Console) | [exercise3](lab1/exercise3/index.html) |
| 4 | Selecting and changing elements | [exercise4](lab1/exercise4/index.html) |
| 5 | Creating elements from data | [exercise5](lab1/exercise5/index.html) |
| 6 | Click, input, focus, and blur | [exercise6](lab1/exercise6/index.html) |
| 7 | A form | [exercise7](lab1/exercise7/index.html) |

Answers: [Lab 1](lab1/ANSWERS.md) · [Lab 2 — Git](lab2/ANSWERS.md)
```

The result:

```text
webdev-labs/
├── .gitignore
├── README.md
├── lab1/
│   ├── exercise1/ … exercise7/
│   └── ANSWERS.md
└── lab2/
    └── ANSWERS.md       your predictions and answers from this lab
```

### 11b. One commit per exercise

Commit the exercises **separately**, so that the history tells the story:

```bash
cd ~/webdev-labs
git init
git status                                   # check that only your lab files are listed
git add .gitignore README.md
git commit -m "Add README and .gitignore"

git add lab1/exercise1
git commit -m "Lab 1: complete Exercise 1 (strings)"
git add lab1/exercise2
git commit -m "Lab 1: complete Exercise 2 (conditionals and loops)"
# … continue the same way for exercise3 to exercise7 …

git add lab1/ANSWERS.md lab2
git commit -m "Add answers for Labs 1 and 2"
git log --oneline
```

Create an **empty** public repository named `webdev-labs` on GitHub (no README, no .gitignore), then:

```bash
git remote add origin git@github.com:<username>/webdev-labs.git
git branch -M main
git push -u origin main
```

### 11c. Publish it with GitHub Pages

1. In the repository on GitHub: **Settings → Pages**.
2.  *Build and deployment → Source*: **Deploy from a branch** · *Branch*: `main` · *Folder*: `/ (root)` → **Save**.
3. After a minute or two, the address appears at the top of the Pages settings: `https://<username>.github.io/webdev-labs/`. It shows your README as the home page.

Open `https://<username>.github.io/webdev-labs/lab1/exercise7/index.html` and test the guest form **online**. Then open Exercise 1 and check its ✔ results in the Console.

> **Case matters online.** Windows and macOS treat `Style.css` and `style.css` as the same file; GitHub Pages does not. If a page works on your computer but loses its styles or scripts online, check the upper and lower case in every `href` and `src`.

### 11d. Submit

On Mycourses, submit **two links**:

1. the repository: `https://github.com/<username>/webdev-labs`
2. the live site: `https://<username>.github.io/webdev-labs/`

**Checkpoint 11** — a classmate opens both links on their phone. The README links work, and Exercises 4 to 7 run.

### 11e. From now on

For every new lab: create the folder (`lab3`, …) inside `webdev-labs`, commit as you go, and push. After every work session: `git status` → `git add` → `git commit -m "…"` → `git push`. The same routine applies to your **Assignment 1** repository and its weekly commits.

---

## Troubleshooting

|Message or symptom|Cause|Fix|
|---|---|---|
|`git: command not found` / `'git' is not recognized`|Git is not installed, or the terminal was open during the installation|Close and reopen the terminal (and VS Code); on Windows, use **Git Bash**|
|`code: command not found`|VS Code is not on the PATH|Reopen the terminal. On macOS: in VS Code, **Ctrl/Cmd + Shift + P → Shell Command: Install 'code' command in PATH**|
|`Author identity unknown`|Name and email are not configured|Part 2|
|`fatal: not a git repository`|The terminal is in the wrong folder|`pwd`, then `cd` into the project|
|`Permission denied (publickey)`|GitHub does not know this computer's key, or the key was created in another terminal (for example WSL)|Redo Part 4 **in Git Bash**, and check that the remote starts with `git@github.com:` (`git remote -v`)|
|`ssh: connect to host github.com port 22: Connection timed out`|The network blocks port 22|Use port 443: the box at the end of Part 4|
|`error: src refspec main does not match any`|Nothing has been committed yet, or the branch is called `master`|Commit first; then `git branch -M main`|
|`! [rejected] … (fetch first)`|GitHub has commits you do not have|`git pull`, then `git push`|
|`remote origin already exists`|The remote was already added|`git remote set-url origin git@github.com:<username>/<repo>.git`|
|`LF will be replaced by CRLF` (Windows)|Line-ending information only|Nothing to fix|
|A strange editor fills the terminal|Git opened Vim|**Esc**, type `:wq`, **Enter**, then set `core.editor` (Part 2)|
|`git status` lists your whole home folder, or the repo shows unrelated files|`git init` was run in the wrong folder, for example `~`|Ask for help before deleting anything; the fix is to remove that stray `.git` folder|
|404 on GitHub Pages|Pages is still building, or the path is wrong|Wait 2 minutes; check the case of the path and that the file exists on GitHub|

---

## Cheat Sheet

|Command|Does|
|---|---|
|`git init`|Start recording history in this folder|
|`git status`|What changed, what is staged — run it constantly|
|`git add <file>` / `git add .`|Stage a file / everything|
|`git commit -m "…"`|Save a snapshot of what is staged|
|`git log --oneline --graph`|Show the history (press `q` to leave)|
|`git diff`|Show changes that are not staged yet|
|`git restore <file>`|Discard changes to a file since the last commit|
|`git clone <url>`|Copy a remote repository to your computer|
|`git remote add origin <url>` / `git remote -v`|Link to a GitHub repository / show the link|
|`git push` / `git pull`|Send / receive commits|
|`git switch -c <name>` / `git switch <name>`|Create and move to a branch / move to a branch|
|`git merge <branch>`|Bring another branch's commits into the current one|

These are the everyday commands. Git has **many more** (`stash`, `rebase`, `revert`, `tag`, `blame`…). The free book **Pro Git** (https://git-scm.com/book) explains all of them, and GitHub's own guide is at https://docs.github.com/get-started.

---

## Deliverables

* The repository `https://github.com/<username>/webdev-labs`, containing `lab1/` and `lab2/`, with at least 9 commits with clear messages
* The live site `https://<username>.github.io/webdev-labs/`
* ` lab2/ANSWERS.md`— predictions 5a–9, questions 5 and 10, and a copy of your `git log --oneline --graph` output from Part 10 (in `git-practice`)