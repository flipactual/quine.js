($=(_)=>(('o----'),([a, b, c]=`${$}`.match(/'(.*?)(.)'/)),process.stdout.write(`($=${`${$}`.replace(a,`'${c}${b}'`)})()`)))()
