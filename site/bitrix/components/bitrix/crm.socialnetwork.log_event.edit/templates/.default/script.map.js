{"version":3,"file":"script.min.js","sources":["script.js"],"names":["BX","CrmSonetEventEditor","this","_settings","_id","_prefix","_editorName","_formId","_editorContainer","_containerMicro","_containerMicroInner","_containerMicroHeight","_animation","_animationContainer","_msgTitleWrapper","_msgTitle","_msgTitleCloseBtn","_msgTitleToggleBtn","_enableMsgTitle","_isMsgTitleEnabled","_isVisible","_isFormSubmit","prototype","initialize","id","settings","getSetting","_resolveElement","type","isDomNode","value","bind","delegate","_onMessageTitleCloseButtonClick","_onMessageTitleToggleButtonClick","offsetHeight","showEditor","addCustomEvent","_onEditorShow","_onEditorHide","style","display","cancelBtn","_onCancelButtonClick","saveBtn","_onSaveButtonClick","name","defaultVal","hasOwnProperty","setSetting","val","enableMessageTitle","enabled","_showMessageTitle","show","focus","e","addClass","removeClass","elementId","_processEditorVisibilityChange","visible","adjust","height","opacity","editor","window","BXHtmlEditor","Get","Focus","onCustomEvent","hideEditor","_startAnimation","_endAnimation","stop","container","animationStartHeight","parentNode","overflowY","position","easing","duration","start","finish","offsetTop","transition","makeEaseOut","transitions","quart","step","state","complete","proxy","cssText","animate","PreventDefault","submitForm","form","submit","createSubmitHandler","items","create","self","destinationInit","params","whereFormName","SocNetLogDestination","init","searchInput","extranetUser","bindMainPopup","node","offsetLeft","bindSearchPopup","callback","select","BXfpdSelectCallback","unSelect","BXfpUnSelectCallback","formName","inputContainerName","inputName","tagInputName","tagLink1","message","tagLink2","openDialog","BXfpOpenDialogCallback","inputBoxName","closeDialog","BXfpCloseDialogCallback","openSearch","closeSearch","BXfpCloseSearchCallback","itemsLast","itemsSelected","isCrmFeed","useClientDatabase","destSort","allowAddUser","allowSearchCrmEmailUsers","allowUserSearch","userNameTemplate","BXfpSearch","BXfpSearchBefore","bByFocusEvent","BXfpSetLinkName","item","search","bUndeleted","BXfpSelectCallback","containerInput","valueInput"],"mappings":"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"}