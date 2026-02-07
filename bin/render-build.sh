#!/usr/bin/env bash

# exit on error
set -o errexit

npm i
node ace build --ignore-ts-errors --production --assets
cd build
echo "RUNNING CI..."
npm ci --production
echo "RUNNING MIGRATION"
# ENV_PATH=/etc/secrets/.env
node ace migration:run --force
echo "GOING OUT OF BUILD"
cd ..
