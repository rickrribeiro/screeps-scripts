import { getObjectsByPrototype } from '/game/utils';
import { Flag, Creep } from '/game/prototypes';

export function loop() {
    var creeps = getObjectsByPrototype(Creep);
    var flags = getObjectsByPrototype(Flag);
    
    creeps[0].moveTo(flags[0]);
}