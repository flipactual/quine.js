($=(_)=>('HELLO, WORLD! ',([a, b, c]=`${$}`.match(/'(.)(.*?)'/)),process.stdout.write(`($=${`${$}`.replace(a,`'${c}${b}'`)})()`)))()
