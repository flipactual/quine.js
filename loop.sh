clear
cat /tmp/quine1.js
node /tmp/quine1.js > /tmp/quine2.js
mv /tmp/quine2.js /tmp/quine1.js
./loop.sh
