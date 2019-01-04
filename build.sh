PATH=$PATH:$HOME/.cargo/bin 
RUST_BACKTRACE=1
rustup target add wasm32-unknown-unknown
cargo build --release --target wasm32-unknown-unknown
cp -R html/* docs
sudo chown -R $(id -u):$(id -g) target docs
cp target/wasm32-unknown-unknown/release/osoco_xmas2018.wasm docs/gate_app.wasm
cp js/*.js docs
sudo rm -rf html
cd docs
python -m SimpleHTTPServer
