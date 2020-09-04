import React, { useState } from 'react'

import './stylesForm/editorStyles.css'

function EditorText() {
    const [classJSButton, setJSButton] = useState('js-boton')
    const [textEditable, setStyleText] = useState('textEditable')


    const ButtonStylesBold = () => {
        setStyleText('textEditable-bold')
    }

    const ButtonStylesItalic = () => {
        setStyleText('textEditable-italic')
    }

    const ButtonStylesLeft = () => {
        setStyleText('textEditable-left')
    }

    const ButtonStylesCenter = () => {
        setStyleText('textEditable-center')
    }

    const ButtonStylesRigth = () => {
        setStyleText('textEditable-rigth')
    }

    var selectedRange;

    function getCurrentRange() {
        var sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
          return sel.getRangeAt(0);
        }
      }
   
      function saveSelection() {
        selectedRange = getCurrentRange();
      }
   
      function restoreSelection() {
        var selection = window.getSelection();
        if (selectedRange) {
          try {
            selection.removeAllRanges();
          } catch (ex) {
            document.body.createTextRange().select();
            document.selection.empty();
          }
   
          selection.addRange(selectedRange);
        }
      }

    return <React.Fragment>
            {/* <div id={idDialog} style="display:none;"></div>  */}
            <div className="box-editor">
                <div className="block-buttons">
                    <button onMouseDown={ButtonStylesBold} type="button" className={classJSButton} data-type="bold"><strong>B</strong></button><br/>
                    <button onMouseDown={ButtonStylesItalic} type="button" className={classJSButton} data-type="italic"><i>I</i></button><br/>
                    <button onMouseDown={ButtonStylesLeft} type="button" className={classJSButton} data-type="justifyLeft">L</button><br/>
                    <button onMouseDown={ButtonStylesCenter} type="button" className={classJSButton} data-type="justifyCenter">C</button><br/>
                    <button onMouseDown={ButtonStylesRigth} type="button" className={classJSButton} data-type="justifyRight">R</button><br/>
                </div>
                <div className="block-text">
                    <div className={textEditable} id="editorWYS" contenteditable="true">
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat.
                        </li>
                    </div>
                </div>
            </div>    
    </React.Fragment>
}

export default EditorText;