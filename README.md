# WebTheramin
A... uh... web theramin. Increase X axis to decrease pitch, increase Y axis for gain to approach 1 (loudness to increase).



#Some proofs
## Canvas draw pixel calculator

Because algebra is the best, I'm going to add some proofs here. And, it might help my sanity down the line.

The below proof was used to determine the spacing for octave lines that are drawn to my document.

There's a variable 'S' in the equation that represents what I called a step,
which is how many pixels the mouse must transverse to increase the pitch by a half step.
In modern western music, 12 half steps make an octave, so I made it such that 12*S pixels is an octave.

F_{low} represents the lowest possible frequency/note, mouse x position 0.

F_N represent the new frequency.

N_{octave} represents any coefficient that, when it divides into F_{low}, produces an octave.
Essentially, it is the modulous where x = N * 12 * S, where N is any integer............ AKA it is 2,4,8,16....etc.


![Alt Text](https://github.com/C-Powers/WebTheramin/raw/master/images/CodeCogsEqn.gif)

#TODOs
1  More interesting and/or adjustable wave forms
