'SystemUtil.Run "C:\Users\utpal\Desktop\CI_App\FlightApp.exe"

If UIAWindow("Login").UIAEdit("txtUser").Exist(5) Then
	UIAWindow("Login").UIAEdit("txtUser").SetValue DataTable.Value("Username")	
else
	reporter.ReportEvent micFail,"Enter value" ,"Username in not enter."
End If

If UIAWindow("Login").UIAEdit("txtPass").Exist(5) Then
	UIAWindow("Login").UIAEdit("txtPass").SetValue DataTable.Value("Password")	
else
	reporter.ReportEvent micFail,"Enter value" ,"Password in not enter."
End If

If UIAWindow("Login").UIAButton("Login").Exist(5) Then
	UIAWindow("Login").UIAButton("Login").Click	
else
	reporter.ReportEvent micFail,"Click on button" ,"Login button is not display."
End If

