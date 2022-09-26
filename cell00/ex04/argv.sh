#bin/bash

args=("$@")
ELEM=${#args[@]}

if [ $# -eq 0 ]; then
	echo "No arguments provided"
fi

for ((i = 0; i < $ELEM; i++)); do
	echo ${args[${i}]}
	if [[ i -eq 2 ]] ;then
		break
	fi
done
