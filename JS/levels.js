/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var bak;

function Level() {
    this.tuto01 = {
	array: [
	    [1,1,1,1,1,1,1],
            [1,0,0,0,0,0,1],
            [1,1,1,1,1,1,1],
	],

	start: [1,1],

	end: [6,1],

	dir: -1,

	next: 'tuto02',
    };

    this.tuto02 = {
	array: [
	    [0,1,1,1,1,1],
	    [1,1,0,0,0,1],
	    [1,0,0,1,1,1],
	    [1,0,1,1,0,0],
	    [1,1,1,1,0,0]
	],

	start: [1,1],

	end: [5,3],

	dir: -1,

	next: 'tuto03',
    };

    this.tuto03 = {
	array: [
	    [1,1,1,1,1],
	    [1,0,0,0,1],
	    [1,1,0,0,1],
            [1,0,0,1,1],
            [1,1,1,1,1],
	],

	start: [1,1],

	end: [0,3],

	dir: 1,

	next: 'tuto04',
    };
    
    this.tuto04 = {
	array: [
	    [1,1,1,0,0,0,1,1,1],
	    [1,0,1,0,0,0,1,0,1],
	    [1,1,1,0,0,0,1,1,1],
            ],

	portals: [
	    [[6, 1], [2, 1]]
	],

	start: [1,1],

	end: [8,1],

	dir: -1,

	next: 'tuto05',
    };
    
    this.tuto05 = {
	array: [
	    [1,1,1],
	    [1,0,1],
	    [1,0,1],
            [1,0,1],
            [1,0,1],
            [1,0,1],
            [1,0,1],
            [1,0,1],
            [1,0,1],
            [1,0,1],
            [1,1,1],
	],

	start: [1,1],

	end: [2,9],

	dir: -1,

	next: 'tuto06',
    };
    
    this.tuto06 = {
	array: [
	    [1,1,1,1,1,1,1],
	    [1,0,0,0,0,0,1],
	    [1,1,1,0,1,1,1],
	],

	start: [1,1],

	end: [6,1],

	dir: -1,

	next: 'tuto01',
    };
}

/*function Level() {
    this.level01 = {
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
    };

    this.level02 = {
	array: [
	    [1,1,1,1,0,1,1,1,1,1,1,1,1,0,0],
	    [1,0,0,1,1,1,0,1,0,0,0,0,1,1,0],
	    [1,1,0,0,1,0,0,0,0,0,1,0,0,1,1],
	    [0,1,1,0,0,0,0,1,0,1,1,1,0,0,1],
	    [0,0,1,1,1,1,1,1,1,1,0,1,1,1,1]
	],

	portals: [
	    [[4, 2], [10, 2]],
	    [[10, 2], [4, 2]]
	],

	start: [1,3],

	end: [14,1],

	dir: -1,

	next: 'level03',
    };

    this.level03 = {
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
    };
}*/

function changeLevel(a) {
    lvl = new Level();
    var k = lvl[a].array;
    cLvl = a;
    map = new Map(k);
    map.Init();
    kirby.x = lvl[cLvl].start[0]*4 -1.64;
    kirby.y = (lvl[cLvl].start[1]-1)*2;
}