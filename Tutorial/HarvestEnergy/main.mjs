import { getObjectsByPrototype } from '/game/utils';
import { Creep, StructureSpawn, Source} from '/game/prototypes';
import { WORK, RESOURCE_ENERGY } from '/game/constants';
import { } from '/arena';

export function loop() {
    var structure = getObjectsByPrototype(StructureSpawn)[0];
    var creep = getObjectsByPrototype(Creep)[0];
    var source = getObjectsByPrototype(Source)[0]
    if(creep.store.getFreeCapacity(RESOURCE_ENERGY)){
        if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source);
        }
    }else {
        if(creep.transfer(structure,RESOURCE_ENERGY) ==ERR_NOT_IN_RANGE) {
            creep.moveTo(structure);
        }
    }
}   
