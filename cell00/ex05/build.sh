#/bin/bash

STRING="ex"

if [ $# -eq 0 ]; then
	echo "No arguments provided"
fi

for i; do
	mkdir $STRING$i
done
