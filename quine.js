($=(_)=>('HELLO, WORLD! ',([a, b, c]=`${$}`.match(/'(.)(.*?)'/)),console.log(`($=${`${$}`.replace(a,`'${c}${b}'`)})()`)))()
