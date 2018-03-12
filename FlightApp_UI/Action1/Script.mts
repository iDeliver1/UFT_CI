'SystemUtil.Run "C:\Users\utpal\Desktop\CI_App\FlightApp.exe"

UIAWindow("Login").UIAEdit("txtUser").SetValue DataTable.Value("Username","Action1")
UIAWindow("Login").UIAEdit("txtPass").SetValue DataTable.Value("Password","Action1")
UIAWindow("Login").UIAButton("Login").Click

UIAWindow("Booking").UIAComboBox("cmbFrom").Select DataTable.Value("From_City","Action1")
UIAWindow("Booking").UIAComboBox("cmbTo").Select DataTable.Value("To_City","Action1")

'UIAWindow("Booking").UIAObject("Friday, March 09, 2018").Click
'Date 
'UIAWindow("Booking").UIAObject("Friday, March 09, 2018").Click

UIAWindow("Booking").UIAComboBox("cmbTicket").Select DataTable.Value("Passenger_no.","Action1")
UIAWindow("Booking").UIAComboBox("cmbClass").Select DataTable.Value("Class","Action1")
UIAWindow("Booking").UIAButton("Find Flight").Click
UIAWindow("Booking").UIAButton("Book").Click

UIAWindow("Booking").UIAWindow("Window").UIAButton("OK").Click
UIAWindow("Booking").Close
