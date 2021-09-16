import { getObjectsByPrototype } from '/game/utils';
import { Flag, StructureSpawn } from '/game/prototypes';
import { MOVE, ATTACK } from '/game/constants';
import { } from '/arena';

var creep1, creep2;
var flag1, flag2
export function loop() {
    var mySpawn = getObjectsByPrototype(StructureSpawn)[0];
    var flags = getObjectsByPrototype(Flag);
    if(!creep1){
        creep1 = mySpawn.spawnCreep([MOVE, ATTACK]).object;
    }else{
        creep1.target = flags[0]
        creep1.moveTo(creep1.target)
        if(!creep2){
            creep2 = mySpawn.spawnCreep([MOVE, ATTACK]).object;
        }else{
            creep2.target = flags[1]
            creep2.moveTo(creep2.target)
        }
    }
    
}
