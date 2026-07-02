# Encrypt .env to .env.enc
encrypt:
    sops encrypt --input-type dotenv --output-type dotenv .env > .env.enc

# Decrypt .env.enc to .env
decrypt:
    sops decrypt --input-type dotenv --output-type dotenv .env.enc > .env

# Edit encrypted .env.enc in place
edit-env:
    sops --input-type dotenv --output-type dotenv .env.enc
