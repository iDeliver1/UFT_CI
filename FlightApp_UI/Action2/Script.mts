Dim qtpApp
Dim qtpRepositories 
Set qtpApp = CreateObject("QuickTest.Application") 
Set qtpRepositories = qtpApp.Test.Actions("Flight_Booking").ObjectRepositories 
qtpRepositories.Add(Environment.Value("TestDir")&"\Repository1.tsr")

If UIAWindow("Booking").UIARadioButton("One way").Exist(5) Then
	UIAWindow("Booking").UIARadioButton("One way").Select
else
	reporter.ReportEvent micFail,"Select radio button" ,"One way button is not selected."
End If

If UIAWindow("Booking").UIAComboBox("cmbFrom").Exist(5) Then
	if not UIAWindow("Booking").UIAComboBox("cmbFrom").GetROProperty("text")="None" then
		UIAWindow("Booking").UIAComboBox("cmbFrom").Select DataTable.Value("From_City")
	else
		reporter.ReportEvent micFail,"Select value" ,"No value to be selected"
		exittest
	End if 	
else
	reporter.ReportEvent micFail,"Enter value" ,"Source is not enter."	
End If

If UIAWindow("Booking").UIAComboBox("cmbTo").Exist(5) Then
	if not UIAWindow("Booking").UIAComboBox("cmbTo").GetROProperty("text")="None" then
		UIAWindow("Booking").UIAComboBox("cmbTo").Select DataTable.Value("To_City")	
	else
		reporter.ReportEvent micFail,"Select value" ,"No value to be selected"
		exittest
	End if 	
else
	reporter.ReportEvent micFail,"Enter value" ,"Destination is not enter."
End If

If UIAWindow("Booking").UIAComboBox("cmbTicket").Exist(5) Then
	UIAWindow("Booking").UIAComboBox("cmbTicket").Select DataTable.Value("Passenger_no.")
else
	reporter.ReportEvent micFail,"Enter value" ,"Number of ticket is not enter."	
End If

If UIAWindow("Booking").UIAEdit("dTPicker").Exist(5) Then	
	UIAWindow("Booking").UIAEdit("dTPicker").SetValue DataTable.Value("Date")
else
	reporter.ReportEvent micFail,"Enter value" ,"Travelling date is not enter."	
End If

If UIAWindow("Booking").UIAComboBox("To").UIAEdit("To").Exist(5) Then
	UIAWindow("Booking").UIAComboBox("To").UIAEdit("To").SetValue DataTable.Value("Class")
else
	reporter.ReportEvent micFail,"Enter value" ,"Travelling class in not enter."
End If

If UIAWindow("Booking").UIAButton("Find Flight").Exist(5) Then
	UIAWindow("Booking").UIAButton("Find Flight").Click
else
	reporter.ReportEvent micFail,"Click on button" ,"Find Flight button is not display."	
End If

If UIAWindow("Booking").UIAButton("Book").Exist(5) Then
	UIAWindow("Booking").UIAButton("Book").Click
else
	reporter.ReportEvent micFail,"Click on button" ,"Book button is not display."	
End If

If UIAWindow("Booking").UIAWindow("Window").UIAButton("OK").Exist(5) Then
	UIAWindow("Booking").UIAWindow("Window").UIAButton("OK").Click
else
	reporter.ReportEvent micFail,"Click on button" ,"OK button is not display."
End If

UIAWindow("Booking").Close

If UIAWindow("Booking").Exist(5) Then
	reporter.ReportEvent micFail,"Window close" ,"Booking window is not close."
End If

SystemUtil.CloseProcessByName("FlightApp.exe")
