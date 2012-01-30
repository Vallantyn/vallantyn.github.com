/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var levels = {
    level01: {
	array: [
	    [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
	    [0,0,1,1,1,1,1,1,1,1,1,1,0,0,1],
	    [0,1,1,0,0,1,0,0,0,1,1,0,0,1,1],
	    [1,1,0,0,1,1,1,1,0,0,1,1,0,0,1],
	    [1,0,0,1,1,1,1,0,0,0,1,0,0,1,1],
	    [0,1,0,0,0,0,1,0,1,0,1,1,0,0,1],
	    [0,0,0,1,1,0,1,1,1,0,1,0,0,1,1],
	    [0,0,1,1,1,0,1,0,1,1,1,1,0,0,1],
	    [1,1,1,0,1,1,1,1,1,0,0,1,1,1,1]
	],

	portals: [
	    [[4, 1], [1, 3]],
	    [[5, 6], [5, 6]],
	    [[8, 2], [8, 1]],
	    [[6, 1], [14,1]],
	    [[6, 3], [8, 3]]
	],

	start: [0,1],

	end: [14,7],

	dir: -1,

	next: 'level02',
    },

    level02: {
	array: [
	    [1,1,1,1,0,1,1,1,1,1,1,1,1,0,0],
	    [1,0,0,1,1,1,0,1,0,0,0,0,1,1,0],
	    [1,1,0,0,1,0,0,0,0,0,1,0,0,1,1],
	    [0,1,1,0,0,0,0,1,0,1,1,1,0,0,1],
	    [0,0,1,1,1,1,1,1,1,1,0,1,1,1,1]
	],

	portals: [
	    [[4, 2], [10, 2]]
	],

	start: [1,3],

	end: [14,1],

	dir: -1,

	next: 'level03',
    },

    level03: {
	array: [
	    [1,1,1,1,1],
	    [1,0,1,0,1],
	    [1,1,1,1,1],
	],

	portals: [
	    [[2, 1], [2, 1]]
	],

	start: [1,1],

	end: [4,1],

	dir: -1,

	next: 'level01',
    },
}

    function changeLevel(a) {
	var k = levels[a].array;
	map = new Map(k);
	level = a;
	kirby.x = levels[level].start[0]*4;
	kirby.y = (levels[level].start[1]-1)*2;
	map.Init();
    }