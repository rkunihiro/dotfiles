#!/bin/sh

aws s3 mb s3://test-bucket

aws s3 cp --recursive /init/data/s3/test-bucket s3://test-bucket

aws s3 ls s3://test-bucket

aws s3api put-bucket-policy \
  --bucket test-bucket \
  --policy file:///init/json/s3-test-bucket-policy.json

aws s3 website s3://test-bucket \
  --index-document index.html \
  --error-document error.html
