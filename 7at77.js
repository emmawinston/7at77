Gibber.scale.mode = 'Phrygian'
E = Euclid
aa = FM({ attack:ms(10), decay:ms(1000), maxVoices: 6})
b = Pluck()
//c is kalimba
d = Synth2( 'pad2', { resonance:3 })

// REVERB
r = Reverb({ roomSize: Add( .75, Sine( .05, .245 )._ ) })
a.fx.add( r )
b.fx.add( r )
d.fx.add( Delay() )

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
    pan:[-1, -0.8, -0.6, -0.4, -0.2, 0, 0.3, 0.6, 0.3, 0, -0.4, -0.6, -0.8],
    target:b})
    
  console.log('pluck')
  },
  
  measures(8),
  
  function() {

  v = Seq({
    note:[7,6,4],
    durations:[1/2,1/2,2],
    amp:[.4],
    target:d})
    
  console.log('melody')
  },
  
  measures(16),
  
  function() {
    Master.fadeOut ( 4 )
    console.log('fade to end')
  }
]).start()

// this is almost exactly 3 minutes so far 





// extra bits not in use yet

d = Drums( 'xoxo')
	.amp(.3)

b = SoundFont( 'kalimba' )
	.amp(.9)
	.chord.seq( Rndi(0,8,3), E( 5,9,1/16 ) )

function() {
    
  v = SoundFont( 'kalimba' )
	.amp(.9)
	.chord.seq( Rndi(0,7,3), E( 5,9,1/16 ) )
    
  }


// 1732 bars in 77 minutes