#! /bin/bash

file=".env"
source $file

if [[ $FILE_UPLOAD == true ]]; then
  echo 'Adding file vault service ...'
  fileVaultRepo="https://github.com/UKHomeOffice/file-vault.git"
  fileVaultFolder="fileVault"

  if [ ! -d "$fileVaultFolder" ]; then
    mkdir "$fileVaultFolder"
  else
    if [ -z "$( ls -A '/path/to/dir' )" ]; then
       echo "Empty"
    else
       echo "Not Empty"
    fi
  fi

  if [ -z "$(ls -A $fileVaultFolder)" ]; then
     git clone "$fileVaultRepo" "$fileVaultFolder"
  fi

  envVariableValueChecks=(
    "FILE_VAULT_URL:http://localhost:3000"
    "PORT:3001"
    "RETURN_ORIGINAL_SIGNED_URL:yes"
    "ALLOW_GENERATE_LINK_ROUTE:yes"
    "AWS_REGION:eu-west-2"
    "AWS_SIGNATURE_VERSION:v4"
    "AWS_EXPIRY_TIME:604800"
  )

  envVariableValueExistsChecks=(
    'AWS_ACCESS_KEY_ID'
    'AWS_SECRET_ACCESS_KEY'
    'AWS_PASSWORD'
    'AWS_KMS_KEY_ID'
    'AWS_BUCKET'
    'PROXY_CLIENT_SECRET'
    'PROXY_CLIENT_ID'
    'PROXY_DISCOVERY_URL'
  )

  echo "Checking for $file file ..."
  envVariableMistakes=false

  if [ -f $file ]; then
    echo "$file file found"
    echo 'checking values of essential variables ...'
    source $file


    for variable in "${envVariableValueChecks[@]}";
    do
      KEY=${variable%%:*}
      VALUE=${variable#*:}
      if [[ "${!KEY}" != "$VALUE" ]]; then
        envVariableMistakes=true
        echo "$KEY value is incorrect, you have $KEY = ${!KEY}, should be '$VALUE'"
      fi
    done

    for variableName in "${envVariableValueExistsChecks[@]}";
    do
      if [ -z "${!variableName}" ]; then
        echo "$variableName should be added to the $file file with a value"
      fi
    done

  else
    echo "File $file does not exist. Creating one ..."
    for variable in "${envVariableValueChecks[@]}";
      do
        KEY=${variable%%:*}
        VALUE=${variable#*:}
        echo "$KEY=$VALUE" >> $file
      done
    for variableName in "${envVariableValueExistsChecks[@]}";
      do
        echo "Please enter the value for $variableName:"
        read -r value
        echo "$variableName=$value" >> $file
      done
  fi

  if [[ $envVariableMistakes != false ]]; then
    echo 'Please fix the values of the above env variables and run the script again.'
    exit
  else
    echo "$file check completed ..."
  fi

else
  echo 'File vault not needed ...'
fi