import { getObjectsByPrototype } from '/game/utils';
import { Creep, StructureTower, StructureContainer } from '/game/prototypes';
import { RESOURCE_ENERGY } from '/game/constants';
import { } from '/arena';

export function loop() {
    let tower = getObjectsByPrototype(StructureTower)[0]
    let myCreep = getObjectsByPrototype(Creep).find(creep => creep.my)
    let enemyCreep = getObjectsByPrototype(Creep).find(creep =>!creep.my)
    let container = getObjectsByPrototype(StructureContainer)[0]
    console.log(myCreep.store[RESOURCE_ENERGY])
    if( myCreep.withdraw(container, RESOURCE_ENERGY) == -8 && myCreep.store[RESOURCE_ENERGY]!= 0 ){
        myCreep.transfer(tower, RESOURCE_ENERGY);
    }else{
        tower.attack(enemyCreep);
        myCreep.transfer(tower, RESOURCE_ENERGY);
    }

}
