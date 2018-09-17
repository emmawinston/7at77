Gibber.scale.mode = 'Phrygian'
E = Euclid
aa = FM({ attack:ms(10), decay:ms(1000), maxVoices: 6})
c = Pluck()
r = Reverb({ roomSize: Add( .75, Sine( .05, .245 )._ ) })
a.fx.add( r )

score = Score([
  0, // start immediately
  function() {

  s = Seq({
    note:[0,2],
    durations:[1/16],
    amp:[.02],
    pan:[-0.2, 0, 0.2, 0],
    target:aa})

  console.log('pattern 1')
  },
  measures(8), // wait 8 measures, then execute next function
  function() {

  t = Seq({
    note:[2,4],
    durations:[1/16],
    amp:[.02],
    pan:[0.2, 0.1, -0.2, -0.1],
    target:aa})

  console.log('pattern 2')
  },
  measures(8), // wait 8 measures, then execute next function
  function() {

  u = Seq({
    note:[0,2,4,5],
    durations:[1/16],
    amp:[.1],
    pan:[-0.6, -0.4, -0.2, 0, 0.3, 0.6, 0.3, 0, -0.4],
    target:b})
    
  console.log('pluck')
  }
]).start()








d = Drums( 'xoxo')
	.amp(.3)

b = SoundFont( 'kalimba' )
	.amp(.8)
	.chord.seq( Rndi(0,8,3), E( 5,9,1/16 ) )


// 1732 bars in 77 minutes