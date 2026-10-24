# Lab 2 — Git and GitHub Answers

## Prediction 5a
When running `ls -a`, a hidden `.git` folder appears. `git status` shows `README.md` as an untracked file because Git recognizes it in the directory but isn't tracking its changes yet.

## Prediction 5b & Question 5
- **Prediction 5b**: Running `git restore README.md` reverts the file back to its last committed state, completely erasing the unsaved/unstaged nonsense text. This shows that committed work is safely locked into Git's historical snapshots.
- **Question 5**: The staging area allows developers to selectively choose which modified files or specific changes belong to the next logical commit, rather than forcing an automatic commit of every single modified file in the working tree.

## Prediction 8
Running `git log --oneline` locally does not show the commit made directly on GitHub yet, because the local repository is unaware of remote changes until you fetch or pull them.

## Prediction 9
When switching to `main`, the contact line is missing because it only exists inside the `add-contact` branch. When switching back to `add-contact`, the line reappears.

## Question 10
Two habits to avoid most merge conflicts:
1. Communicate with team members to avoid editing the exact same lines of code simultaneously.
2. Pull frequently (`git pull`) from the main branch to stay synchronized with remote changes before writing new code.

## Part 10 — Git Log Graph
*(Remplace ceci par le résultat de ton `git log --oneline --graph` si tu as fait la pratique, ou garde un exemple visuel de fusion)*