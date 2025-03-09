gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDHeadlineObjects1= [];
gdjs.Untitled_32sceneCode.GDHeadlineObjects2= [];
gdjs.Untitled_32sceneCode.GDredObjects1= [];
gdjs.Untitled_32sceneCode.GDredObjects2= [];
gdjs.Untitled_32sceneCode.GDwhiteObjects1= [];
gdjs.Untitled_32sceneCode.GDwhiteObjects2= [];
gdjs.Untitled_32sceneCode.GDliveObjects1= [];
gdjs.Untitled_32sceneCode.GDliveObjects2= [];
gdjs.Untitled_32sceneCode.GDblackObjects1= [];
gdjs.Untitled_32sceneCode.GDblackObjects2= [];
gdjs.Untitled_32sceneCode.GDdownloadObjects1= [];
gdjs.Untitled_32sceneCode.GDdownloadObjects2= [];
gdjs.Untitled_32sceneCode.GDbreakObjects1= [];
gdjs.Untitled_32sceneCode.GDbreakObjects2= [];
gdjs.Untitled_32sceneCode.GDTickerObjects1= [];
gdjs.Untitled_32sceneCode.GDTickerObjects2= [];
gdjs.Untitled_32sceneCode.GDheadline_9595textObjects1= [];
gdjs.Untitled_32sceneCode.GDheadline_9595textObjects2= [];
gdjs.Untitled_32sceneCode.GDdownload_9595buttonObjects1= [];
gdjs.Untitled_32sceneCode.GDdownload_9595buttonObjects2= [];
gdjs.Untitled_32sceneCode.GDwarningObjects1= [];
gdjs.Untitled_32sceneCode.GDwarningObjects2= [];
gdjs.Untitled_32sceneCode.GDfile_9595nameObjects1= [];
gdjs.Untitled_32sceneCode.GDfile_9595nameObjects2= [];
gdjs.Untitled_32sceneCode.GDTicker_9595textObjects1= [];
gdjs.Untitled_32sceneCode.GDTicker_9595textObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDdownloadObjects1Objects = Hashtable.newFrom({"download": gdjs.Untitled_32sceneCode.GDdownloadObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDdownloadObjects2Objects = Hashtable.newFrom({"download": gdjs.Untitled_32sceneCode.GDdownloadObjects2});
gdjs.Untitled_32sceneCode.asyncCallback9724124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("download"), gdjs.Untitled_32sceneCode.GDdownloadObjects2);

gdjs.copyArray(runtimeScene.getObjects("file_name"), gdjs.Untitled_32sceneCode.GDfile_9595nameObjects2);
{gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.func(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDdownloadObjects2Objects, (( gdjs.Untitled_32sceneCode.GDfile_9595nameObjects2.length === 0 ) ? "" :gdjs.Untitled_32sceneCode.GDfile_9595nameObjects2[0].getText()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDdownloadObjects1) asyncObjectsList.addObject("download", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback9724124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Headline"), gdjs.Untitled_32sceneCode.GDHeadlineObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ticker"), gdjs.Untitled_32sceneCode.GDTickerObjects1);
gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.Untitled_32sceneCode.GDblackObjects1);
gdjs.copyArray(runtimeScene.getObjects("white"), gdjs.Untitled_32sceneCode.GDwhiteObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDwhiteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDwhiteObjects1[i].SetLabelText((( gdjs.Untitled_32sceneCode.GDHeadlineObjects1.length === 0 ) ? "" :gdjs.Untitled_32sceneCode.GDHeadlineObjects1[0].getText()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDblackObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDblackObjects1[i].SetLabelText((( gdjs.Untitled_32sceneCode.GDTickerObjects1.length === 0 ) ? "" :gdjs.Untitled_32sceneCode.GDTickerObjects1[0].getText()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "news", 0, 0, 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("download_button"), gdjs.Untitled_32sceneCode.GDdownload_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDdownload_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDdownload_9595buttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDdownload_9595buttonObjects1[k] = gdjs.Untitled_32sceneCode.GDdownload_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDdownload_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9724012);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("download"), gdjs.Untitled_32sceneCode.GDdownloadObjects1);
{gdjs.evtsExt__RenderToSprite__RenderLayer.func(runtimeScene, "", gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDdownloadObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDHeadlineObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHeadlineObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDredObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDredObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDwhiteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDwhiteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDliveObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDliveObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDblackObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDblackObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDdownloadObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDdownloadObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbreakObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbreakObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTickerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTickerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDheadline_9595textObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDheadline_9595textObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDdownload_9595buttonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDdownload_9595buttonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDwarningObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDwarningObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDfile_9595nameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfile_9595nameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTicker_9595textObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTicker_9595textObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
gdjs.Untitled_32sceneCode.GDHeadlineObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHeadlineObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDredObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDredObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDwhiteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDwhiteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDliveObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDliveObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDblackObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDblackObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDdownloadObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDdownloadObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbreakObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbreakObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTickerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTickerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDheadline_9595textObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDheadline_9595textObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDdownload_9595buttonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDdownload_9595buttonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDwarningObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDwarningObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDfile_9595nameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfile_9595nameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTicker_9595textObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTicker_9595textObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
