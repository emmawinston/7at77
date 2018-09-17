Gibber.scale.mode = 'Phrygian'

a = FM({ maxVoices: 3})
	.amp(.2)
	.note.seq()

b = SoundFont( 'kalimba' )
	.amp(.5)
	.chord.seq( Rndi(0,8,3), E( 5,9,1/16 ) )

d = Drums( 'xoxo')
	.amp(.3)