#!/bin/bash
# improv.sh — PhoenixOps email/domain checks
# Runs common ImprovMX API calls using $IMPROVMX_API_KEY from .env

# List all domains
curl -u "$IMPROVMX_API_KEY:" https://api.improvmx.com/v3/domains

# Example: list aliases for our domain
# curl -u "$IMPROVMX_API_KEY:" https://api.improvmx.com/v3/domains/stackingtechnologiesaollc.com/aliases

# Example: create an alias (uncomment + adjust if needed)
# curl -u "$IMPROVMX_API_KEY:" -X POST \
#   -d "alias=support" \
#   -d "forward=felixops23@proton.me" \
#   https://api.improvmx.com/v3/domains/stackingtechnologiesaollc.com/aliases
