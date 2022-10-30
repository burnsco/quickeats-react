#!/bin/bash

echo What should the version be?
read VERSION


docker build -t coreymburns/quickeats:$VERSION .
docker push coreymburns/quickeats:$VERSION
