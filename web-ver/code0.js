gdjs.Cena_32sem_32t_237tuloCode = {};
gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDFloorObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDFloorObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDFloor2Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDFloor2Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDBigZombieObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDBigZombieObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDOrcWarriorObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDOrcWarriorObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDSkeletObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDSkeletObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDSwampyObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDSwampyObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDMuddyObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDMuddyObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDGoblinObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDGoblinObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDKnightMaleObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDKnightMaleObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDKnightFemaleObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDKnightFemaleObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDImpObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDImpObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDBlueLaser04Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDBlueLaser04Objects2= [];


gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDBlueLaser04Objects1Objects = Hashtable.newFrom({"BlueLaser04": gdjs.Cena_32sem_32t_237tuloCode.GDBlueLaser04Objects1});
gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDOgreObjects1Objects = Hashtable.newFrom({"Ogre": gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1});
gdjs.Cena_32sem_32t_237tuloCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Farmer"), gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length !== 0 ? gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Farmer"), gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getBehavior("Animation").setAnimationName("Walk Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Farmer"), gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getBehavior("Animation").setAnimationName("Walk Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Farmer"), gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getBehavior("TopDownMovement").isUsingControl("Up") ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getBehavior("Animation").setAnimationName("Walk Up");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Farmer"), gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getBehavior("TopDownMovement").isUsingControl("Down") ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getBehavior("Animation").setAnimationName("Walk Down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Farmer"), gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length;i<l;++i) {
    if ( !(gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getBehavior("Animation").getAnimationName() == "Walk Up" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getBehavior("Animation").setAnimationName("Idle Up");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Farmer"), gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length;i<l;++i) {
    if ( !(gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getBehavior("Animation").getAnimationName() == "Walk Down" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getBehavior("Animation").setAnimationName("Idle Down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Farmer"), gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length;i<l;++i) {
    if ( !(gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getBehavior("Animation").getAnimationName() == "Walk Left" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getBehavior("Animation").setAnimationName("Idle Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Farmer"), gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length;i<l;++i) {
    if ( !(gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getBehavior("Animation").getAnimationName() == "Walk Right" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getBehavior("Animation").setAnimationName("Idle Right");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Farmer"), gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ogre"), gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[0].getCenterXInScene()) - gdjs.randomInRange(0, 32), (( gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[0].getCenterYInScene()) - gdjs.randomInRange(0, 48));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Farmer"), gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ogre"), gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[0].getCenterXInScene()) - gdjs.randomInRange(0, 32), (( gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length === 0 ) ? 0 :gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[0].getCenterYInScene()) - gdjs.randomInRange(0, 48));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ogre"), gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1[i].getX() > (gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1[i].getBehavior("Pathfinding").getDestinationX()) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ogre"), gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1[i].getX() < (gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1[i].getBehavior("Pathfinding").getDestinationX()) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Fire") <= 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Farmer"), gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ogre"), gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1);
gdjs.Cena_32sem_32t_237tuloCode.GDBlueLaser04Objects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Fire");
}{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getBehavior("FireBullet").FireTowardObject((gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getCenterXInScene()), (gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1[i].getAABBCenterY()), gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDBlueLaser04Objects1Objects, gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDOgreObjects1Objects, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.Cena_32sem_32t_237tuloCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDFarmerObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDFloorObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDFloorObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDFloor2Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDFloor2Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDOgreObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDBigZombieObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDBigZombieObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDOrcWarriorObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDOrcWarriorObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDSkeletObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDSkeletObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDSwampyObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDSwampyObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDMuddyObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDMuddyObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDGoblinObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDGoblinObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDKnightMaleObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDKnightMaleObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDKnightFemaleObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDKnightFemaleObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDImpObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDImpObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDBlueLaser04Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDBlueLaser04Objects2.length = 0;

gdjs.Cena_32sem_32t_237tuloCode.eventsList0(runtimeScene);

return;

}

gdjs['Cena_32sem_32t_237tuloCode'] = gdjs.Cena_32sem_32t_237tuloCode;
