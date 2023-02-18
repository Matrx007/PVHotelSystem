
import db
import json

print("getRooms()")
print(json.dumps(db.getRooms(), indent=2))

print("getAppointments(1)")
print(db.getAppointments(1))

print("getMyAppointments(1)")
print(db.getMyAppointments(1))

print("loginUser('rainis', 'undefined')")
print(db.loginUser('rainis', 'undefined'))

print("getSessionToken('rainis')")
print(db.getSessionToken('rainis'))