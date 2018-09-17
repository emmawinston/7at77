Gibber.scale.mode = 'Phrygian'

E = Euclid

a = FM({ attack:ms(10), decay:ms(1000), maxVoices: 3})
r = Reverb({ roomSize: Add( .78, Sine( .05, .245 )._ ) })
a.fx.add( r )

future( function() {

s = Seq({
  note:[0,2],
  durations:[1/16],
  amp:[.2],
  pan:[-0.6, -0.4, -0.2, 0, 0.3, 0.6, 0.3, 0, -0.4],
  target:a})

}, 2);






d = Drums( 'xoxo')
	.amp(.3)

b = SoundFont( 'kalimba' )
	.amp(.8)
	.chord.seq( Rndi(0,8,3), E( 5,9,1/16 ) )