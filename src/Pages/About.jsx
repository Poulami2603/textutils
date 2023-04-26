import React from 'react'

const About = () => {
  return (
    <>
    <div className="container">
      <p><br/>This App allows you to specify a Text style from the list of text styles installed on that machine and update entire projects text note style, including all the families loaded on project.<br/>
<br/>By updating the required font just once to the Text utility form, the whole projects text note style will be updated.<br/>
<br/>Go to the “Add-ins” tab “Text Utility” panel click on “Update Text Note” to start the command.<br/>
<br/>It will starts the command and launches the “Text Note Utility” Form dialog.<br/>
<br/>From the “Text Note Utility” Form “Selection” check the one you want to update.<br/>
<br/>“Text Note style in this project” – to update all the text note style on this project.<br/>
<br/>“Text Note Style of loaded Families in this project” – to update all the loaded families’ text note style.
From the “Text Note Utility” Form “Text Style”
Specify the new text style from the list of text style installed on that machine to update.<br/>
<br/>Press the “Update” button to start the process.<br/>
<br/>If you didn’t specify new text style, app will prompt you to make a selection. If you don’t wish to continue click “Cancel” button to end the process.<br/>
Revit will loop through every text note style one by one and update to the new text style you specified.“Text Note style” form will display the updated text style information on list box under results.
After the update process is completed, a dialog box is displayed with the total number of families succeeded and updated to new style.</p>
    </div>
    </>
  )
}

export default About