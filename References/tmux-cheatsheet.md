# tmux Cheatsheet

> Default prefix: `Ctrl + b` — press this before every command below (shown as `<prefix>`).

---

## Sessions

| Command | Description |
|---|---|
| `tmux` | Start a new session |
| `tmux new -s <name>` | Start a named session |
| `tmux ls` | List sessions |
| `tmux attach` | Attach to last session |
| `tmux attach -t <name>` | Attach to a named session |
| `tmux kill-session -t <name>` | Kill a session |
| `tmux kill-server` | Kill all sessions |
| `<prefix> $` | Rename current session |
| `<prefix> d` | Detach from session |
| `<prefix> s` | List & switch sessions (interactive) |
| `<prefix> (` / `)` | Switch to prev / next session |

---

## Windows (Tabs)

| Command | Description |
|---|---|
| `<prefix> c` | Create new window |
| `<prefix> ,` | Rename current window |
| `<prefix> &` | Kill current window |
| `<prefix> w` | List & switch windows (interactive) |
| `<prefix> n` | Next window |
| `<prefix> p` | Previous window |
| `<prefix> 0–9` | Switch to window by number |
| `<prefix> l` | Last (previously used) window |

---

## Panes (Splits)

| Command | Description |
|---|---|
| `<prefix> %` | Split pane vertically (side by side) |
| `<prefix> "` | Split pane horizontally (top/bottom) |
| `<prefix> x` | Kill current pane |
| `<prefix> z` | Toggle pane zoom (fullscreen) |
| `<prefix> {` / `}` | Swap pane left / right |
| `<prefix> q` | Show pane numbers |
| `<prefix> q <number>` | Jump to pane by number |
| `<prefix> !` | Break pane into its own window |
| `<prefix> Arrow` | Move between panes |
| `<prefix> Ctrl + Arrow` | Resize pane (hold `Ctrl`) |
| `<prefix> Space` | Cycle through pane layouts |

---

## Copy Mode

| Command | Description |
|---|---|
| `<prefix> [` | Enter copy mode |
| `q` | Exit copy mode |
| `Space` | Start selection (vi mode) |
| `Enter` | Copy selection |
| `<prefix> ]` | Paste buffer |
| `/` | Search forward |
| `?` | Search backward |
| `n` / `N` | Next / previous search match |

> Enable vi keys in copy mode by adding `set-window-option -g mode-keys vi` to `~/.tmux.conf`.

---

## Miscellaneous

| Command | Description |
|---|---|
| `<prefix> :` | Open tmux command prompt |
| `<prefix> ?` | Show all keybindings |
| `<prefix> t` | Show clock |
| `<prefix> ~` | Show messages/log |
| `tmux source ~/.tmux.conf` | Reload config |

---

## Useful `.tmux.conf` Snippets

```bash
# Change prefix to Ctrl+a
unbind C-b
set -g prefix C-a
bind C-a send-prefix

# Enable mouse support
set -g mouse on

# Start windows and panes at 1, not 0
set -g base-index 1
setw -g pane-base-index 1

# Vi keys in copy mode
setw -g mode-keys vi

# Easier splits
bind | split-window -h
bind - split-window -v

# Reload config
bind r source-file ~/.tmux.conf \; display "Config reloaded!"
```
