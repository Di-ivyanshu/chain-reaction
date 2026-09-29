# Chain Reaction

The explosive strategy game — in a single HTML file. **by Divyanshu**

**▶ Play:** https://di-ivyanshu.github.io/chain-reaction/

- **Online with friends** — create a room, share the link or 5-letter code, up to 8 players. Peer-to-peer (WebRTC via PeerJS), no sign-up, no server.
- **Chat** — talk to the room in the lobby and during the game.
- **Undo** — take back your last move (online: before the next player moves; host can turn it off). Local games: unlimited undo, including the computer's reply.
- **Turn timer** — Off / 15s / 30s / 60s. When time runs out a random move is played; 3 missed turns in a row and the player is removed.
- **Exit & watch** — leave a running game but stay in the room to watch and chat.
- **Host controls** — kick any player from the lobby or mid-game (tap their name); kicked players can't rejoin.
- **Local** pass-and-play for 2–8 players, or **vs Computer** (Easy / Normal / Hard).
- Auto-reconnect on refresh, spectators, rematch, emoji reactions, sound, mobile friendly.

## Rules
Tap an empty cell or one of your own to add an orb. A cell explodes when it holds as many orbs as it has neighbours (corner 2, edge 3, middle 4), throwing an orb into each neighbour and capturing it. Explosions chain. Lose all your orbs and you're out — last player standing wins.

Note: in online games the host's tab runs the room, so the host should keep it open.
