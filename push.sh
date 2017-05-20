#!/bin/bash

DIST_DIR="../../vsts/hack-services/fathomless-sea-22542"

rm -rf $DIST_DIR/dist

cp -R ./dist $DIST_DIR

echo $DIST_DIR

exit #  The right and proper method of "exiting" from a script.
     #  A bare "exit" (no parameter) returns the exit status
     #+ of the preceding command. 
