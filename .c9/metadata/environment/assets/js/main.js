{"filter":false,"title":"main.js","tooltip":"/assets/js/main.js","undoManager":{"mark":60,"position":60,"stack":[[{"start":{"row":0,"column":0},"end":{"row":29,"column":39},"action":"insert","lines":["//on page open, timer counts from 90 secs down","","//if timer = 0, game over","","// on click, moves increases by 1","","// if moves > 40, game over","","//on restart, pasue game and timer and ask for confirmation","    //if confirmation = true page refreshes and timer + cards all reset","    //if confirmation = false, game and timer resumes","","","// on click:","    //if no other card active, flip card and set to active","    //if other card active, compare img of both active cards","        //if img match, match counter increase by one","        //on no match, both cards return to rest state","","//(no. of cards = 18)","","//if match counter = 9, player wins.","","//score? = at win, total moves and total time remaining","","//set keyboard (p)ause and (esc)ape actions","","//if player wins, produce success message","","//if player loses, produce loss message"],"id":1}],[{"start":{"row":0,"column":46},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]},{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["/"]},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["/"]},{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["o"]},{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":["n"]}],[{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":[" "],"id":3},{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["p"]},{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["a"]},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["g"]},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":[" "],"id":4},{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["o"]},{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["p"]},{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["e"]},{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["n"]},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":[","]}],[{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":[" "],"id":5},{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["c"]},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["a"]},{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["d"],"id":6},{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"insert","lines":["s"]}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"insert","lines":[" "],"id":7},{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["a"]}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"remove","lines":["a"],"id":8},{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"remove","lines":[" "]},{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"remove","lines":["s"]},{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"remove","lines":["d"]},{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"remove","lines":["r"]},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"remove","lines":["a"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"remove","lines":["c"]}],[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["o"],"id":9},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":[" "],"id":10},{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["o"]},{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"insert","lines":["n"]}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"insert","lines":[" "],"id":11},{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["r"]},{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["e"]},{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":["s"]},{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":["t"]},{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":["a"]},{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["r"]},{"start":{"row":2,"column":28},"end":{"row":2,"column":29},"action":"insert","lines":["t"]}],[{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"insert","lines":[","],"id":12}],[{"start":{"row":2,"column":30},"end":{"row":2,"column":31},"action":"insert","lines":[" "],"id":13},{"start":{"row":2,"column":31},"end":{"row":2,"column":32},"action":"insert","lines":["c"]},{"start":{"row":2,"column":32},"end":{"row":2,"column":33},"action":"insert","lines":["a"]},{"start":{"row":2,"column":33},"end":{"row":2,"column":34},"action":"insert","lines":["r"]},{"start":{"row":2,"column":34},"end":{"row":2,"column":35},"action":"insert","lines":["d"]},{"start":{"row":2,"column":35},"end":{"row":2,"column":36},"action":"insert","lines":["s"]}],[{"start":{"row":2,"column":36},"end":{"row":2,"column":37},"action":"insert","lines":[" "],"id":14},{"start":{"row":2,"column":37},"end":{"row":2,"column":38},"action":"insert","lines":["a"]},{"start":{"row":2,"column":38},"end":{"row":2,"column":39},"action":"insert","lines":["r"]},{"start":{"row":2,"column":39},"end":{"row":2,"column":40},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":40},"end":{"row":2,"column":41},"action":"insert","lines":[" "],"id":15},{"start":{"row":2,"column":41},"end":{"row":2,"column":42},"action":"insert","lines":["r"]},{"start":{"row":2,"column":42},"end":{"row":2,"column":43},"action":"insert","lines":["e"]},{"start":{"row":2,"column":43},"end":{"row":2,"column":44},"action":"insert","lines":["s"]},{"start":{"row":2,"column":44},"end":{"row":2,"column":45},"action":"insert","lines":["h"]},{"start":{"row":2,"column":45},"end":{"row":2,"column":46},"action":"insert","lines":["u"]},{"start":{"row":2,"column":46},"end":{"row":2,"column":47},"action":"insert","lines":["f"]},{"start":{"row":2,"column":47},"end":{"row":2,"column":48},"action":"insert","lines":["f"]},{"start":{"row":2,"column":48},"end":{"row":2,"column":49},"action":"insert","lines":["l"]}],[{"start":{"row":2,"column":49},"end":{"row":2,"column":50},"action":"insert","lines":["e"],"id":16},{"start":{"row":2,"column":50},"end":{"row":2,"column":51},"action":"insert","lines":["d"]}],[{"start":{"row":29,"column":41},"end":{"row":29,"column":42},"action":"insert","lines":[" "],"id":17}],[{"start":{"row":29,"column":42},"end":{"row":29,"column":44},"action":"insert","lines":["()"],"id":18}],[{"start":{"row":29,"column":43},"end":{"row":29,"column":44},"action":"insert","lines":["a"],"id":19},{"start":{"row":29,"column":44},"end":{"row":29,"column":45},"action":"insert","lines":["n"]},{"start":{"row":29,"column":45},"end":{"row":29,"column":46},"action":"insert","lines":["d"]}],[{"start":{"row":29,"column":46},"end":{"row":29,"column":47},"action":"insert","lines":[" "],"id":20},{"start":{"row":29,"column":47},"end":{"row":29,"column":48},"action":"insert","lines":["r"]},{"start":{"row":29,"column":48},"end":{"row":29,"column":49},"action":"insert","lines":["a"]},{"start":{"row":29,"column":49},"end":{"row":29,"column":50},"action":"insert","lines":["t"]},{"start":{"row":29,"column":50},"end":{"row":29,"column":51},"action":"insert","lines":["i"]},{"start":{"row":29,"column":51},"end":{"row":29,"column":52},"action":"insert","lines":["n"]},{"start":{"row":29,"column":52},"end":{"row":29,"column":53},"action":"insert","lines":["g"]}],[{"start":{"row":29,"column":53},"end":{"row":29,"column":54},"action":"insert","lines":[" "],"id":21},{"start":{"row":29,"column":54},"end":{"row":29,"column":55},"action":"insert","lines":["o"]},{"start":{"row":29,"column":55},"end":{"row":29,"column":56},"action":"insert","lines":["u"]},{"start":{"row":29,"column":56},"end":{"row":29,"column":57},"action":"insert","lines":["t"]}],[{"start":{"row":29,"column":57},"end":{"row":29,"column":58},"action":"insert","lines":[" "],"id":22},{"start":{"row":29,"column":58},"end":{"row":29,"column":59},"action":"insert","lines":["o"]},{"start":{"row":29,"column":59},"end":{"row":29,"column":60},"action":"insert","lines":["f"]}],[{"start":{"row":29,"column":60},"end":{"row":29,"column":61},"action":"insert","lines":[" "],"id":23},{"start":{"row":29,"column":61},"end":{"row":29,"column":62},"action":"insert","lines":["t"]},{"start":{"row":29,"column":62},"end":{"row":29,"column":63},"action":"insert","lines":["h"]},{"start":{"row":29,"column":63},"end":{"row":29,"column":64},"action":"insert","lines":["r"]},{"start":{"row":29,"column":64},"end":{"row":29,"column":65},"action":"insert","lines":["e"]},{"start":{"row":29,"column":65},"end":{"row":29,"column":66},"action":"insert","lines":["e"]},{"start":{"row":29,"column":66},"end":{"row":29,"column":67},"action":"insert","lines":["?"]}],[{"start":{"row":31,"column":17},"end":{"row":31,"column":18},"action":"insert","lines":[" "],"id":24},{"start":{"row":31,"column":18},"end":{"row":31,"column":19},"action":"insert","lines":["("]},{"start":{"row":31,"column":19},"end":{"row":31,"column":20},"action":"insert","lines":["o"]},{"start":{"row":31,"column":20},"end":{"row":31,"column":21},"action":"insert","lines":["u"]},{"start":{"row":31,"column":21},"end":{"row":31,"column":22},"action":"insert","lines":["t"]}],[{"start":{"row":31,"column":22},"end":{"row":31,"column":23},"action":"insert","lines":[" "],"id":25},{"start":{"row":31,"column":23},"end":{"row":31,"column":24},"action":"insert","lines":["o"]},{"start":{"row":31,"column":24},"end":{"row":31,"column":25},"action":"insert","lines":["f"]}],[{"start":{"row":31,"column":25},"end":{"row":31,"column":26},"action":"insert","lines":[" "],"id":26},{"start":{"row":31,"column":26},"end":{"row":31,"column":27},"action":"insert","lines":["t"]},{"start":{"row":31,"column":27},"end":{"row":31,"column":28},"action":"insert","lines":["i"]},{"start":{"row":31,"column":28},"end":{"row":31,"column":29},"action":"insert","lines":["m"]},{"start":{"row":31,"column":29},"end":{"row":31,"column":30},"action":"insert","lines":["e"]},{"start":{"row":31,"column":30},"end":{"row":31,"column":31},"action":"insert","lines":[")"]}],[{"start":{"row":31,"column":30},"end":{"row":31,"column":31},"action":"insert","lines":[","],"id":27}],[{"start":{"row":31,"column":31},"end":{"row":31,"column":32},"action":"insert","lines":[" "],"id":28},{"start":{"row":31,"column":32},"end":{"row":31,"column":33},"action":"insert","lines":["o"]},{"start":{"row":31,"column":33},"end":{"row":31,"column":34},"action":"insert","lines":["r"]}],[{"start":{"row":31,"column":34},"end":{"row":31,"column":35},"action":"insert","lines":[" "],"id":29},{"start":{"row":31,"column":35},"end":{"row":31,"column":36},"action":"insert","lines":["e"]},{"start":{"row":31,"column":36},"end":{"row":31,"column":37},"action":"insert","lines":["x"]},{"start":{"row":31,"column":37},"end":{"row":31,"column":38},"action":"insert","lines":["c"]},{"start":{"row":31,"column":38},"end":{"row":31,"column":39},"action":"insert","lines":["e"]},{"start":{"row":31,"column":39},"end":{"row":31,"column":40},"action":"insert","lines":["e"]},{"start":{"row":31,"column":40},"end":{"row":31,"column":41},"action":"insert","lines":["d"]}],[{"start":{"row":31,"column":41},"end":{"row":31,"column":42},"action":"insert","lines":["s"],"id":30}],[{"start":{"row":31,"column":42},"end":{"row":31,"column":43},"action":"insert","lines":[" "],"id":31},{"start":{"row":31,"column":43},"end":{"row":31,"column":44},"action":"insert","lines":["m"]},{"start":{"row":31,"column":44},"end":{"row":31,"column":45},"action":"insert","lines":["o"]},{"start":{"row":31,"column":45},"end":{"row":31,"column":46},"action":"insert","lines":["v"]},{"start":{"row":31,"column":46},"end":{"row":31,"column":47},"action":"insert","lines":["e"]},{"start":{"row":31,"column":47},"end":{"row":31,"column":48},"action":"insert","lines":["s"]}],[{"start":{"row":23,"column":36},"end":{"row":24,"column":0},"action":"insert","lines":["",""],"id":32},{"start":{"row":24,"column":0},"end":{"row":25,"column":0},"action":"insert","lines":["",""]},{"start":{"row":25,"column":0},"end":{"row":25,"column":1},"action":"insert","lines":["/"]}],[{"start":{"row":25,"column":1},"end":{"row":25,"column":2},"action":"insert","lines":["/"],"id":33},{"start":{"row":25,"column":2},"end":{"row":25,"column":3},"action":"insert","lines":["i"]},{"start":{"row":25,"column":3},"end":{"row":25,"column":4},"action":"insert","lines":["f"]}],[{"start":{"row":25,"column":4},"end":{"row":25,"column":5},"action":"insert","lines":[" "],"id":34},{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"insert","lines":["m"]},{"start":{"row":25,"column":6},"end":{"row":25,"column":7},"action":"insert","lines":["a"]},{"start":{"row":25,"column":7},"end":{"row":25,"column":8},"action":"insert","lines":["t"]},{"start":{"row":25,"column":8},"end":{"row":25,"column":9},"action":"insert","lines":["c"]},{"start":{"row":25,"column":9},"end":{"row":25,"column":10},"action":"insert","lines":["h"]}],[{"start":{"row":25,"column":10},"end":{"row":25,"column":11},"action":"insert","lines":[" "],"id":35},{"start":{"row":25,"column":11},"end":{"row":25,"column":12},"action":"insert","lines":["c"]},{"start":{"row":25,"column":12},"end":{"row":25,"column":13},"action":"insert","lines":["o"]},{"start":{"row":25,"column":13},"end":{"row":25,"column":14},"action":"insert","lines":["u"]},{"start":{"row":25,"column":14},"end":{"row":25,"column":15},"action":"insert","lines":["n"]},{"start":{"row":25,"column":15},"end":{"row":25,"column":16},"action":"insert","lines":["t"]},{"start":{"row":25,"column":16},"end":{"row":25,"column":17},"action":"insert","lines":["e"]},{"start":{"row":25,"column":17},"end":{"row":25,"column":18},"action":"insert","lines":["r"]}],[{"start":{"row":25,"column":18},"end":{"row":25,"column":19},"action":"insert","lines":[" "],"id":36},{"start":{"row":25,"column":19},"end":{"row":25,"column":20},"action":"insert","lines":["="]}],[{"start":{"row":25,"column":20},"end":{"row":25,"column":21},"action":"insert","lines":[" "],"id":37},{"start":{"row":25,"column":21},"end":{"row":25,"column":22},"action":"insert","lines":["9"]},{"start":{"row":25,"column":22},"end":{"row":25,"column":23},"action":"insert","lines":[","]}],[{"start":{"row":25,"column":23},"end":{"row":25,"column":24},"action":"insert","lines":[" "],"id":38},{"start":{"row":25,"column":24},"end":{"row":25,"column":25},"action":"insert","lines":["t"]},{"start":{"row":25,"column":25},"end":{"row":25,"column":26},"action":"insert","lines":["i"]},{"start":{"row":25,"column":26},"end":{"row":25,"column":27},"action":"insert","lines":["m"]},{"start":{"row":25,"column":27},"end":{"row":25,"column":28},"action":"insert","lines":["e"]},{"start":{"row":25,"column":28},"end":{"row":25,"column":29},"action":"insert","lines":["r"]}],[{"start":{"row":25,"column":29},"end":{"row":25,"column":30},"action":"insert","lines":[" "],"id":39},{"start":{"row":25,"column":30},"end":{"row":25,"column":31},"action":"insert","lines":["s"]},{"start":{"row":25,"column":31},"end":{"row":25,"column":32},"action":"insert","lines":["t"]},{"start":{"row":25,"column":32},"end":{"row":25,"column":33},"action":"insert","lines":["o"]},{"start":{"row":25,"column":33},"end":{"row":25,"column":34},"action":"insert","lines":["p"]},{"start":{"row":25,"column":34},"end":{"row":25,"column":35},"action":"insert","lines":["s"]}],[{"start":{"row":2,"column":51},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":40},{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""]},{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"insert","lines":["/"]},{"start":{"row":4,"column":1},"end":{"row":4,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":4,"column":2},"end":{"row":4,"column":3},"action":"insert","lines":["o"],"id":41},{"start":{"row":4,"column":3},"end":{"row":4,"column":4},"action":"insert","lines":["n"]}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":[" "],"id":42},{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":["r"]},{"start":{"row":4,"column":6},"end":{"row":4,"column":7},"action":"insert","lines":["e"]},{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["s"]},{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["t"]},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["e"]}],[{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"remove","lines":["e"],"id":43},{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"remove","lines":["t"]},{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"remove","lines":["s"]}],[{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["s"],"id":44},{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["e"]},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["t"]},{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":[","]}],[{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":[" "],"id":45},{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["c"]},{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":["a"]},{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":["r"]}],[{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["d"],"id":46},{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["s"]}],[{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":[" "],"id":47},{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["s"]},{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"insert","lines":["h"]},{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"insert","lines":["u"]},{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":["f"]},{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"insert","lines":["f"]},{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":["e"]}],[{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"remove","lines":["e"],"id":48}],[{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":["l"],"id":49},{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"insert","lines":["e"]},{"start":{"row":4,"column":25},"end":{"row":4,"column":26},"action":"insert","lines":["d"]},{"start":{"row":4,"column":26},"end":{"row":4,"column":27},"action":"insert","lines":[","]}],[{"start":{"row":4,"column":27},"end":{"row":4,"column":28},"action":"insert","lines":[" "],"id":50}],[{"start":{"row":4,"column":27},"end":{"row":4,"column":28},"action":"insert","lines":[" "],"id":51},{"start":{"row":4,"column":28},"end":{"row":4,"column":29},"action":"insert","lines":["r"]},{"start":{"row":4,"column":29},"end":{"row":4,"column":30},"action":"insert","lines":["e"]},{"start":{"row":4,"column":30},"end":{"row":4,"column":31},"action":"insert","lines":["s"]},{"start":{"row":4,"column":31},"end":{"row":4,"column":32},"action":"insert","lines":["e"]},{"start":{"row":4,"column":32},"end":{"row":4,"column":33},"action":"insert","lines":["t"]}],[{"start":{"row":4,"column":33},"end":{"row":4,"column":34},"action":"insert","lines":[" "],"id":52},{"start":{"row":4,"column":34},"end":{"row":4,"column":35},"action":"insert","lines":["g"]},{"start":{"row":4,"column":35},"end":{"row":4,"column":36},"action":"insert","lines":["a"]},{"start":{"row":4,"column":36},"end":{"row":4,"column":37},"action":"insert","lines":[","]},{"start":{"row":4,"column":37},"end":{"row":4,"column":38},"action":"insert","lines":["e"]}],[{"start":{"row":4,"column":37},"end":{"row":4,"column":38},"action":"remove","lines":["e"],"id":53}],[{"start":{"row":4,"column":37},"end":{"row":4,"column":38},"action":"insert","lines":["m"],"id":54},{"start":{"row":4,"column":38},"end":{"row":4,"column":39},"action":"insert","lines":["e"]}],[{"start":{"row":4,"column":39},"end":{"row":4,"column":40},"action":"insert","lines":[" "],"id":55}],[{"start":{"row":4,"column":39},"end":{"row":4,"column":40},"action":"remove","lines":[" "],"id":56},{"start":{"row":4,"column":38},"end":{"row":4,"column":39},"action":"remove","lines":["e"]},{"start":{"row":4,"column":37},"end":{"row":4,"column":38},"action":"remove","lines":["m"]},{"start":{"row":4,"column":36},"end":{"row":4,"column":37},"action":"remove","lines":[","]}],[{"start":{"row":4,"column":36},"end":{"row":4,"column":37},"action":"insert","lines":["m"],"id":57},{"start":{"row":4,"column":37},"end":{"row":4,"column":38},"action":"insert","lines":["e"]}],[{"start":{"row":4,"column":38},"end":{"row":4,"column":39},"action":"insert","lines":[" "],"id":58},{"start":{"row":4,"column":39},"end":{"row":4,"column":40},"action":"insert","lines":["b"]},{"start":{"row":4,"column":40},"end":{"row":4,"column":41},"action":"insert","lines":["o"]},{"start":{"row":4,"column":41},"end":{"row":4,"column":42},"action":"insert","lines":["a"]},{"start":{"row":4,"column":42},"end":{"row":4,"column":43},"action":"insert","lines":["r"]},{"start":{"row":4,"column":43},"end":{"row":4,"column":44},"action":"insert","lines":["d"]},{"start":{"row":4,"column":44},"end":{"row":4,"column":45},"action":"insert","lines":[","]}],[{"start":{"row":4,"column":45},"end":{"row":4,"column":46},"action":"insert","lines":[" "],"id":59}],[{"start":{"row":4,"column":46},"end":{"row":4,"column":47},"action":"insert","lines":["r"],"id":60},{"start":{"row":4,"column":47},"end":{"row":4,"column":48},"action":"insert","lines":["e"]},{"start":{"row":4,"column":48},"end":{"row":4,"column":49},"action":"insert","lines":["s"]},{"start":{"row":4,"column":49},"end":{"row":4,"column":50},"action":"insert","lines":["e"]},{"start":{"row":4,"column":50},"end":{"row":4,"column":51},"action":"insert","lines":["t"]}],[{"start":{"row":4,"column":51},"end":{"row":4,"column":52},"action":"insert","lines":[" "],"id":61},{"start":{"row":4,"column":52},"end":{"row":4,"column":53},"action":"insert","lines":["t"]},{"start":{"row":4,"column":53},"end":{"row":4,"column":54},"action":"insert","lines":["i"]},{"start":{"row":4,"column":54},"end":{"row":4,"column":55},"action":"insert","lines":["m"]},{"start":{"row":4,"column":55},"end":{"row":4,"column":56},"action":"insert","lines":["e"]},{"start":{"row":4,"column":56},"end":{"row":4,"column":57},"action":"insert","lines":["r"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":12,"column":59},"end":{"row":12,"column":59},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1582224907546,"hash":"1e7df53f29f91e1b7e1ae65724b11783f1542e5c"}