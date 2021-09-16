import { getObjectsByPrototype } from '/game/utils';
import { Flag, Creep } from '/game/prototypes';
import { } from '/game/constants';
import { } from '/arena';

export function loop() {
    var flags = getObjectsByPrototype(Flag);
    var creeps = getObjectsByPrototype(Creep);
    creeps.forEach(creep => {
        var closestFlag = creep.findClosestByPath(flags);
        creep.moveTo(closestFlag)
    });
}
