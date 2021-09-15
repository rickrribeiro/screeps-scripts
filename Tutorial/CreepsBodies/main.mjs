import { getObjectsByPrototype } from '/game/utils';
import { Creep } from '/game/prototypes';
import { ERR_NOT_IN_RANGE, ATTACK, RANGED_ATTACK, HEAL } from '/game/constants';

export function loop() {
    var creeps = getObjectsByPrototype(Creep).filter(creep => creep.my);
    var enemyCreep = getObjectsByPrototype(Creep).find(creep => !creep.my);
    
     creeps.forEach(creep => { 
        console.log(creep.body) 
        if(creep.body.some(bodyPart => bodyPart.type == ATTACK )) {
           
            if(creep.attack(enemyCreep) == ERR_NOT_IN_RANGE) {
               
                creep.moveTo(enemyCreep);
            }
        }
        else if(creep.body.some(bodyPart => bodyPart.type == RANGED_ATTACK )) {
           console.log('2')
            if(creep.rangedAttack(enemyCreep) == ERR_NOT_IN_RANGE) {
               
                creep.moveTo(enemyCreep);
            }
        }else if(creep.body.some(bodyPart => bodyPart.type == HEAL)) {
            var myDamagedCreeps = creeps.filter(i => i.hits < i.hitsMax);
            if(myDamagedCreeps.length > 0) {
                if(creep.heal(myDamagedCreeps[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(myDamagedCreeps[0]);
                }
            }
        }

     });
}
