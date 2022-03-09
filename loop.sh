clear # Clear the console
cat /tmp/quine1.js # Output the quine
node /tmp/quine1.js > /tmp/quine2.js # Run the quine
mv /tmp/quine2.js /tmp/quine1.js # Move the output to input
./loop.sh # Loop
