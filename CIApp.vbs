Dim App
Dim qtTest

'Create the QTP Application object
Set App = CreateObject("QuickTest.Application")

'If QTP is notopen then open it
If App.launched <> True then
   App.Launch
End If

'Make the QuickTest application visible
'App.Visible = True

'Set QuickTest run options
'Instruct QuickTest to perform next step when error occurs

App.Options.Run.RunMode = "Fast"
App.Options.Run.ViewResults = False

'Open the test in read-only mode
App.Open "C:\Users\utpal\Desktop\CI_App\FlightApp_UI", True

'set run settings for the test
Set qtTest = App.Test

'Run the test
qtTest.Run

'Check the results of the test run
'MsgBox qtTest.LastRunResults.Status

' Close the test
qtTest.Close

'Close QTP
App.quit

'Release Object
Set qtTest = Nothing
Set App = Nothing