def on_received_string(receivedString):
    global Data
    Data = receivedString
radio.on_received_string(on_received_string)

Data = ""
radio.set_group(1)
Prioritaire = -1
Etat = 0
Etat = control.millis()

def on_forever():
    pass
basic.forever(on_forever)
