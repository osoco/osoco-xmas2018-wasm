rustup target add wasm32-unknown-unknown
cargo build --release --target wasm32-unknown-unknown
sudo chown -R $(id -u):$(id -g) target html
cp target/wasm32-unknown-unknown/release/osoco_xmas2018.wasm html/gate_app.wasm
cp js/howler.js html
