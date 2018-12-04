# OSOCO Xmas 2018 Game

A simple 2D game to celebrate the OSOCO's 15th anniversary.

The game is built in Rust and compiled to WebAssembly.

It's a forked version of the SergiusIW's [chirperjax game](https://github.com/SergiusIW/chirperjax) using the 
[Gate](https://crates.io/crates/gate) and [Collider](https://crates.io/crates/collider) crates.

## Play Online

You can play online to this game at the [OSOCO's website](https://osoco.es/xmas2018-wasm-game/).

## Building

To be able to build the game it's required a Rust environment, so you should install Rust:

```
curl https://sh.rustup.rs -sSf | sh
```

Once you have Rust installed you can proceed to build the project with the following script:

```
$ ./build.sh
```

The previous script will add the `wasm32-unknown-unknown` Rust compiler target and build the game. Also
it will generate an `html` directory with an `index.html` file and other assets.

Finally, try to open the `html/index.html` file in your web browser.


## License

This game is licensed by OSOCO under the
[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).

The assets, found in the `src_assets/` directory, are licensed under the
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 License](https://creativecommons.org/licenses/by-nc-sa/4.0/).
