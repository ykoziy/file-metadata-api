# File Metadata Microservice
### Example usage:
https://yk-file-metadata-api.glitch.me
##### Upload file
* Send a POST request to:
`https://yk-file-metadata-api.glitch.me/api/metadata`
  * With the following data:
        upfile - File (required)

### Example output:
* After uploading file
    * `{"name":"README.md","type":"application/octet-stream","size":1344}`