{"version":3,"file":"script.min.js","sources":["script.js"],"names":["window","diskufPopup","diskufCurrentIdDocument","diskufMenuNumber","currentDialog","currentService","repo","BX","namespace","Disk","UF","params","this","dialogName","CID","controller","values","prefix","onUploaderIsAlmostInited","delegate","addCustomEvent","agent","Uploader","getInstance","id","streams","allowUpload","uploadFormData","uploadMethod","uploadFileUrl","showImage","sortItems","input","dropZone","placeHolder","queueFields","thumb","tagName","className","fields","template","message","urlSelect","urlRenameFile","urlDeleteFile","_addUrlParam","urlUpload","urlShow","controlName","init","prototype","url","param","indexOf","_camelToSNAKE","obj","o","i","k","replace","toUpperCase","objName","removeCustomEvent","s","findChild","e","remove","show","_onItemIsAdded","onItemIsAdded","_onFileIsAppended","onFileIsAppended","_onFileIsAttached","onFileIsAttached","_onFileIsBound","onFileIsBound","_onFileIsInited","onFileIsInited","_onError","onError","_onUploadProgress","onUploadProgress","_onUploadDone","onUploadDone","_onUploadError","onUploadError","_onUploadRestore","onUploadRestore","onCustomEvent","parentNode","ar1","ar2","name","ii","length","push","innerHTML","onAttach","bind","proxy","showSelectDialog","controllerClouds","findChildren","hasOwnProperty","showSelectDialogCloudImport","addFile","file","onChange","findParent","res","being","itemStatus","uploader","sizeInt","size","onFileIs","TR","item","bindEventsHandlers","element_id","element_name","element_url","previewUrl","preview_url","place","storage","__disk_element_id","node","getItem","getAttribute","ExternalLoader","startLoad","service","onFinish","newData","itemNode","hide","ufId","ext","sizeFormatted","size_int","parseInt","value","html","toLowerCase","isNaN","RegExp","attrs","bx-agentFileId","create","props","editNameBtn","insertBefore","deleteFile","onProgress","progress","Math","min","__progressBarWidth","ceil","adjust","style","width","text","result","canChangeName","replaceChild","specify","hasAttribute","setAttribute","errorText","cells","stream","pIndex","data","defaultErrorText","type","isArray","join","files","queue","items","error","onBlurRenameInput","targetElement","target","srcElement","fileEditName","fireEvent","row","attrName","filemove","filename","move","toggleClass","rename","inputName","key","event","keyCode","charCode","unbind","PreventDefault","revertRename","divLoading","delFunc","closeBtn","events","click","t","appendChild","cloneNode","children","ajax","method","dataType","attachedId","onsuccess","hash","urlMove","_checkFileName","checkFileName","_selectFolder","selectFolder","_openSection","openSection","_selectItem","selectItem","_unSelectItem","unSelectItem","nodeFileTR","nodeFileName","DiskFileDialog","arParams","get","setTimeout","obCallback","saveButton","openDialog","editNow","textContent","innerText","split","pop","newName","focus","agentFileId","fileObject","managerFileObject","manager","checkFile","parts","showMovedFile","arProp","section_path","MAX_PATH_LENGTH","parent","cleanNode","w","offsetWidth","l","midName","floor","substr","fileInput","arFile","_fileUnserialize","section","iblock","_fileSerialize","index","isString","arIndex","tab","path","selected","folderByPath","moved","secPath","moveQuery","targetFolderId","addToLinkParam","response","status","showModalWithStatusAction","sectionID","iblockID","iblock_id","section_id","noticeTimeout","clearTimeout","fname","exist","obItems","showNotice","closeNotice","element","itemID","targetID","libLink","obCurrentTab","link","bitrix_sessid","loadJSON","documentExists","permission","msg","file_exists","openSectionCloud","selectFile","ar","selectCloudFile","provider","_selectFile","hasClass","_selectCloudFile","dndCatcher","add","isNodeInDom","initialize","display","loaded","fx","time","__preview","img","unbindAll","nextSibling","random","turnOn","turnOff","timeout","popup","close","naturalWidth","height","naturalHeight","res2","UploaderUtils","scaleImage","destin","PopupWindow","lightShadow","offsetTop","offsetLeft","autoHide","closeByEsc","bindOptions","position","onPopupClose","destroy","onPopupDestroy","content","src","setAngle","forceBindPosition","adjustPosition","runImport","showActionModal","showLoaderIcon","reloadLoadAttachedObject","attachedObject","hasNewVersion","showSuccessIcon","start","disableAutoCommentToAttachedObject","enableAutoCommentToAttachedObject","DiskCreateDocument","documentType","obElementViewer","CViewer","createDoc","blankDocument","createBlankElementByParams","docType","editUrl","renameUrl","setCurrent","afterSuccessCreate","objectId","label","folderName","extension","runActionByCurrentElement","DiskOpenMenuCreateService","openMenu","isDisabledLocalEdit","href","onclick","isEnableLocalEditInDesktop","setEditService","PopupMenu","helpDiskDialog","getNameEditService","DiskOpenMenuImportService","listCloudStorages","list","code","helpItem","layout","addClass","removeClass","removeAttribute","DiskActionFileMenu","bindElement","buttons","angle","offset","WDInlineElementClickDispatcher","realElementId","realElement"],"mappings":"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"}