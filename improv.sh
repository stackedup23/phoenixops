#!/bin/bash
# improv.sh — PhoenixOps email/domain checks
# Runs common ImprovMX API calls using $IMPROVMX_API_KEY from .env

set -e  # exit on errors

# ========== PhoenixOps Mail Ops ==========
echo "⚡ PhoenixOps ImprovMX — Domain Overview ⚡"

# List all domains linked to our API key
curl -s -u "$IMPROVMX_API_KEY:" https://api.improvmx.com/v3/domains | jq .

echo -e "\n=== PhoenixOps Mail Ops: Aliases for stackingtechnologiesaollc.com ==="
# List aliases for our domain
curl -s -u "$IMPROVMX_API_KEY:" \
  https://api.improvmx.com/v3/domains/stackingtechnologiesaollc.com/aliases | jq .

# === Example: Create alias (uncomment to use) ===
# echo -e "\n=== PhoenixOps Mail Ops: Create Alias (support) ==="
# curl -u "$IMPROVMX_API_KEY:" -X POST \
#   -d "alias=support" \
#   -d "forward=felixops23@proton.me" \
#   https://api.improvmx.com/v3/domains/stackingtechnologiesaollc.com/aliases
