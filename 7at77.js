Gibber.scale.mode = 'Phrygian'

E = Euclid

a = FM({ attack:ms(10), decay:ms(1000), maxVoices: 3})
	.amp(.2)
	.note.seq( [0,2], 1/16 )

b = SoundFont( 'kalimba' )
	.amp(.8)
	.chord.seq( Rndi(0,8,3), E( 5,9,1/16 ) )

d = Drums( 'xoxo')
	.amp(.3)