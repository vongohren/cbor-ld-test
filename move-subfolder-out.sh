# USE WITH CAUTION

# How to use
# Follow github steps up to when you have cloned the repo down to a folder.
# Make sure you have a repo ready to be received on
# Run this script with the folder path and the repo url, prefer git: (ssh)urls over https urls

# Inspiration
# https://docs.github.com/en/get-started/using-git/splitting-a-subfolder-out-into-a-new-repository
# This is a script preparing a move for a subfolder,
# USE WITH CAUTION
# Source for creation: https://trello.com/c/tVKuyjzj/3184-cbor-ld-qr-test

if test -z "$1" 
then
      echo "You need to add a folder that you are cleaning out for a new repo to run this command"
      exit 0
fi


if test -z "$2" 
then
      echo "You need to add a git repo for where this new code shall live"
      exit 0
fi

currentscript="$0"

# Function that is called when the script exits:
function finish {
    echo "Securely shredding ${currentscript}"; shred -u ${currentscript};
}

BASE_DIRECTORY=$(echo "$1" | cut -d "/" -f1)
echo $BASE_DIRECTORY

git filter-repo --path $1 --force
mv $1/* ./
rm -rf $BASE_DIRECTORY

git remote add origin $2

git add .
git commit -am "moved to new repo and held root files"

git push -u origin main --force

# Do your bashing here...

# When your script is finished, exit with a call to the function, "finish":
trap finish EXIT
